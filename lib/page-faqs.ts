import type { SeoPageConfig } from "@/lib/seo-pages"
import { REDEEM_FAQ_ANSWER, REDEEM_SHORT_PATH } from "@/lib/redeem-guide-data"

export type PageFaq = {
  q: string
  a: string
}

export const PAGE_FAQS: Partial<Record<SeoPageConfig["path"], PageFaq[]>> = {
  "/codes": [
    {
      q: "What is the active code for Merge a Nuke?",
      a: `As of June 18, 2026, try ATOMIC first ($10,000 + 20 nukes), then UPDATE2 ($10,000 + 10 nukes), then BOOM ($5,000). Redeem via ${REDEEM_SHORT_PATH}.`,
    },
    {
      q: "How do I redeem Merge a Nuke codes?",
      a: REDEEM_FAQ_ANSWER,
    },
    {
      q: "Why is a Merge a Nuke code not working?",
      a: "Codes fail when expired, already redeemed, or typed incorrectly. Try ATOMIC, then UPDATE2, then BOOM. Rejoin on a fresh session if one code fails.",
    },
    {
      q: "When do Merge a Nuke codes update?",
      a: "Nuke The Game often drops new codes on Fridays. Check this codes page after each weekly patch for updated rewards.",
    },
  ],
  "/beginner-guide": [
    {
      q: "How do I merge nukes in Merge a Nuke?",
      a: "Drag two nukes of the same merge level together — only identical tiers combine (2+2=4, 4+4=8). High-tier nukes cannot merge with lower bombs.",
    },
    {
      q: "What should beginners buy first in the Store?",
      a: "Redeem codes first, then buy Spawn Speed, then Spawn Tier so new nukes spawn at higher levels. See the full upgrade order on the Upgrades guide.",
    },
    {
      q: "When should a new player start raiding?",
      a: "Wait until your income is stable and you can lock your base. Raiding too early can stall growth if you lose merge progress.",
    },
    {
      q: "How do I protect my base as a beginner?",
      a: "Activate Lock Base before merging in busy lobbies and always lock before logging off. Keep your layout tidy so merges stay fast.",
    },
  ],
  "/progression": [
    {
      q: "What is the best early progression path in Merge a Nuke?",
      a: "Codes → Spawn Speed → Spawn Tier → merge toward 16+ → capture a commander (Salvager or Spotter) → lock base → raid only when your economy is stable. Rebirth unlocks higher Index tiers later.",
    },
    {
      q: "When should I merge to higher nuke tiers?",
      a: "Merge low duplicates quickly to free board space, then push toward 16, 32, and 64 once Spawn Tier and income upgrades are online.",
    },
    {
      q: "When should I start raiding in progression?",
      a: "Raid after income upgrades are working and you can lock your base. Early PvP is risky if your board still depends on low-tier spawns.",
    },
    {
      q: "Is rebirth worth it in Merge a Nuke?",
      a: "Yes when growth slows — rebirth unlocks higher Index nukes beyond the mid-game cap (community runs report ~35 tiers before rebirth).",
    },
    {
      q: "When should I get my first commander?",
      a: "After Spawn Speed and Spawn Tier are online — Salvager (Common) auto-merges your grid; Spotter (Rare) boosts cash. Full guide: mergeanuke.site/commanders",
    },
  ],
  "/upgrades": [
    {
      q: "What Store upgrades should I buy first in Merge a Nuke?",
      a: "Spawn Speed first, then Spawn Tier, then Max Spawn. Upgrade Lock Base duration before long merge sessions or offline play.",
    },
    {
      q: "What does Spawn Tier do?",
      a: "It raises the level new nukes spawn at (for example level 1 → level 2 → level 4), skipping weaker early bombs over time.",
    },
    {
      q: "Should free players buy Robux upgrades?",
      a: "Robux boosts are optional. Spawn Speed, Spawn Tier, Max Spawn, and Lock Base carry most free-to-play progression.",
    },
    {
      q: "When should I upgrade Lock Base?",
      a: "Before any long merge session, before going offline, and when other players are raiding nearby — default shield time is short.",
    },
  ],
  "/tier-list": [
    {
      q: "How does the Merge a Nuke tier system work?",
      a: "Merge levels double each step (2→4→8→16→32→64…). Higher merge numbers generally mean stronger nukes and better income.",
    },
    {
      q: "What nuke tier should I aim for before heavy raiding?",
      a: "Community gameplay points to chasing 64+ before committing to heavy PvP, while keeping lower tiers merged away quickly.",
    },
    {
      q: "Is this Merge a Nuke tier list official?",
      a: "No. Names and notes are community-reported from gameplay footage. Cross-check the in-game Index after Friday updates.",
    },
    {
      q: "Why are low merge levels ranked lowest?",
      a: "Level 1–8 bombs earn little cash and raid poorly. Merge them immediately instead of hoarding board space.",
    },
  ],
  "/raid": [
    {
      q: "How does PvP raiding work in Merge a Nuke?",
      a: "Launch nukes at another player's base to steal cash, but only if their Lock Base shield is down. Getting raided can wipe nukes from your board.",
    },
    {
      q: "When should I start raiding?",
      a: "When income is stable, your board has mid-tier nukes, and you can lock before and after attacks. Raiding too early slows growth.",
    },
    {
      q: "What is the center city in Merge a Nuke?",
      a: "A PvE target in the map center with a long cooldown (often 40+ minutes in footage). It pays large rewards and is not the same as player-base PvP.",
    },
    {
      q: "How do I defend my base from raids?",
      a: "Lock before offline play, upgrade Lock Base duration, and avoid leaving high-tier merge chains exposed in public lobbies.",
    },
    {
      q: "What are the Harbor and Oil Rig event maps in Merge a Nuke?",
      a: "Harbor and Oil Rig are two rotating event maps added in the Commanders Pt. 2 update (June 28, 2026). They sit apart from your base and the center city, and each one drops 2 exclusive commanders — the main way to capture the new Admiral-rarity units. Bring your highest-tier nukes, as event targets are tougher than early PvP bases.",
    },
    {
      q: "What changed with destruction physics in Commanders Pt. 2?",
      a: "Commanders Pt. 2 reworked how structures break apart, so buildings now collapse and react to hits with new physics. It's mostly a visual upgrade, but it makes it clearer which targets your nuke actually connected with.",
    },
    {
      q: "How do I skip the nuke launch cooldown when raiding?",
      a: "Fire a nuke before you merge it. Because the copy you launched is already gone, you can immediately combine its twin and fire again, sidestepping most of the reload timer. Remember that launching also drops your own Lock Base shield, so re-lock right after attacking.",
    },
  ],
  "/offline-cash": [
    {
      q: "Do nukes earn cash while offline in Merge a Nuke?",
      a: "Yes. The official Roblox game description says nukes earn cash every second, even while you are offline.",
    },
    {
      q: "How do I maximize offline cash?",
      a: "Merge to your highest practical tier, upgrade income sources, tidy your board, and lock your base before closing the game.",
    },
    {
      q: "Should I lock my base before logging off?",
      a: "Yes. Lock Base protects your island from raids while you are away and helps safeguard merge progress you built offline.",
    },
    {
      q: "What should I spend offline earnings on?",
      a: "Reinvest in Spawn Speed, Spawn Tier, or Max Spawn first so your next session starts with faster income, not cosmetic buys.",
    },
  ],
  "/commanders": [
    {
      q: "What are commanders in Merge a Nuke?",
      a: "Commanders are special units you can equip to buff your nuke output. Each has a passive ability — ranging from auto-merging your lowest nukes (Salvager) to boosting cash income (Spotter) to adding +15% damage across all attacks (Sovereign).",
    },
    {
      q: "What new commanders were added in Commanders Pt. 2?",
      a: "Commanders Pt. 2 added a new Admiral rarity plus 8 units: Broker and Foreman (Common), Artillery, Barrier and Looter (Rare), Overclocker (Epic), and Apache and Carrier (Admiral). A limited-time Conquerors pack adds two more, and the new Harbor and Oil Rig event maps each spawn two event-exclusive commanders. Salvager, Engineer, Gunner and Spotter were converted into ground units.",
    },
    {
      q: "What is the Admiral rarity in Merge a Nuke?",
      a: "Admiral is the new top commander rarity introduced in Commanders Pt. 2. The first two Admiral units are Apache and Carrier. Their exact abilities are pending in-game verification — check back after we confirm them.",
    },
    {
      q: "How do you get commanders in Merge a Nuke?",
      a: "Three ways: defeat a spawned commander on the shared map (last hit wins), purchase one in the Shop with in-game cash or Robux, or earn a free starter commander at certain level milestones.",
    },
    {
      q: "What is the best commander in Merge a Nuke?",
      a: "Sovereign (Legendary) is the strongest overall — it adds +15% nuke damage passively and auto-attacks city events. For income, Spotter (Rare) is the best choice; for new players, Salvager (Common) is the easiest to use.",
    },
    {
      q: "Can another player steal a commander I am trying to capture?",
      a: "Yes. Commanders on the map are captured by whoever lands the killing blow. Attack with your strongest nuke quickly — other players compete for the same commander.",
    },
    {
      q: "How many commanders can I equip at once in Merge a Nuke?",
      a: "Multiple commanders can be active simultaneously. Pair non-overlapping roles for best results — for example Spotter for income and Gunner for PvP raids.",
    },
  ],
}

export function getPageFaqs(path: SeoPageConfig["path"]): PageFaq[] {
  return PAGE_FAQS[path] ?? []
}

export function getPageFaqHeading(path: SeoPageConfig["path"]): string {
  const headings: Partial<Record<SeoPageConfig["path"], string>> = {
    "/codes": "Common questions about Merge a Nuke codes",
    "/beginner-guide": "Common beginner questions",
    "/progression": "Common progression questions",
    "/upgrades": "Common Store upgrade questions",
    "/tier-list": "Common tier list questions",
    "/raid": "Common raid & defense questions",
    "/offline-cash": "Common offline cash questions",
    "/commanders": "Common commanders questions",
  }

  return headings[path] ?? "Common questions"
}
