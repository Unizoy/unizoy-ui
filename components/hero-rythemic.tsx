import {
  Rythem,
  Line,
  Word,
  Picture,
} from "@/registry/ui/rythemic-reveal"
export default function HeroRythem() {
  return (
    <>
      <section className="md:flex hidden">
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
      </section>
      <section className="md:hidden flex">
        <Rythem
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl pt-[150px]"
          imgsWidth={50}
          markers={false}
          positionToAnimation={90}
        >
          <Line className="flex mx-auto w-fit md:gap-3 gap-1">
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

          <Line className="flex mx-auto w-fit md:gap-3 gap-1">
            <Word>TO</Word>
            <Word>DYNAMIC</Word>
            <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
              <Picture src="/home/dynamic.jpg" alt="Animated UI elements" />
            </Word>
            <Word>EXPERIENCES</Word>
          </Line>

          <Line className="flex mx-auto w-fit md:gap-3 gap-1">
            <Word>TRANSFORM</Word>
            <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
              <Picture
                src="/home/mundane.jpg"
                alt="Before and after animation states"
              />
            </Word>
            <Word>MUNDANE</Word>
          </Line>

          <Line className="flex mx-auto w-fit md:gap-3 gap-1">
            <Word>INTO</Word>
            <Word>MAGICAL</Word>
            <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
              <Picture src="/home/magical.jpg" alt="Magical animation effect" />
            </Word>
          </Line>

          <Line className="flex mx-auto w-fit md:gap-3 gap-1">
            <Word>OPEN</Word>
            <Word>SOURCE</Word>
            <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
              <Picture
                src="/home/opensource.jpg"
                alt="Open source contribution"
              />
            </Word>
          </Line>

          <Line className="flex mx-auto w-fit md:gap-3 gap-1">
            <Word>ANIMATION</Word>
            <Word>ECOSYSTEM</Word>
          </Line>

          <Line className="flex mx-auto w-fit md:gap-3 gap-1 py-0">
            <Word>UNIZOYUI</Word>
            <Word className="rounded-md scale-[0.40] md:scale-[0.50] ">
              <Picture src="/home/unizoy.png" alt="Unizoyui logo animation" />
            </Word>
            <Word>POWERS</Word>
          </Line>

          <Line className="flex mx-auto w-fit md:gap-3 gap-1">
            <Word>YOUR</Word>
            <Word>CREATIVE</Word>
            <Word>VISION</Word>
          </Line>
        </Rythem>
      </section>
    </>
  )
}
