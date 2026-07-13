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
      "Naval event city from Commanders Pt. 2. Rotates as a separate PvE target from your base and the center city.",
    exclusiveCommanders: "Carrier (Admiral) plus a second event-exclusive unit",
  },
  {
    name: "Oil Rig",
    summary:
      "Offshore event map from Commanders Pt. 2. Spawns on rotation with its own destructible targets and commander drops.",
    exclusiveCommanders: "Apache (Admiral) plus a second event-exclusive unit",
  },
  {
    name: "Military Compound",
    summary:
      "Timed LTM event added July 4, 2026. Runs every ~2 hours — clear the compound to spawn Stalker (Legendary).",
    exclusiveCommanders: "Stalker (Legendary, limited-time)",
  },
  {
    name: "Military Base (Tier 2)",
    summary:
      "Tier-2 military event map with 8 new destructibles. Added in the July 4, 2026 patch alongside the LTM rotation.",
    exclusiveCommanders: "Commander drops still being confirmed in-game",
  },
] as const

export const EVENT_MAP_GUIDE = {
  title: "Event maps & timed events",
  summary:
    "Beyond PvP bases and the center city, rotating event maps — Harbor, Oil Rig, Military Compound, and Military Base — pay exclusive commander drops when you clear them.",
  points: [
    "Military Compound runs on a ~2-hour timer and drops Stalker (Legendary) after a successful clear.",
    "Military Base tier 2 adds 8 new destructibles — bring high-tier nukes like you would for Harbor or the center city.",
    "Harbor and Oil Rig still rotate with Admiral-rarity exclusives from Commanders Pt. 2.",
    "The July 4 event also spawned Uncle Sam (Common) during the holiday window — check if it returns on future events.",
  ],
  destructionPhysics:
    "Event maps use the same destruction physics as Commanders Pt. 2 — aim at structures directly so you can see what connected.",
} as const

export const WAR_MECHANICS = {
  title: "War declarations (updated July 13, 2026)",
  summary:
    "PvP escalates into formal wars with cash on the line. Use the Declare War button or hit the same player 3 times — only one active war per player.",
  points: [
    "Use the Declare War button on the redesigned targeting UI, or attack the same player 3 times for an automatic war declaration.",
    "War score tracks progress — reach 100% to win a standard war. The winner takes 50% of the loser's cash (July 4 rules still apply to non-betrayal wars).",
    "You can only participate in one war at a time.",
    "The targeting UI now shows avatar, username, shield status, diplomatic status (Friendly / Neutral / Hostile), Ally, and Declare War.",
    "Nukes on a target's plot are highlighted more clearly, especially on lower graphics settings.",
    "Lock your base and pick targets carefully — wars raise the stakes beyond a single raid.",
  ],
} as const

export const ALLIES_MECHANICS = {
  title: "Allies & betrayal wars",
  summary:
    "The July 13, 2026 patch adds in-server alliances with a shared income boost — and harsh penalties for attacking an ally.",
  points: [
    "Send alliance requests to other players in your server. While allied, both players receive +10% cash income.",
    "Attacking an allied player immediately cancels the alliance and declares war between both players.",
    "Betrayal wars use different war score targets: the betraying attacker must reach 1,000% war score; the defending ally only needs 500%.",
    "If the betrayer wins, they receive 25% of the defender's cash. If the betrayer loses, they lose 75% of their own cash.",
    "Friendly, Neutral, and Hostile diplomatic status icons appear on the targeting UI — check status before you launch.",
  ],
} as const

export const SUPPLY_DROPS = {
  title: "Mystery Supply Drops",
  summary:
    "Random commander loot crates that spawn throughout the map during the July 4, 2026 update.",
  points: [
    "A Mystery Supply Drop has a 50% chance to spawn every 3 minutes.",
    "Destroy the drop to roll a random commander from all available pools in the game.",
    "RNG-heavy but passive — worth clearing while waiting for Military Compound or center city timers.",
  ],
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
