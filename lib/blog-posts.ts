export type BlogSource = {
  label: string
  url: string
  /** Optional note, e.g. publish date or channel */
  note?: string
}

export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; title: string; text: string }

export type BlogPost = {
  slug: string
  title: string
  description: string
  published: string
  updated: string
  tldr: string[]
  sections: BlogSection[]
  sources: BlogSource[]
  /** Verified wiki pages this post links to — no new mechanics beyond sources */
  relatedLinks: { label: string; href: `/${string}` }[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-wars-work-july-2026",
    title: "How Wars Work in Merge a Nuke (July 2026)",
    description:
      "War declarations in Merge a Nuke: attack a player 3 times, reach 100% war score, and the winner takes 50% of the loser's cash. Commander loadouts and caveats from Hoplas2 gameplay footage.",
    published: "2026-07-11",
    updated: "2026-07-11",
    tldr: [
      "The July 2026 patch adds formal wars: hit the same player 3 times to declare war.",
      "At 100% war score, the winner receives 50% of the loser's cash (per in-game UI in Hoplas2's video).",
      "Hoplas2 ran Siege Breaker, Stalker, Sovereign, and Carrier for shield-breaking — ability numbers in the video may differ from your commander level; verify on the card.",
      "Wars can flip unexpectedly, and a post-war cooldown can block repeat attacks on the same player.",
    ],
    sections: [
      {
        type: "p",
        text: "This article summarizes the war system and one high-end PvP loadout exactly as shown in Hoplas2's July 10, 2026 Roblox video — not speculation beyond that footage and our existing raid guide. If a detail is not spoken on-screen or already on this wiki, it is marked as unverified below.",
      },
      {
        type: "h2",
        text: "What the July update adds (from the video)",
      },
      {
        type: "p",
        text: "Hoplas2 describes war as a new feature in the most recent update at the time of recording. The rules stated in the video match what we already document from the July 4, 2026 patch notes:",
      },
      {
        type: "ul",
        items: [
          "Attack the same player three times and the game declares war on them.",
          "War score tracks the fight — reaching 100% makes you the winner.",
          "The winner receives 50% of the loser's cash when war score hits 100%.",
        ],
      },
      {
        type: "p",
        text: "The video's goal is leaderboard PvP: Hoplas2 joins a public server with a maxed base and deliberately picks high-nuke opponents instead of bullying low boards.",
      },
      {
        type: "h2",
        text: "Commanders Hoplas2 equips for war",
      },
      {
        type: "p",
        text: "Before hunting targets, he swaps off income commanders and equips four offense-oriented units. Below is what he reads from the cards on camera — compare with our commander detail pages if your numbers differ (commander level affects some timers).",
      },
      {
        type: "ul",
        items: [
          "Siege Breaker — launches a warhead that weakens the target's lock timer by 20% (video narration). Our Siege Breaker guide lists 10% lock reduction plus 20% damage on the next nuke — confirm on your in-game card.",
          "Stalker — buffs the Reign of Commander on your plot by 1.5× and retaliates against attackers with a warhead that lasts 20 seconds (video narration only; Stalker remains pending card verification on this wiki).",
          "Sovereign — +20% nuke damage, auto-attacks city events, bonus damage to event targets (video narration). Our Sovereign page lists +15% passive damage — likely a level or patch difference; verify in-game.",
          "Carrier — after you hit a player's base or the city, jets scramble, deal damage, and reduce base lock timer by 40% (video narration). Our Carrier guide documents 30s / 40s lock timer cuts at max level, not a percentage — treat the 40% line as unverified wording until you read your card.",
        ],
      },
      {
        type: "callout",
        title: "Do not copy percentages blindly",
        text: "YouTubers sometimes mix lock-timer cuts with damage bonuses. Always read the commander card in your lobby after Friday patches.",
      },
      {
        type: "h2",
        text: "War loop shown in the video",
      },
      {
        type: "ul",
        items: [
          "Pick a server with strong opponents (Hoplas2 targets players with millions or billions of nukes on the board).",
          "Lock your own base before counter-attacking during server-wide events (the silo event interrupts several fights in the video).",
          "Launch repeated nukes at the same locked base — Siege Breaker and Carrier are used to shave shield time before the third hit.",
          "After three hits on one player, the UI announces war (example: “You started a war with …”).",
          "Keep trading hits until war score resolves — Hoplas2 wins one war but still loses half his cash in that fight, which surprises him on camera.",
          "When desperate, he uses the new Launch All Nukes option to dump his entire board on an exposed base.",
        ],
      },
      {
        type: "h2",
        text: "Caveats Hoplas2 hits on camera",
      },
      {
        type: "ul",
        items: [
          "You can lose the cash payout even when you feel ahead — he loses ~50% of his money after a war he thought he was winning.",
          "A cooldown message appears when trying to keep attacking the same opponent immediately after a war (“you were on a cooldown with this guy”).",
          "Launch All Nukes on an unlocked base did not always wipe the board as expected in one clip — treat extreme swings as anecdotal, not guaranteed.",
          "Opponents can leave mid-war or bring friends into the lobby, so public-server wars are messy.",
        ],
      },
      {
        type: "h2",
        text: "What this means for your base",
      },
      {
        type: "p",
        text: "Wars raise the stakes beyond a single raid. If you spam-attack the same player, expect a formal war and a potential 50% cash loss. Lock before you go offline, upgrade Lock Base duration when lobbies turn aggressive, and only declare wars when your economy can absorb a bad outcome — the video is basically a cautionary tale about that last point.",
      },
      {
        type: "p",
        text: "For mechanics we already verify on the wiki (Lock Base shields, raid timing, July 4 patch banner), start with the raid guide and update log rather than this blog alone.",
      },
    ],
    sources: [
      {
        label: "Hoplas2 — I Went to WAR With the #1 Players in Roblox Merge A Nuke…",
        url: "https://www.youtube.com/watch?v=qZHP32lDOWc",
        note: "Published July 10, 2026 · English gameplay",
      },
    ],
    relatedLinks: [
      { label: "Raid & war mechanics", href: "/raid" },
      { label: "July 4 update log", href: "/updates" },
      { label: "Siege Breaker commander", href: "/commanders/siege-breaker" },
      { label: "Stalker commander (pending card)", href: "/commanders/stalker" },
      { label: "Carrier commander", href: "/commanders/carrier" },
      { label: "Sovereign commander", href: "/commanders/sovereign" },
    ],
  },
]

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function getAllBlogSlugs() {
  return BLOG_POSTS.map((post) => post.slug)
}
