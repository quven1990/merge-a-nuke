import Link from "next/link"
import { ChevronRight } from "lucide-react"

type PageIntroProps = {
  title: string
  description: string
  current: string
  tldr?: string
}

export function PageIntro({
  title,
  description,
  current,
  tldr,
}: PageIntroProps) {
  return (
    <div className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li className="font-medium text-foreground">{current}</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          {description}
        </p>
        {tldr ? (
          <div className="mt-6 max-w-3xl rounded-2xl border border-primary/25 bg-primary/5 p-4 sm:p-5">
            <h2 className="text-sm font-bold uppercase tracking-wide text-primary">
              Quick answer
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
              {tldr}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
