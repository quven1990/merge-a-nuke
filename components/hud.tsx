import type { ComponentType } from "react"

import { cn } from "@/lib/utils"

export function HazardDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative h-3 w-full overflow-hidden", className)}
      aria-hidden="true"
    >
      <div className="hazard-band absolute inset-0 opacity-80">
        <div className="hazard-band-track">
          <div className="hazard-band-tile" />
          <div className="hazard-band-tile" />
        </div>
      </div>
      <div className="absolute inset-0 bg-background/15" />
    </div>
  )
}

export function SectionHeading({
  icon: Icon,
  kicker,
  title,
  tag,
}: {
  icon: ComponentType<{
    className?: string
    "aria-hidden"?: boolean | "true" | "false"
  }>
  kicker: string
  title: string
  tag?: string
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
          <span className="text-xs font-semibold text-primary">{kicker}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-sm">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-extrabold text-balance sm:text-3xl">
            {title}
          </h2>
        </div>
      </div>
      {tag ? (
        <span className="hidden rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground sm:inline">
          {tag}
        </span>
      ) : null}
    </div>
  )
}
