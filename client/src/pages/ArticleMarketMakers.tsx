/**
 * Artigo Canonical: Market Makers Cripto - Como Funciona a Provisão de Liquidez
 * Design: NYT Editorial Style - hero image, elegant typography
 * Trilingual support: PT, EN, ZH
 */
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Headphones } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import AudioPlayer from '@/components/AudioPlayer';
import { useLanguage } from '@/contexts/LanguageContext';

// Full article text for TTS
const articleTextPt = `
Market Makers Cripto: Como Funciona a Provisão de Liquidez.

A liquidez não surge espontaneamente em mercados de criptoativos. Ela é construída e mantida por agentes especializados que assumem riscos de inventário em troca de capturar o spread entre compra e venda. Compreender o papel dos market makers é essencial para avaliar a qualidade de qualquer mercado organizado.

Market makers são participantes que cotam continuamente preços de compra e venda para um ativo, comprometendo-se a executar ordens em ambas as direções. Ao fazer isso, eles fornecem liquidez imediata para outros participantes que desejam comprar ou vender sem esperar por uma contraparte natural.

O modelo de negócio do market maker é relativamente simples em conceito, mas complexo em execução. Ele lucra com o spread bid-ask — a diferença entre o preço pelo qual compra e o preço pelo qual vende. Se um market maker cota compra a 100 e venda a 101, ele captura 1 unidade de spread a cada ciclo completo de compra e venda.

No entanto, esse lucro vem acompanhado de riscos significativos. O principal é o risco de inventário. Se o mercado se move contra a posição acumulada do market maker, ele pode sofrer perdas que excedem os ganhos de spread. Um market maker que acumula posição comprada em um ativo que despenca enfrenta prejuízo substancial.

Para gerenciar esse risco, market makers utilizam diversas estratégias. A primeira é o ajuste dinâmico de preços. Quando o inventário se desvia do nível desejado, o market maker ajusta suas cotações para incentivar fluxo na direção que rebalanceia sua posição. Se está muito comprado, reduz o preço de compra e aumenta o de venda.

A segunda estratégia é o hedge em mercados correlacionados. Um market maker de Bitcoin pode hedge sua exposição em mercados de futuros ou opções. Isso permite que ele continue fornecendo liquidez no mercado spot enquanto limita seu risco direcional.

A terceira estratégia é a diversificação entre múltiplos pares e exchanges. Ao operar em diversos mercados simultaneamente, o market maker reduz sua exposição a movimentos específicos de um único ativo ou venue.

Em mercados de criptoativos, existem dois modelos principais de provisão de liquidez. O primeiro é o market making tradicional, onde uma entidade centralizada cota preços e gerencia inventário. Esse modelo predomina em exchanges centralizadas como Binance, Coinbase e Kraken.

O segundo modelo é o Automated Market Maker, ou AMM, que opera em protocolos de finanças descentralizadas. Em vez de um agente cotando preços, um algoritmo determina preços com base em fórmulas matemáticas e pools de liquidez. O modelo mais comum é o x vezes y igual a k, onde o produto das quantidades de dois ativos em um pool permanece constante.

Os AMMs democratizaram a provisão de liquidez, permitindo que qualquer pessoa deposite ativos em pools e receba uma fração das taxas de trading. No entanto, eles introduzem riscos específicos, como o impermanent loss — a perda potencial comparada a simplesmente manter os ativos fora do pool.

A qualidade de um market maker pode ser avaliada por métricas específicas. A primeira é o uptime — a porcentagem do tempo em que suas cotações estão ativas no mercado. Market makers de qualidade mantêm presença contínua, mesmo em períodos de alta volatilidade.

A segunda métrica é o spread médio oferecido. Spreads mais apertados indicam maior competitividade e beneficiam os tomadores de liquidez. A terceira é a profundidade das cotações — quanto volume o market maker está disposto a negociar em cada nível de preço.

Para exchanges e projetos de tokens, a escolha de market makers é decisão estratégica crítica. Um market maker de qualidade melhora a experiência de trading, atrai mais volume, e contribui para descoberta de preço eficiente. Um market maker de baixa qualidade pode criar spreads excessivos, liquidez superficial, e até manipulação de preços.

O mercado de market making cripto é dominado por algumas firmas especializadas. Empresas como Wintermute, Jump Crypto, Alameda Research (antes de seu colapso), GSR, e DWF Labs são conhecidas por operar em múltiplas exchanges e pares. Essas firmas tipicamente negociam acordos com projetos de tokens que incluem empréstimos de tokens e compromissos de liquidez mínima.

A regulação de market makers em cripto ainda é incipiente na maioria das jurisdições. No Brasil, as Resoluções 519-521 do Banco Central estabelecem requisitos para prestadores de serviços de ativos virtuais, mas não definem regras específicas para atividades de market making. Essa lacuna regulatória cria tanto oportunidades quanto riscos.

Em síntese, market makers são a infraestrutura invisível que permite que mercados funcionem de forma eficiente. Sem eles, spreads seriam mais amplos, execução seria mais lenta, e a descoberta de preço seria prejudicada. Compreender seu papel é fundamental para qualquer participante sério no ecossistema de criptoativos.
`;

