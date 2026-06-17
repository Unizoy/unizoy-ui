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
      title: "Components",
      href: "/docs/components/animated-tooltip",
    },
    {
      title: "Template",
      href: "/templates",
    },
    {
      title: "Need Custom Components?",
      href: "https://unizoy.com/contact?utm_source=ui",
    },
  ],
  sidebarNav: [
    {
      title: "Components",
      items: [
        {
          title: "Animated Tooltip",
          href: "/docs/components/animated-tooltip",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Carousel ",
          href: "/docs/components/carousel",
          items: [],
        },
        {
          title: "Copy Icon",
          href: "/docs/components/copy-icon",
          items: [],
        },
        {
          title: "Custom Pointer",
          href: "/docs/components/custom-pointer",
          items: [],
        },
        {
          title: "Draggable Carousel",
          href: "/docs/components/draggable-carousel",
          items: [],
        },
        {
          title: "Floating Navbar",
          href: "/docs/components/floating-navbar",
          items: [],
        },
        {
          title: "Handlebars",
          href: "/docs/components/handlebars",
          items: [],
        },
        {
          title: "Image Trail",
          href: "/docs/components/image-trail",
          items: [],
        },
         {
          title: "Infinite Moving Cards",
          href: "/docs/components/infinite-moving-cards",
          items: [],
        },
        {
          title: "Motion Cards",
          href: "/docs/components/motion-cards",
          items: [],
        },
        {
          title: "Product Preview",
          href: "/docs/components/product-preview",
          items: [],
        },
        {
          title: "Reveal Text",
          href: "/docs/components/reveal-text",
          items: [],
        },
        {
          title: "Rotating Text",
          href: "/docs/components/rotating-text",
          items: [],
        },
        {
          title: "Rythemic Reveal",
          href: "/docs/components/rythemic-reveal",
          items: [],
        },
        {
          title: "Navigation Icon",
          href: "/docs/components/navigation-icon",
          items: [],
        },
        {
          title: "Scaling Sliding Cards",
          href: "/docs/components/scaling-sliding-cards",
          items: [],
        },
        {
          title: "Scroll Opacity Effect",
          href: "/docs/components/scroll-opacity-effect",
          items: [],
        },
        {
          title: "Scroll Text Flow",
          href: "/docs/components/scroll-text-flow",
          items: [],
        },
        {
          title: "Scrolling Cards",
          href: "/docs/components/scrolling-cards",
          items: [],
        },
        {
          title: "Scrolling Video Cards",
          href: "/docs/components/scrolling-video-cards",
          items: [],
        },
        {
          title: "Sliding Cards",
          href: "/docs/components/sliding-cards",
          items: [],
        },
        {
          title: "Testimonial",
          href: "/docs/components/testimonial",
          items: [],
        },
        {
          title: "Text Hover Effect",
          href: "/docs/components/text-hover-effect",
          items: [],
        },
        {
          title: "Text Rollup Effect",
          href: "/docs/components/text-rollup-effect",
          items: [],
        },
        {
          title: "Text Slider",
          href: "/docs/components/text-slider",
          items: [],
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
