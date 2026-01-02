/**
 * About Page - Terminal Aesthetic
 * Bio, current work, and contact info
 */

import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Briefcase, Mail, Twitter, Linkedin, Github } from 'lucide-react';
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
                    src="/images/guilherme-avatar.jpg" 
                    alt="Guilherme Bissoli"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Quick Info */}
              <div className="space-y-3">
                <h2 className="font-display text-2xl font-semibold">Guilherme Bissoli</h2>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase size={16} />
                  <span>Country Owner @ Coins.xyz Brazil</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>São Paulo, Brazil</span>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-4 pt-2">
                  <a 
                    href="https://twitter.com/guibissoli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/guilhermebissoli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/guibissoli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="mailto:gui@coins.xyz"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
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
                  Before crypto, I worked in traditional finance and tech startups. The combination 
                  of these experiences gave me a unique perspective on what's broken in the current 
                  financial system—and how to fix it.
                </p>
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
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
                    description: 'Weekly newsletter on crypto infrastructure and the Global South.',
                    link: 'https://www.linkedin.com/newsletters/web3-stablecoins-brief-6948081875227717632',
                  },
                  {
                    title: 'Regulatory Advocacy',
                    description: 'Working with regulators to shape sensible crypto policy in Brazil.',
                    link: null,
                  },
                ].map((item, index) => (
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
                ].map((topic) => (
                  <span key={topic} className="tag">{topic}</span>
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
                  href="https://twitter.com/guibissoli"
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
