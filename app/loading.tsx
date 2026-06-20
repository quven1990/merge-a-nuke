import { LoaderCircle } from "lucide-react"

export default function Loading() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center px-4"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-card/90 px-5 py-4 text-sm font-semibold text-foreground shadow-lg">
        <LoaderCircle className="size-5 animate-spin text-primary" aria-hidden="true" />
        Opening guide…
      </div>
    </div>
  )
}
