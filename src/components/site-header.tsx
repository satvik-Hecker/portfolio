import Link from "next/link"

import { MAIN_NAV } from "@/config/site"
import { cn } from "@/lib/utils"
import { NavDesktop } from "@/components/nav-desktop"
import { ThemeToggle } from "@/components/theme-toggle"

import { NavItemResume } from "./nav-item-resume"

// Vercel injects the deployed commit at build time; local builds have none
const BUILD_ID = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2 lg:top-(--frame-gutter)">
      <div className="screen-line-top screen-line-bottom mx-auto h-(--header-height) border-x border-line py-4 group-has-data-[slot=layout-wide]/layout:container after:z-1 after:bg-border md:max-w-3xl">
        {/* Inset rail: the bar sits inside the band between its own top and bottom rules */}
        <div className="relative flex h-full items-center border-y border-line px-4 sm:px-6">
          <HeaderNote className="top-full left-2 mt-0.5">
            satvik@stvk.sh:~$
            <span className="ml-1 inline-block h-2.5 w-1.5 translate-y-px bg-muted-foreground/60 motion-safe:animate-caret-blink" />
          </HeaderNote>
          <HeaderNote className="right-2 bottom-full mb-0.5 max-sm:hidden">
            build {BUILD_ID}
          </HeaderNote>

          <Link
            href="/"
            className="flex h-full cursor-pointer items-center border-x border-line px-2 font-pixel-square text-2xl select-none"
          >
            satvik
          </Link>

          <div className="flex-1" />

          <div className="px-4 max-sm:hidden">
            <NavDesktop items={MAIN_NAV} />
          </div>

          {/* Boxed like the brand: side borders, with dividers between the actions */}
          <div className="flex h-full divide-x divide-line border-x border-line">
            <HeaderCell>
              <NavItemResume />
            </HeaderCell>
            <HeaderCell>
              <ThemeToggle />
            </HeaderCell>
          </div>
        </div>
      </div>
    </header>
  )
}

function HeaderCell({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-full items-center px-1.5",
        className
      )}
      {...props}
    />
  )
}

function HeaderNote({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute flex items-center font-mono text-[10px] leading-none whitespace-nowrap text-muted-foreground/50 select-none",
        className
      )}
      {...props}
    />
  )
}
