export type NavItem = {
  label: string
  href: `/${string}`
  description: string
  /** Shorter label for the compact header */
  navLabel?: string
}

/** Full guide list — footer, sitemap, mobile menu, related guides */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Codes",
    href: "/codes",
    description: "Active Merge a Nuke codes, rewards, and step-by-step redeem instructions.",
  },
  {
    label: "Beginner Guide",
    navLabel: "Beginner",
    href: "/beginner-guide",
    description: "A simple early-game route for new Merge a Nuke players on Roblox.",
  },
  {
    label: "Progression",
    href: "/progression",
    description: "What to upgrade first and how to grow your base through each stage.",
  },
  {
    label: "Upgrades",
    href: "/upgrades",
    description: "Store upgrade priority: Spawn Tier, Spawn Speed, Max Spawn, and Lock Base.",
  },
  {
    label: "Tier List",
    href: "/tier-list",
    description: "Nuke tier rankings and merge priorities for long-term growth.",
  },
  {
    label: "Raid Guide",
    navLabel: "Raid",
    href: "/raid",
    description: "When to raid, how to defend your base, and how to lock before you log off.",
  },
  {
    label: "Offline Cash",
    navLabel: "Offline",
    href: "/offline-cash",
    description: "How offline income works and how to set up your base before leaving.",
  },
  {
    label: "Commanders",
    href: "/commanders",
    description: "All 25 commanders by rarity, Advanced Warfare Pack units, Admiral tier, how to capture them on the map, and which to prioritize first.",
  },
  {
    label: "Updates",
    href: "/updates",
    description: "Friday patch log for commanders, wars, rebirth tiers, and codes freshness.",
  },
  {
    label: "FAQ",
    href: "/faq",
    description: "Quick answers about codes, progression, raids, and this fan-made wiki.",
  },
]

/** Desktop header — primary row (keep ≤6 items) */
export const HEADER_PRIMARY_HREFS = [
  "/beginner-guide",
  "/commanders",
  "/raid",
  "/updates",
] as const satisfies readonly NavItem["href"][]

/** Desktop header — overflow menu (includes Codes — header already has Check Codes CTA) */
export const HEADER_MORE_HREFS = [
  "/codes",
  "/progression",
  "/upgrades",
  "/tier-list",
  "/offline-cash",
  "/blog",
  "/faq",
] as const satisfies readonly NavItem["href"][]

const BLOG_NAV_ITEM: NavItem = {
  label: "Blog",
  href: "/blog",
  description: "Sourced gameplay articles with cited YouTube footage.",
}

const navByHref = new Map(NAV_ITEMS.map((item) => [item.href, item]))

export function getHeaderPrimaryNavItems(): NavItem[] {
  return HEADER_PRIMARY_HREFS.map((href) => navByHref.get(href)!)
}

export function getHeaderMoreNavItems(): NavItem[] {
  return HEADER_MORE_HREFS.map((href) =>
    href === "/blog" ? BLOG_NAV_ITEM : navByHref.get(href)!,
  )
}

export function getMobileNavItems(): NavItem[] {
  return [...NAV_ITEMS, BLOG_NAV_ITEM]
}

export const GUIDE_CARDS = [
  {
    label: "Codes",
    href: "/codes" as const,
    anchor: "/codes" as const,
  },
  {
    label: "Beginner Guide",
    href: "/beginner-guide" as const,
    anchor: "/beginner-guide" as const,
  },
  {
    label: "Progression",
    href: "/progression" as const,
    anchor: "/progression" as const,
  },
  {
    label: "Upgrades",
    href: "/upgrades" as const,
    anchor: "/upgrades" as const,
  },
  {
    label: "Raid Guide",
    href: "/raid" as const,
    anchor: "/raid" as const,
  },
  {
    label: "Tier List",
    href: "/tier-list" as const,
    anchor: "/tier-list" as const,
  },
  {
    label: "Offline Cash",
    href: "/offline-cash" as const,
    anchor: "/offline-cash" as const,
  },
  {
    label: "Commanders",
    href: "/commanders" as const,
    anchor: "/commanders" as const,
  },
  {
    label: "Updates",
    href: "/updates" as const,
    anchor: "/updates" as const,
  },
  {
    label: "FAQ",
    href: "/faq" as const,
    anchor: "/faq" as const,
  },
] as const

export function getNavItem(href: `/${string}`) {
  return NAV_ITEMS.find((item) => item.href === href)
}
