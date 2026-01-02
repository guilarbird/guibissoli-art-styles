/**
 * About Page - Terminal Aesthetic
 * Bio, experience, education, and contact info
 */

import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Briefcase, Mail, Twitter, Linkedin, Github, GraduationCap, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function About() {
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
                About<span className="cursor-blink text-primary">_</span>
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
                    href="https://twitter.com/guinicoli" 
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
                    href="https://github.com/guiguibashow" 
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
                  I build financial infrastructure for emerging markets. Currently leading{' '}
                  <a 
                    href="https://coins.xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Coins.xyz
                  </a>{' '}
                  in Brazil, where we're creating the bridge between traditional finance and crypto 
                  for millions of users in the Global South.
                </p>
                
                <p>
                  My work sits at the intersection of <span className="text-primary">technology</span>,{' '}
                  <span className="text-accent">finance</span>, and <span className="text-terminal-green">regulation</span>. 
                  I believe that stablecoins and blockchain infrastructure will fundamentally reshape 
                  how money moves across borders, especially for underserved markets.
                </p>
                
                <p>
                  Before Coins.xyz, I was <span className="text-primary">Head of Fiat at Binance</span> Brazil, 
                  where I helped scale operations during the exchange's hyper-growth phase. I also worked 
                  at <span className="text-primary">Old Fashion Research</span> (Asian multi-strategy blockchain fund), 
                  BTG Pactual, and various tech startups.
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
                Experience
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    period: '2024 - Present',
                    role: 'Managing Partner',
                    company: 'Coins.xyz Brazil',
                    description: 'Leading Brazil operations for crypto infrastructure platform. OTC, B2B, and retail.',
                    link: 'https://coins.xyz',
                  },
                  {
                    period: '2021 - 2024',
                    role: 'Head of Fiat',
                    company: 'Binance',
                    description: 'Scaled fiat operations during hyper-growth phase in Brazil.',
                    link: 'https://binance.com',
                  },
                  {
                    period: '2021 - 2022',
                    role: 'Investment Team',
                    company: 'Old Fashion Research',
                    description: 'Asian multi-strategy blockchain investment fund. Research on GameFi, DAOs, and infrastructure.',
                    link: 'https://paragraph.com/@old-fashion-research',
                  },
                  {
                    period: 'Prior',
                    role: 'Financial Sector',
                    company: 'BTG Pactual & Others',
                    description: 'Traditional finance and tech startups experience.',
                    link: null,
                  },
                ].map((item) => (
                  <div 
                    key={item.company}
                    className="article-card py-4 flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="meta-mono text-primary">{item.period}</span>
                      </div>
                      <h4 className="font-semibold">{item.role} @ {item.company}</h4>
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

            {/* Education */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-primary font-mono">{'>'}</span>
                <GraduationCap size={20} />
                Education
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
                Current Focus
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
                  {
                    title: 'Exame Future of Money',
                    description: 'Contributing writer on stablecoins, VASPs, and Brazilian crypto regulation.',
                    link: 'https://exame.com/future-of-money/',
                  },
                  {
                    title: 'ABToken',
                    description: 'Member of the Brazilian Association of Tokenization Companies.',
                    link: null,
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
                Research Interests
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
                  href="https://twitter.com/guinicoli"
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
