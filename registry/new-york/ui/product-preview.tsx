"use client"
import { RefObject, useEffect, useRef, useState } from "react"
import { cn } from "../lib/utils"

import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)

interface ProductPreviewProps {
  className?: string
  productSrc: string
  productHeight?: number
  productWidth?: number
  scaleFactor?: number
  rotate?: number
  length?: number
  scroller?: RefObject<HTMLElement>
  articleTop: {
    title: {
      text: string
      className?: string
    }
    description: {
      text: string
      className?: string
    }
    icon?: React.ReactNode
  }[]
  articleBottom: {
    title: {
      text: string
      className?: string
    }
    description: {
      text: string
      className?: string
    }
    icon?: React.ReactNode
  }[]
}

export default function ProductPreview({
  className,
  productSrc,
  productHeight = 298,
  productWidth = 1250,
  scaleFactor = 0.1,
  rotate = 30,
  scroller,
  articleTop,
  articleBottom,
  length = (articleTop.length * 2 - 1) * 50,
}: ProductPreviewProps) {
  const mainRef = useRef<HTMLElement>(null)
  const dividerTopRef = useRef<HTMLSpanElement>(null)
  const dividerBottomRef = useRef<HTMLSpanElement>(null)
  const articleTopRef = useRef<HTMLElement>(null)
  const articleBottomRef = useRef<HTMLElement>(null)
  const [currentTopIndex, setCurrentTopIndex] = useState(-1)
  const [currentBottomIndex, setCurrentBottomIndex] = useState(-1)
  const instanceIdRef = useRef<string>(
    `rotating-text-${Math.random().toString(36).substring(2, 11)}`
  )
 const [forceUpdate, setForceUpdate] = useState(false)
  const handleProgress = (self: ScrollTrigger) => {
    const direction = self.direction
    const totalSteps = articleTop.length * 2 - 1
    const progress = Math.min(Math.max(self.progress, 0), 1) // Clamp between 0 and 1
    const stepSize = 1 / totalSteps
    const currentStep = Math.ceil(progress / stepSize)


    // Calculate indices based on step
    if (currentStep === 1) {
      setCurrentBottomIndex(0)
      setCurrentTopIndex(0)
    } else {
      if (direction === 1) {
        // Scrolling down
        const topIndex = Math.floor((currentStep + 1) / 2)
        const bottomIndex = Math.floor(currentStep / 2)
        if (currentStep % 2 == 0 && topIndex < articleTop.length) {
          setCurrentTopIndex(topIndex)
        } else if (bottomIndex < articleBottom.length) {
          setCurrentBottomIndex(bottomIndex)
        }
      } else {
        // Scrolling up
        const topIndex = Math.floor(currentStep / 2)
        const bottomIndex = Math.floor((currentStep - 1) / 2)
        if (currentStep % 2 == 0 && topIndex < articleTop.length) {
          setCurrentTopIndex(Math.max(topIndex, 0))
        } else if (bottomIndex < articleBottom.length) {
          setCurrentBottomIndex(Math.max(bottomIndex, 0))
        }
      }
    }
  }
  useEffect(()=>{
      if (scroller?.current) {
      setForceUpdate(!forceUpdate)
    }
  },[])
  useGSAP(() => {
    if (mainRef.current) {
      const existingTrigger = ScrollTrigger.getById(instanceIdRef.current)
      if (existingTrigger) {
      existingTrigger.kill()
    }
      gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: `${length}% top`,
          scrub: true,
          scroller: scroller?.current ?? window,
          pin: true,
          onUpdate: handleProgress,
          // markers: true, // Consider disabling in production
          onLeaveBack: () => {
            setCurrentBottomIndex(-1)
            setCurrentTopIndex(-1)
            const t = gsap.timeline({ duration: 0.1 })
            t.to(dividerTopRef.current, {
              scaleX: 0,
              transformOrigin: "right",
            })
            t.to(
              dividerBottomRef.current,
              {
                width: "0%",
                opacity: 1,
              },
              "<"
            )
          },
          onEnter: () => {
            const t = gsap.timeline({ duration: 0.4 })
            t.fromTo(
              dividerTopRef.current,
              { scaleX: 0, transformOrigin: "right" },
              { scaleX: 1, opacity: 1 }
            )
            t.to(
              dividerBottomRef.current,
              {
                width: "100%",
                opacity: 1,
              },
              "<"
            )
          },
           id: instanceIdRef.current,
        },
      })
    }
  },[forceUpdate])

  return (
    <>
      <main
        ref={mainRef}
        className={cn(
          className,
          "w-full h-full bg-black flex justify-center items-center dark:text-white text-white px-3"
        )}
      >
        <div className="relative flex justify-between flex-col w-[80vw] h-[90vh]">
          <article
            key={1}
            ref={articleTopRef}
            className="mt-10 w-1/2 flex flex-col "
          >
            {currentTopIndex != -1 && (
              <Translate
                arr={articleTop}
                index={currentTopIndex}
                type={"icon"}
                pos={1}
              />
            )}
            <span
              ref={dividerTopRef}
              className="mt-6 w-full opacity-0 h-[1px] bg-[#818081] relative transform scale-x-0"
            >
              <span className="absolute -right-1 top-0 -translate-y-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-gray-400"></span>
            </span>
            <div className="w-[60%] mr-auto">
              {currentTopIndex != -1 && (
                <Translate
                  arr={articleTop}
                  index={currentTopIndex}
                  type={"title"}
                  pos={1}
                />
              )}
              {currentTopIndex != -1 && (
                <Translate
                  arr={articleTop}
                  index={currentTopIndex}
                  type={"description"}
                  pos={1}
                />
              )}
            </div>
          </article>
          <img
            src={productSrc}
            alt="error loading image"
            height={productHeight * scaleFactor}
            width={productWidth * scaleFactor}
            style={{ rotate: `${rotate}deg`, transformOrigin: "top" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <article
            key={2}
            ref={articleBottomRef}
            className="ml-auto mb-10 w-1/2 flex flex-col "
          >
            {currentBottomIndex != -1 && (
              <Translate
                arr={articleBottom}
                index={currentBottomIndex}
                type={"icon"}
                pos={2}
              />
            )}
            <span
              ref={dividerBottomRef}
              className="mt-10  w-0 opacity-0 h-[1px] bg-[#818081] relative"
            >
              <span className="absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-gray-400"></span>
            </span>
            <div className="w-[60%] ml-auto">
              {currentBottomIndex != -1 && (
                <Translate
                  arr={articleBottom}
                  index={currentBottomIndex}
                  type={"title"}
                  pos={2}
                />
              )}
              {currentBottomIndex != -1 && (
                <Translate
                  arr={articleBottom}
                  index={currentBottomIndex}
                  type={"description"}
                  pos={2}
                />
              )}
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

interface TranslateProps {
  arr: ProductPreviewProps["articleTop"]
  index: number
  type: keyof TranslateProps["arr"][number]
  pos: 1 | 2
}

const Translate: React.FC<TranslateProps> = ({ arr, index, type, pos }) => {
  const previousIndex = useRef<number | null>(null)
  const translateRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const safeIndex = Math.max(index, 0) // Ensure index is non-negative

  const direction =
    previousIndex.current && safeIndex < previousIndex.current
      ? "backward"
      : "forward"

  

  useGSAP(() => {
    if (!contentRef.current) return
    const height = contentRef.current.offsetHeight
    const ease = "power2.inOut"

    if (direction === "forward") {
      gsap.fromTo(
        contentRef.current,
        { y: height, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease }
      )
    } else if (direction === "backward") {
      gsap.fromTo(
        contentRef.current,
        { y: -height, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease }
      )
    } else {
      // Initial animation
      gsap.fromTo(
        contentRef.current,
        { y: height, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease }
      )
    }
  }, [index])

  useEffect(() => {
    previousIndex.current = safeIndex
  }, [safeIndex])

  if (index < 0) return

  const renderContent = () => {
    if (safeIndex >= arr.length) return null // Handle overflow
    switch (type) {
      case "title":
        return arr[safeIndex].title.text
      case "description":
        return arr[safeIndex].description.text
      case "icon":
        return arr[safeIndex].icon
      default:
        return null
    }
  }

  const getClassName = () => {
    switch (type) {
      case "title":
        return cn("text-7xl mb-5", arr[safeIndex].title.className)
      case "description":
        return cn("text-sm", arr[safeIndex].description.className)
      case "icon":
        return cn(pos === 1 ? "py-3" : "w-[60%] ml-auto py-3")
      default:
        return ""
    }
  }

  return (
    <div ref={translateRef} className="overflow-hidden min-h-fit ">
      <div ref={contentRef} className={getClassName()}>
        {renderContent()}
      </div>
    </div>
  )
}
