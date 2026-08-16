/**
 * Public (browser-safe) environment values.
 *
 * Only NEXT_PUBLIC_* keys are inlined into the client bundle at build time.
 * Never put DATABASE_URL, JWT secrets, SMTP, or AWS keys here — those stay
 * on ECS / Secrets Manager. Amplify injects these during `npm run build`.
 *
 * Set in Amplify Console:
 *   NEXT_PUBLIC_BASE_API_URL  — backend origin + /api/v1 (required)
 *   NEXT_PUBLIC_API_URL       — optional alias of the same value
 *   NEXT_PUBLIC_SITE_URL      — canonical frontend origin, e.g. https://zrf.info
 */
function trimSlash(value: string): string {
  return value.replace(/\/$/, "");
}

export function getPublicApiUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_BASE_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "";

  if (!raw) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "NEXT_PUBLIC_BASE_API_URL is not set. Configure it in Amplify → Environment variables.",
      );
    }
    return "";
  }

  return trimSlash(raw);
}

export function getPublicSiteUrl(): string {
  return trimSlash(process.env.NEXT_PUBLIC_SITE_URL || "https://zrf.info");
}

/** Matches the ECS API pagination cap. Do not request unbounded lists. */
export const API_LIST_LIMIT = 100;
