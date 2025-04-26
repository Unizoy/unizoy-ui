"use client"
import gsap from "gsap"
import React, { useState, useEffect, useRef } from "react"
import { Roboto } from "next/font/google"
import { cn } from "@/lib/utils"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

interface TestimonialProps {
  title: string
  subTitle: string
  description: string
}

interface Props {
  data: TestimonialProps[]
  backgroundUrl?: string
  animationDuration?: number
  backgroundClassName?: string
  containerClassName?: string // Custom classes for the outer container
  contentWrapperClassName?: string // Custom classes for the wrapper of content
  titleTextClassName?: string // Custom classes for the title text
  subtitleTextClassName?: string // Custom classes for the subtitle text
  descriptionTextClassName?: string // Custom classes for the description text
}

const Testimonial: React.FC<Props> = ({
  data,
  backgroundUrl = "https://static.videezy.com/system/resources/previews/000/007/313/original/Plexus.mp4",
  animationDuration = 4000,
  backgroundClassName = "absolute top-0 left-0 w-screen h-screen object-cover -z-0 opacity-25",
  containerClassName = "w-screen h-screen bg-black text-white",
  contentWrapperClassName = "w-full md:w-11/12 lg:w-10/12 p-10",
  titleTextClassName = "text-[1.75rem] md:text-[2rem] lg:text-[2.5rem]",
  subtitleTextClassName = "text-2xl lg:text-3xl font-semibold",
  descriptionTextClassName = "text-base md:text-lg text-white/90",
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const [isFirst, setFirst] = useState<boolean>(true)
  const linesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateIn = () => {
      if (!linesRef.current) return
      const lines = linesRef.current.querySelectorAll("span")
      gsap.fromTo(
        lines,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out",
        }
      )
    }

    const animateOut = (onComplete: () => void) => {
      if (!linesRef.current) return
      const lines = linesRef.current.querySelectorAll("span")
      gsap.to(lines, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete,
      })
    }

    const interval = setInterval(() => {
      animateOut(() => {
        setActiveTab((prev) => (prev + 1) % data.length)
        setTimeout(() => {
          animateIn()
        }, 1) // Small gap
      })
    }, animationDuration)

    animateIn() // Initial animation

    return () => clearInterval(interval)
  }, [data.length])
  useEffect(() => {
    setTimeout(() => setFirst(false), 5)
  }, [])

  const isVideo = (url: string) => {
    return (
      url.endsWith(".mp4") ||
      url.endsWith(".webm") ||
      url.endsWith(".ogg") ||
      url.endsWith(".mov") ||
      url.endsWith(".avi") ||
      url.endsWith(".flv") ||
      url.endsWith(".mkv")
    )
  }
  return (
    <div
      className={cn(
        `relative w-screen h-screen bg-black text-white ${roboto.className}`,
        containerClassName
      )}
    >
      {isVideo(backgroundUrl) ? (
        <video
          className={cn(
            "absolute top-0 left-0 w-screen h-screen object-cover -z-0 opacity-25",
            backgroundClassName
          )}
          src={backgroundUrl}
          autoPlay
          loop
          muted
        />
      ) : (
        <img
          className={cn(
            "absolute top-0 left-0 w-screen h-screen object-cover -z-0 opacity-25",
            backgroundClassName
          )}
          //  src="https://static.wixstatic.com/media/0d6674_db8c76159aef4e0fad0bf37dcad1b8ac~mv2.png/v1/fill/w_948,h_559,al_c,q_90,enc_avif,quality_auto/extream.png"
          src={backgroundUrl}
        />
      )}

      <div
        className={cn(
          "relative flex flex-col justify-between w-full md:w-11/12 lg:w-10/12 h-full mx-auto p-10",
          contentWrapperClassName
        )}
      >
        <div className="space-y-4 md:space-y-7 lg:space-y-10">
          {data.map(({ title }, index) => (
            <div key={index} className="relative w-fit group">
              <span
                className={cn(
                  "text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-bold cursor-pointer",
                  titleTextClassName
                )}
              >
                {title}
              </span>
              <div
                className={`absolute h-[1.125px] bg-gray-600 transition-all duration-500 ease-in-out ${
                  index === activeTab ? "w-full left-0" : "w-0 right-0"
                } group-hover:w-full group-hover:left-0`}
              ></div>
              {/* <div
                className={`absolute h-[1.125px] bg-white transition-[width] ease-in-out
                     ${index === activeTab? `${isFirst ? "w-0" : "w-full"} duration-[3000ms]`: "w-0 right-0 duration-500"} `}
              ></div> */}
              <div
                className="absolute h-[1.125px] bg-white transition-[width] ease-in-out"
                style={{
                  width: index === activeTab ? (isFirst ? "0%" : "100%") : "0%",
                  right: index === activeTab ? "auto" : "0",
                  transitionDuration:
                    index === activeTab ? `${animationDuration}ms` : "500ms",
                }}
              ></div>
              <div></div>
            </div>
          ))}
        </div>

        {/* Bottom Right Div */}
        <div className="">
          <div
            className="sm:float-right max-w-[25rem] overflow-hidden"
            ref={linesRef}
          >
            {data.map(({ subTitle, description }, index) =>
              index === activeTab ? (
                <div
                  key={index}
                  className="relative w-fit groupspace-y-3 lg:space-y-5"
                >
                  <div className="">
                    {subTitle.split("\n").map((line, idx) => (
                      <div key={idx} className="h-10  overflow-hidden">
                        <span
                          className={cn(
                            "text-2xl lg:text-3xl  block font-semibold pl-[2px]",
                            subtitleTextClassName
                          )}
                        >
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="">
                    {description.split("\n").map((line, idx) => (
                      <div key={idx} className="h-7  overflow-hidden">
                        <span
                          className={cn(
                            "text-base md:text-lg block text-white/90 pl-[2px]",
                            descriptionTextClassName
                          )}
                        >
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Testimonial }
