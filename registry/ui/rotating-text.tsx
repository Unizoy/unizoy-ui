"use client"
import { RefObject, useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "../lib/utils"
gsap.registerPlugin(ScrollTrigger)
interface RotatingTextProps {
  text: { data: string; className?: string }[]
  scrollerRef?: RefObject<HTMLElement>
  start?: string | number | ScrollTrigger.StartEndFunc
  end?: string | number | ScrollTrigger.StartEndFunc
  scrub?: number | boolean
  markers?: boolean | ScrollTrigger.MarkersVars
  className?: string
}
const RotatingText = ({
  text,
  scrollerRef,
  start = "top top",
  end = "+=300",
  scrub = 1,
  markers = false,
  className,
}: RotatingTextProps) => {
  const mainRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement[]>([])
  const instanceIdRef = useRef<string>(
    `rotating-text-${Math.random().toString(36).substring(2, 11)}`
  )
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    if (scrollerRef?.current) {
      setForceUpdate(!forceUpdate)
    }
  }, [scrollerRef?.current])
  useGSAP(() => {
    if (!mainRef.current && !textRef.current) return

    // Kill only this component's ScrollTrigger instance if it exists
    const existingTrigger = ScrollTrigger.getById(instanceIdRef.current)
    if (existingTrigger) {
      existingTrigger.kill()
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start,
        end,
        scrub,
        pin: true,
        scroller: scrollerRef?.current ?? window,
        markers,
        id: instanceIdRef.current,
      },
    })
    tl.set(textRef.current, {
      rotationY: (index) =>
        index % 2 === 0
          ? gsap.utils.random(150, 180, 1)
          : gsap.utils.random(-180, -150, 1),
      scale: 0,
      transformOrigin: (index) => (index % 2 === 0 ? "bottom" : "top"),
    })

    tl.to(textRef.current, {
      scale: 1,
      rotationY: 0,
      ease: "none",
      stagger: {
        amount: 0.5,
        from: "random",
      },
    })

    return () => {
      // Cleanup ScrollTrigger instances when component unmounts

      const triggerToKill = ScrollTrigger.getById(instanceIdRef.current)
      if (triggerToKill) {
        triggerToKill.kill()
      }
    }
  }, [text, start, end, scrub, markers, forceUpdate])

  const charOffsets = text.reduce<number[]>((acc, item, i) => {
    const prev = acc[i - 1] ?? 0
    const newCount = item.data.length + prev
    return [...acc, newCount]
  }, [])

  return (
    <div
      ref={mainRef}
      className={cn(
        " h-screen text-9xl",
        className,
        " flex justify-center items-center  "
      )}
      style={{ perspective: "800px" }}
    >
      <div>
        {text.map((t, rowIndex) => (
          <div key={rowIndex} className={cn(t.className, "text-center")}>
            {t.data.split("").map((char, charIndex) => {
              const globalIndex =
                charIndex + (rowIndex > 0 ? charOffsets[rowIndex - 1] : 0)
              return (
                <span
                  key={charIndex}
                  style={{
                    display: "inline-block",
                    transformStyle: "preserve-3d",
                  }}
                  ref={(el) => {
                    if (el) textRef.current[globalIndex] = el
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RotatingText
