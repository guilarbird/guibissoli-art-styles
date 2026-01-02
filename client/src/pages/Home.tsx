import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import DataSection from '@/components/DataSection';
import FinancialsSection from '@/components/FinancialsSection';
import StrategySection from '@/components/StrategySection';
import PodcastPlayer from '@/components/PodcastPlayer';
import { motion } from 'framer-motion';

/**
 * Design Philosophy: Tech Noir Elegance
 * - Iron Man meets Wall Street aesthetic
 * - Dark theme with cyan (primary) and gold (accent) highlights
 * - HUD-inspired elements with subtle glassmorphism
 * - Professional data presentation with playful micro-interactions
 */
export default function Home() {
  const [isPodcastExpanded, setIsPodcastExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 glass-card border-b border-border/50"
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-sm font-bold text-background">C</span>
            </div>
            <span className="font-semibold">Coins.xyz</span>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Brazil</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#metrics" className="text-muted-foreground hover:text-foreground transition-colors">Metrics</a>
            <a href="#financials" className="text-muted-foreground hover:text-foreground transition-colors">Financials</a>
            <a href="#strategy" className="text-muted-foreground hover:text-foreground transition-colors">Strategy</a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-mono-data">FY2025</span>
            <div className="w-2 h-2 rounded-full bg-green-500 pulse-live" />
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        
        <div id="metrics">
          <DataSection />
        </div>
        
        <div id="financials">
          <FinancialsSection />
        </div>
        
        <div id="strategy">
          <StrategySection />
        </div>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-sm font-bold text-background">C</span>
                </div>
                <div>
                  <p className="font-semibold">Coins.xyz Brazil</p>
                  <p className="text-xs text-muted-foreground">Annual Report FY2025</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Last updated: January 2026 • Version 15
              </p>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Confidential</span>
                <span>•</span>
                <span>For Board Review</span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Podcast Player */}
      <PodcastPlayer 
        isExpanded={isPodcastExpanded}
        onToggleExpand={() => setIsPodcastExpanded(!isPodcastExpanded)}
      />
    </div>
  );
}
