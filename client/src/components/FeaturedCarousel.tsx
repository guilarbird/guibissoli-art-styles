/**
 * Featured Carousel Component
 * Trilingual carousel with images and audio support
 */

import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeaturedArticle {
  id: string;
  slug: string;
  title: {
    en: string;
    pt: string;
    zh: string;
  };
  excerpt: {
    en: string;
    pt: string;
    zh: string;
  };
  image: string;
  date: string;
  readTime: number;
  tags: string[];
  isInternal?: boolean;
}

const featuredArticles: FeaturedArticle[] = [
  {
    id: '1',
    slug: 'tick-size-microestrutura',
    title: {
      en: 'Tick Size, Microstructure & Functional Liquidity',
      pt: 'Tick Size, Microestrutura e Liquidez Funcional',
      zh: '最小报价单位、微观结构与功能性流动性',
    },
    excerpt: {
      en: 'How seemingly technical adjustments redefine the role of the spot market in stablecoins and crypto regulation.',
      pt: 'Como ajustes aparentemente técnicos redefinem o papel do mercado spot em stablecoins e regulação cripto.',
      zh: '看似技术性的调整如何重新定义稳定币和加密监管中现货市场的角色。',
    },
    image: '/images/styles/data_viz/style_data_viz_010.png',
    date: '2026-01-02',
    readTime: 15,
    tags: ['microstructure', 'stablecoins', 'regulation'],
    isInternal: true,
  },
  {
    id: '2',
    slug: 'stablecoins-vasps-brazil',
    title: {
      en: 'Stablecoins and VASPs in Brazilian Financial Integration',
      pt: 'Stablecoins e VASPs na Integração ao Sistema Financeiro Brasileiro',
      zh: '稳定币和虚拟资产服务提供商在巴西金融整合中的作用',
    },
    excerpt: {
      en: 'Analysis of how stablecoins and virtual asset service providers are integrating into the Brazilian financial system.',
      pt: 'Análise de como stablecoins e provedores de serviços de ativos virtuais estão se integrando ao sistema financeiro brasileiro.',
      zh: '分析稳定币和虚拟资产服务提供商如何融入巴西金融体系。',
    },
    image: '/images/styles/abstract_finance/style_abstract_finance_005.png',
    date: '2025-12-15',
    readTime: 10,
    tags: ['stablecoins', 'brazil', 'regulation'],
    isInternal: false,
  },
  {
    id: '3',
    slug: 'global-south-thesis',
    title: {
      en: 'The Global South Thesis: Financial Infrastructure for Emerging Markets',
      pt: 'A Tese do Sul Global: Infraestrutura Financeira para Mercados Emergentes',
      zh: '全球南方论点：新兴市场的金融基础设施',
    },
    excerpt: {
      en: 'Why the next wave of financial innovation will come from emerging markets and how crypto infrastructure enables it.',
      pt: 'Por que a próxima onda de inovação financeira virá dos mercados emergentes e como a infraestrutura cripto a possibilita.',
      zh: '为什么下一波金融创新将来自新兴市场，以及加密基础设施如何实现这一目标。',
    },
    image: '/images/styles/geographic/style_geographic_001.png',
    date: '2025-11-20',
    readTime: 12,
    tags: ['global-south', 'infrastructure', 'thesis'],
    isInternal: false,
  },
];

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLang, setAudioLang] = useState<'en' | 'pt' | 'zh'>('en');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, t } = useLanguage();
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const currentArticle = featuredArticles[currentIndex];
  const displayLang = language as 'en' | 'pt' | 'zh';

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredArticles.length);
    stopAudio();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
    stopAudio();
  };

  const stopAudio = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      playAudio();
    }
  };

  const playAudio = () => {
    stopAudio();
    
    const text = `${currentArticle.title[audioLang]}. ${currentArticle.excerpt[audioLang]}`;
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set language based on audioLang
    const langMap = {
      en: 'en-US',
      pt: 'pt-BR',
      zh: 'zh-CN',
    };
    utterance.lang = langMap[audioLang];
    utterance.rate = 0.9;
    
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    
    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPlaying) return; // Don't auto-advance while audio is playing
    
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(timer);
  }, [currentIndex, isPlaying]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-card border border-border">
      {/* Main carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              src={currentArticle.image}
              alt={currentArticle.title[displayLang]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {currentArticle.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono bg-primary/20 text-primary rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground mb-2 line-clamp-2">
              {currentArticle.title[displayLang]}
            </h3>
            
            {/* Excerpt */}
            <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-2 max-w-2xl">
              {currentArticle.excerpt[displayLang]}
            </p>
            
            {/* Meta & Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span>{currentArticle.date}</span>
                <span>{currentArticle.readTime} {t('common.min')} {t('common.read')}</span>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Audio controls */}
                <div className="relative">
                  <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    title="Select audio language"
                  >
                    <Globe size={18} />
                  </button>
                  
                  {showLangMenu && (
                    <div className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                      {(['en', 'pt', 'zh'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setAudioLang(lang);
                            setShowLangMenu(false);
                          }}
                          className={`block w-full px-4 py-2 text-left text-sm ${
                            audioLang === lang ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                          }`}
                        >
                          {lang === 'en' ? 'English' : lang === 'pt' ? 'Português' : '中文'}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <button
                  onClick={toggleAudio}
                  className={`p-2 rounded-full transition-colors ${
                    isPlaying 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                  title={isPlaying ? 'Stop' : 'Listen'}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                
                {/* Read link */}
                {currentArticle.isInternal ? (
                  <Link
                    href={`/writings/${currentArticle.slug}`}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    {t('writings.readMore')}
                  </Link>
                ) : (
                  <Link
                    href="/writings"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    {t('writings.readMore')}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-background transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-background transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              stopAudio();
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
