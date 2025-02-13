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
  }
}