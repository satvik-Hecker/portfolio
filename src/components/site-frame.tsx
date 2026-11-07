const GUTTERS = [
  "inset-x-0 top-0 h-(--frame-gutter)",
  "inset-x-0 bottom-0 h-(--frame-gutter)",
  "inset-y-0 left-0 w-(--frame-gutter)",
  "inset-y-0 right-0 w-(--frame-gutter)",
]

/**
 * Bordered frame inset from the viewport on large screens. Drawn as a fixed
 * overlay instead of an inner scroll container so window scrolling, the sticky
 * header, anchor links and scroll-to-top keep working unchanged. The gutter
 * strips hide full-bleed rules underneath, so they stop at the frame edge.
 */
export function SiteFrame() {
  return (
    <div aria-hidden className="pointer-events-none max-lg:hidden">
      {GUTTERS.map((position) => (
        <div
          key={position}
          className={`fixed z-55 bg-background ${position}`}
        />
      ))}
      <div className="fixed inset-(--frame-gutter) z-55 border border-line" />
    </div>
  )
}
