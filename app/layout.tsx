import "@/styles/globals.css"
import { Metadata, Viewport } from "next"

import { META_THEME_COLORS, siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
// import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/providers"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Toaster as DefaultToaster } from "@/components/ui/toaster"
import { Toaster as NewYorkSonner } from "@/components/ui/sonner"
import { Toaster as NewYorkToaster } from "@/components/ui/toaster"
import { PostHogProvider } from "@/analytics/providers/posthog-provider"
import GoogleAnalytics from "@/analytics/GoogleAnalytics"
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "unizoy",
      url: "https://ui.unizoy.com",
    },
  ],
  creator: "unizoy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@unizoyofficial",
  },
  icons: {
    icon: [
      {
        type: "image/png",
        sizes: "16x16",
        media: "(prefers-color-scheme: light)",
        url: "/meta/favicon-16x16.png",
      },
      {
        type: "image/png",
        sizes: "16x16",
        media: "(prefers-color-scheme: dark)",
        url: "/meta/dark/favicon-16x16.png",
      },
      {
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
        url: "/meta/favicon-32x32.png",
      },
      {
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
        url: "/meta/dark/favicon-32x32.png",
      },
    ],
    shortcut: [
      {
        type: "image/x-icon",
        media: "(prefers-color-scheme: light)",
        url: "/meta/favicon.ico",
      },
      {
        type: "image/x-icon",
        media: "(prefers-color-scheme: dark)",
        url: "/meta/dark/favicon.ico",
      },
    ],
    apple: [
      {
        type: "image/png",
        sizes: "180x180",
        media: "(prefers-color-scheme: light)",
        url: "/meta/apple-touch-icon.png",
      },
      {
        type: "image/png",
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)",
        url: "/meta/dark/apple-touch-icon.png",
      },
    ],
  },
  manifest: `/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
            }}
          />
        </head>
        <body
          className={cn(
            "min-h-svh bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}
        >
          <PostHogProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              enableColorScheme
            >
              <div vaul-drawer-wrapper="">
                <div className="relative flex min-h-svh flex-col bg-background">
                  {children}
                </div>
              </div>
              <TailwindIndicator />
              <ThemeSwitcher />
              {/* <Analytics /> */}
              <NewYorkToaster />
              <DefaultToaster />
              <NewYorkSonner />
            </ThemeProvider>
          </PostHogProvider>
          <GoogleAnalytics />
        </body>
      </html>
    </>
  )
}
