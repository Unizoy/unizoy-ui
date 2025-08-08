import { siteConfig } from "./site"

export const graphOrganizationConfig = {
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    inLanguage: "en",
    "@id": `${siteConfig.url}/#/schema/logo/image/`,
    url: siteConfig.logo,
    contentUrl: siteConfig.logo,
    width: 440,
    height: 140,
    caption: siteConfig.name,
  },
  image: {
    "@id": `${siteConfig.url}/#/schema/logo/image/`,
  },
  sameAs: [
    "https://www.facebook.com/people/Unizoy/61550664177245/",
    "https://x.com/unizoyofficial",
    "https://www.instagram.com/unizoyofficial/",
    "https://www.linkedin.com/company/unizoy",
    "https://www.youtube.com/@Unizoy",
    "https://github.com/Unizoy",
  ],
}

export const graphWebsiteConfig = {
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  inLanguage: "en",
}
