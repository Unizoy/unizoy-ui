import { Metadata } from "next"
import { siteConfig } from "@/config/site"

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
  noindex?: boolean
  nofollow?: boolean
}

export function generateSEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  ogType = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  noindex = false,
  nofollow = false,
}: SEOProps = {}): Metadata {
  // Don't add site name here since Next.js template will handle it
  const metaTitle = title || siteConfig.name

  const metaDescription = description || siteConfig.description
  const metaKeywords = [
    ...keywords,
    "Next.js",
    "React",
    "Tailwind CSS",
    "UI Components",
    "Design System",
    "TypeScript",
    "Radix UI",
    "unizoy",
  ]

  const url = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url
  const image = ogImage || siteConfig.ogImage

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: authors
      ? authors.map((name) => ({ name }))
      : [
          {
            name: "unizoy",
            url: "https://ui.unizoy.com",
          },
        ],
    creator: "unizoy",
    publisher: "unizoy",
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [image],
      creator: "@unizoyofficial",
    },
    alternates: {
      canonical: url,
    },
  }

  // Add article-specific metadata
  if (ogType === "article") {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: authors || ["unizoy"],
      section,
      tags,
    }
  }

  return metadata
}

// Predefined SEO templates for common pages
export const seoTemplates = {
  home: {
    title: "Copy-Paste UI Components",
    description:
      "Beautiful, accessible, and customizable React components built with Tailwind CSS. Copy and paste components to save development time.",
    keywords: [
      "UI components",
      "React components",
      "Tailwind CSS",
      "Design system",
      "Copy paste",
      "Frontend development",
    ],
  },

  docs: {
    title: "Documentation",
    description:
      "Learn how to use unizoy/ui components in your React and Next.js projects. Complete guides, examples, and API references.",
    keywords: [
      "documentation",
      "guides",
      "tutorial",
      "API reference",
      "React docs",
      "Next.js",
    ],
  },

  components: {
    title: "Components",
    description:
      "Browse our collection of beautiful, accessible React components. Each component is fully customizable and ready to use.",
    keywords: [
      "UI components",
      "React components",
      "component library",
      "design system",
      "Tailwind CSS",
    ],
  },

  examples: {
    title: "Examples",
    description:
      "See unizoy/ui components in action with real-world examples and use cases. Get inspired for your next project.",
    keywords: [
      "examples",
      "demos",
      "showcase",
      "use cases",
      "inspiration",
      "templates",
    ],
  },

  blocks: {
    title: "Blocks",
    description:
      "Pre-built sections and layouts using unizoy/ui components. Perfect starting points for your web applications.",
    keywords: [
      "blocks",
      "sections",
      "layouts",
      "templates",
      "pre-built",
      "starter",
    ],
  },

  templates: {
    title: "Templates",
    description:
      "Complete application templates built with unizoy/ui. Download and customize for your projects.",
    keywords: [
      "templates",
      "starter templates",
      "boilerplate",
      "application templates",
      "download",
    ],
  },
}

// Generate structured data for better SEO
export function generateStructuredData(
  type: "Website" | "SoftwareApplication" | "Article",
  data: any
) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
  }

  switch (type) {
    case "Website":
      return {
        ...baseData,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          "@type": "Organization",
          name: "unizoy",
          url: "https://unizoy.com",
        },
        ...data,
      }

    case "SoftwareApplication":
      return {
        ...baseData,
        name: siteConfig.name,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        ...data,
      }

    case "Article":
      return {
        ...baseData,
        headline: data.title,
        description: data.description,
        author: {
          "@type": "Organization",
          name: "unizoy",
        },
        publisher: {
          "@type": "Organization",
          name: "unizoy",
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/logo.png`,
          },
        },
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime,
        ...data,
      }

    default:
      return baseData
  }
}
