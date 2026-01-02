/**
 * Collections Page - NFT Portfolio
 * Displays NFT collections from OpenSea (oldfashiongui)
 * Static data for MVP - can be upgraded to API later
 */

import { motion } from 'framer-motion';
import { ExternalLink, Wallet, TrendingUp, Image as ImageIcon } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

interface NFTCollection {
  name: string;
  count: number;
  slug: string;
  image?: string;
  featured?: boolean;
}

interface NFTItem {
  name: string;
  collection: string;
  rank?: number;
  topOffer?: string;
  image: string;
  opensea: string;
}

const collections: NFTCollection[] = [
  { name: '0N1 Force', count: 1, slug: '0n1-force', featured: true },
  { name: 'Bloot (not for Weaks)', count: 6, slug: 'bloot', featured: true },
  { name: 'Gutter Clones', count: 1, slug: 'gutter-clones', featured: true },
  { name: 'Pixel Vault Founder\'s DAO', count: 1, slug: 'pixel-vault-founders-dao' },
  { name: 'Monkey Bet DAO', count: 1, slug: 'monkey-bet-dao' },
  { name: 'NFTCULTURE', count: 1, slug: 'nftculture' },
  { name: 'Stoner Cats', count: 1, slug: 'stoner-cats' },
  { name: 'ENS: Ethereum Name Service', count: 3, slug: 'ens', featured: true },
  { name: 'Bloot Comic', count: 1, slug: 'bloot-comic' },
  { name: 'Pods by Sugartown', count: 2, slug: 'pods-by-sugartown' },
  { name: 'The World\'s Largest Trailer', count: 2, slug: 'worlds-largest-trailer' },
  { name: 'Fruity Loopz OG Seedz', count: 3, slug: 'fruity-loopz-og-seedz' },
  { name: 'The FLZ Collection', count: 6, slug: 'the-flz-collection' },
];

const featuredNFTs: NFTItem[] = [
  {
    name: '0N1 #7575',
    collection: '0N1 Force',
    rank: 1843,
    topOffer: '0.06 WETH',
    image: 'https://i.seadn.io/gae/7gOej3SUvqALR-qkqL_ApAt97E5VdHEX2lDpLXMSxUdwUvjmNBqmMgKHJLhKXJ_xjXvJ7Nd6GR4PjKCu-VlP0bql4u8OBQxAiVMqOA?w=500',
    opensea: 'https://opensea.io/assets/ethereum/0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d/7575'
  },
  {
    name: 'Gutter Clone #3009',
    collection: 'Gutter Clones',
    rank: 15670,
    topOffer: '0.0009 WETH',
    image: 'https://i.seadn.io/gcs/files/c8c6c5a5e3a7e8d8a5e3a7e8d8a5e3a7.png?w=500',
    opensea: 'https://opensea.io/assets/ethereum/0xedca6d8d0f8a5a7c8d0f8a5a7c8d0f8a5a7c8d0f/3009'
  },
  {
    name: 'akarbgdao.eth',
    collection: 'ENS',
    image: 'https://metadata.ens.domains/mainnet/avatar/akarbgdao.eth',
    opensea: 'https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/akarbgdao.eth'
  },
  {
    name: 'macaubas.eth',
    collection: 'ENS',
    image: 'https://metadata.ens.domains/mainnet/avatar/macaubas.eth',
    opensea: 'https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/macaubas.eth'
  },
];

const stats = {
  totalValue: '$254.65',
  nftAllocation: '62%',
  tokenAllocation: '38%',
  totalItems: 28,
  joinedDate: 'MAR 2022'
};

