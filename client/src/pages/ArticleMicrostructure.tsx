/**
 * Artigo Canonical: Microestrutura de Mercado como Fundamento do FX Digital no Brasil
 * Design: NYT Editorial Style - hero image, elegant typography
 * Trilingual support: PT, EN, ZH
 */
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Headphones } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import AudioPlayer from '@/components/AudioPlayer';
import { useLanguage } from '@/contexts/LanguageContext';

// Full article text for TTS
const articleTextPt = `
Microestrutura de Mercado como Fundamento do FX Digital no Brasil.

À medida que a discussão sobre stablecoins, OTC e sandbox regulatório no Brasil avança rapidamente no campo jurídico, uma variável estrutural menos visível passa a se destacar como determinante central da eficiência do mercado spot: a microestrutura de mercado — em particular, o tick size.

A experiência histórica dos mercados financeiros maduros demonstra que problemas de liquidez raramente são resolvidos por exceções permanentes ou soluções paralelas. O caminho dominante tem sido a calibração cuidadosa dos mecanismos de negociação, onde parâmetros como prioridade preço-tempo, regras de cancelamento e, de forma crucial, a variação mínima de preço sempre foram tratados como instrumentos centrais de governança econômica.

O tick size define o menor incremento de preço permitido em um livro de ordens contínuo. Embora frequentemente percebido como um detalhe operacional, ele atua como um limitador estrutural da competição. Quando excessivamente grande, o spread deixa de refletir risco ou informação e passa a ser determinado artificialmente pela granularidade permitida de preços. Quando excessivamente pequeno, o mercado pode entrar em regimes de micro-ruído, fragmentação e instabilidade operacional. O objetivo, portanto, não é a minimização do tick, mas sua calibração eficiente, de modo a promover consolidação de liquidez e profundidade funcional do livro de ofertas.

Para fluxos institucionais, a avaliação superficial de liquidez — baseada apenas no melhor preço de compra e venda — é insuficiente. O fator decisivo é a geometria completa do livro de ordens: sua capacidade de absorver volumes relevantes com previsibilidade de execução. Em universos como FX e pagamentos, previsibilidade e capacidade de execução dominam o preço pontual como critérios de decisão.

É nesse contexto específico que a dependência excessiva de canais OTC deve ser interpretada com cautela. Em mercados globais maduros, o OTC não é uma anomalia, mas uma escolha institucional, associada à confidencialidade, à mitigação de impacto de mercado e à customização de tamanho e timing. No entanto, quando analisado sob a ótica de stablecoins utilizadas como rails de FX e pagamentos, o crescimento estrutural do OTC pode sinalizar limitações do mercado contínuo em três dimensões simultâneas: preço, tamanho e previsibilidade de execução. Nesses casos, o OTC não cria liquidez adicional, mas realoca custos e riscos para fora do ambiente organizado e transparente.

Observações empíricas recentes no mercado de USDT/BRL — baseadas em análises proprietárias ao longo de múltiplos ciclos de mercado — indicam que ajustes na calibração do tick size estão associados a compressão estrutural de spreads, maior consolidação da liquidez útil, redução do slippage acumulado e aumento da estabilidade intradiária. Ainda que tais observações não substituam estudos acadêmicos formais, elas reforçam a intuição econômica de que a microestrutura deixa de ser neutra à medida que esses mercados se aproximam funcionalmente do universo de FX e pagamentos.

Essa leitura converge com o espírito da evolução regulatória recente no Brasil, incluindo a Resolução 521 do Banco Central, que enfatiza previsibilidade, transparência e redução de arbitragens oportunísticas. Embora a regulação não prescreva parâmetros específicos de microestrutura, sua lógica subjacente é compatível com mercados onde a formação de preços ocorre de maneira mais eficiente, previsível e institucionalmente robusta.

Um tick size adequadamente calibrado tende, de forma endógena, a comprimir spreads, reduzir a dependência estrutural de OTC e melhorar a qualidade da formação de preços. Para investidores de Private Equity, Venture Capital e formuladores de política pública, o domínio da microestrutura funciona como um indicador antecedente de maturidade institucional. Plataformas que compreendem e operam esses mecanismos escalam com menor custo marginal, atraem fluxos institucionais e enfrentam menor risco regulatório ao longo do tempo.

Em síntese, enquanto o mercado brasileiro debate o futuro das stablecoins, o próximo passo natural é o retorno aos fundamentos. Se 2026 marcar a consolidação do FX digital no Brasil, a microestrutura não será um detalhe operacional, mas uma pré-condição para eficiência, estabilidade e institucionalização do mercado.
`;

