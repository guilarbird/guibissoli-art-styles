/**
 * Artigo Canonical: Tick Size, Microestrutura e Liquidez Funcional
 * Design: NYT Editorial Style - hero image, elegant typography
 */
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Headphones } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import AudioPlayer from '@/components/AudioPlayer';
import { useLanguage } from '@/contexts/LanguageContext';

// Full article text for TTS
const articleTextPt = `
Tick Size, Microestrutura e Liquidez Funcional.

Resumo executivo.

A discussão recente sobre stablecoins, OTC e sandbox regulatório no Brasil tem avançado rapidamente no plano jurídico. No entanto, há uma variável estrutural menos visível — o tick size — que atua como determinante primário da eficiência do mercado spot. Este artigo argumenta que ajustes finos de microestrutura, em especial no tamanho mínimo de variação de preço, podem reduzir spreads de forma endógena, aumentar profundidade funcional do livro de ordens e diminuir a dependência estrutural de canais OTC.

Seção 1. Por que microestrutura voltou ao centro do debate.

Mercados financeiros maduros raramente resolvem problemas de liquidez por meio de exceções permanentes. Historicamente, o caminho tem sido outro: calibração cuidadosa dos mecanismos de negociação. Parâmetros como prioridade preço-tempo, regras de cancelamento e, sobretudo, tamanho de tick sempre foram tratados como instrumentos centrais de governança econômica.

Seção 2. Tick size: um detalhe técnico com efeito macroeconômico.

O tick size define o menor incremento admissível de preço em um livro de ordens contínuo. Embora pareça um detalhe operacional, ele atua como um limitador estrutural da competição. Quando o tick é grande demais, o spread deixa de refletir risco ou informação e passa a refletir apenas o grid permitido. Quando o tick é excessivamente pequeno, o mercado entra em um regime de micro-ruído.

Seção 3. A forma do book importa mais que o topo do book.

Avaliações superficiais de liquidez costumam se concentrar no best bid/ask. Para fluxos institucionais, isso é insuficiente. O que importa é a geometria completa do livro de ordens. Para FX e pagamentos, previsibilidade domina preço pontual.

Seção 4. OTC como sintoma de falha estrutural.

OTC surge quando o mercado contínuo falha simultaneamente em três dimensões: preço, tamanho e previsibilidade. OTC não cria liquidez. Ele apenas realoca custo e risco fora do mercado organizado.

Seção 5. Evidência empírica: mudança de regime no USDT/BRL.

Após ajustes recentes no tick size do par USDT/BRL, observou-se compressão estrutural do spread, consolidação de liquidez útil, redução do slippage acumulado e maior estabilidade intraday.

Seção 6. Tick size como instrumento de governança.

Bolsas tradicionais sempre trataram tick size como instrumento de governança de mercado. À medida que stablecoins se aproximam do universo de FX e pagamentos, a microestrutura deixa de ser neutra.

Seção 7. Convergência com o espírito regulatório.

O movimento regulatório recente no Brasil, incluindo a Resolução BCB 521, aponta para maior previsibilidade e redução de arbitragens opacas. Tick size bem calibrado comprime spreads de forma natural, reduz dependência estrutural de OTC e melhora qualidade da formação de preço.

Seção 8. Implicações para investidores e formuladores de política.

Para PE, VC e policy makers, o tick size funciona como leading indicator de maturidade institucional. Plataformas que dominam microestrutura escalam com menor custo marginal, atraem fluxo institucional e enfrentam menor risco regulatório.

Conclusao.

À medida que o mercado brasileiro discute stablecoins, OTC e sandbox, o próximo passo natural é voltar ao fundamento. Se 2026 marcar a consolidação do FX digital no Brasil, a microestrutura não será detalhe — será pré-condição.
`;

