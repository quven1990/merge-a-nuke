"use client"

import dynamic from "next/dynamic"

export const HeroGameLoopCardLazy = dynamic(
  () =>
    import("@/components/hero-actions").then((mod) => mod.HeroGameLoopCard),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="min-h-64 rounded-3xl border-2 border-primary/25 bg-card/90"
      />
    ),
  },
)
