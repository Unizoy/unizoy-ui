"use client"
import Link from "next/link"
import { useRef } from "react"
export default function HeroVideoGrid() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 2
    }
  }
  return (
    <section className="px-6 pb-[100px] container-wrapper mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:[grid-template-columns:minmax(100px,1fr)_minmax(100px,1fr)] lg:[grid-template-columns:minmax(100px,2fr)_minmax(100px,1fr)_minmax(100px,2fr)_minmax(100px,2fr)]">
        <Link href={"/docs/components/animated-tooltip"}>
          <div className="inline-block h-full">
            <video
              className="cursor-pointer  rounded-3xl border-[10px] h-full bg-black"
              muted
              preload="auto"
              loop
              onMouseEnter={(e) => {
                e.currentTarget.play()
              }}
              onMouseOut={(e) => {
                e.currentTarget.pause()
                e.currentTarget.currentTime = 0
              }}
            >
              <source src="/videos/animated-tooltip.mp4" type="video/mp4" />
            </video>
          </div>
        </Link>
        <Link href={"/docs/components/custom-pointer"}>
          <div className="h-full">
            <video
              className="cursor-pointer  rounded-3xl border-[10px] h-full object-cover "
              muted
              preload="auto"
              loop
              onMouseEnter={(e) => {
                e.currentTarget.play()
              }}
              onMouseOut={(e) => {
                e.currentTarget.pause()
                e.currentTarget.currentTime = 2
              }}
            >
              <source src="/videos/custom-pointer.mp4" type="video/mp4" />
            </video>
          </div>
        </Link>
        <Link href={"/docs/components/image-trail"}>
          <div className="h-full inline-block">
            <video
              className="cursor-pointer h-full rounded-3xl border-[10px] bg-black"
              muted
              preload="auto"
              loop
              onMouseEnter={(e) => {
                e.currentTarget.play()
              }}
              onMouseOut={(e) => {
                e.currentTarget.pause()
                e.currentTarget.currentTime = 0
              }}
            >
              <source src="/videos/image-trail.mp4" type="video/mp4" />
            </video>
          </div>
        </Link>
        <Link href={"/docs/components/motion-cards"}>
          <div>
            <video
              className="cursor-pointer  rounded-3xl border-[10px]"
              muted
              preload="auto"
              loop
              onMouseEnter={(e) => {
                e.currentTarget.play()
              }}
              onMouseOut={(e) => {
                e.currentTarget.pause()
                e.currentTarget.currentTime = 0
              }}
            >
              <source src="/videos/motion-cards.mp4" type="video/mp4" />
            </video>
          </div>
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:[grid-template-columns:minmax(150px,2fr)_minmax(150px,1fr)_minmax(150px,2fr)]">
        <Link href={"/docs/components/scaling-sliding-cards"}>
          <div className="inline-block h-full ">
            <video
              ref={videoRef}
              muted
              preload="auto"
              className="cursor-pointer  rounded-3xl border-[10px] h-full"
              loop
              onLoadedMetadata={handleLoadedMetadata}
              onMouseEnter={(e) => {
                e.currentTarget.play()
              }}
              onMouseOut={(e) => {
                e.currentTarget.pause()
                e.currentTarget.currentTime = 0
              }}
            >
              <source
                src="/videos/scaling-sliding-cards.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </Link>
        {/* 2,2 */}
        <Link href={"/docs/components/scrolling-cards"}>
          <div className="inline-block h-full ">
            <video
              ref={videoRef}
              muted
              preload="auto"
              className="cursor-pointer object-cover rounded-3xl border-[10px] h-full"
              loop
              onMouseEnter={(e) => {
                e.currentTarget.play()
              }}
              onMouseOut={(e) => {
                e.currentTarget.pause()
                e.currentTarget.currentTime = 0
              }}
            >
              <source src="/videos/scrolling-cards.mp4" type="video/mp4" />
            </video>
          </div>
        </Link>
        {/* 2,3 */}
        <Link href={"/docs/components/scrolling-video-cards"}>
          <div className="inline-block h-full ">
            <video
              ref={videoRef}
              muted
              preload="auto"
              className="cursor-pointer  rounded-3xl border-[10px] h-full bg-black" 
              loop
              onMouseEnter={(e) => {
                e.currentTarget.play()
              }}
              onMouseOut={(e) => {
                e.currentTarget.pause()
                e.currentTarget.currentTime = 2
              }}
            >
              <source
                src="/videos/scrolling-video-cards.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </Link>
      </div>
    </section>
  )
}
