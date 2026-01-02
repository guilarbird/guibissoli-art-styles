import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

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
    
    // Writings
    'writings.title': 'Writings',
    'writings.subtitle': 'Thoughts on Web3, stablecoins, and building for the Global South.',
    'writings.search': 'Search articles...',
    'writings.filter.all': 'All',
    'writings.filter.en': 'English',
    'writings.filter.pt': 'Português',
    'writings.readMore': 'Read article',
    'writings.noResults': 'No articles found matching your criteria.',
    
    // About
    'about.title': 'About',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'about.focus': 'Current Focus',
    'about.interests': 'Research Interests',
    'about.media': 'In the Media',
    
    // Common
    'common.read': 'read',
  },
  pt: {
    // Navigation
    'nav.home': 'início',
    'nav.writings': 'escritos',
    'nav.about': 'sobre',
    
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
    
    // Writings
    'writings.title': 'Escritos',
    'writings.subtitle': 'Reflexões sobre Web3, stablecoins e construção para o Sul Global.',
    'writings.search': 'Buscar artigos...',
    'writings.filter.all': 'Todos',
    'writings.filter.en': 'English',
    'writings.filter.pt': 'Português',
    'writings.readMore': 'Ler artigo',
    'writings.noResults': 'Nenhum artigo encontrado com esses critérios.',
    
    // About
    'about.title': 'Sobre',
    'about.experience': 'Experiência',
    'about.education': 'Educação',
    'about.focus': 'Foco Atual',
    'about.interests': 'Interesses de Pesquisa',
    'about.media': 'Na Mídia',
    
    // Common
    'common.read': 'leitura',
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
