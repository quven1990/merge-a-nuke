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
  | { type: "cta"; title: string; text: string; href: `/${string}`; label: string }

export type BlogCtaLink = {
  label: string
  href: `/${string}`
  primary?: boolean
}

export type BlogEndCta = {
  title: string
  description: string
  links: BlogCtaLink[]
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  published: string
  updated: string
  tldr: string[]
  sections: BlogSection[]
  sources: BlogSource[]
  /** Prominent next-step block before Sources — reduces single-page bounce */
  endCta?: BlogEndCta
  /** Verified wiki pages this post links to — no new mechanics beyond sources */
  relatedLinks: { label: string; href: `/${string}` }[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "merge-a-nuke-tester-application-guide-july-2026",
    title: "Merge a Nuke Tester Application Guide — Requirements, Questions & Deadline",
    description:
      "Merge a Nuke tester applications are open until July 19, 2026 at 06:00. Here is what the official Google Form asks for, what to prepare before applying, and how to write stronger answers without sharing personal details publicly.",
    published: "2026-07-15",
    updated: "2026-07-15",
    tldr: [
      "Tester applications are open until July 19, 2026 at 06:00, but the announcement says they may close early if enough eligible testers apply.",
      "You must be 15+, active, able to attend most test sessions, and professional in your answers.",
      "The form asks for Discord username/ID, Roblox username, age, timezone, motivation, testing experience, availability, devices, and whether you can provide screenshots or clips.",
      "Do not submit through random copied forms. Use the official Google Form linked from the announcement or our Community page.",
    ],
    sections: [
      {
        type: "p",
        text: "Nuke The Game has re-opened tester applications for Merge a Nuke. This is a short application window, so this guide focuses on the official requirements, the questions shown in the Google Form, and how to prepare answers that look useful to a testing team.",
      },
      {
        type: "callout",
        title: "Privacy note",
        text: "Do not post your Discord ID, Roblox username, age, or timezone publicly just to ask for help. Fill those into the official form only. This article summarizes the fields but does not collect applications.",
      },
      {
        type: "h2",
        text: "Deadline and basic requirements",
      },
      {
        type: "ul",
        items: [
          "Applications are listed as open until July 19, 2026 at 06:00.",
          "The announcement says applications may close early if enough eligible candidates are found.",
          "Applicants must be 15+.",
          "Applicants should be active and able to attend a majority of test sessions.",
          "The team asks for effort and professionalism in responses.",
          "Do not ask when results will be announced; the team says updates will be shared when they have them.",
        ],
      },
      {
        type: "h2",
        text: "Personal questions on the form",
      },
      {
        type: "p",
        text: "The first section is basic identity and timezone information so the team can contact you and understand whether your schedule fits test sessions.",
      },
      {
        type: "ul",
        items: [
          "Discord username.",
          "Discord ID.",
          "Roblox username.",
          "Age.",
          "Timezone.",
        ],
      },
      {
        type: "callout",
        title: "Use accurate account info",
        text: "The form warns applicants not to change the username written in the first question until after acceptance. If your Discord or Roblox name changes mid-review, staff may not be able to match your application.",
      },
      {
        type: "h2",
        text: "Attribute questions: what they want to learn",
      },
      {
        type: "p",
        text: "The next section asks why you want the tester role and why the team should choose you. Short one-word answers are unlikely to help; the form explicitly asks applicants to be elaborate.",
      },
      {
        type: "ul",
        items: [
          "What inspired you to apply for the tester position at Merge a Nuke?",
          "Why should the team choose you over other applicants?",
          "Have you ever tested a game before? If yes, provide details.",
        ],
      },
      {
        type: "p",
        text: "A stronger answer should mention how often you play, what kinds of bugs you notice, whether you can reproduce issues, and whether you can explain steps clearly. You do not need to pretend to be a developer; reliable reporting and patience are more important than hype.",
      },
      {
        type: "h2",
        text: "Testing availability questions",
      },
      {
        type: "p",
        text: "The form also checks whether you can actually show up for tests and provide useful evidence when something breaks.",
      },
      {
        type: "ul",
        items: [
          "Current in-game playtime, or an estimate if you do not know.",
          "How many hours per week you can dedicate to testing Merge a Nuke.",
          "Times of day when you are unavailable.",
          "Devices you play on: PC, PC with controller, mobile, console, or other.",
          "Whether you can take screenshots and record clips.",
        ],
      },
      {
        type: "callout",
        title: "Screenshots and clips matter",
        text: "The form says clipping bugs and console logs can be crucial for bug testing. If you can record short clips or screenshots, say so honestly and explain what device you use.",
      },
      {
        type: "h2",
        text: "End of application notes",
      },
      {
        type: "p",
        text: "The final section reminds applicants to answer honestly, put effort into the application, and ask any remaining question in the final field. It also says accepted testers are obligated to be in the Merge a Nuke server and the Nuke The Game Roblox group.",
      },
      {
        type: "ul",
        items: [
          "Use the final field for relevant context only, such as your strongest availability window or testing experience.",
          "Do not use the final field to ask when results will be announced.",
          "Make sure you can join or remain in the required Discord server and Roblox group.",
          "Review your answers before submitting; tester applications reward clarity more than speed.",
        ],
      },
      {
        type: "h2",
        text: "Should you apply?",
      },
      {
        type: "p",
        text: "Apply if you actively play Merge a Nuke, can attend tests, and are willing to report bugs with clear steps. Do not apply just for early access, leaks, or perks. A good tester helps the developers find confusing UI, broken commander behavior, economy bugs, device-specific issues, and update regressions before they reach everyone.",
      },
    ],
    sources: [
      {
        label: "Merge a Nuke tester application Google Form",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdA3i-vYtQbARrT3vVJ5Rll-yoCwhZc_DFVbpEwzbwApXrE-w/viewform",
        note: "Official application form shared with the July 2026 tester applications announcement",
      },
    ],
    endCta: {
      title: "Apply through the official link",
      description:
        "Use the Community page to open the official tester form and official Roblox links. This wiki does not review applications or announce results.",
      links: [
        { label: "Community links & tester form", href: "/community", primary: true },
        { label: "Latest update log", href: "/updates" },
        { label: "Rebirth 8 guide", href: "/blog/rebirth-8-requirements-overclocker-barrier-july-2026" },
        { label: "All commanders", href: "/commanders" },
      ],
    },
    relatedLinks: [
      { label: "Community links & tester form", href: "/community" },
      { label: "Update log", href: "/updates" },
      { label: "Rebirth 8 requirements", href: "/blog/rebirth-8-requirements-overclocker-barrier-july-2026" },
      { label: "Raid & allies guide", href: "/raid" },
    ],
  },
  {
    slug: "rebirth-8-requirements-overclocker-barrier-july-2026",
    title: "Merge a Nuke Rebirth 8 Requirements — Overclocker, Barrier & New Nukes",
    description:
      "Kream Blox reaches the July 2026 Rebirth 8 update, shows the Overclocker requirement path, rolls the Advanced War Pack, and maxes the new glitched-error nuke tier. Includes notes on the Barrier/Overclocker wording mismatch.",
    published: "2026-07-14",
    updated: "2026-07-14",
    tldr: [
      "Kream Blox opens the new update already maxed at the old top tier, then checks the Rebirth panel and says it requires owning Barrier or Overclocker before he can rebirth.",
      "He finds Overclocker through commander hunting, sinks it, and immediately says he can rebirth; this is video evidence that Overclocker can satisfy the requirement in that session.",
      "The patch note text we have says Rebirth 8 requires the final nuke tier, Overclocker, and Barrier, so treat the Barrier/Overclocker wording as something to verify on your own in-game Rebirth panel.",
      "Advanced War Pack appears in the same video with Medic, Sapper, Grifter, Scout, and Recon names shown or rolled; only Medic's card text is read clearly enough to quote.",
    ],
    sections: [
      {
        type: "p",
        text: "This article uses Kream Blox's July 11 gameplay as the main source and a short Rebirth clip as a secondary source. It is not a full Advanced Warfare commander guide: if the video does not read a card or show a mechanic clearly, we keep that detail pending on the wiki.",
      },
      {
        type: "h2",
        text: "What the video confirms about Rebirth 8",
      },
      {
        type: "p",
        text: "Kream starts with the previous top-tier base already filled, then the server restarts into the new update. He opens the Rebirth requirement and says the update will unlock more cash and new rocket tiers, but he needs to own Barrier or Overclocker before he can take the max rebirth.",
      },
      {
        type: "ul",
        items: [
          "He initially cannot rebirth because he does not have Overclocker.",
          "He later finds an Overclocker commander, uses Launch All Nukes against it, sinks it, and then says he can rebirth.",
          "After taking the rebirth, he starts over and equips Overclocker because faster spawning helps the post-rebirth rebuild.",
          "He later maxes Overclocker and reads 58% faster spawning nukes with a 1 minute 46 second cooldown in his session.",
        ],
      },
      {
        type: "callout",
        title: "Requirement wording mismatch",
        text: "The patch notes we have say Rebirth 8 requires the final nuke tier, Overclocker, and Barrier. Kream's narration says Barrier or Overclocker, and in his run Overclocker appears to satisfy the gate. Until we capture the Rebirth panel directly, check your own in-game UI before assuming Barrier is optional.",
      },
      {
        type: "h2",
        text: "Overclocker path: why it matters",
      },
      {
        type: "p",
        text: "Overclocker is more than a collection item after this patch. It is tied to the Rebirth 8 gate and also speeds up the rebuild after a reset. In the video, once Kream rebirths, he uses Overclocker to recover through early tiers faster and repeatedly calls it strong during the climb back up.",
      },
      {
        type: "ul",
        items: [
          "Video route: hunt Overclocker as an Epic commander, sink it, then return to the Rebirth panel.",
          "Post-rebirth use: equip Overclocker to speed nuke spawning during the weak early rebuild.",
          "Maxed read in the video: 58% faster spawning nukes, 1:46 cooldown. Our commander page still labels the exact scaling as level-dependent until we have clean card screenshots.",
        ],
      },
      {
        type: "h2",
        text: "Advanced War Pack details shown",
      },
      {
        type: "p",
        text: "Kream opens the store and sees an Advanced War Pack with different names from older packs. He mentions Sapper, Recon, and Medic in the pack, then rolls Medic, Sapper, Grifter, and Scout during the video.",
      },
      {
        type: "ul",
        items: [
          "Medic card text he reads: sends a supply pulse across, resupplying two commanders, reducing their cooldown by 10%, and boosting their effectiveness.",
          "Sapper, Grifter, and Scout are rolled or named, but he does not read their card text in enough detail to verify abilities.",
          "He does not pull Drone or Recon's full card in the usable transcript, so both remain pending on this wiki.",
        ],
      },
      {
        type: "h2",
        text: "Allies and war details from the run",
      },
      {
        type: "p",
        text: "The same run briefly shows the new social/war layer. Another player sends an ally request, Kream accepts, then he gets pulled into war and notes that he cannot lock his base while at war.",
      },
      {
        type: "ul",
        items: [
          "Ally request appears in normal gameplay: \"Nico wants to ally\".",
          "During war, he tries to lock and says you cannot lock during war.",
          "He uses the Declare War button later, but one target is on cooldown.",
          "These are useful observations, but the full betrayal-war numbers still come from the July 13 patch notes rather than this video.",
        ],
      },
      {
        type: "h2",
        text: "New nuke ceiling shown",
      },
      {
        type: "p",
        text: "After the Rebirth 8 climb, Kream shows new rocket tiers and eventually reaches what he calls the new best nuke. He describes it as a glitched-error style nuke, tier 590 quintillion, doing 118,000 damage in his run.",
      },
      {
        type: "callout",
        title: "Do not treat one run as a final tier table",
        text: "The video is good evidence that Rebirth 8 opens new top-end rocket tiers, but it is not a clean Index capture for every new nuke name. Keep using the in-game Index for exact names, cash/sec, and damage after balance patches.",
      },
    ],
    sources: [
      {
        label: "Kream Blox — Unlocking EVERYTHING in Merge a Nuke Update!",
        url: "https://www.youtube.com/watch?v=g-Tc884OqL4",
        note: "Published July 11, 2026 · Rebirth 8 / Overclocker / Advanced War Pack gameplay",
      },
      {
        label: "Poison React — Merge a Nuke! rebirth #roblox #robloxshorts",
        url: "https://www.youtube.com/shorts/LtuQV9XapvY",
        note: "Published June 28, 2026 · short Rebirth clip; no detailed card text",
      },
    ],
    endCta: {
      title: "Plan your Rebirth 8 run",
      description:
        "Use the progression checklist for the reset timing, then open the commander pages for Overclocker, Barrier, and the Advanced Warfare units that are still pending.",
      links: [
        { label: "Rebirth checklist", href: "/progression#rebirth", primary: true },
        { label: "Overclocker commander", href: "/commanders/overclocker" },
        { label: "Barrier commander", href: "/commanders/barrier" },
        { label: "Medic commander", href: "/commanders/medic" },
        { label: "Advanced Warfare update log", href: "/updates" },
        { label: "All commanders", href: "/commanders" },
      ],
    },
    relatedLinks: [
      { label: "Progression & Rebirth guide", href: "/progression#rebirth" },
      { label: "Overclocker commander", href: "/commanders/overclocker" },
      { label: "Barrier commander", href: "/commanders/barrier" },
      { label: "Medic commander", href: "/commanders/medic" },
      { label: "July 13 update log", href: "/updates" },
      { label: "Raid & allies guide", href: "/raid" },
    ],
  },
  {
    slug: "carrier-looter-artillery-hoplas2-june-2026",
    title: "Carrier, Looter & Artillery — In-Game Cards (Hoplas2, June 2026)",
    description:
      "Hoplas2 reads the Looter, Artillery, and Carrier commander cards on camera: Scorched Earth siphon, Retaliation shells, and Carrier Airstrike jets. Includes map captures vs 0.5% Conquerors pack drop.",
    published: "2026-07-12",
    updated: "2026-07-12",
    tldr: [
      "Hoplas2 captures Looter on the map (last hit) and reads Scorched Earth: siphon 0.1 of enemy plot cash for 5 seconds — matches our 10% wording.",
      "Artillery card on camera: Retaliation destroys tier 19 and below, 50% max HP above, cuts active base lock by 40%.",
      "Carrier Airstrike: jets after hitting a base or city; −30s lock timer base, −40s at max level. He pulls Carrier from a Conquerors pack at a stated 0.5% rate.",
      "Foreman spawns on the map in the same session but he does not read its card — still pending on this wiki.",
    ],
    sections: [
      {
        type: "p",
        text: "This post quotes only what Hoplas2 shows or reads in his June 30, 2026 video while hunting Commanders Pt. 2 units — not script sites or guessed stats. Where his narration matches our commander detail pages, we link there; where it adds new context (pack odds, bugs), we label the source.",
      },
      {
        type: "h2",
        text: "What Hoplas2 is trying to do in the video",
      },
      {
        type: "p",
        text: "He already has a maxed base and max rebirth. The Commanders Pt. 2 index adds a new legendary entry plus two Admiral slots he is missing. He joins public servers to capture map spawns, buys Conquerors / Admiral packs with Robux, and reads new commander cards as he unlocks them.",
      },
      {
        type: "h2",
        text: "Looter — map capture + card text",
      },
      {
        type: "ul",
        items: [
          "He wins a map fight for a spawned commander and unlocks Looter (last hit on the shared spawn).",
          "On-camera ability name: Scorched Earth.",
          "Card wording he reads: launches an explosive round onto a random enemy plot; fragments siphon 0.1 of the cash generated there for 5 seconds.",
          "Our Looter page lists 10% for 5 seconds — 0.1 matches 10%.",
        ],
      },
      {
        type: "h2",
        text: "Artillery — map capture + card text",
      },
      {
        type: "ul",
        items: [
          "He picks up Artillery from another map spawn after the Looter fight.",
          "On-camera ability name: Retaliation.",
          "Card wording he reads: when attacked, fires two shells at a random enemy nuke; instantly destroys nukes tier 19 and below; deals 50% max HP above that; also cuts an active base lock timer by 40%.",
          "This matches the verified text already on mergeanuke.site/commanders/artillery.",
        ],
      },
      {
        type: "h2",
        text: "Carrier (Admiral) — Conquerors pack + card text",
      },
      {
        type: "ul",
        items: [
          "He buys multiple Conquerors / Admiral packs (20, then 10 more in the video) and mostly pulls commons such as Gunner and Interceptor.",
          "He calls Carrier a 0.5% pull when it drops from the pack — treat that as one video source, not a verified global drop table.",
          "Card wording he reads: after attacking a player's base or the city, fighter jets scramble and strike the target for damage; reduces base lock timer by 30 seconds, or 40 seconds at max commander level.",
          "Our Carrier guide already documents the 30s / 40s lock-timer reduction; Harbor event drops are a separate reported path not shown in this video.",
        ],
      },
      {
        type: "h2",
        text: "Carrier in PvP and city (what the video shows)",
      },
      {
        type: "ul",
        items: [
          "On a private server he hits the city once; fighter jets appear and keep striking — he notes downtown falls faster than usual with Sovereign plus Carrier active.",
          "On a locked player base he sometimes sees no timer change or delayed jets and wonders if the ability is bugged; later jets do fire on another target.",
          "He concludes damage between two maxed players can be heavily reduced (example: Void Eater vs Void Eater doing roughly half) — anecdotal, not a stated game rule in the card text.",
        ],
      },
      {
        type: "callout",
        title: "Foreman & other Pt. 2 units",
        text: "Foreman appears as a map spawn in the same lobby, but Hoplas2 does not read its ability card — only notes it may not help a fully maxed base. Broker, Barrier, Overclocker, and Apache are not shown in this video. Do not treat this upload as a complete Pt. 2 roster guide.",
      },
      {
        type: "h2",
        text: "Takeaways if you are hunting these three",
      },
      {
        type: "ul",
        items: [
          "Map spawns: compete for last hit — Hoplas2 steals Looter and Artillery from other players in the lobby.",
          "Admiral Carrier: video path is Robux Conquerors packs at a claimed 0.5% rate; budget accordingly or wait for Harbor / map reports.",
          "For PvP, Artillery is framed as strong if you want to counter-attack locked bases; Carrier adds follow-up jets and lock-timer cuts when it procs reliably.",
          "Always re-read the card after Friday patches — Hoplas2 himself hits possible Carrier bugs on locked bases.",
        ],
      },
    ],
    sources: [
      {
        label: "Hoplas2 — I Maxed EVERY NUKE To Unlock The RAREST Commander in Roblox Merge A Nuke…",
        url: "https://www.youtube.com/watch?v=oqNOVaY2SEo",
        note: "Published June 30, 2026 · Commanders Pt. 2",
      },
    ],
    relatedLinks: [
      { label: "Looter commander", href: "/commanders/looter" },
      { label: "Artillery commander", href: "/commanders/artillery" },
      { label: "Carrier commander", href: "/commanders/carrier" },
      { label: "All commanders & tier lists", href: "/commanders" },
      { label: "Commanders Pt. 2 update log", href: "/updates" },
    ],
  },
  {
    slug: "how-wars-work-july-2026",
    title: "How Wars Work in Merge a Nuke — War, Allies & Betrayal Rules",
    description:
      "Current Merge a Nuke war rules after the July 13 patch: manual Declare War, one active war, allies, betrayal war score, cash penalties, and Hoplas2 PvP footage caveats.",
    published: "2026-07-11",
    updated: "2026-07-16",
    tldr: [
      "Current rule: use Declare War manually or attack the same player repeatedly; only one active war can run per player.",
      "Standard wars use normal war score and cash payouts; betrayal wars are harsher after attacking an ally.",
      "Allies grant +10% cash income, but attacking an ally cancels the alliance and starts a betrayal war.",
      "Hoplas2's July 10 video is still useful for PvP flow, but it was recorded before Allies and betrayal rules were added.",
    ],
    sections: [
      {
        type: "h2",
        text: "Current war rules after the July 13 patch",
      },
      {
        type: "p",
        text: "If you came here from search, start with the current rules. The July 13, 2026 patch changed how wars are started and added Allies, betrayal wars, one-war-at-a-time limits, and diplomatic status icons on the targeting UI.",
      },
      {
        type: "ul",
        items: [
          "Declare War can be triggered from the targeting UI instead of relying only on repeated attacks.",
          "Only one active war can run per player, so you cannot stack several war payouts at once.",
          "Standard wars are still the normal PvP cash-risk loop: build war score, resolve the fight, and expect a large cash swing.",
          "Allies give both players +10% cash income while the alliance is active.",
          "Attacking an ally cancels the alliance and starts a betrayal war with much harsher score and cash penalties.",
        ],
      },
      {
        type: "h2",
        text: "War vs Allies vs Betrayal",
      },
      {
        type: "ul",
        items: [
          "War: a direct PvP state against another player. Use it when you are ready to risk cash for a payout.",
          "Allies: a temporary friendly status that grants +10% cash income to both players.",
          "Betrayal: the punishment path after attacking an ally. Reports list 1,000% war score for the attacker, 500% for the defender, a 25% defender-cash win if the betrayer succeeds, and a 75% attacker-cash loss if the betrayer fails.",
          "Targeting UI: the July 13 redesign shows diplomatic status icons so you can avoid accidentally betraying an ally.",
        ],
      },
      {
        type: "cta",
        title: "Need the full current rules?",
        text: "This blog explains the war idea and the Hoplas2 footage. For the live wiki version with Allies, betrayal penalties, raid timing, and Lock Base defense, use the raid guide.",
        href: "/raid",
        label: "Open the raid & war guide",
      },
      {
        type: "callout",
        title: "Why the Hoplas2 video differs from the current rules",
        text: "Hoplas2 recorded on July 10, before Allies, manual Declare War, betrayal war scores, and one-war-at-a-time limits were added. The footage below is still useful for PvP flow and commander choices, but use the current rules above when deciding what to do in-game.",
      },
      {
        type: "h2",
        text: "What Hoplas2's July 10 video shows",
      },
      {
        type: "p",
        text: "This section summarizes one high-end PvP loadout exactly as shown in Hoplas2's Roblox video — not speculation beyond that footage and our existing raid guide. If a detail is not spoken on-screen or already on this wiki, it is marked as unverified below.",
      },
      {
        type: "ul",
        items: [
          "At the time of the video, attacking the same player three times could declare war on them.",
          "War score tracks the fight, and the video UI shows 100% as the resolution point.",
          "The winner receives 50% of the loser's cash when war score resolves in the footage.",
          "The session focuses on leaderboard PvP: Hoplas2 joins a public server with a maxed base and picks high-nuke opponents.",
        ],
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
    endCta: {
      title: "Check the live war rules before you fight",
      description:
        "The video is useful for PvP flow, but the July 13 patch changed the live rules. Use these pages for current Allies, betrayal, Lock Base, and commander details.",
      links: [
        { label: "Raid & war mechanics", href: "/raid", primary: true },
        { label: "Siege Breaker commander", href: "/commanders/siege-breaker" },
        { label: "Carrier commander", href: "/commanders/carrier" },
        { label: "Stalker commander", href: "/commanders/stalker" },
        { label: "July 13 update log", href: "/updates" },
        { label: "Carrier card guide (blog)", href: "/blog/carrier-looter-artillery-hoplas2-june-2026" },
      ],
    },
    relatedLinks: [
      { label: "Raid & war mechanics", href: "/raid" },
      { label: "July 13 update log", href: "/updates" },
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
