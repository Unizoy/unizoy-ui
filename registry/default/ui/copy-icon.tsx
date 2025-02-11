"use client"
import React, { ReactNode, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TbCopy } from "react-icons/tb"
import { MdOutlineHtml } from "react-icons/md"
import { SiWebflow } from "react-icons/si"
import { cn } from "@/lib/utils" // Importing `cn` for class management

interface CopyIconProp {
  parentClass?: string
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
}

const CopyIcon: React.FC<CopyIconProp> = ({
  parentClass,
  iconClass,
  hiddenIconClass,
  startY = 30,
  enterY = 0,
  endY, // Allow custom hiding position
  duration = 0.5,
  scaleFactor = 1.1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.set([".hidden-icons", ".hidden-icon2"], {
      opacity: 0,
      y: startY,
      filter: "blur(5px)",
    })
    gsap.set(".copy-icon", { scale: 1 })
  }, [startY])

  const handleMouseEnter = () => {
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
    gsap.to([".hidden-icons", ".hidden-icon2"], {
      opacity: 0,
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
    <div className={cn("flex flex-col items-center mx-auto", parentClass)}>
      <MdOutlineHtml
        className={cn(
          "size-12 text-xl p-2 bg-black text-white rounded-full hidden-icon2",
          hiddenIconClass
        )}
      />
      <SiWebflow
        className={cn(
          "size-12 my-1.5 p-2.5 bg-black rounded-full hidden-icons text-white",
          hiddenIconClass
        )}
      />
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <TbCopy
          className={cn(
            "size-14 p-3 bg-black text-[#c2ff5d] rounded-full cursor-pointer copy-icon",
            iconClass
          )}
        />
      </div>
    </div>
  )
}

export { CopyIcon }
