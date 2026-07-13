export type CommanderRarity = "Common" | "Rare" | "Epic" | "Legendary" | "Admiral"
export type CommanderRole = "income" | "offense" | "defense" | "automation"
export type CommanderEventMap =
  | "Harbor"
  | "Oil Rig"
  | "Military Compound"
  | "4th of July"
  | "Downtown"
  | "Shipping Port"

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
    ability:
      "Dividends — passive income bonus (exact numbers pending in-game verification).",
    bestFor: "Income farming — passive cash while you play or AFK",
    priority: "B",
    notes:
      "Added in Commanders Pt. 2 (June 28, 2026). Community reports ~70% drop weight on Downtown.",
    pending: true,
    eventMap: "Downtown",
  },
  {
    name: "Foreman",
    rarity: "Common",
    role: "automation",
    ability:
      "Hammer Time — automates plot upgrades or merges (exact effect pending in-game verification).",
    bestFor: "Mid-game automation — less manual merging on your plot",
    priority: "B",
    notes:
      "Added in Commanders Pt. 2 (June 28, 2026). Community reports ~70% drop weight on Shipping Port. May do little once your base is fully maxed.",
    pending: true,
    eventMap: "Shipping Port",
  },
  {
    name: "Uncle Sam",
    rarity: "Common",
    role: "offense",
    ability:
      "July 4 event commander — passive name and effect pending in-game verification.",
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
    ability:
      "Retaliation — when your base is attacked, fires two shells at a random enemy nuke. Instantly destroys nukes tier 19 and below; deals 50% max HP damage to higher tiers. Also reduces the attacker's active base lock timer by 40%.",
    bestFor: "PvP counter-raids — punishes attackers and shaves lock timers",
    priority: "A",
    notes:
      "Added in Commanders Pt. 2 (June 28, 2026). Community reports ~30% drop weight on Downtown. Retaliation text confirmed from in-game commander card (June 2026).",
    eventMap: "Downtown",
  },
  {
    name: "Barrier",
    rarity: "Rare",
    role: "defense",
    ability:
      "Forcefield — defensive shield passive (exact effect pending in-game verification).",
    bestFor: "Base defense when raids are common in your lobby",
    priority: "B",
    notes:
      "Added in Commanders Pt. 2 (June 28, 2026). Community reports ~30% drop weight on Shipping Port. Required commander for Rebirth 8 (July 13, 2026 patch).",
    pending: true,
    eventMap: "Shipping Port",
  },
  {
    name: "Looter",
    rarity: "Rare",
    role: "income",
    ability:
      "Scorched Earth — launches an explosive round onto a random enemy plot. Fragments siphon 10% of cash generated there for 5 seconds.",
    bestFor: "PvP income raids — steals cash from enemy plots while you attack",
    priority: "B",
    notes:
      "Added in Commanders Pt. 2 (June 28, 2026). Community reports ~70% drop weight on Oil Rig. Scorched Earth text confirmed from in-game commander card (June 2026).",
    eventMap: "Oil Rig",
  },
  {
    name: "Sergeant",
    rarity: "Rare",
    role: "offense",
    ability:
      "July 4 LTM commander — passive name and effect pending in-game verification.",
    bestFor: "July 4 event farmers — grab during the limited-time window",
    priority: "?",
    notes: "Added in the LTM / 4th of July update (July 4, 2026).",
    pending: true,
    limited: true,
    eventMap: "4th of July",
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
    ability:
      "Overclock — speeds up automation or production timers (exact effect pending in-game verification).",
    bestFor: "Players who want faster passive plot automation",
    priority: "B",
    notes:
      "Added in Commanders Pt. 2 (June 28, 2026). Community reports ~30% drop weight on Oil Rig. Required commander for Rebirth 8 (July 13, 2026 patch).",
    pending: true,
    eventMap: "Oil Rig",
  },
  {
    name: "Tank",
    rarity: "Epic",
    role: "offense",
    ability:
      "July 4 LTM commander — passive name and effect pending in-game verification.",
    bestFor: "July 4 event farmers — grab during the limited-time window",
    priority: "?",
    notes: "Added in the LTM / 4th of July update (July 4, 2026).",
    pending: true,
    limited: true,
    eventMap: "4th of July",
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
    ability:
      "Reign of Commander — buffs commander effects on your plot by 1.5× and retaliates against attackers with a warhead that lasts 20 seconds (Hoplas2 narration, July 10, 2026; pending in-game card verification).",
    bestFor: "War lobbies — retaliation during formal wars and counter-raids",
    priority: "?",
    notes:
      "LTM reward from Military Compound (July 4, 2026). Ability wording from Hoplas2 YouTube (qZHP32lDOWc) — verify against the in-game commander card.",
    pending: true,
    limited: true,
    eventMap: "Military Compound",
  },
  // --- Admiral (new rarity in Pt. 2) ---
  {
    name: "Apache",
    rarity: "Admiral",
    role: "offense",
    ability:
      "M.A.D. — high-impact Admiral offensive passive (exact effect pending in-game verification).",
    bestFor: "Late-game PvP and event farming — rare Admiral pickup",
    priority: "A",
    notes:
      "Admiral rarity. Rare map spawn reported ~0.05% after the July 4, 2026 nerf (down from ~0.2%). Also tied to Oil Rig in community drop tables — verify in-game.",
    pending: true,
    eventMap: "Oil Rig",
  },
  {
    name: "Carrier",
    rarity: "Admiral",
    role: "offense",
    ability:
      "Carrier Airstrike — after you attack a player's base or the city, fighter jets scramble and strike the target for extra damage. Reduces the target's base lock timer by 30 seconds (40 seconds at max commander level). Jets can keep striking city targets after the first hit.",
    bestFor: "High-end PvP and city events — jets add damage and cut base lock timers",
    priority: "A",
    notes:
      "Admiral rarity, added in Commanders Pt. 2 (June 28, 2026). Harbor event drop vs ~0.5% Conquerors pack — Hoplas2 reports 0.5% pack rate on camera (June 30, 2026, oqNOVaY2SEo). Lock timer reduction scales with commander level.",
    eventMap: "Harbor",
  },
  // --- Advanced Warfare Pack (July 13, 2026) — abilities pending in-game card verification ---
  {
    name: "Grifter",
    rarity: "Rare",
    role: "offense",
    ability: "Advanced Warfare Commander Pack unit — ability text pending in-game verification.",
    bestFor: "Advanced Warfare pack pulls — verify the card after Friday patches",
    priority: "?",
    notes: "Added July 13, 2026. Advanced Warfare Commander Pack reported 35% drop rate.",
    pending: true,
  },
  {
    name: "Scout",
    rarity: "Rare",
    role: "offense",
    ability: "Advanced Warfare Commander Pack unit — ability text pending in-game verification.",
    bestFor: "Advanced Warfare pack pulls — verify the card after Friday patches",
    priority: "?",
    notes: "Added July 13, 2026. Advanced Warfare Commander Pack reported 30% drop rate.",
    pending: true,
  },
  {
    name: "Medic",
    rarity: "Epic",
    role: "defense",
    ability: "Advanced Warfare Commander Pack unit — ability text pending in-game verification.",
    bestFor: "Advanced Warfare pack pulls — verify the card after Friday patches",
    priority: "?",
    notes: "Added July 13, 2026. Advanced Warfare Commander Pack reported 10% drop rate.",
    pending: true,
  },
  {
    name: "Sapper",
    rarity: "Epic",
    role: "offense",
    ability: "Advanced Warfare Commander Pack unit — ability text pending in-game verification.",
    bestFor: "Advanced Warfare pack pulls — verify the card after Friday patches",
    priority: "?",
    notes: "Added July 13, 2026. Advanced Warfare Commander Pack reported 20% drop rate.",
    pending: true,
  },
  {
    name: "Recon",
    rarity: "Legendary",
    role: "offense",
    ability: "Advanced Warfare Commander Pack unit — ability text pending in-game verification.",
    bestFor: "Legendary pull from Advanced Warfare pack or base commander pool",
    priority: "?",
    notes:
      "Added July 13, 2026. Advanced Warfare Commander Pack reported 4.5% drop rate. Also reported to spawn through the base commander pool — verify in-game.",
    pending: true,
  },
  {
    name: "Drone",
    rarity: "Admiral",
    role: "offense",
    ability: "Advanced Warfare Commander Pack unit — ability text pending in-game verification.",
    bestFor: "Ultra-rare Admiral pull from Advanced Warfare pack",
    priority: "?",
    notes: "Added July 13, 2026. Advanced Warfare Commander Pack reported 0.5% drop rate.",
    pending: true,
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
    how: "Harbor, Oil Rig, Downtown, Shipping Port, Military Compound, and Military Base rotate as event or spawn targets. Beat the event or roll the drop pool — Military Compound runs every ~2 hours and drops Stalker (Legendary) when cleared.",
    tip: "Event commanders only appear during the active window. Check which map is live before grinding.",
  },
  {
    id: "advanced-warfare-pack",
    title: "Roll the Advanced Warfare Commander Pack",
    how: "Open the Shop and buy the Advanced Warfare Commander Pack (added July 13, 2026). Reported drop rates: Grifter 35%, Scout 30%, Sapper 20%, Medic 10%, Recon 4.5%, Drone 0.5%.",
    tip: "Recon can also spawn through the base commander pool per the July 13 patch notes — ability text is still pending verification on this wiki.",
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
