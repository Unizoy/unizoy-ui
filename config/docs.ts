import { MainNavItem, SidebarNavItem } from "types/nav"




//To add Component See line 163




export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  chartsNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Charts",
      href: "/charts",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Colors",
      href: "/colors",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "components.json",
          href: "/docs/components-json",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/theming",
          items: [],
        },
        {
          title: "Dark mode",
          href: "/docs/dark-mode",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
        {
          title: "Monorepo",
          href: "/docs/monorepo",
          items: [],
          label: "New",
        },
        {
          title: "Next.js 15 + React 19",
          href: "/docs/react-19",
          items: [],
        },
        {
          title: "Typography",
          href: "/docs/components/typography",
          items: [],
        },
        {
          title: "Open in v0",
          href: "/docs/v0",
          items: [],
        },
        {
          title: "Blocks",
          href: "/docs/blocks",
          items: [],
          label: "New",
        },
        {
          title: "Figma",
          href: "/docs/figma",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Next.js",
          href: "/docs/installation/next",
          items: [],
        },
        {
          title: "Vite",
          href: "/docs/installation/vite",
          items: [],
        },
        {
          title: "Remix",
          href: "/docs/installation/remix",
          items: [],
        },
        {
          title: "Astro",
          href: "/docs/installation/astro",
          items: [],
        },
        {
          title: "Laravel",
          href: "/docs/installation/laravel",
          items: [],
        },
        {
          title: "Gatsby",
          href: "/docs/installation/gatsby",
          items: [],
        },
        {
          title: "Manual",
          href: "/docs/installation/manual",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          title: "Animated Tooltip",
          href: "/docs/components/animated-tooltip",
          items: [],
        },
       
        {
          title: "Copy Icon",
          href: "/docs/components/copy-icon",
          items:[]
        },
        {
          title: "Custom Pointer",
          href: "/docs/components/custom-pointer",
          items:[]
        },
         {
          title: "Draggable Carousel",
          href: "/docs/components/draggable-carousel",
          items:[]
        },
         {
          title: "Image Trail",
          href: "/docs/components/image-trail",
          items:[]
        },
        {
          title:"Motion Cards",
          href:"/docs/components/motion-cards",
          items:[]
        },
        {

          title:"Product Preview",
          href:"/docs/components/product-preview",
          items:[]
        },
        {
          title:"Rotating Text",
          href:"/docs/components/rotating-text",
          items:[]
        },
        {
          title: "Navigation Icon",
          href: "/docs/components/navigation-icon",
          items:[],
        },
        

        {
          title:"Text Slider",
          href:"/docs/components/text-slider",
          items:[]
        },
       
        {
          title: "Typewriter",
          href: "/docs/components/typewriter",
          items: [],
        },
        
      ],
    },
  ],
  chartsNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/charts",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/charts/installation",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/charts/theming",
          items: [],
        },
      ],
    },
    {
      title: "Charts",
      items: [
        {
          title: "Area Chart",
          href: "/docs/charts/area",
          items: [],
        },
        {
          title: "Bar Chart",
          href: "/docs/charts/bar",
          items: [],
        },
        {
          title: "Line Chart",
          href: "/docs/charts/line",
          items: [],
        },
        {
          title: "Pie Chart",
          href: "/docs/charts/pie",
          items: [],
        },
        {
          title: "Radar Chart",
          href: "/docs/charts/radar",
          items: [],
        },
        {
          title: "Radial Chart",
          href: "/docs/charts/radial",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Tooltip",
          href: "/docs/charts/tooltip",
          items: [],
        },
        {
          title: "Legend",
          href: "/docs/charts/legend",
          items: [],
        },
      ],
    },
  ],
}
