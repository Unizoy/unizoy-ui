"use client"
import React, { useRef, useState, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const TextHoverEffect = ({
  text,
  duration,
  fontSize = 56, // Default to roughly Tailwind's `text-7xl`
}: {
  text: string
  duration?: number
  fontSize?: number
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const maskGradientRef = useRef(null)
  const animatedTextRef = useRef(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" })

  useGSAP(
    () => {
      gsap.fromTo(
        animatedTextRef.current,
        { strokeDashoffset: 1000, strokeDasharray: 1000 },
        {
          strokeDashoffset: 0,
          strokeDasharray: 1000,
          duration: 4,
          ease: "power2.inOut",
        }
      )
    },
    { scope: svgRef }
  )

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect()
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100

      const newPosition = {
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      }

      setMaskPosition(newPosition)

      gsap.to(maskGradientRef.current, {
        attr: newPosition,
        duration: duration ?? 0,
        ease: "power2.out",
      })
    }
  }, [cursor, duration])

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="20%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>
        <radialGradient
          id="revealMask"
          ref={maskGradientRef}
          gradientUnits="userSpaceOnUse"
          r="25%"
          cx="50%"
          cy="50%"
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* 3 text layers with shared style */}
      {[0, 1, 2].map((_, idx) => (
        <text
          key={idx}
          ref={idx === 1 ? animatedTextRef : undefined}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className={`fill-transparent font-[helvetica] font-bold ${
            idx === 0
              ? "stroke-neutral-200 dark:stroke-neutral-800"
              : idx === 1
              ? "stroke-neutral-200 dark:stroke-neutral-800"
              : ""
          }`}
          stroke={idx === 2 ? "url(#textGradient)" : undefined}
          mask={idx === 2 ? "url(#textMask)" : undefined}
          style={{
            fontSize,
            opacity: idx === 0 && !hovered ? 0 : idx === 0 ? 0.7 : 1,
          }}
        >
          {text}
        </text>
      ))}
    </svg>
  )
}
