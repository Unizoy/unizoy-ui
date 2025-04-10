"use client"
import { useRef, CSSProperties } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { cn } from "../lib/utils"

interface TextRollUpEffectProps {
  children: string
  style?: CSSProperties
  frequency?: number
  className?: string
  stagger?: number
}

export const TextRollUpEffect = ({
  children,
  frequency = 2,
  className,
  stagger = 0.05,
  style,
}: TextRollUpEffectProps) => {
  const textRef = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useGSAP(
    () => {
      if (textRef.current) {
        const words = gsap.utils.toArray<HTMLElement>(
          textRef.current.querySelectorAll(".word-wrapper")
        )

        function animateRandomCharsFromEachWord() {
          tl.current = gsap.timeline({
            onComplete: () => {
              animateRandomCharsFromEachWord()
            },
            delay: 0.5,
          })

          words.forEach((word, wordIndex) => {
            const chars = gsap.utils.toArray<HTMLElement>(
              word.querySelectorAll(".char-wrapper")
            )
            // Create a set to store unique random indices
            const randomIndices = new Set<number>()
            while (randomIndices.size < 1) {
              // We only need one unique index per word
              const potentialIndex = Math.floor(Math.random() * chars.length)
              const charText = chars[potentialIndex].textContent?.trim() // Get the character's text content (without spaces)
              if (charText !== "") {
                // Only add non-empty characters
                randomIndices.add(potentialIndex)
              }
            }

            randomIndices.forEach((randomIndex) => {
              const charWrapper = chars[randomIndex]
              tl.current?.to(
                charWrapper,
                {
                  duration: 1.6 / frequency,
                  yPercent: "-50",
                  ease: "power2.inOut",
                  onComplete: () => {
                    gsap.set(charWrapper, { yPercent: 0 })
                  },
                },
                wordIndex * stagger
              )
            })
          })
        }

        animateRandomCharsFromEachWord()

        return () => {
          if (textRef.current) {
            gsap.killTweensOf(textRef.current.querySelectorAll(".char-wrapper"))
          }
          tl.current?.kill()
        }
      }
    },
    {
      scope: textRef,
      dependencies: [children, frequency],
    }
  )

  return (
    <div
      ref={textRef}
      className={cn(
        "font-medium pointer-events-auto leading-none relative",
        className
      )}
      style={style}
    >
      {children.split(" ").map((word, index, arr) => {
        const wordWithSpace = word + (index !== arr.length - 1 ? " " : "")
        return (
          <div
            key={`${word}-${index}`}
            className="relative inline-block overflow-hidden word-wrapper"
            style={{ height: "1em" }} // Fixed height based on font size
          >
            {wordWithSpace.split("").map((char, charIndex) => (
              <div
                key={charIndex}
                className="relative inline-block char-wrapper"
              >
                <p className="inline-block whitespace-pre">{char}</p>
                <p className="block whitespace-pre ">{char}</p>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
