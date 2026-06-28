/** In-game code field label (English UI; localized clients may show other text). */
export const CODE_INPUT_LABEL = "Enter Code..."

/** In-game shop panel name (English UI). */
export const SHOP_PANEL_NAME = "EXCLUSIVE SHOP"

/** Compact redeem path for meta descriptions, chips, and toasts. */
export const REDEEM_SHORT_PATH = `Shop (left) → ${CODE_INPUT_LABEL} box at the bottom → Redeem`

/** Shorter redeem hint for meta descriptions (≤160 chars with code rewards). */
export const REDEEM_META_HINT = "Copy, open Shop (left), Redeem at the bottom"

/** Full redeem answer for FAQ blocks. */
export const REDEEM_FAQ_ANSWER =
  `Launch Merge a Nuke on Roblox and tap Shop on the left to open the ${SHOP_PANEL_NAME} panel. The code field sits at the bottom of that panel (labeled "${CODE_INPUT_LABEL}") — type or paste your code there and tap Redeem. Codes are case-sensitive, so copy them directly from this page.`

export const REDEEM_STEPS = [
  {
    id: "open-game",
    title: "Open the game",
    desc: "Launch Merge a Nuke on Roblox and load into your base.",
  },
  {
    id: "open-shop",
    title: "Open Shop",
    desc: `Tap the Shop button on the left side of the screen (basket icon) to open the ${SHOP_PANEL_NAME} panel.`,
  },
  {
    id: "scroll-to-code-box",
    title: "Find the code box",
    desc: `The code field is at the bottom of the ${SHOP_PANEL_NAME} panel, labeled "${CODE_INPUT_LABEL}". Scroll down if you don't see it.`,
  },
  {
    id: "redeem",
    title: "Redeem",
    desc: `Type or paste your code into the "${CODE_INPUT_LABEL}" box, then tap Redeem to claim your reward.`,
  },
] as const

export type RedeemStep = (typeof REDEEM_STEPS)[number]

export function buildRedeemHowToSchemaSteps() {
  return REDEEM_STEPS.map((step, index) => ({
    "@type": "HowToStep" as const,
    position: index + 1,
    name: step.title,
    text: step.desc,
  }))
}
