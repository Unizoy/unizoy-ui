import {
  Rythem,
  Line,
  Word,
  Picture,
} from "@/registry/new-york/ui/rythemic-reveal"
import HeroSection from "@/components/hero-section"
import HeroSection2 from "@/components/hero-section-2"
import { TextHoverEffect } from "@/registry/new-york/ui/text-hover-effect"
import HeroGridSection from "@/components/hero-grid-section"

export default function IndexPage() {
  return (
    <>
      {/* <Announcement /> */}

      <HeroSection />
      <HeroSection2 />
      <HeroGridSection />

      <Rythem
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl pt-[150px]"
        imgsWidth={90}
        markers={false}
      >
        <Line className="flex mx-auto w-fit gap-3 ">
          <Word>FROM</Word>
          <Word>STATIC</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
            <Picture
              className=""
              src="/home/static.jpg"
              alt="Static webpage elements"
            />
          </Word>
          <Word>ELEMENTS</Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>TO</Word>
          <Word>DYNAMIC</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
            <Picture src="/home/dynamic.jpg" alt="Animated UI elements" />
          </Word>
          <Word>EXPERIENCES</Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>TRANSFORM</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
            <Picture
              src="/home/mundane.jpg"
              alt="Before and after animation states"
            />
          </Word>
          <Word>MUNDANE</Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>INTO</Word>
          <Word>MAGICAL</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
            <Picture src="/home/magical.jpg" alt="Magical animation effect" />
          </Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>OPEN</Word>
          <Word>SOURCE</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
            <Picture
              src="/home/opensource.jpg"
              alt="Open source contribution"
            />
          </Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>ANIMATION</Word>
          <Word>ECOSYSTEM</Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3 py-0">
          <Word>UNIZOYUI</Word>
          <Word className="rounded-md scale-[0.40] md:scale-[0.50] ">
            <Picture src="/home/unizoy.png" alt="Unizoyui logo animation" />
          </Word>
          <Word>POWERS</Word>
        </Line>

        <Line className="flex mx-auto w-fit gap-3">
          <Word>YOUR</Word>
          <Word>CREATIVE</Word>
          <Word>VISION</Word>
        </Line>
      </Rythem>
      <TextHoverEffect text="unizoy" />
    </>
  )
}
