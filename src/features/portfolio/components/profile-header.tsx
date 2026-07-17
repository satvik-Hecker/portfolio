import { AvatarLights } from "@/features/portfolio/components/avatar-lights"
import { USER } from "@/features/portfolio/data/user"
import { FlipSentences } from "./flip-sentences"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div>
      <div className="screen-line-bottom bg-[url('https://i.pinimg.com/1200x/58/23/9f/58239fe515966d172e2a7667c965867c.jpg')] grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-y-clip border-x border-line">
        <figure className="relative col-span-2 p-2 sm:col-span-1 sm:col-start-2 sm:p-4">
          <svg
            className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
            viewBox="0 0 556 354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
              <path d="M-477.55 756.57L1254.51 -243.41" />
              <path d="M977.37 788.58L-754.67 -211.42" />
              <path d="M1143.65 692.58L-588.39 -307.42" />
            </g>
          </svg>
          {/* <figcaption className="pointer-events-none absolute right-2 bottom-2 font-mono text-xs leading-none text-zinc-400 select-none sm:right-4 dark:text-zinc-700">
            FIG_001
          </figcaption> */}
        </figure>

        <div className="flex flex-col sm:row-span-2 sm:row-start-1">
          <div className="screen-line-top mt-auto shrink-0 p-1 border-line bg-background border">
            <AvatarLights
              className="ring-border ring-offset-background group-focus-visible/avatar-lights-toggle:ring-1 group-focus-visible/avatar-lights-toggle:ring-offset-2"
              variants={USER.avatarVariants}
            />
          </div>
        </div>

        <div className="flex flex-col bg-background">
          <div className="z-1 mt-auto border-t border-line">
            <div className="flex items-center py-1 gap-2 pl-4">
              <h1 className="-translate-y-px text-[2rem]/none font-medium font-pixel-square tracking-tight">
                Satvik Tiwari
              </h1>

              <VerifiedIcon className="size-4.5 select-none" aria-hidden />


            </div>

            <FlipSentences className="h-12.5 bg-background border-y border-line py-1 pl-4 sm:h-9">
              {USER.flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
    </div>
  )
}
