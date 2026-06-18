import type { MetadataRoute } from "next"

import { NAV_ITEMS } from "@/lib/navigation"
import { getSiteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date("2026-06-18")

  const guidePages = NAV_ITEMS.map((item) => ({
    url: `${siteUrl}${item.href}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: item.href === "/codes" ? 0.9 : 0.8,
  }))

  const legalPages = [
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ] as const

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...guidePages,
    ...legalPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
  ]
}