const articleTextZh = `
Tick Size、市场微观结构与功能性流动性。

执行摘要。

最近关于稳定币、场外交易和巴西监管沙盒的讨论在法律层面迅速推进。然而，有一个不太明显的结构性变量——tick size——它是现货市场效率的主要决定因素。本文认为，微观结构的精细调整，特别是最小价格变动幅度，可以内生性地降低价差，增加订单簿的功能性深度，并减少对场外交易渠道的结构性依赖。

第一节：为什么微观结构重新成为辩论的中心。

成熟的金融市场很少通过永久性例外来解决流动性问题。历史上，路径一直是不同的：仔细校准交易机制。价格时间优先、取消规则，尤其是tick size等参数一直被视为经济治理的核心工具。

第二节：Tick size：具有宏观经济效应的技术细节。

Tick size定义了连续订单簿中允许的最小价格增量。虽然它看起来像是一个操作细节，但它实际上是竞争的结构性限制器。当tick太大时，价差不再反映风险或信息，而只反映允许的网格。当tick过小时，市场进入微噪声状态。

第三节：订单簿的形状比订单簿的顶部更重要。

表面的流动性评估通常集中在最佳买卖价。对于机构流量来说，这是不够的。重要的是订单簿的完整几何形状。对于外汇和支付，可预测性优于即时价格。

第四节：场外交易作为结构性失败的症状。

当连续市场在三个维度同时失败时，场外交易就会出现：价格、规模和可预测性。场外交易不创造流动性。它只是将成本和风险重新分配到有组织的市场之外。

第五节：实证证据：USDT/BRL的制度变化。

在最近调整USDT/BRL的tick size后，观察到结构性价差压缩、有用流动性整合、累积滑点减少以及更大的日内稳定性。

第六节：Tick size作为治理工具。

传统交易所一直将tick size视为市场治理工具。随着稳定币接近外汇和支付领域，微观结构不再是中性的。

第七节：与监管精神的趋同。

巴西最近的监管动向，包括BCB第521号决议，指向更大的可预测性和减少不透明套利。校准良好的tick size自然压缩价差，减少结构性场外交易依赖，并改善价格形成质量。

第八节：对投资者和政策制定者的影响。

对于PE、VC和政策制定者来说，tick size是机构成熟度的领先指标。掌握微观结构的平台以较低的边际成本扩展，吸引机构流量，并面临较低的监管风险。

结论。

随着巴西市场讨论稳定币、场外交易和沙盒，下一个自然步骤是回归基本面。如果2026年标志着巴西数字外汇的整合，微观结构将不是细节——而是前提条件。
`;

const articleTextEn = `
Tick Size, Market Microstructure and Functional Liquidity.

Executive Summary.

The recent discussion about stablecoins, OTC and regulatory sandbox in Brazil has advanced rapidly on the legal front. However, there is a less visible structural variable — tick size — that acts as a primary determinant of spot market efficiency. This article argues that fine microstructure adjustments, especially in minimum price variation, can endogenously reduce spreads, increase functional order book depth, and decrease structural dependence on OTC channels.

Section 1. Why microstructure returned to the center of debate.

Mature financial markets rarely solve liquidity problems through permanent exceptions. Historically, the path has been different: careful calibration of trading mechanisms. Parameters such as price-time priority, cancellation rules, and especially tick size have always been treated as central instruments of economic governance.

Section 2. Tick size: a technical detail with macroeconomic effect.

Tick size defines the smallest allowable price increment in a continuous order book. Although it seems like an operational detail, it acts as a structural limiter of competition. When the tick is too large, the spread stops reflecting risk or information and starts reflecting only the allowed grid. When the tick is excessively small, the market enters a micro-noise regime.

Section 3. The shape of the book matters more than the top of the book.

Superficial liquidity assessments usually focus on best bid/ask. For institutional flows, this is insufficient. What matters is the complete geometry of the order book. For FX and payments, predictability dominates point price.

Section 4. OTC as a symptom of structural failure.

OTC emerges when the continuous market fails simultaneously in three dimensions: price, size, and predictability. OTC does not create liquidity. It only reallocates cost and risk outside the organized market.

Section 5. Empirical evidence: regime change in USDT/BRL.

After recent adjustments to the USDT/BRL tick size, structural spread compression was observed, useful liquidity consolidation, reduced accumulated slippage, and greater intraday stability.

Section 6. Tick size as a governance instrument.

Traditional exchanges have always treated tick size as a market governance instrument. As stablecoins approach the FX and payments universe, microstructure ceases to be neutral.

Section 7. Convergence with regulatory spirit.

The recent regulatory movement in Brazil, including BCB Resolution 521, points to greater predictability and reduction of opaque arbitrages. Well-calibrated tick size naturally compresses spreads, reduces structural OTC dependence, and improves price formation quality.

Section 8. Implications for investors and policy makers.

For PE, VC and policy makers, tick size functions as a leading indicator of institutional maturity. Platforms that master microstructure scale with lower marginal cost, attract institutional flow, and face lower regulatory risk.

Conclusion.

As the Brazilian market discusses stablecoins, OTC and sandbox, the next natural step is to return to fundamentals. If 2026 marks the consolidation of digital FX in Brazil, microstructure will not be a detail — it will be a precondition.
`;

