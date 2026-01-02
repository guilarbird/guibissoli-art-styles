/**
 * AudioPlayer Component - Text-to-Speech
 * Placeholder using browser's native Web Speech API
 * Ready for Eleven Labs integration later
 */
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, Headphones } from 'lucide-react';

interface AudioPlayerProps {
  textPt: string;
  textEn?: string;
  title: string;
}

export default function AudioPlayer({ textPt, textEn, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [rate, setRate] = useState(1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const textRef = useRef<string>('');
  const charIndexRef = useRef(0);

  const text = language === 'pt' ? textPt : (textEn || textPt);

  // Get available voices
  const getVoice = (lang: 'pt' | 'en') => {
    const voices = speechSynthesis.getVoices();
    if (lang === 'pt') {
      // Prefer Brazilian Portuguese voices
      return voices.find(v => v.lang.includes('pt-BR')) || 
             voices.find(v => v.lang.includes('pt')) ||
             voices[0];
    } else {
      // Prefer US English voices
      return voices.find(v => v.lang.includes('en-US') && v.name.includes('Google')) ||
             voices.find(v => v.lang.includes('en-US')) ||
             voices.find(v => v.lang.includes('en')) ||
             voices[0];
    }
  };

  const speak = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    textRef.current = text;
    charIndexRef.current = 0;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = getVoice(language);
    utterance.lang = language === 'pt' ? 'pt-BR' : 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = isMuted ? 0 : 1;

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        charIndexRef.current = event.charIndex;
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

  const togglePlay = () => {
    if (isPlaying && !isPaused) {
      speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPlaying && isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
    } else {
      speak();
    }
  };

  const stop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  };

  const changeLanguage = (newLang: 'pt' | 'en') => {
    if (newLang !== language) {
      stop();
      setLanguage(newLang);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (utteranceRef.current) {
      utteranceRef.current.volume = isMuted ? 1 : 0;
    }
  };

  const changeRate = () => {
    const rates = [0.75, 1, 1.25, 1.5];
    const currentIndex = rates.indexOf(rate);
    const nextIndex = (currentIndex + 1) % rates.length;
    setRate(rates[nextIndex]);
    
    // If playing, restart with new rate
    if (isPlaying) {
      stop();
      setTimeout(() => speak(), 100);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
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
                  <span className="text-xs meta-mono text-muted-foreground">(Browser TTS)</span>
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
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-muted-foreground">Language:</span>
                <button
                  onClick={() => changeLanguage('pt')}
                  className={`px-3 py-1 text-xs rounded border transition-all ${
                    language === 'pt'
                      ? 'bg-primary/20 text-primary border-primary'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  🇧🇷 Português
                </button>
                {textEn && (
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-1 text-xs rounded border transition-all ${
                      language === 'en'
                        ? 'bg-primary/20 text-primary border-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    🇺🇸 English
                  </button>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-1 bg-border rounded-full overflow-hidden">
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  >
                    {isPlaying && !isPaused ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                  </button>

                  {/* Stop */}
                  <button
                    onClick={stop}
                    disabled={!isPlaying}
                    className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
                  >
                    <SkipBack size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  {/* Speed */}
                  <button
                    onClick={changeRate}
                    className="px-2 py-1 text-xs meta-mono border border-border rounded hover:border-primary/50 transition-colors"
                  >
                    {rate}x
                  </button>

                  {/* Mute */}
                  <button
                    onClick={toggleMute}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
              </div>

              {/* Eleven Labs Coming Soon */}
              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  <span className="text-primary">Coming soon:</span> Premium voices with Eleven Labs
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
