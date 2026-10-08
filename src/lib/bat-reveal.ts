// Must match the bat mask in globals.css: a bat-topped solid block in a
// 144-unit square viewBox, tilted around its solid centre
const MASK_VIEWBOX_SIZE = 144
const TILT_RADIANS = (25 * Math.PI) / 180
// Half-extents of the block's solid area (below the bat outline), in viewBox units
const SOLID_HALF_WIDTH = 30
const SOLID_HALF_HEIGHT = 45.5
// Bat width (100 viewBox units) as a fraction of the viewport's shorter side when it appears
const START_BAT_SIZE = 0.35

const BAT_VARIABLES = [
  "--bat-start-x",
  "--bat-start-y",
  "--bat-start-size",
  "--bat-end-x",
  "--bat-end-y",
  "--bat-end-size",
] as const

type BatVariable = (typeof BAT_VARIABLES)[number]

/**
 * Runs `update` inside a view transition that reveals the new page through a
 * bat-topped shape rising from the bottom-left corner until it covers the
 * screen. Falls back to a plain update when view transitions are unsupported
 * or the user prefers reduced motion.
 */
export function startBatReveal(update: () => void) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

  if (!document.startViewTransition || prefersReducedMotion) {
    update()
    return
  }

  const { innerWidth: viewportWidth, innerHeight: viewportHeight } = window
  const cos = Math.cos(TILT_RADIANS)
  const sin = Math.sin(TILT_RADIANS)

  // Smallest scale (px per viewBox unit) at which the tilted solid area,
  // centred on the viewport, contains every viewport corner
  let endUnit = 0
  for (const dx of [-viewportWidth / 2, viewportWidth / 2]) {
    for (const dy of [-viewportHeight / 2, viewportHeight / 2]) {
      const localX = dx * cos + dy * sin
      const localY = -dx * sin + dy * cos
      endUnit = Math.max(
        endUnit,
        Math.abs(localX) / SOLID_HALF_WIDTH,
        Math.abs(localY) / SOLID_HALF_HEIGHT
      )
    }
  }
  endUnit *= 1.02

  const startUnit =
    (Math.min(viewportWidth, viewportHeight) * START_BAT_SIZE) / 100
  const startSize = MASK_VIEWBOX_SIZE * startUnit
  const endSize = MASK_VIEWBOX_SIZE * endUnit

  const values: Record<BatVariable, string> = {
    "--bat-start-x": `${-startSize / 2}px`,
    "--bat-start-y": `${viewportHeight - startSize / 2}px`,
    "--bat-start-size": `${startSize}px`,
    "--bat-end-x": `${viewportWidth / 2 - endSize / 2}px`,
    "--bat-end-y": `${viewportHeight / 2 - endSize / 2}px`,
    "--bat-end-size": `${endSize}px`,
  }

  const root = document.documentElement
  for (const name of BAT_VARIABLES) {
    root.style.setProperty(name, values[name])
  }
  root.classList.add("bat-reveal")

  const transition = document.startViewTransition(update)
  transition.finished.finally(() => {
    root.classList.remove("bat-reveal")
    for (const name of BAT_VARIABLES) {
      root.style.removeProperty(name)
    }
  })
}
