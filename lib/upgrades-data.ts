import { REDEEM_SHORT_PATH } from "@/lib/redeem-guide-data"

export type StoreUpgrade = {
  name: string
  priority: "Essential" | "High" | "Medium" | "Late-game"
  whatItDoes: string
  whenToBuy: string
  freeRoute: string
}

export const EARLY_UPGRADE_ROUTE = [
  `Redeem all active codes first (${REDEEM_SHORT_PATH}) for starting cash and nukes.`,
  "Buy Spawn Speed first — community gameplay shows a big early boost for a few thousand cash.",
  "Save for Spawn Tier so new nukes spawn at level 2 instead of level 1.",
  "Raise Max Spawn so more nukes appear at once, then keep merging duplicates.",
  "Upgrade Lock Base duration before you idle or merge for long stretches.",
] as const

export const STORE_UPGRADES: StoreUpgrade[] = [
  {
    name: "Spawn Speed / Spawn Rate",
    priority: "Essential",
    whatItDoes:
      "Makes new nukes appear faster so you can merge more often without waiting.",
    whenToBuy:
      "Right after codes — one of the first Store purchases in most early sessions.",
    freeRoute:
      "Prioritize this over cosmetic buys. Faster spawns = faster merges = faster income.",
  },
  {
    name: "Spawn Tier",
    priority: "Essential",
    whatItDoes:
      "Raises the level that newly spawned nukes start at (e.g. level 1 → level 2 → level 4).",
    whenToBuy:
      "Once you have a few thousand cash and basic spawn speed — before chasing raids.",
    freeRoute:
      "Huge long-term value. Higher spawn tiers skip the weakest bomb steps entirely.",
  },
  {
    name: "Max Spawn",
    priority: "High",
    whatItDoes:
      "Increases how many nukes can sit on your base at the same time.",
    whenToBuy:
      "When your board feels empty or you are waiting on spawns instead of merging.",
    freeRoute:
      "Pair with Spawn Tier — more high-tier spawns on the board accelerates everything.",
  },
  {
    name: "Lock Base (duration)",
    priority: "High",
    whatItDoes:
      "Extends how long your base shield stays active after you lock it.",
    whenToBuy:
      "Before any long merge session or when other players are raiding nearby.",
    freeRoute:
      "Default shield time is short. Upgrading gives you more time to merge safely.",
  },
  {
    name: "Quicker Lock Cooldown",
    priority: "Medium",
    whatItDoes: "Shortens the wait before you can activate Lock Base again.",
    whenToBuy:
      "Mid-game when you are raiding often and need shields back faster.",
    freeRoute: "Optional but helpful in busy lobbies with frequent PvP.",
  },
  {
    name: "Quicker Launch Cooldown",
    priority: "Medium",
    whatItDoes:
      "Reduces downtime between launching nukes at players or the center city.",
    whenToBuy:
      "After your economy is stable and you raid or hit the city regularly.",
    freeRoute: "More useful for active raiders than pure idle merge players.",
  },
  {
    name: "Nuke Health (x2)",
    priority: "Medium",
    whatItDoes:
      "Makes your nukes harder to destroy when another player attacks your base.",
    whenToBuy:
      "When you start holding high-tier nukes you cannot afford to lose.",
    freeRoute: "Defense upgrade — pair with Lock Base for safer late-game boards.",
  },
  {
    name: "Cash Multipliers (Robux)",
    priority: "Late-game",
    whatItDoes:
      "Temporary or permanent cash boosts from the Store (x2, x4, x8, etc.).",
    whenToBuy:
      "Only if you choose to spend Robux — not required for free progression.",
    freeRoute:
      "Optional speed-up. Free players can progress with Spawn Tier + merges alone.",
  },
  {
    name: "Auto Merge (Robux)",
    priority: "Late-game",
    whatItDoes:
      "Automatically combines matching nukes on your board when the grid gets crowded.",
    whenToBuy:
      "Very late game when manual merging across dozens of high-tier nukes is tedious.",
    freeRoute:
      "Quality-of-life only. Manual merging works fine through mid-game.",
  },
]

export const UPGRADE_PRO_TIPS = [
  "Spawn Speed + Spawn Tier beat random one-off purchases every time.",
  "Do not buy bulk nukes with Robux unless you have board space — they can clutter your base.",
  "Lock before merging in a busy lobby; getting reset wipes your board progress.",
  "Rebirth unlocks higher nuke tiers — save big cash spends until you know your merge goal.",
] as const