export default function Collections() {
  const { language } = useLanguage();
  
  const t = {
    title: language === 'pt' ? 'Coleções' : 'Collections',
    subtitle: language === 'pt' 
      ? 'Meu portfólio de NFTs no Ethereum. Colecionando desde 2022.'
      : 'My NFT portfolio on Ethereum. Collecting since 2022.',
    portfolioValue: language === 'pt' ? 'Valor do Portfólio' : 'Portfolio Value',
    totalItems: language === 'pt' ? 'Total de Items' : 'Total Items',
    nfts: 'NFTs',
    tokens: 'Tokens',
    viewOnOpensea: language === 'pt' ? 'Ver no OpenSea' : 'View on OpenSea',
    featuredItems: language === 'pt' ? 'Items em Destaque' : 'Featured Items',
    allCollections: language === 'pt' ? 'Todas as Coleções' : 'All Collections',
    items: language === 'pt' ? 'items' : 'items',
  };

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
              <span className="meta-mono">cat /collections/nft.json</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t.title}<span className="cursor-blink text-primary">_</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              {t.subtitle}
            </p>

            {/* OpenSea Link */}
            <a
              href="https://opensea.io/oldfashiongui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors font-mono text-sm"
            >
              <Wallet size={16} />
              oldfashiongui
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="p-4 rounded-xl border border-border bg-card/50">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-primary" />
                <span className="text-xs font-mono text-muted-foreground">{t.portfolioValue}</span>
              </div>
              <div className="text-2xl font-bold">{stats.totalValue}</div>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/50">
              <div className="flex items-center gap-2 mb-2">
                <ImageIcon size={16} className="text-primary" />
                <span className="text-xs font-mono text-muted-foreground">{t.totalItems}</span>
              </div>
              <div className="text-2xl font-bold">{stats.totalItems}</div>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/50">
              <span className="text-xs font-mono text-muted-foreground">{t.nfts}</span>
              <div className="text-2xl font-bold text-primary">{stats.nftAllocation}</div>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card/50">
              <span className="text-xs font-mono text-muted-foreground">{t.tokens}</span>
              <div className="text-2xl font-bold">{stats.tokenAllocation}</div>
            </div>
          </motion.div>

          {/* Featured NFTs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-12"
          >
            <h2 className="flex items-center gap-2 text-xl font-display font-semibold mb-6">
              <span className="text-primary">{'>'}</span>
              {t.featuredItems}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredNFTs.map((nft, index) => (
                <motion.a
                  key={nft.name}
                  href={nft.opensea}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="group block rounded-xl border border-border bg-card/50 overflow-hidden hover:border-primary/50 transition-all"
                >
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <img 
                      src={nft.image} 
                      alt={nft.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400?text=NFT';
                      }}
                    />
                    {nft.rank && (
                      <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/70 text-xs font-mono">
                        #{nft.rank.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="font-mono text-xs text-primary/70 mb-1">{nft.collection}</div>
                    <div className="font-semibold text-sm truncate">{nft.name}</div>
                    {nft.topOffer && (
                      <div className="text-xs text-muted-foreground mt-1">
                        Top offer: {nft.topOffer}
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* All Collections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <h2 className="flex items-center gap-2 text-xl font-display font-semibold mb-6">
              <span className="text-primary">{'>'}</span>
              {t.allCollections}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {collections.map((collection, index) => (
                <motion.a
                  key={collection.slug}
                  href={`https://opensea.io/collection/${collection.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.03 }}
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ImageIcon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {collection.name}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {collection.count} {t.items}
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Coming Soon - TON Wallet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 rounded-xl border border-dashed border-border bg-card/20 text-center"
          >
            <div className="text-muted-foreground font-mono text-sm mb-2">
              {'// TODO: integrate TON wallet'}
            </div>
            <div className="text-xs text-muted-foreground">
              {language === 'pt' 
                ? 'Integração com carteira TON/Telegram em breve...'
                : 'TON/Telegram wallet integration coming soon...'}
            </div>
          </motion.div>
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
              <a href="https://opensea.io/oldfashiongui" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                OpenSea
              </a>
              <a href="https://twitter.com/guinicoli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com/in/guinicoli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
