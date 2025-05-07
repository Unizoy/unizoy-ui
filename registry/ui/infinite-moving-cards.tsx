"use client"
import { cn } from "../lib/utils"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)

  // Register GSAP with React
  gsap.registerPlugin(useGSAP)

  useGSAP(
    () => {
      if (!scrollerRef.current) return

      // Clone items for seamless looping
      const scrollerContent = Array.from(scrollerRef.current.children)
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        scrollerRef.current?.appendChild(duplicatedItem)
      })

      // Get dimensions
      const itemWidth = scrollerContent[0].getBoundingClientRect().width
      const totalItemsWidth = itemWidth * scrollerContent.length

      // Set animation duration based on speed
      let duration = 40 // normal speed
      if (speed === "fast") duration = 20
      else if (speed === "slow") duration = 80

      // Create a timeline for the continuous animation
      const tl = gsap.timeline({
        repeat: -1, // Infinite repeat
        defaults: { ease: "none" },
      })

      if (direction === "left") {
        // Initial position
        gsap.set(scrollerRef.current, { x: 0 })

        // Create the main animation
        tl.to(scrollerRef.current, {
          x: -totalItemsWidth,
          duration,
          onComplete: () => {
            // Reset the position when the animation completes
            gsap.set(scrollerRef.current, { x: 0 })
          },
        })
      } else {
        // Initial position for right direction
        gsap.set(scrollerRef.current, { x: -totalItemsWidth })

        // Create the animation for right direction
        tl.to(scrollerRef.current, {
          x: 0,
          duration,
          onComplete: () => {
            // Reset the position when the animation completes
            gsap.set(scrollerRef.current, { x: -totalItemsWidth })
          },
        })
      }

      // Setup hover pause functionality
      if (pauseOnHover && containerRef.current) {
        containerRef.current.addEventListener("mouseenter", () => tl.pause())
        containerRef.current.addEventListener("mouseleave", () => tl.play())
      }

      // Cleanup is handled automatically by useGSAP
      return () => {
        tl.kill() // For extra safety
      }
    },
    { scope: containerRef, dependencies: [direction, speed, pauseOnHover] }
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4"
        style={{ willChange: "transform" }} // Optimization for animations
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