const articleTextEn = `
Crypto Market Makers: How Liquidity Provision Works.

Liquidity does not arise spontaneously in crypto asset markets. It is built and maintained by specialized agents who assume inventory risks in exchange for capturing the spread between buy and sell. Understanding the role of market makers is essential to evaluate the quality of any organized market.

Market makers are participants who continuously quote buy and sell prices for an asset, committing to execute orders in both directions. By doing so, they provide immediate liquidity for other participants who want to buy or sell without waiting for a natural counterparty.

The market maker's business model is relatively simple in concept, but complex in execution. They profit from the bid-ask spread — the difference between the price at which they buy and the price at which they sell. If a market maker quotes buy at 100 and sell at 101, they capture 1 unit of spread for each complete buy-sell cycle.

However, this profit comes with significant risks. The main one is inventory risk. If the market moves against the market maker's accumulated position, they can suffer losses that exceed spread gains. A market maker who accumulates a long position in an asset that plummets faces substantial loss.

To manage this risk, market makers use various strategies. The first is dynamic price adjustment. When inventory deviates from the desired level, the market maker adjusts quotes to incentivize flow in the direction that rebalances their position. If too long, they lower the buy price and raise the sell price.

The second strategy is hedging in correlated markets. A Bitcoin market maker can hedge exposure in futures or options markets. This allows them to continue providing liquidity in the spot market while limiting directional risk.

The third strategy is diversification across multiple pairs and exchanges. By operating in various markets simultaneously, the market maker reduces exposure to specific movements of a single asset or venue.

In crypto asset markets, there are two main models of liquidity provision. The first is traditional market making, where a centralized entity quotes prices and manages inventory. This model predominates in centralized exchanges like Binance, Coinbase, and Kraken.

The second model is the Automated Market Maker, or AMM, which operates in decentralized finance protocols. Instead of an agent quoting prices, an algorithm determines prices based on mathematical formulas and liquidity pools. The most common model is x times y equals k, where the product of quantities of two assets in a pool remains constant.

AMMs democratized liquidity provision, allowing anyone to deposit assets in pools and receive a fraction of trading fees. However, they introduce specific risks, such as impermanent loss — the potential loss compared to simply holding assets outside the pool.

Market maker quality can be evaluated by specific metrics. The first is uptime — the percentage of time their quotes are active in the market. Quality market makers maintain continuous presence, even during high volatility periods.

The second metric is average spread offered. Tighter spreads indicate greater competitiveness and benefit liquidity takers. The third is quote depth — how much volume the market maker is willing to trade at each price level.

For exchanges and token projects, choosing market makers is a critical strategic decision. A quality market maker improves trading experience, attracts more volume, and contributes to efficient price discovery. A low-quality market maker can create excessive spreads, shallow liquidity, and even price manipulation.

The crypto market making market is dominated by some specialized firms. Companies like Wintermute, Jump Crypto, Alameda Research (before its collapse), GSR, and DWF Labs are known for operating on multiple exchanges and pairs. These firms typically negotiate agreements with token projects that include token loans and minimum liquidity commitments.

Market maker regulation in crypto is still nascent in most jurisdictions. In Brazil, Central Bank Resolutions 519-521 establish requirements for virtual asset service providers, but do not define specific rules for market making activities. This regulatory gap creates both opportunities and risks.

In summary, market makers are the invisible infrastructure that allows markets to function efficiently. Without them, spreads would be wider, execution would be slower, and price discovery would be impaired. Understanding their role is fundamental for any serious participant in the crypto asset ecosystem.
`;

