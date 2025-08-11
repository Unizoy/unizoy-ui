import ContactForm from "@/components/contact-us/contact"
import { siteConfig } from "@/config/site"
import {
  graphOrganizationConfig,
  graphWebsiteConfig,
} from "@/config/graph-json-ld"
import { Metadata } from "next"

// Generate metadata for the templates page
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

export async function generateMetadata(): Promise<Metadata> {
  let title = `Contact Us - Unizoy UI`
  let description = `Dreaming big? Need insights? Got a question? We're here for you no matter who you are!`
  return {
    title: title,
    description: description,
    keywords: [
      "Contact Unizoy UI",
      "Get in Touch with Unizoy UI",
      "Unizoy UI Contact Page",
      "Ask Unizoy UI a Question",
      "Unizoy UI Support and Insights",
      "Contact for Web Solutions",
      "Dream Big with Unizoy UI",
      "Unizoy UI Customer Support",
      "Connect with Unizoy UI Team",
    ],
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `/contact`,
      images: ["/meta/opengraph-image.png"],
      title: title,
      description: description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/meta/opengraph-image.png"],
      creator: "@unizoy",
    },
  }
}
export default function IndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPage) }}
      />
      <div className="flex flex-col items-center justify-center m-12 ">
        <ContactForm />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
    </>
  )
}
