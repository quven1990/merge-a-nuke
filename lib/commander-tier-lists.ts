import { getCommanderPath, type Commander } from "@/lib/commanders-data"

export type CommanderTierCategory = "pvp" | "income" | "event"

export type CommanderTierEntry = {
  slug: string
  name: string
  tier: "S" | "A" | "B" | "C"
  summary: string
  pending?: boolean
}

function entry(cmd: Pick<Commander, "name">, tier: CommanderTierEntry["tier"], summary: string, pending?: boolean): CommanderTierEntry {
  const slug = cmd.name.toLowerCase().replace(/\s+/g, "-")
  return { slug, name: cmd.name, tier, summary, pending }
}

/** PvP / base raiding — verified units ranked above pending community reports. */
export const COMMANDER_TIER_PVP: CommanderTierEntry[] = [
  entry({ name: "Siege Breaker" }, "S", "Weakens lock timers and buffs your next nuke — best dedicated PvP epic."),
  entry({ name: "Artillery" }, "A", "Retaliation punishes raiders and shaves their lock timer."),
  entry({ name: "Carrier" }, "A", "Airstrike adds follow-up damage and cuts base lock timers after hits."),
  entry({ name: "Gunner" }, "B", "Flat PvP damage boost — pairs well with Siege Breaker."),
  entry({ name: "Looter" }, "B", "Scorched Earth steals enemy plot cash during raids."),
  entry({ name: "Sovereign" }, "B", "+15% damage everywhere; auto-city rate nerfed July 4 but still strong."),
  entry({ name: "Apache" }, "A", "Admiral M.A.D. offensive passive — details pending verification.", true),
]

/** Passive income and automation. */
export const COMMANDER_TIER_INCOME: CommanderTierEntry[] = [
  entry({ name: "Spotter" }, "S", "Flare cash boost every 30s — best rare for scaling income."),
  entry({ name: "Salvager" }, "A", "Auto-merges lowest nukes every minute — essential early automation."),
  entry({ name: "Broker" }, "B", "Dividends passive income bonus on Downtown drops.", true),
  entry({ name: "Engineer" }, "B", "Upgrades worst nuke every 2 minutes — strong for AFK sessions."),
  entry({ name: "Foreman" }, "C", "Hammer Time automation from Shipping Port — less value when fully maxed.", true),
]

/** Event maps, LTM windows, and rare spawns. */
export const COMMANDER_TIER_EVENT: CommanderTierEntry[] = [
  entry({ name: "Carrier" }, "S", "Harbor Admiral drop — jets extend city and PvP pressure."),
  entry({ name: "Stalker" }, "A", "Military Compound Legendary reward after clearing the LTM.", true),
  entry({ name: "Apache" }, "A", "Ultra-rare Admiral (~0.05% map spawn after July 4 nerf).", true),
  entry({ name: "Looter" }, "B", "Oil Rig rare drop with Scorched Earth raid income."),
  entry({ name: "Uncle Sam" }, "C", "July 4 holiday common — grab while the event window is live.", true),
]

export const COMMANDER_LOADOUTS = [
  {
    id: "pvp-raider",
    title: "Base raider",
    picks: ["Gunner", "Siege Breaker", "Artillery"],
    note: "Stack damage and lock-timer cuts. Re-lock immediately after you launch — attacking drops your shield.",
  },
  {
    id: "city-farmer",
    title: "City / AFK farmer",
    picks: ["Spotter", "Sovereign", "Salvager"],
    note: "Spotter flares multiply city payouts; Sovereign still adds passive damage (auto-rate nerfed July 4).",
  },
  {
    id: "event-grind",
    title: "Event map grind",
    picks: ["Carrier", "Looter", "Apache"],
    note: "Rotate Harbor, Oil Rig, and Military Compound timers. Bring your highest-tier nukes for clears.",
  },
] as const

export function getCommanderTierHref(name: string) {
  return getCommanderPath({ name })
}
