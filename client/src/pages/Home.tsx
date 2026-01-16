/**
 * Home Page - Terminal Aesthetic
 * Landing page with hero, featured carousel, and newsletter CTA
 * Trilingual support (EN/PT/ZH)
 */

import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail, Users, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t, language } = useLanguage();

  // SEO meta content by language
  const seoContent = {
    pt: {
      title: 'Guilherme Bissoli | Web3, Stablecoins & Infraestrutura Financeira',
      description: 'Especialista em Web3, stablecoins, FX, trading e regulação financeira. Construindo infraestrutura cripto para o Sul Global. Managing Partner @ Coins.xyz Brasil.',
      keywords: 'Guilherme Bissoli, Web3, stablecoins, criptomoedas, blockchain, infraestrutura financeira, Sul Global, Brasil, Coins.xyz, FX digital, regulação cripto, Banco Central',
    },
    en: {
      title: 'Guilherme Bissoli | Web3, Stablecoins & Financial Infrastructure',
      description: 'Specialist in Web3, stablecoins, FX, trading and financial regulation. Building crypto infrastructure for the Global South. Managing Partner @ Coins.xyz Brazil.',
      keywords: 'Guilherme Bissoli, Web3, stablecoins, cryptocurrency, blockchain, financial infrastructure, Global South, Brazil, Coins.xyz, digital FX, crypto regulation, Central Bank',
    },
    zh: {
      title: 'Guilherme Bissoli | Web3、稳定币与金融基础设施',
      description: 'Web3、稳定币、外汇、交易和金融监管专家。为全球南方构建加密基础设施。Coins.xyz巴西管理合伙人。',
      keywords: 'Guilherme Bissoli, Web3, 稳定币, 加密货币, 区块链, 金融基础设施, 全球南方, 巴西, Coins.xyz, 数字外汇, 加密监管, 中央银行',
    },
  };

  const currentSeo = seoContent[language] || seoContent.en;

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="keywords" content={currentSeo.keywords} />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guibissoli.com" />
        <meta property="og:image" content="https://guibissoli.com/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSeo.title} />
        <meta name="twitter:description" content={currentSeo.description} />
        <meta name="twitter:image" content="https://guibissoli.com/images/og-image.png" />
        <meta name="author" content="Guilherme Bissoli" />
        <link rel="canonical" href="https://guibissoli.com" />
      </Helmet>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background subtle pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-abstract.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Terminal-style greeting */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary font-mono">{'>'}</span>
              <span className="meta-mono">{t('home.welcome')}</span>
            </div>
            
            {/* Name */}
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Guilherme
              <span className="text-primary"> Bissoli</span>
              <span className="cursor-blink text-primary ml-1">_</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {t('home.tagline1')}{' '}
              <span className="text-foreground">{t('home.tagline2')}</span>.
              <br />
              {t('home.tagline3')} <span className="text-primary">Web3</span>,{' '}
              <span className="text-accent">stablecoins</span>, {t('home.tagline4')}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link 
                href="/writings"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
              >
                <span>{t('home.cta.writings')}</span>
                <ArrowRight size={18} />
              </Link>
              <Link 
                href="/about"
                className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded hover:bg-card transition-colors"
              >
                <span className="font-mono text-sm">/about</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Writings Carousel */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary font-mono">{'>'}</span>
              <h2 className="font-display text-2xl font-semibold">{t('home.featured')}</h2>
              <div className="flex-1 h-px bg-border ml-4" />
            </div>
            
            {/* Carousel */}
            <FeaturedCarousel />
            
            {/* View all link */}
            <div className="mt-8 text-center">
              <Link 
                href="/writings"
                className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
              >
                <span>{t('home.viewAll')}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA - Redesigned with more presence */}
      <section className="py-24 border-t border-border relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/newsletter-hero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left side - Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="text-primary" size={20} />
                <span className="meta-mono uppercase tracking-wider text-primary">Newsletter</span>
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {t('home.newsletter.title')}
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('home.newsletter.desc')}
              </p>
              
              {/* Stats */}
              <div className="flex gap-8 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="text-primary" size={18} />
                  <span className="font-mono text-sm">
                    <span className="text-foreground font-semibold">1,200+</span>
                    <span className="text-muted-foreground ml-1">{t('home.newsletter.subscribers')}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="text-primary" size={18} />
                  <span className="font-mono text-sm text-muted-foreground">Weekly insights</span>
                </div>
              </div>
              
              <a
                href="https://www.linkedin.com/newsletters/web3-stablecoins-brief-6948081875227717632"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                <span className="text-lg">{t('home.newsletter.cta')}</span>
                <ExternalLink size={20} />
              </a>
              
              <p className="mt-4 text-sm text-muted-foreground">
                {t('home.newsletter.subdesc')}
              </p>
            </div>
            
            {/* Right side - Visual element */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Terminal window preview */}
                <div className="terminal-window p-6 transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="terminal-header mb-4 -mx-6 -mt-6 rounded-t-lg">
                    <div className="terminal-dot bg-red-500" />
                    <div className="terminal-dot bg-yellow-500" />
                    <div className="terminal-dot bg-green-500" />
                    <span className="ml-4 font-mono text-xs text-muted-foreground">latest_issue.md</span>
                  </div>
                  
                  <div className="font-mono text-sm space-y-2">
                    <p className="text-muted-foreground"># Latest Issue</p>
                    <p className="text-foreground">Tick Size, Microestrutura</p>
                    <p className="text-foreground">e Liquidez Funcional</p>
                    <p className="text-muted-foreground mt-4">## Topics</p>
                    <p className="text-primary">- Market microstructure</p>
                    <p className="text-primary">- OTC vs Exchange</p>
                    <p className="text-primary">- Regulatory sandbox</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-primary font-mono">{'>'}</span>
              <span className="font-display font-semibold">gui<span className="text-primary">bissoli</span></span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="https://x.com/guinicoli" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com/in/guinicoli" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/guilarbird" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
            
            <span className="meta-mono">© 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
