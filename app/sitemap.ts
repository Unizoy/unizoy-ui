import { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages = ["", "/docs/components", "/templates"]

  // Component pages (you can generate these dynamically)
  const componentPages = [
    "/docs/components/button",
    "/docs/components/card",
    "/docs/components/form",
    "/docs/components/input",
    "/docs/components/select",
    "/docs/components/dialog",
    "/docs/components/tooltip",
    "/docs/components/popover",
    "/docs/components/dropdown-menu",
    "/docs/components/navigation-menu",
    "/docs/components/tabs",
    "/docs/components/accordion",
    "/docs/components/alert",
    "/docs/components/badge",
    "/docs/components/avatar",
    "/docs/components/checkbox",
    "/docs/components/radio-group",
    "/docs/components/switch",
    "/docs/components/slider",
    "/docs/components/progress",
    "/docs/components/table",
    "/docs/components/calendar",
    "/docs/components/date-picker",
  ]

  const templatePage = ["/templates/real-estate-investment-page"]

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...componentPages,
    ...templatePage,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1 : page.startsWith("/docs") ? 0.8 : 0.6,
  }))
}
