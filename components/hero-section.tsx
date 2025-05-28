import Link from "next/link"
import { Button } from "@/registry/ui/button"
import { TypeWriter } from "@/registry/ui/typewriter"
import { Icons } from "@/components/icons"
export default function HeroSection() {
  return (
    <section className="py-[100px] container-wrapper border-grid items-center flex flex-col ">
      <div className=" mx-auto lg:min-w-[60vw] max-w-fit ">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] leading-none w-fit mx-auto font-medium">
          Make Websites that
        </h2>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] leading-none  mx-auto font-medium text-blue-600">
          <TypeWriterDemo />
        </h2>

        <p className="lg:w-[747.5px] md:w-[560px] sm:w-[448px] w-[280px] text-base md:text-xl lg:text-[26px] leading-none font-normal  text-center  text-[#7E7E7E]  mt-5 text-wrap  mx-auto ">
          <span className="hidden sm:flex">
            {" "}
            Step into the future of UI. Interactive designs that don’t just look
            good, they do the talking.
          </span>
          <span className="sm:hidden flex flex-col">
            <span className="w-fit mx-auto">Step into the future of UI.</span>
            <span> Interactive designs that</span>
            <span> don’t just look good,</span>
            <span>they do the talking.</span>
          </span>
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
          <Icons.typescript className="text-white dark:text-black" />
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
  const StaticTextWithClasses = [{ text: "" }]
  const DynamicTextWithClasses = [
    { text: "Interact with people", className: "text-blue-600 text-nowrap" },
    { text: "Replicate your ideas", className: "text-blue-600 text-nowrap" },
    { text: "Enhance your Brand", className: "text-blue-600 text-nowrap" },
  ]
  return (
    <TypeWriter
      className="w-fit mx-auto"
      staticText={StaticTextWithClasses}
      textArray={DynamicTextWithClasses}
    />
  )
}
