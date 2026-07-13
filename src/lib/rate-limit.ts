/**
 * In-memory sliding-window rate limiter. Suitable for a single-instance
 * portfolio (Vercel functions keep warm instances; worst case a cold start
 * resets the window, which only makes it more permissive, never blocking).
 * Swap for Upstash/Redis if this ever needs to be strict across instances.
 */

type Bucket = { timestamps: number[] };

const buckets = new Map<string, Bucket>();
const MAX_BUCKETS = 5000;

export function rateLimit(
  key: string,
  { max, windowSeconds }: { max: number; windowSeconds: number },
): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const windowMs = windowSeconds * 1000;

  // Cheap protection against unbounded growth from many unique IPs.
  if (buckets.size > MAX_BUCKETS) buckets.clear();

  const bucket = buckets.get(key) ?? { timestamps: [] };
  bucket.timestamps = bucket.timestamps.filter((t) => now - t < windowMs);

  if (bucket.timestamps.length >= max) {
    const oldest = bucket.timestamps[0];
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((oldest + windowMs - now) / 1000),
    };
  }

  bucket.timestamps.push(now);
  buckets.set(key, bucket);
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Best-effort client identifier behind Vercel's proxy. */
export function clientKeyFromHeaders(headers: Headers): string {
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headers.get("x-real-ip") ??
    "unknown"
  );
}
