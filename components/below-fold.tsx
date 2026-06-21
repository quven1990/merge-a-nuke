import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function BelowFold({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn("below-fold", className)}>{children}</div>
}
