import { SEOProps } from "@/lib/seo"

// SEO configurations for specific pages
export const pageSEO: Record<string, SEOProps> = {
  // Home page
  "/": {
    title: "Beautiful React Components - Copy & Paste UI Library",
    description:
      "Build stunning web applications faster with our collection of copy-paste React components. Built with Tailwind CSS, TypeScript, and Radix UI primitives.",
    keywords: [
      "React components",
      "UI library",
      "Tailwind CSS",
      "TypeScript",
      "copy paste",
      "web development",
      "frontend",
    ],
    canonical: "/",
  },

  // Documentation pages
  "/docs": {
    title: "Documentation - Getting Started Guide",
    description:
      "Complete documentation for unizoy/ui component library. Learn installation, customization, and best practices for React components.",
    keywords: [
      "documentation",
      "getting started",
      "installation",
      "guide",
      "React",
      "components",
    ],
    canonical: "/docs",
  },

  "/docs/installation": {
    title: "Installation Guide - Setup unizoy/ui",
    description:
      "Step-by-step installation guide for unizoy/ui. Learn how to install and configure components in your React or Next.js project.",
    keywords: [
      "installation",
      "setup",
      "configuration",
      "Next.js",
      "React",
      "getting started",
    ],
    canonical: "/docs/installation",
  },

  "/docs/theming": {
    title: "Theming Guide - Customize Your Components",
    description:
      "Learn how to customize colors, typography, and styling in unizoy/ui components. Complete theming documentation.",
    keywords: [
      "theming",
      "customization",
      "colors",
      "typography",
      "CSS variables",
      "design tokens",
    ],
    canonical: "/docs/theming",
  },

  "/docs/components": {
    title: "Component Documentation - React UI Components",
    description:
      "Browse complete documentation for all unizoy/ui components. Props, examples, and customization options.",
    keywords: [
      "components",
      "documentation",
      "props",
      "API",
      "examples",
      "React",
    ],
    canonical: "/docs/components",
  },

  // Component categories
  "/docs/components/button": {
    title: "Button Component - Interactive UI Element",
    description:
      "Accessible button component with multiple variants, sizes, and states. Built with Radix UI primitives.",
    keywords: ["button", "interactive", "accessible", "variants", "Radix UI"],
    canonical: "/docs/components/button",
  },

  "/docs/components/card": {
    title: "Card Component - Content Container",
    description:
      "Flexible card component for displaying content. Supports headers, footers, and custom layouts.",
    keywords: ["card", "container", "layout", "content", "flexible"],
    canonical: "/docs/components/card",
  },

  "/docs/components/form": {
    title: "Form Components - Input & Validation",
    description:
      "Complete form component suite with validation, accessibility, and error handling. Built with React Hook Form.",
    keywords: [
      "form",
      "input",
      "validation",
      "accessibility",
      "React Hook Form",
    ],
    canonical: "/docs/components/form",
  },

  // Examples section
  "/examples": {
    title: "Component Examples - Real-world Use Cases",
    description:
      "Explore real-world examples and implementations of unizoy/ui components. Get inspiration for your projects.",
    keywords: [
      "examples",
      "demos",
      "implementations",
      "real-world",
      "inspiration",
    ],
    canonical: "/examples",
  },

  "/examples/dashboard": {
    title: "Dashboard Example - Admin Interface",
    description:
      "Complete dashboard example built with unizoy/ui components. Includes charts, tables, and navigation.",
    keywords: ["dashboard", "admin", "charts", "tables", "interface"],
    canonical: "/examples/dashboard",
  },

  "/examples/authentication": {
    title: "Authentication Examples - Login & Signup Forms",
    description:
      "Beautiful authentication forms and flows using unizoy/ui components. Login, signup, and password reset examples.",
    keywords: ["authentication", "login", "signup", "forms", "password reset"],
    canonical: "/examples/authentication",
  },

  // Templates section
  "/templates": {
    title: "Application Templates - Starter Projects",
    description:
      "Download complete application templates built with unizoy/ui. Perfect starting points for your projects.",
    keywords: [
      "templates",
      "starter",
      "boilerplate",
      "application",
      "download",
    ],
    canonical: "/templates",
  },

  // Blocks section
  "/blocks": {
    title: "UI Blocks - Pre-built Sections",
    description:
      "Copy-paste UI blocks and sections built with unizoy/ui components. Headers, footers, heroes, and more.",
    keywords: [
      "blocks",
      "sections",
      "pre-built",
      "headers",
      "footers",
      "heroes",
    ],
    canonical: "/blocks",
  },

  // Colors and theming
  "/colors": {
    title: "Color System - Design Tokens",
    description:
      "Explore the unizoy/ui color system. Semantic colors, dark mode support, and CSS variables.",
    keywords: [
      "colors",
      "design tokens",
      "dark mode",
      "CSS variables",
      "palette",
    ],
    canonical: "/colors",
  },

  // About pages
  "/about": {
    title: "About unizoy/ui - Open Source Component Library",
    description:
      "Learn about the unizoy/ui project, our mission, and the team behind the component library.",
    keywords: ["about", "open source", "mission", "team", "project"],
    canonical: "/about",
  },

  // Blog/Changelog
  "/changelog": {
    title: "Changelog - What's New in unizoy/ui",
    description:
      "Stay updated with the latest changes, new components, and improvements in unizoy/ui.",
    keywords: [
      "changelog",
      "updates",
      "new features",
      "improvements",
      "releases",
    ],
    canonical: "/changelog",
  },
}

// Category-based SEO for dynamic routes
export const categorySEO = {
  components: {
    titleTemplate: "%s Component - React UI Library",
    descriptionTemplate:
      "Learn how to use the %s component from unizoy/ui. Complete documentation with examples and customization options.",
    keywords: ["component", "React", "UI", "documentation", "examples"],
  },

  examples: {
    titleTemplate: "%s Example - unizoy/ui Implementation",
    descriptionTemplate:
      "See the %s component in action with this practical example. Copy the code and customize for your project.",
    keywords: ["example", "implementation", "demo", "practical"],
  },

  blocks: {
    titleTemplate: "%s Block - Ready-to-use UI Section",
    descriptionTemplate:
      "Copy-paste %s block built with unizoy/ui components. Perfect for quick prototyping and development.",
    keywords: ["block", "section", "copy-paste", "prototyping"],
  },

  templates: {
    titleTemplate: "%s Template - Application Starter",
    descriptionTemplate:
      "Download the %s template built with unizoy/ui. Complete application ready for customization.",
    keywords: ["template", "starter", "application", "download"],
  },
}

// Generate SEO for dynamic routes
export function generateDynamicSEO(
  category: keyof typeof categorySEO,
  name: string,
  customData?: Partial<SEOProps>
): SEOProps {
  const categoryConfig = categorySEO[category]

  return {
    title: categoryConfig.titleTemplate.replace("%s", name),
    description: categoryConfig.descriptionTemplate.replace("%s", name),
    keywords: [...categoryConfig.keywords, name.toLowerCase()],
    canonical: `/${category}/${name.toLowerCase().replace(/\s+/g, "-")}`,
    ...customData,
  }
}
