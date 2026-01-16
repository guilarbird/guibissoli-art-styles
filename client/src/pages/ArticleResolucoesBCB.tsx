/**
 * Artigo Canonical: Resoluções BCB 519, 520 e 521 - O Novo Marco dos Ativos Virtuais
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
Resoluções BCB 519, 520 e 521: O Novo Marco Regulatório dos Ativos Virtuais no Brasil.

Em novembro de 2025, o Banco Central do Brasil deu um passo decisivo na regulamentação do mercado de criptoativos ao publicar as Resoluções 519, 520 e 521. Com entrada em vigor prevista para 2 de fevereiro de 2026, essas normas estabelecem o primeiro framework completo para prestadores de serviços de ativos virtuais no país, elevando significativamente o padrão institucional exigido para operar neste mercado.

O conjunto normativo não apenas operacionaliza a Lei 14.478 de 2022, o chamado Marco Legal das Criptomoedas, como também posiciona o Brasil entre as jurisdições com regulação mais abrangente do setor. A abordagem escolhida pelo BC reflete uma tendência global de integração dos ativos virtuais ao sistema financeiro tradicional, em contraste com modelos anteriores baseados em exceções ou tolerância regulatória.

A Resolução 519 estrutura o processo de autorização de funcionamento das Sociedades Prestadoras de Serviços de Ativos Virtuais, ou PSAVs. O modelo estabelece três modalidades distintas de enquadramento. A primeira, denominada Intermediária, abrange atividades de negociação e oferta, incluindo compra, venda e troca de ativos virtuais, subscrição de emissões e administração de carteiras. A segunda modalidade, Custodiante, foca na guarda e controle de chaves privadas e instrumentos de acesso aos ativos. A terceira, Corretora, é a única que pode acumular atividades de intermediação e custódia simultaneamente.

Um ponto crítico da nova regulação é a vedação expressa à emissão de stablecoins com reserva controlada por algoritmos. Esta proibição alinha o Brasil às preocupações internacionais evidenciadas após o colapso de projetos como Terra/Luna, sinalizando que apenas stablecoins com lastro verificável em ativos reais serão toleradas no mercado brasileiro.

A Resolução 520 detalha os requisitos de governança, gestão de riscos e controles internos. As PSAVs devem manter diretoria estatutária com no mínimo três diretores responsáveis por áreas específicas: prevenção à lavagem de dinheiro e financiamento do terrorismo, controles internos, e riscos e capital. A exigência de sede física administrativa de uso exclusivo, vedando coworking ou escritórios virtuais, reforça a intenção de elevar o patamar institucional do setor.

A segregação patrimonial obrigatória entre carteiras de clientes e carteiras próprias da empresa, com auditoria anual obrigatória, representa uma das mudanças mais significativas. Esta exigência visa proteger os recursos dos clientes em caso de insolvência da prestadora, problema que afetou milhares de investidores em casos como FTX e outras exchanges que operavam com fundos misturados.

A Resolução 521 traz talvez a mudança mais estrutural: a classificação de operações com stablecoins como operações de câmbio. Pagamentos ou transferências internacionais envolvendo ativos virtuais, negociações com stablecoins entre residentes e não residentes, e transferências para carteiras autocustodiadas passam a integrar formalmente o mercado de câmbio brasileiro.

Esta classificação tem implicações profundas. Estabelece limites operacionais de 100 mil dólares por operação, ou 500 mil dólares quando a contraparte for autorizada. Exige classificação correta da finalidade da remessa e reporte de informações ao BC. E submete essas operações ao arcabouço regulatório cambial existente, incluindo obrigações de compliance e prevenção à lavagem de dinheiro.

Os requisitos de capital mínimo seguem uma lógica cumulativa baseada na complexidade das operações. O custo base parte de 1 milhão de reais para serviços básicos, 3 milhões para custódia e 5 milhões para operações internacionais. Adicionais de 5 milhões se aplicam quando há processamento ou armazenamento de dados próprios relevantes, com acréscimo de 50% para cada novo serviço de infraestrutura acumulado.

Para entidades já em operação, a regulação estabelece um regime de transição em duas fases. A primeira fase exige comprovação de operação prévia, apresentação de demonstrações financeiras auditadas e informação sobre controladores e volumetria. A segunda fase demanda implementação integral dos requisitos de governança, PLDFT e riscos. Entidades estrangeiras têm 270 dias para transferir clientes e operações para uma empresa brasileira autorizada.

O contexto global reforça a relevância dessas mudanças. Nos Estados Unidos, o GENIUS Act criou um regime federal para emissores de stablecoins pareadas ao dólar. Na União Europeia, o MiCA entrou em aplicação efetiva, forçando migração para stablecoins compatíveis. Singapura e Hong Kong aprofundaram seus marcos existentes. O Brasil, com 90% dos fluxos cripto relacionados a stablecoins segundo o próprio BC, não poderia permanecer à margem dessa convergência regulatória global.

O cenário que se projeta para 2026 é de consolidação prática deste arcabouço. Prestadores de serviços terão que se adaptar aos novos padrões prudenciais, informacionais e de governança. Reguladores executarão um trabalho inédito de supervisão em um mercado que deixa definitivamente a fase experimental. E o mercado brasileiro de criptoativos, particularmente o segmento de stablecoins e pagamentos cross-border, ganhará previsibilidade jurídica e institucional.

Para investidores, empreendedores e formuladores de política pública, a mensagem é clara: o Brasil optou por um modelo de integração regulada, não de exceção ou tolerância. As empresas que compreenderem e se adaptarem a este novo ambiente terão vantagem competitiva significativa. As que resistirem enfrentarão barreiras crescentes de entrada e operação.

O prazo de 2 de fevereiro de 2026 não é apenas uma data de compliance. É o marco de uma nova era para os ativos virtuais no Brasil.
`;

const articleTextEn = `
BCB Resolutions 519, 520 and 521: The New Regulatory Framework for Virtual Assets in Brazil.

In November 2025, Brazil's Central Bank took a decisive step in regulating the crypto asset market by publishing Resolutions 519, 520, and 521. With an effective date of February 2, 2026, these rules establish the first comprehensive framework for virtual asset service providers in the country, significantly raising the institutional standards required to operate in this market.

This regulatory package not only operationalizes Law 14,478 of 2022, known as the Cryptocurrency Legal Framework, but also positions Brazil among jurisdictions with the most comprehensive sector regulation. The approach chosen by the Central Bank reflects a global trend of integrating virtual assets into the traditional financial system, in contrast to earlier models based on exceptions or regulatory tolerance.

Resolution 519 structures the authorization process for Virtual Asset Service Provider Companies, or VASPs. The model establishes three distinct categories. The first, called Intermediary, covers trading and offering activities, including buying, selling, and exchanging virtual assets, subscription of issuances, and wallet administration. The second category, Custodian, focuses on safeguarding and controlling private keys and asset access instruments. The third, Broker, is the only one that can accumulate both intermediation and custody activities simultaneously.

A critical point of the new regulation is the express prohibition on issuing stablecoins with algorithmically controlled reserves. This ban aligns Brazil with international concerns evidenced after the collapse of projects like Terra/Luna, signaling that only stablecoins with verifiable backing in real assets will be tolerated in the Brazilian market.

Resolution 520 details governance, risk management, and internal control requirements. VASPs must maintain a statutory board with at least three directors responsible for specific areas: anti-money laundering and counter-terrorism financing, internal controls, and risk and capital. The requirement for exclusive-use physical administrative headquarters, prohibiting coworking or virtual offices, reinforces the intention to raise the sector's institutional standards.

Mandatory asset segregation between client wallets and company wallets, with mandatory annual auditing, represents one of the most significant changes. This requirement aims to protect client resources in case of provider insolvency, a problem that affected thousands of investors in cases like FTX and other exchanges that operated with commingled funds.

Resolution 521 brings perhaps the most structural change: the classification of stablecoin operations as foreign exchange operations. International payments or transfers involving virtual assets, stablecoin negotiations between residents and non-residents, and transfers to self-custodied wallets now formally integrate Brazil's foreign exchange market.

This classification has profound implications. It establishes operational limits of 100 thousand dollars per operation, or 500 thousand dollars when the counterparty is authorized. It requires correct classification of remittance purposes and information reporting to the Central Bank. And it subjects these operations to the existing foreign exchange regulatory framework, including compliance and anti-money laundering obligations.

Minimum capital requirements follow a cumulative logic based on operational complexity. The base cost starts at 1 million reais for basic services, 3 million for custody, and 5 million for international operations. Additional 5 million applies when there is relevant proprietary data processing or storage, with a 50% increase for each new accumulated infrastructure service.

For entities already in operation, the regulation establishes a two-phase transition regime. The first phase requires proof of prior operation, presentation of audited financial statements, and information about controllers and volume. The second phase demands full implementation of governance, AML/CFT, and risk requirements. Foreign entities have 270 days to transfer clients and operations to an authorized Brazilian company.

The global context reinforces the relevance of these changes. In the United States, the GENIUS Act created a federal regime for dollar-pegged stablecoin issuers. In the European Union, MiCA came into effective application, forcing migration to compliant stablecoins. Singapore and Hong Kong deepened their existing frameworks. Brazil, with 90% of crypto flows related to stablecoins according to the Central Bank itself, could not remain on the margins of this global regulatory convergence.

The scenario projected for 2026 is one of practical consolidation of this framework. Service providers will have to adapt to new prudential, informational, and governance standards. Regulators will execute unprecedented supervisory work in a market that is definitively leaving the experimental phase. And the Brazilian crypto asset market, particularly the stablecoin and cross-border payments segment, will gain legal and institutional predictability.

For investors, entrepreneurs, and public policy makers, the message is clear: Brazil has opted for a model of regulated integration, not exception or tolerance. Companies that understand and adapt to this new environment will have significant competitive advantage. Those that resist will face increasing barriers to entry and operation.

The February 2, 2026 deadline is not just a compliance date. It is the milestone of a new era for virtual assets in Brazil.
`;

const articleTextZh = `
巴西央行第519、520和521号决议：虚拟资产新监管框架。

2025年11月，巴西中央银行发布第519、520和521号决议，在加密资产市场监管方面迈出了决定性的一步。这些规则将于2026年2月2日生效，为该国虚拟资产服务提供商建立了首个全面框架，显著提高了在该市场运营所需的机构标准。

这套监管规定不仅使2022年第14,478号法律（即《加密货币法律框架》）得以实施，还使巴西跻身于拥有最全面行业监管的司法管辖区之列。央行选择的方法反映了将虚拟资产纳入传统金融体系的全球趋势，与早期基于例外或监管容忍的模式形成对比。

第519号决议构建了虚拟资产服务提供商公司（VASP）的授权流程。该模式建立了三个不同的类别。第一类称为中介机构，涵盖交易和发行活动，包括买卖和交换虚拟资产、认购发行和钱包管理。第二类是托管机构，专注于保管和控制私钥及资产访问工具。第三类是经纪商，是唯一可以同时累积中介和托管活动的类别。

新规的一个关键点是明确禁止发行由算法控制储备的稳定币。这一禁令使巴西与Terra/Luna等项目崩溃后显现的国际担忧保持一致，表明巴西市场只会容忍有可验证实际资产支持的稳定币。

第520号决议详细规定了治理、风险管理和内部控制要求。VASP必须维持一个至少有三名董事的法定董事会，分别负责特定领域：反洗钱和反恐融资、内部控制、风险和资本。要求专用实体行政总部、禁止共享办公或虚拟办公室的规定，强化了提高行业机构标准的意图。

客户钱包和公司钱包之间的强制资产隔离，以及强制年度审计，是最重要的变化之一。这一要求旨在保护客户资源免受提供商破产的影响，这个问题在FTX等混合运营资金的交易所案例中影响了数千名投资者。

第521号决议带来了可能是最具结构性的变化：将稳定币操作归类为外汇操作。涉及虚拟资产的国际支付或转账、居民与非居民之间的稳定币交易，以及向自托管钱包的转账，现在正式纳入巴西外汇市场。

这一分类具有深远影响。它规定每笔操作的限额为10万美元，或当对手方获得授权时为50万美元。它要求正确分类汇款目的并向央行报告信息。它使这些操作受现有外汇监管框架约束，包括合规和反洗钱义务。

最低资本要求遵循基于运营复杂性的累积逻辑。基本成本从基本服务的100万雷亚尔起，托管300万，国际业务500万。当存在相关自有数据处理或存储时，额外增加500万，每增加一项新的累积基础设施服务增加50%。

对于已在运营的实体，该规定建立了两阶段过渡制度。第一阶段要求证明先前运营、提交经审计的财务报表以及有关控制人和交易量的信息。第二阶段要求全面实施治理、反洗钱/反恐融资和风险要求。外国实体有270天时间将客户和业务转移给获授权的巴西公司。

全球背景强化了这些变化的相关性。在美国，GENIUS法案为与美元挂钩的稳定币发行商创建了联邦制度。在欧盟，MiCA开始有效实施，迫使向合规稳定币迁移。新加坡和香港深化了现有框架。据央行称，巴西90%的加密流量与稳定币相关，不能置身于这一全球监管趋同之外。

2026年的预期情景是该框架的实际巩固。服务提供商将必须适应新的审慎、信息和治理标准。监管机构将在一个明确离开实验阶段的市场中执行前所未有的监管工作。巴西加密资产市场，特别是稳定币和跨境支付领域，将获得法律和机构可预测性。

对于投资者、企业家和公共政策制定者，信息很明确：巴西选择了监管整合模式，而非例外或容忍。理解并适应这一新环境的公司将拥有显著的竞争优势。抵制的公司将面临越来越高的进入和运营壁垒。

2026年2月2日的截止日期不仅仅是合规日期。它是巴西虚拟资产新时代的里程碑。
`;

// Trilingual content
const content = {
  title: {
    pt: 'Resoluções BCB 519, 520 e 521: O Novo Marco dos Ativos Virtuais',
    en: 'BCB Resolutions 519, 520 and 521: The New Virtual Asset Framework',
    zh: '巴西央行第519、520和521号决议：虚拟资产新框架',
  },
  subtitle: {
    pt: 'O que muda com a regulamentação que entra em vigor em fevereiro de 2026',
    en: 'What changes with the regulation effective February 2026',
    zh: '2026年2月生效的新规带来哪些变化',
  },
  backLink: {
    pt: 'Voltar aos escritos',
    en: 'Back to writings',
    zh: '返回文章列表',
  },
  categoryTag: {
    pt: 'Análise Regulatória',
    en: 'Regulatory Analysis',
    zh: '监管分析',
  },
  date: '2026.01.17',
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
      pt: 'Em novembro de 2025, o Banco Central do Brasil deu um passo decisivo na regulamentação do mercado de criptoativos ao publicar as Resoluções 519, 520 e 521. Com entrada em vigor prevista para 2 de fevereiro de 2026, essas normas estabelecem o primeiro framework completo para prestadores de serviços de ativos virtuais no país, elevando significativamente o padrão institucional exigido para operar neste mercado.',
      en: 'In November 2025, Brazil\'s Central Bank took a decisive step in regulating the crypto asset market by publishing Resolutions 519, 520, and 521. With an effective date of February 2, 2026, these rules establish the first comprehensive framework for virtual asset service providers in the country, significantly raising the institutional standards required to operate in this market.',
      zh: '2025年11月，巴西中央银行发布第519、520和521号决议，在加密资产市场监管方面迈出了决定性的一步。这些规则将于2026年2月2日生效，为该国虚拟资产服务提供商建立了首个全面框架，显著提高了在该市场运营所需的机构标准。',
    },
    context: {
      pt: 'O conjunto normativo não apenas operacionaliza a Lei 14.478 de 2022, o chamado Marco Legal das Criptomoedas, como também posiciona o Brasil entre as jurisdições com regulação mais abrangente do setor. A abordagem escolhida pelo BC reflete uma tendência global de integração dos ativos virtuais ao sistema financeiro tradicional, em contraste com modelos anteriores baseados em exceções ou tolerância regulatória.',
      en: 'This regulatory package not only operationalizes Law 14,478 of 2022, known as the Cryptocurrency Legal Framework, but also positions Brazil among jurisdictions with the most comprehensive sector regulation. The approach chosen by the Central Bank reflects a global trend of integrating virtual assets into the traditional financial system, in contrast to earlier models based on exceptions or regulatory tolerance.',
      zh: '这套监管规定不仅使2022年第14,478号法律（即《加密货币法律框架》）得以实施，还使巴西跻身于拥有最全面行业监管的司法管辖区之列。央行选择的方法反映了将虚拟资产纳入传统金融体系的全球趋势，与早期基于例外或监管容忍的模式形成对比。',
    },
    resolution519Title: {
      pt: 'Resolução 519: Autorização e Modalidades',
      en: 'Resolution 519: Authorization and Categories',
      zh: '第519号决议：授权与类别',
    },
    resolution519: {
      pt: 'A Resolução 519 estrutura o processo de autorização de funcionamento das Sociedades Prestadoras de Serviços de Ativos Virtuais (PSAVs). O modelo estabelece três modalidades distintas de enquadramento: Intermediária (negociação e oferta), Custodiante (guarda e controle de chaves privadas) e Corretora (única que pode acumular intermediação e custódia). Um ponto crítico é a vedação expressa à emissão de stablecoins com reserva controlada por algoritmos, alinhando o Brasil às preocupações internacionais evidenciadas após o colapso de projetos como Terra/Luna.',
      en: 'Resolution 519 structures the authorization process for Virtual Asset Service Provider Companies (VASPs). The model establishes three distinct categories: Intermediary (trading and offering), Custodian (safeguarding private keys), and Broker (the only one that can accumulate both activities). A critical point is the express prohibition on issuing stablecoins with algorithmically controlled reserves, aligning Brazil with international concerns evidenced after the collapse of projects like Terra/Luna.',
      zh: '第519号决议构建了虚拟资产服务提供商公司（VASP）的授权流程。该模式建立了三个不同的类别：中介机构（交易和发行）、托管机构（保管私钥）和经纪商（唯一可以同时累积两种活动的类别）。一个关键点是明确禁止发行由算法控制储备的稳定币，使巴西与Terra/Luna等项目崩溃后显现的国际担忧保持一致。',
    },
    resolution520Title: {
      pt: 'Resolução 520: Governança e Segregação Patrimonial',
      en: 'Resolution 520: Governance and Asset Segregation',
      zh: '第520号决议：治理与资产隔离',
    },
    resolution520: {
      pt: 'A Resolução 520 detalha os requisitos de governança, gestão de riscos e controles internos. As PSAVs devem manter diretoria estatutária com no mínimo três diretores responsáveis por PLDFT, controles internos e riscos/capital. A exigência de sede física exclusiva (vedado coworking) e a segregação patrimonial obrigatória entre carteiras de clientes e da empresa, com auditoria anual, visam proteger recursos dos clientes em caso de insolvência — problema que afetou milhares de investidores em casos como FTX.',
      en: 'Resolution 520 details governance, risk management, and internal control requirements. VASPs must maintain a statutory board with at least three directors responsible for AML/CFT, internal controls, and risk/capital. The requirement for exclusive physical headquarters (no coworking) and mandatory asset segregation between client and company wallets, with annual auditing, aim to protect client resources in case of insolvency — a problem that affected thousands of investors in cases like FTX.',
      zh: '第520号决议详细规定了治理、风险管理和内部控制要求。VASP必须维持一个至少有三名董事的法定董事会，分别负责反洗钱/反恐融资、内部控制、风险和资本。要求专用实体总部（禁止共享办公）以及客户钱包和公司钱包之间的强制资产隔离并进行年度审计，旨在保护客户资源免受破产影响——这个问题在FTX等案例中影响了数千名投资者。',
    },
    resolution521Title: {
      pt: 'Resolução 521: Stablecoins como Câmbio',
      en: 'Resolution 521: Stablecoins as Foreign Exchange',
      zh: '第521号决议：稳定币作为外汇',
    },
    resolution521: {
      pt: 'A Resolução 521 traz a mudança mais estrutural: a classificação de operações com stablecoins como operações de câmbio. Pagamentos internacionais, negociações entre residentes e não residentes, e transferências para carteiras autocustodiadas passam a integrar o mercado de câmbio brasileiro. Isso estabelece limites de US$ 100 mil por operação (ou US$ 500 mil com contraparte autorizada), exige classificação da finalidade da remessa e submete essas operações ao arcabouço cambial existente.',
      en: 'Resolution 521 brings the most structural change: the classification of stablecoin operations as foreign exchange operations. International payments, negotiations between residents and non-residents, and transfers to self-custodied wallets now formally integrate Brazil\'s foreign exchange market. This establishes limits of $100,000 per operation (or $500,000 with authorized counterparty), requires classification of remittance purposes, and subjects these operations to the existing FX regulatory framework.',
      zh: '第521号决议带来了最具结构性的变化：将稳定币操作归类为外汇操作。国际支付、居民与非居民之间的交易，以及向自托管钱包的转账，现在正式纳入巴西外汇市场。这规定了每笔操作10万美元的限额（或与授权对手方为50万美元），要求分类汇款目的，并使这些操作受现有外汇监管框架约束。',
    },
    capitalTitle: {
      pt: 'Requisitos de Capital',
      en: 'Capital Requirements',
      zh: '资本要求',
    },
    capital: {
      pt: 'Os requisitos de capital mínimo seguem lógica cumulativa: R$ 1 milhão para serviços básicos, R$ 3 milhões para custódia e R$ 5 milhões para operações internacionais. Adicionais de R$ 5 milhões se aplicam para processamento de dados próprios, com acréscimo de 50% para cada novo serviço de infraestrutura. Para entidades já em operação, há regime de transição em duas fases. Entidades estrangeiras têm 270 dias para transferir operações para empresa brasileira autorizada.',
      en: 'Minimum capital requirements follow cumulative logic: R$1 million for basic services, R$3 million for custody, and R$5 million for international operations. Additional R$5 million applies for proprietary data processing, with 50% increase for each new infrastructure service. For entities already in operation, there is a two-phase transition regime. Foreign entities have 270 days to transfer operations to an authorized Brazilian company.',
      zh: '最低资本要求遵循累积逻辑：基本服务100万雷亚尔，托管300万，国际业务500万。自有数据处理额外增加500万，每增加一项新基础设施服务增加50%。对于已在运营的实体，有两阶段过渡制度。外国实体有270天时间将业务转移给获授权的巴西公司。',
    },
    globalTitle: {
      pt: 'Contexto Global',
      en: 'Global Context',
      zh: '全球背景',
    },
    global: {
      pt: 'O contexto global reforça a relevância dessas mudanças. Nos EUA, o GENIUS Act criou regime federal para emissores de stablecoins. Na UE, o MiCA entrou em aplicação efetiva. Singapura e Hong Kong aprofundaram seus marcos. O Brasil, com 90% dos fluxos cripto relacionados a stablecoins segundo o BC, não poderia permanecer à margem dessa convergência regulatória global.',
      en: 'The global context reinforces the relevance of these changes. In the US, the GENIUS Act created a federal regime for stablecoin issuers. In the EU, MiCA came into effective application. Singapore and Hong Kong deepened their frameworks. Brazil, with 90% of crypto flows related to stablecoins according to the Central Bank, could not remain on the margins of this global regulatory convergence.',
      zh: '全球背景强化了这些变化的相关性。在美国，GENIUS法案为稳定币发行商创建了联邦制度。在欧盟，MiCA开始有效实施。新加坡和香港深化了现有框架。据央行称，巴西90%的加密流量与稳定币相关，不能置身于这一全球监管趋同之外。',
    },
    conclusion: {
      pt: 'O cenário que se projeta para 2026 é de consolidação prática deste arcabouço. Para investidores, empreendedores e formuladores de política pública, a mensagem é clara: o Brasil optou por um modelo de integração regulada, não de exceção ou tolerância. O prazo de 2 de fevereiro de 2026 não é apenas uma data de compliance. É o marco de uma nova era para os ativos virtuais no Brasil.',
      en: 'The scenario projected for 2026 is one of practical consolidation of this framework. For investors, entrepreneurs, and public policy makers, the message is clear: Brazil has opted for a model of regulated integration, not exception or tolerance. The February 2, 2026 deadline is not just a compliance date. It is the milestone of a new era for virtual assets in Brazil.',
      zh: '2026年的预期情景是该框架的实际巩固。对于投资者、企业家和公共政策制定者，信息很明确：巴西选择了监管整合模式，而非例外或容忍。2026年2月2日的截止日期不仅仅是合规日期。它是巴西虚拟资产新时代的里程碑。',
    },
  },
};

export default function ArticleResolucoesBCB() {
  const { language } = useLanguage();
  const lang = language as 'pt' | 'en' | 'zh';

  // Get the appropriate article text based on language
  const getArticleText = () => {
    switch (lang) {
      case 'en':
        return articleTextEn;
      case 'zh':
        return articleTextZh;
      default:
        return articleTextPt;
    }
  };

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title[lang],
    "description": content.subtitle[lang],
    "datePublished": "2026-01-17",
    "dateModified": "2026-01-17",
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
      "@id": "https://guibissoli.xyz/writings/resolucoes-bcb-519-520-521"
    },
    "keywords": ["BCB", "Banco Central", "Resolução 519", "Resolução 520", "Resolução 521", "stablecoins", "regulação", "VASP", "criptoativos", "Brasil"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Helmet>
        <title>{content.title[lang]} | guibissoli</title>
        <meta name="description" content={content.subtitle[lang]} />
        <meta name="keywords" content="BCB, Banco Central, Resolução 519, Resolução 520, Resolução 521, stablecoins, regulação, VASP, criptoativos, Brasil, crypto regulation" />
        <meta property="og:title" content={content.title[lang]} />
        <meta property="og:description" content={content.subtitle[lang]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://guibissoli.xyz/writings/resolucoes-bcb-519-520-521" />
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
              src="/images/styles/abstract_finance/style_abstract_finance_001.png"
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

            <p className="text-lg leading-relaxed mb-8">
              {content.sections.context[lang]}
            </p>

            {/* Resolution 519 */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.resolution519Title[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.resolution519[lang]}
            </p>

            {/* Resolution 520 */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.resolution520Title[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.resolution520[lang]}
            </p>

            {/* Resolution 521 */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.resolution521Title[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.resolution521[lang]}
            </p>

            {/* Capital Requirements */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.capitalTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.capital[lang]}
            </p>

            {/* Global Context */}
            <h2 className="font-display text-2xl font-bold mt-12 mb-6 text-foreground">
              {content.sections.globalTitle[lang]}
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
              {content.sections.global[lang]}
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
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.title[lang])}&url=${encodeURIComponent('https://guibissoli.xyz/writings/resolucoes-bcb-519-520-521')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-card rounded-lg transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://guibissoli.xyz/writings/resolucoes-bcb-519-520-521')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-card rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <button 
                  onClick={() => navigator.clipboard.writeText('https://guibissoli.xyz/writings/resolucoes-bcb-519-520-521')}
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
