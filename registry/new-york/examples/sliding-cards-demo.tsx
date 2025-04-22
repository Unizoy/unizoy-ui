"use client"
import React, { useRef } from "react"
import { SlidingCards } from "@/registry/new-york/ui/sliding-cards"
export default function SlidingCardsDemo() {
  const parentRef = useRef<HTMLDivElement>(null)
  const items = [
    {
      title: "Outstanding Design & Development",
      description:
        "Unizoy revamped our website with a modern, responsive design that boosted our online presence and conversions.",
      name: "Alice W.",
      background: "bg-[#FFDCB8]",
    },
    {
      title: "Exceptional Customer Support",
      description:
        "Their support team was prompt and professional, guiding us through every step to ensure smooth implementation.",
      name: "Mark T.",
      background: "bg-[#BBD2FF]",
    },
    {
      title: "Innovative Digital Solutions",
      description:
        "Unizoy provided creative digital strategies that transformed our marketing approach and drove measurable growth.",
      name: "Claire S.",
      background: "bg-[#BCFFBB]",
    },
    {
      title: "Reliable & Professional",
      description:
        "Working with Unizoy has been a pleasure—they consistently deliver quality work on time, every time.",
      name: "James D.",
      background: "bg-[#F5FFBB]",
    },
  ]

  return (
    <div ref={parentRef} className=" w-full ">
      <div className="w-full h-40 flex items-center justify-center  border-b border-black dark:border-white">
        Scroll To animate
      </div>
      <SlidingCards
        items={items}
        maxWidth={320}
        gap={30}
        backgroundImage="https://www.jeton.com/_ipx/f_webp&q_80&w_3400/cms/b7c674ecd0ee69b2eca20443cac6272c550ed396-4000x2667.jpg"
        triggerStart="top top"
        triggerEnd="+=800"
        markers={false}
        headingText="Hear it from our clients"
        parentClassName="min-h-[156vh] justify-start items-center"
        parentContentClassName="mt-40"
        headingClassName="text-[2.5rem] text-white my-20 font-semibold mx-auto text-center"
        contentClassName=""
      />
    </div>
  )
}
