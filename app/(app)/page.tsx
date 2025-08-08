import HeroSection from "@/components/hero-section"
import HeroSection2 from "@/components/hero-section-2"
import HeroGridSection from "@/components/hero-grid-section"
import HeroVideoGrid from "@/components/hero-video-grid"
import { TextHoverEffect } from "@/registry/ui/text-hover-effect"
import Motto from "@/components/hero-bulg-out"
import HeroRythem from "@/components/hero-rythemic"
import {
  graphOrganizationConfig,
  graphWebsiteConfig,
} from "@/config/graph-json-ld"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: siteConfig.logo,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-6353298389",
    contactType: "Customer service",
    email: "hello@unizoy.com",
    areaServed: "Worldwide",
    availableLanguage: "en",
  },
  sameAs: graphOrganizationConfig.sameAs,
}

const jsonLdPage = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": siteConfig.url,
      url: siteConfig.url,
      name: siteConfig.title,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#organization`,
      },
      datePublished: "2023-08-10T12:00:00+05:30",
      dateModified: "2024-12-11T20:00:00+05:30",
      description: siteConfig.description,
      inLanguage: "en",
    },
    { ...graphWebsiteConfig },
    { ...graphOrganizationConfig },
  ],
}

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    { name: "Ankush", url: "https://github.com/mrjaiswal122" },
    { name: "Awais Khan", url: "https://github.com/awaiskhan21" },
    { name: "Op", url: "https://github.com/Op-Pautu" },
    { name: "Rishi", url: "https://github.com/Rishikeshari7" },
  ],
  metadataBase: siteConfig.metadataBase,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
    url: "/",
    images: ["/meta/opengraph-image.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/meta/opengraph-image.png"],
    creator: "@unizoy",
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

  manifest: `/meta/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}
export default function IndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPage) }}
      />
      <HeroSection />
      <HeroVideoGrid />
      <HeroSection2 />
      <HeroGridSection />
      <HeroRythem />
      <section className="container-wrapper">
        <TextHoverEffect text="UNIZOY" />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
    </>
  )
}
