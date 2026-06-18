export const MERGE_RULES = [
  {
    title: "Same level only",
    desc: "You can only merge two nukes of the exact same tier — a 4 with a 4, an 8 with an 8, and so on.",
  },
  {
    title: "Doubles each step",
    desc: "Two level-2 nukes become level 4. Two level-4s become level 8. The merge number doubles every time.",
  },
  {
    title: "No mixing high and low",
    desc: "A high-tier nuke cannot merge with a lower-tier bomb. Drag duplicates together or leave them apart.",
  },
  {
    title: "Clear board space first",
    desc: "A full base slows every decision. Merge the lowest duplicates first to open tiles for new spawns.",
  },
] as const

export const MERGE_STEPS = [
  {
    step: 1,
    title: "Spawn or buy bombs",
    desc: "New nukes appear on your island automatically after Store upgrades, or from code rewards.",
  },
  {
    step: 2,
    title: "Find matching pairs",
    desc: "Look for two nukes with the same level number or identical appearance.",
  },
  {
    step: 3,
    title: "Drag one onto the other",
    desc: "On PC, drag and drop. On mobile, tap and drag. They combine into the next tier up.",
  },
  {
    step: 4,
    title: "Chain upward",
    desc: "Keep merging duplicates toward 16, 32, 64, and beyond. Higher tiers earn more cash per second.",
  },
  {
    step: 5,
    title: "Lock if threatened",
    desc: "If another player is raiding, activate Lock Base before you lose your merge chain.",
  },
] as const

export const MERGE_MISTAKES = [
  "Hoarding many low-tier bombs instead of merging them immediately.",
  "Letting the board fill up so new spawns have nowhere to land.",
  "Trying to combine different tier levels and wondering why nothing happens.",
  "Merging without locking first while other players are actively raiding.",
] as const
