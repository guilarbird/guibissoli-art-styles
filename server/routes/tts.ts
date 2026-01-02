import { Router } from "express";

const router = Router();

// Eleven Labs voices for different languages
const VOICES = {
  en: "21m00Tcm4TlvDq8ikWAM", // Rachel - English
  pt: "pNInz6obpgDQGcFmaJgB", // Adam - works well for Portuguese
  zh: "ThT5KcBeYPX3keUQqHPh", // Dorothy - works for Chinese
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
        message: "Use browser native TTS as fallback"
      });
    }

    // Stream the audio response
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=86400"); // Cache for 24h
    
    const arrayBuffer = await response.arrayBuffer();
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

export default router;
