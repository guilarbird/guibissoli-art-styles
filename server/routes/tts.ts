import { Router } from "express";

const router = Router();

// Eleven Labs voices for different languages
// Using multilingual voices that work well across languages
const VOICES = {
  // Rachel - clear English voice, good for narration
  en: "21m00Tcm4TlvDq8ikWAM",
  // Antoni - multilingual voice that works well with Portuguese
  pt: "ErXwobaYiN019PkySvjV",
  // Bella - works well with Chinese/Mandarin
  zh: "EXAVITQu4vr4xnSDxMaL",
};

// Streaming Text-to-Speech endpoint using Eleven Labs
// Uses streaming API with latency optimization for faster response
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

    // Truncate text to reasonable length (Eleven Labs has limits)
    const truncatedText = text.substring(0, 2500);

    console.log(`TTS streaming request: language=${language}, voiceId=${voiceId}, textLength=${truncatedText.length}`);

    // Use streaming endpoint with latency optimization
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream?optimize_streaming_latency=3&output_format=mp3_22050_32`,
      {
        method: "POST",
        headers: {
          "Accept": "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text: truncatedText,
          model_id: "eleven_turbo_v2_5", // Faster turbo model
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

    // Stream the audio response directly to client
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=86400"); // Cache for 24h
    res.setHeader("Transfer-Encoding", "chunked");
    
    // Pipe the stream directly
    if (response.body) {
      const reader = response.body.getReader();
      
      const pump = async () => {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            res.end();
            console.log(`TTS streaming complete: language=${language}`);
            break;
          }
          res.write(Buffer.from(value));
        }
      };
      
      pump().catch((err) => {
        console.error("Stream error:", err);
        res.end();
      });
    } else {
      // Fallback if body is not readable stream
      const arrayBuffer = await response.arrayBuffer();
      console.log(`TTS success: language=${language}, audioSize=${arrayBuffer.byteLength}`);
      res.send(Buffer.from(arrayBuffer));
    }

  } catch (error) {
    console.error("TTS generation error:", error);
    res.status(503).json({ 
      error: "TTS service error",
      fallback: true,
      message: "Use browser native TTS as fallback"
    });
  }
});

// Quick TTS endpoint - returns smaller audio for faster loading
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

    // Only first 500 chars for quick preview
    const shortText = text.substring(0, 500);

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
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      }
    );

    if (!response.ok) {
      return res.status(503).json({ 
        error: "TTS service unavailable",
        fallback: true,
      });
    }

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=86400");
    
    const arrayBuffer = await response.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));

  } catch (error) {
    console.error("Quick TTS error:", error);
    res.status(503).json({ 
      error: "TTS service error",
      fallback: true,
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
