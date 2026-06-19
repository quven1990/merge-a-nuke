import { NAV_ITEMS } from "@/lib/navigation"
import { SITE_URL } from "@/lib/site"

export const INDEXNOW_KEY = "cf0515852563426a84e29c142842e3bb"

export function getIndexNowKeyLocation(siteUrl = SITE_URL) {
  return `${siteUrl}/${INDEXNOW_KEY}.txt`
}

/** All indexable URLs — kept in sync with app/sitemap.ts. */
export function getIndexNowUrlList(siteUrl = SITE_URL): string[] {
  const legalPaths = ["/privacy", "/terms"] as const

  return [
    siteUrl,
    ...NAV_ITEMS.map((item) => `${siteUrl}${item.href}`),
    ...legalPaths.map((path) => `${siteUrl}${path}`),
  ]
}
