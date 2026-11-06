const BRACKET_CORNERS = [
  "-top-[4px] -left-[4px] border-t border-l",
  "-top-[4px] -right-[4px] border-t border-r",
  "-bottom-[4px] -left-[4px] border-b border-l",
  "-bottom-[4px] -right-[4px] border-b border-r",
]

/**
 * Dashed outline with corner brackets 3px outside a bordered element (4px
 * from its padding box). The parent needs `relative group/brackets`; the
 * outline shows while the parent is hovered or holds keyboard focus.
 */
export function HoverBrackets() {
  const reveal =
    "pointer-events-none absolute opacity-0 transition-opacity duration-150 ease-out group-hover/brackets:opacity-100 group-has-[:focus-visible]/brackets:opacity-100"
  return (
    <>
      <span
        aria-hidden
        className={`${reveal} -inset-[4px] border border-dashed border-foreground/50`}
      />
      {BRACKET_CORNERS.map((corner) => (
        <span
          key={corner}
          aria-hidden
          className={`${reveal} size-[5px] border-foreground ${corner}`}
        />
      ))}
    </>
  )
}
