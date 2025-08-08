import { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages = ["", "/docs/components", "/templates", "/contact"]

  // Component pages (you can generate these dynamically)
  const componentPages = [
    "/docs/components/animated-tooltip",
    "/docs/components/button",
    "/docs/components/carousel",
    "/docs/components/copy-icon",
    "/docs/components/custom-pointer",
    "/docs/components/draggable-carousel",
    "/docs/components/floating-navabar",
    "/docs/components/image-trail",
    "/docs/components/infinite-moving-cards",
    "/docs/components/motion-cards",
    "/docs/components/product-preview",
    "/docs/components/reveal-text",
    "/docs/components/rotating-text",
    "/docs/components/rythemic-reveal",
    "/docs/components/navigation-icon",
    "/docs/components/scaling-sliding-cards",
    "/docs/components/scroll-opacity-effect",
    "/docs/components/scroll-text-flow",
    "/docs/components/scrolling-cards",
    "/docs/components/scrolling-video-cards",
    "/docs/components/slide-cards",
    "/docs/components/testimonial",
    "/docs/components/text-hover-effect",
    "/docs/components/text-rollup-effect",
    "/docs/components/text-slider",
    "/docs/components/type-writer",
  ]

  const templatePages = ["/templates/real-estate-investment-page"]

  // Combine all pages
  const allPages = [...staticPages, ...componentPages, ...templatePages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1 : page.startsWith("/docs") ? 0.8 : 0.6,
  }))
}
