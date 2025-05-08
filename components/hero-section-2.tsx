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
    <section className="flex flex-col justify-center items-center mx-6">
      <h1 className="flex flex-wrap justify-center items-center gap-2 font-semibold w-fit mx-auto text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
        Explore <MdOutlineExplore /> Popular UI Components
      </h1>
      <p className="text-xs md:text-sm text-center text-foreground md:w-1/2 mx-auto mt-5 font-semibold px-10 mb-12 md:px-0">
        Browse top-rated snippets shared by the community — responsive,
        reusable, and ready to copy into your next project.
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
