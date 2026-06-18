import { SEO_PAGES } from "@/lib/seo-pages"

export const SITE_URL = "https://mergeanuke.site"

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")
  if (fromEnv) return fromEnv

  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  if (
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production"
  ) {
    return SITE_URL
  }

  return "http://localhost:3000"
}

export const SITE_NAME = "Merge a Nuke Wiki"

export const SITE_DESCRIPTION = SEO_PAGES.home.description
