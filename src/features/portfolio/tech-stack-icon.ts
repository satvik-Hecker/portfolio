import { TECH_STACK } from "./data/tech-stack"

/** Resolves an svgl.app slug, full URL or /uploads path to an image URL. */
export function toIconUrl(iconSlug: string) {
  return iconSlug.startsWith("https://") || iconSlug.startsWith("/")
    ? iconSlug
    : `https://svgl.app/library/${iconSlug}.svg`
}

// Techs used in projects that are not part of the tech stack list
const EXTRA_ICONS: Record<string, { light: string; dark?: string }> = {
  express: { light: "expressjs", dark: "expressjs_dark" },
  supabase: { light: "supabase" },
  framermotion: { light: "motion" },
  chromeapis: { light: "chrome" },
  html: { light: "html5" },
}

function normalize(name: string) {
  return name
    .toLowerCase()
    .replace(/\.js$/, "")
    .replace(/[^a-z0-9]/g, "")
}

/** Finds a logo for a tech name such as "React.js" or "Tailwind CSS". */
export function findTechIcon(name: string) {
  const key = normalize(name)
  const fromStack = TECH_STACK.find((item) => normalize(item.title) === key)
  const icon = fromStack
    ? { light: fromStack.iconSlug, dark: fromStack.iconSlugDark }
    : EXTRA_ICONS[key]
  if (!icon) return undefined
  return {
    light: toIconUrl(icon.light),
    dark: icon.dark ? toIconUrl(icon.dark) : undefined,
  }
}

// Brand colors, keyed by normalized tech name. Monochrome brands (Next.js,
// Express, Vercel) are left out so their tags keep the neutral style.
const TECH_COLORS: Record<string, string> = {
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  python: "#3776AB",
  c: "#00599C",
  java: "#ED8B00",
  html: "#E34F26",
  html5: "#E34F26",
  css: "#1572B6",
  css3: "#1572B6",
  react: "#61DAFB",
  tailwindcss: "#06B6D4",
  tanstack: "#FF4154",
  node: "#5FA04E",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  redis: "#FF4438",
  nginx: "#009639",
  claude: "#D97757",
  gemini: "#8E75B2",
  git: "#F05032",
  docker: "#2496ED",
  figma: "#F24E1E",
  photoshop: "#31A8FF",
  supabase: "#3FCF8E",
  framermotion: "#FFF312",
  chromeapis: "#4285F4",
}

/** Returns the brand color for a tech name, if it has a distinctive one. */
export function findTechColor(name: string) {
  return TECH_COLORS[normalize(name)]
}
