import {
  COMMANDERS,
  type Commander,
  getCommanderPath,
} from "@/lib/commanders-data"
import type { SeoPageConfig } from "@/lib/seo-pages"

const ROLE_LABEL: Record<Commander["role"], string> = {
  income: "Income",
  offense: "Offense",
  defense: "Defense",
  automation: "Automation",
}

function truncateDescription(text: string, max = 160) {
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).trimEnd()}…`
}

export function buildCommanderSeoPage(commander: Commander): SeoPageConfig {
  const path = getCommanderPath(commander)
  const roleLabel = ROLE_LABEL[commander.role]
  const pendingNote = commander.pending
    ? " Ability details pending verification."
    : ""

  const title = commander.acquireSummary
    ? commander.rebirth8Note
      ? `${commander.name} Commander — How to Get & Rebirth 8 (Merge a Nuke)`
      : `${commander.name} Commander — How to Get & Ability (Merge a Nuke)`
    : `${commander.name} Commander — Merge a Nuke ${commander.rarity} Guide`

  const description = commander.acquireSummary
    ? truncateDescription(
        `How to get ${commander.name} in Merge a Nuke: ${commander.acquireSummary} ${commander.ability}${pendingNote}${
          commander.rebirth8Note ? " Also reported for Rebirth 8." : ""
        }`,
      )
    : truncateDescription(
        `${commander.rarity} ${roleLabel.toLowerCase()} commander in Merge a Nuke: ${commander.ability}${pendingNote}`,
      )

  const tldr = commander.acquireSummary
    ? [
        commander.acquireSummary,
        commander.pending
          ? `Ability still pending full in-game verification — current note: ${commander.ability}`
          : `Ability: ${commander.ability}`,
        commander.rebirth8Note
          ? "Reported as part of the Rebirth 8 unlock gate — confirm the in-game UI."
          : `Best for: ${commander.bestFor}. Priority: ${commander.priority}.`,
      ].join(" ")
    : commander.pending
      ? `${commander.name} was added recently. Ability still pending in-game verification — check back after the next patch.`
      : `Best for: ${commander.bestFor}. Priority: ${commander.priority}.`

  return {
    path,
    title,
    description,
    h1: commander.acquireSummary
      ? `${commander.name} — How to Get & Ability`
      : `${commander.name} Commander Guide`,
    intro: commander.acquireSummary
      ? `${commander.rarity} ${roleLabel.toLowerCase()} commander — ${commander.acquireSummary}`
      : `${commander.rarity} ${roleLabel.toLowerCase()} commander — ${commander.bestFor}`,
    tldr,
    breadcrumb: commander.name,
  }
}

export function getRelatedCommanders(commander: Commander, limit = 3) {
  return COMMANDERS.filter(
    (item) => item.name !== commander.name && item.rarity === commander.rarity,
  ).slice(0, limit)
}
