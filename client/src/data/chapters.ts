/**
 * Career Chapters Data
 * Biographical sections for the portfolio site
 * Each chapter represents a significant career period
 */

export interface ChapterContent {
  id: string;
  type: 'article' | 'podcast' | 'report' | 'media' | 'announcement';
  title: string;
  titlePt?: string;
  titleZh?: string;
  description: string;
  descriptionPt?: string;
  descriptionZh?: string;
  date: string;
  url?: string;
  authors?: string[];
  role?: string; // Guilherme's specific role in this content
  tags: string[];
  featured?: boolean;
}

export interface CareerChapter {
  id: string;
  slug: string;
  company: string;
  role: string;
  rolePt: string;
  period: string;
  logo?: string;
  heroImage?: string;
  description: string;
  descriptionPt: string;
  descriptionZh?: string;
  thesis?: string;
  thesisPt?: string;
  highlights: string[];
  highlightsPt: string[];
  content: ChapterContent[];
  status: 'active' | 'complete' | 'building'; // 'building' = under construction
  order: number;
}

export const careerChapters: CareerChapter[] = [
  {
    id: 'coins-xyz',
    slug: 'coins-xyz',
    company: 'Coins.xyz',
    role: 'Managing Partner, Brazil',
    rolePt: 'Sócio-Diretor, Brasil',
    period: '2024 - Present',
    logo: '/images/logos/coins-xyz.svg',
    heroImage: '/images/chapters/coins-hero.png',
    description: 'Leading the expansion of Coins.xyz into Latin America and Africa. Building crypto infrastructure for the Global South—regulated, scalable, and designed for millions of underserved users.',
    descriptionPt: 'Liderando a expansão da Coins.xyz para América Latina e África. Construindo infraestrutura cripto para o Sul Global—regulada, escalável e projetada para milhões de usuários historicamente desassistidos.',
    descriptionZh: '领导Coins.xyz向拉丁美洲和非洲扩张。为全球南方构建加密基础设施——受监管、可扩展，专为数百万服务不足的用户设计。',
    thesis: 'The next wave of financial innovation will come from emerging markets. Crypto infrastructure enables this by providing rails that traditional finance never built.',
    thesisPt: 'A próxima onda de inovação financeira virá dos mercados emergentes. A infraestrutura cripto viabiliza isso ao fornecer trilhos que as finanças tradicionais nunca construíram.',
    highlights: [
      'Scaled operations from 0 to regulated exchange in Brazil',
      'Built OTC desk serving institutional clients',
      'Integrated PIX for instant BRL settlements',
      'Expanded B2B partnerships across LatAm',
    ],
    highlightsPt: [
      'Escalou operações de 0 para exchange regulada no Brasil',
      'Construiu mesa OTC atendendo clientes institucionais',
      'Integrou PIX para liquidações instantâneas em BRL',
      'Expandiu parcerias B2B pela América Latina',
    ],
    content: [], // Will be populated with writings tagged coins-xyz
    status: 'active',
    order: 1,
  },
  {
    id: 'old-fashion-research',
    slug: 'old-fashion-research',
    company: 'Old Fashion Research',
    role: 'Principal',
    rolePt: 'Principal',
    period: '2021 - 2024',
    logo: '/images/logos/ofr.svg',
    heroImage: '/images/chapters/ofr-hero.png',
    description: 'Asian multi-strategy blockchain investment fund. Led deal origination and participated in the editorial review process for research publications across 50+ Web3 investments.',
    descriptionPt: 'Fundo de investimento em blockchain multi-estratégia asiático. Liderou originação de deals e participou do processo de revisão editorial para publicações de research em mais de 50 investimentos Web3.',
    descriptionZh: '亚洲多策略区块链投资基金。主导交易发起，参与50多个Web3投资的研究出版物编辑审核流程。',
    thesis: 'The best Web3 investments combine strong technology with community-driven governance and real utility.',
    thesisPt: 'Os melhores investimentos Web3 combinam tecnologia sólida com governança orientada pela comunidade e utilidade real.',
    highlights: [
      'Participated in 50+ Web3 deals across multiple cycles',
      'Editorial contributor for research publications',
      'Focus areas: GameFi, DAOs, infrastructure',
      'Part of the $100M venture fund launch',
    ],
    highlightsPt: [
      'Participou de mais de 50 deals Web3 em múltiplos ciclos',
      'Contribuidor editorial para publicações de research',
      'Áreas de foco: GameFi, DAOs, infraestrutura',
      'Parte do lançamento do fundo de venture de $100M',
    ],
    content: [
      {
        id: 'ofr-fund-launch',
        type: 'announcement',
        title: 'Old Fashion Research Announces the Launch of $100M Venture Fund Led by Former Binance Executives',
        titlePt: 'Old Fashion Research Anuncia Lançamento de Fundo de Venture de $100M Liderado por Ex-Executivos da Binance',
        description: 'Official announcement of OFR\'s venture fund, backed by former Binance leadership.',
        descriptionPt: 'Anúncio oficial do fundo de venture da OFR, apoiado por ex-liderança da Binance.',
        date: '2022-03-15',
        url: 'https://paragraph.com/@old-fashion-research',
        role: 'Principal, Deal Origination',
        tags: ['venture-capital', 'fund', 'announcement'],
        featured: true,
      },
      {
        id: 'ofr-0n1-force',
        type: 'article',
        title: 'Reshaping a Web3 Brand: 0N1 Force\'s First Step into Entertainment',
        titlePt: 'Remodelando uma Marca Web3: O Primeiro Passo da 0N1 Force no Entretenimento',
        titleZh: '重塑一个Web3品牌：0N1 Force的娱乐版图第一步',
        description: 'Analysis of 0N1 Force\'s brand revival and entertainment strategy.',
        descriptionPt: 'Análise da revitalização da marca 0N1 Force e estratégia de entretenimento.',
        date: '2023-06-05',
        url: 'https://paragraph.com/@old-fashion-research',
        authors: ['Kathy (Investor of OFR)'],
        role: 'Editorial Review',
        tags: ['nft', '0n1-force', 'entertainment', 'brand'],
        featured: true,
      },
      {
        id: 'ofr-polygon',
        type: 'report',
        title: 'Polygon - Expanding the Frontiers',
        titlePt: 'Polygon - Expandindo as Fronteiras',
        titleZh: 'Polygon — 不断进取的行业领军者',
        description: 'Deep dive into Polygon\'s ecosystem and growth strategy.',
        descriptionPt: 'Análise aprofundada do ecossistema e estratégia de crescimento da Polygon.',
        date: '2022-12-20',
        url: 'https://paragraph.com/@old-fashion-research',
        authors: ['JX (Partner of OFR)', 'Nicole Cheng (Investment Director of OFR)'],
        role: 'Editorial Review',
        tags: ['polygon', 'layer-2', 'infrastructure', 'research'],
      },
      {
        id: 'ofr-dao-infrastructure',
        type: 'report',
        title: 'Next Alpha: The Advent of DAO Infrastructure',
        titlePt: 'Próximo Alpha: O Advento da Infraestrutura DAO',
        titleZh: '下一个Alpha: DAO基础设施的出现',
        description: 'Research on emerging DAO tooling and governance infrastructure.',
        descriptionPt: 'Pesquisa sobre ferramentas emergentes de DAO e infraestrutura de governança.',
        date: '2022-10-25',
        url: 'https://paragraph.com/@old-fashion-research',
        authors: ['Alastair (Analyst of OFR)', 'Eraince (Team member of OFR)'],
        role: 'Editorial Review, Advisor',
        tags: ['dao', 'governance', 'infrastructure', 'research'],
      },
      {
        id: 'ofr-cex-dex',
        type: 'article',
        title: 'A paradigm shift from CEX to DEX as FTX goes bankrupt?',
        titlePt: 'Uma mudança de paradigma de CEX para DEX com a falência da FTX?',
        titleZh: 'FTX破产后，CEX到DEX是范式转移吗？',
        description: 'Analysis of exchange dynamics post-FTX collapse.',
        descriptionPt: 'Análise da dinâmica de exchanges pós-colapso da FTX.',
        date: '2022-11-30',
        url: 'https://paragraph.com/@old-fashion-research',
        authors: ['@bigfatpenguinQ (Analyst of OFR)'],
        role: 'Editorial Review',
        tags: ['ftx', 'cex', 'dex', 'exchanges'],
      },
      {
        id: 'ofr-arweave',
        type: 'article',
        title: 'How Arweave Will Change the Way You Think About Web3.0 Storage',
        titlePt: 'Como Arweave Vai Mudar a Forma Como Você Pensa Sobre Armazenamento Web3.0',
        description: 'Deep dive into Arweave\'s permanent storage solution.',
        descriptionPt: 'Análise aprofundada da solução de armazenamento permanente da Arweave.',
        date: '2022-08-15',
        url: 'https://paragraph.com/@old-fashion-research',
        role: 'Editorial Review',
        tags: ['arweave', 'storage', 'infrastructure'],
      },
      {
        id: 'ofr-el-salvador',
        type: 'article',
        title: 'El Salvador Bitcoin as Legal Tender: Current Status and Prospects',
        titlePt: 'Bitcoin como Moeda Legal em El Salvador: Status Atual e Perspectivas',
        titleZh: '萨尔瓦多比特币作为法定货币的现状与前景',
        description: 'Analysis of El Salvador\'s Bitcoin adoption experiment.',
        descriptionPt: 'Análise do experimento de adoção de Bitcoin em El Salvador.',
        date: '2022-09-10',
        url: 'https://paragraph.com/@old-fashion-research',
        role: 'Editorial Review',
        tags: ['bitcoin', 'el-salvador', 'regulation', 'adoption'],
      },
    ],
    status: 'complete',
    order: 2,
  },
  {
    id: 'binance',
    slug: 'binance',
    company: 'Binance',
    role: 'Fiat Director',
    rolePt: 'Diretor de Fiat',
    period: '2019 - 2021',
    logo: '/images/logos/binance.svg',
    heroImage: '/images/chapters/binance-hero.png',
    description: 'Scaled fiat integrations and fintech partnerships during the exchange\'s hyper-growth phase in Brazil. Built the rails connecting traditional banking to crypto.',
    descriptionPt: 'Escalou integrações fiat e parcerias fintech durante a fase de hipercrescimento da exchange no Brasil. Construiu os trilhos conectando o sistema bancário tradicional ao cripto.',
    descriptionZh: '在交易所巴西高速增长期间，扩展法币集成和金融科技合作伙伴关系。构建连接传统银行与加密货币的轨道。',
    thesis: 'Crypto adoption requires seamless fiat on/off ramps. The easier it is to move between traditional and crypto rails, the faster adoption grows.',
    thesisPt: 'A adoção de cripto requer rampas de entrada/saída fiat sem fricção. Quanto mais fácil for mover entre trilhos tradicionais e cripto, mais rápido cresce a adoção.',
    highlights: [
      'Scaled fiat operations during hyper-growth',
      'Built banking partnerships across Brazil',
      'Integrated local payment methods',
      'Part of the team that made Binance #1 in Brazil',
    ],
    highlightsPt: [
      'Escalou operações fiat durante hipercrescimento',
      'Construiu parcerias bancárias pelo Brasil',
      'Integrou métodos de pagamento locais',
      'Parte do time que fez a Binance #1 no Brasil',
    ],
    content: [],
    status: 'building', // Under construction
    order: 3,
  },
  {
    id: 'btg-pactual',
    slug: 'btg-pactual',
    company: 'BTG Pactual',
    role: 'Graduate Trainee',
    rolePt: 'Trainee',
    period: '2014 - 2016',
    logo: '/images/logos/btg.svg',
    heroImage: '/images/chapters/btg-hero.png',
    description: 'Traditional finance foundations. M&A, capital markets, financial modeling. Learned how the old system works before trying to improve it.',
    descriptionPt: 'Fundamentos de finanças tradicionais. M&A, mercado de capitais, modelagem financeira. Aprendi como o sistema antigo funciona antes de tentar melhorá-lo.',
    thesis: 'Understanding traditional finance is essential to building better alternatives.',
    thesisPt: 'Entender finanças tradicionais é essencial para construir alternativas melhores.',
    highlights: [
      'Investment banking fundamentals',
      'M&A deal execution',
      'Financial modeling',
      'Capital markets experience',
    ],
    highlightsPt: [
      'Fundamentos de investment banking',
      'Execução de deals de M&A',
      'Modelagem financeira',
      'Experiência em mercado de capitais',
    ],
    content: [],
    status: 'building', // Under construction
    order: 4,
  },
];

export function getChapterBySlug(slug: string): CareerChapter | undefined {
  return careerChapters.find(chapter => chapter.slug === slug);
}

export function getActiveChapters(): CareerChapter[] {
  return careerChapters.filter(chapter => chapter.status !== 'building').sort((a, b) => a.order - b.order);
}

export function getAllChapters(): CareerChapter[] {
  return careerChapters.sort((a, b) => a.order - b.order);
}
