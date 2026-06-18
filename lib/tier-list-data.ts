export type NukeTierRow = {
  tier: "S" | "A" | "B" | "C" | "D"
  mergeLevel: string
  nuke: string
  cashPerSec: string
  raidValue: string
  notes: string
}

/** Community-reported names from gameplay videos — verify after Friday patches. */
export const NUKE_TIER_ROWS: NukeTierRow[] = [
  {
    tier: "D",
    mergeLevel: "1–2",
    nuke: "Starter bomb / Double nuke",
    cashPerSec: "Minimal",
    raidValue: "Negligible",
    notes: "Merge immediately — do not hoard level-1 spawns.",
  },
  {
    tier: "D",
    mergeLevel: "4",
    nuke: "Quad nuke (early pink tier)",
    cashPerSec: "Very low",
    raidValue: "Low",
    notes: "Still fodder — keep merging toward 8 and 16.",
  },
  {
    tier: "C",
    mergeLevel: "8",
    nuke: "Octo nuke",
    cashPerSec: "Low",
    raidValue: "Low–moderate",
    notes: "First tier that feels like real progress; merge toward 16 fast.",
  },
  {
    tier: "C",
    mergeLevel: "16",
    nuke: "Crater Maker",
    cashPerSec: "Moderate",
    raidValue: "Moderate",
    notes: "Solid early-mid stepping stone. Good first raid test nuke.",
  },
  {
    tier: "B",
    mergeLevel: "32",
    nuke: "Kaboominator (early)",
    cashPerSec: "Solid",
    raidValue: "Moderate–high",
    notes: "Income starts scaling noticeably. Chase before heavy raiding.",
  },
  {
    tier: "B",
    mergeLevel: "64",
    nuke: "Kaboominator / mid-tier heavy",
    cashPerSec: "Strong (community: ~$1k/s range)",
    raidValue: "High",
    notes: "Gameplay videos cite strong passive income here — treat as estimate.",
  },
  {
    tier: "B",
    mergeLevel: "128–256",
    nuke: "Doombringer / heavy merge tier",
    cashPerSec: "High",
    raidValue: "High",
    notes: "Board management matters — keep merging duplicates in lines.",
  },
  {
    tier: "A",
    mergeLevel: "512",
    nuke: "Grain nuke / 512-tier heavy",
    cashPerSec: "Very high",
    raidValue: "Very high",
    notes: "Late mid-game. Spawn Tier upgrades should feed this tier by now.",
  },
  {
    tier: "A",
    mergeLevel: "1K+",
    nuke: "Entropy Engine / Singularity Sovereign",
    cashPerSec: "Very high",
    raidValue: "Very high",
    notes: "Named endgame nukes from community footage. Exact stats vary by patch.",
  },
  {
    tier: "A",
    mergeLevel: "Red chain",
    nuke: "Void Vaporizer / Infinity Igniter",
    cashPerSec: "Elite",
    raidValue: "Elite",
    notes: "Special color merge chains (red + red, etc.) — see in-game Index.",
  },
  {
    tier: "S",
    mergeLevel: "Late named",
    nuke: "Oblivion Maestro / Last Light / Eternity Ender",
    cashPerSec: "Top tier",
    raidValue: "Massive city damage",
    notes: "Used heavily against the center city in gameplay videos.",
  },
  {
    tier: "S",
    mergeLevel: "Endgame",
    nuke: "Omega Point / Veil Breaker / Ashen Sovereign",
    cashPerSec: "Top tier",
    raidValue: "Maximum",
    notes: "Among the strongest reported nukes pre-rebirth cap (~#35 in community runs).",
  },
  {
    tier: "S",
    mergeLevel: "Post-rebirth",
    nuke: "Higher Index tiers (10+ beyond #35)",
    cashPerSec: "Top tier",
    raidValue: "Maximum",
    notes: "Rebirth required to unlock the final Index entries. Check Index after each update.",
  },
]

export const TIER_PRO_TIPS = [
  "Use the in-game Index as the source of truth for names — this table is a community map.",
  "Merge level doubles each step: 2 → 4 → 8 → 16 → 32 → 64 → 128 → 256 → 512 → …",
  "Chase A-tier or higher before investing heavily in PvP raids.",
  "Rebirth unlocks nukes beyond the mid-game cap — do not assume Mega Nuke is the final tier.",
  "Re-evaluate names and income after every Friday patch.",
] as const

export const TIER_BADGE: Record<
  NukeTierRow["tier"],
  { accent: string; badge: string }
> = {
  S: {
    accent: "border-primary/50 bg-primary/10",
    badge: "bg-primary text-primary-foreground",
  },
  A: {
    accent: "border-hazard/50 bg-hazard/10",
    badge: "bg-hazard text-accent-foreground",
  },
  B: {
    accent: "border-warning/50 bg-warning/10",
    badge: "bg-warning text-warning-foreground",
  },
  C: {
    accent: "border-border bg-secondary/40",
    badge: "bg-secondary text-secondary-foreground",
  },
  D: {
    accent: "border-border/80 bg-muted/30",
    badge: "bg-muted text-muted-foreground",
  },
}
