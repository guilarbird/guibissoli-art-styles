/**
 * Writings Page - Terminal Aesthetic
 * List of all articles with language and category filtering
 */

import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { articles, getAllTags, getArticlesByLanguage } from '@/data/articles';

type LanguageFilter = 'all' | 'en' | 'pt';
type CategoryFilter = 'all' | 'writing' | 'research' | 'media';

export default function Writings() {
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
              Writings<span className="cursor-blink text-primary">_</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Thoughts on Web3, stablecoins, financial infrastructure, cybersecurity, and building for emerging markets.
              Published across{' '}
              <a 
                href="https://www.linkedin.com/newsletters/web3-stablecoins-brief-6948081875227717632"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>,{' '}
              <a 
                href="https://hackernoon.com/u/guiguibashow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Hackernoon
              </a>,{' '}
              <a 
                href="https://exame.com/future-of-money/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Exame
              </a>, and more.
            </p>
          </motion.div>

          {/* Language Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <Globe size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-mono">language:</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguageFilter('all')}
                className={`px-4 py-2 rounded-lg font-mono text-sm border transition-all ${
                  languageFilter === 'all' 
                    ? 'bg-primary/20 text-primary border-primary' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                all ({articles.length})
              </button>
              <button
                onClick={() => setLanguageFilter('pt')}
                className={`px-4 py-2 rounded-lg font-mono text-sm border transition-all ${
                  languageFilter === 'pt' 
                    ? 'bg-primary/20 text-primary border-primary' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                🇧🇷 português ({ptCount})
              </button>
              <button
                onClick={() => setLanguageFilter('en')}
                className={`px-4 py-2 rounded-lg font-mono text-sm border transition-all ${
                  languageFilter === 'en' 
                    ? 'bg-primary/20 text-primary border-primary' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                🇺🇸 english ({enCount})
              </button>
            </div>
          </motion.div>

          {/* Category Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-muted-foreground font-mono">category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-4 py-2 rounded-lg font-mono text-sm border transition-all ${
                  categoryFilter === 'all' 
                    ? 'bg-primary/20 text-primary border-primary' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                all
              </button>
              <button
                onClick={() => setCategoryFilter('writing')}
                className={`px-4 py-2 rounded-lg font-mono text-sm border transition-all ${
                  categoryFilter === 'writing' 
                    ? 'bg-primary/20 text-primary border-primary' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                ✍️ writing
              </button>
              <button
                onClick={() => setCategoryFilter('research')}
                className={`px-4 py-2 rounded-lg font-mono text-sm border transition-all ${
                  categoryFilter === 'research' 
                    ? 'bg-primary/20 text-primary border-primary' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                🔬 research
              </button>
              <button
                onClick={() => setCategoryFilter('media')}
                className={`px-4 py-2 rounded-lg font-mono text-sm border transition-all ${
                  categoryFilter === 'media' 
                    ? 'bg-primary/20 text-primary border-primary' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                📰 media
              </button>
            </div>
          </motion.div>

          {/* Search and Tags Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            {/* Search */}
            <div className="relative mb-6">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="grep -i 'search articles...'"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`tag ${!selectedTag ? 'bg-primary/20 text-primary border-primary' : ''}`}
              >
                all tags
              </button>
              {allTags.slice(0, 15).map((tag) => (
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

          {/* Articles List */}
          <div className="space-y-2">
            {filteredArticles.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="font-mono text-muted-foreground">
                  <span className="text-primary">{'>'}</span> No articles found matching your query.
                </p>
              </motion.div>
            ) : (
              filteredArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link
                    href={`/writings/${article.slug}`}
                    className="block article-card py-6 group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      {/* Date & Language column */}
                      <div className="lg:w-36 flex-shrink-0 flex items-center gap-2">
                        <span className="meta-mono">{article.date}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                          {article.language === 'pt' ? '🇧🇷' : '🇺🇸'}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {article.publication && (
                            <span className="text-xs font-mono text-primary/70">{article.publication}</span>
                          )}
                          {article.views && (
                            <span className="text-xs font-mono text-muted-foreground">• {article.views.toLocaleString()} views</span>
                          )}
                        </div>
                        <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="meta-mono">{article.readTime} read</span>
                          <span className="text-border">•</span>
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="tag">#{tag}</span>
                          ))}
                        </div>
                      </div>
                      
                      {/* External link indicator */}
                      {article.url && (
                        <div className="lg:w-8 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                          <ExternalLink size={18} />
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <span className="text-muted-foreground">total articles:</span>
                <span className="ml-2 font-mono text-primary">{articles.length}</span>
              </div>
              <div>
                <span className="text-muted-foreground">português:</span>
                <span className="ml-2 font-mono text-primary">{ptCount}</span>
              </div>
              <div>
                <span className="text-muted-foreground">english:</span>
                <span className="ml-2 font-mono text-primary">{enCount}</span>
              </div>
              <div>
                <span className="text-muted-foreground">topics:</span>
                <span className="ml-2 font-mono text-primary">{allTags.length}</span>
              </div>
              <div>
                <span className="text-muted-foreground">showing:</span>
                <span className="ml-2 font-mono text-primary">{filteredArticles.length}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
