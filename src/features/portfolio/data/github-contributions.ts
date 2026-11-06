import "server-only"

import { unstable_cache } from "next/cache"

import { GITHUB_USERNAME } from "@/config/site"
import type { Activity } from "@/components/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getGitHubContributions = unstable_cache(
  async () => {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
    )
    const data = (await res.json()) as GitHubContributionsResponse
    return data.contributions
  },
  ["github-contributions"],
  { revalidate: 3600 } // Cache for 1 hour (3600 seconds)
)
