import Link from "next/link"
import {
  ArrowRight,
  Coins,
  ShieldAlert,
  Sparkles,
  Swords,
  Zap,
} from "lucide-react"

import {
  COMMANDERS,
  getCommanderPath,
  PRIORITY_STYLE,
  RARITY_STYLE,
  type Commander,
} from "@/lib/commanders-data"

const ROLE_ICON = {
  income: Coins,
  offense: Swords,
  defense: ShieldAlert,
  automation: Zap,
} as const

function RoleIcon({ cmd, className }: { cmd: Commander; className?: string }) {
  if (cmd.pending) {
    return <Sparkles className={className} aria-hidden="true" />
  }
  const Icon = ROLE_ICON[cmd.role]
  return <Icon className={className} aria-hidden="true" />
}

export function CommanderRoster() {
  return (
    <>
      <div className="mt-8 space-y-3 lg:hidden">
        {COMMANDERS.map((cmd) => {
          const { border, badge } = RARITY_STYLE[cmd.rarity]
          const href = getCommanderPath(cmd)

          return (
            <Link
              key={cmd.name}
              href={href}
              className={`group block rounded-2xl border bg-card/70 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${border}`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                    <RoleIcon cmd={cmd} className="size-4 text-primary" />
                  </span>
                  <span className="truncate font-bold text-foreground group-hover:text-primary">
                    {cmd.name}
                  </span>
                  {cmd.pending ? (
                    <span className="shrink-0 rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                      New
                    </span>
                  ) : null}
                  {cmd.limited ? (
                    <span className="shrink-0 rounded-full bg-hazard/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-hazard">
                      LTM
                    </span>
                  ) : null}
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badge}`}>
                    {cmd.rarity}
                  </span>
                  <span className={`text-xs font-bold ${PRIORITY_STYLE[cmd.priority]}`}>
                    {cmd.priority}
                  </span>
                  <ArrowRight
                    className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {cmd.ability}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Open {cmd.name} guide
              </span>
            </Link>
          )
        })}
      </div>

      <div className="mt-8 hidden overflow-hidden rounded-2xl border border-border/60 bg-card/50 lg:block">
        <div className="grid grid-cols-[120px_90px_1fr_160px_72px] gap-4 border-b border-border/40 px-5 py-3 text-xs font-medium text-muted-foreground">
          <span>Commander</span>
          <span>Rarity</span>
          <span>Ability</span>
          <span>Best for</span>
          <span className="text-right">Guide</span>
        </div>
        <ul className="divide-y divide-border/40">
          {COMMANDERS.map((cmd) => {
            const { badge } = RARITY_STYLE[cmd.rarity]
            const href = getCommanderPath(cmd)

            return (
              <li key={cmd.name}>
                <div className="grid grid-cols-[120px_90px_1fr_160px_72px] items-start gap-4 px-5 py-4">
                  <Link
                    href={href}
                    className="group/commander flex items-center gap-2 rounded-lg transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                      <RoleIcon cmd={cmd} className="size-3.5 text-primary" />
                    </span>
                    <span className="text-sm font-bold text-foreground group-hover/commander:text-primary">
                      {cmd.name}
                      {cmd.pending ? (
                        <span className="ml-1.5 rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary align-middle">
                          New
                        </span>
                      ) : null}
                      {cmd.limited ? (
                        <span className="ml-1.5 rounded-full bg-hazard/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-hazard align-middle">
                          LTM
                        </span>
                      ) : null}
                    </span>
                  </Link>
                  <span className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${badge}`}>
                    {cmd.rarity}
                  </span>
                  <div>
                    <p className="text-sm text-foreground">{cmd.ability}</p>
                    {cmd.notes ? (
                      <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                        {cmd.notes}
                      </p>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground">{cmd.bestFor}</p>
                  <div className="flex items-center justify-end gap-2">
                    <span className={`text-sm ${PRIORITY_STYLE[cmd.priority]}`}>
                      {cmd.priority}
                    </span>
                    <Link
                      href={href}
                      aria-label={`Open ${cmd.name} commander guide`}
                      className="inline-flex size-8 items-center justify-center rounded-lg border border-border/70 bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
