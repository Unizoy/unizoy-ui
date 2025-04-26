"use client"

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"
import Link from "next/link"

type HoverTextProps = {
  children: React.ReactNode
  variant?:
    | "black"
    | "gradient0"
    | "gradient1"
    | "gradient2"
    | "gradient3"
    | "gradient4"
    | "gradient5"
    | "gradient6"
    | "gradient7"
    | "gradient8"
  className?: string
  image?: string
  hoverImageClass?: string
  href?: string
}

const variants = {
  black: "text-black",
  gradient0:
    "bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 text-transparent bg-clip-text",
  gradient1:
    "bg-gradient-to-br from-purple-500 to-pink-500 text-transparent bg-clip-text",
  gradient2:
    "bg-gradient-to-r from-blue-500 via-green-400 to-teal-500 text-transparent bg-clip-text",
  gradient3:
    "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-transparent bg-clip-text",
  gradient4:
    "bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 text-transparent bg-clip-text",
  gradient5:
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text",
  gradient6:
    "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text",
  gradient7:
    "bg-gradient-to-r from-emerald-400 via-green-500 to-lime-500 text-transparent bg-clip-text",
  gradient8:
    "bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 text-transparent bg-clip-text",
}

const RevealText = ({
  children,
  variant = "black",
  className = "",
  image,
  hoverImageClass,
  href,
}: HoverTextProps) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const quickToX = useRef<any>(null) // for smooth x movement

  const handleMouseEnter = () => {
    if (imageRef.current) {
      gsap.killTweensOf(imageRef.current)

      // Create quickToX instance fresh on every hover
      quickToX.current = gsap.quickTo(imageRef.current, "x", {
        duration: 0.6,
        // ease: "power2.out",
      })

      const tl = gsap.timeline()
      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "elastic.out(1, 0.75)",
      })
    }
  }

  const handleMouseLeave = () => {
    if (imageRef.current) {
      gsap.killTweensOf(imageRef.current)
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.5,
        x: 0,
        duration: 0.3,
        ease: "power3.in",
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (imageRef.current && quickToX.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const offset = ((x - rect.width / 2) / rect.width) * 80
      quickToX.current(offset) // real-time smooth move
    }
  }

  return (
    <span
      className="relative inline-block group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {image && (
        <img
          ref={imageRef}
          src={image}
          alt="hover image"
          className={cn(
            "absolute left-1/2 top-[-9rem] z-30 aspect-video -translate-x-1/2 min-w-36 h-24 md:min-w-40 md:h-28 lg:min-w-48 lg:h-32 object-fill rounded-xl shadow-lg pointer-events-none opacity-0 border-4 lg:border-[6px] scale-50 border-white",
            hoverImageClass
          )}
        />
      )}
      {href ? (
        <Link
          href={href}
          target="_blank"
          className={cn(variants[variant], className)}
        >
          {" "}
          {children}{" "}
        </Link>
      ) : (
        <span className={cn(variants[variant], className)}> {children} </span>
      )}
    </span>
  )
}
export { RevealText }
