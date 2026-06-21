"use client"

import { Ga4Analytics } from "@/components/ga4-analytics"
import { useDeferredAnalytics } from "@/lib/use-deferred-analytics"

const GA4_IDLE_MS = 5000

export function DeferredGa4Analytics() {
  const enabled = useDeferredAnalytics(GA4_IDLE_MS)

  if (!enabled) {
    return null
  }

  return <Ga4Analytics />
}
