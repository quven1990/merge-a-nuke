import { getContentMonthYear } from "@/lib/content-freshness"
import { REDEEM_META_HINT, REDEEM_SHORT_PATH } from "@/lib/redeem-guide-data"

const CODES_MONTH_YEAR = getContentMonthYear()

export type SeoPageConfig = {
  path: "/" | `/${string}`
  title: string
  description: string
  h1: string
  intro: string
  tldr?: string
  breadcrumb: string
  openGraphImage?: {
    url: string
    width: number
    height: number
    alt: string
  }
}

export const SEO_PAGES = {
  home: {
    path: "/",
    title: "Merge a Nuke Wiki: Codes, Tier List & Guides",
    description:
      "Merge a Nuke Roblox wiki with working codes, upgrade priorities, tier lists, raid strategies, offline cash, and rebirth advice. Updated after Friday patches.",
    h1: "Merge a Nuke Wiki",
    intro:
      "Codes, beginner tips, raid strategy, nuke tiers, offline cash, and progression guides for Merge a Nuke on Roblox — all in one place.",
    tldr:
      `Tap Copy on a working code below, then redeem via ${REDEEM_SHORT_PATH}. New players: merge 2+2 → buy Spawn Speed then Spawn Tier → lock base before raiding.`,
    breadcrumb: "Home",
  },
  codes: {
    path: "/codes",
    title: `Merge a Nuke Codes (${CODES_MONTH_YEAR}) — 3 Working Roblox Codes`,
    description:
      `3 working Merge a Nuke Roblox codes (${CODES_MONTH_YEAR}): ATOMIC $10K+20 nukes, UPDATE2 $10K+10, BOOM $5K. ${REDEEM_META_HINT}.`,
    h1: `Merge a Nuke Codes (${CODES_MONTH_YEAR})`,
    intro:
      "Working Merge a Nuke codes for Roblox, plus the exact steps to redeem them in the Shop menu.",
    tldr:
      `Try ATOMIC ($10,000 + 20 nukes), then UPDATE2 ($10,000 + 10 nukes), then BOOM ($5,000). ${REDEEM_SHORT_PATH}.`,
    breadcrumb: "Codes",
    openGraphImage: {
      url: "/images/codes-rewards.webp",
      width: 960,
      height: 640,
      alt: "Merge a Nuke Roblox codes rewards artwork with cash and nukes",
    },
  },
  beginnerGuide: {
    path: "/beginner-guide",
    title: "Merge a Nuke Beginner Guide — First Steps",
    description:
      "New to Merge a Nuke on Roblox? Learn how to merge nukes, redeem codes, buy Store upgrades, and lock your base before your first raid — step-by-step.",
    h1: "Merge a Nuke Beginner Guide",
    intro:
      "A practical early-game route for new players — merge rules, Store priorities, and common mistakes to avoid.",
    tldr:
      "Redeem codes → merge same-level pairs (2+2=4) → buy Spawn Speed then Spawn Tier → lock base before raiding.",
    breadcrumb: "Beginner Guide",
  },
  progression: {
    path: "/progression",
    title: "Merge a Nuke Progression Guide — Upgrade Path",
    description:
      "Merge a Nuke progression guide for Roblox: what to upgrade first, when to merge higher nukes, and how to grow your base through each stage without wasting cash.",
    h1: "Merge a Nuke Progression Guide",
    intro:
      "Know what to focus on at each stage so your base keeps growing without wasted upgrades.",
    tldr:
      "Codes → Spawn Speed → Spawn Tier → merge toward 16+ → lock base → raid only when stable. Rebirth unlocks higher Index tiers.",
    breadcrumb: "Progression",
  },
  upgrades: {
    path: "/upgrades",
    title: "Merge a Nuke Upgrades — Store Priority Guide",
    description:
      "Merge a Nuke Store upgrades explained: Spawn Speed, Spawn Tier, Max Spawn, Lock Base duration, and optional Robux boosts — with a free-player priority order.",
    h1: "Merge a Nuke Store Upgrades",
    intro:
      "Which Store upgrades matter most, when to buy them, and how to grow without spending Robux.",
    tldr:
      "Buy Spawn Speed first, then Spawn Tier and Max Spawn. Upgrade Lock Base before long merge sessions. Robux boosts are optional.",
    breadcrumb: "Upgrades",
  },
  tierList: {
    path: "/tier-list",
    title: "Merge a Nuke Tier List — Merge Levels & Names",
    description:
      "Merge a Nuke tier list by merge level (2, 4, 8, 16, 64, 512+) with community-reported nuke names, income notes, and raid value from gameplay footage.",
    h1: "Merge a Nuke Tier List",
    intro:
      "Merge levels and reported nuke names from community gameplay — use with the in-game Index for the latest stats.",
    tldr:
      "Merge doubles each step (2→4→8→16…). Chase 64+ before heavy raiding. Rebirth unlocks tiers beyond ~#35 in the Index.",
    breadcrumb: "Tier List",
  },
  raid: {
    path: "/raid",
    title: "Merge a Nuke Raid Guide — PvP, City & Defense",
    description:
      "Merge a Nuke raid guide: PvP base attacks, center city PvE payouts, Lock Base shields, launch cooldowns, and how to avoid losing your merge progress.",
    h1: "Merge a Nuke Raid & Defense Guide",
    intro:
      "Raid smarter, farm the center city on cooldown, and lock your base so offline players cannot wipe your progress.",
    tldr:
      "Check shields before launching. Lock before merging in busy lobbies. Center city pays more than early PvP — save your biggest nukes for its window.",
    breadcrumb: "Raid Guide",
  },
  offlineCash: {
    path: "/offline-cash",
    title: "Merge a Nuke Offline Cash — Earn While Away",
    description:
      "How offline cash works in Merge a Nuke on Roblox: boost passive income, organize your base, protect top nukes, and set up earnings before you close the game.",
    h1: "Merge a Nuke Offline Cash Guide",
    intro:
      "Earn while away — set up income, protect your base, and come back to a bigger stack.",
    tldr:
      "Upgrade income sources, keep merges tidy, lock your base, and place your best nukes where they earn safely offline.",
    breadcrumb: "Offline Cash",
  },
  faq: {
    path: "/faq",
    title: "Merge a Nuke FAQ — Codes & Progress Tips",
    description:
      "Merge a Nuke FAQ for Roblox players: code redemption help, beginner upgrades, raid timing, offline cash, rebirth advice, and notes about this fan-made wiki.",
    h1: "Merge a Nuke FAQ",
    intro:
      "Quick answers about codes, progression, raids, and this independent player guide.",
    tldr:
      "Fan-made wiki, not official. ATOMIC, UPDATE2, and BOOM are the current codes — check back after Friday updates.",
    breadcrumb: "FAQ",
  },
  commanders: {
    path: "/commanders",
    title: "Merge a Nuke Commanders — All 7 Types, How to Get & Best Picks",
    description:
      "Every Merge a Nuke commander ranked by rarity: 3 Common, 2 Rare, 1 Epic, 1 Legendary. How to capture them on the map, what each one does, and which to chase first.",
    h1: "Merge a Nuke Commanders Guide",
    intro:
      "All 7 commanders by rarity, how to unlock them, what each one does to your nuke output, and which to prioritize at each stage of the game.",
    tldr:
      "Defeat spawned commanders on the map (last hit wins) or buy them in the Shop. Start with Salvager (auto-merges) or Spotter (cash boost). Endgame: Sovereign (legendary, +15% damage + auto city attacks).",
    breadcrumb: "Commanders",
  },
  about: {
    path: "/about",
    title: "About — Merge a Nuke Wiki",
    description:
      "Merge a Nuke Wiki is an independent fan guide maintained by Remy, a player who built the resource they wished existed. Updated after every Friday patch.",
    h1: "About This Wiki",
    intro: "Who maintains this site, how content is researched, and why it exists.",
    breadcrumb: "About",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy — Merge a Nuke Wiki",
    description:
      "Privacy Policy for mergeanuke.site, an independent Merge a Nuke fan wiki. Learn what data we collect, third-party services, and how to contact us.",
    h1: "Privacy Policy",
    intro:
      "How mergeanuke.site handles data, third-party services, and your choices.",
    breadcrumb: "Privacy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use — Merge a Nuke Wiki",
    description:
      "Terms of Use for mergeanuke.site. Fan-made guide disclaimers, acceptable use, content accuracy limits, and contact information.",
    h1: "Terms of Use",
    intro:
      "Rules and disclaimers for using this independent Merge a Nuke fan wiki.",
    breadcrumb: "Terms",
  },
} as const satisfies Record<string, SeoPageConfig>

export function getSeoPage(path: SeoPageConfig["path"]) {
  return Object.values(SEO_PAGES).find((page) => page.path === path)
}
