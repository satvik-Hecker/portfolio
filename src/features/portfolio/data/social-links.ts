import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  // Placeholder hrefs ("#") stay until the real profile links are added.
  x: {
    title: "X",
    handle: "satvik-Hecker",
    href: "#",
  },
  github: {
    title: "GitHub",
    handle: "satvik-Hecker",
    href: "https://github.com/satvik-Hecker",
  },
  linkedin: {
    title: "LinkedIn",
    handle: "satvik-Hecker",
    href: "#",
  },
  dailydotdev: {
    title: "daily.dev",
    handle: "satvik-Hecker",
    href: "#",
  },
  discord: {
    title: "Discord",
    handle: "satvik-Hecker",
    href: "#",
  },
  youtube: {
    title: "YouTube",
    handle: "satvik-Hecker",
    href: "#",
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
