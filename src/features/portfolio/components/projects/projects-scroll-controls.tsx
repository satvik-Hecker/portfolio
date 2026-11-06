"use client"

import { useEffect, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { haptic } from "@/lib/haptic"
import { Button } from "@/components/base/ui/button"

const CARD_GAP_PX = 16

export function ProjectsScrollControls({ scrollerId }: { scrollerId: string }) {
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  useEffect(() => {
    const scroller = document.getElementById(scrollerId)
    if (!scroller) return

    const update = () => {
      setCanPrev(scroller.scrollLeft > 4)
      setCanNext(
        scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 4
      )
    }

    const frame = requestAnimationFrame(update)
    scroller.addEventListener("scroll", update, { passive: true })
    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(scroller)
    return () => {
      cancelAnimationFrame(frame)
      scroller.removeEventListener("scroll", update)
      resizeObserver.disconnect()
    }
  }, [scrollerId])

  function scrollByCard(direction: 1 | -1) {
    const scroller = document.getElementById(scrollerId)
    if (!scroller) return
    haptic()
    const card = scroller.querySelector("article")
    const step = card
      ? card.getBoundingClientRect().width + CARD_GAP_PX
      : scroller.clientWidth * 0.8
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    scroller.scrollBy({
      left: direction * step,
      behavior: reduceMotion ? "auto" : "smooth",
    })
  }

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Previous projects"
        aria-controls={scrollerId}
        disabled={!canPrev}
        onClick={() => scrollByCard(-1)}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Next projects"
        aria-controls={scrollerId}
        disabled={!canNext}
        onClick={() => scrollByCard(1)}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  )
}
