"use client"

import { Atom } from "lucide-react"

import { TrackedCtaLink } from "@/components/tracked-cta-link"

export function HeaderCodesCta() {
  return (
    <TrackedCtaLink
      href="/codes"
      label="Check Codes"
      placement="header"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-4"
    >
      <Atom className="size-4" aria-hidden="true" />
      <span className="sm:hidden">Codes</span>
      <span className="hidden sm:inline">Check Codes</span>
    </TrackedCtaLink>
  )
}
