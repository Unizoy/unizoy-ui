import Link from "next/link"
import { Button } from "@/registry/ui/button"
import {TypeWriter} from "@/registry/ui/typewriter"
import { Icons } from "@/components/icons"
export default function HeroSection() {
  return (
    <section className="my-[100px]  items-center flex flex-col ">
      <div className=" mx-auto w-[80vw] sm:w-[60vw]">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5x6 w-fit mx-auto font-medium">
          Make Websites that
        </h2>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-5x6 w-fit mx-auto font-medium text-blue-600">
         <TypeWriterDemo />
        </h2>

        <p className=" text-xs md:text-base text-center  text-foreground/80 w-full  mt-5 font-semibold text-wrap ">
          Step into the future of UI. Interactive designs that don’t just look
          good, they do the talking.
        </p>
      </div>
      <div className="relative sm:flex gap-6">
        <Link
          href={"/docs/components"}
          className="bg-transparent w-full h-full"
        >
          <Button variant={"blue"} className="mt-10 w-full h-full">
            Get Started
          </Button>
        </Link>

        <Link
          href={"/docs/components"}
          className="bg-transparent w-full h-full"
        >
          <Button variant={"green"} className=" mt-3 sm:mt-10 w-full h-full">
            Browse Components
          </Button>
        </Link>
      </div>
      <div className="flex justify-between gap-3 mt-10 items-center">
        {/* Gsap */}
        <Link href={"https://gsap.com"} prefetch={false}>
        <Icons.gsap className="text-[#7E7E7E]" />
        </Link>
        {/* Typescript */}
        <Link href={"https://www.typescriptlang.org/"} prefetch={false}>
        <Icons.typescript className="text-white dark:text-black"/>
        </Link>
        {/* Nextjs */}
        <Link href={"https://nextjs.org/"} prefetch={false}>
        <Icons.nextjs className="text-[#7E7E7E]" />
        </Link>
        {/* Reactjs */}
        <Link href={"https://react.dev/"} prefetch={false}>
        <Icons.reactjs className="text-[#7E7E7E]" />
        </Link>
        {/* Tailwindcss */}
        <Link href={"https://tailwindcss.com/"} prefetch={false}>
        <Icons.tailwind className="w-[58px] h-[38px] text-[#7E7E7E]" />
        </Link>
      </div>
    </section>
  )
}
function TypeWriterDemo() {
  const StaticTextWithClasses = [
    { text: "" },
    { text: "", className: "text-green-500" },
  ]
  const DynamicTextWithClasses = [
    { text: "Interact with people", className: "text-blue-600 text-nowrap" },
    { text: "Replicate your ideas", className: "text-blue-600 text-nowrap" },
    { text: "Enhance your Brand", className: "text-blue-600 text-nowrap"}
  ]
  return (
    <TypeWriter
      staticText={StaticTextWithClasses}
      textArray={DynamicTextWithClasses}
    />
  )
}