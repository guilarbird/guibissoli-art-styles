/**
 * Artigo Canonical: Tick Size, Microestrutura e Liquidez Funcional
 * Design: Terminal Aesthetic - clean, professional, academic
 */
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from 'lucide-react';
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

After recent adjustments to the tick size of the USDT/BRL pair, structural spread compression, useful liquidity consolidation, accumulated slippage reduction, and greater intraday stability were observed.

Section 6. Tick size as a governance instrument.

Traditional exchanges have always treated tick size as a market governance instrument. As stablecoins approach the FX and payments universe, microstructure ceases to be neutral.

Section 7. Convergence with regulatory spirit.

The recent regulatory movement in Brazil, including BCB Resolution 521, points to greater predictability and reduction of opaque arbitrages. Well-calibrated tick size naturally compresses spreads, reduces structural OTC dependence, and improves price formation quality.

Section 8. Implications for investors and policymakers.

For PE, VC, and policymakers, tick size functions as a leading indicator of institutional maturity. Platforms that master microstructure scale with lower marginal cost, attract institutional flow, and face lower regulatory risk.

Conclusion.

As the Brazilian market discusses stablecoins, OTC, and sandbox, the natural next step is to return to fundamentals. If 2026 marks the consolidation of digital FX in Brazil, microstructure will not be a detail — it will be a precondition.
`;

export default function ArticleTickSize() {
  const { language } = useLanguage();
  
  const articleMeta = {
    date: '2026.01.02',
    readTime: '15 min',
    tags: ['microestrutura', 'stablecoins', 'tick-size', 'otc', 'regulação'],
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />
      
      <article className="pt-24 pb-20">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/writings" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={16} />
              <span className="meta-mono">cd ../writings</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="meta-mono text-primary mb-4">
              <span className="text-muted-foreground">{'>'}</span> cat tick-size-microestrutura.md
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Tick Size, Microestrutura e Liquidez Funcional
              <span className="cursor-blink text-primary">_</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              Como ajustes aparentemente técnicos redefinem o papel do mercado spot em stablecoins
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span className="meta-mono">{articleMeta.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span className="meta-mono">{articleMeta.readTime}</span>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {articleMeta.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs meta-mono rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Audio Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <AudioPlayer 
              textPt={articleTextPt}
              textEn={articleTextEn}
              title="Tick Size, Microestrutura e Liquidez Funcional"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Resumo Executivo */}
            <section className="mb-12 p-6 border border-border rounded-lg bg-card/50">
              <h2 className="font-display text-xl font-semibold mb-4 text-primary">Resumo executivo</h2>
              <p className="text-muted-foreground leading-relaxed">
                A discussão recente sobre stablecoins, OTC e sandbox regulatório no Brasil tem avançado rapidamente no plano jurídico. No entanto, há uma variável estrutural menos visível — o <strong className="text-foreground">tick size</strong> — que atua como determinante primário da eficiência do mercado spot. Este artigo argumenta que ajustes finos de microestrutura, em especial no tamanho mínimo de variação de preço, podem reduzir spreads de forma endógena, aumentar profundidade funcional do livro de ordens e diminuir a dependência estrutural de canais OTC. A análise parte de fundamentos clássicos de microestrutura de mercado e observa evidências empíricas no par USDT/BRL após ajustes recentes, discutindo implicações econômicas, institucionais e regulatórias.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-primary meta-mono">01</span>
                Por que microestrutura voltou ao centro do debate
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mercados financeiros maduros raramente resolvem problemas de liquidez por meio de exceções permanentes. Historicamente, o caminho tem sido outro: <strong className="text-foreground">calibração cuidadosa dos mecanismos de negociação</strong>. Parâmetros como prioridade preço-tempo, regras de cancelamento e, sobretudo, tamanho de tick sempre foram tratados como instrumentos centrais de governança econômica.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                No contexto cripto-fiat, onde stablecoins começam a desempenhar papel funcional de moeda de liquidação para FX, pagamentos e remessas, essa lógica retorna. A pergunta relevante deixa de ser apenas "como regular OTC" e passa a ser: <em className="text-primary">por que o mercado spot ainda depende tanto dele?</em>
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-primary meta-mono">02</span>
                Tick size: um detalhe técnico com efeito macroeconômico
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O tick size define o menor incremento admissível de preço em um livro de ordens contínuo. Embora pareça um detalhe operacional, ele atua como um <strong className="text-foreground">limitador estrutural da competição</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Quando o tick é grande demais em relação ao preço do ativo, à sua volatilidade e ao volume negociado, o spread deixa de refletir risco ou informação e passa a refletir apenas o grid permitido. Nesse regime, a renda do provedor de liquidez se torna estrutural, e não competitiva.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Quando o tick é excessivamente pequeno, por outro lado, o mercado entra em um regime de <strong className="text-foreground">micro-ruído</strong>: competição por frações irrelevantes de preço, aumento de cancelamentos, instabilidade do melhor preço e pouca melhora na liquidez funcional.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-foreground">
                O ponto central é que o tick define o regime econômico do mercado — não apenas sua estética.
              </blockquote>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-primary meta-mono">03</span>
                A forma do book importa mais que o topo do book
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Avaliações superficiais de liquidez costumam se concentrar no best bid/ask. Para fluxos institucionais, isso é insuficiente. O que importa é a <strong className="text-foreground">geometria completa do livro de ordens</strong>.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Books com tick mal calibrado exibem liquidez concentrada em poucos níveis, com descontinuidades abruptas logo abaixo do topo.</li>
                <li>Books com tick adequado tendem a apresentar profundidade distribuída, com custo marginal de execução mais previsível à medida que o tamanho cresce.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Para FX e pagamentos, <strong className="text-foreground">previsibilidade domina preço pontual</strong>. Um book "apertado" no topo, mas frágil logo abaixo, não cumpre função operacional.
              </p>
            </section>

            {/* Diagram 1 & 2 */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <figure className="border border-border rounded-lg overflow-hidden bg-card/30">
                  <img 
                    src="/images/diagram-tick-fino.png" 
                    alt="Livro de ordens com tick excessivamente fino - Regime de Micro-Ruído"
                    className="w-full"
                  />
                  <figcaption className="p-4 text-sm text-muted-foreground">
                    <strong className="text-foreground">Diagrama 1:</strong> Tick excessivamente fino — múltiplos níveis com pouco volume, liquidez fragmentada. O book parece líquido, mas não é funcional.
                  </figcaption>
                </figure>
                <figure className="border border-border rounded-lg overflow-hidden bg-card/30">
                  <img 
                    src="/images/diagram-tick-calibrado.png" 
                    alt="Livro de ordens com tick calibrado - Regime Funcional"
                    className="w-full"
                  />
                  <figcaption className="p-4 text-sm text-muted-foreground">
                    <strong className="text-foreground">Diagrama 2:</strong> Tick calibrado — menos níveis, mais volume por nível, liquidez contínua. O livro deixa de ser vitrine e passa a ser infraestrutura.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-primary meta-mono">04</span>
                OTC como sintoma de falha estrutural
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OTC surge, na maioria dos mercados, quando o mercado contínuo falha simultaneamente em três dimensões:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong className="text-foreground">Preço</strong> — spreads largos ou instáveis</li>
                <li><strong className="text-foreground">Tamanho</strong> — incapacidade de absorver fluxo</li>
                <li><strong className="text-foreground">Previsibilidade</strong> — execução errática</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OTC não cria liquidez. Ele apenas realoca custo e risco fora do mercado organizado, reduzindo transparência e aumentando assimetria informacional.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-foreground">
                Mercados maduros utilizam OTC como exceção (block trades, riscos idiossincráticos), não como infraestrutura principal. Quando OTC se torna estrutural, isso indica falha persistente de microestrutura.
              </blockquote>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-primary meta-mono">05</span>
                Evidência empírica: mudança de regime no USDT/BRL
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Após ajustes recentes no tick size do par USDT/BRL, observou-se uma mudança consistente com a teoria clássica de microestrutura:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Compressão estrutural do spread, sem intervenção administrativa</li>
                <li>Consolidação de liquidez útil nos primeiros níveis do book</li>
                <li>Redução do slippage acumulado</li>
                <li>Maior estabilidade intraday da formação de preço</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                O aspecto mais relevante não é o valor absoluto em bps, mas a <strong className="text-foreground">mudança de topologia do mercado</strong>: de um book ruidoso e fragmentado para um book mais contínuo e funcional. Trata-se de uma transição típica de mercados que deixam o regime retail e passam a operar como infraestrutura.
              </p>
            </section>

            {/* Diagram 3 - Slippage Curve */}
            <section className="mb-12">
              <figure className="border border-border rounded-lg overflow-hidden bg-card/30">
                <img 
                  src="/images/diagram-slippage-curve.png" 
                  alt="Curva de Slippage: Antes vs Depois"
                  className="w-full"
                />
                <figcaption className="p-4 text-sm text-muted-foreground">
                  <strong className="text-foreground">Diagrama 3:</strong> Curva de slippage antes e depois do ajuste de tick. O ganho não é apenas "spread menor", mas <em>elasticidade de liquidez</em> — custo de execução previsível conforme o tamanho da ordem cresce.
                </figcaption>
              </figure>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-primary meta-mono">06</span>
                Tick size como instrumento de governança
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bolsas tradicionais sempre trataram tick size como instrumento de governança de mercado — ajustando-o conforme liquidez, perfil de participantes e risco de manipulação. Não é coincidência que a B3 revise tabelas de tick como parte central de sua política de mercado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                À medida que stablecoins se aproximam do universo de FX e pagamentos, a microestrutura deixa de ser neutra. Books artificiais dificultam supervisão e distorcem estatísticas; books contínuos facilitam rastreabilidade e reduzem a necessidade de exceções.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-primary meta-mono">07</span>
                Convergência com o espírito regulatório
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O movimento regulatório recente no Brasil, incluindo a <strong className="text-foreground">Resolução BCB 521</strong>, aponta para maior previsibilidade, integração estatística e redução de arbitragens opacas. Nesse contexto, microestrutura eficiente atua como disciplina econômica endógena.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tick size bem calibrado:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Comprime spreads de forma natural</li>
                <li>Reduz dependência estrutural de OTC</li>
                <li>Melhora qualidade da formação de preço</li>
                <li>Diminui pressão por sandboxes permanentes</li>
              </ul>
              <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-foreground">
                Trata-se de uma solução econômica, não jurídica — e justamente por isso, durável.
              </blockquote>
            </section>

            {/* Diagram 4 - OTC Flow */}
            <section className="mb-12">
              <figure className="border border-border rounded-lg overflow-hidden bg-card/30">
                <img 
                  src="/images/diagram-otc-flow.png" 
                  alt="OTC como Função da Microestrutura"
                  className="w-full"
                />
                <figcaption className="p-4 text-sm text-muted-foreground">
                  <strong className="text-foreground">Diagrama 4:</strong> OTC como função da microestrutura. O fluxo à esquerda mostra como tick mal calibrado leva a OTC estrutural; à direita, como tick calibrado permite que OTC seja apenas excepcional.
                </figcaption>
              </figure>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-primary meta-mono">08</span>
                Implicações para investidores e formuladores de política
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para PE, VC e policy makers, o tick size funciona como <strong className="text-foreground">leading indicator de maturidade institucional</strong>. Plataformas que dominam microestrutura:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Escalam com menor custo marginal</li>
                <li>Atraem fluxo institucional</li>
                <li>Convergem para FX e pagamentos</li>
                <li>Enfrentam menor risco regulatório ex post</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Em última instância, a discussão não é sobre volume ou competição pontual entre plataformas. É sobre <strong className="text-foreground">operar no regime econômico correto</strong>.
              </p>
            </section>

            {/* Conclusion */}
            <section className="mb-12 p-6 border border-primary/30 rounded-lg bg-primary/5">
              <h2 className="font-display text-2xl font-semibold mb-4 text-primary">Conclusão</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                À medida que o mercado brasileiro discute stablecoins, OTC e sandbox, o próximo passo natural é voltar ao fundamento. Tick size é uma dessas variáveis invisíveis que moldam incentivos, definem regimes e separam mercados transitórios de infraestruturas duráveis.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 my-6 text-xl font-display text-foreground">
                Se 2026 marcar a consolidação do FX digital no Brasil, a microestrutura não será detalhe — será pré-condição.
              </blockquote>
            </section>

            {/* Policy Appendix */}
            <section className="mb-12 border-t border-border pt-12">
              <h2 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-primary meta-mono">Apêndice</span>
                Do sandbox à infraestrutura: implicações regulatórias
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">A. O problema regulatório mal formulado</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Grande parte do debate regulatório recente parte da seguinte premissa implícita:
                  </p>
                  <blockquote className="border-l-4 border-muted pl-4 my-4 italic text-muted-foreground">
                    "OTC é necessário porque o mercado spot não suporta FX e remessas."
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed">
                    Essa premissa confunde causa e efeito. <strong className="text-foreground">OTC não é causa de liquidez — é resposta a falha estrutural do mercado contínuo.</strong>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">B. Microestrutura como mecanismo de disciplina endógena</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ajustes de microestrutura — especialmente tick size — produzem efeitos que normalmente se tenta alcançar via regulação exógena:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                      <thead className="bg-card">
                        <tr>
                          <th className="text-left p-3 border-b border-border">Objetivo regulatório</th>
                          <th className="text-left p-3 border-b border-border">Microestrutura eficiente</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border">
                          <td className="p-3">Reduzir arbitragem opaca</td>
                          <td className="p-3 text-primary">✔ spreads endógenos</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3">Melhorar rastreabilidade</td>
                          <td className="p-3 text-primary">✔ execução visível</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3">Diminuir dependência OTC</td>
                          <td className="p-3 text-primary">✔ book funcional</td>
                        </tr>
                        <tr>
                          <td className="p-3">Aumentar previsibilidade</td>
                          <td className="p-3 text-primary">✔ slippage contínuo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Ou seja: menos exceção, mais regra econômica.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">C. Compatibilidade com o espírito da BCB 521</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A lógica subjacente à BCB 521 é: previsibilidade, integração estatística e redução de zonas cinzentas. Tick size bem calibrado melhora qualidade do dado reportado, reduz internalização bilateral e fortalece o mercado organizado.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Não há conflito — há convergência funcional.</strong>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">D. O papel do sandbox OTC (redefinido)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Com microestrutura funcional, o sandbox OTC passa a ter papel claro e limitado:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Block trades genuínos</li>
                    <li>Estruturas bespoke</li>
                    <li>Janelas fora do horário principal</li>
                    <li>Mitigação de risco idiossincrático</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Não como substituto permanente do mercado spot.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">E. Princípio orientador para policy makers</h3>
                  <blockquote className="border-l-4 border-primary pl-4 my-4 text-foreground">
                    <strong>Princípio:</strong> Sempre que possível, corrigir falhas de mercado com desenho de mercado — não com exceções regulatórias.
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed">
                    Esse é o princípio histórico das bolsas organizadas e o caminho mais eficiente para o mercado cripto-fiat.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">F. Por que isso importa agora</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O Brasil está num ponto raro: mercado suficientemente grande, regulação em construção, espaço para alinhar eficiência e prudência.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Ignorar microestrutura neste momento é importar problemas maduros sem importar as soluções.</strong>
                  </p>
                </div>
              </div>

              {/* Final Quote */}
              <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/30">
                <blockquote className="text-xl font-display text-center text-foreground">
                  "Antes de discutir exceções para o mercado, é preciso garantir que o mercado funcione."
                </blockquote>
              </div>
            </section>

            {/* Share Section */}
            <section className="border-t border-border pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src="/images/ai_host_avatar.png" 
                    alt="Guilherme Bissoli"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Guilherme Bissoli</p>
                    <p className="text-sm text-muted-foreground">Managing Partner @ Coins.xyz Brazil</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">Share:</span>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=Tick Size, Microestrutura e Liquidez Funcional&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
