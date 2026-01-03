/**
 * Thumbnail System
 * Provides consistent thumbnail handling with fallbacks across the site
 */

// Default fallback images by category
const CATEGORY_DEFAULTS: Record<string, string> = {
  article: '/images/default-article-thumb.png',
  research: '/images/default-research-thumb.png',
  media: '/images/default-media-thumb.png',
};

// Tag-based fallback images for more specific defaults
const TAG_DEFAULTS: Record<string, string> = {
  stablecoins: '/images/thumb-stablecoins.png',
  'global-south': '/images/thumb-global-south.png',
  microestrutura: '/images/thumb-microstructure.png',
  bitcoin: '/images/thumb-bitcoin.png',
  blockchain: '/images/thumb-blockchain.png',
  fintech: '/images/thumb-fintech.png',
  cybersecurity: '/images/thumb-cybersecurity.png',
  'coins-xyz': '/images/thumb-coins-xyz.png',
};

// Ultimate fallback
const ULTIMATE_FALLBACK = '/images/default-thumb.png';

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
    if (TAG_DEFAULTS[tag]) {
      return TAG_DEFAULTS[tag];
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
