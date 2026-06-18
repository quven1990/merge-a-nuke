export type CodeEntry = {
  code: string
  reward: string
  source: string
  status: "Active" | "Reported"
  highlight?: string
}

export const ACTIVE_CODES: CodeEntry[] = [
  {
    code: "ATOMIC",
    reward: "$10,000 + 20 nukes",
    source: "RoCodes & Pocket Tactics (June 2026)",
    status: "Active",
    highlight: "Best nuke reward",
  },
  {
    code: "UPDATE2",
    reward: "$10,000 + 10 nukes",
    source: "RoCodes, PCGamesN & community trackers",
    status: "Active",
  },
  {
    code: "BOOM",
    reward: "$5,000",
    source: "Official Roblox game description",
    status: "Active",
  },
]
