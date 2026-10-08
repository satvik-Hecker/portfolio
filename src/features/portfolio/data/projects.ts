import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    period: {
      start: "07.2026",
    },
    link: "https://sxtvik.site",
    githubUrl: "https://github.com/satvik-Hecker/portfolio",
    liveUrl: "https://sxtvik.site",
    status: "live",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: `Personal portfolio website.\n- Light and dark themes\n- Responsive layout`,
    isExpanded: true,
  },
]
