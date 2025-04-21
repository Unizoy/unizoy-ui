"use client"

import React, { useRef, RefObject, useEffect, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import { FaArrowRightLong } from "react-icons/fa6"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)

interface PhotoItem {
  style: string
  link: string
}

interface ScalingSlidingCardsProps {
  photos: PhotoItem[]
  fromXPercent?: number
  toXPercent?: number
  triggerStart?: string
  triggerEnd?: string
  scrubSpeed?: boolean | number
  useMarkers?: boolean
  gap?: number
  wrapperClassName?: string
  scrollerRef?: RefObject<HTMLElement>
}

const ScalingSlidingCards = ({
  photos,
  fromXPercent = 100,
  toXPercent = 0,
  triggerStart = "top center",
  triggerEnd = "bottom top",
  scrubSpeed = true,
  useMarkers = false,
  gap = 20,
  wrapperClassName = "text-white h-screen",
  scrollerRef,
}: ScalingSlidingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  // Hold references for each card container.
  const cardRefs = useRef<HTMLDivElement[]>([])
  // Save each card's full (target) dimensions when measured.
  const fullDimensionsRef = useRef<{ width: number; height: number }[]>([])
  const [percentages, setPercentages] = useState<number[]>(
    new Array(photos?.length ?? 0).fill(0)
  )
  const [dimensions, setDimensions] = useState<
    { width: number; height: number }[]
  >(() => (photos ?? []).map(() => ({ width: 0, height: 0 })))
  const instanceIdRef = useRef<string>(
    `rotating-text-${Math.random().toString(36).substring(2, 11)}`
  )
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    console.log("from useEffext")

    if (scrollerRef?.current) {
      setForceUpdate(!forceUpdate)
    }
  }, [])
  // Attach ref to each container and capture its full dimensions only once.
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardRefs.current[index] = el
      // Only measure if we haven't already.
      if (!fullDimensionsRef.current[index]) {
        const rect = el.getBoundingClientRect()
        fullDimensionsRef.current[index] = {
          width: rect.width,
          height: rect.height,
        }
        // Set initial dimensions to half size.
        gsap.set(el, { width: rect.width / 2, height: rect.height / 2 })
        setDimensions((prev) => {
          const newDims = [...prev]
          newDims[index] = {
            width: Math.round(rect.width / 2),
            height: Math.round(rect.height / 2),
          }
          return newDims
        })
      }
    }
  }

  useGSAP(() => {
    if (groupRef.current && containerRef.current) {
      const existingTrigger = ScrollTrigger.getById(instanceIdRef.current)
      if (existingTrigger) {
        existingTrigger.kill()
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          end: triggerEnd,
          scrub: scrubSpeed,
          markers: useMarkers,
          pin: true,
          pinSpacing:true,
          scroller: scrollerRef?.current ?? window,
          id: instanceIdRef.current,
        },
      })

      tl.fromTo(
        groupRef.current,
        { xPercent: fromXPercent },
        { xPercent: toXPercent, ease: "none" }
      )

      // On scroll update, adjust each card's dimensions based on its distance from the viewport center.
      tl.eventCallback("onUpdate", () => {
        const newPercentages: number[] = []
        const newDimensions: { width: number; height: number }[] = []

        cardRefs.current.forEach((card, index) => {
          const rect = card.getBoundingClientRect()
          const cardCenter = rect.left + rect.width / 2
          const viewportCenter = window.innerWidth / 2
          const distance = Math.abs(cardCenter - viewportCenter)
          const rawPercent = (1 - distance / viewportCenter) * 100
          // Clamp percentage between 0 and 100.
          const clampedPercent = Math.max(Math.min(rawPercent, 100), 0)
          newPercentages[index] = Math.round(clampedPercent)

          const fullDim = fullDimensionsRef.current[index]
          if (fullDim) {
            // Interpolate width/height from half to full size.
            const newWidth =
              fullDim.width / 2 + (fullDim.width / 2) * (clampedPercent / 100)
            const newHeight =
              fullDim.height / 2 + (fullDim.height / 2) * (clampedPercent / 100)
            newDimensions[index] = {
              width: Math.round(newWidth),
              height: Math.round(newHeight),
            }
            gsap.set(card, { width: newWidth, height: newHeight })
          } else {
            newDimensions[index] = {
              width: Math.round(rect.width),
              height: Math.round(rect.height),
            }
          }
        })

        setPercentages(newPercentages)
        setDimensions(newDimensions)
      })
    }
  }, [
    fromXPercent,
    toXPercent,
    triggerStart,
    triggerEnd,
    scrubSpeed,
    useMarkers,
    forceUpdate,
  ])

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden  flex justify-center items-start",
        wrapperClassName
      )}
    >
      <div
        ref={groupRef}
        style={{ gap: `${gap}px` }}
        className="flex justify-center items-start"
      >
        {photos?.map((photo, i) => (
          <div
            key={i}
            ref={(el) => setCardRef(el, i)}
            className={cn("relative  border-red-500", photo.style)}
          >
            {/* The image remains a child element */}
            <img
              className={cn("object-fill shadow-lg h-full w-full")}
              src={photo.link}
              alt="Photo"
            />
            {/* <div className="absolute flex flex-col bottom-0 text-white text-lg">
              <span>{percentages[i]}%</span>
              <span>width: {dimensions[i]?.width}px</span>
              <span>height: {dimensions[i]?.height}px</span>
            </div> */}
          </div>
        ))}
        <div className="relative w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80  flex items-start justify-center overflow-visible">
          {/* "Explore More" card */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 flex items-center p-6 md:p-10 lg:p-14 gap-2 justify-center rounded-full bg-[#202020] shadow-lg cursor-pointer border border-transparent group hover:bg-transparent dark:hover:border-white hover:border-black hover:text-black dark:hover:text-white ">
              <p className="text-xl md:text-2xl lg:text-3xl">
                Explore More Unizoy <FaArrowRightLong />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ScalingSlidingCards }
