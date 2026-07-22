export type CommanderRarity = "Common" | "Rare" | "Epic" | "Legendary" | "Admiral"
export type CommanderRole = "income" | "offense" | "defense" | "automation"
export type CommanderEventMap =
  | "Harbor"
  | "Oil Rig"
  | "Military Compound"
  | "4th of July"
  | "Downtown"
  | "Shipping Port"
  | "Town Square"
  | "Contract Board"

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
  /** Short primary acquisition path for search / quick-answer UI. */
  acquireSummary?: string
  /** Commander-specific acquisition steps shown above the generic methods list. */
  acquireSteps?: string[]
  /** When set, detail page shows a Rebirth 8 gate callout. */
  rebirth8Note?: string
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
    notes: "Best common for new players. Ability wording confirmed from Hoplas2 commander launch video (June 20, 2026, fE1HcHTYg6Q). Pt. 2: converted to a ground unit.",
  },
  {
    name: "Engineer",
    rarity: "Common",
    role: "automation",
    ability: "Upgrades the worst nuke on your plot by 1 tier every 2 minutes.",
    bestFor: "Passive progression when you can't actively play",
    priority: "B",
    notes: "Slower than Salvager but useful for AFK sessions. Ability wording confirmed from Hoplas2 commander launch video (June 20, 2026, fE1HcHTYg6Q). Pt. 2: converted to a ground unit.",
  },
  {
    name: "Gunner",
    rarity: "Common",
    role: "offense",
    ability: "Increases the damage of nuclear attacks against other players.",
    bestFor: "PvP raiding — more damage per nuke launched",
    priority: "B",
    notes: "Only worth equipping if you raid often. Ability wording confirmed from Hoplas2 commander launch video (June 20, 2026, fE1HcHTYg6Q). Pt. 2: converted to a ground unit.",
  },
  {
    name: "Broker",
    rarity: "Common",
    role: "income",
    ability:
      "Dividends — when you merge a nuke, pays out a lump sum equal to 55% of what that nuke earns in 30 seconds.",
    bestFor: "Active merging income — extra cash bursts while cleaning your plot",
    priority: "B",
    notes:
      "Added in Commanders Pt. 2 (June 28, 2026). Community reports ~70% drop weight on Downtown. Ability wording from Hoplas2 July 4 video (46HqVOGK57o); verify whether 55% scales by commander level.",
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
    notes: "Top priority rare. Ability wording confirmed from Hoplas2 commander launch video (June 20, 2026, fE1HcHTYg6Q). Pt. 2: converted to a ground unit.",
  },
  {
    name: "Interceptor",
    rarity: "Rare",
    role: "defense",
    ability: "Has a 50% chance to intercept an incoming enemy nuke, reducing its damage by 30%.",
    bestFor: "Defense in aggressive lobbies with frequent raids",
    priority: "C",
    notes: "Situational. Only useful if you're getting raided constantly. Ability wording confirmed from Hoplas2 commander launch video (June 20, 2026, fE1HcHTYg6Q).",
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
    acquireSummary:
      "Farm Downtown while the event is live — community reports ~30% drop weight for Artillery vs Broker.",
    acquireSteps: [
      "Check that Downtown is the live event map before grinding.",
      "Clear Downtown targets and compete for the commander spawn — last hit captures Artillery.",
      "Community drop reports put Artillery around ~30% on Downtown (Broker ~70%); treat weights as unverified.",
      "If the event is down, try the Shop, Mystery Supply Drops, or wait for the next Downtown rotation.",
    ],
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
    acquireSummary:
      "Farm Shipping Port while the event is live — community reports ~30% drop weight for Barrier vs Foreman.",
    acquireSteps: [
      "Check that Shipping Port is the live event map before grinding.",
      "Clear Shipping Port targets and take the last hit on the Barrier spawn.",
      "Community drop reports put Barrier around ~30% on Shipping Port (Foreman ~70%); treat weights as unverified.",
      "You can also buy Barrier in the Shop or roll Mystery Supply Drops if the event is offline.",
    ],
    rebirth8Note:
      "Barrier is reported as part of the Rebirth 8 unlock gate with Overclocker and the final Index nuke tier. Confirm the exact in-game UI before spending Robux or cash.",
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
      "Overclock — overclocks your laboratory, spawning nukes 58% faster for 14 seconds.",
    bestFor: "Rebirth 8 prep and burst production — faster nuke spawns during active sessions",
    priority: "B",
    notes:
      "Added in Commanders Pt. 2 (June 28, 2026). Community reports ~30% drop weight on Oil Rig. Required commander for Rebirth 8 (July 13, 2026 patch). Ability wording from Hoplas2 July 4 video (46HqVOGK57o); verify whether 58% / 14s scales by commander level.",
    eventMap: "Oil Rig",
    acquireSummary:
      "Farm Oil Rig while the event is live — community reports ~30% drop weight for Overclocker vs Looter.",
    acquireSteps: [
      "Check that Oil Rig is the live event map before grinding.",
      "Clear Oil Rig targets and take the last hit on the Overclocker spawn.",
      "Community drop reports put Overclocker around ~30% on Oil Rig (Looter ~70%); treat weights as unverified.",
      "Shop purchases and Mystery Supply Drops are backup options when Oil Rig is not rotating.",
    ],
    rebirth8Note:
      "Overclocker is reported as part of the Rebirth 8 unlock gate with Barrier and the final Index nuke tier. Confirm the exact in-game UI before spending Robux or cash.",
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
      "Reign of Commander — about every 2 minutes, buffs a random commander on your plot by 1.5× for 60 seconds and retaliates against attackers with a warhead that lasts 20 seconds (damage and cash-cut numbers may scale by level).",
    bestFor: "War lobbies — retaliation during formal wars and counter-raids",
    priority: "?",
    notes:
      "LTM reward from Military Compound (July 4, 2026). Hoplas2's July 4 video (46HqVOGK57o) read 56% cash cut / nuke damage, while the July 10 war video (qZHP32lDOWc) summarized the retaliation effect. Keep exact numbers pending until matched to an in-game card level.",
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
  // --- Advanced Warfare Pack (July 13, 2026) ---
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
    ability:
      "Sends a supply pulse across your commanders, resupplying 2 commanders, reducing their cooldown by 10%, and boosting their effectiveness.",
    bestFor: "Commander-heavy builds — cooldown support for Overclocker and other active passives",
    priority: "B",
    notes:
      "Added July 13, 2026. Advanced Warfare Commander Pack reported 10% drop rate. Ability wording from Kream Blox July 11 video (g-Tc884OqL4); verify level scaling in-game.",
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
  // --- Contract Board & Town Square patch (July 18, 2026) ---
  {
    name: "Welder",
    rarity: "Common",
    role: "automation",
    ability: "Contract Board / Town Square patch unit — ability text pending in-game verification.",
    bestFor: "New Common pool unit — verify the card after the July 18, 2026 patch",
    priority: "?",
    notes: "Added July 18, 2026 alongside Town Square and Contract Board content.",
    pending: true,
    acquireSummary:
      "Welder (Common) was added July 18, 2026 — check map spawns, Shop, Mystery Supply Drops, and event pools after the Contract Board patch.",
    acquireSteps: [
      "Added in the July 18, 2026 Contract Board / Town Square patch.",
      "Exact spawn or Shop path is still pending in-game verification on this wiki.",
      "Mystery Supply Drops can roll commanders from available pools — worth clearing while grinding contracts.",
    ],
  },
  {
    name: "Forklift Operator",
    rarity: "Rare",
    role: "automation",
    ability: "Contract Board / Town Square patch unit — ability text pending in-game verification.",
    bestFor: "New Rare pool unit — verify the card after the July 18, 2026 patch",
    priority: "?",
    notes: "Added July 18, 2026 alongside Town Square and Contract Board content.",
    pending: true,
    acquireSummary:
      "Forklift Operator (Rare) was added July 18, 2026 — check map spawns, Shop, Mystery Supply Drops, and event pools after the Contract Board patch.",
    acquireSteps: [
      "Added in the July 18, 2026 Contract Board / Town Square patch.",
      "Exact spawn or Shop path is still pending in-game verification on this wiki.",
      "Mystery Supply Drops can roll commanders from available pools — worth clearing while grinding contracts.",
    ],
  },
  {
    name: "Diplomat",
    rarity: "Legendary",
    role: "income",
    ability:
      "Ability card text is still unverified publicly (no creator card read found as of July 22, 2026). Official patch notes only confirm Diplomat is Legendary and Contract Board-exclusive — not the passive numbers.",
    bestFor:
      "Players grinding the Contract Board for the rotating Unique Commander reward (first exclusive in that slot)",
    priority: "A",
    notes:
      "Added July 18, 2026. Role tag on this wiki is provisional until the in-game card is verified. Roblox event listings labeled the window “CONTRACTS!” (about July 18–25/26, 2026 PT) as quests that unlock new commanders, with Saturday Admin Abuse called out in the same blurb.",
    pending: true,
    eventMap: "Contract Board",
    acquireSummary:
      "Complete Contract Board Daily, Weekly, and Monthly contracts for Unique Commander progress, then claim Diplomat after finishing every available contract on the board (Unique slot rotates every 14 days).",
    acquireSteps: [
      "Open the Contract Board in-game (July 18, 2026 patch). It has 5 Daily slots, 5 Weekly slots, and 2 Monthly slots — each refreshes on its own timer.",
      "Clear contracts as they refresh. Official launch Daily set: Nuisance, Doomsday, Backstabber, Military Money Moves, I'm The Captain Now.",
      "Weekly set: Damage Do-er, Peacekeeper, Triple Threat, Credit Stealer, Leader.",
      "Monthly rotation (3 contracts into 2 slots): Ultimate Arsenal, Damage Do-er-er, Nuclear Threat.",
      "Rewards from contracts: cash, temporary boosts, permanent stat boosts, and Unique Commander progress.",
      "The Unique Commander contract rotates every 14 days and only becomes claimable after all available contracts are completed — Diplomat is the first Contract Board-exclusive Unique Commander.",
      "Diplomat is not a normal map-boat capture and is not listed as an Advanced Warfare Pack unit; treat Contract Board as the primary path.",
    ],
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
    how: "Harbor, Oil Rig, Downtown, Shipping Port, Military Compound, Military Base, and Town Square rotate as event or spawn targets. Beat the event or roll the drop pool — Military Compound runs every ~2 hours and drops Stalker (Legendary) when cleared. Town Square is a Tier 1 map with 150,000 HP.",
    tip: "Event commanders only appear during the active window. Check which map is live before grinding.",
  },
  {
    id: "advanced-warfare-pack",
    title: "Roll the Advanced Warfare Commander Pack",
    how: "Open the Shop and buy the Advanced Warfare Commander Pack (added July 13, 2026). Reported drop rates: Grifter 35%, Scout 30%, Sapper 20%, Medic 10%, Recon 4.5%, Drone 0.5%.",
    tip: "Recon can also spawn through the base commander pool per the July 13 patch notes — ability text is still pending verification on this wiki.",
  },
  {
    id: "contract-board",
    title: "Complete Contract Board contracts",
    how: "The Contract Board (July 18, 2026) has 5 Daily, 5 Weekly, and 2 Monthly slots. Completing contracts grants cash, temporary boosts, permanent stat boosts, and progress toward a Unique Commander that rotates every 14 days.",
    tip: "Diplomat is the first Contract Board-exclusive Unique Commander. Claim it only after finishing all available contracts on the board.",
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
