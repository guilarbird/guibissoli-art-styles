/**
 * About Page - Terminal Aesthetic
 * Bio, experience, education, and contact info
 */

import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Briefcase, Mail, Twitter, Linkedin, Github, GraduationCap, Award, ArrowRight, Construction } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container">
          <div className="max-w-3xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary font-mono">{'>'}</span>
                <span className="meta-mono">cat /about/guilherme.md</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                {t('about.title')}<span className="cursor-blink text-primary">_</span>
              </h1>
            </motion.div>

            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row gap-8 mb-12"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-border">
                  <img 
                    src="/images/ai_host_avatar.png" 
                    alt="Guilherme Bissoli"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Quick Info */}
              <div className="space-y-3">
                <h2 className="font-display text-2xl font-semibold">Guilherme Nicoli Bissoli</h2>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase size={16} />
                  <span>Managing Partner @ Coins.xyz Brazil</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>São Paulo, Brazil</span>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-4 pt-2">
                  <a 
                    href="https://x.com/guinicoli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    title="Twitter/X"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/guinicoli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/guilarbird" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="mailto:gui@coins.xyz"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none mb-12"
            >
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I build financial infrastructure for the <span className="text-primary">Global South</span>. 
                  That's been my north star (pun intended) for years now. Currently leading{' '}
                  <a 
                    href="https://coins.xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Coins.xyz
                  </a>{' '}
                  in Brazil, where we're building the rails that connect traditional finance to crypto 
                  for millions of users who've been historically underserved.
                </p>
                
                <p>
                  My work sits at the intersection of <span className="text-primary">technology</span>,{' '}
                  <span className="text-accent">finance</span>, and <span className="text-terminal-green">regulation</span>. 
                  After participating in <span className="text-primary">50+ Web3 deals</span> across multiple market cycles, 
                  I've learned that the best infrastructure is the one you don't notice—it just works.
                </p>
                
                <p>
                  Fun fact: I've been working with essentially the same crew across{' '}
                  <span className="text-primary">Binance</span> →{' '}
                  <span className="text-primary">Old Fashion Research</span> →{' '}
                  <span className="text-primary">Coins.xyz</span>. 
                  When you find people who share your thesis on the Global South and don't mind your terrible jokes, 
                  you stick together.
                </p>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-12"
            >
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-primary font-mono">{'>'}</span>
                {t('about.experience')}
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    period: '2024 - Present',
                    role: 'Managing Partner, Brazil',
                    company: 'Coins.xyz',
                    description: 'Leading LatAm & Africa expansion. Same crew from Binance & OFR days, new mission: crypto infrastructure for the Global South.',
                    chapterSlug: 'coins-xyz',
                    status: 'active',
                  },
                  {
                    period: '2021 - 2024',
                    role: 'Principal',
                    company: 'Old Fashion Research',
                    description: 'Asian multi-strategy blockchain fund. Editorial contributor for research publications across 50+ Web3 investments.',
                    chapterSlug: 'old-fashion-research',
                    status: 'complete',
                  },
                  {
                    period: '2019 - 2021',
                    role: 'Fiat Director',
                    company: 'Binance',
                    description: 'Scaled fiat integrations and fintech partnerships during the exchange\'s hyper-growth phase in Brazil.',
                    chapterSlug: 'binance',
                    status: 'building',
                  },
                  {
                    period: '2014 - 2016',
                    role: 'Graduate Trainee',
                    company: 'BTG Pactual',
                    description: 'Traditional finance. M&A, capital markets, financial modeling. Learned how the old system works.',
                    chapterSlug: 'btg-pactual',
                    status: 'building',
                  },
                ].map((item) => (
                  <Link 
                    key={item.company}
                    href={`/chapter/${item.chapterSlug}`}
                    className="article-card py-4 flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="meta-mono text-primary">{item.period}</span>
                        {item.status === 'building' && (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <Construction size={12} />
                            {t('about.building')}
                          </span>
                        )}
                        {item.status === 'active' && (
                          <span className="inline-flex items-center gap-1 text-xs text-green-500">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            {t('about.current')}
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">{item.role} @ {item.company}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex-shrink-0 p-2 text-muted-foreground group-hover:text-primary transition-colors">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <GraduationCap size={20} />
                {t('about.education')}
              </h3>
              
              <div className="space-y-4">
                <div className="article-card py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="meta-mono text-primary">2013 - 2014</span>
                      <h4 className="font-semibold">MSc Finance and Investments</h4>
                      <p className="text-muted-foreground">Rotterdam School of Management, Erasmus University</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Thesis: "Credit spreads and real economic activity"
                      </p>
                    </div>
                    <a 
                      href="http://hdl.handle.net/2105/22123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="article-card py-4">
                  <div>
                    <span className="meta-mono text-primary">Prior</span>
                    <h4 className="font-semibold">IB Diploma</h4>
                    <p className="text-muted-foreground">International Baccalaureate</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Award size={14} className="text-primary" />
                      <span className="text-sm text-primary">CAS Awards recipient</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mb-12"
            >
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-primary font-mono">{'>'}</span>
                {t('about.focus')}
              </h3>
              
              <div className="grid gap-4">
                {[
                  {
                    title: 'Coins.xyz Brazil',
                    description: 'Scaling a regulated crypto exchange for the Brazilian market. OTC, B2B, and retail.',
                    link: 'https://coins.xyz',
                  },
                  {
                    title: 'Web3 + Stablecoins Brief',
                    description: 'Newsletter on crypto infrastructure and the Global South. Published on LinkedIn.',
                    link: 'https://www.linkedin.com/newsletters/web3-stablecoins-brief-6948081875227717632',
                  },


                ].map((item) => (
                  <div 
                    key={item.title}
                    className="article-card py-4 flex items-start justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    {item.link && (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Research Interests */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-primary font-mono">{'>'}</span>
                {t('about.interests')}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {[
                  'Exchange Architecture',
                  'Liquidity Providers',
                  'Stablecoins',
                  'Real World Assets (RWA)',
                  'Cross-border Payments',
                  'Regulatory Frameworks',
                  'Financial Inclusion',
                  'PIX Infrastructure',
                  'Cybersecurity',
                  'GameFi',
                ].map((topic) => (
                  <span key={topic} className="tag">{topic}</span>
                ))}
              </div>
            </motion.div>

            {/* Media Appearances */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mb-12"
            >
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-primary font-mono">{'>'}</span>
                Featured In
              </h3>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                {[
                  { name: 'Valor Econômico', url: 'https://valor.globo.com' },
                  { name: 'Exame', url: 'https://exame.com' },
                  { name: 'Investing.com', url: 'https://investing.com' },
                  { name: 'Livecoins', url: 'https://livecoins.com.br' },
                  { name: 'Hackernoon', url: 'https://hackernoon.com' },
                ].map((media) => (
                  <a
                    key={media.name}
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {media.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="terminal-window p-6"
            >
              <div className="terminal-header mb-4 -mx-6 -mt-6">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 font-mono text-xs text-muted-foreground">contact.sh</span>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Want to chat about crypto, fintech, or building in emerging markets?
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:gui@coins.xyz"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
                >
                  <Mail size={18} />
                  <span>Email me</span>
                </a>
                <a
                  href="https://x.com/guinicoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-border text-foreground font-medium rounded hover:bg-card transition-colors"
                >
                  <Twitter size={18} />
                  <span>DM on Twitter</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
