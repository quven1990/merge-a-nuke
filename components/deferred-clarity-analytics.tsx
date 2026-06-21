"use client"

import { ClarityAnalytics } from "@/components/clarity-analytics"
import { useDeferredAnalytics } from "@/lib/use-deferred-analytics"

const CLARITY_IDLE_MS = 2500

export function DeferredClarityAnalytics() {
  const enabled = useDeferredAnalytics(CLARITY_IDLE_MS)

  if (!enabled) {
    return null
  }

  return <ClarityAnalytics />
}
