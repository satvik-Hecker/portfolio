import { FileDown } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"

export function NavItemResume() {
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
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                aria-label="Download resume"
              >
                <FileDown className="size-5" />
                <span className="sr-only">Download resume</span>
              </a>
            }
          />
        }
      />
      <TooltipContent>Download resume</TooltipContent>
    </Tooltip>
  )
}
