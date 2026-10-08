"use client"

import { TECH_STACK } from "../data/tech-stack"
import type { TechStack as TechStackType } from "../types/tech-stack"
import Link from "next/link"
import { Panel, PanelHeader, PanelTitle } from "./panel"
import { motion } from "framer-motion"

const ID = "stack"

function toIconUrl(iconSlug: string) {
  return iconSlug.startsWith("https://")
    ? iconSlug
    : `https://svgl.app/library/${iconSlug}.svg`
}

const BRACKET_CORNERS = [
  "-top-[4px] -left-[4px] border-t border-l",
  "-top-[4px] -right-[4px] border-t border-r",
  "-bottom-[4px] -left-[4px] border-b border-l",
  "-bottom-[4px] -right-[4px] border-b border-r",
]

// Dashed outline with corner brackets 3px outside the card border (4px from the padding box), revealed on hover
function HoverBrackets() {
  const reveal =
    "pointer-events-none absolute opacity-0 transition-opacity duration-150 ease-out group-hover/card:opacity-100"
  return (
    <>
      <span
        aria-hidden
        className={`${reveal} -inset-[4px] border border-dashed border-foreground/50`}
      />
      {BRACKET_CORNERS.map((corner) => (
        <span
          key={corner}
          aria-hidden
          className={`${reveal} size-[5px] border-foreground ${corner}`}
        />
      ))}
    </>
  )
}

function MarqueeTrack({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="group/marquee flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] py-2">
      <div
        className={`flex w-max shrink-0 animate-[marquee_60s_linear_infinite] group-hover/marquee:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {/* Gap reduced from gap-4 to gap-2 for tighter spacing */}
        <div className="flex shrink-0 gap-2 px-1">{children}</div>
        <div className="flex shrink-0 gap-2 px-1" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}

export function TechStack() {
  const half = Math.ceil(TECH_STACK.length / 2)
  const row1 = TECH_STACK.slice(0, half)
  const row2 = TECH_STACK.slice(half)

  const renderCard = (item: TechStackType) => {
    return (
      <motion.div
        key={item.key}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        // Card is now a larger square (h-28 w-28) with a vertical flex column layout
        className="group/card relative flex h-26 w-36 cursor-default flex-col items-center justify-center gap-3  border border-border bg-zinc-50/80 p-2 shadow-sm transition-[opacity,background-color,box-shadow] duration-300 dark:bg-zinc-900/40 group-hover/marquee:opacity-40 hover:!opacity-100 hover:shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-800/90"
      >
        <HoverBrackets />
        <span className="flex size-8 shrink-0 items-center justify-center grayscale transition-all duration-300 group-hover/card:grayscale-0">
          <img
            src={toIconUrl(item.iconSlug)}
            alt={`${item.title} logo`}
            className={`size-8 object-contain ${item.iconSlugDark ? "dark:hidden" : ""}`}
            loading="lazy"
          />
          {item.iconSlugDark && (
            <img
              src={toIconUrl(item.iconSlugDark)}
              alt={`${item.title} logo`}
              className="hidden size-8 object-contain dark:block"
              loading="lazy"
            />
          )}
        </span>
        {/* Text centered at the bottom, sized down slightly to fit the square aesthetic */}
        <span className="font-mono text-sm font-medium font-space-mono text-center text-muted-foreground transition-colors duration-300 group-hover/card:text-foreground">
          {item.title}
        </span>
      </motion.div>
    )
  }

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <Link href={`#${ID}`}>Tech stack</Link>
        </PanelTitle>
      </PanelHeader>

      <div className="flex flex-col gap-2 py-6">
        <MarqueeTrack>
          {row1.map(renderCard)}
        </MarqueeTrack>

        <MarqueeTrack reverse>
          {row2.map(renderCard)}
        </MarqueeTrack>
      </div>
    </Panel>
  )
}