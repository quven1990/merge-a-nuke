import { Coins, Lock, PiggyBank, TrendingUp } from "lucide-react"

import { WikiIllustration } from "@/components/wiki-illustration"

const TIPS = [
  {
    icon: TrendingUp,
    title: "Upgrade income first",
    desc: "Raise your earning rate before you log off so cash piles up faster.",
    priority: "High" as const,
  },
  {
    icon: Lock,
    title: "Lock your base",
    desc: "Secure your layout and nukes so nothing is lost while you are away.",
    priority: "Essential" as const,
  },
  {
    icon: PiggyBank,
    title: "Spend wisely on return",
    desc: "Put your offline earnings into the next meaningful income upgrade.",
    priority: "Medium" as const,
  },
  {
    icon: Coins,
    title: "Skip low-value buys",
    desc: "Don't waste early cash on upgrades that barely move your progress.",
    priority: "Helpful" as const,
  },
]

export function OfflineCash() {
  return (
    <section
      id="offline"
      className="relative scroll-mt-20 border-b border-border/60 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-2xl border border-boom/40 bg-boom/10">
            <Coins className="size-5 text-boom" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Offline Cash Tips
          </h2>
        </div>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          Set your base up to keep earning while you&apos;re away. A little prep
          before logging off means a much bigger payout when you return.
        </p>

        <div className="mt-10 flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start lg:gap-10">
          <WikiIllustration
            src="/images/offline-shield.webp"
            alt="Roblox-style illustration of a studded nuke launching with a protective shield over the base"
            variant="card"
            caption="Earn offline — but lock your base first"
            className="mx-auto w-full max-w-sm lg:sticky lg:top-24 lg:max-w-none"
          />

          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {TIPS.map((tip) => (
              <div
                key={tip.title}
                className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-boom/30 bg-boom/10 text-boom">
                    <tip.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-foreground">{tip.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{tip.desc}</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Suggested priority:{" "}
                  <span className="font-semibold text-boom">{tip.priority}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
