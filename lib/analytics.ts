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
