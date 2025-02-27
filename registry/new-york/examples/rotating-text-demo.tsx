"use client"

import RotatingText from "@/registry/new-york/ui/rotating-text"
import { useRef } from "react"

export default function RotatingTextDemo() {
  const parentRef = useRef<HTMLDivElement>(null)
  return (
    <div ref={parentRef} className="w-full h-screen overflow-scroll ">
      <div className="w-full h-40 bg-black border-b flex justify-center items-center border-white text-white px-3">
        Scroll to see the animation
      </div>
      <RotatingText
        scrollerRef={parentRef} //optional
        text={[
          { data: "Hello, World!", className: "text-5xl" },
          { data: "This is a sample text.", className: "text-5xl" },
        ]}
      />
    </div>
  )
}
