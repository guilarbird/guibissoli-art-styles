/**
 * ArticleThumbnail Component
 * Consistent thumbnail display with lazy loading and fallbacks
 */
import { useState } from 'react';
import { getThumbnail, getThumbnailDimensions, type ThumbnailOptions } from '@/lib/thumbnails';
import { cn } from '@/lib/utils';

interface ArticleThumbnailProps {
  heroImage?: string;
  category?: string;
  tags?: string[];
  title: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  aspectRatio?: 'video' | 'square' | 'wide';
}

export default function ArticleThumbnail({
  heroImage,
  category,
  tags = [],
  title,
  size = 'medium',
  className,
  aspectRatio = 'video',
}: ArticleThumbnailProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailOptions: ThumbnailOptions = { heroImage, category, tags, size };
  const src = hasError ? '/images/default-thumb.png' : getThumbnail(thumbnailOptions);
  const dimensions = getThumbnailDimensions(size);

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-muted rounded-lg',
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/10 animate-pulse" />
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={title}
        width={dimensions.width}
        height={dimensions.height}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