const articleMeta = {
  title: 'Tick Size, Microestrutura e Liquidez Funcional',
  titleEn: 'Tick Size, Microstructure and Functional Liquidity',
  subtitle: 'Como ajustes aparentemente técnicos redefinem o papel do mercado spot em stablecoins',
  subtitleEn: 'How seemingly technical adjustments redefine the role of spot markets in stablecoins',
  date: '2026.01.02',
  readTime: '15 min',
  tags: ['microestrutura', 'stablecoins', 'tick-size', 'otc', 'regulação'],
  heroImage: '/images/article-tick-size-hero.png',
};

export default function ArticleTickSize() {
  const { language, t } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - NYT Style */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full h-[70vh] min-h-[500px] overflow-hidden"
      >
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src={articleMeta.heroImage} 
            alt="Market Microstructure Visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link href="/writings">
              <motion.span 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 cursor-pointer"
                whileHover={{ x: -4 }}
              >
                <ArrowLeft size={16} />
                <span className="meta-mono text-sm">{isEn ? 'Back to writings' : 'Voltar aos escritos'}</span>
              </motion.span>
            </Link>
            
            {/* Category Tag */}
            <div className="mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs meta-mono rounded-full uppercase tracking-wider">
                {isEn ? 'Original Article' : 'Artigo Original'}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              {isEn ? articleMeta.titleEn : articleMeta.title}
              <span className="text-primary">_</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
              {isEn ? articleMeta.subtitleEn : articleMeta.subtitle}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Article Meta Bar */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span className="meta-mono text-sm">{articleMeta.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span className="meta-mono text-sm">{articleMeta.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones size={14} />
              <span className="meta-mono text-sm">{isEn ? 'Audio available' : 'Áudio disponível'}</span>
            </div>
          </div>
          
          {/* Share Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground meta-mono">{isEn ? 'Share' : 'Compartilhar'}:</span>
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(articleMeta.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-full transition-colors"
            >
              <Twitter size={16} className="text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-full transition-colors"
            >
              <Linkedin size={16} className="text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Audio Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <AudioPlayer 
            textPt={articleTextPt}
            textEn={articleTextEn}
            textZh={articleTextZh}
            title={articleMeta.title}
          />
        </motion.div>

        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {articleMeta.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 border border-border text-muted-foreground text-xs meta-mono rounded-full hover:border-primary hover:text-primary transition-colors">
              #{tag}
            </span>
          ))}
        </motion.div>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {/* Executive Summary */}
          <section className="mb-16">
            <div className="border-l-4 border-primary pl-6 py-2">
              <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">
                {isEn ? 'Executive Summary' : 'Resumo executivo'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isEn 
                  ? 'The recent discussion about stablecoins, OTC and regulatory sandbox in Brazil has advanced rapidly on the legal front. However, there is a less visible structural variable — the tick size — that acts as a primary determinant of spot market efficiency. This article argues that fine microstructure adjustments, especially in minimum price variation, can endogenously reduce spreads, increase functional order book depth, and decrease structural dependence on OTC channels.'
                  : 'A discussão recente sobre stablecoins, OTC e sandbox regulatório no Brasil tem avançado rapidamente no plano jurídico. No entanto, há uma variável estrutural menos visível — o tick size — que atua como determinante primário da eficiência do mercado spot. Este artigo argumenta que ajustes finos de microestrutura, em especial no tamanho mínimo de variação de preço, podem reduzir spreads de forma endógena, aumentar profundidade funcional do livro de ordens e diminuir a dependência estrutural de canais OTC.'
                }
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <span className="text-primary meta-mono text-lg">01</span>
              {isEn ? 'Why microstructure returned to the center of debate' : 'Por que microestrutura voltou ao centro do debate'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEn 
                ? 'Mature financial markets rarely solve liquidity problems through permanent exceptions. Historically, the path has been different: careful calibration of trading mechanisms. Parameters such as price-time priority, cancellation rules, and especially tick size have always been treated as central instruments of economic governance.'
                : 'Mercados financeiros maduros raramente resolvem problemas de liquidez por meio de exceções permanentes. Historicamente, o caminho tem sido outro: calibração cuidadosa dos mecanismos de negociação. Parâmetros como prioridade preço-tempo, regras de cancelamento e, sobretudo, tamanho de tick sempre foram tratados como instrumentos centrais de governança econômica.'
              }
            </p>
          </section>

          {/* Section 2 with Diagram */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <span className="text-primary meta-mono text-lg">02</span>
              {isEn ? 'Tick size: a technical detail with macroeconomic effect' : 'Tick size: um detalhe técnico com efeito macroeconômico'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isEn 
                ? 'Tick size defines the smallest allowable price increment in a continuous order book. Although it seems like an operational detail, it acts as a structural limiter of competition. When the tick is too large, the spread stops reflecting risk or information and starts reflecting only the allowed grid. When the tick is excessively small, the market enters a micro-noise regime.'
                : 'O tick size define o menor incremento admissível de preço em um livro de ordens contínuo. Embora pareça um detalhe operacional, ele atua como um limitador estrutural da competição. Quando o tick é grande demais, o spread deixa de refletir risco ou informação e passa a refletir apenas o grid permitido. Quando o tick é excessivamente pequeno, o mercado entra em um regime de micro-ruído.'
              }
            </p>
            
            {/* Diagram: Tick Fino vs Calibrado */}
            <figure className="my-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 border border-border rounded-lg p-4">
                  <img 
                    src="/images/diagram-tick-fino.png" 
                    alt="Tick Fino - Fragmentação" 
                    className="w-full rounded"
                  />
                  <figcaption className="mt-3 text-sm text-muted-foreground meta-mono text-center">
                    {isEn ? 'Fine tick: fragmentation and micro-noise' : 'Tick fino: fragmentação e micro-ruído'}
                  </figcaption>
                </div>
                <div className="bg-card/50 border border-border rounded-lg p-4">
                  <img 
                    src="/images/diagram-tick-calibrado.png" 
                    alt="Tick Calibrado - Consolidação" 
                    className="w-full rounded"
                  />
                  <figcaption className="mt-3 text-sm text-muted-foreground meta-mono text-center">
                    {isEn ? 'Calibrated tick: consolidation and depth' : 'Tick calibrado: consolidação e profundidade'}
                  </figcaption>
                </div>
              </div>
            </figure>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <span className="text-primary meta-mono text-lg">03</span>
              {isEn ? 'The shape of the book matters more than the top of the book' : 'A forma do book importa mais que o topo do book'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {isEn 
                ? 'Superficial liquidity assessments usually focus on best bid/ask. For institutional flows, this is insufficient. What matters is the complete geometry of the order book. For FX and payments, predictability dominates point price.'
                : 'Avaliações superficiais de liquidez costumam se concentrar no best bid/ask. Para fluxos institucionais, isso é insuficiente. O que importa é a geometria completa do livro de ordens. Para FX e pagamentos, previsibilidade domina preço pontual.'
              }
            </p>
          </section>

          {/* Section 4 with Diagram */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <span className="text-primary meta-mono text-lg">04</span>
              {isEn ? 'OTC as a symptom of structural failure' : 'OTC como sintoma de falha estrutural'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isEn 
                ? 'OTC emerges when the continuous market fails simultaneously in three dimensions: price, size, and predictability. OTC does not create liquidity. It only reallocates cost and risk outside the organized market.'
                : 'OTC surge quando o mercado contínuo falha simultaneamente em três dimensões: preço, tamanho e previsibilidade. OTC não cria liquidez. Ele apenas realoca custo e risco fora do mercado organizado.'
              }
            </p>
            
            {/* Diagram: OTC Flow */}
            <figure className="my-8">
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <img 
                  src="/images/diagram-otc-flow.png" 
                  alt="OTC Flow Diagram" 
                  className="w-full rounded"
                />
                <figcaption className="mt-3 text-sm text-muted-foreground meta-mono text-center">
                  {isEn ? 'OTC flow: cost and risk reallocation outside organized market' : 'Fluxo OTC: realocação de custo e risco fora do mercado organizado'}
                </figcaption>
              </div>
            </figure>
          </section>

          {/* Section 5 with Diagram */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <span className="text-primary meta-mono text-lg">05</span>
              {isEn ? 'Empirical evidence: regime change in USDT/BRL' : 'Evidência empírica: mudança de regime no USDT/BRL'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isEn 
                ? 'After recent adjustments to the USDT/BRL tick size, structural spread compression was observed, useful liquidity consolidation, reduced accumulated slippage, and greater intraday stability.'
                : 'Após ajustes recentes no tick size do par USDT/BRL, observou-se compressão estrutural do spread, consolidação de liquidez útil, redução do slippage acumulado e maior estabilidade intraday.'
              }
            </p>
            
            {/* Diagram: Slippage Curve */}
            <figure className="my-8">
              <div className="bg-card/50 border border-border rounded-lg p-4">
                <img 
                  src="/images/diagram-slippage-curve.png" 
                  alt="Slippage Curve" 
                  className="w-full rounded"
                />
                <figcaption className="mt-3 text-sm text-muted-foreground meta-mono text-center">
                  {isEn ? 'Slippage curve: before and after tick size adjustment' : 'Curva de slippage: antes e depois do ajuste de tick size'}
                </figcaption>
              </div>
            </figure>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <span className="text-primary meta-mono text-lg">06</span>
              {isEn ? 'Tick size as a governance instrument' : 'Tick size como instrumento de governança'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isEn 
                ? 'Traditional exchanges have always treated tick size as a market governance instrument. As stablecoins approach the FX and payments universe, microstructure ceases to be neutral.'
                : 'Bolsas tradicionais sempre trataram tick size como instrumento de governança de mercado. À medida que stablecoins se aproximam do universo de FX e pagamentos, a microestrutura deixa de ser neutra.'
              }
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <span className="text-primary meta-mono text-lg">07</span>
              {isEn ? 'Convergence with regulatory spirit' : 'Convergência com o espírito regulatório'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isEn 
                ? 'The recent regulatory movement in Brazil, including BCB Resolution 521, points to greater predictability and reduction of opaque arbitrages. Well-calibrated tick size naturally compresses spreads, reduces structural OTC dependence, and improves price formation quality.'
                : 'O movimento regulatório recente no Brasil, incluindo a Resolução BCB 521, aponta para maior previsibilidade e redução de arbitragens opacas. Tick size bem calibrado comprime spreads de forma natural, reduz dependência estrutural de OTC e melhora qualidade da formação de preço.'
              }
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <span className="text-primary meta-mono text-lg">08</span>
              {isEn ? 'Implications for investors and policy makers' : 'Implicações para investidores e formuladores de política'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isEn 
                ? 'For PE, VC and policy makers, tick size functions as a leading indicator of institutional maturity. Platforms that master microstructure scale with lower marginal cost, attract institutional flow, and face lower regulatory risk.'
                : 'Para PE, VC e policy makers, o tick size funciona como leading indicator de maturidade institucional. Plataformas que dominam microestrutura escalam com menor custo marginal, atraem fluxo institucional e enfrentam menor risco regulatório.'
              }
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-12 border-t border-border pt-12">
            <h2 className="font-display text-2xl font-semibold mb-6 text-foreground">
              {isEn ? 'Conclusion' : 'Conclusão'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isEn 
                ? 'As the Brazilian market discusses stablecoins, OTC and sandbox, the next natural step is to return to fundamentals. If 2026 marks the consolidation of digital FX in Brazil, microstructure will not be a detail — it will be a precondition.'
                : 'À medida que o mercado brasileiro discute stablecoins, OTC e sandbox, o próximo passo natural é voltar ao fundamento. Se 2026 marcar a consolidação do FX digital no Brasil, a microestrutura não será detalhe — será pré-condição.'
              }
            </p>
          </section>

          {/* Policy Appendix */}
          <section className="mb-12 bg-card/30 border border-border rounded-lg p-8">
            <h2 className="font-display text-xl font-semibold mb-6 text-foreground">
              {isEn ? 'Appendix: Policy Comparison' : 'Apêndice: Comparativo de Políticas'}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground meta-mono font-normal">{isEn ? 'Dimension' : 'Dimensão'}</th>
                    <th className="text-left py-3 px-4 text-muted-foreground meta-mono font-normal">{isEn ? 'OTC-centric' : 'OTC-cêntrico'}</th>
                    <th className="text-left py-3 px-4 text-muted-foreground meta-mono font-normal">{isEn ? 'Microstructure-centric' : 'Microestrutura-cêntrico'}</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">{isEn ? 'Transparency' : 'Transparência'}</td>
                    <td className="py-3 px-4">{isEn ? 'Low' : 'Baixa'}</td>
                    <td className="py-3 px-4 text-primary">{isEn ? 'High' : 'Alta'}</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">{isEn ? 'Scalability' : 'Escalabilidade'}</td>
                    <td className="py-3 px-4">{isEn ? 'Limited' : 'Limitada'}</td>
                    <td className="py-3 px-4 text-primary">{isEn ? 'High' : 'Alta'}</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">{isEn ? 'Regulatory risk' : 'Risco regulatório'}</td>
                    <td className="py-3 px-4">{isEn ? 'High' : 'Alto'}</td>
                    <td className="py-3 px-4 text-primary">{isEn ? 'Low' : 'Baixo'}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">{isEn ? 'Price formation' : 'Formação de preço'}</td>
                    <td className="py-3 px-4">{isEn ? 'Opaque' : 'Opaca'}</td>
                    <td className="py-3 px-4 text-primary">{isEn ? 'Transparent' : 'Transparente'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </motion.div>

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-t border-border pt-12 mt-12"
        >
          <div className="flex items-start gap-6">
            <img 
              src="/images/ai_host_avatar.png" 
              alt="Guilherme Bissoli"
              className="w-20 h-20 rounded-full object-cover border-2 border-primary/30"
            />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Guilherme Bissoli</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {isEn 
                  ? 'Building financial infrastructure for the Global South. Director @ Coins.xyz Brazil.'
                  : 'Construindo infraestrutura financeira para o Global South. Director @ Coins.xyz Brasil.'
                }
              </p>
              <div className="flex gap-3">
                <a href="https://x.com/guinicoli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="https://linkedin.com/in/guinicoli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-sm text-muted-foreground meta-mono">
            © 2026 gui.dev — {isEn ? 'All rights reserved' : 'Todos os direitos reservados'}
          </p>
        </div>
      </footer>
    </div>
  );
}
