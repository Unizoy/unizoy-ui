// @ts-nocheck
import * as React from "react";

export const Index: Record<string, any> = {
  "new-york": {
    "custom-pointer": {
      name: "custom-pointer",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [{
        path: "registry/new-york/ui/custom-pointer.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: ["animations"],
      component: React.lazy(() => import("@/registry/new-york/ui/custom-pointer.tsx")),
      source: "",
      meta: undefined,
    },
    "custom-pointer-demo": {
      name: "custom-pointer-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [{
        path: "registry/new-york/examples/custom-pointer-demo.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: ["custom-pointer"],
      component: React.lazy(() => import("@/registry/new-york/examples/custom-pointer-demo.tsx")),
      source: "",
      meta: undefined,
    },
    "custom-pointer-custom-cursor": {
      name: "custom-pointer-custom-cursor",
      description: "",
      type: "registry:example",
      registryDependencies: ["custom-cursor"],
      files: [{
        path: "registry/new-york/examples/custom-pointer-custom-cursor.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/new-york/examples/custom-pointer-custom-cursor.tsx")),
      source: "",
      meta: undefined,
    },
    "product-preview": {
    name: "product-preview",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{
      path: "registry/new-york/ui/product-preview.tsx",
      type: "registry:ui",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/ui/product-preview.tsx")),
    source: "",
    meta: undefined,
  },
  "product-preview-demo": {
    name: "product-preview-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["product-preview"],
    files: [{
      path: "registry/new-york/examples/product-preview-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/examples/product-preview-demo.tsx")),
    source: "",
    meta: undefined,
  },
  "rotating-text": {
    name: "rotating-text",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{
      path: "registry/new-york/ui/rotating-text.tsx",
      type: "registry:ui",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/ui/rotating-text.tsx")),
    source: "",
    meta: undefined,
  },
  "rotating-text-demo": {
    name: "rotating-text-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["rotating-text"],
    files: [{
      path: "registry/new-york/examples/rotating-text-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/examples/rotating-text-demo.tsx")),
    source: "",
    meta: undefined,
  },
  "text-slider": {
    name: "text-slider",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{
      path: "registry/new-york/ui/text-slider.tsx",
      type: "registry:ui",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/ui/text-slider.tsx")),
    source: "",
    meta: undefined,
  },
  "text-slider-demo": {
    name: "text-slider-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["text-slider"],
    files: [{
      path: "registry/new-york/examples/text-slider-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/examples/text-slider-demo.tsx")),
    source: "",
    meta: undefined,
  },
  "copy-icon": {
    name: "copy-icon",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{
      path: "registry/new-york/ui/copy-icon.tsx",
      type: "registry:ui",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/ui/copy-icon.tsx")),
    source: "",
    meta: undefined,
  },
  "copy-icon-demo": {
    name: "copy-icon-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["copy-icon"],
    files: [{
      path: "registry/new-york/examples/copy-icon-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/examples/copy-icon-demo.tsx")),
    source: "",
    meta: undefined,
  },
  "carousel": {
    name: "carousel",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{
      path: "registry/new-york/ui/carousel.tsx",
      type: "registry:ui",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/ui/carousel.tsx")),
    source: "",
    meta: undefined,
  },
  "carousel-demo": {
    name: "carousel-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [{
      path: "registry/new-york/examples/carousel-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/examples/carousel-demo.tsx")),
    source: "",
    meta: undefined,
  },
"typewriter": {
    name: "typewriter",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{
      path: "registry/new-york/ui/typewriter.tsx",
      type: "registry:ui",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/ui/typewriter.tsx")),
    source: "",
    meta: undefined,
  },
  "typewriter-demo": {
    name: "typewriter-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["typewriter"],
    files: [{
      path: "registry/new-york/examples/typewriter-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/examples/typewriter-demo.tsx")),
    source: "",
    meta: undefined,
  },
  "navigation-icon": {
    name: "navigation-icon",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{
      path: "registry/new-york/ui/navigation-icon.tsx",
      type: "registry:ui",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/ui/navigation-icon.tsx")),
    source: "",
    meta: undefined,
  },
  "navigation-icon-demo": {
    name: "navigation-icon-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["navigation-icon"],
    files: [{
      path: "registry/new-york/examples/navigation-icon-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/examples/navigation-icon-demo.tsx")),
    source: "",
    meta: undefined,
  },
  "animated-tooltip": {
    name: "animated-tooltip",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{
      path: "registry/new-york/ui/animated-tooltip.tsx",
      type: "registry:ui",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/ui/animated-tooltip.tsx")),
    source: "",
    meta: undefined,
  },
  "animated-tooltip-demo": {
    name: "animated-tooltip-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["animated-tooltip"],
    files: [{
      path: "registry/new-york/examples/animated-tooltip-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/examples/animated-tooltip-demo.tsx")),
    source: "",
    meta: undefined,
  },
},





  "default": {
    "custom-pointer": {
      name: "custom-pointer",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/ui/custom-pointer.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/ui/custom-pointer.tsx")),
      source: "",
      meta: undefined,
    },
   
   
    "custom-pointer-demo": {
      name: "custom-pointer-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/examples/custom-pointer-demo.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: ["custom-pointer"],
      component: React.lazy(() => import("@/registry/default/examples/custom-pointer-demo.tsx")),
      source: "",
      meta: undefined,
    },
    "custom-pointer-custom-cursor": {
      name: "custom-pointer-custom-cursor",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/examples/custom-pointer-custom-cursor.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: ["custom-pointer"],
      component: React.lazy(() => import("@/registry/default/examples/custom-pointer-custom-cursor.tsx")),
      source: "",
      meta: undefined,
    },
    "text-slider": {
      name: "text-slider",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/ui/text-slider.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/ui/text-slider.tsx")),
      source: "",
      meta: undefined,
    },
    "text-slider-demo": {
      name: "text-slider-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/examples/text-slider-demo.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/examples/text-slider-demo.tsx")),
      source: "",
      meta: undefined,
    },
    "copy-icon": {
      name: "copy-icon",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/ui/copy-icon.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/ui/copy-icon.tsx")),
      source: "",
      meta: undefined,
    },
    "copy-icon-demo": {
      name: "copy-icon-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/examples/copy-icon-demo.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/examples/copy-icon-demo.tsx")),
      source: "",
      meta: undefined,
    },
    "carousel": {
      name: "carousel",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/ui/carousel.tsx",
        type: "registry:ui",
        target: ""
      }],
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
      files: [{
        path: "registry/default/examples/carousel-demo.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/examples/carousel-demo.tsx")),
      source: "",
      meta: undefined,
    },
    "typewriter": {
      name: "typewriter",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/ui/typewriter.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/ui/typewriter.tsx")),
      source: "",
      meta: undefined,
    },
    "typewriter-demo": {
      name: "typewriter-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/examples/typewriter-demo.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/examples/typewriter-demo.tsx")),
      source: "",
      meta: undefined,
    },
    "navigation-icon": {
      name: "navigation-icon",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/ui/navigation-icon.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/ui/navigation-icon.tsx")),
      source: "",
      meta: undefined,
    },
    "navigation-icon-demo": {
      name: "navigation-icon-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/examples/navigation-icon-demo.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/examples/navigation-icon-demo.tsx")),
      source: "",
      meta: undefined,
    },
    "animated-tooltip": {
      name: "animated-tooltip",
      description: "",
      type: "registry:ui",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/ui/animated-tooltip.tsx",
        type: "registry:ui",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/ui/animated-tooltip.tsx")),
      source: "",
      meta: undefined,
    },
    "animated-tooltip-demo": {
      name: "animated-tooltip-demo",
      description: "",
      type: "registry:example",
      registryDependencies: undefined,
      files: [{
        path: "registry/default/examples/animated-tooltip-demo.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/examples/animated-tooltip-demo.tsx")),
      source: "",
      meta: undefined,
    },
  }
}