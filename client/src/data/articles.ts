/**
 * Articles Data - Complete Portfolio
 * Categories:
 * - 'article': Written by Guilherme (original content)
 * - 'research': Academic/research publications
 * - 'media': Press mentions and interviews (not written by Guilherme)
 */

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  language: 'en' | 'pt';
  category: 'article' | 'research' | 'media';
  featured?: boolean;
  url: string;
  publication?: string;
  views?: number;
  heroImage?: string;
}

export const articles: Article[] = [
  // ==========================================
  // ARTICLES - Written by Guilherme
  // ==========================================
  
  // Canonical (hosted on site)
  {
    slug: 'tick-size-microestrutura',
    title: 'Tick Size, Microestrutura e Liquidez Funcional',
    excerpt: 'Como ajustes aparentemente técnicos redefinem o papel do mercado spot em stablecoins. Uma análise de microestrutura de mercado para reguladores, investidores e policy makers.',
    date: '2026.01.02',
    readTime: '15 min',
    tags: ['microestrutura', 'stablecoins', 'tick-size', 'otc', 'regulação'],
    language: 'pt',
    category: 'article',
    featured: true,
    url: '/writings/tick-size-microestrutura',
    publication: 'gui.dev',
    heroImage: '/images/article-tick-size-hero.png'
  },

  // Exame Future of Money
  {
    slug: 'stablecoins-vasps-sistema-financeiro',
    title: 'Stablecoins e VASPs na integração ao sistema financeiro brasileiro',
    excerpt: 'O Banco Central não só confirmou o regime de VASPs como elevou exchanges e infraestrutura de ativos digitais à categoria de infraestrutura crítica.',
    date: '2025.12.22',
    readTime: '8 min',
    tags: ['stablecoins', 'vasps', 'banco-central', 'regulação'],
    language: 'pt',
    category: 'article',
    featured: true,
    url: 'https://exame.com/future-of-money/stablecoins-e-vasps-na-integracao-ao-sistema-financeiro-brasileiro/',
    publication: 'Exame Future of Money',
    heroImage: '/images/article-crypto-regulation-hero.png'
  },
  
  // LinkedIn Newsletter - Web3 + Stablecoins Brief
  {
    slug: 'web3-novo-curriculo-profissional-digital',
    title: 'Web3: o novo currículo do profissional digital',
    excerpt: 'A nova linguagem da internet que está redefinindo carreiras, negócios e a própria ideia de propriedade.',
    date: '2025.12.22',
    readTime: '7 min',
    tags: ['web3', 'careers', 'digital-economy'],
    language: 'pt',
    category: 'article',
    url: 'https://pt.linkedin.com/pulse/web3-o-novo-curr%C3%ADculo-do-profissional-digital-guilherme-bissoli-zwj1e',
    publication: 'LinkedIn Newsletter'
  },
  {
    slug: 'pix-blockchain-redesenhando-sistema-financeiro',
    title: 'Pix e Blockchain: duas infraestruturas que estão redesenhando o sistema financeiro',
    excerpt: 'Como duas tecnologias aparentemente distintas estão convergindo para criar uma nova arquitetura financeira.',
    date: '2025.12.10',
    readTime: '8 min',
    tags: ['pix', 'blockchain', 'fintech', 'brazil'],
    language: 'pt',
    category: 'article',
    url: 'https://www.linkedin.com/pulse/pix-blockchain-duas-infraestruturas-que-est%C3%A3o-redesenhando-bissoli',
    publication: 'LinkedIn Newsletter'
  },
  {
    slug: 'revolucao-stablecoins-mundo-reorganizando',
    title: 'O que vem depois da revolução das stablecoins?',
    excerpt: 'As stablecoins deixaram de ser apenas um instrumento de trading. Elas estão se tornando a infraestrutura de pagamentos do século XXI.',
    date: '2025.11.25',
    readTime: '10 min',
    tags: ['stablecoins', 'payments', 'global-finance'],
    language: 'pt',
    category: 'article',
    featured: true,
    url: 'https://www.linkedin.com/pulse/o-que-vem-depois-da-revolu%C3%A7%C3%A3o-das-stablecoins-e-como-bissoli',
    publication: 'LinkedIn Newsletter',
    heroImage: '/images/article-stablecoins-hero.png'
  },
  {
    slug: 'stablecoins-transformando-cambio-internacional',
    title: 'Como as stablecoins estão transformando o mercado de câmbio internacional',
    excerpt: 'O mercado de FX movimenta $7.5 trilhões por dia. As stablecoins estão capturando uma fatia crescente desse volume.',
    date: '2025.11.17',
    readTime: '6 min',
    tags: ['stablecoins', 'fx', 'remittances'],
    language: 'pt',
    category: 'article',
    url: 'https://www.linkedin.com/pulse/como-stablecoins-est%C3%A3o-transformando-o-mercado-de-c%C3%A2mbio-bissoli',
    publication: 'LinkedIn Newsletter'
  },
  {
    slug: 'coins-xyz-brasil-nigeria-sul-global',
    title: 'Coins.xyz — Brasil, Nigéria e o Sul Global em Movimento',
    excerpt: 'Como estamos construindo infraestrutura financeira para mercados emergentes, conectando Brasil e África através de crypto.',
    date: '2025.09.12',
    readTime: '5 min',
    tags: ['coins-xyz', 'global-south', 'africa', 'brazil'],
    language: 'pt',
    category: 'article',
    url: 'https://www.linkedin.com/pulse/coinsxyz-brasil-nig%C3%A9ria-e-o-sul-global-em-movimento-guilherme-bissoli',
    publication: 'LinkedIn Newsletter'
  },
  {
    slug: 'filipinas-brasil-escalando-exchange-regulado',
    title: 'Da Filipinas ao Brasil: escalando um exchange regulado para o mainstream',
    excerpt: 'Lições aprendidas ao construir uma exchange de crypto em dois dos maiores mercados emergentes do mundo.',
    date: '2025.08.15',
    readTime: '9 min',
    tags: ['coins-xyz', 'regulation', 'scaling', 'emerging-markets'],
    language: 'pt',
    category: 'article',
    url: 'https://www.linkedin.com/pulse/da-filipinas-ao-brasil-como-estamos-escalando-um-exchange-bissoli',
    publication: 'LinkedIn Newsletter'
  },
  {
    slug: 'futuro-stablecoins-sul-global',
    title: 'O Futuro das Stablecoins e o Sul Global',
    excerpt: 'Por que as stablecoins são mais relevantes para mercados emergentes do que para economias desenvolvidas.',
    date: '2025.07.20',
    readTime: '8 min',
    tags: ['stablecoins', 'global-south', 'financial-inclusion'],
    language: 'pt',
    category: 'article',
    url: 'https://www.linkedin.com/pulse/o-futuro-das-stablecoins-e-o-sul-global-redefinindo-fluxo-bissoli',
    publication: 'LinkedIn Newsletter'
  },
  {
    slug: 'construindo-coins-xyz-brasil',
    title: 'Construindo a Coins.xyz Brasil: Lições e Desafios',
    excerpt: 'Um ano de aprendizados construindo uma exchange de crypto no Brasil. O que funcionou, o que não funcionou.',
    date: '2025.02.10',
    readTime: '12 min',
    tags: ['coins-xyz', 'startup', 'lessons-learned', 'brazil'],
    language: 'pt',
    category: 'article',
    featured: true,
    url: 'https://www.linkedin.com/pulse/construindo-coinsxyz-li%C3%A7%C3%B5es-desafios-e-nossa-vis%C3%A3o-para-bissoli',
    publication: 'LinkedIn Newsletter'
  },
  
  // Hackernoon - Cybersecurity (2019)
  {
    slug: 'uncovering-hidden-ssids',
    title: 'UNCOVERING HIDDEN SSIDs',
    excerpt: 'A deep dive into wireless network security and how to discover hidden network identifiers using Kali Linux tools.',
    date: '2019.10.12',
    readTime: '4 min',
    tags: ['cybersecurity', 'kali-linux', 'penetration-testing', 'wifi'],
    language: 'en',
    category: 'article',
    featured: true,
    url: 'https://hackernoon.com/u/guiguibashow',
    publication: 'Hackernoon',
    views: 9860
  },
  {
    slug: 'installing-kali-linux-vm',
    title: 'Installing KALI LINUX on a Virtual Machine [A Step by Step Guide]',
    excerpt: 'Complete guide to setting up Kali Linux in a virtual environment for security testing and learning.',
    date: '2019.10.18',
    readTime: '6 min',
    tags: ['kali-linux', 'virtual-machine', 'tutorial', 'cybersecurity'],
    language: 'en',
    category: 'article',
    url: 'https://hackernoon.com/u/guiguibashow',
    publication: 'Hackernoon',
    views: 3243
  },
  {
    slug: 'wireless-router-better-than-yours',
    title: 'My Wireless Router is Better than Yours',
    excerpt: 'Exploring wireless router security features and why your choice of router matters for network security.',
    date: '2019.10.18',
    readTime: '3 min',
    tags: ['wifi', 'security', 'networking', 'kali'],
    language: 'en',
    category: 'article',
    url: 'https://hackernoon.com/u/guiguibashow',
    publication: 'Hackernoon',
    views: 2619
  },
  {
    slug: 'installing-virtualbox-mac',
    title: 'Installing Virtual Box ON Mac OS',
    excerpt: 'Quick guide to get VirtualBox running on macOS for virtualization and security testing.',
    date: '2019.10.14',
    readTime: '3 min',
    tags: ['virtualbox', 'macos', 'tutorial', 'virtualization'],
    language: 'en',
    category: 'article',
    url: 'https://hackernoon.com/u/guiguibashow',
    publication: 'Hackernoon',
    views: 499
  },

  // ==========================================
  // RESEARCH - Academic & Research Publications
  // ==========================================
  
  // Old Fashion Research (2022)
  {
    slug: 'ofr-gamefi-web3-session',
    title: 'OFR Insight Sharing Session #6 - Web3 & GameFi',
    excerpt: 'Perspectives on Outlook & Design from a Builder. Featuring Kevin Kim, COO of Genopets, on GameFi fundamentals.',
    date: '2022.08.23',
    readTime: '4 min',
    tags: ['gamefi', 'web3', 'genopets', 'game-design'],
    language: 'en',
    category: 'research',
    url: 'https://paragraph.com/@old-fashion-research/ofr-insight-sharing-session-6-web3-gamefi-perspectives-on-outlook-design-from-a-builder',
    publication: 'Old Fashion Research'
  },
  {
    slug: 'polygon-expanding-frontiers',
    title: 'Polygon - Expanding the Frontiers',
    excerpt: 'Among all public chains, Polygon behaves like a more well-balanced player with a few deadly weapons.',
    date: '2022.12.20',
    readTime: '10 min',
    tags: ['polygon', 'layer-2', 'zk', 'infrastructure'],
    language: 'en',
    category: 'research',
    url: 'https://paragraph.com/@old-fashion-research/polygon-expanding-the-frontiers',
    publication: 'Old Fashion Research'
  },
  {
    slug: 'cex-dex-paradigm-shift-ftx',
    title: 'A paradigm shift from CEX to DEX as FTX goes bankrupt?',
    excerpt: 'Analyzing the market dynamics after FTX collapse and what it means for centralized vs decentralized exchanges.',
    date: '2022.11.30',
    readTime: '6 min',
    tags: ['cex', 'dex', 'ftx', 'market-analysis'],
    language: 'en',
    category: 'research',
    url: 'https://paragraph.com/@old-fashion-research/a-paradigm-shift-from-cex-to-dex-as-ftx-goes-bankrupt',
    publication: 'Old Fashion Research'
  },
  {
    slug: 'dao-infrastructure-advent',
    title: 'Next Alpha: The Advent of DAO Infrastructure',
    excerpt: 'DAO tools are emerging to help DAOs overcome challenges and optimize their operations in the next bull cycle.',
    date: '2022.10.25',
    readTime: '8 min',
    tags: ['dao', 'infrastructure', 'web3', 'governance'],
    language: 'en',
    category: 'research',
    url: 'https://paragraph.com/@old-fashion-research/next-alpha-the-advent-of-dao-infrastructure',
    publication: 'Old Fashion Research'
  },
  {
    slug: 'omnichain-interoperability',
    title: 'OFR Insight Sharing Session #10 - Achieving Omnichain Interoperability',
    excerpt: 'Deep dive into cross-chain solutions and the future of blockchain interoperability.',
    date: '2022.11.15',
    readTime: '5 min',
    tags: ['omnichain', 'interoperability', 'cross-chain', 'infrastructure'],
    language: 'en',
    category: 'research',
    url: 'https://paragraph.com/@old-fashion-research/ofr-insight-sharing-session-10-achieving-omnichain-interoperability',
    publication: 'Old Fashion Research'
  },
  
  // ABToken Reports
  {
    slug: 'abtoken-rwa-manual',
    title: 'Manual RWA: Tokenização de Ativos do Mundo Real',
    excerpt: 'Nos bastidores da transformação digital do sistema financeiro, a tokenização de ativos do mundo real ganha cada vez mais força.',
    date: '2025.10.01',
    readTime: '20 min',
    tags: ['rwa', 'tokenization', 'abtoken', 'regulation'],
    language: 'pt',
    category: 'research',
    url: 'https://abtoken.com.br/wp-content/uploads/2025/10/ABTOKEN-Manual-RWA1.pdf',
    publication: 'ABToken'
  },
  {
    slug: 'abtoken-tokenizacao-eficiencia',
    title: 'A Tokenização como Veículo de Eficiência Operacional',
    excerpt: 'Transformando processos operacionais com automação, rastreabilidade e transparência, gerando resultados concretos para empresas e investidores.',
    date: '2025.07.01',
    readTime: '15 min',
    tags: ['tokenization', 'efficiency', 'abtoken', 'infrastructure'],
    language: 'pt',
    category: 'research',
    url: 'https://abtoken.com.br/wp-content/uploads/2025/07/ABTOKEN-Tokenizacao-como-veiculo-de-eficiencia-operacional-.pdf',
    publication: 'ABToken'
  },

  // Academic
  {
    slug: 'credit-spreads-real-economic-activity',
    title: 'Credit spreads and real economic activity',
    excerpt: "Master's thesis examining the relationship between credit spreads and macroeconomic indicators at Erasmus University Rotterdam.",
    date: '2014.07.24',
    readTime: '45 min',
    tags: ['finance', 'credit-spreads', 'economics', 'thesis'],
    language: 'en',
    category: 'research',
    url: 'http://hdl.handle.net/2105/22123',
    publication: 'Erasmus University Rotterdam'
  },

  // ==========================================
  // MEDIA - Press mentions & interviews (not written by Guilherme)
  // ==========================================
  {
    slug: 'valor-economico-bitcoin-2025',
    title: 'Do "efeito-Trump" à aversão a risco: por que 2025 frustrou as apostas no Bitcoin',
    excerpt: '"Saímos do modo experimento e entramos no modo infraestrutura de sistema financeiro."',
    date: '2025.12.31',
    readTime: '2 min',
    tags: ['bitcoin', 'market-analysis', 'interview'],
    language: 'pt',
    category: 'media',
    url: 'https://valor.globo.com/financas/criptomoedas/noticia/2025/12/31/do-efeito-trump-a-aversao-a-risco-por-que-2025-frustrou-as-apostas-no-bitcoin.ghtml',
    publication: 'Valor Econômico'
  },
  {
    slug: 'uol-bitcoin-hackeado',
    title: 'Bitcoin pode ser hackeado? Especialistas explicam por que isso é improvável',
    excerpt: '"Para tentar algo assim hoje, seria necessário controlar uma infraestrutura de mineração e consumo de energia comparável à de países inteiros."',
    date: '2025.12.22',
    readTime: '5 min',
    tags: ['bitcoin', 'security', 'mining', 'interview'],
    language: 'pt',
    category: 'media',
    url: 'https://economia.uol.com.br/noticias/redacao/2025/12/22/bitcoin-pode-ser-hackeado.htm',
    publication: 'UOL Economia'
  },
  {
    slug: 'coinsxyz-launches-brazil',
    title: 'Coins.xyz Launches in Brazil, Offers Game-Changing Solution for Foreign Businesses',
    excerpt: 'Former head of fiat at Binance leads Brazil operations for Coins.xyz infrastructure platform.',
    date: '2025.01.16',
    readTime: '3 min',
    tags: ['coins-xyz', 'brazil', 'infrastructure', 'launch'],
    language: 'en',
    category: 'media',
    url: 'https://www.investing.com/news/cryptocurrency-news/coinsxyz-launches-in-brazil-offers-gamechanging-solution-for-foreign-businesses-3817362',
    publication: 'Investing.com'
  },
  {
    slug: 'livecoins-abtoken-coins',
    title: 'Coins.xyz se filia à ABToken e reforça compromisso com o desenvolvimento regulado da tokenização no Brasil',
    excerpt: 'A Coins.xyz é uma plataforma global de criptoativos que conecta pessoas e empresas ao ecossistema digital de forma segura.',
    date: '2025.10.15',
    readTime: '3 min',
    tags: ['coins-xyz', 'abtoken', 'tokenization', 'regulation'],
    language: 'pt',
    category: 'media',
    url: 'https://livecoins.com.br/coins-xyz-se-filia-a-abtoken-e-reforca-compromisso-com-o-desenvolvimento-regulado-da-tokenizacao-no-brasil/',
    publication: 'Livecoins'
  }
];

// Helper functions
export const getFeaturedArticles = () => articles.filter(a => a.featured);
export const getArticleBySlug = (slug: string) => articles.find(a => a.slug === slug);
export const getAllTags = () => Array.from(new Set(articles.flatMap(a => a.tags))).sort();
export const getArticlesByLanguage = (lang: 'en' | 'pt') => articles.filter(a => a.language === lang);
export const getArticlesByCategory = (cat: 'article' | 'research' | 'media') => articles.filter(a => a.category === cat);
export const getMyArticles = () => articles.filter(a => a.category === 'article');
export const getMediaMentions = () => articles.filter(a => a.category === 'media');
export const getResearchPapers = () => articles.filter(a => a.category === 'research');
