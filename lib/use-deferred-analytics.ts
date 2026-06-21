"use client"

import { useEffect, useState } from "react"

const INTERACTION_EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const

export function useDeferredAnalytics(idleTimeoutMs: number) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (enabled) {
      return
    }

    const enable = () => setEnabled(true)
    const timer = window.setTimeout(enable, idleTimeoutMs)

    for (const event of INTERACTION_EVENTS) {
      window.addEventListener(event, enable, { once: true, passive: true })
    }

    return () => {
      window.clearTimeout(timer)
      for (const event of INTERACTION_EVENTS) {
        window.removeEventListener(event, enable)
      }
    }
  }, [enabled, idleTimeoutMs])

  return enabled
}
