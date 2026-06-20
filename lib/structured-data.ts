import { ACTIVE_CODES } from "@/lib/codes-data"
import { FAQS } from "@/lib/faqs"
import { ROBLOX_GAME_ABOUT_URL, ROBLOX_GAME_URL } from "@/lib/game-links"
import { MERGE_STEPS } from "@/lib/merge-guide-data"
import { getPageFaqs, type PageFaq } from "@/lib/page-faqs"
import { PVP_RAID_STEPS } from "@/lib/raid-guide-data"
import type { SeoPageConfig } from "@/lib/seo-pages"
import { getSiteUrl, SITE_NAME } from "@/lib/site"
import { NUKE_TIER_ROWS } from "@/lib/tier-list-data"
import { EARLY_UPGRADE_ROUTE, STORE_UPGRADES } from "@/lib/upgrades-data"

const LAST_MODIFIED = "2026-06-18"

function pageUrl(siteUrl: string, path: SeoPageConfig["path"]) {
  return path === "/" ? siteUrl : `${siteUrl}${path}`
}

function buildWebSite(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: siteUrl,
    },
  }
}

function buildOrganization(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: siteUrl,
    description:
      "Independent fan-made wiki and strategy guides for Merge a Nuke on Roblox.",
    sameAs: [ROBLOX_GAME_URL, ROBLOX_GAME_ABOUT_URL],
  }
}

function buildWebPage(siteUrl: string, page: SeoPageConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: pageUrl(siteUrl, page.path),
    dateModified: LAST_MODIFIED,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      url: siteUrl,
      name: SITE_NAME,
    },
    ...(page.path === "/" && {
      about: {
        "@type": "VideoGame",
        name: "Merge a Nuke",
        gamePlatform: "Roblox",
        applicationCategory: "Game",
        url: ROBLOX_GAME_URL,
      },
    }),
  }
}

function buildBreadcrumbList(siteUrl: string, page: SeoPageConfig) {
  if (page.path === "/") return null

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.breadcrumb,
        item: pageUrl(siteUrl, page.path),
      },
    ],
  }
}

function buildFaqPageFromItems(items: readonly PageFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }
}

function buildFaqPage() {
  return buildFaqPageFromItems(FAQS)
}

function buildCodeRedeemHowTo() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to redeem Merge a Nuke codes",
    description:
      "Redeem ATOMIC, UPDATE2, and BOOM in the Roblox game Merge a Nuke.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open the game",
        text: "Launch Merge a Nuke on Roblox and load into your base.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Open Store",
        text: "Click the Store button on the left side of the screen.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Find the code box",
        text: 'Scroll to the bottom of the Store menu until you see "Type Code Here".',
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Redeem",
        text: "Paste the code exactly as written, then click Redeem to claim your reward.",
      },
    ],
  }
}

function buildMergeHowTo() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to merge nukes in Merge a Nuke",
    description:
      "Combine identical merge levels to double your nuke tier on Roblox.",
    step: MERGE_STEPS.map((step) => ({
      "@type": "HowToStep",
      position: step.step,
      name: step.title,
      text: step.desc,
    })),
  }
}

function buildCodeItemList() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Merge a Nuke active codes — June 2026",
    itemListElement: ACTIVE_CODES.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.code,
      description: entry.reward,
    })),
  }
}

function buildUpgradeItemList() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Merge a Nuke Store upgrade priority",
    itemListElement: STORE_UPGRADES.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      description: `${entry.priority} priority — ${entry.freeRoute}`,
    })),
  }
}

function buildTierItemList() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Merge a Nuke nuke tier list by merge level",
    itemListElement: NUKE_TIER_ROWS.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${entry.mergeLevel} — ${entry.nuke}`,
      description: entry.notes,
    })),
  }
}

function buildProgressionHowTo() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Merge a Nuke early progression route",
    description:
      "Recommended free-player upgrade and merge order for Merge a Nuke on Roblox.",
    step: EARLY_UPGRADE_ROUTE.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text,
    })),
  }
}

function buildRaidHowTo() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to raid player bases in Merge a Nuke",
    description:
      "PvP raid checklist for Merge a Nuke — scout shields, pick targets, and protect your board.",
    step: PVP_RAID_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.desc,
    })),
  }
}

export function buildPageStructuredData(page: SeoPageConfig): object[] {
  const siteUrl = getSiteUrl()
  const graphs: object[] = []

  if (page.path === "/") {
    graphs.push(buildWebSite(siteUrl))
    graphs.push(buildOrganization(siteUrl))
  }

  graphs.push(buildWebPage(siteUrl, page))

  const breadcrumb = buildBreadcrumbList(siteUrl, page)
  if (breadcrumb) graphs.push(breadcrumb)

  if (page.path === "/" || page.path === "/faq") {
    graphs.push(buildFaqPage())
  } else {
    const pageFaqs = getPageFaqs(page.path)
    if (pageFaqs.length > 0) {
      graphs.push(buildFaqPageFromItems(pageFaqs))
    }
  }

  if (page.path === "/" || page.path === "/codes") {
    graphs.push(buildCodeRedeemHowTo())
  }

  if (page.path === "/codes") {
    graphs.push(buildCodeItemList())
  }

  if (page.path === "/" || page.path === "/beginner-guide") {
    graphs.push(buildMergeHowTo())
  }

  if (page.path === "/progression") {
    graphs.push(buildProgressionHowTo())
  }

  if (page.path === "/upgrades") {
    graphs.push(buildUpgradeItemList())
  }

  if (page.path === "/tier-list") {
    graphs.push(buildTierItemList())
  }

  if (page.path === "/raid") {
    graphs.push(buildRaidHowTo())
  }

  return graphs
}
