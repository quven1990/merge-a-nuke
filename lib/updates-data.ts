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
    id: "july-18-contract-volcano",
    date: "2026-07-18",
    title: "Contract Board, Volcano Admin Abuse, Town Square & More",
    summary:
      "Contract Board adds Daily, Weekly, and Monthly contracts with cash, boosts, and a rotating Unique Commander reward. Volcano Admin Abuse, Disco rework, Town Square Tier 1, and two new commanders ship in the same patch.",
    highlights: [
      "Contract Board: 5 Daily, 5 Weekly, and 2 Monthly slots, each refreshing on their own timers.",
      "Contract rewards include cash, temporary boosts, permanent stat boosts, and progress toward a Unique Commander that rotates every 14 days.",
      "The Unique Commander contract requires completing all available contracts before it can be claimed.",
      "Daily contracts: Nuisance, Doomsday, Backstabber, Military Money Moves, I'm The Captain Now.",
      "Weekly contracts: Damage Do-er, Peacekeeper, Triple Threat, Credit Stealer, Leader.",
      "Monthly rotation: Ultimate Arsenal, Damage Do-er-er, Nuclear Threat.",
      "Diplomat (Legendary) is the first Contract Board-exclusive commander.",
      "New commanders: Welder (Common) and Forklift Operator (Rare).",
      "Volcano Admin Abuse: ocean becomes lava, plots turn into magma plots, 150 HP weak-point boss, live damage leaderboard, Magma Multiplier and Lava Merge rewards (3+ players, no VIP servers).",
      "Disco Admin Abuse reworked with less flashing, 2x Cash / Spawn Rate / Commander Spawn Rate, and a temporary Auto Merge admin command.",
      "Town Square Tier 1 event map added (150,000 HP) with new destructible buildings.",
      "Held nukes now take damage when your base is attacked; nuke healing speed is reduced.",
    ],
    links: [
      { label: "Raid, events & Admin Abuse", href: "/raid" },
      { label: "All commanders", href: "/commanders" },
      { label: "Diplomat commander", href: "/commanders/diplomat" },
      { label: "Update log", href: "/updates" },
    ],
  },
  {
    id: "tester-applications-july-2026",
    date: "2026-07-15",
    title: "Tester Applications Re-opening",
    summary:
      "Nuke The Game is looking for more Merge a Nuke testers. Applications are open until July 19, 2026 at 06:00, with a 15+ age requirement and expectations for active, professional test-session participation.",
    highlights: [
      "Applicants must be 15+ and active enough to attend most test sessions.",
      "Responses should show effort and professionalism; do not ask when results will be announced.",
      "Applications may close early if enough eligible testers are found.",
      "Use only the announcement's Google Form link — we list it on the Community page so players avoid fake forms.",
    ],
    links: [
      { label: "Community links & tester form", href: "/community" },
      { label: "Latest update log", href: "/updates" },
    ],
  },
  {
    id: "july-13-allies-warfare",
    date: "2026-07-13",
    title: "Allies, Advanced Warfare Pack & Rebirth 8",
    summary:
      "Diplomacy update: alliance requests with +10% cash income, betrayal war rules, manual Declare War, and redesigned targeting UI. Six new Advanced Warfare commanders and Rebirth 8 with five Index nukes.",
    highlights: [
      "Allies: send alliance requests in-server — both players get +10% cash income while allied.",
      "Attacking an ally cancels the alliance and declares war. Betrayal wars need 1,000% score to win (defender 500%); betrayer wins 25% cash or loses 75% if defeated.",
      "Declare War button added — automatic 3-hit trigger still works. Only one active war per player.",
      "Advanced Warfare Commander Pack: Drone (Admiral, 0.5%), Recon (Legendary, 4.5%), Medic (10%), Sapper (20%), Scout (30%), Grifter (35%). Recon also spawns in the base commander pool.",
      "Rebirth 8: +110% cash and 5 additional nukes — requires final nuke tier plus Overclocker and Barrier commanders.",
      "New Index nukes: Silent Whisper, False Step, Peek-a-Boo, Colossus, Fragmenter.",
    ],
    links: [
      { label: "Raid, wars & allies", href: "/raid" },
      { label: "All commanders", href: "/commanders" },
      { label: "Rebirth checklist", href: "/progression#rebirth" },
      { label: "How wars work (blog)", href: "/blog/how-wars-work-july-2026" },
    ],
  },
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
      { label: "How wars work (blog)", href: "/blog/how-wars-work-july-2026" },
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