const articleTextZh = `
加密货币做市商：流动性提供如何运作。

流动性不会在加密资产市场中自发产生。它由专业代理人建立和维护，这些代理人承担库存风险以换取捕获买卖价差。理解做市商的角色对于评估任何有组织市场的质量至关重要。

做市商是持续报价资产买卖价格的参与者，承诺在两个方向上执行订单。通过这样做，他们为其他想要买卖而不等待自然对手方的参与者提供即时流动性。

做市商的商业模式在概念上相对简单，但执行起来很复杂。他们从买卖价差中获利——他们买入价格和卖出价格之间的差异。如果做市商报价买入100卖出101，他们在每个完整的买卖周期中捕获1个单位的价差。

然而，这种利润伴随着重大风险。主要风险是库存风险。如果市场走势与做市商累积的头寸相反，他们可能遭受超过价差收益的损失。在暴跌的资产中累积多头头寸的做市商面临重大损失。

为了管理这种风险，做市商使用各种策略。第一种是动态价格调整。当库存偏离期望水平时，做市商调整报价以激励朝着重新平衡其头寸的方向流动。如果持仓过多，他们会降低买入价并提高卖出价。

第二种策略是在相关市场进行对冲。比特币做市商可以在期货或期权市场对冲其敞口。这使他们能够继续在现货市场提供流动性，同时限制方向性风险。

第三种策略是跨多个交易对和交易所进行多元化。通过同时在各种市场运营，做市商减少了对单一资产或场所特定变动的敞口。

在加密资产市场中，有两种主要的流动性提供模式。第一种是传统做市，由中心化实体报价和管理库存。这种模式在Binance、Coinbase和Kraken等中心化交易所占主导地位。

第二种模式是自动做市商（AMM），在去中心化金融协议中运行。算法根据数学公式和流动性池确定价格，而不是由代理人报价。最常见的模型是x乘以y等于k，其中池中两种资产数量的乘积保持不变。

AMM使流动性提供民主化，允许任何人将资产存入池中并获得交易费用的一部分。然而，它们引入了特定风险，如无常损失——与简单地将资产保持在池外相比的潜在损失。

做市商质量可以通过特定指标来评估。第一个是正常运行时间——他们的报价在市场中活跃的时间百分比。优质做市商即使在高波动期也保持持续存在。

第二个指标是提供的平均价差。更紧的价差表明更大的竞争力，并使流动性接受者受益。第三个是报价深度——做市商愿意在每个价格水平交易多少量。

对于交易所和代币项目，选择做市商是关键的战略决策。优质做市商改善交易体验，吸引更多交易量，并有助于有效的价格发现。低质量的做市商可能造成过大的价差、浅薄的流动性，甚至价格操纵。

加密做市市场由一些专业公司主导。Wintermute、Jump Crypto、Alameda Research（在其崩溃之前）、GSR和DWF Labs等公司以在多个交易所和交易对上运营而闻名。这些公司通常与代币项目谈判协议，包括代币贷款和最低流动性承诺。

加密货币做市商监管在大多数司法管辖区仍处于起步阶段。在巴西，中央银行第519-521号决议为虚拟资产服务提供商建立了要求，但没有为做市活动定义具体规则。这种监管空白既创造了机会也带来了风险。

总之，做市商是允许市场有效运作的隐形基础设施。没有他们，价差会更宽，执行会更慢，价格发现会受损。理解他们的角色对于加密资产生态系统中的任何认真参与者都是基本的。
`;

