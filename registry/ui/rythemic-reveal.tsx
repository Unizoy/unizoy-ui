"use client"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText"
import { RefObject, useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { cn } from "../lib/utils"
import CustomEase from "gsap/CustomEase"
gsap.registerPlugin(ScrollTrigger, SplitText)

/**
 *Default:- className="text-8xl font-semibold h-fit flex-col gap-10 justify-center items-center uppercase w-full"
 *
 */
function Rythem({
  children,
  className,
  imgsWidth,
  positionToAnimation = 75,
  scrollerRef,
  markers = false,
}: {
  children: React.ReactNode
  className?: string
  imgsWidth: number
  positionToAnimation?: number
  scrollerRef?: RefObject<HTMLElement>
  markers?: boolean
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const splitInstanceRef = useRef<SplitText[] | null>(null)
  const [forceUpdate, setForceUpdate] = useState(false)
  useEffect(() => {
    if (scrollerRef?.current) {
      setForceUpdate(!forceUpdate)
    }
  }, [])
  useGSAP(
    () => {
      if (!sectionRef.current) return
      // Get all lines (paragraphs) within the section
      const allLines = sectionRef.current.querySelectorAll("p")
      const allImages = sectionRef.current.querySelectorAll("img")
      const imgParents = Array.from(allImages).map((img) => {
        return img.parentElement!
      })
      const splitInstances: SplitText[] = []

      // Create SplitText for each line individually and animate each line separately
      allLines.forEach((line, lineIndex) => {
        const split = new SplitText(line, {
          type: "chars,words",
          charsClass: `split-char-line-${lineIndex}`,
          wordsClass: `split-word-line-${lineIndex}`,
        })
        splitInstances.push(split)

        const letters = split.chars
        const words = split.words

        // Set initial state for letters
        gsap.set(letters, {
          opacity: 0.2,
        })

        // Calculate stagger timing based on words
        const totalWords = words.length
        const staggerPerWord = totalWords > 0 ? 0.8 / totalWords : 0

        // Create individual timeline for each line
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: line,
            start: `top ${positionToAnimation}%`,
            end: `top ${positionToAnimation - 10}%`,
            scrub: 1,
            scroller: scrollerRef?.current ?? window,
            markers: markers,
            // id: `${instanceIdRef.current}-line-${lineIndex}`,
          },
        })

        // Animate letters word by word
        words.forEach((word, wordIndex) => {
          const wordLetters = Array.from(
            word.querySelectorAll(`.split-char-line-${lineIndex}`)
          )

          tl.to(
            wordLetters,
            {
              opacity: 1,
              duration: 0.1, // Very short duration for letters within a word
              stagger: {
                each: 0.02, // Quick succession within word
                from: "start",
              },
              ease: CustomEase.create(
                "custom",
                "M0,0 C0.011,0.022 0.091,0.045 0.099,0.05 0.123,0.068 0.084,0.031 0.279,0.169 0.431,0.23 0.532,0.314 0.532,0.314 0.532,0.314 0.664,0.449 0.757,0.547 0.76,0.582 0.922,0.857 0.922,0.857 0.922,0.857 0.98,1 1,1 "
              ),
            },
            wordIndex * staggerPerWord
          ) // Position each word animation in timeline
        })
      })

      // Store all split instances for cleanup
      splitInstanceRef.current = splitInstances

      // Set initial state for images
      gsap.set(allImages, {
        scaleX: 0,
      })
      gsap.set(imgParents, {
        // scaleX:0
        width: "0px",
      })
      // Animate images
      allImages.forEach((img, imgIndex) => {
        const imageTl = gsap.timeline({
          scrollTrigger: {
            trigger: img,
            start: `center ${positionToAnimation}%`,
            end: `center ${positionToAnimation}%`,
            toggleActions: "play none none reverse",
            scroller: scrollerRef?.current ?? window,
          },
        })
        imageTl
          .to(img, {
            // display: "block",
            // width: `${imgsWidth/2}px`,
            scaleX: 1,
            duration: 0.3,
          })
          .to(
            imgParents[imgIndex],
            {
              // scaleX:1
              width: imgsWidth + "px",
            },
            "<"
          )
      })
    },
    {
      scope: sectionRef,
      dependencies: [forceUpdate, positionToAnimation, imgsWidth, markers],
    }
  )

  return (
    <section
      ref={sectionRef}
      className={cn(
        "text-8xl font-semibold h-fit flex-col justify-center items-center uppercase w-full",
        className
      )}
    >
      {children}
    </section>
  )
}

type LineProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode
}

function Line({ children, className, ...props }: LineProps) {
  return (
    <p {...props} className={cn("items-center inline-block", className)}>
      {children}
    </p>
  )
}

type WordProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
}

function Word({ children, className, ...props }: WordProps) {
  return (
    <span {...props} className={cn("overflow-hidden text-nowrap ", className)}>
      {children}
    </span>
  )
}

type PictureProps = React.ImgHTMLAttributes<HTMLImageElement>
/**
 *Default:- className="h-full"
 *
 */

function Picture({ ...props }: PictureProps) {
  return <img className="aspect-[none] object-cover" {...props} />
}

export { Rythem, Line, Word, Picture }
