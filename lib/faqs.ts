import { REDEEM_FAQ_ANSWER, REDEEM_SHORT_PATH } from "@/lib/redeem-guide-data"
import { SITE_URL } from "@/lib/site"

export const FAQS = [
  {
    q: "What is Merge a Nuke?",
    a: "Merge a Nuke is a Roblox game by Nuke The Game where you merge bombs into stronger nukes, earn passive cash (even offline), raid other bases, and lock your base to stay safe. This site is a fan-made guide to help you progress faster.",
  },
  {
    q: "What is the active code for Merge a Nuke?",
    a: `As of June 18, 2026, try ATOMIC first ($10,000 + 20 nukes), then UPDATE2 ($10,000 + 10 nukes), then BOOM ($5,000). Redeem via ${REDEEM_SHORT_PATH}. Full list: ${SITE_URL}/codes`,
  },
  {
    q: "How do I redeem codes?",
    a: `${REDEEM_FAQ_ANSWER} Try ATOMIC, UPDATE2, and BOOM in that order for the biggest rewards.`,
  },
  {
    q: "Why is a code not working?",
    a: "Codes fail when they have expired, were already redeemed, or were typed wrong. Try ATOMIC first, then UPDATE2 ($10,000 + 10 nukes) and BOOM ($5,000) as backups. Rejoin the game if you are on an old session.",
  },
  {
    q: "Do nukes earn cash while offline?",
    a: "Yes. The official game description says your nukes earn cash every second, even while you are offline. Merge to your highest tier and lock your base before logging off so raids do not wipe your gains.",
  },
  {
    q: "How do I merge nukes?",
    a: `Drag two nukes of the same merge level together — only identical tiers combine (2+2=4, 4+4=8, and so on). High-tier nukes cannot merge with lower bombs. Step-by-step guide: ${SITE_URL}/beginner-guide#how-to-merge`,
  },
  {
    q: "What Store upgrades should I buy first?",
    a: `Community gameplay points to Spawn Speed first (a few thousand cash), then Spawn Tier so new nukes spawn at level 2+, then Max Spawn. Upgrade Lock Base duration before long merge sessions. Full priority list: ${SITE_URL}/upgrades`,
  },
  {
    q: "What is the center city in Merge a Nuke?",
    a: "The map center has a PvE city target separate from player bases. It opens on a long cooldown (often 40+ minutes in gameplay footage), pays large rewards, and works best with your highest-damage nukes. It is not the same as raiding another player.",
  },
  {
    q: "What are commanders in Merge a Nuke?",
    a: `Commanders are special units you equip for passive buffs — auto-merging (Salvager), cash boosts (Spotter), or +15% damage (Sovereign). Commanders Pt. 2 added the new Admiral rarity and 8 more units. See all 15 types and how to capture them: ${SITE_URL}/commanders`,
  },
  {
    q: "How does raiding work?",
    a: `Launch your nukes at another player's base to steal cash — but only if their Lock Base shield is down. Getting raided can wipe nukes from your board. PvP and center city guide: ${SITE_URL}/raid`,
  },
  {
    q: "When should I start raiding?",
    a: "Wait until your income is stable and your base is locked. Raiding too early can stall your growth, so build a reliable economy first.",
  },
  {
    q: "How do I protect my base?",
    a: "Lock your base before going offline, keep your layout organized, and safeguard your highest-tier nukes so you don't lose hard-earned progress.",
  },
  {
    q: "What should beginners upgrade first?",
    a: "Focus on income upgrades early. A higher earning rate funds everything else, so prioritize cash flow before stronger nukes or cosmetic buys.",
  },
  {
    q: "When does Merge a Nuke update?",
    a: "Nuke The Game ships new content every Friday — codes, balance tweaks, and new nukes are possible. Join the official Roblox group and check this wiki after each Friday patch.",
  },
  {
    q: "Can I play Merge a Nuke on mobile?",
    a: "Yes. Merge a Nuke supports Desktop, Mobile, Tablet, and Console per the official Roblox game page. On mobile, tap and drag to merge; zoom out if your grid feels cramped.",
  },
  {
    q: "Is rebirth worth it?",
    a: "Yes — rebirth is required to unlock the highest Index nukes beyond the mid-game cap (community runs report ~35 tiers before rebirth, with more after). Rebirth trades your current board progress for a permanent boost and access to those higher tiers, so only do it once growth has clearly stalled — not for a small early bonus. Check the exact reset and bonus details in-game, as they can change between patches.",
  },
  {
    q: "Is mergeanuke.site official?",
    a: "No. mergeanuke.site is an independent fan-made Merge a Nuke Wiki. It is not affiliated with Roblox Corporation or Nuke The Game. For official news, use the Roblox game page and developer group.",
  },
] as const

const HOME_FAQ_TEASER_QUESTIONS = [
  "What are commanders in Merge a Nuke?",
  "Is rebirth worth it?",
  "How does raiding work?",
] as const

export function getHomeFaqTeaser() {
  return HOME_FAQ_TEASER_QUESTIONS.map((question) => {
    const item = FAQS.find((faq) => faq.q === question)
    if (!item) throw new Error(`Missing home FAQ teaser: ${question}`)
    return item
  })
}
