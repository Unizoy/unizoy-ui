// @ts-nocheck
import * as React from "react"

export const Index: Record<string, any> = {
 
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
        () => import("@/registry/ui/custom-pointer")
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
        () => import("@/registry/examples/custom-pointer-demo")
      ),
      source: "",
      meta: undefined,
    },
     "button": {
      name: "button",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/button.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: ["animations"],
      component: React.lazy(
        () => import("@/registry/ui/button")
      ),
      source: "",
      meta: undefined,
    },
    "button-demo": {
      name: "button-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/examples/button-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: ["button"],
      component: React.lazy(
        () => import("@/registry/examples/button-demo")
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
            "@/registry/examples/custom-pointer-custom-cursor"
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
        () => import("@/registry/ui/draggable-carousel")
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
        () => import("@/registry/examples/draggable-carousel-demo")
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
        () => import("@/registry/ui/floating-navbar")
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
        () => import("@/registry/examples/floating-navbar-demo")
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
        () => import("@/registry/ui/motion-cards")
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
        () => import("@/registry/examples/motion-cards-demo")
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
        () => import("@/registry/ui/product-preview")
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
        () => import("@/registry/examples/product-preview-demo")
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
        () => import("@/registry/ui/rotating-text")
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
        () => import("@/registry/examples/rotating-text-demo")
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
        () => import("@/registry/ui/rythemic-reveal")
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
        () => import("@/registry/examples/rythemic-reveal-demo")
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
        () => import("@/registry/ui/text-hover-effect")
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
        () => import("@/registry/examples/text-hover-effect-demo")
      ),
      source: "",
      meta: undefined,
    },
    "text-rollup-effect": {
      name: "text-rollup-effect",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/text-rollup-effect.tsx",
          type: "registry:ui",
          target: "",
        },
      ] ,
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/ui/text-rollup-effect")
      ),
      source: "",
      meta: undefined,
     },
     "text-rollup-effect-demo": {
      name: "text-rollup-effect-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["text-rollup-effect"],
      files: [
        {
          path: "registry/new-york/examples/text-rollup-effect-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/examples/text-rollup-effect-demo")
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
        () => import("@/registry/ui/text-slider")
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
        () => import("@/registry/examples/text-slider-demo")
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
        () => import("@/registry/ui/copy-icon")
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
        () => import("@/registry/examples/copy-icon-demo")
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
        () => import("@/registry/ui/carousel")
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
        () => import("@/registry/examples/carousel-demo")
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
        () => import("@/registry/ui/typewriter")
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
        () => import("@/registry/examples/typewriter-demo")
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
        () => import("@/registry/ui/image-trail")
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
        () => import("@/registry/examples/image-trail-demo")
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
        () => import("@/registry/ui/infinite-moving-cards")
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
        () => import("@/registry/examples/infinite-moving-cards-demo")
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
        () => import("@/registry/ui/navigation-icon")
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
        () => import("@/registry/examples/navigation-icon-demo")
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
        () => import("@/registry/ui/animated-tooltip")
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
        () => import("@/registry/examples/animated-tooltip-demo")
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
        () => import("@/registry/ui/scrolling-cards")
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
        () => import("@/registry/examples/scrolling-cards-demo")
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
        () => import("@/registry/examples/snapping-scroll-cards-demo")
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
        () => import("@/registry/ui/sliding-cards")
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
        () => import("@/registry/examples/sliding-cards-demo")
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
        () => import("@/registry/ui/scaling-sliding-cards")
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
        () => import("@/registry/examples/scaling-sliding-cards-demo")
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
        () => import("@/registry/ui/scrolling-video-cards")
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
        () => import("@/registry/examples/scrolling-video-cards-demo")
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
        () => import("@/registry/ui/scroll-text-flow")
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
        () => import("@/registry/examples/scroll-text-flow-demo")
      ),
      source: "",
      meta: undefined,
    },
    "scroll-opacity-effect": {
      name: "scroll-opacity-effect",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york/ui/scroll-opacity-effect.tsx",
          type: "registry:ui",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/ui/scroll-opacity-effect")
      ),
      source: "",
      meta: undefined,
    },
    "scroll-opacity-effect-demo": {
      name: "scroll-opacity-effect-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["scroll-opacity-effect"],
      files: [
        {
          path: "registry/new-york/examples/scroll-opacity-effect-demo.tsx",
          type: "registry:example",
          target: "",
        },
      ],
      categories: undefined,
      component: React.lazy(
        () => import("@/registry/examples/scroll-opacity-effect-demo")
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
        () => import("@/registry/ui/testimonial")
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
        () => import("@/registry/examples/testimonial-demo")
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
        () => import("@/registry/ui/reveal-text")
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
        () => import("@/registry/examples/reveal-text-demo")
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
        () => import("@/registry/examples/reveal-text-demo2")
      ),
      source: "",
      meta: undefined,
    }
  

 
}
