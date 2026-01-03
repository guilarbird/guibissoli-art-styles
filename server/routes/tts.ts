import { Router } from "express";
import { getCacheKey, getCachedAudio, setCachedAudio, getCacheStats } from "../lib/audioCache";

const router = Router();

// Eleven Labs voices optimized for each language
// Using multilingual turbo model with language-appropriate voices
const VOICES = {
  // Rachel - clear English voice, good for narration
  en: "21m00Tcm4TlvDq8ikWAM",
  // Antoni - multilingual voice that works well with Portuguese
  pt: "ErXwobaYiN019PkySvjV",
  // Bella - works well with Chinese/Mandarin
  zh: "EXAVITQu4vr4xnSDxMaL",
};

// Audio normalization settings
const AUDIO_SETTINGS = {
  stability: 0.5,
  similarity_boost: 0.75,
  style: 0.0,
  use_speaker_boost: true,
};

/**
 * Main TTS endpoint with caching and streaming
 */
router.post("/generate", async (req, res) => {
  try {
    const { text, language = "en" } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    
    if (!apiKey) {
      return res.status(503).json({ 
        error: "TTS service not configured",
        fallback: true,
        message: "Use browser native TTS as fallback"
      });
    }

    const voiceId = VOICES[language as keyof typeof VOICES] || VOICES.en;
    
    // Truncate text to Eleven Labs limit (5000 chars)
    const truncatedText = text.substring(0, 5000);
    
    // Check cache first
    const cacheKey = getCacheKey(truncatedText, language, voiceId);
    const cachedAudio = await getCachedAudio(cacheKey);
    
    if (cachedAudio) {
      console.log(`TTS cache hit: language=${language}, key=${cacheKey.substring(0, 8)}`);
      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Cache-Control", "public, max-age=604800"); // 7 days
      res.setHeader("X-Cache", "HIT");
      return res.send(cachedAudio);
    }

    console.log(`TTS generating: language=${language}, voiceId=${voiceId}, textLength=${truncatedText.length}`);

    // Use streaming endpoint with maximum latency optimization
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream?optimize_streaming_latency=4&output_format=mp3_22050_32`,
      {
        method: "POST",
        headers: {
          "Accept": "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text: truncatedText,
          model_id: "eleven_turbo_v2_5", // Fastest model
          voice_settings: AUDIO_SETTINGS,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Eleven Labs API error:", response.status, errorText);
      
      return res.status(503).json({ 
        error: "TTS service unavailable",
        fallback: true,
        message: "Use browser native TTS as fallback",
        details: `Status: ${response.status}`
      });
    }

    // Collect the full response for caching
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = Buffer.from(arrayBuffer);
    
    // Cache the audio for future requests
    await setCachedAudio(cacheKey, audioBuffer, {
      language,
      textLength: truncatedText.length,
      voiceId,
    });

    console.log(`TTS success: language=${language}, audioSize=${audioBuffer.length}`);
    
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=604800"); // 7 days
    res.setHeader("X-Cache", "MISS");
    res.send(audioBuffer);

  } catch (error) {
    console.error("TTS generation error:", error);
    res.status(503).json({ 
      error: "TTS service error",
      fallback: true,
      message: "Use browser native TTS as fallback"
    });
  }
});

/**
 * Quick preview TTS - shorter text for faster loading
 */
router.post("/quick", async (req, res) => {
  try {
    const { text, language = "en" } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    
    if (!apiKey) {
      return res.status(503).json({ 
        error: "TTS service not configured",
        fallback: true,
      });
    }

    const voiceId = VOICES[language as keyof typeof VOICES] || VOICES.en;
    const shortText = text.substring(0, 500);
    
    // Check cache
    const cacheKey = getCacheKey(shortText, language + "_quick", voiceId);
    const cachedAudio = await getCachedAudio(cacheKey);
    
    if (cachedAudio) {
      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Cache-Control", "public, max-age=604800");
      res.setHeader("X-Cache", "HIT");
      return res.send(cachedAudio);
    }

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream?optimize_streaming_latency=4&output_format=mp3_22050_32`,
      {
        method: "POST",
        headers: {
          "Accept": "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text: shortText,
          model_id: "eleven_turbo_v2_5",
          voice_settings: AUDIO_SETTINGS,
        }),
      }
    );

    if (!response.ok) {
      return res.status(503).json({ 
        error: "TTS service unavailable",
        fallback: true,
      });
    }

    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = Buffer.from(arrayBuffer);
    
    await setCachedAudio(cacheKey, audioBuffer, {
      language: language + "_quick",
      textLength: shortText.length,
      voiceId,
    });

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=604800");
    res.setHeader("X-Cache", "MISS");
    res.send(audioBuffer);

  } catch (error) {
    console.error("Quick TTS error:", error);
    res.status(503).json({ 
      error: "TTS service error",
      fallback: true,
    });
  }
});

/**
 * Get cache statistics
 */
router.get("/cache/stats", (req, res) => {
  const stats = getCacheStats();
  res.json(stats);
});

/**
 * Get available voices
 */
router.get("/voices", async (req, res) => {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    
    if (!apiKey) {
      return res.status(503).json({ error: "TTS service not configured" });
    }

    const response = await fetch("https://api.elevenlabs.io/v1/voices", {
      headers: {
        "xi-api-key": apiKey,
      },
    });

    if (!response.ok) {
      return res.status(503).json({ error: "Failed to fetch voices" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching voices:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * Test endpoint to check API key and voice availability
 */
router.get("/test", async (req, res) => {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    
    if (!apiKey) {
      return res.json({ 
        status: "error",
        message: "API key not configured",
        hasKey: false
      });
    }

    const response = await fetch("https://api.elevenlabs.io/v1/user", {
      headers: {
        "xi-api-key": apiKey,
      },
    });

    if (response.ok) {
      const userData = await response.json();
      const cacheStats = getCacheStats();
      return res.json({
        status: "ok",
        hasKey: true,
        subscription: userData.subscription?.tier || "unknown",
        voices: VOICES,
        cache: cacheStats,
      });
    } else {
      return res.json({
        status: "error",
        hasKey: true,
        httpStatus: response.status,
        message: "API key validation failed"
      });
    }
  } catch (error) {
    res.json({
      status: "error",
      message: String(error)
    });
  }
});

export default router;
