/**
 * Language Context
 * Provides internationalization using locale files
 */
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { 
  Locale, 
  SUPPORTED_LOCALES, 
  LOCALE_NAMES, 
  LOCALE_FLAGS,
  getTranslation, 
  getBrowserLocale,
  formatDate as i18nFormatDate,
  formatNumber as i18nFormatNumber,
} from '@/lib/i18n';

// Legacy translations for backward compatibility
// These will be merged with the new locale files
const legacyTranslations: Record<Locale, Record<string, string>> = {
  en: {
    'nav.home': 'home',
    'nav.writings': 'writings',
    'nav.about': 'about',
    'nav.collections': 'collections',
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
    'writings.title': 'Writings',
    'writings.subtitle': 'Thoughts on Web3, stablecoins, financial infrastructure, and building for the Global South.',
    'writings.search': 'Search articles...',
    'writings.filter.all': 'All',
    'writings.filter.en': 'English',
    'writings.filter.pt': 'Português',
    'writings.filter.zh': '中文',
    'writings.readMore': 'Read article',
    'writings.noResults': 'No articles found matching your criteria.',
    'writings.articles': 'articles',
    'writings.research': 'research',
    'writings.media': 'media',
    'writings.allTags': 'all tags',
    'about.title': 'About',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'about.focus': 'Current Focus',
    'about.interests': 'Research Interests',
    'about.media': 'In the Media',
    'collections.title': 'Collections',
    'collections.subtitle': 'Digital collectibles and NFTs',
    'audio.listen': 'Listen to article',
    'audio.playing': 'Playing',
    'audio.paused': 'Paused',
    'common.read': 'read',
    'common.min': 'min',
  },
  pt: {
    'nav.home': 'início',
    'nav.writings': 'escritos',
    'nav.about': 'sobre',
    'nav.collections': 'coleções',
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
    'writings.title': 'Escritos',
    'writings.subtitle': 'Reflexões sobre Web3, stablecoins, infraestrutura financeira e construção para o Sul Global.',
    'writings.search': 'Buscar artigos...',
    'writings.filter.all': 'Todos',
    'writings.filter.en': 'English',
    'writings.filter.pt': 'Português',
    'writings.filter.zh': '中文',
    'writings.readMore': 'Ler artigo',
    'writings.noResults': 'Nenhum artigo encontrado com esses critérios.',
    'writings.articles': 'artigos',
    'writings.research': 'pesquisa',
    'writings.media': 'mídia',
    'writings.allTags': 'todas as tags',
    'about.title': 'Sobre',
    'about.experience': 'Experiência',
    'about.education': 'Educação',
    'about.focus': 'Foco Atual',
    'about.interests': 'Interesses de Pesquisa',
    'about.media': 'Na Mídia',
    'collections.title': 'Coleções',
    'collections.subtitle': 'Colecionáveis digitais e NFTs',
    'audio.listen': 'Ouvir artigo',
    'audio.playing': 'Reproduzindo',
    'audio.paused': 'Pausado',
    'common.read': 'leitura',
    'common.min': 'min',
  },
  zh: {
    'nav.home': '首页',
    'nav.writings': '文章',
    'nav.about': '关于',
    'nav.collections': '收藏',
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
    'writings.title': '文章',
    'writings.subtitle': '关于Web3、稳定币、金融基础设施和全球南方建设的思考。',
    'writings.search': '搜索文章...',
    'writings.filter.all': '全部',
    'writings.filter.en': 'English',
    'writings.filter.pt': 'Português',
    'writings.filter.zh': '中文',
    'writings.readMore': '阅读文章',
    'writings.noResults': '没有找到符合条件的文章。',
    'writings.articles': '文章',
    'writings.research': '研究',
    'writings.media': '媒体',
    'writings.allTags': '所有标签',
    'about.title': '关于',
    'about.experience': '经历',
    'about.education': '教育',
    'about.focus': '当前重点',
    'about.interests': '研究兴趣',
    'about.media': '媒体报道',
    'collections.title': '收藏',
    'collections.subtitle': '数字收藏品和NFT',
    'audio.listen': '听文章',
    'audio.playing': '播放中',
    'audio.paused': '已暂停',
    'common.read': '阅读',
    'common.min': '分钟',
  },
};

interface LanguageContextType {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  t: (key: string, fallback?: string) => string;
  formatDate: (date: string | Date) => string;
  formatNumber: (num: number) => string;
  supportedLocales: typeof SUPPORTED_LOCALES;
  localeNames: typeof LOCALE_NAMES;
  localeFlags: typeof LOCALE_FLAGS;
}

const STORAGE_KEY = 'preferred-language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(() => {
    // Try to get from localStorage first
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
        return stored as Locale;
      }
    }
    // Fall back to browser preference
    return getBrowserLocale();
  });

  // Persist language preference
  const setLanguage = useCallback((lang: Locale) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }, []);

  // Update document lang attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  // Translation function that checks both legacy and new locale files
  const t = useCallback((key: string, fallback?: string): string => {
    // First check legacy translations for backward compatibility
    const legacyValue = legacyTranslations[language][key];
    if (legacyValue) {
      return legacyValue;
    }

    // Then check new locale files
    return getTranslation(language, key, fallback);
  }, [language]);

  // Format date according to current locale
  const formatDate = useCallback((date: string | Date): string => {
    return i18nFormatDate(date, language);
  }, [language]);

  // Format number according to current locale
  const formatNumber = useCallback((num: number): string => {
    return i18nFormatNumber(num, language);
  }, [language]);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t, 
        formatDate,
        formatNumber,
        supportedLocales: SUPPORTED_LOCALES,
        localeNames: LOCALE_NAMES,
        localeFlags: LOCALE_FLAGS,
      }}
    >
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

// Re-export types for convenience
export type { Locale };
export { SUPPORTED_LOCALES, LOCALE_NAMES, LOCALE_FLAGS };
