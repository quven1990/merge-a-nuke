export type CommanderRarity = "Common" | "Rare" | "Epic" | "Legendary" | "Admiral"
export type CommanderRole = "income" | "offense" | "defense" | "automation"
export type CommanderEventMap =
  | "Harbor"
  | "Oil Rig"
  | "Military Compound"
  | "4th of July"

export type Commander = {
  name: string
  rarity: CommanderRarity
  role: CommanderRole
  ability: string
  bestFor: string
  priority: "S" | "A" | "B" | "C" | "?"
  notes: string
  /** True when ability details are not yet verified in-game. */
  pending?: boolean
  /** Limited-time or event-exclusive commander. */
  limited?: boolean
  /** Event map or holiday event where this commander spawns. */
  eventMap?: CommanderEventMap
  /** Optional in-game portrait path under /public, e.g. /images/commanders/salvager.webp */
  image?: string
}

function slugifyCommanderName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-")
}

export function getCommanderSlug(commander: Pick<Commander, "name">) {
  return slugifyCommanderName(commander.name)
}

export function getCommanderPath(commander: Pick<Commander, "name">) {
  return `/commanders/${getCommanderSlug(commander)}` as const
}

export function getCommanderBySlug(slug: string) {
  return COMMANDERS.find((cmd) => getCommanderSlug(cmd) === slug)
}

export function getAllCommanderSlugs() {
  return COMMANDERS.map((cmd) => getCommanderSlug(cmd))
}

export const COMMANDERS: Commander[] = [
  // --- Common ---
  {
    name: "Salvager",
    rarity: "Common",
    role: "automation",
    ability: "Merges the 2 lowest-tier nukes on your plot automatically every minute.",
    bestFor: "Early game — keeps your grid clean without manual merging",
    priority: "A",
    notes: "Best common for new players. Pt. 2: converted to a ground unit.",
  },
  {
    name: "Engineer",
    rarity: "Common",
    role: "automation",
    ability: "Upgrades the worst nuke on your plot by 1 tier every 2 minutes.",
    bestFor: "Passive progression when you can't actively play",
    priority: "B",
    notes: "Slower than Salvager but useful for AFK sessions. Pt. 2: converted to a ground unit.",
  },
  {
    name: "Gunner",
    rarity: "Common",
    role: "offense",
    ability: "Increases the damage of nuclear attacks against other players.",
    bestFor: "PvP raiding — more damage per nuke launched",
    priority: "B",
    notes: "Only worth equipping if you raid often. Pt. 2: converted to a ground unit.",
  },
  {
    name: "Broker",
    rarity: "Common",
    role: "income",
    ability: "Newly added in the Commanders Pt. 2 update — ability details pending in-game verification.",
    bestFor: "Pending — check back after we confirm it in-game",
    priority: "?",
    notes: "Added in Commanders Pt. 2 (June 28, 2026).",
    pending: true,
  },
  {
    name: "Foreman",
    rarity: "Common",
    role: "automation",
    ability: "Newly added in the Commanders Pt. 2 update — ability details pending in-game verification.",
    bestFor: "Pending — check back after we confirm it in-game",
    priority: "?",
    notes: "Added in Commanders Pt. 2 (June 28, 2026).",
    pending: true,
  },
  {
    name: "Uncle Sam",
    rarity: "Common",
    role: "offense",
    ability: "Added for the 4th of July event — ability details pending in-game verification.",
    bestFor: "Holiday event collectors — grab it while the July 4 event is live",
    priority: "?",
    notes: "Limited-time 4th of July event unit (July 2026).",
    pending: true,
    limited: true,
    eventMap: "4th of July",
  },
  // --- Rare ---
  {
    name: "Spotter",
    rarity: "Rare",
    role: "income",
    ability: "Fires a flare onto a random spot every 30 seconds, granting a cash boost to all nukes within the radius.",
    bestFor: "Income farming — best rare for passive cash growth",
    priority: "S",
    notes: "Top priority rare. Pt. 2: converted to a ground unit.",
  },
  {
    name: "Interceptor",
    rarity: "Rare",
    role: "defense",
    ability: "Has a 50% chance to intercept an incoming enemy nuke, reducing its damage by 30%.",
    bestFor: "Defense in aggressive lobbies with frequent raids",
    priority: "C",
    notes: "Situational. Only useful if you're getting raided constantly.",
  },
  {
    name: "Artillery",
    rarity: "Rare",
    role: "offense",
    ability: "Newly added in the Commanders Pt. 2 update — ability details pending in-game verification.",
    bestFor: "Pending — check back after we confirm it in-game",
    priority: "?",
    notes: "Added in Commanders Pt. 2 (June 28, 2026).",
    pending: true,
  },
  {
    name: "Barrier",
    rarity: "Rare",
    role: "defense",
    ability: "Newly added in the Commanders Pt. 2 update — ability details pending in-game verification.",
    bestFor: "Pending — check back after we confirm it in-game",
    priority: "?",
    notes: "Added in Commanders Pt. 2 (June 28, 2026).",
    pending: true,
  },
  {
    name: "Looter",
    rarity: "Rare",
    role: "income",
    ability: "Newly added in the Commanders Pt. 2 update — ability details pending in-game verification.",
    bestFor: "Pending — check back after we confirm it in-game",
    priority: "?",
    notes: "Added in Commanders Pt. 2 (June 28, 2026).",
    pending: true,
  },
  {
    name: "Sergeant",
    rarity: "Rare",
    role: "offense",
    ability: "Added in the July 4, 2026 LTM patch — ability details pending in-game verification.",
    bestFor: "Pending — check back after we confirm it in-game",
    priority: "?",
    notes: "Added in the LTM / 4th of July update (July 4, 2026).",
    pending: true,
  },
  // --- Epic ---
  {
    name: "Siege Breaker",
    rarity: "Epic",
    role: "offense",
    ability: "After launching a nuke at a locked player's base, fires a warhead that weakens their lock timer by 10%. Your next nuke also deals 20% more damage. 45-second cooldown.",
    bestFor: "Breaking through locked bases in PvP raids",
    priority: "A",
    notes: "Strong in raid-heavy lobbies. The 20% damage boost stacks well with Gunner.",
  },
  {
    name: "Overclocker",
    rarity: "Epic",
    role: "automation",
    ability: "Newly added in the Commanders Pt. 2 update — ability details pending in-game verification.",
    bestFor: "Pending — check back after we confirm it in-game",
    priority: "?",
    notes: "Added in Commanders Pt. 2 (June 28, 2026).",
    pending: true,
  },
  {
    name: "Tank",
    rarity: "Epic",
    role: "offense",
    ability: "Added in the July 4, 2026 LTM patch — ability details pending in-game verification.",
    bestFor: "Pending — check back after we confirm it in-game",
    priority: "?",
    notes: "Added in the LTM / 4th of July update (July 4, 2026).",
    pending: true,
  },
  // --- Legendary ---
  {
    name: "Sovereign",
    rarity: "Legendary",
    role: "offense",
    ability: "Increases your nuke damage by 15% passively. Also auto-attacks city events and deals bonus damage to event targets.",
    bestFor: "Late game — best overall commander for city farming and raids",
    priority: "S",
    notes: "Best legendary commander. July 4, 2026 patch significantly nerfed its auto-attack rate.",
  },
  {
    name: "Stalker",
    rarity: "Legendary",
    role: "offense",
    ability: "Limited-time Legendary from the Military Compound event — ability details pending in-game verification.",
    bestFor: "Event farmers — beat Military Compound when it rotates every ~2 hours",
    priority: "?",
    notes: "LTM reward from Military Compound (July 4, 2026). Spawns after the event is cleared.",
    pending: true,
    limited: true,
    eventMap: "Military Compound",
  },
  // --- Admiral (new rarity in Pt. 2) ---
  {
    name: "Apache",
    rarity: "Admiral",
    role: "offense",
    ability: "Newly added with the Admiral rarity in Commanders Pt. 2 — ability details pending in-game verification.",
    bestFor: "Pending — check back after we confirm it in-game",
    priority: "?",
    notes: "Admiral rarity. July 4, 2026 patch nerfed map spawn rate from 0.2% to 0.05%.",
    pending: true,
    eventMap: "Oil Rig",
  },
  {
    name: "Carrier",
    rarity: "Admiral",
    role: "offense",
    ability: "Newly added with the Admiral rarity in Commanders Pt. 2 — ability details pending in-game verification.",
    bestFor: "Pending — check back after we confirm it in-game",
    priority: "?",
    notes: "Admiral rarity, added in Commanders Pt. 2 (June 28, 2026).",
    pending: true,
    eventMap: "Harbor",
  },
]

