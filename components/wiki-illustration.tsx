import Image from "next/image"

import { cn } from "@/lib/utils"

type WikiIllustrationProps = {
  src: string
  alt: string
  variant?: "hero" | "card" | "banner" | "float"
  caption?: string
  className?: string
  priority?: boolean
}

const VARIANTS = {
  hero: "aspect-[4/3] rounded-2xl border-2 border-primary/20 shadow-xl glow-border sm:rounded-3xl",
  card: "aspect-[4/5] rounded-2xl border border-border/70 shadow-lg sm:aspect-[3/4]",
  banner:
    "aspect-[16/9] rounded-2xl border border-boom/25 shadow-lg md:aspect-[21/9]",
  float:
    "aspect-square rounded-2xl border-2 border-hazard/30 shadow-2xl sm:rounded-3xl sm:rotate-1 sm:hover:rotate-0 transition-transform duration-300",
}

export function WikiIllustration({
  src,
  alt,
  variant = "card",
  caption,
  className,
  priority = false,
}: WikiIllustrationProps) {
  return (
    <figure className={cn("group relative overflow-hidden", className)}>
      <div className={cn("relative w-full overflow-hidden bg-card", VARIANTS[variant])}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={
            variant === "banner"
              ? "(max-width: 768px) 100vw, 80vw"
              : variant === "hero"
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
