"use client"

import React, { useRef, RefObject, useState, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import { FaArrowRightLong } from "react-icons/fa6"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

interface VideoItem {
  title: string
  description: string
  tag: string
  link: string
}

interface ScrollingVideoCardsProps {
  videoItems: VideoItem[]
  startXPercentage?: number
  endXPercentage?: number
  scrollTriggerStart?: string
  scrollTriggerEnd?: string
  scrubSpeed?: boolean | number
  useMarkers?: boolean
  gap?: number
  descriptionTextClassName?: string
  videoCardContainerClassName?: string
  containerClassName?: string
  scrollerRef?: RefObject<HTMLElement>
}

const ScrollingVideoCards = ({
  videoItems,
  startXPercentage = 100,
  endXPercentage = 0,
  scrollTriggerStart = "top center",
  scrollTriggerEnd = "bottom top",
  scrubSpeed = true,
  useMarkers = false,
  gap = 20,
  descriptionTextClassName,
  videoCardContainerClassName,
  containerClassName = "bg-black text-white h-screen",
  scrollerRef,
}: ScrollingVideoCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<HTMLVideoElement[]>([])
  const textRefs = useRef<HTMLDivElement[]>([])
  const cardRefs = useRef<HTMLDivElement[]>([])
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
  const addToVideoRefs = (el: HTMLVideoElement) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el)
    }
  }

  const addToTextRefs = (el: HTMLDivElement) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el)
    }
  }

  const addToCardRefs = (el: HTMLDivElement) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el)
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
          start: scrollTriggerStart,
          end: scrollTriggerEnd,
          scrub: scrubSpeed,
          markers: useMarkers,
          pin: true,
          scroller: scrollerRef?.current ?? window,
          id: instanceIdRef.current,
        },
        onUpdate: function () {
          const progress = this.progress()
          const numVideos = videoRefs.current.length
          const activeIndex = Math.floor(progress * numVideos)
          const CardWidth =
            cardRefs.current[activeIndex].getBoundingClientRect().width

          let translationStart, translationEnd
          if (window.innerWidth < 640) {
            translationStart = CardWidth + gap - 100 // Mobile (smaller threshold)
            translationEnd = 2 * (CardWidth + gap) - 100
          } else if (window.innerWidth < 1024) {
            translationStart = CardWidth + gap - 200 // Tablet (medium threshold)
            translationEnd = 2 * (CardWidth + gap) - 200 // Tablet (medium threshold)
          } else {
            translationStart = CardWidth + gap - 200 // Desktop (default)
            translationEnd = 2 * (CardWidth + gap) - 200 // Desktop (default)
          }

          videoRefs.current.forEach((video, index) => {
            // Calculate each card's distance percentage from the right edge
            const rect = cardRefs.current[index].getBoundingClientRect()
            const percentFromRight = window.innerWidth - rect.right
            const textHeight = textRefs.current[index]?.offsetHeight || 0
            const translateY = textHeight + 10
            // Calculate the percentage difference before setting the card distances
            // const traslation = CardWidth + gap;
            // Only apply y translation if active and the percent is between 10 and 30%
            if (
              percentFromRight >= translationStart &&
              percentFromRight < translationEnd
            ) {
              gsap.to(video, {
                y: -translateY,
                duration: 0.4,
                ease: "power2.out",
                overwrite: "auto",
              })
              video.play()
              video.style.filter = "brightness(100%)"
            } else {
              gsap.to(video, {
                y: 0,
                duration: 0.4,
                ease: "power2.out",
                overwrite: "auto",
              })
              video.pause()
              video.currentTime = 0
              video.style.filter = "brightness(50%)"
            }
          })
        },
      })

      tl.fromTo(
        groupRef.current,
        { xPercent: startXPercentage },
        { xPercent: endXPercentage, ease: "none" }
      )
    }
  }, [
    startXPercentage,
    endXPercentage,
    scrollTriggerStart,
    scrollTriggerEnd,
    scrubSpeed,
    useMarkers,
    forceUpdate,
  ])

  return (
    <div
      ref={containerRef}
      className={cn(
        "p-10 space-y-20 overflow-x-hidden flex justify-center items-censter ",
        containerClassName
      )}
    >
      <div
        ref={groupRef}
        style={{ gap: `${gap}px` }}
        className={`flex justify-center items-center`}
      >
        {videoItems.map((video, i) => (
          <div
            key={i}
            ref={addToCardRefs}
            className={cn(
              "flex flex-col items-center relative ",
              videoCardContainerClassName
            )}
          >
            <video
              ref={addToVideoRefs}
              className="min-w-[10rem] sm:min-w-[14rem] md:min-w-[17rem] lg:min-w-[20rem] h-[20rem] sm:h-[24rem] md:h-[26rem] lg:h-[28rem] bg-black object-cover rounded-3xl shadow-lg"
              src={video.link}
              muted
              loop
              playsInline
            />
            <div
              ref={addToTextRefs}
              className="absolute bottom-0 left-3 -z-10 text-start"
            >
              <h3 className=" text-[0.7rem] font-bold">
                {video.title.toUpperCase()}
              </h3>
              <p
                className={cn(
                  " text-lg md:text-[1.375rem] text-gray-200 font-semibold",
                  descriptionTextClassName
                )}
              >
                {video.description}
              </p>
              <p className="text-xs text-gray-400">{video.tag}</p>
            </div>
            {/* Distance Display */}
            {/* <div className="mt-2 text-sm text-white">
              {cardDistances[i] !== undefined &&
              `Distance from right: ${((cardDistances[i] / window.innerWidth) * 100).toFixed(0)}% (${cardDistances[i].toFixed(3)}px)`}
            </div> */}
          </div>
        ))}

        {/* See More Card */}
        <div
          ref={addToCardRefs}
          className="relative flex flex-col items-center"
        >
          <div className="relative flex items-center gap-2 justify-center min-w-[10rem] sm:min-w-[14rem] md:min-w-[17rem] lg:min-w-[20rem] h-[20rem] sm:h-[24rem] md:h-[26rem] lg:h-[28rem] bg-[#202020] rounded-3xl shadow-lg cursor-pointer overflow-hidden group">
            {/* Expanding Background Effect */}
            <div className="absolute left-[-100px] md:left-[-130px] top-[-10px] md:top-0 lg:top-2 inset-0 bg-[#bb70ad] scale-0 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:min-w-[17rem] group-hover:h-[26rem] "></div>
            {/* Arrow and Text */}
            <div className="relative flex items-center gap-2 z-10">
              <p className="bg-[#bb70ad] text-sm p-1 md:p-2 rounded-full text-black">
                <FaArrowRightLong />
              </p>
              <p className="text-white text-[0.7rem] md:text-sm font-semibold transition-colors duration-500 group-hover:text-black">
                See All Case Studies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ScrollingVideoCards }
