/**
 * Home Page - Terminal Aesthetic
 * Landing page with hero, featured writings, and newsletter CTA
 * Bilingual support (EN/PT)
 */

import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { getFeaturedArticles } from '@/data/articles';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const featuredArticles = getFeaturedArticles();
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
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

      {/* Featured Writings */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Section header */}
            <div className="flex items-center gap-3 mb-10">
              <span className="text-primary font-mono">{'>'}</span>
              <h2 className="font-display text-2xl font-semibold">{t('home.featured')}</h2>
              <div className="flex-1 h-px bg-border ml-4" />
            </div>
            
            {/* Articles grid */}
            <div className="space-y-6 stagger-children">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/writings/${article.slug}`}
                  className="block article-card py-6 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="meta-mono">{article.date}</span>
                        <span className="text-border">•</span>
                        <span className="meta-mono">{article.readTime} {t('common.read')}</span>
                        <span className="text-border">•</span>
                        <span className="meta-mono uppercase text-xs">{article.language}</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* View all link */}
            <div className="mt-10 text-center">
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

      {/* Newsletter CTA */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="terminal-window p-8">
              <div className="terminal-header mb-6 -mx-8 -mt-8 rounded-t-lg">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 font-mono text-xs text-muted-foreground">newsletter.sh</span>
              </div>
              
              <h3 className="font-display text-2xl font-semibold mb-4">
                {t('home.newsletter.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('home.newsletter.desc')}
                <br />
                <span className="meta-mono">{t('home.newsletter.subdesc')}</span>
              </p>
              
              <a
                href="https://www.linkedin.com/newsletters/web3-stablecoins-brief-6948081875227717632"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
              >
                <span>{t('home.newsletter.cta')}</span>
                <ExternalLink size={18} />
              </a>
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
              <span className="font-display font-semibold">gui<span className="text-primary">.dev</span></span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="https://twitter.com/guibissoli" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com/in/guinicoli" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/guibissoli" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
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
