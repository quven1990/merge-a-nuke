import type { Metadata } from "next"

import type { SeoPageConfig } from "@/lib/seo-pages"
import { getSiteUrl } from "@/lib/site"

const DEFAULT_OG_IMAGE = {
  url: "/images/hero-base-merge.webp",
  width: 1280,
  height: 853,
  alt: "Merge a Nuke Roblox wiki guide artwork",
} as const

export function createPageMetadata(page: SeoPageConfig): Metadata {
  const siteUrl = getSiteUrl()
  const ogImage = page.openGraphImage ?? DEFAULT_OG_IMAGE

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: page.path,
      siteName: "Merge a Nuke Wiki",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage.url],
    },
    metadataBase: new URL(siteUrl),
  }
}
