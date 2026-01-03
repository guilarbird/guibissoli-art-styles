/**
 * Audio Cache System
 * Caches generated TTS audio to avoid regenerating the same content
 */
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), '.audio-cache');
const MAX_CACHE_SIZE_MB = 500; // Maximum cache size in MB
const CACHE_TTL_DAYS = 30; // Cache entries expire after 30 days

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

/**
 * Generate a cache key from text and language
 */
export function getCacheKey(text: string, language: string, voiceId: string): string {
  const hash = crypto.createHash('sha256');
  hash.update(`${language}:${voiceId}:${text}`);
  return hash.digest('hex').substring(0, 32);
}

/**
 * Get cached audio if available
 */
export async function getCachedAudio(key: string): Promise<Buffer | null> {
  const cachePath = path.join(CACHE_DIR, `${key}.mp3`);
  const metaPath = path.join(CACHE_DIR, `${key}.json`);

  try {
    if (!fs.existsSync(cachePath) || !fs.existsSync(metaPath)) {
      return null;
    }

    // Check if cache entry is expired
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    const createdAt = new Date(meta.createdAt);
    const expiresAt = new Date(createdAt.getTime() + CACHE_TTL_DAYS * 24 * 60 * 60 * 1000);

    if (new Date() > expiresAt) {
      // Cache expired, delete it
      fs.unlinkSync(cachePath);
      fs.unlinkSync(metaPath);
      return null;
    }

    // Update access time
    meta.lastAccessed = new Date().toISOString();
    meta.accessCount = (meta.accessCount || 0) + 1;
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));

    return fs.readFileSync(cachePath);
  } catch (error) {
    console.error('Cache read error:', error);
    return null;
  }
}

/**
 * Store audio in cache
 */
export async function setCachedAudio(
  key: string,
  audio: Buffer,
  metadata: { language: string; textLength: number; voiceId: string }
): Promise<void> {
  const cachePath = path.join(CACHE_DIR, `${key}.mp3`);
  const metaPath = path.join(CACHE_DIR, `${key}.json`);

  try {
    // Check cache size and clean if necessary
    await cleanCacheIfNeeded();

    fs.writeFileSync(cachePath, audio);
    fs.writeFileSync(metaPath, JSON.stringify({
      ...metadata,
      createdAt: new Date().toISOString(),
      lastAccessed: new Date().toISOString(),
      accessCount: 1,
      sizeBytes: audio.length,
    }, null, 2));

    console.log(`Audio cached: key=${key}, size=${audio.length} bytes`);
  } catch (error) {
    console.error('Cache write error:', error);
  }
}

/**
 * Clean cache if it exceeds size limit
 */
async function cleanCacheIfNeeded(): Promise<void> {
  try {
    const files = fs.readdirSync(CACHE_DIR).filter(f => f.endsWith('.mp3'));
    let totalSize = 0;
    const fileStats: { file: string; size: number; accessedAt: Date }[] = [];

    for (const file of files) {
      const filePath = path.join(CACHE_DIR, file);
      const metaPath = path.join(CACHE_DIR, file.replace('.mp3', '.json'));
      const stats = fs.statSync(filePath);
      totalSize += stats.size;

      let accessedAt = stats.mtime;
      if (fs.existsSync(metaPath)) {
        try {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
          accessedAt = new Date(meta.lastAccessed || meta.createdAt);
        } catch {}
      }

      fileStats.push({ file, size: stats.size, accessedAt });
    }

    const maxSizeBytes = MAX_CACHE_SIZE_MB * 1024 * 1024;

    if (totalSize > maxSizeBytes) {
      // Sort by last accessed (oldest first)
      fileStats.sort((a, b) => a.accessedAt.getTime() - b.accessedAt.getTime());

      // Remove oldest files until under limit
      for (const { file, size } of fileStats) {
        if (totalSize <= maxSizeBytes * 0.8) break; // Keep 20% buffer

        const filePath = path.join(CACHE_DIR, file);
        const metaPath = path.join(CACHE_DIR, file.replace('.mp3', '.json'));

        fs.unlinkSync(filePath);
        if (fs.existsSync(metaPath)) fs.unlinkSync(metaPath);

        totalSize -= size;
        console.log(`Cache cleaned: removed ${file}`);
      }
    }
  } catch (error) {
    console.error('Cache cleanup error:', error);
  }
}

/**
 * Get cache statistics
 */
export function getCacheStats(): { files: number; totalSizeMB: number; oldestEntry: string | null } {
  try {
    const files = fs.readdirSync(CACHE_DIR).filter(f => f.endsWith('.mp3'));
    let totalSize = 0;
    let oldestDate: Date | null = null;

    for (const file of files) {
      const stats = fs.statSync(path.join(CACHE_DIR, file));
      totalSize += stats.size;
      if (!oldestDate || stats.mtime < oldestDate) {
        oldestDate = stats.mtime;
      }
    }

    return {
      files: files.length,
      totalSizeMB: Math.round(totalSize / 1024 / 1024 * 100) / 100,
      oldestEntry: oldestDate?.toISOString() || null,
    };
  } catch {
    return { files: 0, totalSizeMB: 0, oldestEntry: null };
  }
}
