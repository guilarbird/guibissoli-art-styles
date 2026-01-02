import { Router } from "express";

const router = Router();

// Eleven Labs voices for different languages
// Using multilingual voices that work well across languages
const VOICES = {
  // Rachel - clear English voice, good for narration
  en: "21m00Tcm4TlvDq8ikWAM",
  // Antoni - multilingual voice that works well with Portuguese
  // Alternative: Flavio Francisco (x6uRgOliu4lpcrqMH3s1) for native Brazilian
  pt: "ErXwobaYiN019PkySvjV",
  // Bella - works well with Chinese/Mandarin
  zh: "EXAVITQu4vr4xnSDxMaL",
};

// Text-to-Speech endpoint using Eleven Labs
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

    console.log(`TTS request: language=${language}, voiceId=${voiceId}, textLength=${text.length}`);

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: "POST",
        headers: {
          "Accept": "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Eleven Labs API error:", response.status, errorText);
      
      // Return fallback signal for frontend to use browser TTS
      return res.status(503).json({ 
        error: "TTS service unavailable",
        fallback: true,
        message: "Use browser native TTS as fallback",
        details: `Status: ${response.status}`
      });
    }

    // Stream the audio response
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=86400"); // Cache for 24h
    
    const arrayBuffer = await response.arrayBuffer();
    console.log(`TTS success: language=${language}, audioSize=${arrayBuffer.byteLength}`);
    res.send(Buffer.from(arrayBuffer));

  } catch (error) {
    console.error("TTS generation error:", error);
    res.status(503).json({ 
      error: "TTS service error",
      fallback: true,
      message: "Use browser native TTS as fallback"
    });
  }
});

// Get available voices
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

// Test endpoint to check API key and voice availability
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

    // Test with a simple request
    const response = await fetch("https://api.elevenlabs.io/v1/user", {
      headers: {
        "xi-api-key": apiKey,
      },
    });

    if (response.ok) {
      const userData = await response.json();
      return res.json({
        status: "ok",
        hasKey: true,
        subscription: userData.subscription?.tier || "unknown",
        voices: VOICES
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
