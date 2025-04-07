"use client"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { RefObject, useRef } from "react"
import gsap from "gsap"
import { cn } from "../lib/utils"
gsap.registerPlugin(ScrollTrigger)
/**
 *Default:- className="text-8xl font-semibold h-fit flex-col gap-10 justify-center items-center uppercase w-full"
 *
 */
function Rythem({
  children,
  className,
  imgsWidth,
  scrollerRef,
}: {
  children: React.ReactNode
  className?: string
  imgsWidth: number
  scrollerRef?: RefObject<HTMLElement>
}) {
  const sectionRef = useRef<HTMLElement>(null)
  useGSAP(
    () => {
      if (!sectionRef.current) return
      const allSpan = sectionRef.current.querySelectorAll("span")
      const allImages = sectionRef.current.querySelectorAll("img")

      gsap.set(allSpan, {
        opacity: 0.1,
      })
      gsap.set(allImages, {
        width: 0,
        display: "none",
      })
      allImages.forEach((img) => {
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            //edit these values for diffrent position of image's animation start and end
            start: "center 80%",
            end: "center 80%",
            toggleActions: "play none none reverse",
            scroller: scrollerRef?.current ?? window,
          },
          display: "block",
          width: `${imgsWidth}px`,
          duration: 0.5,
        })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          //edit these values for diffrent position of animation start and end
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          scroller: scrollerRef?.current ?? window,
        },
      })

      tl.to(allSpan, {
        opacity: 1,
        stagger: 0.2,
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className={cn(
        "text-8xl font-semibold h-fit flex-col gap-10 justify-center items-center uppercase w-full",
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

function Line({ children,className, ...props }: LineProps) {
  return <p {...props} className={cn("items-center",className)}>{children}</p>
}

type WordProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
}

function Word({ children, className, ...props }: WordProps) {
  return (
    <span {...props} className={cn("overflow-hidden", className)}>
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
  return <img className="h-full " {...props} />
}
export { Rythem, Line, Word, Picture }
