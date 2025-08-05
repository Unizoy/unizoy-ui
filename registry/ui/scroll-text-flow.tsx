"use client"
import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

interface SlideItem {
  name: string
  style: string
}

interface ScrollTextFlowProps {
  heading: string
  subheading: string
  slideGroups: SlideItem[][] // 2D array: each inner array is a row of slides
  topGroupCount?: number // number of groups rendered above the text container, default is 2
  wrapperClassName?: string // extra classes for the main container
  textWrapperClassName?: string
  groupClassName?: string // extra classes for each slide group row
  scrollTriggerStart?: string // scrollTrigger start value, default: "top 20%"
  scrollTriggerEnd?: string // scrollTrigger end value, default: "+=1500"
  useMarkers?: boolean // whether to show markers, default: false
  scrollerRef?: React.RefObject<HTMLDivElement> // Allow custom scroller
}

const ScrollTextFlow: React.FC<ScrollTextFlowProps> = ({
  heading,
  subheading,
  slideGroups,
  topGroupCount = 2,
  wrapperClassName = "",
  groupClassName = "",
  textWrapperClassName = "",
  scrollTriggerStart = "top 20%",
  scrollTriggerEnd = "+=1500",
  useMarkers = false,
  scrollerRef,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const wordsContainerRef = useRef<HTMLDivElement | null>(null)
  // Array to store refs for each slide group row
  const groupRefs = useRef<(HTMLDivElement | null)[]>([])
  const instanceIdRef = useRef<string>(
    `rotating-text-${Math.random().toString(36).substring(2, 11)}`
  )
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    if (scrollerRef?.current) {
      setForceUpdate(!forceUpdate)
    }
  }, [scrollerRef?.current])
  // Helper to add each group ref dynamically
  const addToGroupRefs = (el: HTMLDivElement | null) => {
    if (el && !groupRefs.current.includes(el)) {
      groupRefs.current.push(el)
    }
  }

  useGSAP(() => {
    if (!containerRef.current || !wordsContainerRef.current) return
    const existingTrigger = ScrollTrigger.getById(instanceIdRef.current)
    const existingTrigger2 = ScrollTrigger.getById(instanceIdRef.current + "2")
    if (existingTrigger && existingTrigger2) {
      existingTrigger.kill()
      existingTrigger2.kill()
    }
    // Fade-in animation for the text words
    const words = wordsContainerRef.current.querySelectorAll(".word")
    gsap.set(words, { opacity: 0 })
    gsap.to(words, {
      opacity: 1,
      ease: "power1.inOut",
      stagger: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: scrollTriggerStart,
        end: scrollTriggerEnd,
        scrub: true,
        markers: useMarkers,
        pin: true,
        pinSpacing: true,
        scroller: scrollerRef?.current ?? window,
        id: instanceIdRef.current,
      },
    })

    // Apply animation for each slide group row
    groupRefs.current.forEach((group, index) => {
      const isEven = index % 2 === 0
      const fromX = isEven ? 50 : 150
      const toX = isEven ? -200 - index * 50 : 0 + index * 30
      const scrubSpeed = isEven ? 0.5 : 0.8

      gsap.fromTo(
        group,
        { x: fromX },
        {
          x: toX,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: scrollTriggerStart,
            end: scrollTriggerEnd,
            scrub: scrubSpeed,
            markers: useMarkers,
            scroller: scrollerRef?.current ?? window,
            id: instanceIdRef.current + "2",
          },
        }
      )
    })
  }, [
    slideGroups,
    scrollTriggerStart,
    scrollTriggerEnd,
    useMarkers,
    scrollerRef,
    forceUpdate,
  ])

  const words1 = heading.split(" ").map((word, index) => (
    <span
      key={index}
      className={cn("word", "mr-2", "inline-block dark:text-white")}
    >
      {word}
    </span>
  ))
  const words2 = subheading.split(" ").map((word, index) => (
    <span
      key={index}
      className={cn("word", "mr-2", "inline-block dark:text-white")}
    >
      {word}
    </span>
  ))

  return (
    <div
      ref={containerRef}
      className={cn("flex justify-center h-screen py-5", wrapperClassName)}
    >
      <div className={cn(" space-y-3 md:space-y-5 mx-auto text-center w-full")}>
        {/* Render slide groups above the text container */}
        {slideGroups.map((group, idx) =>
          idx < topGroupCount ? (
            <div
              key={idx}
              ref={addToGroupRefs}
              className={cn(
                "flex justify-center items-center gap-5 md:gap-7 lg:gap-10 flex-nowrap",
                groupClassName
              )}
            >
              {group.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-[#232323] w-fit h-fit px-1 font-normal",
                    item.style
                  )}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          ) : null
        )}

        {/* Words container for fade-in text */}
        <div
          ref={wordsContainerRef}
          className={cn(
            "flex justify-center items-center my-5 mb-8 max-w-[60%] mx-auto",
            textWrapperClassName
          )}
        >
          <p className={cn("text-4xl md:text-5xl font-bold mb-4")}>
            {words1} <span className="text-lg md:text-xl">{words2}</span>
          </p>
        </div>

        {/* Render slide groups below the text container */}
        {slideGroups.map((group, idx) =>
          idx >= topGroupCount ? (
            <div
              key={idx}
              ref={addToGroupRefs}
              className={cn(
                "flex justify-center items-center gap-5 md:gap-7 lg:gap-10 flex-nowrap",
                groupClassName
              )}
            >
              {group.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-[#232323] w-fit h-fit px-1 font-normal",
                    item.style
                  )}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export { ScrollTextFlow }
