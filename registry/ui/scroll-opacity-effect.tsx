"use client"

import React, { useRef, ReactNode, ReactElement } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "../lib/utils"

interface ScrollOpacityEffectProps {
  children: ReactNode
  className?: string
  animation?: gsap.TweenVars
  start?: string
  end?: string
  scrub?: number | boolean
  initialOpacity?: number
}

interface ElementProps {
  children?: ReactNode
  [key: string]: unknown
}

gsap.registerPlugin(ScrollTrigger)

export const ScrollOpacityEffect = ({
  children,
  className,
  animation,
  scrub = 1,
  initialOpacity = 0.2,
  start = "top 90%", // default
  end = "bottom 60%", // default
}: ScrollOpacityEffectProps) => {
  const container = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])

  const splitWords = (phrase: string): React.JSX.Element[] => {
    const words = phrase.split(" ")
    return words.map((word, i) => (
      <span
        key={`word_${i}`}
        className="opacity-20 inline-block word-animation"
        ref={(el) => {
          if (el) wordsRef.current.push(el)
        }}
      >
        {word}
        {i < words.length - 1 && "\u00A0"}
      </span>
    ))
  }

  const processChildren = (children: ReactNode): ReactNode => {
    return React.Children.map(children, (child) => {
      if (typeof child === "string") {
        return splitWords(child)
      }

      if (React.isValidElement(child)) {
        const typedChild = child as ReactElement<ElementProps>
        const childrenToProcess = typedChild.props.children
        const processedChildren = processChildren(childrenToProcess)
        return React.cloneElement(
          typedChild,
          typedChild.props,
          processedChildren
        )
      }

      return child
    })
  }

  useGSAP(
    () => {
      wordsRef.current = []
      const words = container.current?.querySelectorAll(".word-animation")

      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: initialOpacity },
          {
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: container.current,
              start,
              end,
              scrub,
              toggleActions: "play none none reverse",
            },
            ...animation, // merge/override with custom animation
          }
        )
      }
    },
    { scope: container, dependencies: [animation, start, end] }
  )

  return (
    <div ref={container} className={cn("block", className)}>
      {processChildren(children)}
    </div>
  )
}
