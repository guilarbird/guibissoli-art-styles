/**
 * Navigation Component - Terminal Aesthetic
 * Path-style navigation with subtle terminal references
 * Bilingual support (EN/PT)
 */

import { Link, useLocation } from 'wouter';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/writings', label: t('nav.writings') },
    { path: '/about', label: t('nav.about') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-primary font-mono text-lg">{'>'}</span>
            <span className="font-display font-semibold text-lg tracking-tight">
              gui<span className="text-primary">.dev</span>
            </span>
            <span className="cursor-blink text-primary font-mono">_</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-path link-hover py-2 transition-colors ${
                  location === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language selector */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded hover:border-primary"
            >
              <span className={language === 'en' ? 'text-primary' : ''}>EN</span>
              <span className="text-border">/</span>
              <span className={language === 'pt' ? 'text-primary' : ''}>PT</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="container py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 nav-path transition-colors ${
                    location === item.path
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language selector */}
              <div className="pt-4 border-t border-border">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 py-3 text-sm font-mono text-muted-foreground"
                >
                  <span className={language === 'en' ? 'text-primary' : ''}>English</span>
                  <span className="text-border">|</span>
                  <span className={language === 'pt' ? 'text-primary' : ''}>Português</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
