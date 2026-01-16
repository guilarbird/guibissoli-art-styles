/**
 * Artigo Canonical: Pagamentos Cross-Border com Stablecoins - O Caso LatAm
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
Pagamentos Cross-Border com Stablecoins: O Caso da América Latina.

A América Latina recebeu 156 bilhões de dólares em remessas em 2023, um crescimento de 80% em relação a 2018. Esse fluxo massivo de capital enfrenta fricções significativas: taxas elevadas, prazos de liquidação longos, e infraestrutura bancária fragmentada. As stablecoins estão emergindo como alternativa viável para reduzir essas ineficiências.

O corredor de remessas Estados Unidos-México é o maior do mundo, movimentando mais de 60 bilhões de dólares anualmente. Tradicionalmente, esse fluxo depende de redes como Western Union, MoneyGram, ou transferências bancárias via SWIFT. O custo médio para enviar 200 dólares para a América Latina é de aproximadamente 6%, e o prazo de liquidação pode chegar a 3-5 dias úteis.

As stablecoins oferecem uma proposta de valor clara nesse contexto. Uma transferência de USDC ou USDT pode ser liquidada em minutos, com custos de transação na ordem de centavos. A Bitso, exchange mexicana, já processa mais de 80 bilhões de dólares em volume anualizado de pagamentos cross-border na região, utilizando stablecoins como rails de liquidação.

O modelo operacional típico funciona assim: o remetente nos Estados Unidos converte dólares em stablecoins através de uma plataforma regulada. As stablecoins são transferidas instantaneamente para uma exchange ou fintech no país de destino. O destinatário recebe moeda local em sua conta bancária ou carteira digital. Todo o processo pode ocorrer em menos de uma hora.

A Félix, fintech focada em remessas México-EUA, utiliza USDC como alternativa ao SWIFT. Segundo a empresa, o uso de stablecoins reduziu custos operacionais em mais de 50% comparado aos rails tradicionais. A Circle, emissora do USDC, tem investido ativamente em parcerias com fintechs latino-americanas para expandir esse modelo.

No Brasil, o sistema de stablecoins movimentou R$ 230 bilhões em 2024, segundo dados do mercado. A Jeeves, fintech de pagamentos B2B, anunciou recentemente uma rota de stablecoins entre Brasil e Estados Unidos para transferências corporativas instantâneas. A Conduit, outra fintech brasileira, defende que stablecoins devem ser regulamentadas como infraestrutura de pagamentos.

Os benefícios para empresas são particularmente relevantes. Pagamentos a fornecedores internacionais, que tradicionalmente levam dias e custam percentuais significativos, podem ser executados em minutos com custos fixos baixos. Para empresas com operações em múltiplos países da região, stablecoins oferecem uma camada de liquidação unificada que simplifica tesouraria.

No entanto, desafios regulatórios persistem. A maioria dos países latino-americanos ainda não tem frameworks claros para stablecoins como instrumentos de pagamento. No Brasil, as Resoluções 519-521 do Banco Central estabelecem requisitos para prestadores de serviços de ativos virtuais, mas a integração com o sistema de pagamentos tradicional ainda está em desenvolvimento.

A questão da última milha também é crítica. Para que stablecoins sejam úteis para remessas, o destinatário precisa conseguir converter facilmente para moeda local. Isso requer infraestrutura de on/off-ramp robusta, que ainda é limitada em muitos mercados da região. Exchanges locais e fintechs estão investindo para preencher essa lacuna.

A competição com CBDCs também está no horizonte. O Drex, a moeda digital do Banco Central brasileiro, pode eventualmente oferecer funcionalidades similares para pagamentos cross-border. No entanto, a interoperabilidade entre CBDCs de diferentes países ainda é incipiente, enquanto stablecoins já operam em escala global.

Para o Sul Global, stablecoins representam mais do que eficiência de pagamentos. Elas oferecem acesso a dólares digitais para populações com moedas locais voláteis, proteção contra inflação, e inclusão financeira para os não-bancarizados. Na Argentina, onde a inflação anual supera 100%, a demanda por stablecoins como reserva de valor é particularmente forte.

O volume de remessas usando criptoativos cresceu 900% globalmente no último ano, com Venezuela, Argentina, Brasil, México e El Salvador liderando a adoção na região. Esse crescimento orgânico, impulsionado por necessidade real dos usuários, sugere que stablecoins estão encontrando product-market fit no caso de uso de pagamentos internacionais.

Em síntese, a América Latina está se tornando um laboratório global para pagamentos cross-border com stablecoins. A combinação de alto volume de remessas, infraestrutura bancária fragmentada, e população digitalmente conectada cria condições ideais para adoção. As empresas e reguladores que entenderem essa dinâmica estarão melhor posicionados para capturar valor nessa transformação.
`;

const articleTextEn = `
Cross-Border Payments with Stablecoins: The Latin America Case.

Latin America received 156 billion dollars in remittances in 2023, an 80% growth compared to 2018. This massive capital flow faces significant frictions: high fees, long settlement times, and fragmented banking infrastructure. Stablecoins are emerging as a viable alternative to reduce these inefficiencies.

The United States-Mexico remittance corridor is the largest in the world, moving more than 60 billion dollars annually. Traditionally, this flow depends on networks like Western Union, MoneyGram, or bank transfers via SWIFT. The average cost to send 200 dollars to Latin America is approximately 6%, and settlement time can reach 3-5 business days.

Stablecoins offer a clear value proposition in this context. A USDC or USDT transfer can be settled in minutes, with transaction costs in the order of cents. Bitso, a Mexican exchange, already processes more than 80 billion dollars in annualized cross-border payment volume in the region, using stablecoins as settlement rails.

The typical operational model works like this: the sender in the United States converts dollars to stablecoins through a regulated platform. Stablecoins are transferred instantly to an exchange or fintech in the destination country. The recipient receives local currency in their bank account or digital wallet. The entire process can occur in less than an hour.

Félix, a fintech focused on Mexico-US remittances, uses USDC as an alternative to SWIFT. According to the company, using stablecoins reduced operational costs by more than 50% compared to traditional rails. Circle, the USDC issuer, has been actively investing in partnerships with Latin American fintechs to expand this model.

In Brazil, the stablecoin system moved R$ 230 billion in 2024, according to market data. Jeeves, a B2B payments fintech, recently announced a stablecoin route between Brazil and the United States for instant corporate transfers. Conduit, another Brazilian fintech, argues that stablecoins should be regulated as payment infrastructure.

The benefits for companies are particularly relevant. Payments to international suppliers, which traditionally take days and cost significant percentages, can be executed in minutes with low fixed costs. For companies with operations in multiple countries in the region, stablecoins offer a unified settlement layer that simplifies treasury.

However, regulatory challenges persist. Most Latin American countries still don't have clear frameworks for stablecoins as payment instruments. In Brazil, Central Bank Resolutions 519-521 establish requirements for virtual asset service providers, but integration with the traditional payment system is still under development.

The last mile question is also critical. For stablecoins to be useful for remittances, the recipient needs to be able to easily convert to local currency. This requires robust on/off-ramp infrastructure, which is still limited in many markets in the region. Local exchanges and fintechs are investing to fill this gap.

Competition with CBDCs is also on the horizon. Drex, the Brazilian Central Bank's digital currency, may eventually offer similar functionalities for cross-border payments. However, interoperability between CBDCs from different countries is still nascent, while stablecoins already operate at global scale.

For the Global South, stablecoins represent more than payment efficiency. They offer access to digital dollars for populations with volatile local currencies, protection against inflation, and financial inclusion for the unbanked. In Argentina, where annual inflation exceeds 100%, demand for stablecoins as a store of value is particularly strong.

Remittance volume using crypto assets grew 900% globally last year, with Venezuela, Argentina, Brazil, Mexico, and El Salvador leading adoption in the region. This organic growth, driven by real user need, suggests that stablecoins are finding product-market fit in the international payments use case.

In summary, Latin America is becoming a global laboratory for cross-border payments with stablecoins. The combination of high remittance volume, fragmented banking infrastructure, and digitally connected population creates ideal conditions for adoption. Companies and regulators who understand this dynamic will be better positioned to capture value in this transformation.
`;

const articleTextZh = `
稳定币跨境支付：拉丁美洲案例。

拉丁美洲在2023年收到了1560亿美元的汇款，与2018年相比增长了80%。这一大规模资本流动面临着重大摩擦：高额费用、漫长的结算时间和碎片化的银行基础设施。稳定币正在成为减少这些低效率的可行替代方案。

美国-墨西哥汇款走廊是世界上最大的，每年流动超过600亿美元。传统上，这一流动依赖于Western Union、MoneyGram等网络或通过SWIFT进行的银行转账。向拉丁美洲汇款200美元的平均成本约为6%，结算时间可能达到3-5个工作日。

稳定币在这种情况下提供了明确的价值主张。USDC或USDT转账可以在几分钟内结算，交易成本仅为几美分。墨西哥交易所Bitso已经在该地区处理超过800亿美元的年化跨境支付量，使用稳定币作为结算轨道。

典型的运营模式是这样的：美国的汇款人通过受监管的平台将美元转换为稳定币。稳定币即时转移到目的地国家的交易所或金融科技公司。收款人在其银行账户或数字钱包中收到当地货币。整个过程可以在不到一小时内完成。

专注于墨西哥-美国汇款的金融科技公司Félix使用USDC作为SWIFT的替代方案。据该公司称，使用稳定币将运营成本降低了50%以上。USDC发行商Circle一直在积极投资与拉丁美洲金融科技公司的合作伙伴关系，以扩展这一模式。

在巴西，根据市场数据，稳定币系统在2024年流动了2300亿雷亚尔。B2B支付金融科技公司Jeeves最近宣布了巴西和美国之间的稳定币路线，用于即时企业转账。另一家巴西金融科技公司Conduit认为，稳定币应该被监管为支付基础设施。

对企业的好处尤其相关。传统上需要数天并花费大量百分比的国际供应商付款，可以在几分钟内以低固定成本执行。对于在该地区多个国家运营的公司，稳定币提供了统一的结算层，简化了资金管理。

然而，监管挑战仍然存在。大多数拉丁美洲国家仍然没有将稳定币作为支付工具的明确框架。在巴西，中央银行第519-521号决议为虚拟资产服务提供商建立了要求，但与传统支付系统的整合仍在开发中。

最后一公里问题也很关键。为了使稳定币对汇款有用，收款人需要能够轻松转换为当地货币。这需要强大的入金/出金基础设施，而这在该地区的许多市场仍然有限。当地交易所和金融科技公司正在投资填补这一空白。

与CBDC的竞争也在地平线上。巴西中央银行的数字货币Drex最终可能为跨境支付提供类似的功能。然而，不同国家CBDC之间的互操作性仍处于起步阶段，而稳定币已经在全球范围内运营。

对于全球南方，稳定币代表的不仅仅是支付效率。它们为拥有波动性当地货币的人口提供数字美元访问、通胀保护和无银行账户者的金融包容性。在阿根廷，年通胀率超过100%，对稳定币作为价值储存的需求特别强烈。

使用加密资产的汇款量在去年全球增长了900%，委内瑞拉、阿根廷、巴西、墨西哥和萨尔瓦多在该地区领先采用。这种由真实用户需求驱动的有机增长表明，稳定币正在国际支付用例中找到产品市场契合。

总之，拉丁美洲正在成为稳定币跨境支付的全球实验室。高汇款量、碎片化的银行基础设施和数字连接的人口的结合为采用创造了理想条件。理解这种动态的公司和监管机构将更好地定位于在这一转型中获取价值。
`;

// Trilingual content
const content = {
  title: {
    pt: 'Pagamentos Cross-Border com Stablecoins: O Caso LatAm',
    en: 'Cross-Border Payments with Stablecoins: The LatAm Case',
    zh: '稳定币跨境支付：拉丁美洲案例',
  },
  subtitle: {
    pt: 'Como as stablecoins estão transformando remessas e pagamentos internacionais na América Latina',
    en: 'How stablecoins are transforming remittances and international payments in Latin America',
    zh: '稳定币如何改变拉丁美洲的汇款和国际支付',
  },
  backLink: {
    pt: 'Voltar aos escritos',
    en: 'Back to writings',
    zh: '返回文章列表',
  },
  categoryTag: {
    pt: 'Pagamentos Globais',
    en: 'Global Payments',
    zh: '全球支付',
  },
  date: '2026.01.20',
  readTime: {
    pt: '11 min de leitura',
    en: '11 min read',
    zh: '11分钟阅读',
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
      pt: 'A América Latina recebeu 156 bilhões de dólares em remessas em 2023, um crescimento de 80% em relação a 2018. Esse fluxo massivo de capital enfrenta fricções significativas: taxas elevadas, prazos de liquidação longos, e infraestrutura bancária fragmentada. As stablecoins estão emergindo como alternativa viável para reduzir essas ineficiências.',
      en: 'Latin America received 156 billion dollars in remittances in 2023, an 80% growth compared to 2018. This massive capital flow faces significant frictions: high fees, long settlement times, and fragmented banking infrastructure. Stablecoins are emerging as a viable alternative to reduce these inefficiencies.',
      zh: '拉丁美洲在2023年收到了1560亿美元的汇款，与2018年相比增长了80%。这一大规模资本流动面临着重大摩擦：高额费用、漫长的结算时间和碎片化的银行基础设施。稳定币正在成为减少这些低效率的可行替代方案。',
    },
    corridorTitle: {
      pt: 'O Corredor EUA-México',
      en: 'The US-Mexico Corridor',
      zh: '美国-墨西哥走廊',
    },
    corridor: {
      pt: 'O corredor Estados Unidos-México é o maior do mundo, movimentando mais de 60 bilhões de dólares anualmente. O custo médio para enviar 200 dólares é de aproximadamente 6%, com prazo de 3-5 dias úteis. Uma transferência de stablecoins pode ser liquidada em minutos, com custos na ordem de centavos. A Bitso já processa mais de 80 bilhões em volume anualizado na região.',
      en: 'The United States-Mexico corridor is the largest in the world, moving more than 60 billion dollars annually. The average cost to send 200 dollars is approximately 6%, with a 3-5 business day timeline. A stablecoin transfer can be settled in minutes, with costs in the order of cents. Bitso already processes more than 80 billion in annualized volume in the region.',
      zh: '美国-墨西哥走廊是世界上最大的，每年流动超过600亿美元。汇款200美元的平均成本约为6%，需要3-5个工作日。稳定币转账可以在几分钟内结算，成本仅为几美分。Bitso已经在该地区处理超过800亿美元的年化交易量。',
    },
    modelTitle: {
      pt: 'Modelo Operacional',
      en: 'Operational Model',
      zh: '运营模式',
    },
    model: {
      pt: 'O remetente converte dólares em stablecoins através de plataforma regulada. As stablecoins são transferidas instantaneamente para exchange ou fintech no destino. O destinatário recebe moeda local em conta bancária ou carteira digital. A Félix, usando USDC, reduziu custos operacionais em mais de 50% comparado ao SWIFT.',
      en: 'The sender converts dollars to stablecoins through a regulated platform. Stablecoins are transferred instantly to an exchange or fintech at the destination. The recipient receives local currency in a bank account or digital wallet. Félix, using USDC, reduced operational costs by more than 50% compared to SWIFT.',
      zh: '汇款人通过受监管的平台将美元转换为稳定币。稳定币即时转移到目的地的交易所或金融科技公司。收款人在银行账户或数字钱包中收到当地货币。使用USDC的Félix将运营成本降低了50%以上。',
    },
    brazilTitle: {
      pt: 'O Caso Brasil',
      en: 'The Brazil Case',
      zh: '巴西案例',
    },
    brazil: {
      pt: 'No Brasil, o sistema de stablecoins movimentou R$ 230 bilhões em 2024. A Jeeves anunciou rota de stablecoins Brasil-EUA para transferências B2B instantâneas. A Conduit defende que stablecoins devem ser regulamentadas como infraestrutura de pagamentos. As Resoluções 519-521 do BC estabelecem requisitos para VASPs, mas a integração com pagamentos tradicionais ainda evolui.',
      en: 'In Brazil, the stablecoin system moved R$ 230 billion in 2024. Jeeves announced a Brazil-US stablecoin route for instant B2B transfers. Conduit argues that stablecoins should be regulated as payment infrastructure. BC Resolutions 519-521 establish requirements for VASPs, but integration with traditional payments is still evolving.',
      zh: '在巴西，稳定币系统在2024年流动了2300亿雷亚尔。Jeeves宣布了巴西-美国稳定币路线用于即时B2B转账。Conduit认为稳定币应该被监管为支付基础设施。BC第519-521号决议为VASP建立了要求，但与传统支付的整合仍在发展中。',
    },
    challengesTitle: {
      pt: 'Desafios e Competição',
      en: 'Challenges and Competition',
      zh: '挑战与竞争',
    },
    challenges: {
      pt: 'A última milha é crítica: o destinatário precisa converter facilmente para moeda local, exigindo infraestrutura de on/off-ramp robusta. A competição com CBDCs como o Drex está no horizonte, mas a interoperabilidade entre CBDCs de diferentes países ainda é incipiente, enquanto stablecoins já operam globalmente.',
      en: 'The last mile is critical: the recipient needs to easily convert to local currency, requiring robust on/off-ramp infrastructure. Competition with CBDCs like Drex is on the horizon, but interoperability between CBDCs from different countries is still nascent, while stablecoins already operate globally.',
      zh: '最后一公里至关重要：收款人需要能够轻松转换为当地货币，这需要强大的入金/出金基础设施。与Drex等CBDC的竞争即将到来，但不同国家CBDC之间的互操作性仍处于起步阶段，而稳定币已经在全球运营。',
    },
    globalSouthTitle: {
      pt: 'Impacto no Sul Global',
      en: 'Impact on the Global South',
      zh: '对全球南方的影响',
    },
    globalSouth: {
      pt: 'Para o Sul Global, stablecoins oferecem acesso a dólares digitais para populações com moedas voláteis, proteção contra inflação, e inclusão financeira. Na Argentina, com inflação anual acima de 100%, a demanda por stablecoins como reserva de valor é particularmente forte. O volume de remessas cripto cresceu 900% globalmente.',
      en: 'For the Global South, stablecoins offer access to digital dollars for populations with volatile currencies, inflation protection, and financial inclusion. In Argentina, with annual inflation above 100%, demand for stablecoins as a store of value is particularly strong. Crypto remittance volume grew 900% globally.',
      zh: '对于全球南方，稳定币为拥有波动性货币的人口提供数字美元访问、通胀保护和金融包容性。在阿根廷，年通胀率超过100%，对稳定币作为价值储存的需求特别强烈。加密汇款量在全球增长了900%。',
    },
    conclusion: {
      pt: 'A América Latina está se tornando um laboratório global para pagamentos cross-border com stablecoins. A combinação de alto volume de remessas, infraestrutura bancária fragmentada, e população digitalmente conectada cria condições ideais para adoção. As empresas e reguladores que entenderem essa dinâmica estarão melhor posicionados para capturar valor nessa transformação.',
      en: 'Latin America is becoming a global laboratory for cross-border payments with stablecoins. The combination of high remittance volume, fragmented banking infrastructure, and digitally connected population creates ideal conditions for adoption. Companies and regulators who understand this dynamic will be better positioned to capture value in this transformation.',
      zh: '拉丁美洲正在成为稳定币跨境支付的全球实验室。高汇款量、碎片化的银行基础设施和数字连接的人口的结合为采用创造了理想条件。理解这种动态的公司和监管机构将更好地定位于在这一转型中获取价值。',
    },
  },
};

export default function ArticleCrossBorder() {
  const { language } = useLanguage();
  const lang = language as 'pt' | 'en' | 'zh';

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title[lang],
    "description": content.subtitle[lang],
    "datePublished": "2026-01-20",
    "dateModified": "2026-01-20",
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
      "@id": "https://guibissoli.xyz/writings/cross-border-stablecoins-latam"
    },
    "keywords": ["cross-border payments", "stablecoins", "remittances", "Latin America", "USDC", "fintech", "global south"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Helmet>
        <title>{content.title[lang]} | guibissoli</title>
        <meta name="description" content={content.subtitle[lang]} />
        <meta name="keywords" content="cross-border payments, stablecoins, remittances, Latin America, USDC, fintech, pagamentos internacionais, remessas" />
        <meta property="og:title" content={content.title[lang]} />
        <meta property="og:description" content={content.subtitle[lang]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://guibissoli.xyz/writings/cross-border-stablecoins-latam" />
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
              src="/images/styles/data_viz/style_data_viz_004.png"
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

            {/* Corridor */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.corridorTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.corridor[lang]}
            </p>

            {/* Model */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.modelTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.model[lang]}
            </p>

            {/* Brazil */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.brazilTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.brazil[lang]}
            </p>

            {/* Challenges */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.challengesTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.challenges[lang]}
            </p>

            {/* Global South */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.globalSouthTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.globalSouth[lang]}
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
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.title[lang])}&url=${encodeURIComponent('https://guibissoli.xyz/writings/cross-border-stablecoins-latam')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-card rounded-lg transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://guibissoli.xyz/writings/cross-border-stablecoins-latam')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-card rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <button 
                  onClick={() => navigator.clipboard.writeText('https://guibissoli.xyz/writings/cross-border-stablecoins-latam')}
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
