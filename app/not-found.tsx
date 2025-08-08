import Link from "next/link"
import { Icons } from "@/components/icons"
import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import { Button } from "@/registry/ui/button"
import { Component, Home } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = generateSEO({
  title: "Page Not Found - 404 Error",
  description: "The page you're looking for doesn't exist. Navigate back to our homepage or browse our components and templates.",
  keywords: ["404", "page not found", "error", "unizoy", "components"],
  noindex: true,
  nofollow: true,
})

export default function NotFound() {
  return (
    <div data-wrapper="" className="border-grid flex flex-1 flex-col min-h-screen">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <div className="flex items-center justify-center px-4 flex-1">
          <div className="text-center max-w-md mx-auto">
            {/* 404 Icon */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground">404</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              Page Not Found
            </h1>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="blue">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Button>
              </Link>
              
              <Link href="/docs/components">
                <Button variant="blue">
                  <Component className="mr-2 h-4 w-4" />
                  Browse Components
                </Button>
              </Link>
            </div>

            {/* Additional Links */}
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                You might also be interested in:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link 
                  href="/templates" 
                  className="text-primary hover:underline transition-colors"
                >
                  Templates
                </Link>
                <Link 
                  href="/contact" 
                  className="text-primary hover:underline transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
