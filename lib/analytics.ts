import {
  ROBLOX_GAME_ABOUT_URL,
  ROBLOX_GAME_URL,
} from "@/lib/game-links"

export const PLAUSIBLE_SCRIPT_URL =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL ??
  "https://plausible.shipsolo.io/js/pa-lNjRkYVbpXSNl3h0FRv08.js"

export const PLAUSIBLE_ENABLED =
  process.env.NODE_ENV === "production" && Boolean(PLAUSIBLE_SCRIPT_URL)

export const CLARITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_CLARITY_ID ?? "x90b5eqrc8"

export const CLARITY_ENABLED =
  process.env.NODE_ENV === "production" && Boolean(CLARITY_PROJECT_ID)

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-PPJ67VV8R4"

export const GA_ENABLED =
  process.env.NODE_ENV === "production" && Boolean(GA_MEASUREMENT_ID)

export type PlausibleCodeName = "ATOMIC" | "UPDATE2" | "BOOM"

export type OutboundDestination =
  | "roblox_game"
  | "roblox_about"
  | "roblox_privacy"
  | "cloudflare"
  | "plausible"
  | "google"
  | "microsoft"
  | "other"

export type OutboundPlacement =
  | "hero"
  | "game_overview"
  | "footer"
  | "privacy"
  | "codes_toast"
  | "codes_redeem"
  | "other"

export type CtaPlacement =
  | "hero_primary"
  | "hero_card"
  | "hero_chips"
  | "hero_loop"
  | "header"
  | "header_mobile"
  | "guide_cards"
  | "game_overview"
  | "codes_redeem"
  | "home_update"

/**
 * Plausible custom events (enable matching Goals in the dashboard).
 *
 * Goals: copy_code, codes_open_roblox, cta_click, outbound_click, nav_open
 * Custom properties: page, code, source, label, target, placement, destination
 *
 * `placement` / `source` values appear after first event — no per-value setup.
 */
export type PlausibleEventProps = {
  copy_code: {
    code: PlausibleCodeName
    page: string
    source: "codes_table" | "hero_chips"
  }
  codes_open_roblox: {
    code: PlausibleCodeName
    page: string
  }
  outbound_click: {
    destination: OutboundDestination
    page: string
    placement: OutboundPlacement
  }
  cta_click: {
    label: string
    target: string
    placement: CtaPlacement
    page: string
  }
  nav_open: {
    page: string
  }
}

export type PlausibleEvent = keyof PlausibleEventProps

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> },
    ) => void
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number | boolean>,
    ) => void
  }
}

export function trackPlausible<E extends PlausibleEvent>(
  event: E,
  props: PlausibleEventProps[E],
) {
  if (typeof window === "undefined") {
    return
  }

  const payload = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, String(value)]),
  )

  if (PLAUSIBLE_ENABLED) {
    window.plausible?.(event, { props: payload })
  }

  if (!GA_ENABLED) {
    return
  }

  window.gtag?.("event", event, {
    ...payload,
    send_to: GA_MEASUREMENT_ID,
  })

  const opensRoblox =
    event === "codes_open_roblox" ||
    (event === "outbound_click" &&
      (payload.destination === "roblox_game" ||
        payload.destination === "roblox_about"))

  if (opensRoblox) {
    window.gtag?.("event", "open_roblox", {
      ...payload,
      source_event: event,
      send_to: GA_MEASUREMENT_ID,
    })
  }
}

export function resolveOutboundDestination(href: string): OutboundDestination {
  const normalized = href.toLowerCase()

  if (href === ROBLOX_GAME_URL || normalized.includes("/games/128784467030899")) {
    return "roblox_game"
  }

  if (href === ROBLOX_GAME_ABOUT_URL || normalized.includes("#!/about")) {
    return "roblox_about"
  }

  if (normalized.includes("help.roblox.com")) {
    return "roblox_privacy"
  }

  if (normalized.includes("cloudflare.com")) {
    return "cloudflare"
  }

  if (normalized.includes("plausible.io")) {
    return "plausible"
  }

  if (normalized.includes("policies.google.com")) {
    return "google"
  }

  if (normalized.includes("privacy.microsoft.com")) {
    return "microsoft"
  }

  return "other"
}

export function toPlausibleCodeName(code: string): PlausibleCodeName | null {
  if (code === "ATOMIC" || code === "UPDATE2" || code === "BOOM") {
    return code
  }

  return null
}
