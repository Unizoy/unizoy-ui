"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link
        href="/"
        aria-label="Home"
        className="mr-4 flex items-center gap-2 lg:mr-6"
      >
        <Icons.logo className="h-6 w-6" />
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components") &&
              !pathname?.startsWith("/docs/component/chart")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Components
        </Link>

        <Link
          href="/templates"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/templates")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Templates
        </Link>

        <Link
          href="/contact"
          className={
            "transition-colors text-foreground text-xs bg-green-600/20 border px-2 py-2 rounded-3xl hover:scale-95"
          }
        >
          Need Custom Components?
        </Link>
      </nav>
    </div>
  )
}
