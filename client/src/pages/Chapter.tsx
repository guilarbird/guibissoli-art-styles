/**
 * Career Chapter Page
 * Displays detailed content for each career chapter (OFR, Binance, Coins.xyz, etc.)
 */

import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Users, Building2, Construction } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { getChapterBySlug, type ChapterContent } from '@/data/chapters';

export default function Chapter() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const chapter = getChapterBySlug(slug || '');

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background text-foreground font-body">
        <Navigation />
        <main className="pt-24 pb-20">
          <div className="container">
            <div className="text-center py-20">
              <h1 className="font-display text-4xl font-bold mb-4">Chapter not found</h1>
              <Link href="/about" className="text-primary hover:underline">
                ← Back to About
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const description = language === 'pt' ? chapter.descriptionPt : 
                      language === 'zh' ? (chapter.descriptionZh || chapter.description) : 
                      chapter.description;
  
  const highlights = language === 'pt' ? chapter.highlightsPt : chapter.highlights;
  const thesis = language === 'pt' ? chapter.thesisPt : chapter.thesis;
  const role = language === 'pt' ? chapter.rolePt : chapter.role;

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container">
          {/* Back link */}
          <Link 
            href="/about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            <span className="font-mono text-sm">/about</span>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary font-mono">{'>'}</span>
              <span className="meta-mono">cat /chapters/{chapter.slug}.md</span>
            </div>
            
            <div className="flex items-start gap-6 mb-6">
              {chapter.logo && (
                <div className="w-16 h-16 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-primary" size={32} />
                </div>
              )}
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
                  {chapter.company}
                  {chapter.status === 'building' && (
                    <span className="ml-3 inline-flex items-center gap-1 text-sm font-normal text-muted-foreground">
                      <Construction size={16} />
                      {language === 'pt' ? 'Em construção' : 'Under construction'}
                    </span>
                  )}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Users size={16} />
                    {role}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {chapter.period}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Under Construction Banner */}
          {chapter.status === 'building' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-6 rounded-lg border border-primary/30 bg-primary/5"
            >
              <div className="flex items-start gap-4">
                <Construction className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'pt' ? 'Seção em construção' : 'Section under construction'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'pt' 
                      ? 'Este capítulo está sendo desenvolvido. Mais conteúdo, histórias e materiais serão adicionados em breve.'
                      : 'This chapter is being developed. More content, stories, and materials will be added soon.'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </motion.div>

              {/* Thesis */}
              {thesis && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="p-6 rounded-lg bg-card border border-border"
                >
                  <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary font-mono">{'>'}</span>
                    {language === 'pt' ? 'Tese' : 'Thesis'}
                  </h3>
                  <p className="text-muted-foreground italic">"{thesis}"</p>
                </motion.div>
              )}

              {/* Content/Publications */}
              {chapter.content.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                    <span className="text-primary font-mono">{'>'}</span>
                    {language === 'pt' ? 'Publicações & Conteúdo' : 'Publications & Content'}
                  </h3>
                  
                  <div className="space-y-4">
                    {chapter.content.map((item) => (
                      <ContentCard key={item.id} item={item} language={language} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="p-6 rounded-lg bg-card border border-border"
              >
                <h3 className="font-display text-lg font-semibold mb-4">
                  {language === 'pt' ? 'Destaques' : 'Highlights'}
                </h3>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-4 rounded-lg border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    chapter.status === 'active' ? 'bg-green-500' :
                    chapter.status === 'complete' ? 'bg-blue-500' :
                    'bg-yellow-500'
                  }`} />
                  <span className="text-sm font-medium">
                    {chapter.status === 'active' 
                      ? (language === 'pt' ? 'Posição atual' : 'Current position')
                      : chapter.status === 'complete'
                      ? (language === 'pt' ? 'Capítulo completo' : 'Chapter complete')
                      : (language === 'pt' ? 'Em construção' : 'Under construction')
                    }
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ContentCard({ item, language }: { item: ChapterContent; language: string }) {
  const title = language === 'pt' ? (item.titlePt || item.title) :
                language === 'zh' ? (item.titleZh || item.title) :
                item.title;
  
  const description = language === 'pt' ? (item.descriptionPt || item.description) :
                      language === 'zh' ? (item.descriptionZh || item.description) :
                      item.description;

  const typeLabels: Record<string, { en: string; pt: string }> = {
    article: { en: 'Article', pt: 'Artigo' },
    podcast: { en: 'Podcast', pt: 'Podcast' },
    report: { en: 'Research', pt: 'Pesquisa' },
    media: { en: 'Media', pt: 'Mídia' },
    announcement: { en: 'Announcement', pt: 'Anúncio' },
  };

  return (
    <div className="article-card py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="tag text-xs">
              {language === 'pt' ? typeLabels[item.type]?.pt : typeLabels[item.type]?.en}
            </span>
            <span className="meta-mono text-xs">{item.date}</span>
          </div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          {item.role && (
            <p className="text-xs text-primary">
              {language === 'pt' ? 'Papel' : 'Role'}: {item.role}
            </p>
          )}
          {item.authors && item.authors.length > 0 && (
            <p className="text-xs text-muted-foreground mt-1">
              {language === 'pt' ? 'Autores' : 'Authors'}: {item.authors.join(', ')}
            </p>
          )}
        </div>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
