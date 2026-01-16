/**
 * Artigo Canonical: Order Book e Liquidez - Como Avaliar Profundidade de Mercado
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
Order Book e Liquidez: Como Avaliar Profundidade de Mercado em Criptoativos.

A análise superficial de liquidez — baseada apenas no spread entre melhor compra e melhor venda — é insuficiente para avaliar a qualidade de um mercado. O fator decisivo é a geometria completa do livro de ordens: sua capacidade de absorver volumes relevantes com previsibilidade de execução. Para fluxos institucionais e operações de maior porte, essa distinção é fundamental.

O order book, ou livro de ordens, é o mecanismo central de formação de preços em mercados organizados. Ele registra todas as ordens de compra e venda pendentes, organizadas por preço e tempo de entrada. A profundidade do livro — market depth — representa a quantidade de ordens disponíveis em diferentes níveis de preço, tanto no lado da compra quanto no lado da venda.

Um mercado profundo é aquele onde existem ordens substanciais em múltiplos níveis de preço. Isso significa que uma ordem de tamanho relevante pode ser executada sem causar movimento significativo no preço. Em contraste, um mercado raso tem poucas ordens disponíveis, e qualquer operação de volume moderado pode gerar slippage considerável.

A primeira métrica fundamental é o spread bid-ask. Ele representa a diferença entre o melhor preço de compra e o melhor preço de venda. Em mercados líquidos, esse spread tende a ser mínimo. Em mercados ilíquidos ou voláteis, o spread se amplia, refletindo maior incerteza ou menor competição entre market makers.

No entanto, o spread isolado pode ser enganoso. Um spread apertado com pouca profundidade significa que apenas pequenas ordens podem ser executadas naquele preço. Ordens maiores consumirão múltiplos níveis do livro, resultando em preço médio de execução significativamente pior que o preço de tela.

A segunda métrica é a profundidade acumulada. Ela mede o volume total disponível até determinado nível de preço. Por exemplo, quanto volume existe dentro de 0.5%, 1% ou 2% do mid-price? Essa análise revela a capacidade real do mercado de absorver ordens de diferentes tamanhos.

Uma forma prática de avaliar profundidade é calcular o slippage esperado para diferentes tamanhos de ordem. Se uma ordem de 100 mil dólares gera 0.1% de slippage, mas uma ordem de 1 milhão gera 2% de slippage, isso indica que a liquidez se concentra nos primeiros níveis e se deteriora rapidamente.

A terceira métrica é a resiliência do livro. Após uma grande ordem consumir liquidez, quanto tempo o mercado leva para recompor o livro? Mercados resilientes se recuperam rapidamente, com market makers reposicionando ordens. Mercados frágeis permanecem com livros rasos por períodos prolongados.

A assimetria entre bid e ask também merece atenção. Se há muito mais volume no lado da compra do que no lado da venda, isso pode indicar pressão de alta ou acumulação. O inverso sugere pressão de venda ou distribuição. Essa assimetria é um indicador de curto prazo de direção provável do preço.

Para stablecoins utilizadas como rails de pagamento, a análise de order book assume características específicas. O objetivo não é especulação direcional, mas execução previsível. Nesse contexto, a estabilidade do spread e a profundidade consistente são mais importantes que a direção do mercado.

A dependência excessiva de canais OTC frequentemente sinaliza limitações do mercado contínuo. Quando participantes institucionais preferem negociar fora do livro, isso indica que o order book não oferece profundidade, preço ou previsibilidade adequados para suas necessidades.

Ferramentas de visualização como heatmaps de order book permitem identificar zonas de suporte e resistência baseadas em concentração de ordens. Grandes ordens de compra em determinado nível criam suporte técnico. Grandes ordens de venda criam resistência. Essas zonas podem ser manipuladas através de spoofing, mas em mercados regulados essa prática é proibida.

A análise de order book em tempo real requer acesso a dados de nível 2, que mostram não apenas o melhor bid e ask, mas toda a profundidade do livro. Muitas exchanges oferecem esses dados via API, permitindo análise programática e construção de indicadores customizados.

Para investidores e traders, a mensagem é clara: nunca avalie liquidez apenas pelo spread de tela. Analise a profundidade, calcule o slippage esperado para seu tamanho de operação, e monitore a resiliência do livro ao longo do tempo. Essa análise é especialmente crítica em mercados de criptoativos, onde a liquidez pode variar dramaticamente entre exchanges e entre pares de negociação.

Em síntese, o order book é mais do que uma lista de ordens. É uma representação em tempo real do equilíbrio entre oferta e demanda, e sua análise cuidadosa é pré-requisito para execução eficiente em qualquer mercado organizado.
`;

const articleTextEn = `
Order Book and Liquidity: How to Evaluate Market Depth in Crypto Assets.

Superficial liquidity analysis — based only on the spread between best bid and best ask — is insufficient to evaluate market quality. The decisive factor is the complete geometry of the order book: its capacity to absorb relevant volumes with execution predictability. For institutional flows and larger operations, this distinction is fundamental.

The order book is the central mechanism for price formation in organized markets. It records all pending buy and sell orders, organized by price and entry time. The depth of the book — market depth — represents the quantity of orders available at different price levels, on both the buy and sell sides.

A deep market is one where substantial orders exist at multiple price levels. This means that a relevant-sized order can be executed without causing significant price movement. In contrast, a shallow market has few available orders, and any moderate volume operation can generate considerable slippage.

The first fundamental metric is the bid-ask spread. It represents the difference between the best buy price and the best sell price. In liquid markets, this spread tends to be minimal. In illiquid or volatile markets, the spread widens, reflecting greater uncertainty or less competition among market makers.

However, the spread alone can be misleading. A tight spread with little depth means only small orders can be executed at that price. Larger orders will consume multiple levels of the book, resulting in an average execution price significantly worse than the screen price.

The second metric is cumulative depth. It measures the total volume available up to a certain price level. For example, how much volume exists within 0.5%, 1%, or 2% of the mid-price? This analysis reveals the market's real capacity to absorb orders of different sizes.

A practical way to evaluate depth is to calculate expected slippage for different order sizes. If a 100 thousand dollar order generates 0.1% slippage, but a 1 million dollar order generates 2% slippage, this indicates that liquidity concentrates in the first levels and deteriorates rapidly.

The third metric is book resilience. After a large order consumes liquidity, how long does the market take to rebuild the book? Resilient markets recover quickly, with market makers repositioning orders. Fragile markets remain with shallow books for extended periods.

Asymmetry between bid and ask also deserves attention. If there is much more volume on the buy side than the sell side, this may indicate upward pressure or accumulation. The inverse suggests selling pressure or distribution. This asymmetry is a short-term indicator of probable price direction.

For stablecoins used as payment rails, order book analysis takes on specific characteristics. The goal is not directional speculation, but predictable execution. In this context, spread stability and consistent depth are more important than market direction.

Excessive reliance on OTC channels frequently signals limitations of the continuous market. When institutional participants prefer to trade off-book, this indicates that the order book does not offer adequate depth, price, or predictability for their needs.

Visualization tools like order book heatmaps allow identifying support and resistance zones based on order concentration. Large buy orders at a certain level create technical support. Large sell orders create resistance. These zones can be manipulated through spoofing, but in regulated markets this practice is prohibited.

Real-time order book analysis requires access to level 2 data, which shows not only the best bid and ask, but the entire depth of the book. Many exchanges offer this data via API, allowing programmatic analysis and construction of custom indicators.

For investors and traders, the message is clear: never evaluate liquidity just by the screen spread. Analyze the depth, calculate expected slippage for your operation size, and monitor book resilience over time. This analysis is especially critical in crypto asset markets, where liquidity can vary dramatically between exchanges and between trading pairs.

In summary, the order book is more than a list of orders. It is a real-time representation of the balance between supply and demand, and its careful analysis is a prerequisite for efficient execution in any organized market.
`;

const articleTextZh = `
订单簿与流动性：如何评估加密资产的市场深度。

仅基于最佳买价和最佳卖价之间价差的表面流动性分析不足以评估市场质量。决定性因素是订单簿的完整几何结构：其以可预测的执行吸收相关交易量的能力。对于机构资金流和大额操作，这种区分至关重要。

订单簿是有组织市场中价格形成的核心机制。它记录所有待处理的买卖订单，按价格和进入时间组织。订单簿的深度——市场深度——代表在不同价格水平上可用的订单数量，包括买方和卖方。

深度市场是指在多个价格水平上存在大量订单的市场。这意味着相关规模的订单可以在不引起显著价格变动的情况下执行。相比之下，浅薄市场可用订单很少，任何中等交易量的操作都可能产生相当大的滑点。

第一个基本指标是买卖价差。它代表最佳买入价和最佳卖出价之间的差异。在流动性市场中，这个价差往往很小。在流动性不足或波动的市场中，价差扩大，反映出更大的不确定性或做市商之间竞争减少。

然而，单独的价差可能具有误导性。紧密的价差但深度很小意味着只有小订单可以以该价格执行。较大的订单将消耗订单簿的多个层级，导致平均执行价格明显差于屏幕价格。

第二个指标是累积深度。它衡量到某个价格水平为止的总可用量。例如，在中间价的0.5%、1%或2%范围内有多少交易量？这种分析揭示了市场吸收不同规模订单的真实能力。

评估深度的一个实用方法是计算不同订单规模的预期滑点。如果10万美元的订单产生0.1%的滑点，但100万美元的订单产生2%的滑点，这表明流动性集中在前几个层级并迅速恶化。

第三个指标是订单簿弹性。在大订单消耗流动性后，市场需要多长时间来重建订单簿？有弹性的市场恢复迅速，做市商重新定位订单。脆弱的市场在较长时间内保持浅薄的订单簿。

买卖双方之间的不对称也值得关注。如果买方的交易量远多于卖方，这可能表明上涨压力或积累。相反则表明抛售压力或分配。这种不对称是价格可能方向的短期指标。

对于用作支付轨道的稳定币，订单簿分析具有特定特征。目标不是方向性投机，而是可预测的执行。在这种情况下，价差稳定性和一致的深度比市场方向更重要。

对OTC渠道的过度依赖经常表明连续市场的局限性。当机构参与者更喜欢在场外交易时，这表明订单簿没有为其需求提供足够的深度、价格或可预测性。

订单簿热图等可视化工具允许根据订单集中度识别支撑和阻力区域。某一水平的大量买单创造技术支撑。大量卖单创造阻力。这些区域可以通过欺骗性挂单操纵，但在受监管的市场中这种做法是被禁止的。

实时订单簿分析需要访问二级数据，它不仅显示最佳买价和卖价，还显示订单簿的整个深度。许多交易所通过API提供这些数据，允许程序化分析和构建自定义指标。

对于投资者和交易者，信息很明确：永远不要仅通过屏幕价差来评估流动性。分析深度，计算您操作规模的预期滑点，并随时间监控订单簿弹性。这种分析在加密资产市场中尤为关键，因为流动性在不同交易所和交易对之间可能有很大差异。

总之，订单簿不仅仅是订单列表。它是供需平衡的实时表示，其仔细分析是在任何有组织市场中高效执行的先决条件。
`;

// Trilingual content
const content = {
  title: {
    pt: 'Order Book e Liquidez: Como Avaliar Profundidade de Mercado',
    en: 'Order Book and Liquidity: How to Evaluate Market Depth',
    zh: '订单簿与流动性：如何评估市场深度',
  },
  subtitle: {
    pt: 'Por que o spread de tela é insuficiente e como analisar a geometria completa do livro de ordens',
    en: 'Why screen spread is insufficient and how to analyze the complete order book geometry',
    zh: '为什么屏幕价差不足以及如何分析完整的订单簿几何结构',
  },
  backLink: {
    pt: 'Voltar aos escritos',
    en: 'Back to writings',
    zh: '返回文章列表',
  },
  categoryTag: {
    pt: 'Análise Técnica',
    en: 'Technical Analysis',
    zh: '技术分析',
  },
  date: '2026.01.18',
  readTime: {
    pt: '9 min de leitura',
    en: '9 min read',
    zh: '9分钟阅读',
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
      pt: 'A análise superficial de liquidez — baseada apenas no spread entre melhor compra e melhor venda — é insuficiente para avaliar a qualidade de um mercado. O fator decisivo é a geometria completa do livro de ordens: sua capacidade de absorver volumes relevantes com previsibilidade de execução. Para fluxos institucionais e operações de maior porte, essa distinção é fundamental.',
      en: 'Superficial liquidity analysis — based only on the spread between best bid and best ask — is insufficient to evaluate market quality. The decisive factor is the complete geometry of the order book: its capacity to absorb relevant volumes with execution predictability. For institutional flows and larger operations, this distinction is fundamental.',
      zh: '仅基于最佳买价和最佳卖价之间价差的表面流动性分析不足以评估市场质量。决定性因素是订单簿的完整几何结构：其以可预测的执行吸收相关交易量的能力。对于机构资金流和大额操作，这种区分至关重要。',
    },
    orderBookTitle: {
      pt: 'O Que é o Order Book',
      en: 'What is the Order Book',
      zh: '什么是订单簿',
    },
    orderBook: {
      pt: 'O order book, ou livro de ordens, é o mecanismo central de formação de preços em mercados organizados. Ele registra todas as ordens de compra e venda pendentes, organizadas por preço e tempo de entrada. A profundidade do livro representa a quantidade de ordens disponíveis em diferentes níveis de preço. Um mercado profundo é aquele onde existem ordens substanciais em múltiplos níveis, permitindo execução de volumes relevantes sem movimento significativo de preço.',
      en: 'The order book is the central mechanism for price formation in organized markets. It records all pending buy and sell orders, organized by price and entry time. The depth of the book represents the quantity of orders available at different price levels. A deep market is one where substantial orders exist at multiple levels, allowing execution of relevant volumes without significant price movement.',
      zh: '订单簿是有组织市场中价格形成的核心机制。它记录所有待处理的买卖订单，按价格和进入时间组织。订单簿的深度代表在不同价格水平上可用的订单数量。深度市场是指在多个层级存在大量订单的市场，允许执行相关交易量而不会引起显著的价格变动。',
    },
    spreadTitle: {
      pt: 'Spread Bid-Ask: Necessário, Mas Não Suficiente',
      en: 'Bid-Ask Spread: Necessary, But Not Sufficient',
      zh: '买卖价差：必要但不充分',
    },
    spread: {
      pt: 'O spread bid-ask representa a diferença entre o melhor preço de compra e o melhor preço de venda. Em mercados líquidos, esse spread tende a ser mínimo. No entanto, o spread isolado pode ser enganoso. Um spread apertado com pouca profundidade significa que apenas pequenas ordens podem ser executadas naquele preço. Ordens maiores consumirão múltiplos níveis do livro, resultando em preço médio de execução significativamente pior.',
      en: 'The bid-ask spread represents the difference between the best buy price and the best sell price. In liquid markets, this spread tends to be minimal. However, the spread alone can be misleading. A tight spread with little depth means only small orders can be executed at that price. Larger orders will consume multiple levels of the book, resulting in a significantly worse average execution price.',
      zh: '买卖价差代表最佳买入价和最佳卖出价之间的差异。在流动性市场中，这个价差往往很小。然而，单独的价差可能具有误导性。紧密的价差但深度很小意味着只有小订单可以以该价格执行。较大的订单将消耗订单簿的多个层级，导致平均执行价格明显更差。',
    },
    depthTitle: {
      pt: 'Profundidade Acumulada e Slippage',
      en: 'Cumulative Depth and Slippage',
      zh: '累积深度与滑点',
    },
    depth: {
      pt: 'A profundidade acumulada mede o volume total disponível até determinado nível de preço. Uma forma prática de avaliar é calcular o slippage esperado para diferentes tamanhos de ordem. Se uma ordem de 100 mil dólares gera 0.1% de slippage, mas uma ordem de 1 milhão gera 2%, isso indica que a liquidez se concentra nos primeiros níveis e se deteriora rapidamente.',
      en: 'Cumulative depth measures the total volume available up to a certain price level. A practical way to evaluate is to calculate expected slippage for different order sizes. If a 100 thousand dollar order generates 0.1% slippage, but a 1 million dollar order generates 2%, this indicates that liquidity concentrates in the first levels and deteriorates rapidly.',
      zh: '累积深度衡量到某个价格水平为止的总可用量。一个实用的评估方法是计算不同订单规模的预期滑点。如果10万美元的订单产生0.1%的滑点，但100万美元的订单产生2%，这表明流动性集中在前几个层级并迅速恶化。',
    },
    resilienceTitle: {
      pt: 'Resiliência e Assimetria',
      en: 'Resilience and Asymmetry',
      zh: '弹性与不对称',
    },
    resilience: {
      pt: 'A resiliência do livro mede quanto tempo o mercado leva para recompor após uma grande ordem consumir liquidez. Mercados resilientes se recuperam rapidamente. A assimetria entre bid e ask também é relevante: muito mais volume no lado da compra pode indicar pressão de alta, enquanto o inverso sugere pressão de venda.',
      en: 'Book resilience measures how long the market takes to rebuild after a large order consumes liquidity. Resilient markets recover quickly. Asymmetry between bid and ask is also relevant: much more volume on the buy side may indicate upward pressure, while the inverse suggests selling pressure.',
      zh: '订单簿弹性衡量在大订单消耗流动性后市场需要多长时间来重建。有弹性的市场恢复迅速。买卖双方之间的不对称也很重要：买方的交易量远多于卖方可能表明上涨压力，而相反则表明抛售压力。',
    },
    stablecoinsTitle: {
      pt: 'Implicações para Stablecoins',
      en: 'Implications for Stablecoins',
      zh: '对稳定币的影响',
    },
    stablecoins: {
      pt: 'Para stablecoins utilizadas como rails de pagamento, o objetivo não é especulação direcional, mas execução previsível. A estabilidade do spread e a profundidade consistente são mais importantes que a direção do mercado. A dependência excessiva de canais OTC frequentemente sinaliza que o order book não oferece profundidade adequada para necessidades institucionais.',
      en: 'For stablecoins used as payment rails, the goal is not directional speculation, but predictable execution. Spread stability and consistent depth are more important than market direction. Excessive reliance on OTC channels frequently signals that the order book does not offer adequate depth for institutional needs.',
      zh: '对于用作支付轨道的稳定币，目标不是方向性投机，而是可预测的执行。价差稳定性和一致的深度比市场方向更重要。对OTC渠道的过度依赖经常表明订单簿没有为机构需求提供足够的深度。',
    },
    conclusion: {
      pt: 'Para investidores e traders, a mensagem é clara: nunca avalie liquidez apenas pelo spread de tela. Analise a profundidade, calcule o slippage esperado para seu tamanho de operação, e monitore a resiliência do livro ao longo do tempo. O order book é mais do que uma lista de ordens — é uma representação em tempo real do equilíbrio entre oferta e demanda.',
      en: 'For investors and traders, the message is clear: never evaluate liquidity just by the screen spread. Analyze the depth, calculate expected slippage for your operation size, and monitor book resilience over time. The order book is more than a list of orders — it is a real-time representation of the balance between supply and demand.',
      zh: '对于投资者和交易者，信息很明确：永远不要仅通过屏幕价差来评估流动性。分析深度，计算您操作规模的预期滑点，并随时间监控订单簿弹性。订单簿不仅仅是订单列表——它是供需平衡的实时表示。',
    },
  },
};

export default function ArticleOrderBook() {
  const { language } = useLanguage();
  const lang = language as 'pt' | 'en' | 'zh';

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title[lang],
    "description": content.subtitle[lang],
    "datePublished": "2026-01-18",
    "dateModified": "2026-01-18",
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
      "@id": "https://guibissoli.xyz/writings/order-book-liquidez"
    },
    "keywords": ["order book", "liquidez", "market depth", "slippage", "bid-ask spread", "trading", "criptoativos"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Helmet>
        <title>{content.title[lang]} | guibissoli</title>
        <meta name="description" content={content.subtitle[lang]} />
        <meta name="keywords" content="order book, liquidez, market depth, slippage, bid-ask spread, trading, criptoativos, crypto trading" />
        <meta property="og:title" content={content.title[lang]} />
        <meta property="og:description" content={content.subtitle[lang]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://guibissoli.xyz/writings/order-book-liquidez" />
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
              src="/images/art-styles/data_viz/data_viz_2.png"
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

            {/* Order Book */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.orderBookTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.orderBook[lang]}
            </p>

            {/* Spread */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.spreadTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.spread[lang]}
            </p>

            {/* Depth */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.depthTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.depth[lang]}
            </p>

            {/* Resilience */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.resilienceTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.resilience[lang]}
            </p>

            {/* Stablecoins */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.stablecoinsTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.stablecoins[lang]}
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
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.title[lang])}&url=${encodeURIComponent('https://guibissoli.xyz/writings/order-book-liquidez')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-card rounded-lg transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://guibissoli.xyz/writings/order-book-liquidez')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-card rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <button 
                  onClick={() => navigator.clipboard.writeText('https://guibissoli.xyz/writings/order-book-liquidez')}
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
