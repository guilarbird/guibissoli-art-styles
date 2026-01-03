#!/usr/bin/env tsx
/**
 * Content Validator
 * Validates that all articles have required metadata
 * Run with: pnpm validate-content
 */

import { articles } from '../client/src/data/articles';
import fs from 'fs';
import path from 'path';

interface ValidationError {
  slug: string;
  field: string;
  message: string;
  severity: 'error' | 'warning';
}

const errors: ValidationError[] = [];
const warnings: ValidationError[] = [];

// Required fields for all articles
const REQUIRED_FIELDS = ['slug', 'title', 'excerpt', 'date', 'readTime', 'tags', 'language', 'category', 'url'];

// Thumbnail fallback images that should exist
const THUMBNAIL_FALLBACKS = [
  '/images/default-thumb.png',
  '/images/default-article-thumb.png',
  '/images/default-research-thumb.png',
  '/images/default-media-thumb.png',
];

// Tag-based thumbnails
const TAG_THUMBNAILS = [
  '/images/thumb-stablecoins.png',
  '/images/thumb-global-south.png',
  '/images/thumb-microstructure.png',
  '/images/thumb-blockchain.png',
  '/images/thumb-bitcoin.png',
  '/images/thumb-fintech.png',
  '/images/thumb-cybersecurity.png',
  '/images/thumb-coins-xyz.png',
];

function validateArticle(article: typeof articles[0], index: number) {
  // Check required fields
  for (const field of REQUIRED_FIELDS) {
    if (!(field in article) || article[field as keyof typeof article] === undefined) {
      errors.push({
        slug: article.slug || `article[${index}]`,
        field,
        message: `Missing required field: ${field}`,
        severity: 'error',
      });
    }
  }

  // Validate slug format
  if (article.slug && !/^[a-z0-9-]+$/.test(article.slug)) {
    errors.push({
      slug: article.slug,
      field: 'slug',
      message: 'Slug must be lowercase alphanumeric with hyphens only',
      severity: 'error',
    });
  }

  // Validate date format (YYYY.MM.DD)
  if (article.date && !/^\d{4}\.\d{2}\.\d{2}$/.test(article.date)) {
    errors.push({
      slug: article.slug,
      field: 'date',
      message: `Invalid date format: ${article.date}. Expected YYYY.MM.DD`,
      severity: 'error',
    });
  }

  // Validate readTime format
  if (article.readTime && !/^\d+\s*min$/.test(article.readTime)) {
    warnings.push({
      slug: article.slug,
      field: 'readTime',
      message: `Unusual readTime format: ${article.readTime}. Expected "X min"`,
      severity: 'warning',
    });
  }

  // Validate tags
  if (article.tags) {
    if (!Array.isArray(article.tags)) {
      errors.push({
        slug: article.slug,
        field: 'tags',
        message: 'Tags must be an array',
        severity: 'error',
      });
    } else if (article.tags.length === 0) {
      warnings.push({
        slug: article.slug,
        field: 'tags',
        message: 'Article has no tags',
        severity: 'warning',
      });
    }
  }

  // Validate language
  if (article.language && !['en', 'pt'].includes(article.language)) {
    errors.push({
      slug: article.slug,
      field: 'language',
      message: `Invalid language: ${article.language}. Expected 'en' or 'pt'`,
      severity: 'error',
    });
  }

  // Validate category
  if (article.category && !['article', 'research', 'media'].includes(article.category)) {
    errors.push({
      slug: article.slug,
      field: 'category',
      message: `Invalid category: ${article.category}. Expected 'article', 'research', or 'media'`,
      severity: 'error',
    });
  }

  // Validate URL
  if (article.url) {
    // Internal URLs should start with /
    if (!article.url.startsWith('/') && !article.url.startsWith('http')) {
      errors.push({
        slug: article.slug,
        field: 'url',
        message: `Invalid URL format: ${article.url}. Should start with / or http`,
        severity: 'error',
      });
    }
  }

  // Check for heroImage on featured articles
  if (article.featured && !article.heroImage) {
    warnings.push({
      slug: article.slug,
      field: 'heroImage',
      message: 'Featured article missing heroImage',
      severity: 'warning',
    });
  }

  // Validate heroImage path if present
  if (article.heroImage) {
    const imagePath = path.join(process.cwd(), 'client/public', article.heroImage);
    if (!fs.existsSync(imagePath)) {
      errors.push({
        slug: article.slug,
        field: 'heroImage',
        message: `Hero image not found: ${article.heroImage}`,
        severity: 'error',
      });
    }
  }
}

function validateThumbnailFallbacks() {
  const publicDir = path.join(process.cwd(), 'client/public');
  
  for (const thumbnail of [...THUMBNAIL_FALLBACKS, ...TAG_THUMBNAILS]) {
    const imagePath = path.join(publicDir, thumbnail);
    if (!fs.existsSync(imagePath)) {
      errors.push({
        slug: 'system',
        field: 'thumbnail',
        message: `Thumbnail fallback image not found: ${thumbnail}`,
        severity: 'error',
      });
    }
  }
}

function checkDuplicateSlugs() {
  const slugs = new Set<string>();
  
  for (const article of articles) {
    if (slugs.has(article.slug)) {
      errors.push({
        slug: article.slug,
        field: 'slug',
        message: 'Duplicate slug found',
        severity: 'error',
      });
    }
    slugs.add(article.slug);
  }
}

// Run validation
console.log('🔍 Validating content...\n');

// Validate all articles
articles.forEach((article, index) => validateArticle(article, index));

// Check for duplicate slugs
checkDuplicateSlugs();

// Validate thumbnail fallbacks
validateThumbnailFallbacks();

// Report results
console.log(`📊 Validated ${articles.length} articles\n`);

if (errors.length > 0) {
  console.log('❌ ERRORS:\n');
  errors.forEach(err => {
    console.log(`  [${err.slug}] ${err.field}: ${err.message}`);
  });
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  WARNINGS:\n');
  warnings.forEach(warn => {
    console.log(`  [${warn.slug}] ${warn.field}: ${warn.message}`);
  });
  console.log('');
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All content validation passed!\n');
}

// Summary
console.log(`Summary: ${errors.length} errors, ${warnings.length} warnings`);

// Exit with error code if there are errors
if (errors.length > 0) {
  process.exit(1);
}
