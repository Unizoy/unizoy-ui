import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import "@/styles/mdx.css"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, ExternalLink } from "lucide-react"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"
import { DocsPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"
import { badgeVariants } from "@/components/ui/badge"
import {
  graphOrganizationConfig,
  graphWebsiteConfig,
} from "@/config/graph-json-ld"
interface DocPageProps {
  params: {
    slug: string[]
  }
}

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
async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  const docTitle = allDocs.map((doc) => doc.title)
  console.log("tite", docTitle)
  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: `${doc.title} - ${siteConfig.name}`,
    description: doc.description,
    openGraph: {
      title: `${doc.title} - ${siteConfig.name}`,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
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
      title: `${doc.title} - ${siteConfig.name}`,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: "@unizoy",
    },
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPage) }}
      />
      <main className="relative py-6 lg:gap-10 lg:py-8 ">
        <div className="mx-auto w-full min-w-0 ">
          <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
            <div className="truncate">Docs</div>
            <ChevronRight className="h-3.5 w-3.5" />
            <div className="text-foreground">{doc.title}</div>
          </div>
          <div className="space-y-2">
            <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
              {doc.title}
            </h1>
            {doc.description && (
              <p className="text-base text-muted-foreground">
                <Balancer>{doc.description}</Balancer>
              </p>
            )}
          </div>
          {doc.links ? (
            <div className="flex items-center space-x-2 pt-4">
              {doc.links?.doc && (
                <Link
                  href={doc.links.doc}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    badgeVariants({ variant: "secondary" }),
                    "gap-1"
                  )}
                >
                  Docs
                  <ExternalLink className="h-3 w-3" />
                </Link>
              )}
              {doc.links?.api && (
                <Link
                  href={doc.links.api}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    badgeVariants({ variant: "secondary" }),
                    "gap-1"
                  )}
                >
                  API Reference
                  <ExternalLink className="h-3 w-3" />
                </Link>
              )}
            </div>
          ) : null}
          <div className="pb-12 pt-8">
            <Mdx code={doc.body.code} />
          </div>
          {/* <DocsPager doc={doc} /> */}
        </div>
        {/* <div className="hidden text-sm xl:block">
        <div className="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div className="no-scrollbar h-full overflow-auto pb-10">
            {doc.toc && <DashboardTableOfContents toc={toc} />}
          </div>
        </div>
      </div> */}
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
    </>
  )
}