const articleTextEn = `
Market Microstructure as the Foundation of Digital FX in Brazil.

As the discussion surrounding stablecoins, OTC, and the regulatory sandbox in Brazil rapidly advances in the legal field, a less visible structural variable is emerging as a central determinant of spot market efficiency: market microstructure—in particular, the tick size.

The historical experience of mature financial markets demonstrates that liquidity problems are rarely solved by permanent exceptions or parallel solutions. The dominant path has been the careful calibration of trading mechanisms, where parameters such as price-time priority, cancellation rules, and, crucially, the minimum price variation have always been treated as central instruments of economic governance.

The tick size defines the smallest price increment permitted in a continuous order book. Although often perceived as an operational detail, it acts as a structural constraint on competition. When excessively large, the spread ceases to reflect risk or information and becomes artificially determined by the allowed price granularity. When excessively small, the market can enter regimes of micro-noise, fragmentation, and operational instability. The objective, therefore, is not the minimization of the tick, but its efficient calibration, in order to promote liquidity consolidation and functional depth of the order book.

For institutional flows, the superficial assessment of liquidity—based only on the best bid and offer—is insufficient. The decisive factor is the complete geometry of the order book: its capacity to absorb relevant volumes with execution predictability. In universes such as FX and payments, predictability and execution capacity dominate the spot price as decision criteria.

It is in this specific context that the excessive reliance on OTC channels must be interpreted with caution. In mature global markets, OTC is not an anomaly but an institutional choice, associated with confidentiality, mitigation of market impact, and customization of size and timing. However, when analyzed from the perspective of stablecoins used as FX and payment rails, the structural growth of OTC may signal limitations of the continuous market in three simultaneous dimensions: price, size, and execution predictability. In these cases, OTC does not create additional liquidity but reallocates costs and risks outside the organized and transparent environment.

Recent empirical observations in the USDT/BRL market—based on proprietary analyses across multiple market cycles—indicate that adjustments in tick size calibration are associated with structural spread compression, greater consolidation of useful liquidity, reduction of accumulated slippage, and increased intraday stability. Although such observations do not replace formal academic studies, they reinforce the economic intuition that microstructure ceases to be neutral as these markets functionally approach the FX and payments universe.

This interpretation converges with the spirit of recent regulatory evolution in Brazil, including Central Bank Resolution 521, which emphasizes predictability, transparency, and the reduction of opportunistic arbitrage. Although the regulation does not prescribe specific microstructure parameters, its underlying logic is compatible with markets where price formation occurs more efficiently, predictably, and institutionally robustly.

An adequately calibrated tick size tends, endogenously, to compress spreads, reduce structural reliance on OTC, and improve the quality of price formation. For Private Equity, Venture Capital investors, and public policy makers, mastery of microstructure functions as a leading indicator of institutional maturity. Platforms that understand and operate these mechanisms scale with lower marginal cost, attract institutional flows, and face less regulatory risk over time.

In summary, while the Brazilian market debates the future of stablecoins, the next natural step is a return to fundamentals. If 2026 marks the consolidation of digital FX in Brazil, microstructure will not be an operational detail, but a precondition for market efficiency, stability, and institutionalization.
`;

