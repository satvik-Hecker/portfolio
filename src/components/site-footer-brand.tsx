"use client"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"

import { cn } from "@/lib/utils"

const SPOTLIGHT_RADIUS = "10rem"

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const spotlightXRaw = useMotionValue(50)
  const spotlightX = useSpring(spotlightXRaw, { stiffness: 150, damping: 25 })
  const spotlight = useMotionTemplate`radial-gradient(circle ${SPOTLIGHT_RADIUS} at ${spotlightX}% 50%, var(--foreground) 0%, transparent 100%)`

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    spotlightXRaw.set(
      ((event.clientX - containerRect.left) / containerRect.width) * 100
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    spotlightXRaw.set(50)
  }

  return (
    <div className="mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
      <div className="relative screen-line-bottom after:z-1 after:bg-foreground/15">
        <CornerMarks />

        <div
          // Stacked edge masks fade the letters out toward the bottom and sides,
          // so the wordmark recedes into the footer instead of competing with it.
          // The bottom fade runs long because "sxtvik" is mostly x-height letters
          // with few ascenders to catch the bright top of the gradient.
          className="group/wordmark relative overflow-hidden mask-x-from-80% mask-t-from-80% mask-b-to-90% py-8 sm:py-10 md:py-14"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Wordmark />

          {!shouldReduceMotion && (
            // Copy of the wordmark painted by a cursor-tracking gradient, so the
            // letters ink up under the pointer without changing the resting colors
            <motion.div
              aria-hidden
              className="absolute inset-0 flex items-center justify-center bg-clip-text text-transparent opacity-0 transition-opacity duration-300 ease-out group-hover/wordmark:opacity-100"
              style={{ backgroundImage: spotlight }}
            >
              <Wordmark muted={false} />
            </motion.div>
          )}
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}

function Wordmark({ muted = true }: { muted?: boolean }) {
  return (
    <p
      className={cn(
        "flex items-center justify-center font-pixel-square text-4xl leading-none tracking-tight whitespace-nowrap select-none sm:text-5xl md:text-7xl",
        !muted && "text-transparent"
      )}
    >
      <span className={cn(muted && "text-foreground")}>sxtvik</span>
      <span className={cn(muted && "text-muted-foreground")}>.site</span>
    </p>
  )
}

const CORNER_MARKS = [
  "top-0 left-0 -translate-y-1/2 border-l-border",
  "top-0 right-0 -translate-y-1/2 border-r-border",
  "bottom-0 left-0 translate-y-1/2 border-l-border",
  "bottom-0 right-0 translate-y-1/2 border-r-border",
]

// Inward-pointing triangles where the footer rules meet the side borders
function CornerMarks() {
  return CORNER_MARKS.map((position) => (
    <span
      key={position}
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-2 size-0 border-[6px] border-transparent",
        position
      )}
    />
  ))
}
