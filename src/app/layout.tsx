import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { NuqsAdapter } from "nuqs/adapters/next/app"

import { META_THEME_COLORS, SITE_INFO } from "@/config/site"
import { fontVariables } from "@/lib/fonts"
import { Providers } from "@/components/providers"
import { USER } from "@/features/portfolio/data/user"



// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  icons: {
    icon: "/bgdrk1.png",
    apple: "/bgdrk1.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var value = localStorage.getItem('avatarLights');
                document.documentElement.dataset.avatarLights = JSON.parse(value || '"on"');
              } catch(_) {}
            `,
          }}
        />

      </head>



      <body>
        <Providers>
          <NuqsAdapter>{children}</NuqsAdapter>
        </Providers>
      </body>
    </html>
  )
}
