import { cn } from "@/lib/utils"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { SOCIAL } from "@/features/portfolio/data/social-links"

export function SiteFooter() {
  const githubLink = SOCIAL.github

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom">
          <div className="stripe-divider h-12" />
        </div>

        <dl className="flex flex-col gap-4 py-8 font-mono [&_dd]:text-sm [&_dt]:text-right [&_dt]:text-sm [&_dt]:text-muted-foreground [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
          <Item>
            <dt>Crafted by</dt>
            <dd>
              <a
                className="link-underline"
                href={githubLink.href}
                target="_blank"
                rel="noopener"
              >
                {githubLink.handle}
              </a>
            </dd>
          </Item>

          <Item>
            <dt>Inspired by</dt>
            <dd>
              <ul>
                <li>Tailwind CSS</li>
                <li>shadcn/ui</li>
                <li>Vercel</li>
                <li>Evil Charts</li>
                <li>Devouring Details</li>
                <li>Skiper UI</li>
                <li>Making Software</li>
              </ul>
            </dd>
          </Item>
        </dl>
      </div>

      <SiteFooterInteractiveLogotype />

      {/* Fixed height on md+ carries the side borders past the text; the bottom
          rule then closes them off so the column ends on a line, not in mid-air.
          On lg the page frame's bottom edge takes over that job. */}
      <div className="mx-auto h-fit screen-line-bottom border-x border-line group-has-data-[slot=layout-wide]/layout:container after:z-1 after:bg-foreground/15 md:h-20 md:max-w-3xl lg:after:hidden">
        <div className="flex items-center justify-between gap-4 px-2 py-1 font-sans text-xs text-muted-foreground">
          <p>sxtvik.site &copy; {new Date().getFullYear()}</p>

          <ul className="flex items-center gap-3">
            {FOOTER_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="transition-[color] hover:text-foreground hover:underline hover:underline-offset-4"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-(--fade-bottom-height) lg:hidden" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}

const FOOTER_LINKS = [
  { label: "x.com", href: SOCIAL.x.href },
  { label: "github.com", href: SOCIAL.github.href },
  { label: "linkedin.com", href: SOCIAL.linkedin.href },
]

function Item({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid grid-cols-2 gap-4", className)} {...props} />
}
