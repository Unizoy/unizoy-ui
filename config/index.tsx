// @ts-nocheck
import * as React from "react"

export const Index: Record<string, any> = {
  "new-york": {
    "custom-pointer": {
      name: "custom-pointer",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/custom-pointer.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: ["animations"],
      component: React.lazy(
        () => import("@/registry/new-york/ui/custom-pointer.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "custom-pointer-demo": {
      name: "custom-pointer-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/examples/custom-pointer-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: ["custom-pointer"],
      component: React.lazy(
        () => import("@/registry/new-york/examples/custom-pointer-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "custom-pointer-custom-cursor": {
      name: "custom-pointer-custom-cursor",
      description: "",
      type: "registry:example",
      registryDependencies: ["custom-cursor"],
      files: [
        {
          path: "registry/new-york/examples/custom-pointer-custom-cursor.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () =>
          import(
            "@/registry/new-york/examples/custom-pointer-custom-cursor.tsx"
          )
      ),
      source: "",
      meta: undefined,
    },
    "draggable-carousel": {
      name: "draggable-carousel",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/draggable-carousel.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/draggable-carousel.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "draggable-carousel-demo": {
      name: "prodraggable-carousel-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["draggable-carousel"],
      files: [
        {
          path: "registry/new-york/examples/draggable-carousel-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/draggable-carousel-demo.tsx")
      ),
      source: "",
      meta: undefined,
    }, 
    "floating-navbar": {
      name: "floating-navbar",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/floating-navbar.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/floating-navbar.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "floating-navbar-demo": {
      name: "profloating-navbar-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["floating-navbar"],
      files: [
        {
          path: "registry/new-york/examples/floating-navbar-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/floating-navbar-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "motion-cards": {
      name: "motion-cards",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/motion-cards.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/motion-cards.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "motion-cards-demo": {
      name: "product-preview-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["motion-cards"],
      files: [
        {
          path: "registry/new-york/examples/motion-cards-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/motion-cards-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "product-preview": {
      name: "product-preview",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/product-preview.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/product-preview.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "product-preview-demo": {
      name: "product-preview-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["product-preview"],
      files: [
        {
          path: "registry/new-york/examples/product-preview-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/product-preview-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "rotating-text": {
      name: "rotating-text",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/rotating-text.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/rotating-text.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "rotating-text-demo": {
      name: "rotating-text-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["rotating-text"],
      files: [
        {
          path: "registry/new-york/examples/rotating-text-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/rotating-text-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "rythemic-reveal": {
      name: "rythemic-reveal",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/rythemic-reveal.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/rythemic-reveal.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "rythemic-reveal-demo": {
      name: "rythemic-reveal-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["rythemic-reveal"],
      files: [
        {
          path: "registry/new-york/examples/rythemic-reveal-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/rythemic-reveal-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "text-hover-effect": {
      name: "text-hover-effect",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/text-hover-effect.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/text-hover-effect.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "text-hover-effect-demo": {
      name: "text-hover-effect-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["text-hover-effect"],
      files: [
        {
          path: "registry/new-york/examples/text-hover-effect-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/text-hover-effect-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "text-slider": {
      name: "text-slider",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/text-slider.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/text-slider.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "text-slider-demo": {
      name: "text-slider-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["text-slider"],
      files: [
        {
          path: "registry/new-york/examples/text-slider-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/text-slider-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "copy-icon": {
      name: "copy-icon",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/copy-icon.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/copy-icon.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "copy-icon-demo": {
      name: "copy-icon-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["copy-icon"],
      files: [
        {
          path: "registry/new-york/examples/copy-icon-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/copy-icon-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "carousel": {
      name: "carousel",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/carousel.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/carousel.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "carousel-demo": {
      name: "carousel-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: [
        {
          path: "registry/new-york/examples/carousel-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/carousel-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "typewriter": {
      name: "typewriter",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/typewriter.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/typewriter.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "typewriter-demo": {
      name: "typewriter-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["typewriter"],
      files: [
        {
          path: "registry/new-york/examples/typewriter-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/typewriter-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "image-trail": {
      name: "image-trail",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/image-trail.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/image-trail.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "image-trail-demo": {
      name: "image-trail-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["image-trail"],
      files: [
        {
          path: "registry/new-york/examples/image-trail-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/image-trail-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "infinite-moving-cards": {
      name: "infinite-moving-cards",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/infinite-moving-cards.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/infinite-moving-cards.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "infinite-moving-cards-demo": {
      name: "infinite-moving-cards-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["infinite-moving-cards"],
      files: [
        {
          path: "registry/new-york/examples/infinite-moving-cards-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/infinite-moving-cards-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "navigation-icon": {
      name: "navigation-icon",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/navigation-icon.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/navigation-icon.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "navigation-icon-demo": {
      name: "navigation-icon-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["navigation-icon"],
      files: [
        {
          path: "registry/new-york/examples/navigation-icon-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/navigation-icon-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "animated-tooltip": {
      name: "animated-tooltip",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/animated-tooltip.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/animated-tooltip.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "animated-tooltip-demo": {
      name: "animated-tooltip-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["animated-tooltip"],
      files: [
        {
          path: "registry/new-york/examples/animated-tooltip-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/animated-tooltip-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
     "scrolling-cards": {
      name: "scrolling-cards",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/scrolling-cards.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/scrolling-cards.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "scrolling-cards-demo": {
      name: "scrolling-cards-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scrolling-cards"],
      files: [
        {
          path: "registry/new-york/examples/scrolling-cards-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/scrolling-cards-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
     "snapping-scroll-cards-demo": {
      name: "snapping-scroll-cards-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scrolling-cards"],
      files: [
        {
          path: "registry/new-york/examples/snapping-scroll-cards-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/snapping-scroll-cards-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "sliding-cards": {
      name: "sliding-cards",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/sliding-cards.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/sliding-cards.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "sliding-cards-demo": {
      name: "sliding-cards-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["sliding-cards"],
      files: [
        {
          path: "registry/new-york/examples/sliding-cards-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/sliding-cards-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },

    "scaling-sliding-cards": {
      name: "scaling-sliding-cards",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/scaling-sliding-cards.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/scaling-sliding-cards.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "scaling-sliding-cards-demo": {
      name: "scaling-sliding-cards-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scaling-sliding-cards"],
      files: [
        {
          path: "registry/new-york/examples/scaling-sliding-cards-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/scaling-sliding-cards-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "scrolling-video-cards": {
      name: "scrolling-video-cards",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/scrolling-video-cards.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/scrolling-video-cards.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "scrolling-video-cards-demo": {
      name: "scrolling-video-cards-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scrolling-video-cards"],
      files: [
        {
          path: "registry/new-york/examples/scrolling-video-cards-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/scrolling-video-cards-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "scroll-text-flow": {
      name: "scroll-text-flow",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/scroll-text-flow.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/scroll-text-flow.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "scroll-text-flow-demo": {
      name: "scroll-text-flow-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scroll-text-flow"],
      files: [
        {
          path: "registry/new-york/examples/scroll-text-flow-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/scroll-text-flow-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },

    "testimonial": {
      name: "testimonial",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/testimonial.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/testimonial.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "testimonial-demo": {
      name: "testimonial-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["testimonial"],
      files: [
        {
          path: "registry/new-york/examples/testimonial-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/testimonial-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "reveal-text": {
      name: "reveal-text",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/reveal-text.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/ui/reveal-text.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "reveal-text-demo": {
      name: "reveal-text-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["reveal-text"],
      files: [
        {
          path: "registry/new-york/examples/reveal-text-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/reveal-text-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "reveal-text-demo2": {
      name: "reveal-text-demo2",
      description: "",
      type: "registry:example",
      registryDependencies: ["reveal-text2"],
      files: [
        {
          path: "registry/new-york/examples/reveal-text-demo2.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/new-york/examples/reveal-text-demo2.tsx")
      ),
      source: "",
      meta: undefined,
    },
  },

  default: {
    "custom-pointer": {
      name: "custom-pointer",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/ui/custom-pointer.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/ui/custom-pointer.tsx")
      ),
      source: "",
      meta: undefined,
    },

    "custom-pointer-demo": {
      name: "custom-pointer-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/examples/custom-pointer-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: ["custom-pointer"],
      component: React.lazy(
        () => import("@/registry/default/examples/custom-pointer-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "custom-pointer-custom-cursor": {
      name: "custom-pointer-custom-cursor",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/examples/custom-pointer-custom-cursor.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: ["custom-pointer"],
      component: React.lazy(
        () =>
          import("@/registry/default/examples/custom-pointer-custom-cursor.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "text-slider": {
      name: "text-slider",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/ui/text-slider.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/ui/text-slider.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "text-slider-demo": {
      name: "text-slider-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/examples/text-slider-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/examples/text-slider-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "copy-icon": {
      name: "copy-icon",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/ui/copy-icon.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/ui/copy-icon.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "copy-icon-demo": {
      name: "copy-icon-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/examples/copy-icon-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/examples/copy-icon-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    carousel: {
      name: "carousel",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/ui/carousel.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/ui/carousel.tsx")),
      source: "",
      meta: undefined,
    },
    "carousel-demo": {
      name: "carousel-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/examples/carousel-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/examples/carousel-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    typewriter: {
      name: "typewriter",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/ui/typewriter.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/ui/typewriter.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "typewriter-demo": {
      name: "typewriter-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/examples/typewriter-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/examples/typewriter-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "navigation-icon": {
      name: "navigation-icon",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/ui/navigation-icon.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/ui/navigation-icon.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "navigation-icon-demo": {
      name: "navigation-icon-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/examples/navigation-icon-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/examples/navigation-icon-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "animated-tooltip": {
      name: "animated-tooltip",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/ui/animated-tooltip.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/ui/animated-tooltip.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "animated-tooltip-demo": {
      name: "animated-tooltip-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/examples/animated-tooltip-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/examples/animated-tooltip-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "sliding-cards": {
      name: "sliding-cards",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/ui/sliding-cards.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/ui/sliding-cards.tsx")
      ),
      source: "",
      meta: undefined,
    },
    "sliding-cards-demo": {
      name: "sliding-cards-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/default/examples/sliding-cards-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/default/examples/sliding-cards-demo.tsx")
      ),
      source: "",
      meta: undefined,
    },
  },
}
