import "@/styles/globals.css"
import { Metadata } from "next"
import { playlists } from "@/data/playlists"

import { siteConfig } from "@/config/site"
import { fontRoboto, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Sidebar } from "@/components/sidebar"
import { SiteHeader } from "@/components/site-header"
import SiteSidebar from "@/components/site-sidebar"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          data-section="music"
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontRoboto.className
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen overflow-hidden">
              <Sidebar
                playlists={playlists}
                className="hidden max-w-[300px] lg:block"
              />
              <div className="relative grid w-full">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
