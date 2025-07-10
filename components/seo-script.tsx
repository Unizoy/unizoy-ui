import { generateStructuredData } from "@/lib/seo"

interface SEOScriptProps {
  type: "Website" | "SoftwareApplication" | "Article"
  data?: any
}

export function SEOScript({ type, data = {} }: SEOScriptProps) {
  const structuredData = generateStructuredData(type, data)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface BreadcrumbProps {
  items: Array<{
    name: string
    url?: string
  }>
}

export function BreadcrumbStructuredData({ items }: BreadcrumbProps) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  )
}
