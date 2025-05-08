"use client"
import React, { ReactNode, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TbCopy } from "react-icons/tb"
import { MdOutlineHtml } from "react-icons/md"
import { SiWebflow } from "react-icons/si"
import { cn } from "@/lib/utils" // Importing `cn` for class management

interface CopyIconProp {
  iconClass?: string
  hiddenIconClass?: string
  startY?: number // Initial Y position before animation
  enterY?: number // Y position when hovered
  endY?: number // Y position when hiding
  duration?: number // Animation duration
  scaleFactor?: number // Scaling effect on hover
  mainIcon?: ReactNode
  hiddenIcon1?: ReactNode
  hiddenIcon2?: ReactNode
  onClick?: () => void // Click handler for main icon
  onHtmlClick?: () => void // Click handler for MdOutlineHtml
  onWebflowClick?: () => void // Click handler for SiWebflow
}

const CopyIcon: React.FC<CopyIconProp> = ({
  iconClass,
  hiddenIconClass,
  startY = 30,
  enterY = 0,
  endY,
  duration = 0.5,
  scaleFactor = 1.1,
  onClick,
  onHtmlClick,
  onWebflowClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const hiddenIconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hiddenIconsRef.current) return

    gsap.set(hiddenIconsRef.current.children, {
      opacity: 0,
      cursor: "default",
      y: startY,
      filter: "blur(5px)",
    })
  }, [startY])

  const handleMouseEnter = (check: boolean) => {
    const hiddenIcon = document.querySelector(".hidden-icons") as HTMLElement
    // Check if the element is already visible
    if (
      check &&
      hiddenIcon &&
      window.getComputedStyle(hiddenIcon).opacity === "0"
    )
      return
    const tl = gsap.timeline()

    tl.to(".copy-icon", {
      scale: scaleFactor,
      duration: 0.3,
      ease: "power2.out",
    })
      .to(
        ".hidden-icons",
        {
          opacity: 1,
          cursor: "pointer",
          y: enterY,
          filter: "blur(0px)",
          duration,
          stagger: 0.15,
          ease: "power2.out",
        },
        "+=0.05"
      )
      .to(
        ".hidden-icon2",
        {
          opacity: 1,
          cursor: "pointer",
          y: enterY,
          filter: "blur(0px)",
          duration,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      )
  }

  const handleMouseLeave = () => {
    if (!hiddenIconsRef.current) return

    gsap.to(hiddenIconsRef.current.children, {
      opacity: 0,
      cursor: "default",
      y: endY ?? startY + 30,
      filter: "blur(5px)",
      duration,
      ease: "power2.in",
    })

    gsap.to(".copy-icon", {
      scale: 1,
      duration: duration * 0.6,
    })
  }

  return (
    <div
      className="flex flex-col items-center mx-auto"
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hidden Icons Container */}
      <div
        onMouseEnter={() => handleMouseEnter(true)}
        ref={hiddenIconsRef}
        className="flex flex-col items-center"
      >
        <MdOutlineHtml
          className={cn(
            "size-12 text-xl p-2 bg-black text-white rounded-full hidden-icon2",
            hiddenIconClass
          )}
          onClick={() => {
            const hiddenIcon = document.querySelector(
              ".hidden-icons"
            ) as HTMLElement

            // Ensure the element is visible before executing the function
            if (
              hiddenIcon &&
              window.getComputedStyle(hiddenIcon).opacity === "0"
            )
              return

            onHtmlClick?.() // Execute only if onWebflowClick is defined
          }}
        />
        <SiWebflow
          className={cn(
            "size-12 my-1.5 p-2.5 bg-black rounded-full hidden-icons text-white",
            hiddenIconClass
          )}
          onClick={() => {
            const hiddenIcon = document.querySelector(
              ".hidden-icons"
            ) as HTMLElement

            // Ensure the element is visible before executing the function
            if (
              hiddenIcon &&
              window.getComputedStyle(hiddenIcon).opacity === "0"
            )
              return

            onWebflowClick?.() // Execute only if onWebflowClick is defined
          }}
        />
      </div>

      {/* Main Icon */}
      <TbCopy
        onMouseEnter={() => handleMouseEnter(false)}
        className={cn(
          "size-14 p-3 bg-black text-blue-600 rounded-full cursor-pointer copy-icon",
          iconClass
        )}
        onClick={onClick} // Passing the onClick prop
      />
    </div>
  )
}

export { CopyIcon }
