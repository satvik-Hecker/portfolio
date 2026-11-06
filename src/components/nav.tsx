"use client"

import React from "react"
import type { Route } from "next"
import Link from "next/link"

import type { NavItem } from "@/types/nav"
import { haptic } from "@/lib/haptic"
import { cn } from "@/lib/utils"

export function Nav({
  items,
  activeId,
  className,
  exactMatch = false,
}: {
  items: NavItem<Route>[]
  activeId?: string
  className?: string
  exactMatch?: boolean
}) {
  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-4", className)}
    >
      {items.map(({ title, href }) => {
        const isActive = exactMatch
          ? activeId === href
          : activeId === href ||
            (href === "/" // Home page
              ? ["/", "/index"].includes(activeId || "")
              : activeId?.startsWith(href))

        return (
          <NavItem
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
          >
            {title}
          </NavItem>
        )
      })}
    </nav>
  )
}

export function NavItem({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "relative text-sm font-medium font-space-mono tracking-wide text-muted-foreground transition-[color] hover:text-foreground aria-[current=page]:text-foreground",
        // Dashed underline, styled like the tech stack card hover border
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-[2px] after:border-b after:border-dashed after:border-foreground/50 after:opacity-0 after:transition-opacity after:duration-150 after:ease-out hover:after:opacity-100 focus-visible:after:opacity-100 aria-[current=page]:after:opacity-100",
        className
      )}
      onClick={(event) => {
        haptic()
        onClick?.(event)
      }}
      {...props}
    />
  )
}
