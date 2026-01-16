import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PodcastPlayerProps {
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export default function PodcastPlayer({ isExpanded = false, onToggleExpand }: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    audio.currentTime = (newProgress / 100) * audio.duration;
    setProgress(newProgress);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <audio ref={audioRef} src="/podcast_retrospective.wav" preload="metadata" />
      
      <div 
        className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${
          isExpanded ? 'w-80' : 'w-72'
        }`}
      >
        {/* Header with Host Avatar */}
        <div 
          className="flex items-center gap-3 p-4 cursor-pointer hover:bg-white/5 transition-colors"
          onClick={onToggleExpand}
        >
          {/* Avatar with pulse effect */}
          <div className="relative">
            <div className={`absolute inset-0 rounded-full bg-primary/30 ${isPlaying ? 'pulse-live' : ''}`} />
            <img 
              src="/images/ai_host_avatar.png" 
              alt="AI Host"
              className="w-12 h-12 rounded-full object-cover relative z-10 border-2 border-primary/50"
            />
            {isPlaying && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background z-20 pulse-live" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">AI Host</p>
            <p className="text-xs text-muted-foreground">Retrospective 2025</p>
          </div>

          {/* Audio Waveform Visualization */}
          <div className="flex items-center gap-0.5 h-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-primary rounded-full"
                animate={isPlaying ? {
                  height: [8, 16, 8, 20, 8],
                } : { height: 8 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div 
          className="h-1 bg-muted cursor-pointer group"
          onClick={handleProgressClick}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-accent relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-xs font-mono-data text-muted-foreground">
            {formatTime((progress / 100) * duration)}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 glow-cyan"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
            </button>
          </div>

          <span className="text-xs font-mono-data text-muted-foreground">
            {formatTime(duration)}
          </span>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-border overflow-hidden"
            >
              <div className="p-4 space-y-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Listen to the AI-powered summary of Coins Brazil's extraordinary 2025 journey - 
                  from 17.8x growth to regulatory milestones.
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-primary/20 text-primary">AI Generated</span>
                  <span className="px-2 py-1 rounded-full bg-accent/20 text-accent">2:15 min</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