const articleTextZh = `
市场微观结构作为巴西数字 FX 的基础。

随着关于稳定币、OTC 和监管沙盒的讨论在巴西法律领域迅速推进，一个不那么明显的结构性变量正日益凸显，成为现货市场效率的核心决定因素：市场微观结构——特别是 tick size。

成熟金融市场的历史经验表明，流动性问题很少能通过永久性例外或并行解决方案来解决。主流路径一直是仔细校准交易机制，其中价格-时间优先、取消规则以及至关重要的最小价格变动等参数始终被视为经济治理的核心工具。

tick size 定义了连续订单簿中允许的最小价格增量。尽管它常被视为一个操作细节，但它充当了竞争的结构性限制因素。当它过大时，价差不再反映风险或信息，而是被人为地由允许的价格粒度决定。当它过小时，市场可能会进入微观噪音、碎片化和操作不稳定的状态。因此，目标不是最小化 tick，而是对其进行有效校准，以促进流动性整合和订单簿的功能深度。

对于机构资金流而言，仅基于最佳买卖价格的流动性肤浅评估是不足的。决定性因素是订单簿的完整几何结构：其以可预测的执行吸收相关交易量的能力。在 FX 和支付等领域，可预测性和执行能力在决策标准中胜过瞬时价格。

正是在这种特定背景下，对 OTC 渠道的过度依赖应被谨慎解读。在成熟的全球市场中，OTC 并非异常，而是一种机构选择，与保密性、减轻市场影响以及定制规模和时机相关联。然而，当从用作 FX 和支付轨道的稳定币的角度进行分析时，OTC 的结构性增长可能同时在三个维度上暗示连续市场的局限性：价格、规模和执行可预测性。在这些情况下，OTC 并非创造了额外的流动性，而是将成本和风险重新分配到透明、有组织的环境之外。

最近对 USDT/BRL 市场的实证观察——基于跨越多个市场周期的专有分析——表明，tick size 校准的调整与价差的结构性压缩、有效流动性的更高整合、累计滑点的减少以及盘中稳定性的增加相关联。尽管这些观察不能取代正式的学术研究，但它们强化了经济直觉，即随着这些市场在功能上接近 FX 和支付领域，微观结构不再是中性的。

这种解读与巴西近期监管演变的精髓相一致，包括巴西中央银行的第 521 号决议，该决议强调可预测性、透明度和减少机会主义套利。尽管该法规没有规定具体的微观结构参数，但其潜在逻辑与价格形成以更有效、可预测和机构稳健的方式发生的市场是兼容的。

适当校准的 tick size 倾向于内生地压缩价差，减少对 OTC 的结构性依赖，并提高价格形成的质量。对于私募股权、风险投资的投资者和公共政策制定者而言，掌握微观结构可作为机构成熟度的先行指标。理解并操作这些机制的平台能够以较低的边际成本进行扩展，吸引机构资金流，并随着时间的推移面临较低的监管风险。

总之，当巴西市场讨论稳定币的未来时，下一个自然的步骤是回归基本面。如果 2026 年标志着数字 FX 在巴西的巩固，那么微观结构将不再是一个操作细节，而是市场效率、稳定性和制度化的先决条件。
`;

