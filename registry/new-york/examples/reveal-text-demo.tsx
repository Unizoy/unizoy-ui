"use client"
import { RevealText } from "@/registry/new-york/ui/reveal-text"
import Unizoy from "@/public/RevealText/Unizoy.png"
import Tailwind from "@/public/RevealText/Tailwind.png"
import GSAP from "@/public/RevealText/GSAP.png"

export default function () {
  return (
    <div className="w-screen  flex justify-center items-center  ">
      <div className=" w-11/12 p-1 md:p-5 lg:p-10 space-y-12 text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-500 max-w-4xl">
        <p className="contents">
          <RevealText
            variant="gradient0"
            className="font-bold"
            image={Unizoy.src}
            href="https://unizoy.com/"
          >
            Unizoy{" "}
          </RevealText>{" "}
          blends{" "}
          <RevealText
            variant="gradient1"
            className="font-bold"
            image={Tailwind.src}
            hoverImageClass="border-gray-400"
            href="https://tailwindcss.com/"
          >
            Tailwind-CSS
          </RevealText>{" "}
          magic for stunning web designs.
        </p>
        <p>
          We use{" "}
          <RevealText
            variant="gradient7"
            className="font-bold"
            image={GSAP.src}
            href="https://gsap.com/"
          >
            GSAP
          </RevealText>{" "}
          animations to make every interaction smooth and dynamic.
        </p>
      </div>
    </div>
  )
}
