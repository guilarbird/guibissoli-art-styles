/**
 * Article Page - Terminal Aesthetic
 * Individual article view with redirect to LinkedIn
 */

import { useEffect } from 'react';
import { useParams, useLocation, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Clock, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { getArticleBySlug, articles } from '@/data/articles';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const article = getArticleBySlug(slug || '');

  // Redirect to 404 if article not found
  useEffect(() => {
    if (!article && slug) {
      setLocation('/404');
    }
  }, [article, slug, setLocation]);

  if (!article) {
    return null;
  }

  // Get related articles (same tags)
  const relatedArticles = articles
    .filter(a => a.slug !== article.slug && a.tags.some(t => article.tags.includes(t)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link 
                href="/writings"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
              >
                <ArrowLeft size={16} />
                <span>cd /writings</span>
              </Link>
            </motion.div>

            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span className="meta-mono">{article.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} />
                  <span className="meta-mono">{article.readTime} read</span>
                </div>
              </div>
              
              {/* Title */}
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>
              
              {/* Excerpt */}
              <p className="text-xl text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </motion.header>

            {/* Read on LinkedIn CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="terminal-window p-8 text-center">
                <div className="terminal-header mb-6 -mx-8 -mt-8 rounded-t-lg">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-4 font-mono text-xs text-muted-foreground">article.md</span>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  This article was originally published on{' '}
                  <span className="text-primary">{article.publication || 'external platform'}</span>.
                  <br />
                  Click below to read the full content.
                </p>
                
                {article.url && (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
                  >
                    <span>Read full article on {article.publication || 'source'}</span>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12 p-6 glass-card rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img 
                  src="/images/ai_host_avatar.png" 
                  alt="Guilherme Bissoli"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">Guilherme Bissoli</h3>
                  <p className="text-sm text-muted-foreground">Country Owner @ Coins.xyz Brazil</p>
                  <Link 
                    href="/about"
                    className="text-sm text-primary hover:underline"
                  >
                    More about me →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                  <span className="text-primary font-mono">{'>'}</span>
                  Related Writings
                </h3>
                
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/writings/${related.slug}`}
                      className="block article-card py-4 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="meta-mono block mb-1">{related.date}</span>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {related.title}
                          </h4>
                        </div>
                        <span className="meta-mono flex-shrink-0">{related.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