// Trilingual content
const content = {
  title: {
    pt: 'Market Makers Cripto: Como Funciona a Provisão de Liquidez',
    en: 'Crypto Market Makers: How Liquidity Provision Works',
    zh: '加密货币做市商：流动性提供如何运作',
  },
  subtitle: {
    pt: 'O papel dos agentes que constroem e mantêm a liquidez em mercados de criptoativos',
    en: 'The role of agents who build and maintain liquidity in crypto asset markets',
    zh: '在加密资产市场中建立和维护流动性的代理人角色',
  },
  backLink: {
    pt: 'Voltar aos escritos',
    en: 'Back to writings',
    zh: '返回文章列表',
  },
  categoryTag: {
    pt: 'Infraestrutura de Mercado',
    en: 'Market Infrastructure',
    zh: '市场基础设施',
  },
  date: '2026.01.19',
  readTime: {
    pt: '10 min de leitura',
    en: '10 min read',
    zh: '10分钟阅读',
  },
  listenLabel: {
    pt: 'Ouvir artigo',
    en: 'Listen to article',
    zh: '收听文章',
  },
  shareLabel: {
    pt: 'Compartilhar',
    en: 'Share',
    zh: '分享',
  },
  sections: {
    intro: {
      pt: 'A liquidez não surge espontaneamente em mercados de criptoativos. Ela é construída e mantida por agentes especializados que assumem riscos de inventário em troca de capturar o spread entre compra e venda. Compreender o papel dos market makers é essencial para avaliar a qualidade de qualquer mercado organizado.',
      en: 'Liquidity does not arise spontaneously in crypto asset markets. It is built and maintained by specialized agents who assume inventory risks in exchange for capturing the spread between buy and sell. Understanding the role of market makers is essential to evaluate the quality of any organized market.',
      zh: '流动性不会在加密资产市场中自发产生。它由专业代理人建立和维护，这些代理人承担库存风险以换取捕获买卖价差。理解做市商的角色对于评估任何有组织市场的质量至关重要。',
    },
    whatIsTitle: {
      pt: 'O Que São Market Makers',
      en: 'What Are Market Makers',
      zh: '什么是做市商',
    },
    whatIs: {
      pt: 'Market makers são participantes que cotam continuamente preços de compra e venda para um ativo, comprometendo-se a executar ordens em ambas as direções. Seu modelo de negócio é capturar o spread bid-ask — a diferença entre o preço de compra e venda. Se um market maker cota compra a 100 e venda a 101, ele captura 1 unidade de spread a cada ciclo completo.',
      en: 'Market makers are participants who continuously quote buy and sell prices for an asset, committing to execute orders in both directions. Their business model is to capture the bid-ask spread — the difference between buy and sell price. If a market maker quotes buy at 100 and sell at 101, they capture 1 unit of spread for each complete cycle.',
      zh: '做市商是持续报价资产买卖价格的参与者，承诺在两个方向上执行订单。他们的商业模式是捕获买卖价差——买入价和卖出价之间的差异。如果做市商报价买入100卖出101，他们在每个完整周期中捕获1个单位的价差。',
    },
    risksTitle: {
      pt: 'Riscos e Estratégias de Gestão',
      en: 'Risks and Management Strategies',
      zh: '风险与管理策略',
    },
    risks: {
      pt: 'O principal risco é o de inventário. Se o mercado se move contra a posição acumulada, as perdas podem exceder os ganhos de spread. Para gerenciar isso, market makers utilizam ajuste dinâmico de preços, hedge em mercados correlacionados (futuros, opções), e diversificação entre múltiplos pares e exchanges.',
      en: 'The main risk is inventory risk. If the market moves against the accumulated position, losses can exceed spread gains. To manage this, market makers use dynamic price adjustment, hedging in correlated markets (futures, options), and diversification across multiple pairs and exchanges.',
      zh: '主要风险是库存风险。如果市场走势与累积头寸相反，损失可能超过价差收益。为了管理这一点，做市商使用动态价格调整、在相关市场（期货、期权）进行对冲，以及跨多个交易对和交易所进行多元化。',
    },
    modelsTitle: {
      pt: 'Modelos: Tradicional vs AMM',
      en: 'Models: Traditional vs AMM',
      zh: '模式：传统与AMM',
    },
    models: {
      pt: 'Em exchanges centralizadas predomina o market making tradicional, onde uma entidade cota preços e gerencia inventário. Em DeFi, os Automated Market Makers (AMMs) usam algoritmos e pools de liquidez. O modelo x*y=k permite que qualquer pessoa forneça liquidez, mas introduz riscos como impermanent loss.',
      en: 'In centralized exchanges, traditional market making predominates, where an entity quotes prices and manages inventory. In DeFi, Automated Market Makers (AMMs) use algorithms and liquidity pools. The x*y=k model allows anyone to provide liquidity, but introduces risks like impermanent loss.',
      zh: '在中心化交易所，传统做市占主导地位，由实体报价和管理库存。在DeFi中，自动做市商（AMM）使用算法和流动性池。x*y=k模型允许任何人提供流动性，但引入了无常损失等风险。',
    },
    metricsTitle: {
      pt: 'Métricas de Qualidade',
      en: 'Quality Metrics',
      zh: '质量指标',
    },
    metrics: {
      pt: 'A qualidade de um market maker é avaliada por: uptime (presença contínua no mercado), spread médio oferecido (spreads mais apertados beneficiam traders), e profundidade das cotações (volume disponível em cada nível de preço). Market makers de qualidade mantêm presença mesmo em alta volatilidade.',
      en: 'Market maker quality is evaluated by: uptime (continuous market presence), average spread offered (tighter spreads benefit traders), and quote depth (volume available at each price level). Quality market makers maintain presence even during high volatility.',
      zh: '做市商质量通过以下指标评估：正常运行时间（持续的市场存在）、提供的平均价差（更紧的价差使交易者受益）和报价深度（每个价格水平的可用量）。优质做市商即使在高波动期也保持存在。',
    },
    marketTitle: {
      pt: 'O Mercado de Market Making',
      en: 'The Market Making Market',
      zh: '做市市场',
    },
    market: {
      pt: 'O mercado é dominado por firmas especializadas como Wintermute, Jump Crypto, GSR e DWF Labs. Essas firmas negociam acordos com projetos de tokens que incluem empréstimos de tokens e compromissos de liquidez mínima. A escolha de market maker é decisão estratégica crítica para exchanges e projetos.',
      en: 'The market is dominated by specialized firms like Wintermute, Jump Crypto, GSR, and DWF Labs. These firms negotiate agreements with token projects that include token loans and minimum liquidity commitments. Choosing a market maker is a critical strategic decision for exchanges and projects.',
      zh: '市场由Wintermute、Jump Crypto、GSR和DWF Labs等专业公司主导。这些公司与代币项目谈判协议，包括代币贷款和最低流动性承诺。选择做市商对于交易所和项目来说是关键的战略决策。',
    },
    conclusion: {
      pt: 'Market makers são a infraestrutura invisível que permite que mercados funcionem de forma eficiente. Sem eles, spreads seriam mais amplos, execução seria mais lenta, e a descoberta de preço seria prejudicada. Compreender seu papel é fundamental para qualquer participante sério no ecossistema de criptoativos.',
      en: 'Market makers are the invisible infrastructure that allows markets to function efficiently. Without them, spreads would be wider, execution would be slower, and price discovery would be impaired. Understanding their role is fundamental for any serious participant in the crypto asset ecosystem.',
      zh: '做市商是允许市场有效运作的隐形基础设施。没有他们，价差会更宽，执行会更慢，价格发现会受损。理解他们的角色对于加密资产生态系统中的任何认真参与者都是基本的。',
    },
  },
};

