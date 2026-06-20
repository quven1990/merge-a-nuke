import { cn } from "@/lib/utils"

export function QuickAnswer({
  children,
  className,
  compact = false,
}: {
  children: string
  className?: string
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-primary/25 bg-primary/5",
        compact ? "p-4" : "p-4 sm:p-5",
        className,
      )}
    >
      <h2 className="text-sm font-bold uppercase tracking-wide text-primary">
        Quick answer
      </h2>
      <p
        className={cn(
          "mt-2 leading-relaxed text-foreground",
          compact ? "text-sm" : "text-sm sm:text-base",
        )}
      >
        {children}
      </p>
    </div>
  )
}
