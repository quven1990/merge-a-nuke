import { NAV_ITEMS } from "@/lib/navigation"
import { SITE_URL } from "@/lib/site"

export const INDEXNOW_KEY = "0db64cc9fdae45179c18788b5cc458d2"

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

export type IndexNowPayload = {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

/** Bulk submission body per IndexNow / Bing Webmaster docs. */
export function buildIndexNowPayload(siteUrl = SITE_URL): IndexNowPayload {
  const host = siteUrl.replace(/^https?:\/\//, "")

  return {
    host,
    key: INDEXNOW_KEY,
    keyLocation: getIndexNowKeyLocation(siteUrl),
    urlList: getIndexNowUrlList(siteUrl),
  }
}

export const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
] as const
