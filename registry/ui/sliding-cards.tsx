"use client"
import React, { useRef, RefObject, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "../lib/utils"

interface ItemsProps {
  title: string
  description: string
  name: string
  background?: string
}

interface SlidingCardsProps {
  items: ItemsProps[]
  maxWidth?: number
  gap?: number
  backgroundImage?: string
  triggerStart?: string
  triggerEnd?: string
  markers?: boolean // Toggle markers on/off
  headingText?: string // Optional heading text. If omitted, heading won't render.
  minHeightValue?: number // Optional minimum height for card content
  parentClassName?: string
  parentContentClassName?: string
  headingClassName?: string
  contentClassName?: string
  scrollerRef?: RefObject<HTMLElement>
}

const SlidingCards: React.FC<SlidingCardsProps> = ({
  items,
  maxWidth = 340,

  gap = 10, // Added gap value (in pixels)
  backgroundImage = "https://www.jeton.com/_ipx/f_webp&q_80&w_3400/cms/b7c674ecd0ee69b2eca20443cac6272c550ed396-4000x2667.jpg",
  triggerStart = "top 30%",
  triggerEnd = "+=800",
  markers = false,
  headingText = "Hear it from our clients",
  minHeightValue,
  parentClassName = "",
  parentContentClassName = "",
  headingClassName = "",
  contentClassName = "",
  scrollerRef,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const instanceIdRef = useRef<string>(
    `rotating-text-${Math.random().toString(36).substring(2, 11)}`
  )
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    console.log("from useEffext")

    if (scrollerRef?.current) {
      setForceUpdate(!forceUpdate)
    }
  }, [scrollerRef?.current])
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!containerRef.current) return
    const existingTrigger = ScrollTrigger.getById(instanceIdRef.current)
    if (existingTrigger) {
      existingTrigger.kill()
    }
    const cards = containerRef.current.querySelectorAll(".card")
    const cardsArray = Array.from(cards)

    // Get initial heights of each card's inner content wrapper
    // Alternative: Calculate content-only height by subtracting vertical padding
    const initialHeights = cardsArray.map((card) => {
      const content = card.querySelector(".card-content") as HTMLElement
      if (!content) return 0
      return content.getBoundingClientRect().height
    })
    console.log("initialHeights", initialHeights)
    // const minHeight = Math.min(...initialHeights)
    const minHeight =
      minHeightValue !== undefined
        ? minHeightValue
        : Math.min(...initialHeights)
    console.log("minHeight", minHeight)

    // Create a timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: triggerStart,
        end: triggerEnd,
        scrub: true,
        markers: markers,
        scroller: scrollerRef?.current ?? window,
        id: instanceIdRef.current,
      },
    })

    // Animate each card's inner content wrapper height and translation, adding a gap.
    cardsArray.forEach((card, index) => {
      if (index === 0) return
      const subset = cardsArray.slice(index)
      const content = subset[0].querySelector(".card-content") as HTMLElement
      if (!content) return

      // Add the gap to the translation amount
      tl.to(subset, {
        y: `+=${initialHeights[index] + gap}`, // gap added here
        duration: 1, // Increased duration for smoother motion
        ease: "sine.out",
        stagger: 0.1, // Stagger each subset animation slightly
      })
        .to(
          subset[0],
          {
            width: maxWidth,
            duration: 1.5,
            ease: "power2.out",
          },
          "<"
        )
        .fromTo(
          content,
          { height: minHeight },
          { height: initialHeights[index], duration: 1.5, ease: "power2.out" },
          "<"
        )
    })
  }, [forceUpdate])

  return (
    <div
      ref={containerRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className={cn(
        "relative h-[150vh]  flex flex-col justify-start items-center bg-cover bg-center",
        parentClassName
      )}
    >
      <h1
        className={cn(
          "text-[4.5rem] text-white my-20 font-semibold",
          headingClassName
        )}
      >
        {headingText}
      </h1>
      <div
        className={cn(
          "relative flex flex-col justify-center items-center mt-20",
          parentContentClassName
        )}
      >
        {items.map((item, index) => {
          const width = maxWidth - index * 20
          return (
            <div
              key={index}
              className="absolute flex flex-col p-4 m-2 font-grotesk gap-2 card rounded overflow-hidden"
              style={{
                bottom: `${index * -8}px`,
                width: `${width}px`,
                zIndex: items.length - index,
              }}
            >
              {/* Modified: Wrap card content inside an inner container and align content to bottom
                  so that if height is reduced, the bottom remains visible */}
              <div
                className="card-content overflow-hidden flec flex-col max-h-fit"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div className={cn("child", contentClassName)}>
                  <div className="flex flex-col">
                    <h1 className="text-white font-semibold">{item.title}</h1>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                  <div className="flex gap-2 text-white items-center">
                    <div
                      className={`flex justify-center items-center w-9 h-9 rounded-full p-2 ${item.background}`}
                    >
                      <p className="text-[#360802]">
                        {item.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </p>
                    </div>
                    <p>{item.name}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { SlidingCards }
