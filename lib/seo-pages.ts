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
      "Your hub for Merge a Nuke on Roblox — copy codes in the hero, follow the quick-start route, then open focused guides for commanders, raids, tiers, and more.",
    tldr:
      `Tap Copy on a working code in the hero, then redeem via ${REDEEM_SHORT_PATH}. New players: merge 2+2 → buy Spawn Speed then Spawn Tier → open the Commanders or Beginner guide for the full route.`,
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
    title: "Merge a Nuke Progression & Rebirth Guide",
    description:
      "Merge a Nuke progression guide for Roblox: upgrade path, when to rebirth, Rebirth 7–8 unlocks, and how commanders persist across resets.",
    h1: "Merge a Nuke Progression Guide",
    intro:
      "Know what to focus on at each stage, when rebirth pays off, and how Rebirth 8 fits into long-term scaling.",
    tldr:
      "Codes → Spawn Speed → Spawn Tier → merge toward 16+ → commanders → lock base → rebirth when growth slows. Commanders persist; cash and upgrades reset.",
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
    title: "Merge a Nuke Raid Guide — PvP, Wars, Event Maps & Defense",
    description:
      "Merge a Nuke raid guide: PvP raids, allies, war declarations, betrayal rules, center city PvE, event maps, Mystery Supply Drops, Lock Base shields, and defense tips.",
    h1: "Merge a Nuke Raid & Defense Guide",
    intro:
      "Raid smarter, ally for +10% income, declare wars for cash payouts, farm event maps, and lock your base so offline players cannot wipe your progress.",
    tldr:
      "Check shields and diplomatic status before launching. Allies grant +10% cash — attacking an ally triggers betrayal war rules. Declare War manually or hit the same player 3 times. One active war per player.",
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
    title: "Merge a Nuke Commanders — Tier List & Admiral Guide",
    description:
      "All 25 Merge a Nuke commanders with PvP, income, and event tier lists. Advanced Warfare Pack, Admiral tier, drop tables, and which to capture first.",
    h1: "Merge a Nuke Commanders Guide",
    intro:
      "All 25 commanders by rarity, commander tier lists for PvP and income, event drop tables, and which to prioritize at each stage.",
    tldr:
      "Defeat spawned commanders (last hit wins), clear event maps, roll Advanced Warfare or Supply Drops, or buy in the Shop. PvP: Siege Breaker + Artillery. Income: Spotter. Rebirth 8 needs Overclocker + Barrier.",
    breadcrumb: "Commanders",
  },
  updates: {
    path: "/updates",
    title: "Merge a Nuke Updates — Patch Log & Friday Changes",
    description:
      "Merge a Nuke update log for Roblox: tester applications, July 13 Allies & Warfare, Commanders Pt. 2, wars, Rebirth 8, and weekly Friday patch notes.",
    h1: "Merge a Nuke Update Log",
    intro:
      "Major patch timeline for Merge a Nuke on Roblox — what changed, when, and where to read the full guide on this wiki.",
    tldr:
      "Latest: tester applications re-opened until July 19, 2026. Recent gameplay patch: July 13 Allies & Advanced Warfare (6 commanders, Rebirth 8).",
    breadcrumb: "Updates",
  },
  community: {
    path: "/community",
    title: "Merge a Nuke Community — Official Roblox Links",
    description:
      "Official Merge a Nuke Roblox game link, developer group, tester application form, and where to find Discord and Friday code drops — fan wiki community page.",
    h1: "Merge a Nuke Community Links",
    intro:
      "Play the game, join the developer group, find official social links, and use the current tester application form — without unverified third-party Discord copy.",
    tldr:
      "Tester applications are open until July 19, 2026 at 06:00. Open the Roblox game About tab for group rewards, Discord, and studio links.",
    breadcrumb: "Community",
  },
  blog: {
    path: "/blog",
    title: "Merge a Nuke Blog — Sourced Gameplay Articles",
    description:
      "Merge a Nuke blog with cited YouTube gameplay and wiki cross-links — wars, commanders, and patch mechanics without guessed stats.",
    h1: "Merge a Nuke Blog",
    intro:
      "Short articles sourced from gameplay footage and our verified guides — each post lists YouTube sources and what is still pending.",
    tldr:
      "Latest: tester application guide, Rebirth 8 requirements from Kream Blox gameplay, Hoplas2 commander card reads, and war footage.",
    breadcrumb: "Blog",
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
