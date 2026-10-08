"use client"

import { useImperativeHandle } from "react"
import { FileBadgeIcon as FileBadgeIconSvg } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { Transition, Variants } from "motion/react"
import { motion, useAnimation, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

export type FileBadgeIconHandle = {
  startAnimation: () => void
  stopAnimation: () => void
}

export type FileBadgeIconProps = {
  ref?: React.Ref<FileBadgeIconHandle>
  className?: string
  size?: number
}

const variants: Variants = {
  normal: { rotate: 0, y: 0, scale: 1 },
  animate: {
    rotate: [0, -10, 6, -3, 0],
    y: [0, -2.5, 0],
    scale: [1, 1.08, 1],
  },
}

const transition: Transition = {
  duration: 0.6,
  ease: "easeInOut",
}

export function FileBadgeIcon({ ref, className, size = 20 }: FileBadgeIconProps) {
  const controls = useAnimation()
  const prefersReducedMotion = useReducedMotion()

  useImperativeHandle(ref, () => ({
    startAnimation: () => {
      if (!prefersReducedMotion) controls.start("animate")
    },
    stopAnimation: () => controls.start("normal"),
  }))

  return (
    <motion.span
      className={cn("inline-flex origin-bottom", className)}
      variants={variants}
      initial="normal"
      animate={controls}
      transition={transition}
      aria-hidden
    >
      <HugeiconsIcon icon={FileBadgeIconSvg} size={size} strokeWidth={1.75} />
    </motion.span>
  )
}
