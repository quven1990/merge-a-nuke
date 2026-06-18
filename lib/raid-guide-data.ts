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
