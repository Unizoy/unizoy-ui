import InfiniteMovingCardsDemo from "@/registry/examples/infinite-moving-cards-demo"
import { CustomCursor, NameTag } from "@/registry/ui/custom-pointer"
import Link from "next/link"
import { RevealText } from "@/registry/ui/reveal-text"
import Unizoy from "@/public/RevealText/Unizoy.png"
import { TextRollUpEffect } from "@/registry/ui/text-rollup-effect"
import { TypeWriter } from "@/registry/ui/typewriter"
export default function HeroGridSection() {
  return (
    <section className="container-wrapper px-6 flex flex-col gap-3 pt-20 relative  ">
      {/* first row */}
      <div className=" w-full relative flex  flex-col md:flex-row gap-2  md:gap-10 justify-start items-center">
        <Link
          href={"/docs/components/text-rollup-effect"}
          className="border border-dotted md:w-1/3 w-full flex justify-center items-center"
        >
          <div>
            <TextRollUpEffect className=" text-4xl  ">
              Hello there!
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
