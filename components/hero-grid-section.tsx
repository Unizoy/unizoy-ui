import InfiniteMovingCardsDemo from "@/registry/new-york/examples/infinite-moving-cards-demo"
import { CustomCursor, NameTag } from "@/registry/new-york/ui/custom-pointer"
import Link from "next/link"
import { RevealText } from "@/registry/new-york/ui/reveal-text"
import Unizoy from "@/public/RevealText/Unizoy.png"
import { TextRollUpEffect } from "@/registry/new-york/ui/text-rollup-effect"
import { TypeWriter } from "@/registry/new-york/ui/typewriter"
export default function HeroGridSection() {
  return (
    <section className="px-6 pt-3 flex flex-col gap-3 mt-20 max-w-[1536px]  w-full  lg:w-[80%] lg:mx-auto  relative rounded-lg ">
      {/* first row */}
      <div className=" w-full relative flex  flex-col md:flex-row gap-2  md:gap-10 justify-start items-center">
        <Link
          href={"/docs/components/text-rollup-effect"}
          className="border border-dotted md:w-1/3 w-full flex justify-center items-center"
        >
          <div>
            <TextRollUpEffect className=" text-2xl lg:text-4xl  ">
              SonicBoom
            </TextRollUpEffect>
          </div>
        </Link>
        <Link
          href={"/docs/components/typewriter"}
          className="border border-dotted md:w-2/3 w-full flex justify-center items-center lg:!text-xl"
        >
          <TypeWriterDemo />
        </Link>
      </div>
      {/* secound row */}
      <div className="border border-dotted w-full relative flex">
        <Link
          href={"/docs/components/infinite-moving-cards"}
          className="overflow-hidden"
        >
          <InfiniteMovingCardsDemo />
        </Link>
      </div>
      {/* thirs row */}
      <div className=" w-full relative flex   flex-col md:flex-row md:gap-20 gap-3  justify-start items-center">
        <div className="flex border border-dotted justify-center items-center text-xl sm:text-2xl lg:text-4xl gap-2  w-full h-full md:w-2/3 cursor-pointer">
          We are
          <RevealText
            variant="gradient0"
            className="font-bold sm:text-2xl lg:text-4xl"
            image={Unizoy.src}
            href="https://unizoy.com/"
          >
            Unizoy{" "}
          </RevealText>
          .
        </div>
        {/* for dark mode */}
        <Link
          href={"/docs/components/custom-pointer"}
          className="dark:flex hidden relative md:w-1/3 cursor-none border border-dotted"
        >
          <img src="/og.jpg" alt="" />
          <CustomCursor className="scale-100">
            <NameTag name="Ankush" src="/avatars/01.png" />
          </CustomCursor>
        </Link>
        {/* on light mode */}
        <Link
          href={"/docs/components/custom-pointer"}
          className="dark:hidden flex relative md:w-1/3 cursor-none border border-dotted"
        >
          <img src="/og-light.png" alt="" />
          <CustomCursor className="scale-100">
            <NameTag name="Ankush" src="/avatars/01.png" />
          </CustomCursor>
        </Link>
      </div>
    </section>
  )
}
function TypeWriterDemo() {
  const StaticTextWithClasses = [
    { text: "We are" },
    { text: "Unizoy", className: "text-green-500" },
  ]
  const DynamicTextWithClasses = [
    { text: "Passionately", className: "text-blue-500" },
    { text: "Eagerly", className: "text-blue-500" },
  ]
  return (
    <TypeWriter
      className=" text-xl  lg:text-4xl 2xl:text-5xl"
      staticText={StaticTextWithClasses}
      textArray={DynamicTextWithClasses}
    />
  )
}
