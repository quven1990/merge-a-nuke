/** In-game code field label (English UI; localized clients may show other text). */
export const CODE_INPUT_LABEL = "Enter code here"

/** Compact redeem path for meta descriptions, chips, and toasts. */
export const REDEEM_SHORT_PATH = `Shop (left) → scroll to bottom → ${CODE_INPUT_LABEL} → Redeem`

/** Shorter redeem hint for meta descriptions (≤160 chars with code rewards). */
export const REDEEM_META_HINT = "Copy, open Shop (left), scroll down, Redeem"

/** Full redeem answer for FAQ blocks. */
export const REDEEM_FAQ_ANSWER =
  `Launch Merge a Nuke on Roblox, tap Shop on the left, scroll or drag the Shop window all the way to the bottom until the code input appears (labeled "${CODE_INPUT_LABEL}"), enter your code, and tap Redeem. Codes are case-sensitive — copy them directly from this page.`

export const REDEEM_STEPS = [
  {
    id: "open-game",
    title: "Open the game",
    desc: "Launch Merge a Nuke on Roblox and load into your base.",
  },
  {
    id: "open-shop",
    title: "Open Shop",
    desc: "Tap the Shop button on the left side of the screen (pink basket icon).",
  },
  {
    id: "scroll-to-code-box",
    title: "Scroll to the code box",
    desc: `Scroll or drag the Shop window all the way to the bottom until you see the code input (labeled "${CODE_INPUT_LABEL}").`,
  },
  {
    id: "redeem",
    title: "Redeem",
    desc: "Type or paste your code into the box, then tap Redeem to claim your reward.",
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
