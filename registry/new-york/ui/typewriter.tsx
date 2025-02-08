import { forwardRef, useRef, HTMLAttributes, useEffect, useState } from "react"
import gsap from "gsap"
import { cn, mergeRefs } from "../lib/utils"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
type TextAndClass = {
  text: string
  className?: string
}

interface TypeWriterProps extends HTMLAttributes<HTMLDivElement> {
  staticText: TextAndClass[]
  textArray?: TextAndClass[]
  delay?: number
  duration?: number
  ease?: string
  className?: string
  start?: string | number | ((tag?: ScrollTrigger) => string | number)
  end?: string | number | ((tag?: ScrollTrigger) => string | number)
  arrayInterval?: number
  deleteSpeed?: number
}

const TypeWriter = forwardRef<HTMLDivElement, TypeWriterProps>(
  (
    {
      staticText,
      textArray,
      children,
      delay = 0,
      start = "top 90%",
      end = "top",
      duration = 0.5,
      ease = "none",
      className = "",
      arrayInterval = 3000,
      deleteSpeed = 0.1,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const [currentArrayText, setCurrentArrayText] = useState("")
    const [arrayIndex, setArrayIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [mainTextComplete, setMainTextComplete] = useState(false)

    // Handle the main text animation
    useGSAP(
      () => {
        if (!textRef.current) return

        const animation = gsap.from(textRef.current, {
          width: 0,
          duration: duration || staticText.length * 0.3,
          delay,
          ease,
          onComplete: () => setMainTextComplete(true),
          scrollTrigger: {
            trigger: textRef.current,
            start,
            end,
            toggleActions: "play none none reset",
            onLeaveBack: () => setMainTextComplete(false),
          },
        })

        return () => {
          animation.kill()
        }
      },
      {
        dependencies: [staticText, delay, start, end, duration, ease],
        scope: containerRef,
      }
    )

    // Handle the textArray animations
    useEffect(() => {
      if (!textArray?.length || !mainTextComplete) return

      let timeout: ReturnType<typeof setTimeout>
      let isActive = true // Flag to prevent state updates after unmount

      const animateText = () => {
        if (!isActive) return

        if (isDeleting) {
          if (currentArrayText.length > 0) {
            setCurrentArrayText((prev) => prev.slice(0, -1))
            timeout = setTimeout(animateText, deleteSpeed * 1000)
          } else {
            setIsDeleting(false)
            setArrayIndex((prev) => (prev + 1) % textArray.length)
          }
        } else {
          const targetText = textArray[arrayIndex].text
          if (currentArrayText.length < targetText.length) {
            setCurrentArrayText((prev) => targetText.slice(0, prev.length + 1))
            timeout = setTimeout(animateText, deleteSpeed * 1000)
          } else {
            timeout = setTimeout(
              () => isActive && setIsDeleting(true),
              arrayInterval
            )
          }
        }
      }

      timeout = setTimeout(
        animateText,
        currentArrayText.length === 0 ? 0 : deleteSpeed * 1000
      )

      return () => {
        isActive = false
        clearTimeout(timeout)
      }
    }, [
      textArray,
      arrayIndex,
      currentArrayText,
      isDeleting,
      arrayInterval,
      deleteSpeed,
      mainTextComplete,
    ])

    // Reset array text when main animation resets
    useEffect(() => {
      if (!mainTextComplete) {
        setCurrentArrayText("")
        setArrayIndex(0)
        setIsDeleting(false)
      }
    }, [mainTextComplete])

    return (
      <div
        ref={mergeRefs(ref, containerRef)}
        className={cn("flex flex-col gap-2", className)}
        {...props}
      >
        <div className="flex items-center animate-blinkBorder border-r-2 pr-1">
          <div ref={textRef} className="flex  text-nowrap overflow-hidden ">
            {staticText.map((data, i) => (
              <span key={`staticText-${i}`} className={cn(data.className)}>
                {data.text}&nbsp;
              </span>
            ))}
          </div>
          {textArray && (
            <div className={cn(textArray[arrayIndex]?.className)}>
              {currentArrayText}
            </div>
          )}
        </div>
      </div>
    )
  }
)

TypeWriter.displayName = "TypeWriter"

export { TypeWriter }
