// @ts-nocheck
import * as React from "react";

export const Index:Record<string,any>={
"new-york":{
    "custom-pointer":{
        name:"custom-pointer",
        description:"",
        type:"registry:ui",
        registryDependencies:undefined,
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
    "custom-pointer-demo":{
        name:"custom-pointer-demo",
        description:"",
        type:"registry:example",
        registryDependencies:undefined,
        files: [{
        path: "registry/new-york/examples/custom-pointer-demo.tsx",
        type: "registry:example",
        target: ""
        }],
        categories:["custom-pointer"],
        component: React.lazy(() => import("@/registry/new-york/examples/custom-pointer-demo.tsx")),
        source: "",
        meta: undefined,
    },
    "text-slider":{
      name:"text-slider",
      description:"",
      type:"registry:ui",
      registryDependencies:undefined,
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
  "text-slider-demo":{
    name:"text-slider-demo",
    description:"",
    type:"registry:example",
    registryDependencies:undefined,
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
 "type-writer":{
      name:"type-writer",
      description:"",
      type:"registry:ui",
      registryDependencies:undefined,
      files: [{
      path: "registry/new-york/ui/type-writer.tsx",
      type: "registry:ui",
      target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/new-york/ui/type-writer.tsx")),
      source: "",
      meta: undefined,
  },
  "type-writer-demo":{
    name:"type-writer-demo",
    description:"",
    type:"registry:example",
    registryDependencies:undefined,
    files: [{
    path: "registry/new-york/examples/type-writer-demo.tsx",
    type: "registry:example",
    target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/new-york/examples/type-writer-demo.tsx")),
    source: "",
    meta: undefined,
},
},

"default":{
     "custom-pointer":{
        name:"custom-pointer",
        description:"",
        type:"registry:ui",
        registryDependencies:undefined,
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
     "card-demo": {
      name: "card-demo",
      description: "",
      type: "registry:example",
      registryDependencies: ["card","button","switch"],
      files: [{
        path: "registry/default/examples/card-demo.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/examples/card-demo.tsx")),
      source: "",
      meta: undefined,
    },
    "card-with-form": {
      name: "card-with-form",
      description: "",
      type: "registry:example",
      registryDependencies: ["button","card","input","label","select"],
      files: [{
        path: "registry/default/examples/card-with-form.tsx",
        type: "registry:example",
        target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/examples/card-with-form.tsx")),
      source: "",
      meta: undefined,
    },
    "custom-pointer-demo":{
        name:"custom-pointer-demo",
        description:"",
        type:"registry:example",
        registryDependencies:undefined,
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
    "text-slider":{
      name:"text-slider",
      description:"",
      type:"registry:ui",
      registryDependencies:undefined,
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
  "text-slider-demo":{
    name:"text-slider-demo",
    description:"",
    type:"registry:example",
    registryDependencies:undefined,
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
 "type-writer":{
      name:"type-writer",
      description:"",
      type:"registry:ui",
      registryDependencies:undefined,
      files: [{
      path: "registry/default/ui/type-writer.tsx",
      type: "registry:ui",
      target: ""
      }],
      categories: undefined,
      component: React.lazy(() => import("@/registry/default/ui/type-writer.tsx")),
      source: "",
      meta: undefined,
  },
  "type-writer-demo":{
    name:"type-writer-demo",
    description:"",
    type:"registry:example",
    registryDependencies:undefined,
    files: [{
    path: "registry/default/examples/type-writer-demo.tsx",
    type: "registry:example",
    target: ""
    }],
    categories: undefined,
    component: React.lazy(() => import("@/registry/default/examples/type-writer-demo.tsx")),
    source: "",
    meta: undefined,
},
}



}