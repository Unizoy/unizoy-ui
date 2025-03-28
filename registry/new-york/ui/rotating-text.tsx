"use client"
import { RefObject, useRef } from "react"
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

  useGSAP(() => {
    if (!mainRef.current && !textRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start,
        end,
        scrub,
        pin: true,
        scroller: scrollerRef?.current ?? window,
        markers,
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
  }, [text])

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
        {text.map((t, index) => (
          <div key={index} className={cn(t.className, "text-center")}>
            {t.data.split("").map((char, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                }}
                ref={(el) => {
                  if (el) {
                    textRef.current.push(el)
                  }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RotatingText
