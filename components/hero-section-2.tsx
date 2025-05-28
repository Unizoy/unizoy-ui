import { Button } from "@/registry/ui/button"
import Link from "next/link"
import { allDocs } from "contentlayer/generated"
import { Mdx } from "@/components/mdx-components"
import { MdOutlineExplore } from "react-icons/md"
import DraggableCarouselDemo from "@/registry/examples/draggable-carousel-demo"
import { CodeBlockCommand } from "./code-block-command"
import { ArrowUpRight } from "lucide-react"
import { CursorIcon, CustomCursor, NameTag } from "@/registry/ui/custom-pointer"

export default function HeroSection2() {
  const doc = allDocs.find((doc) => doc.slugAsParams === "components/home-page")
  return (
    <section className="container-wrapper flex flex-col justify-center items-center mx-6">
      <h1 className="flex flex-wrap justify-center items-center text-2xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] leading-none font-medium gap-2  w-fit mx-auto text-center">
        Enter the Multiverse of Innovative UIs
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-[26px] leading-none font-normal  text-center   text-[#7E7E7E]  mx-auto mt-5  px-10 mb-12 md:px-0">
        Browse the library of best rated UIs- Responsive, Reusable, and Ready to
        Act.
      </p>

      <div className="px-3 pt-3  rounded-md bg-gray-200 w-full  lg:w-[80%] max-w-[1536px] lg:mx-auto flex flex-col gap-3 relative">
        <div className="px-3 py-2 rounded-lg bg-white dark:bg-black relative cursor-none">
          <DraggableCarouselDemo />
          <CustomCursor className="">
            {/* to supress the default cursor */}
            <CursorIcon className="relative w-fit"></CursorIcon>
            <NameTag name="Drag me" className="text-sm" />
          </CustomCursor>
        </div>

        <div className="px-3  pb-6 rounded-xl bg-white dark:bg-black">
          <CodeBlockCommand
            __npmCommand__={"npm install gsap @gsap/react"}
            __yarnCommand__={"yarn add gsap @gsap/react"}
            __pnpmCommand__={"pnpm add gsap @gsap/react"}
            __bunCommand__={"bun add gsap @gsap/react"}
          />
        </div>

        <div className="px-3 pb-2 rounded-xl bg-white dark:bg-black h-fit  ">
          <Mdx code={doc!.body.code} />
        </div>

        {/* Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white dark:from-[#0B0A0B] to-transparent"></div>
      </div>

      <Link href="/docs/components/draggable-carousel">
        <Button variant={"blue"} className="flex">
          Explore Now <ArrowUpRight />
        </Button>
      </Link>
    </section>
  )
}
