import { cn } from "@/lib/utils"

const TOP_MARKS = [
  "top-0 left-0 -translate-y-1/2 border-l-border",
  "top-0 right-0 -translate-y-1/2 border-r-border",
]

const BOTTOM_MARKS = [
  "bottom-0 left-0 translate-y-1/2 border-l-border",
  "bottom-0 right-0 translate-y-1/2 border-r-border",
]

// Inward-pointing triangles where a full-width rule meets the side borders.
// The parent must be positioned (relative) for them to anchor to its corners.
export function CornerMarks({
  top = true,
  bottom = true,
}: {
  top?: boolean
  bottom?: boolean
}) {
  const marks = [...(top ? TOP_MARKS : []), ...(bottom ? BOTTOM_MARKS : [])]

  return marks.map((position) => (
    <span
      key={position}
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-2 size-0 border-[6px] border-transparent",
        position
      )}
    />
  ))
}