// Trilingual content
const content = {
  title: {
    pt: 'Microestrutura de Mercado como Fundamento do FX Digital no Brasil',
    en: 'Market Microstructure as the Foundation of Digital FX in Brazil',
    zh: '市场微观结构作为巴西数字 FX 的基础',
  },
  subtitle: {
    pt: 'Por que o tick size é determinante central da eficiência do mercado spot de stablecoins',
    en: 'Why tick size is a central determinant of stablecoin spot market efficiency',
    zh: '为什么 tick size 是稳定币现货市场效率的核心决定因素',
  },
  backLink: {
    pt: 'Voltar aos escritos',
    en: 'Back to writings',
    zh: '返回文章列表',
  },
  categoryTag: {
    pt: 'Artigo Original',
    en: 'Original Article',
    zh: '原创文章',
  },
  audioAvailable: {
    pt: 'Áudio disponível',
    en: 'Audio available',
    zh: '音频可用',
  },
  paragraphs: [
    {
      pt: 'À medida que a discussão sobre stablecoins, OTC e sandbox regulatório no Brasil avança rapidamente no campo jurídico, uma variável estrutural menos visível passa a se destacar como determinante central da eficiência do mercado spot: a microestrutura de mercado — em particular, o tick size.',
      en: 'As the discussion surrounding stablecoins, OTC, and the regulatory sandbox in Brazil rapidly advances in the legal field, a less visible structural variable is emerging as a central determinant of spot market efficiency: market microstructure—in particular, the tick size.',
      zh: '随着关于稳定币、OTC 和监管沙盒的讨论在巴西法律领域迅速推进，一个不那么明显的结构性变量正日益凸显，成为现货市场效率的核心决定因素：市场微观结构——特别是 tick size。',
    },
    {
      pt: 'A experiência histórica dos mercados financeiros maduros demonstra que problemas de liquidez raramente são resolvidos por exceções permanentes ou soluções paralelas. O caminho dominante tem sido a calibração cuidadosa dos mecanismos de negociação, onde parâmetros como prioridade preço-tempo, regras de cancelamento e, de forma crucial, a variação mínima de preço sempre foram tratados como instrumentos centrais de governança econômica.',
      en: 'The historical experience of mature financial markets demonstrates that liquidity problems are rarely solved by permanent exceptions or parallel solutions. The dominant path has been the careful calibration of trading mechanisms, where parameters such as price-time priority, cancellation rules, and, crucially, the minimum price variation have always been treated as central instruments of economic governance.',
      zh: '成熟金融市场的历史经验表明，流动性问题很少能通过永久性例外或并行解决方案来解决。主流路径一直是仔细校准交易机制，其中价格-时间优先、取消规则以及至关重要的最小价格变动等参数始终被视为经济治理的核心工具。',
    },
    {
      pt: 'O tick size define o menor incremento de preço permitido em um livro de ordens contínuo. Embora frequentemente percebido como um detalhe operacional, ele atua como um limitador estrutural da competição. Quando excessivamente grande, o spread deixa de refletir risco ou informação e passa a ser determinado artificialmente pela granularidade permitida de preços. Quando excessivamente pequeno, o mercado pode entrar em regimes de micro-ruído, fragmentação e instabilidade operacional. O objetivo, portanto, não é a minimização do tick, mas sua calibração eficiente, de modo a promover consolidação de liquidez e profundidade funcional do livro de ofertas.',
      en: 'The tick size defines the smallest price increment permitted in a continuous order book. Although often perceived as an operational detail, it acts as a structural constraint on competition. When excessively large, the spread ceases to reflect risk or information and becomes artificially determined by the allowed price granularity. When excessively small, the market can enter regimes of micro-noise, fragmentation, and operational instability. The objective, therefore, is not the minimization of the tick, but its efficient calibration, in order to promote liquidity consolidation and functional depth of the order book.',
      zh: 'tick size 定义了连续订单簿中允许的最小价格增量。尽管它常被视为一个操作细节，但它充当了竞争的结构性限制因素。当它过大时，价差不再反映风险或信息，而是被人为地由允许的价格粒度决定。当它过小时，市场可能会进入微观噪音、碎片化和操作不稳定的状态。因此，目标不是最小化 tick，而是对其进行有效校准，以促进流动性整合和订单簿的功能深度。',
    },
    {
      pt: 'Para fluxos institucionais, a avaliação superficial de liquidez — baseada apenas no melhor preço de compra e venda — é insuficiente. O fator decisivo é a geometria completa do livro de ordens: sua capacidade de absorver volumes relevantes com previsibilidade de execução. Em universos como FX e pagamentos, previsibilidade e capacidade de execução dominam o preço pontual como critérios de decisão.',
      en: 'For institutional flows, the superficial assessment of liquidity—based only on the best bid and offer—is insufficient. The decisive factor is the complete geometry of the order book: its capacity to absorb relevant volumes with execution predictability. In universes such as FX and payments, predictability and execution capacity dominate the spot price as decision criteria.',
      zh: '对于机构资金流而言，仅基于最佳买卖价格的流动性肤浅评估是不足的。决定性因素是订单簿的完整几何结构：其以可预测的执行吸收相关交易量的能力。在 FX 和支付等领域，可预测性和执行能力在决策标准中胜过瞬时价格。',
    },
    {
      pt: 'É nesse contexto específico que a dependência excessiva de canais OTC deve ser interpretada com cautela. Em mercados globais maduros, o OTC não é uma anomalia, mas uma escolha institucional, associada à confidencialidade, à mitigação de impacto de mercado e à customização de tamanho e timing. No entanto, quando analisado sob a ótica de stablecoins utilizadas como rails de FX e pagamentos, o crescimento estrutural do OTC pode sinalizar limitações do mercado contínuo em três dimensões simultâneas: preço, tamanho e previsibilidade de execução. Nesses casos, o OTC não cria liquidez adicional, mas realoca custos e riscos para fora do ambiente organizado e transparente.',
      en: 'It is in this specific context that the excessive reliance on OTC channels must be interpreted with caution. In mature global markets, OTC is not an anomaly but an institutional choice, associated with confidentiality, mitigation of market impact, and customization of size and timing. However, when analyzed from the perspective of stablecoins used as FX and payment rails, the structural growth of OTC may signal limitations of the continuous market in three simultaneous dimensions: price, size, and execution predictability. In these cases, OTC does not create additional liquidity but reallocates costs and risks outside the organized and transparent environment.',
      zh: '正是在这种特定背景下，对 OTC 渠道的过度依赖应被谨慎解读。在成熟的全球市场中，OTC 并非异常，而是一种机构选择，与保密性、减轻市场影响以及定制规模和时机相关联。然而，当从用作 FX 和支付轨道的稳定币的角度进行分析时，OTC 的结构性增长可能同时在三个维度上暗示连续市场的局限性：价格、规模和执行可预测性。在这些情况下，OTC 并非创造了额外的流动性，而是将成本和风险重新分配到透明、有组织的环境之外。',
    },
    {
      pt: 'Observações empíricas recentes no mercado de USDT/BRL — baseadas em análises proprietárias ao longo de múltiplos ciclos de mercado — indicam que ajustes na calibração do tick size estão associados a compressão estrutural de spreads, maior consolidação da liquidez útil, redução do slippage acumulado e aumento da estabilidade intradiária. Ainda que tais observações não substituam estudos acadêmicos formais, elas reforçam a intuição econômica de que a microestrutura deixa de ser neutra à medida que esses mercados se aproximam funcionalmente do universo de FX e pagamentos.',
      en: 'Recent empirical observations in the USDT/BRL market—based on proprietary analyses across multiple market cycles—indicate that adjustments in tick size calibration are associated with structural spread compression, greater consolidation of useful liquidity, reduction of accumulated slippage, and increased intraday stability. Although such observations do not replace formal academic studies, they reinforce the economic intuition that microstructure ceases to be neutral as these markets functionally approach the FX and payments universe.',
      zh: '最近对 USDT/BRL 市场的实证观察——基于跨越多个市场周期的专有分析——表明，tick size 校准的调整与价差的结构性压缩、有效流动性的更高整合、累计滑点的减少以及盘中稳定性的增加相关联。尽管这些观察不能取代正式的学术研究，但它们强化了经济直觉，即随着这些市场在功能上接近 FX 和支付领域，微观结构不再是中性的。',
    },
    {
      pt: 'Essa leitura converge com o espírito da evolução regulatória recente no Brasil, incluindo a Resolução 521 do Banco Central, que enfatiza previsibilidade, transparência e redução de arbitragens oportunísticas. Embora a regulação não prescreva parâmetros específicos de microestrutura, sua lógica subjacente é compatível com mercados onde a formação de preços ocorre de maneira mais eficiente, previsível e institucionalmente robusta.',
      en: 'This interpretation converges with the spirit of recent regulatory evolution in Brazil, including Central Bank Resolution 521, which emphasizes predictability, transparency, and the reduction of opportunistic arbitrage. Although the regulation does not prescribe specific microstructure parameters, its underlying logic is compatible with markets where price formation occurs more efficiently, predictably, and institutionally robustly.',
      zh: '这种解读与巴西近期监管演变的精髓相一致，包括巴西中央银行的第 521 号决议，该决议强调可预测性、透明度和减少机会主义套利。尽管该法规没有规定具体的微观结构参数，但其潜在逻辑与价格形成以更有效、可预测和机构稳健的方式发生的市场是兼容的。',
    },
    {
      pt: 'Um tick size adequadamente calibrado tende, de forma endógena, a comprimir spreads, reduzir a dependência estrutural de OTC e melhorar a qualidade da formação de preços. Para investidores de Private Equity, Venture Capital e formuladores de política pública, o domínio da microestrutura funciona como um indicador antecedente de maturidade institucional. Plataformas que compreendem e operam esses mecanismos escalam com menor custo marginal, atraem fluxos institucionais e enfrentam menor risco regulatório ao longo do tempo.',
      en: 'An adequately calibrated tick size tends, endogenously, to compress spreads, reduce structural reliance on OTC, and improve the quality of price formation. For Private Equity, Venture Capital investors, and public policy makers, mastery of microstructure functions as a leading indicator of institutional maturity. Platforms that understand and operate these mechanisms scale with lower marginal cost, attract institutional flows, and face less regulatory risk over time.',
      zh: '适当校准的 tick size 倾向于内生地压缩价差，减少对 OTC 的结构性依赖，并提高价格形成的质量。对于私募股权、风险投资的投资者和公共政策制定者而言，掌握微观结构可作为机构成熟度的先行指标。理解并操作这些机制的平台能够以较低的边际成本进行扩展，吸引机构资金流，并随着时间的推移面临较低的监管风险。',
    },
    {
      pt: 'Em síntese, enquanto o mercado brasileiro debate o futuro das stablecoins, o próximo passo natural é o retorno aos fundamentos. Se 2026 marcar a consolidação do FX digital no Brasil, a microestrutura não será um detalhe operacional, mas uma pré-condição para eficiência, estabilidade e institucionalização do mercado.',
      en: 'In summary, while the Brazilian market debates the future of stablecoins, the next natural step is a return to fundamentals. If 2026 marks the consolidation of digital FX in Brazil, microstructure will not be an operational detail, but a precondition for market efficiency, stability, and institutionalization.',
      zh: '总之，当巴西市场讨论稳定币的未来时，下一个自然的步骤是回归基本面。如果 2026 年标志着数字 FX 在巴西的巩固，那么微观结构将不再是一个操作细节，而是市场效率、稳定性和制度化的先决条件。',
    },
  ],
  authorBio: {
    pt: 'Especialista em Web3, stablecoins e infraestrutura financeira. Country Manager da Coins.xyz Brasil, ex-Head de Fiat na Binance Brasil.',
    en: 'Specialist in Web3, stablecoins and financial infrastructure. Country Manager at Coins.xyz Brazil, former Head of Fiat at Binance Brazil.',
    zh: 'Web3、稳定币和金融基础设施专家。Coins.xyz 巴西国家经理，前 Binance 巴西法币负责人。',
  },
  footer: {
    pt: 'Construindo infraestrutura financeira para o Sul Global',
    en: 'Building financial infrastructure for the Global South',
    zh: '为全球南方构建金融基础设施',
  },
};

