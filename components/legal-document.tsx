import type { ReactNode } from "react"

type LegalSection = {
  title: string
  content: ReactNode
}

type LegalDocumentProps = {
  title: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
}

export function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {lastUpdated}
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">{intro}</p>
        <p className="mt-4 rounded-2xl border border-border/70 bg-card/50 p-4 text-sm text-muted-foreground">
          This page is provided for general information only and does not
          constitute legal advice. If you need legal guidance, consult a
          qualified attorney in your jurisdiction.
        </p>
      </header>

      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-bold text-foreground">
              {section.title}
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-4 [&_li]:list-disc [&_ol]:space-y-2 [&_ol]:pl-1 [&_ul]:space-y-2 [&_ul]:pl-1">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