export default function ArticleMarketMakers() {
  const { language } = useLanguage();
  const lang = language as 'pt' | 'en' | 'zh';

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title[lang],
    "description": content.subtitle[lang],
    "datePublished": "2026-01-19",
    "dateModified": "2026-01-19",
    "author": {
      "@type": "Person",
      "name": "Guilherme Bissoli",
      "url": "https://guibissoli.xyz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "guibissoli",
      "url": "https://guibissoli.xyz"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://guibissoli.xyz/writings/market-makers-cripto"
    },
    "keywords": ["market makers", "liquidez", "crypto", "AMM", "DeFi", "trading", "exchanges"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Helmet>
        <title>{content.title[lang]} | guibissoli</title>
        <meta name="description" content={content.subtitle[lang]} />
        <meta name="keywords" content="market makers, liquidez, crypto, AMM, DeFi, trading, exchanges, provisão de liquidez" />
        <meta property="og:title" content={content.title[lang]} />
        <meta property="og:description" content={content.subtitle[lang]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://guibissoli.xyz/writings/market-makers-cripto" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.title[lang]} />
        <meta name="twitter:description" content={content.subtitle[lang]} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Navigation />
      
      <article className="pt-24 pb-20">
        <div className="container max-w-3xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Link 
              href="/writings"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
            >
              <ArrowLeft size={16} />
              <span>{content.backLink[lang]}</span>
            </Link>
          </motion.div>

          {/* Article header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            {/* Category tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider rounded">
                {content.categoryTag[lang]}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {content.title[lang]}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {content.subtitle[lang]}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span className="font-mono">{content.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{content.readTime[lang]}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">guibissoli</span>
              </div>
            </div>
          </motion.header>

          {/* Hero image */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <img 
              src="/images/styles/data_viz/style_data_viz_003.png"
              alt={content.title[lang]}
              className="w-full rounded-lg"
            />
          </motion.figure>

          {/* Audio player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-12 p-6 bg-card rounded-lg border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <Headphones className="text-primary" size={20} />
              <span className="font-medium">{content.listenLabel[lang]}</span>
            </div>
            <AudioPlayer 
              textPt={articleTextPt}
              textEn={articleTextEn}
              textZh={articleTextZh}
              title={content.title[lang]}
            />
          </motion.div>

          {/* Article content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            {/* Introduction */}
            <p className="text-lg leading-relaxed mb-8 first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-primary">
              {content.sections.intro[lang]}
            </p>

            {/* What Is */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.whatIsTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.whatIs[lang]}
            </p>

            {/* Risks */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.risksTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.risks[lang]}
            </p>

            {/* Models */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.modelsTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.models[lang]}
            </p>

            {/* Metrics */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.metricsTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.metrics[lang]}
            </p>

            {/* Market */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.marketTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.market[lang]}
            </p>

            {/* Conclusion */}
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.conclusion[lang]}
            </p>
          </motion.div>

          {/* Share section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{content.shareLabel[lang]}</span>
              <div className="flex items-center gap-4">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.title[lang])}&url=${encodeURIComponent('https://guibissoli.xyz/writings/market-makers-cripto')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-card rounded-lg transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://guibissoli.xyz/writings/market-makers-cripto')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-card rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <button 
                  onClick={() => navigator.clipboard.writeText('https://guibissoli.xyz/writings/market-makers-cripto')}
                  className="p-2 hover:bg-card rounded-lg transition-colors"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-primary font-mono">{'>'}</span>
              <span className="font-display font-semibold">gui<span className="text-primary">bissoli</span></span>
            </div>
            <span className="meta-mono">© 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
