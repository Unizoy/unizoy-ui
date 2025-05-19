"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Motto() {
     useGSAP(() => {
    const lines = gsap.utils.toArray(".line2") as Element[]

    gsap.set(lines, { opacity: 0.1, scale: 0.8 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "top 40%",
        end: "+=600", // controls scroll length for all animations
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    })

    lines.forEach((line, index) => {
      // Animate current line in
      tl.to(line, { opacity: 1, scale: 1, duration: 0.5 })

      // Reset previous line (if any)
      if (index > 0) {
        tl.to(
          lines[index - 1],
          { opacity: 0.1, scale: 0.8, duration: 0.5 },
          "<"
        )
      }
      if (index === lines.length - 1) {
        tl.to(line, { opacity: 0.1, scale: 0.8, duration: 0.5 })
      }
    })
  }, [])
  return (
    <section className="w-fit mx-auto text-center mt-[100px] text-3xl sm:text-7xl section2">
      <div className="line2 text-shadow-light dark:text-shadow-dark">
        Design Smarter
      </div>
      <div className="line2 text-shadow-light dark:text-shadow-dark">
        Launch Faster
      </div>
      <div className="line2 text-shadow-light dark:text-shadow-dark">
        Convert Better
      </div>
    </section>
  )
}
