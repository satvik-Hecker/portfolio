import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "vyay",
    title: "Vyay",
    category: "Full-stack · Finance",
    link: "https://vyay.site",
    githubUrl: "https://github.com/satvik-Hecker/vyay",
    liveUrl: "https://vyay.site",
    status: "live",
    image: "/projects/vyay-dashboard.webp",
    skills: ["Next.js", "Express.js", "MongoDB", "Gemini"],
    description:
      "Personal finance tracker to log, categorize and analyze daily expenses, backed by a secure, rate-limited REST API.",
  },
  {
    id: "curly-brackets",
    title: "Curly Brackets",
    category: "Full-stack · EdTech",
    link: "https://curlybrackets.vercel.app",
    githubUrl: "https://github.com/satvik-Hecker/curlyBrackets",
    liveUrl: "https://curlybrackets.vercel.app",
    status: "live",
    skills: ["Next.js", "Tailwind CSS", "Supabase", "Framer Motion"],
    description:
      "Gamified platform for learning web development, with Google sign-in, lesson progress tracking and badges.",
  },
  {
    id: "time-overflowed",
    title: "Time Overflowed",
    category: "Chrome Extension · Productivity",
    link: "https://github.com/satvik-Hecker/timeOverflowed",
    githubUrl: "https://github.com/satvik-Hecker/timeOverflowed",
    skills: ["HTML", "Tailwind CSS", "Chrome APIs"],
    description:
      "Chrome extension that tracks time spent across sites and turns it into daily and weekly productivity analytics.",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    category: "Web · Personal site",
    period: {
      start: "07.2026",
    },
    link: "https://sxtvik.site",
    githubUrl: "https://github.com/satvik-Hecker/portfolio",
    liveUrl: "https://sxtvik.site",
    status: "live",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "This site: a pixel-styled portfolio with a bat-shaped theme switch, built on Next.js.",
  },
]
