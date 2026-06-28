export const PVP_RAID_STEPS = [
  {
    title: "Check your launch cooldown",
    desc: "Nukes cannot fire back-to-back instantly. Wait for Attack Ready before committing.",
  },
  {
    title: "Scout the target's shield",
    desc: "If their base is locked, your raid will bounce — pick another target or wait.",
  },
  {
    title: "Pick weaker or unlocked bases",
    desc: "Newer players and open bases are safer bets than maxed locked accounts.",
  },
  {
    title: "Launch and collect stolen cash",
    desc: "Successful hits pay cash based on your nuke tier and what the target was holding.",
  },
  {
    title: "Expect retaliation",
    desc: "Raiding creates enemies. Lock your base or be ready to lose board progress.",
  },
] as const

export const RAID_CONSEQUENCES = [
  "Getting raided can wipe nukes from your board and reset merge progress you were building.",
  "Stronger attackers destroy more — high-tier boards need Lock Base and Nuke Health upgrades.",
  "Raiding too early stalls growth if you lose income nukes and spend cash rebuilding.",
] as const

export const SHIELD_MECHANICS = [
  {
    title: "Lock Base = shield",
    desc: "Activating Lock Base protects your island from other players for a limited time.",
  },
  {
    title: "Short default duration",
    desc: "Early shields last roughly a minute — upgrade Lock Base duration in the Store for longer windows.",
  },
  {
    title: "Cooldown between locks",
    desc: "After a shield expires, you must wait before locking again. Quicker Lock Cooldown helps in busy lobbies.",
  },
  {
    title: "Lock before merging offline",
    desc: "Never leave a full board exposed. One raid can undo a long merge chain.",
  },
] as const

export const ADVANCED_RAID_TACTICS = [
  {
    title: "Fire first, then merge to skip the cooldown",
    desc: "Launch a nuke before you combine it. The copy you fired is already gone, so you can immediately merge its twin and fire again — sidestepping most of the reload timer.",
  },
  {
    title: "Launching drops your own shield",
    desc: "The moment you attack, your Lock Base shield goes down. Hit first, then re-lock — or you'll be wide open right after your own launch.",
  },
  {
    title: "Pick up and hide your best nuke",
    desc: "You can grab and reposition nukes on your board. Move your single highest-tier nuke somewhere safe so one incoming raid can't wipe the unit you worked hardest for.",
  },
  {
    title: "Spread nukes across the launch zone",
    desc: "You can only launch from part of the map, and clustered nukes get cleared together. Keep your board spread out so a single hit doesn't take multiple high-tier units.",
  },
  {
    title: "Aim at buildings when farming the city",
    desc: "Center-city damage only registers on structures, and every hit pays cash (late-game runs report huge payouts per launch). Target buildings directly — the city slowly regains health between hits.",
  },
] as const

export const EVENT_MAPS = [
  {
    name: "Harbor",
    summary:
      "A new event map added in Commanders Pt. 2 (June 28, 2026). It rotates as a separate target from your base and the center city.",
    exclusiveCommanders: "Carrier (Admiral) plus a second event-exclusive unit",
  },
  {
    name: "Oil Rig",
    summary:
      "The second Commanders Pt. 2 event map. Like Harbor, it spawns on rotation and pays its own rewards on top of standard raids.",
    exclusiveCommanders: "Apache (Admiral) plus a second event-exclusive unit",
  },
] as const

export const EVENT_MAP_GUIDE = {
  title: "Event maps: Harbor & Oil Rig (Commanders Pt. 2)",
  summary:
    "Commanders Pt. 2 added two rotating event maps — Harbor and Oil Rig — that each drop 2 exclusive commanders. They are the main way to capture the new Admiral-rarity units.",
  points: [
    "Each event map carries 2 map-exclusive commanders, so clearing both maps is how you collect the new Pt. 2 units.",
    "Event maps rotate in and out — check the map selector when an event window is live so you don't miss the exclusive drops.",
    "Bring your highest-tier nukes: event targets are tuned tougher than early PvP bases, similar to the center city.",
    "Exact spawn timers, rewards, and commander drop rules are still being confirmed in-game — treat the schedule as approximate until verified.",
  ],
  destructionPhysics:
    "Pt. 2 also reworked destruction with new physics, so structures collapse and react to hits differently. It is mostly visual, but it makes it clearer which targets your nuke actually connected with.",
} as const

export const CENTER_CITY_GUIDE = {
  title: "Center City (PvE)",
  summary:
    "The map center has a city target separate from player bases. It opens on a long cooldown, pays huge rewards, and often requires your strongest nukes.",
  points: [
    "Look for Attack Ready on the city — community gameplay shows cooldowns around 40+ minutes between openings.",
    "When the city opens, you have a limited window to launch — prioritize your highest-damage nukes.",
    "City hits can pay far more than early PvP raids; many late-game players farm the city over random players.",
    "Multiple players launching at once can cause missiles to collide mid-air — stagger launches if possible.",
    "City damage scales with nuke tier — late named nukes (Oblivion Maestro, Omega Point, etc.) are built for this.",
  ],
  vsPvp:
    "PvP raids steal from players. Center city is PvE with a timer — different cooldown, different payout, often better for late-game income.",
} as const
