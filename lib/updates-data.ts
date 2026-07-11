export type PatchUpdateLink = {
  label: string
  href: `/${string}`
}

export type PatchUpdate = {
  id: string
  date: string
  title: string
  summary: string
  highlights: string[]
  links: PatchUpdateLink[]
}

export const PATCH_UPDATES: PatchUpdate[] = [
  {
    id: "july-4-ltm",
    date: "2026-07-04",
    title: "LTM & 4th of July — Wars, Supply Drops, Rebirth 7",
    summary:
      "Major summer patch: Military Compound LTM, four holiday commanders, formal PvP wars, Mystery Supply Drops, and Rebirth 7 with five new Index nukes.",
    highlights: [
      "Military Compound runs ~every 2 hours — clear it to spawn Stalker (Legendary).",
      "New commanders: Uncle Sam (Common), Sergeant (Rare), Tank (Epic), Stalker (Legendary).",
      "Attack the same player 3 times to declare war — 100% war score steals 50% of their cash.",
      "Mystery Supply Drops: 50% spawn chance every 3 minutes; destroy for a random commander roll.",
      "Sovereign auto-attack rate nerfed; Apache map spawn cut from ~0.2% to ~0.05%.",
      "Rebirth 7 unlocks five new nukes in the Index.",
    ],
    links: [
      { label: "Commanders guide", href: "/commanders" },
      { label: "Raid & war guide", href: "/raid" },
      { label: "Rebirth checklist", href: "/progression#rebirth" },
    ],
  },
  {
    id: "commanders-pt-2",
    date: "2026-06-28",
    title: "Commanders Pt. 2 — Admiral Tier, Harbor & Oil Rig",
    summary:
      "Eight new commanders, a new Admiral rarity, Downtown and Shipping Port event maps, and ground-unit conversions for legacy commons/rares.",
    highlights: [
      "New Admiral units: Apache and Carrier.",
      "Common/Rare adds: Broker, Foreman, Artillery, Barrier, Looter, Overclocker.",
      "Harbor and Oil Rig event cities each drop two exclusive commanders.",
      "Downtown and Shipping Port join the rotation with community-reported drop pools.",
      "Salvager, Engineer, Gunner, and Spotter converted to ground units.",
      "Limited-time Conquerors pack adds two more commanders (names vary by window).",
    ],
    links: [
      { label: "All commanders", href: "/commanders" },
      { label: "Commander tier list", href: "/commanders#commander-tier-list" },
      { label: "Event drop tables", href: "/commanders#event-drops" },
    ],
  },
  {
    id: "commanders-launch",
    date: "2026-06-20",
    title: "Commanders Launch — Downtown & Rebirth 6",
    summary:
      "First commanders update: seven launch units, map boat spawns, Downtown city expansion, and rebirth progression beyond mid-game caps.",
    highlights: [
      "Launch roster: Salvager, Engineer, Gunner, Spotter, Interceptor, Siege Breaker, Sovereign.",
      "Capture commanders by landing the killing blow on map spawns.",
      "Downtown added as a higher-health PvE city target.",
      "Rebirth 6 raised the progression ceiling for late-game players.",
    ],
    links: [
      { label: "Commanders overview", href: "/commanders" },
      { label: "Progression guide", href: "/progression" },
    ],
  },
]

export const FRIDAY_PATCH_NOTES = [
  "Verify codes in-game before marking active or expired on /codes.",
  "Update commanders, raid, and banner copy if abilities or events changed.",
  "Add a new entry to lib/updates-data.ts (PATCH_UPDATES) with date and highlights.",
  "Run npm run build locally; deploy to production.",
  "Let CI purge cache, wait 180s, then IndexNow (cf-cache-purge workflow).",
  "Optional: submit changed URLs via Bing SubmitUrlbatch if a major patch dropped.",
] as const
