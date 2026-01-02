/**
 * AudioPlayer Component - Text-to-Speech
 * Uses Eleven Labs API with streaming for fast response
 * Falls back to browser TTS if API unavailable
 * Supports PT, EN, and ZH languages
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, Headphones, Loader2 } from 'lucide-react';

interface AudioPlayerProps {
  textPt: string;
  textEn?: string;
  textZh?: string;
  title: string;
}

type Language = 'pt' | 'en' | 'zh';

export default function AudioPlayer({ textPt, textEn, textZh, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [language, setLanguage] = useState<Language>('pt');
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [useElevenLabs, setUseElevenLabs] = useState(true);
  const [rate, setRate] = useState(1);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const getText = useCallback((lang: Language) => {
    switch (lang) {
      case 'pt': return textPt;
      case 'en': return textEn || textPt;
      case 'zh': return textZh || textEn || textPt;
    }
  }, [textPt, textEn, textZh]);

  const text = getText(language);

  // Get available voices for browser TTS
  const getVoice = (lang: Language) => {
    const voices = speechSynthesis.getVoices();
    switch (lang) {
      case 'pt':
        return voices.find(v => v.lang.includes('pt-BR')) || 
               voices.find(v => v.lang.includes('pt')) ||
               voices[0];
      case 'en':
        return voices.find(v => v.lang.includes('en-US') && v.name.includes('Google')) ||
               voices.find(v => v.lang.includes('en-US')) ||
               voices.find(v => v.lang.includes('en')) ||
               voices[0];
      case 'zh':
        return voices.find(v => v.lang.includes('zh-CN')) ||
               voices.find(v => v.lang.includes('zh')) ||
               voices[0];
    }
  };

  // Generate audio using Eleven Labs streaming API
  const generateElevenLabsAudio = async () => {
    setIsLoading(true);
    
    try {
      // Create audio element that can play streaming audio
      const audio = new Audio();
      audioRef.current = audio;
      
      const response = await fetch('/api/tts/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text.substring(0, 2500), // Limit text length
          language,
        }),
      });

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
          const errorData = await response.json();
          if (errorData.fallback) {
            console.log('Eleven Labs unavailable, using browser TTS');
            setUseElevenLabs(false);
            setIsLoading(false);
            speakWithBrowserTTS();
            return;
          }
        }
        throw new Error('TTS generation failed');
      }

      // Create blob URL from streaming response
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      audio.src = url;
      audio.playbackRate = rate;
      
      audio.ontimeupdate = () => {
        if (audio.duration && !isNaN(audio.duration)) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };
      
      audio.onended = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setProgress(100);
        URL.revokeObjectURL(url);
        setTimeout(() => setProgress(0), 1000);
      };
      
      audio.onerror = (e) => {
        console.log('Audio error, falling back to browser TTS', e);
        URL.revokeObjectURL(url);
        setUseElevenLabs(false);
        setIsLoading(false);
        speakWithBrowserTTS();
      };

      audio.oncanplaythrough = () => {
        setIsLoading(false);
      };

      // Start playing as soon as we have enough data
      audio.oncanplay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
          setIsPaused(false);
          setIsLoading(false);
        } catch (playError) {
          console.error('Play error:', playError);
          setIsLoading(false);
        }
      };

      // Load the audio
      audio.load();
      
    } catch (error) {
      console.error('Eleven Labs error:', error);
      setUseElevenLabs(false);
      setIsLoading(false);
      speakWithBrowserTTS();
    }
  };

  // Browser TTS fallback
  const speakWithBrowserTTS = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = getVoice(language);
    utterance.lang = language === 'pt' ? 'pt-BR' : language === 'zh' ? 'zh-CN' : 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1;

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        const progressPercent = (event.charIndex / text.length) * 100;
        setProgress(progressPercent);
      }
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      setTimeout(() => setProgress(0), 1000);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const speak = () => {
    if (useElevenLabs) {
      generateElevenLabsAudio();
    } else {
      speakWithBrowserTTS();
    }
  };

  const togglePlay = () => {
    if (isLoading) return;
    
    if (useElevenLabs && audioRef.current) {
      if (isPlaying && !isPaused) {
        audioRef.current.pause();
        setIsPaused(true);
      } else if (isPlaying && isPaused) {
        audioRef.current.play();
        setIsPaused(false);
      } else {
        speak();
      }
    } else {
      // Browser TTS
      if (isPlaying && !isPaused) {
        speechSynthesis.pause();
        setIsPaused(true);
      } else if (isPlaying && isPaused) {
        speechSynthesis.resume();
        setIsPaused(false);
      } else {
        speak();
      }
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    setIsLoading(false);
  };

  const changeLanguage = (newLang: Language) => {
    if (newLang !== language) {
      stop();
      setLanguage(newLang);
      setUseElevenLabs(true); // Reset to try Eleven Labs for new language
    }
  };

  const changeRate = () => {
    const rates = [0.75, 1, 1.25, 1.5];
    const currentIndex = rates.indexOf(rate);
    const nextIndex = (currentIndex + 1) % rates.length;
    const newRate = rates[nextIndex];
    setRate(newRate);
    
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Load voices
  useEffect(() => {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => {
      speechSynthesis.getVoices();
    };
  }, []);

  // Estimated reading time
  const wordCount = text.split(/\s+/).length;
  const estimatedMinutes = Math.ceil(wordCount / (150 * rate));

  const languageLabels: Record<Language, { flag: string; name: string }> = {
    pt: { flag: '🇧🇷', name: 'Português' },
    en: { flag: '🇺🇸', name: 'English' },
    zh: { flag: '🇨🇳', name: '中文' },
  };

  // Check which languages are available
  const availableLanguages = (['pt', 'en', 'zh'] as Language[]).filter(lang => {
    if (lang === 'pt') return true;
    if (lang === 'en') return !!textEn;
    if (lang === 'zh') return !!textZh;
    return false;
  });

  return (
    <div className="mb-8">
      {/* Collapsed Toggle Button */}
      {!isExpanded && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
        >
          <Headphones size={20} className="text-primary" />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            Listen to this article
          </span>
          <span className="text-xs meta-mono text-primary">~{estimatedMinutes} min</span>
        </motion.button>
      )}

      {/* Expanded Player */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-card border border-border rounded-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Headphones size={18} className="text-primary" />
                  <span className="text-sm font-medium">Audio Player</span>
                  <span className="text-xs meta-mono text-muted-foreground">
                    ({useElevenLabs ? 'Eleven Labs' : 'Browser TTS'})
                  </span>
                </div>
                <button
                  onClick={() => {
                    stop();
                    setIsExpanded(false);
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  minimize
                </button>
              </div>

              {/* Language Toggle */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-xs text-muted-foreground">Language:</span>
                {availableLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                      language === lang
                        ? 'bg-primary/20 border-primary text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/50'
                    }`}
                  >
                    {languageLabels[lang].flag} {languageLabels[lang].name}
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs meta-mono text-muted-foreground">
                    {Math.round(progress)}%
                  </span>
                  <span className="text-xs meta-mono text-muted-foreground">
                    ~{estimatedMinutes} min
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                {/* Play/Pause Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  disabled={isLoading}
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : isPlaying && !isPaused ? (
                    <Pause size={20} />
                  ) : (
                    <Play size={20} className="ml-0.5" />
                  )}
                </motion.button>

                {/* Restart Button */}
                <button
                  onClick={stop}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  title="Restart"
                >
                  <SkipBack size={18} />
                </button>

                {/* Speed Control */}
                <button
                  onClick={changeRate}
                  className="px-2 py-1 text-xs meta-mono text-muted-foreground hover:text-foreground border border-border rounded transition-colors"
                >
                  {rate}x
                </button>
              </div>

              {/* Note about TTS */}
              {!useElevenLabs && (
                <p className="mt-4 text-xs text-muted-foreground">
                  <span className="text-primary">Note:</span> Using browser TTS. Premium voices available in production.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
