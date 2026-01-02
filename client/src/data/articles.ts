/**
 * Articles Data - Imported from LinkedIn Newsletter
 * Web3 + Stablecoins Brief
 */

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  linkedinUrl?: string;
}

export const articles: Article[] = [
  {
    slug: 'web3-novo-curriculo-profissional-digital',
    title: 'Web3: o novo currículo do profissional digital',
    excerpt: 'A nova linguagem da internet que está redefinindo carreiras, negócios e a própria ideia de propriedade. Existe um movimento silencioso, mas profundo e acontecendo na economia digital.',
    date: '2025.12.22',
    readTime: '7 min',
    tags: ['web3', 'careers', 'digital-economy'],
    featured: true,
    linkedinUrl: 'https://pt.linkedin.com/pulse/web3-o-novo-curr%C3%ADculo-do-profissional-digital-guilherme-bissoli-zwj1e'
  },
  {
    slug: 'pix-blockchain-redesenhando-sistema-financeiro',
    title: 'Pix e Blockchain: duas infraestruturas que estão redesenhando o sistema financeiro',
    excerpt: 'Como duas tecnologias aparentemente distintas estão convergindo para criar uma nova arquitetura financeira no Brasil e no mundo.',
    date: '2025.12.10',
    readTime: '8 min',
    tags: ['pix', 'blockchain', 'fintech', 'brazil'],
    linkedinUrl: 'https://www.linkedin.com/pulse/pix-blockchain-duas-infraestruturas-que-est%C3%A3o-redesenhando-bissoli'
  },
  {
    slug: 'revolucao-stablecoins-mundo-reorganizando',
    title: 'O que vem depois da revolução das stablecoins e como o mundo está se reorganizando ao redor delas?',
    excerpt: 'As stablecoins deixaram de ser apenas um instrumento de trading. Elas estão se tornando a infraestrutura de pagamentos do século XXI.',
    date: '2025.11.25',
    readTime: '10 min',
    tags: ['stablecoins', 'payments', 'global-finance'],
    featured: true,
    linkedinUrl: 'https://www.linkedin.com/pulse/o-que-vem-depois-da-revolu%C3%A7%C3%A3o-das-stablecoins-e-como-bissoli'
  },
  {
    slug: 'stablecoins-transformando-cambio-internacional',
    title: 'Como as stablecoins estão transformando o mercado de câmbio internacional',
    excerpt: 'O mercado de FX movimenta $7.5 trilhões por dia. As stablecoins estão capturando uma fatia crescente desse volume.',
    date: '2025.11.17',
    readTime: '6 min',
    tags: ['stablecoins', 'fx', 'remittances'],
    linkedinUrl: 'https://www.linkedin.com/pulse/como-stablecoins-est%C3%A3o-transformando-o-mercado-de-c%C3%A2mbio-bissoli'
  },
  {
    slug: 'coins-xyz-brasil-nigeria-sul-global',
    title: 'Coins.xyz — Brasil, Nigéria e o Sul Global em Movimento',
    excerpt: 'Como estamos construindo infraestrutura financeira para mercados emergentes, conectando Brasil e África através de crypto.',
    date: '2025.09.12',
    readTime: '5 min',
    tags: ['coins-xyz', 'global-south', 'africa', 'brazil'],
    linkedinUrl: 'https://www.linkedin.com/pulse/coinsxyz-brasil-nig%C3%A9ria-e-o-sul-global-em-movimento-guilherme-bissoli'
  },
  {
    slug: 'filipinas-brasil-escalando-exchange-regulado',
    title: 'Da Filipinas ao Brasil: como estamos escalando um exchange regulado para o mainstream',
    excerpt: 'Lições aprendidas ao construir uma exchange de crypto em dois dos maiores mercados emergentes do mundo.',
    date: '2025.08.15',
    readTime: '9 min',
    tags: ['coins-xyz', 'regulation', 'scaling', 'emerging-markets'],
    linkedinUrl: 'https://www.linkedin.com/pulse/da-filipinas-ao-brasil-como-estamos-escalando-um-exchange-bissoli'
  },
  {
    slug: 'futuro-stablecoins-sul-global',
    title: 'O Futuro das Stablecoins e o Sul Global: Redefinindo o Fluxo de Valor',
    excerpt: 'Por que as stablecoins são mais relevantes para mercados emergentes do que para economias desenvolvidas.',
    date: '2025.07.20',
    readTime: '8 min',
    tags: ['stablecoins', 'global-south', 'financial-inclusion'],
    linkedinUrl: 'https://www.linkedin.com/pulse/o-futuro-das-stablecoins-e-o-sul-global-redefinindo-fluxo-bissoli'
  },
  {
    slug: 'construindo-coins-xyz-brasil-licoes-desafios',
    title: 'Construindo a Coins.xyz 🇧🇷: Lições, Desafios e Nossa Visão para o Futuro',
    excerpt: 'Um ano de aprendizados construindo uma exchange de crypto no Brasil. O que funcionou, o que não funcionou, e para onde estamos indo.',
    date: '2025.02.10',
    readTime: '12 min',
    tags: ['coins-xyz', 'startup', 'lessons-learned', 'brazil'],
    featured: true,
    linkedinUrl: 'https://www.linkedin.com/pulse/construindo-coinsxyz-li%C3%A7%C3%B5es-desafios-e-nossa-vis%C3%A3o-para-bissoli'
  }
];

export const getFeaturedArticles = () => articles.filter(a => a.featured);
export const getArticleBySlug = (slug: string) => articles.find(a => a.slug === slug);
export const getAllTags = () => Array.from(new Set(articles.flatMap(a => a.tags)));
