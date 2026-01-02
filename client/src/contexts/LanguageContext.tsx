import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'home',
    'nav.writings': 'writings',
    'nav.about': 'about',
    'nav.collections': 'collections',
    
    // Home
    'home.welcome': 'welcome to',
    'home.tagline1': 'Building financial infrastructure for the',
    'home.tagline2': 'Global South',
    'home.tagline3': 'Writing about',
    'home.tagline4': 'and the future of money.',
    'home.cta.writings': 'Read my writings',
    'home.featured': 'Featured Writings',
    'home.viewAll': 'view all writings',
    'home.newsletter.title': 'Web3 + Stablecoins Brief',
    'home.newsletter.desc': 'Weekly insights on crypto infrastructure, stablecoins, and building for emerging markets.',
    'home.newsletter.subdesc': 'Published every week on LinkedIn.',
    'home.newsletter.cta': 'Subscribe on LinkedIn',
    'home.newsletter.subscribers': 'subscribers',
    
    // Writings
    'writings.title': 'Writings',
    'writings.subtitle': 'Thoughts on Web3, stablecoins, and building for the Global South.',
    'writings.search': 'Search articles...',
    'writings.filter.all': 'All',
    'writings.filter.en': 'English',
    'writings.filter.pt': 'Português',
    'writings.filter.zh': '中文',
    'writings.readMore': 'Read article',
    'writings.noResults': 'No articles found matching your criteria.',
    
    // About
    'about.title': 'About',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'about.focus': 'Current Focus',
    'about.interests': 'Research Interests',
    'about.media': 'In the Media',
    
    // Collections
    'collections.title': 'Collections',
    'collections.subtitle': 'Digital collectibles and NFTs',
    
    // Audio Player
    'audio.listen': 'Listen to article',
    'audio.playing': 'Playing',
    'audio.paused': 'Paused',
    
    // Common
    'common.read': 'read',
    'common.min': 'min',
  },
  pt: {
    // Navigation
    'nav.home': 'início',
    'nav.writings': 'escritos',
    'nav.about': 'sobre',
    'nav.collections': 'coleções',
    
    // Home
    'home.welcome': 'bem-vindo a',
    'home.tagline1': 'Construindo infraestrutura financeira para o',
    'home.tagline2': 'Sul Global',
    'home.tagline3': 'Escrevendo sobre',
    'home.tagline4': 'e o futuro do dinheiro.',
    'home.cta.writings': 'Ler meus escritos',
    'home.featured': 'Escritos em Destaque',
    'home.viewAll': 'ver todos os escritos',
    'home.newsletter.title': 'Web3 + Stablecoins Brief',
    'home.newsletter.desc': 'Insights semanais sobre infraestrutura cripto, stablecoins e construção para mercados emergentes.',
    'home.newsletter.subdesc': 'Publicado toda semana no LinkedIn.',
    'home.newsletter.cta': 'Assinar no LinkedIn',
    'home.newsletter.subscribers': 'assinantes',
    
    // Writings
    'writings.title': 'Escritos',
    'writings.subtitle': 'Reflexões sobre Web3, stablecoins e construção para o Sul Global.',
    'writings.search': 'Buscar artigos...',
    'writings.filter.all': 'Todos',
    'writings.filter.en': 'English',
    'writings.filter.pt': 'Português',
    'writings.filter.zh': '中文',
    'writings.readMore': 'Ler artigo',
    'writings.noResults': 'Nenhum artigo encontrado com esses critérios.',
    
    // About
    'about.title': 'Sobre',
    'about.experience': 'Experiência',
    'about.education': 'Educação',
    'about.focus': 'Foco Atual',
    'about.interests': 'Interesses de Pesquisa',
    'about.media': 'Na Mídia',
    
    // Collections
    'collections.title': 'Coleções',
    'collections.subtitle': 'Colecionáveis digitais e NFTs',
    
    // Audio Player
    'audio.listen': 'Ouvir artigo',
    'audio.playing': 'Reproduzindo',
    'audio.paused': 'Pausado',
    
    // Common
    'common.read': 'leitura',
    'common.min': 'min',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.writings': '文章',
    'nav.about': '关于',
    'nav.collections': '收藏',
    
    // Home
    'home.welcome': '欢迎来到',
    'home.tagline1': '为全球南方构建金融基础设施',
    'home.tagline2': '全球南方',
    'home.tagline3': '撰写关于',
    'home.tagline4': '和货币的未来。',
    'home.cta.writings': '阅读我的文章',
    'home.featured': '精选文章',
    'home.viewAll': '查看所有文章',
    'home.newsletter.title': 'Web3 + 稳定币简报',
    'home.newsletter.desc': '每周关于加密基础设施、稳定币和新兴市场建设的见解。',
    'home.newsletter.subdesc': '每周在LinkedIn发布。',
    'home.newsletter.cta': '在LinkedIn订阅',
    'home.newsletter.subscribers': '订阅者',
    
    // Writings
    'writings.title': '文章',
    'writings.subtitle': '关于Web3、稳定币和全球南方建设的思考。',
    'writings.search': '搜索文章...',
    'writings.filter.all': '全部',
    'writings.filter.en': 'English',
    'writings.filter.pt': 'Português',
    'writings.filter.zh': '中文',
    'writings.readMore': '阅读文章',
    'writings.noResults': '没有找到符合条件的文章。',
    
    // About
    'about.title': '关于',
    'about.experience': '经历',
    'about.education': '教育',
    'about.focus': '当前重点',
    'about.interests': '研究兴趣',
    'about.media': '媒体报道',
    
    // Collections
    'collections.title': '收藏',
    'collections.subtitle': '数字收藏品和NFT',
    
    // Audio Player
    'audio.listen': '听文章',
    'audio.playing': '播放中',
    'audio.paused': '已暂停',
    
    // Common
    'common.read': '阅读',
    'common.min': '分钟',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
