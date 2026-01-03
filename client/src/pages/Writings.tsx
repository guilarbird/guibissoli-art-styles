/**
 * Writings Page - Terminal Aesthetic
 * Reorganized: Articles (by me) | Research | Media (mentions)
 */

import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Globe, Pen, FlaskConical, Newspaper } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { articles, getAllTags, getArticlesByLanguage, getMyArticles, getMediaMentions, getResearchPapers } from '@/data/articles';

type LanguageFilter = 'all' | 'en' | 'pt';
type CategoryFilter = 'all' | 'article' | 'research' | 'media';

export default function Writings() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [languageFilter, setLanguageFilter] = useState<LanguageFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const allTags = getAllTags();

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    const matchesLanguage = languageFilter === 'all' || article.language === languageFilter;
    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;
    return matchesSearch && matchesTag && matchesLanguage && matchesCategory;
  });

  const ptCount = getArticlesByLanguage('pt').length;
  const enCount = getArticlesByLanguage('en').length;
  const articlesCount = getMyArticles().length;
  const researchCount = getResearchPapers().length;
  const mediaCount = getMediaMentions().length;

  const isExternalUrl = (url: string) => url.startsWith('http');

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-mono">{'>'}</span>
              <span className="meta-mono">ls -la /writings</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('writings.title')}<span className="cursor-blink text-primary">_</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('writings.subtitle')}
            </p>
          </motion.div>

          {/* Category Toggle - Primary Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="mb-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`p-4 rounded-xl border transition-all ${
                  categoryFilter === 'all' 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'border-border hover:border-primary/50 bg-card/50'
                }`}
              >
                <div className="text-2xl font-bold">{articles.length}</div>
                <div className="text-sm font-mono opacity-70">{t('writings.filter.all').toLowerCase()}</div>
              </button>
              <button
                onClick={() => setCategoryFilter('article')}
                className={`p-4 rounded-xl border transition-all ${
                  categoryFilter === 'article' 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'border-border hover:border-primary/50 bg-card/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Pen size={18} />
                  <span className="text-2xl font-bold">{articlesCount}</span>
                </div>
                <div className="text-sm font-mono opacity-70">{t('writings.articles')}</div>
              </button>
              <button
                onClick={() => setCategoryFilter('research')}
                className={`p-4 rounded-xl border transition-all ${
                  categoryFilter === 'research' 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'border-border hover:border-primary/50 bg-card/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FlaskConical size={18} />
                  <span className="text-2xl font-bold">{researchCount}</span>
                </div>
                <div className="text-sm font-mono opacity-70">{t('writings.research')}</div>
              </button>
              <button
                onClick={() => setCategoryFilter('media')}
                className={`p-4 rounded-xl border transition-all ${
                  categoryFilter === 'media' 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'border-border hover:border-primary/50 bg-card/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Newspaper size={18} />
                  <span className="text-2xl font-bold">{mediaCount}</span>
                </div>
                <div className="text-sm font-mono opacity-70">{t('writings.media')}</div>
              </button>
            </div>
          </motion.div>

          {/* Language Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08 }}
            className="mb-6"
          >
            <div className="flex items-center gap-4">
              <Globe size={16} className="text-muted-foreground" />
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguageFilter('all')}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs border transition-all ${
                    languageFilter === 'all' 
                      ? 'bg-primary/20 text-primary border-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  all
                </button>
                <button
                  onClick={() => setLanguageFilter('pt')}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs border transition-all ${
                    languageFilter === 'pt' 
                      ? 'bg-primary/20 text-primary border-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  🇧🇷 PT ({ptCount})
                </button>
                <button
                  onClick={() => setLanguageFilter('en')}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs border transition-all ${
                    languageFilter === 'en' 
                      ? 'bg-primary/20 text-primary border-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  🇺🇸 EN ({enCount})
                </button>
              </div>
            </div>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={t('writings.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="mb-10"
          >
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`tag ${!selectedTag ? 'bg-primary/20 text-primary border-primary' : ''}`}
              >
                {t('writings.allTags')}
              </button>
              {allTags.slice(0, 12).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`tag ${selectedTag === tag ? 'bg-primary/20 text-primary border-primary' : ''}`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="space-y-4">
            {filteredArticles.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="font-mono text-muted-foreground">
                  <span className="text-primary">{'>'}</span> {t('writings.noResults')}
                </p>
              </motion.div>
            ) : (
              filteredArticles.map((article, index) => {
                const isExternal = isExternalUrl(article.url);
                const CardWrapper = isExternal ? 'a' : Link;
                const cardProps = isExternal 
                  ? { href: article.url, target: '_blank', rel: 'noopener noreferrer' }
                  : { href: article.url };
                
                return (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <CardWrapper
                      {...cardProps}
                      className="block group"
                    >
                      <div className={`p-6 rounded-xl border transition-all hover:border-primary/50 ${
                        article.heroImage ? 'bg-card' : 'bg-card/50'
                      }`}>
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Hero Image (if available) */}
                          {article.heroImage && (
                            <div className="md:w-48 h-32 md:h-auto flex-shrink-0 rounded-lg overflow-hidden">
                              <img 
                                src={article.heroImage} 
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          )}
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            {/* Meta row */}
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                              <span className="meta-mono text-xs">{article.date}</span>
                              <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                                {article.language === 'pt' ? '🇧🇷' : '🇺🇸'}
                              </span>
                              {article.publication && (
                                <span className="text-xs font-mono text-primary/70">{article.publication}</span>
                              )}
                              {article.category === 'media' && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono">
                                  media mention
                                </span>
                              )}
                              {isExternal && (
                                <ExternalLink size={12} className="text-muted-foreground" />
                              )}
                            </div>
                            
                            {/* Title */}
                            <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {article.title}
                            </h2>
                            
                            {/* Excerpt */}
                            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                              {article.excerpt}
                            </p>
                            
                            {/* Tags & Read time */}
                            <div className="flex items-center gap-4">
                              <span className="text-xs font-mono text-muted-foreground">
                                {article.readTime}
                              </span>
                              {article.views && (
                                <span className="text-xs font-mono text-muted-foreground">
                                  {article.views.toLocaleString()} views
                                </span>
                              )}
                              <div className="flex gap-1.5 flex-wrap">
                                {article.tags.slice(0, 3).map((tag) => (
                                  <span key={tag} className="text-xs font-mono text-primary/60">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardWrapper>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="meta-mono text-muted-foreground">
              © {new Date().getFullYear()} gui.dev
            </p>
            <div className="flex items-center gap-6">
              <a href="https://x.com/guinicoli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com/in/guinicoli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/guilarbird" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
