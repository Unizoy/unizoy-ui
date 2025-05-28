import { Rythem, Line, Word, Picture } from "@/registry/ui/rythemic-reveal"
export default function HeroRythem() {
  return (
    <>
      {/* large screens */}
      <section className="container-wrapper lg:flex hidden">
        <Rythem
          className=" w-fit mx-auto text-center mt-[200px] mb-[75px]  text-4xl sm:text-6xl md:text-7xl lg:text-8xl section2 "
          imgsWidth={125}
          markers={false}
          positionToAnimation={60}
        >
          <Line className="flex mx-auto w-fit gap-3 line2">
            <Word>Design</Word>
            <Word className="rounded-md ">
              <Picture
                height={100}
                // width={"200px"}
                src="/home/static.jpg"
                alt="Static webpage elements"
              />
            </Word>
            <Word>Smarter</Word>
          </Line>

          <Line className="flex mx-auto w-fit gap-3 line2">
            <Word>Launch</Word>
            <Word className="rounded-md">
              <Picture
                height={100}
                // width={"200px"}
                src="/home/dynamic.jpg"
                alt="Animated UI elements"
              />
            </Word>
            <Word>Faster</Word>
          </Line>

          <Line className="flex gap-3 mx-auto w-fit line2">
            <Word>Convert</Word>
            <Word className="rounded-md ">
              <Picture
                height={100}
                // width={"200px"}
                src="/home/mundane.jpg"
                alt="Before and after animation states"
              />
            </Word>
            <Word>Better</Word>
          </Line>
        </Rythem>
      </section>
      {/* medium screens */}
      <section className="hidden md:flex lg:hidden">
        <Rythem
          className=" w-fit mx-auto text-center mt-[200px] mb-[85px] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl section2"
          imgsWidth={85}
          markers={false}
          positionToAnimation={80}
        >
          <Line className="flex mx-auto w-fit  gap-3 line2">
            <Word>Design</Word>
            <Word className="rounded-md ">
              <Picture
                height={50}
                src="/home/static.jpg"
                alt="Static webpage elements"
              />
            </Word>
            <Word>Smarter</Word>
          </Line>

          <Line className="flex mx-auto w-fit  gap-3 line2">
            <Word>Launch</Word>
            <Word className="rounded-md ">
              <Picture
                height={50}
                src="/home/dynamic.jpg"
                alt="Animated UI elements"
              />
            </Word>
            <Word>Faster</Word>
          </Line>

          <Line className="flex mx-auto w-fit gap-3 line2">
            <Word>Convert</Word>
            <Word className="rounded-md ">
              <Picture
                height={50}
                src="/home/mundane.jpg"
                alt="Before and after animation states"
              />
            </Word>
            <Word>Better</Word>
          </Line>
        </Rythem>
      </section>
      {/* small screens */}
      <section className="hidden sm:flex md:hidden">
        <Rythem
          className=" w-fit mx-auto text-center mt-[200px] mb-[100px] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl section2"
          imgsWidth={70}
          markers={false}
          positionToAnimation={80}
        >
          <Line className="flex mx-auto w-fit  gap-3 line2">
            <Word>Design</Word>
            <Word className="rounded-md ">
              <Picture
                height={50}
                src="/home/static.jpg"
                alt="Static webpage elements"
              />
            </Word>
            <Word>Smarter</Word>
          </Line>

          <Line className="flex mx-auto w-fit  gap-3 line2">
            <Word>Launch</Word>
            <Word className="rounded-md ">
              <Picture
                height={50}
                src="/home/dynamic.jpg"
                alt="Animated UI elements"
              />
            </Word>
            <Word>Faster</Word>
          </Line>

          <Line className="flex mx-auto w-fit gap-3 line2">
            <Word>Convert</Word>
            <Word className="rounded-md ">
              <Picture
                height={50}
                src="/home/mundane.jpg"
                alt="Before and after animation states"
              />
            </Word>
            <Word>Better</Word>
          </Line>
        </Rythem>
      </section>
      {/* very small screens */}
      <section className=" sm:hidden flex">
        <Rythem
          className="w-fit mx-auto text-center mt-[200px] mb-[130px] text-3xl sm:text-4"
          imgsWidth={45}
          markers={false}
          positionToAnimation={80}
        >
          <Line className="flex mx-auto w-fit  gap-3 line2">
            <Word>Design</Word>
            <Word className="rounded-md ">
              <Picture
                height={50}
                src="/home/static.jpg"
                alt="Static webpage elements"
              />
            </Word>
            <Word>Smarter</Word>
          </Line>

          <Line className="flex mx-auto w-fit  gap-3 line2">
            <Word>Launch</Word>
            <Word className="rounded-md ">
              <Picture
                height={50}
                src="/home/dynamic.jpg"
                alt="Animated UI elements"
              />
            </Word>
            <Word>Faster</Word>
          </Line>

          <Line className="flex mx-auto w-fit gap-3 line2">
            <Word>Convert</Word>
            <Word className="rounded-md ">
              <Picture
                height={50}
                src="/home/mundane.jpg"
                alt="Before and after animation states"
              />
            </Word>
            <Word>Better</Word>
          </Line>
        </Rythem>
      </section>
    </>
  )
}
