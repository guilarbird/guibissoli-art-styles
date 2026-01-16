/**
 * Thumbnail System
 * Provides consistent thumbnail handling with fallbacks across the site
 * Uses images from guibissoli-art-styles repository
 */

// Default fallback images by category - using repo images
const CATEGORY_DEFAULTS: Record<string, string> = {
  article: '/images/styles/abstract_finance/style_abstract_finance_001.png',
  research: '/images/styles/data_viz/style_data_viz_001.png',
  media: '/images/styles/editorial/style_editorial_001.png',
};

// Tag-based fallback images for more specific defaults
const TAG_DEFAULTS: Record<string, string> = {
  // Stablecoins & Crypto
  stablecoins: '/images/styles/abstract_finance/style_abstract_finance_005.png',
  bitcoin: '/images/styles/abstract_finance/style_abstract_finance_010.png',
  blockchain: '/images/styles/data_viz/style_data_viz_001.png',
  crypto: '/images/styles/abstract_finance/style_abstract_finance_003.png',
  web3: '/images/styles/technical/style_technical_001.png',
  
  // Geographic / Global South
  'global-south': '/images/styles/geographic/style_geographic_001.png',
  brazil: '/images/styles/geographic/style_geographic_005.png',
  africa: '/images/styles/geographic/style_geographic_010.png',
  latam: '/images/styles/geographic/style_geographic_003.png',
  
  // Finance & Trading
  microestrutura: '/images/styles/data_viz/style_data_viz_010.png',
  'tick-size': '/images/styles/data_viz/style_data_viz_015.png',
  trading: '/images/styles/abstract_finance/style_abstract_finance_015.png',
  fx: '/images/styles/abstract_finance/style_abstract_finance_008.png',
  fintech: '/images/styles/technical/style_technical_005.png',
  pix: '/images/styles/technical/style_technical_010.png',
  
  // Technical
  cybersecurity: '/images/styles/technical/style_technical_015.png',
  regulation: '/images/styles/editorial/style_editorial_005.png',
  rwa: '/images/styles/data_viz/style_data_viz_005.png',
  
  // Companies
  'coins-xyz': '/images/styles/geographic/style_geographic_001.png',
  binance: '/images/styles/abstract_finance/style_abstract_finance_012.png',
};

// Ultimate fallback
const ULTIMATE_FALLBACK = '/images/styles/abstract_finance/style_abstract_finance_001.png';

export interface ThumbnailOptions {
  heroImage?: string;
  category?: string;
  tags?: string[];
  size?: 'small' | 'medium' | 'large';
}

/**
 * Get the best thumbnail for an article with fallback chain:
 * 1. Explicit heroImage
 * 2. First matching tag-based image
 * 3. Category default
 * 4. Ultimate fallback
 */
export function getThumbnail(options: ThumbnailOptions): string {
  const { heroImage, category, tags = [] } = options;

  // 1. Use explicit heroImage if provided
  if (heroImage) {
    return heroImage;
  }

  // 2. Try tag-based fallback
  for (const tag of tags) {
    const normalizedTag = tag.toLowerCase().replace('#', '');
    if (TAG_DEFAULTS[normalizedTag]) {
      return TAG_DEFAULTS[normalizedTag];
    }
  }

  // 3. Use category default
  if (category && CATEGORY_DEFAULTS[category]) {
    return CATEGORY_DEFAULTS[category];
  }

  // 4. Ultimate fallback
  return ULTIMATE_FALLBACK;
}

/**
 * Get a random image from a specific style category
 */
export function getRandomStyleImage(category: 'abstract_finance' | 'data_viz' | 'editorial' | 'geographic' | 'technical'): string {
  const counts = {
    abstract_finance: 20,
    data_viz: 20,
    editorial: 15,
    geographic: 15,
    technical: 15,
  };
  
  const num = Math.floor(Math.random() * counts[category]) + 1;
  const paddedNum = num.toString().padStart(3, '0');
  return `/images/styles/${category}/style_${category}_${paddedNum}.png`;
}

/**
 * Generate responsive srcSet for thumbnails
 */
export function getThumbnailSrcSet(src: string): string {
  // For now, return the same image
  // In production, this could integrate with an image CDN
  return src;
}

/**
 * Get thumbnail dimensions based on size
 */
export function getThumbnailDimensions(size: 'small' | 'medium' | 'large' = 'medium') {
  const dimensions = {
    small: { width: 200, height: 120 },
    medium: { width: 400, height: 240 },
    large: { width: 800, height: 480 },
  };
  return dimensions[size];
}

/**
 * Check if a thumbnail URL is valid (exists)
 * Used for validation in CI
 */
export async function validateThumbnail(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get OG image URL for social sharing
 */
export function getOGImage(options: ThumbnailOptions): string {
  const thumbnail = getThumbnail(options);
  // Could integrate with OG image generation service
  return thumbnail;
}
