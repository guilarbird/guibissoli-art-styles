/**
 * Writings Page - Terminal Aesthetic
 * List of all articles with filtering
 */

import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { articles, getAllTags } from '@/data/articles';

export default function Writings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = getAllTags();

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

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
              Thoughts on Web3, stablecoins, financial infrastructure, and building for emerging markets.
              Originally published on my{' '}
              <a 
                href="https://www.linkedin.com/newsletters/web3-stablecoins-brief-6948081875227717632"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn newsletter
              </a>.
            </p>
          </motion.div>

          {/* Search and Filter */}
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
                all
              </button>
              {allTags.map((tag) => (
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
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={`/writings/${article.slug}`}
                    className="block article-card py-6 group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      {/* Date column */}
                      <div className="lg:w-32 flex-shrink-0">
                        <span className="meta-mono">{article.date}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
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
                      {article.linkedinUrl && (
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
                <span className="text-muted-foreground">topics covered:</span>
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
