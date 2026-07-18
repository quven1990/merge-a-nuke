export type EventMapDrop = {
  map: string
  commander: string
  rarity: string
  weight: string
  pending?: boolean
  href: `/commanders/${string}`
}

/** Community-reported drop weights — verify in-game after Friday patches. */
export const EVENT_MAP_DROPS: EventMapDrop[] = [
  {
    map: "Downtown",
    commander: "Broker",
    rarity: "Common",
    weight: "~70%",
    pending: true,
    href: "/commanders/broker",
  },
  {
    map: "Downtown",
    commander: "Artillery",
    rarity: "Rare",
    weight: "~30%",
    href: "/commanders/artillery",
  },
  {
    map: "Shipping Port",
    commander: "Foreman",
    rarity: "Common",
    weight: "~70%",
    pending: true,
    href: "/commanders/foreman",
  },
  {
    map: "Shipping Port",
    commander: "Barrier",
    rarity: "Rare",
    weight: "~30%",
    pending: true,
    href: "/commanders/barrier",
  },
  {
    map: "Oil Rig",
    commander: "Looter",
    rarity: "Rare",
    weight: "~70%",
    href: "/commanders/looter",
  },
  {
    map: "Oil Rig",
    commander: "Overclocker",
    rarity: "Epic",
    weight: "~30%",
    pending: true,
    href: "/commanders/overclocker",
  },
  {
    map: "Oil Rig / map spawn",
    commander: "Apache",
    rarity: "Admiral",
    weight: "~0.05% rare spawn",
    pending: true,
    href: "/commanders/apache",
  },
  {
    map: "Harbor",
    commander: "Carrier",
    rarity: "Admiral",
    weight: "Event drop (also reported in Commander Pack)",
    href: "/commanders/carrier",
  },
  {
    map: "Military Compound",
    commander: "Stalker",
    rarity: "Legendary",
    weight: "Clear LTM (~2h rotation)",
    pending: true,
    href: "/commanders/stalker",
  },
  {
    map: "Town Square",
    commander: "Pending drop pool",
    rarity: "Tier 1 map",
    weight: "150,000 HP — drops TBD (July 18, 2026)",
    pending: true,
    href: "/commanders",
  },
  {
    map: "Contract Board",
    commander: "Diplomat",
    rarity: "Legendary",
    weight: "Unique Commander (complete all contracts; rotates every 14 days)",
    pending: true,
    href: "/commanders/diplomat",
  },
  {
    map: "4th of July event",
    commander: "Uncle Sam / Sergeant / Tank",
    rarity: "Common–Epic",
    weight: "Limited-time holiday window",
    pending: true,
    href: "/commanders/uncle-sam",
  },
]

export const EVENT_DROP_TIPS = [
  "Check which map is live before grinding — rotations change after patches.",
  "Bring your highest-tier nukes; event structures have more HP than early PvP bases.",
  "Last-hit capture rules still apply on commander boat spawns competing with other players.",
  "Mystery Supply Drops roll any commander pool — good filler between timed events.",
  "Contract Board Unique Commanders (Diplomat first) require completing all available contracts; the exclusive rotates every 14 days.",
  "Weights marked Pending are community reports, not verified drop tables.",
] as const

export const REBIRTH_GUIDE = {
  title: "Rebirth guide — Rebirth 7 & Rebirth 8",
  summary:
    "Rebirth resets cash, nukes, and Store upgrades but keeps commanders and grants permanent multipliers plus higher Index tiers.",
  rebirth8RequirementTitle: "Rebirth 8 requirements",
  rebirth8RequirementSummary:
    "If you came here for Rebirth 8, check these gates first before resetting or grinding the wrong commander.",
  rebirth8Requirements: [
    "Reach the final nuke tier shown in the in-game Index for your current run.",
    "Own or equip Overclocker — the Epic commander tied to faster laboratory spawns.",
    "Own or equip Barrier — the Rare commander reported as part of the Rebirth 8 gate.",
    "Confirm the exact in-game UI before spending Robux or cash, because patch requirements can change.",
  ],
  whenToRebirth: [
    "Growth slows — merges no longer push you toward the next Index tier efficiently.",
    "You have cleared enough missile tiers that the permanent money multiplier outweighs the reset cost.",
    "You need higher rebirth-gated nukes for city farming or event maps (Rebirth 7 added five Index entries July 4, 2026; Rebirth 8 added five more July 13, 2026).",
  ],
  whatResets: [
    "Cash on hand and placed nukes on your plot.",
    "Store upgrades (Spawn Tier, Spawn Speed, Max Spawn, Lock Base levels).",
  ],
  whatPersists: [
    "Commanders you unlocked and their upgrade levels.",
    "Permanent rebirth money multipliers and Index unlocks.",
  ],
  rebirth7Note:
    "The July 4, 2026 patch added Rebirth 7 with five new nukes. Rebirth when your current run has exhausted practical merges — not the moment you unlock the button.",
  rebirth8Note:
    "The July 13, 2026 patch added Rebirth 8: +110% cash and 5 additional nukes (Silent Whisper, False Step, Peek-a-Boo, Colossus, Fragmenter). Requires the final nuke tier in the Index plus Overclocker and Barrier commanders equipped or owned — confirm exact UI requirements in-game.",
} as const