export default function ArticleMicrostructure() {
  const { language } = useLanguage();
  const lang = language as 'pt' | 'en' | 'zh';

  // Get article text for current language
  const getArticleText = () => {
    switch (lang) {
      case 'en': return articleTextEn;
      case 'zh': return articleTextZh;
      default: return articleTextPt;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/images/art-styles/data_viz/data_viz_01.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />

        <div className="container relative z-10 max-w-4xl mx-auto px-8">
          {/* Back link */}
          <Link href="/writings" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} />
            <span className="meta-mono text-sm">{content.backLink[lang]}</span>
          </Link>

          {/* Category tag */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full meta-mono">
              {content.categoryTag[lang]}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground text-xs">
              <Headphones size={12} />
              <span className="meta-mono">{content.audioAvailable[lang]}</span>
            </span>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight"
          >
            {content.title[lang]}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-6"
          >
            {content.subtitle[lang]}
          </motion.p>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span className="meta-mono">2026.01.15</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span className="meta-mono">8 min</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Share2 size={14} />
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.title[lang])}&url=${encodeURIComponent('https://guibissoli.xyz/writings/microstructure-fx-digital')}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter size={16} />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://guibissoli.xyz/writings/microstructure-fx-digital')}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audio Player */}
      <section className="py-6 border-y border-border bg-card/30">
        <div className="max-w-4xl mx-auto px-8">
          <AudioPlayer 
            textPt={articleTextPt}
            textEn={articleTextEn}
            textZh={articleTextZh}
            title="Microestrutura de Mercado como Fundamento do FX Digital no Brasil"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          {content.paragraphs.map((para, index) => (
            <p key={index} className="text-foreground/90 leading-relaxed mb-6 text-lg">
              {para[lang]}
            </p>
          ))}
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
                {content.authorBio[lang]}
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
            © 2026 gui.dev — {content.footer[lang]}
          </p>
        </div>
      </footer>
    </div>
  );
}
