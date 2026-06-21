"use client"

import { useEffect, useState } from "react"

import { ClarityAnalytics } from "@/components/clarity-analytics"
import { Ga4Analytics } from "@/components/ga4-analytics"

const IDLE_TIMEOUT_MS = 5000

export function DeferredSecondaryAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (enabled) {
      return
    }

    const enable = () => setEnabled(true)
    const timer = window.setTimeout(enable, IDLE_TIMEOUT_MS)
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const

    for (const event of events) {
      window.addEventListener(event, enable, { once: true, passive: true })
    }

    return () => {
      window.clearTimeout(timer)
      for (const event of events) {
        window.removeEventListener(event, enable)
      }
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

  return (
    <>
      <Ga4Analytics />
      <ClarityAnalytics />
    </>
  )
}
