"use client"

import { useRef } from "react"

import {
  FileBadgeIcon,
  type FileBadgeIconHandle,
} from "@/components/animated-icons/file-badge-icon"
import { RESUME_URL } from "@/config/site"
import { haptic } from "@/lib/haptic"
import { Button } from "@/components/base/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"

export function NavItemResume() {
  const iconRef = useRef<FileBadgeIconHandle>(null)
  const start = () => iconRef.current?.startAnimation()
  const stop = () => iconRef.current?.stopAnimation()

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            className="border-none px-2"
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume"
                onClick={() => haptic()}
                onMouseEnter={start}
                onMouseLeave={stop}
                onFocus={start}
                onBlur={stop}
              >
                <FileBadgeIcon ref={iconRef} />
                <span className="sr-only">View resume</span>
              </a>
            }
          />
        }
      />
      <TooltipContent>View resume</TooltipContent>
    </Tooltip>
  )
}