export type AcquireMethod = {
  id: string
  title: string
  how: string
  tip: string
}

export const ACQUIRE_METHODS: AcquireMethod[] = [
  {
    id: "map-spawn",
    title: "Defeat a spawned commander on the map",
    how: "Commanders arrive by boat and appear on the shared map as enemy units with an HP bar. Attack them with your nukes — whoever lands the final hit captures the commander.",
    tip: "Bring your strongest nuke. Other players compete for the same commander, so hit fast and hard.",
  },
  {
    id: "purchase",
    title: "Buy one in the Shop",
    how: "Open the Shop (left side of screen) and check the Commanders tab or military/academy store section. Commanders can be purchased with in-game cash or Robux.",
    tip: "Spending cash is faster but costs more. Save Robux purchases for Epic or Legendary tiers.",
  },
  {
    id: "milestone",
    title: "Earn free at level milestones",
    how: "Starter and some custom commanders are granted for free when you reach certain in-game levels or upgrade ranks.",
    tip: "Check your progress milestones — you may already have a free commander waiting to be claimed.",
  },
  {
    id: "event-map",
    title: "Spawn during event maps",
    how: "Harbor, Oil Rig, Military Compound, and Military Base rotate as event targets. Beat the event to capture map-exclusive commanders — Military Compound runs every ~2 hours and drops Stalker (Legendary) when cleared.",
    tip: "Event commanders only appear during the active window. Check which map is live before grinding.",
  },
  {
    id: "supply-drop",
    title: "Destroy Mystery Supply Drops",
    how: "Mystery Supply Drops have a 50% chance to spawn every 3 minutes. Destroy one to roll a random commander from all available pools in the game.",
    tip: "Low effort but RNG-heavy — good filler while you wait for a timed event map to open.",
  },
]

export const RARITY_STYLE: Record<CommanderRarity, { badge: string; border: string; label: string }> = {
  Common:    { badge: "bg-muted text-muted-foreground",                 border: "border-border/60",    label: "Common" },
  Rare:      { badge: "bg-blue-500/15 text-blue-400",                   border: "border-blue-500/30",  label: "Rare" },
  Epic:      { badge: "bg-purple-500/15 text-purple-400",               border: "border-purple-500/30",label: "Epic" },
  Legendary: { badge: "bg-yellow-500/15 text-yellow-400",               border: "border-yellow-500/30",label: "Legendary" },
  Admiral:   { badge: "bg-rose-500/15 text-rose-400",                   border: "border-rose-500/30",  label: "Admiral" },
}

export const PRIORITY_STYLE: Record<Commander["priority"], string> = {
  S: "text-yellow-400 font-bold",
  A: "text-primary font-bold",
  B: "text-foreground font-semibold",
  C: "text-muted-foreground",
  "?": "text-muted-foreground/60",
}
