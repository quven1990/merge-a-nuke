import type { MetadataRoute } from "next"

import { NAV_ITEMS } from "@/lib/navigation"
import { getSiteUrl } from "@/lib/site"

export const dynamic = "force-static"

/** Last content update per indexable path (YYYY-MM-DD), from recent git history. */
const PAGE_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-07-01",
  "/codes": "2026-06-24",
  "/beginner-guide": "2026-06-20",
  "/progression": "2026-06-20",
  "/upgrades": "2026-06-20",
  "/tier-list": "2026-06-20",
  "/raid": "2026-06-28",
  "/offline-cash": "2026-06-20",
  "/faq": "2026-06-28",
  "/commanders": "2026-06-28",
  "/about": "2026-06-23",
  "/privacy": "2026-06-18",
  "/terms": "2026-06-18",
}

const DEFAULT_LAST_MODIFIED = "2026-06-18"

function getLastModified(path: string) {
  return new Date(PAGE_LAST_MODIFIED[path] ?? DEFAULT_LAST_MODIFIED)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  const guidePages = NAV_ITEMS.map((item) => ({
    url: `${siteUrl}${item.href}`,
    lastModified: getLastModified(item.href),
    changeFrequency: "weekly" as const,
    priority: item.href === "/codes" ? 0.9 : 0.8,
  }))

  const legalPages = [
    { path: "/about", priority: 0.4 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ] as const

  return [
    {
      url: siteUrl,
      lastModified: getLastModified("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...guidePages,
    ...legalPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: getLastModified(page.path),
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
  ]
}
