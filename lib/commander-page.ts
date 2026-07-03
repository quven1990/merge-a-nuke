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

export function buildCommanderSeoPage(commander: Commander): SeoPageConfig {
  const path = getCommanderPath(commander)
  const roleLabel = ROLE_LABEL[commander.role]
  const pendingNote = commander.pending
    ? " Ability details pending verification."
    : ""

  const description = `${commander.rarity} ${roleLabel.toLowerCase()} commander in Merge a Nuke: ${commander.ability}${pendingNote}`

  return {
    path,
    title: `${commander.name} Commander — Merge a Nuke ${commander.rarity} Guide`,
    description: description.length > 160 ? `${description.slice(0, 157)}…` : description,
    h1: `${commander.name} Commander Guide`,
    intro: `${commander.rarity} ${roleLabel.toLowerCase()} commander — ${commander.bestFor}`,
    tldr: commander.pending
      ? `${commander.name} was added in Commanders Pt. 2. Ability still pending in-game verification — check back after the next patch.`
      : `Best for: ${commander.bestFor}. Priority: ${commander.priority}.`,
    breadcrumb: commander.name,
  }
}

export function getRelatedCommanders(commander: Commander, limit = 3) {
  return COMMANDERS.filter(
    (item) => item.name !== commander.name && item.rarity === commander.rarity,
  ).slice(0, limit)
}
