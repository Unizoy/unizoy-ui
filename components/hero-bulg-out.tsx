"use client"
import { Line, Picture, Rythem, Word } from "@/registry/ui/rythemic-reveal"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Motto() {
  // useGSAP(() => {
  //   const lines = gsap.utils.toArray(".line2") as Element[]
  //   let tl: gsap.core.Timeline
  //   const mm = gsap.matchMedia()
  //   gsap.set(lines, {  scale: 0.8 })
  //   mm.add("(min-width: 1024px )", () => {
  //     tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".section2",
  //         start: "top 60%",
  //         end: "+=600", // controls scroll length for all animations
  //         scrub: 1,
  //         pinSpacing: true,
  //       },
  //     })
  //   }).add("(max-width: 1024px)", () => {
  //     tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".section2",
  //         start: "top 80%",
  //         end: "+=600", // controls scroll length for all animations
  //         scrub: 1,
  //         pinSpacing: true,
  //       },
  //     })
  //   })

  //   lines.forEach((line, index) => {
  //     // Animate current line in
  //     tl.to(line, {  scale: 1, duration: 0.5 })

  //     // Reset previous line (if any)
  //     if (index > 0) {
  //       tl.to(
  //         lines[index - 1],
  //         { scale: 0.8, duration: 0.5 },
  //         "<"
  //       )
  //     }
  //     if (index === lines.length - 1) {
  //       tl.to(line, {  scale: 0.8, duration: 0.5 })
  //     }
  //   })
  // }, [])
  useGSAP(() => {
  const lines = gsap.utils.toArray(".line2") as Element[];
  gsap.set(lines, { scale: 0.8 });

  const mm = gsap.matchMedia();

  mm.add("(max-width: 1024px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        // end: "+=600",
        scrub: 1,
        pinSpacing: true,
      },
    });

    lines.forEach((line, index) => {
      tl.to(line, { scale: 1, duration: 0.5 });
      if (index > 0) {
        tl.to(lines[index - 1], {opacity:0.1, scale: 0.8, duration: 0.5 }, "<");
      }
      if (index === lines.length - 1) {
        tl.to(line, { scale: 0.8, duration: 0.5 });
      }
    });
  });

  mm.add("(min-width: 1024px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        start: "top 60%",
        // end: "+=500",
        scrub: 1,
        pinSpacing: true,
        id:"largeBulgOUt",
        markers:true
      },
    });

    lines.forEach((line, index) => {
      tl.to(line, { scale: 1, duration: 0.5 });
      if (index > 0) {
        tl.to(lines[index - 1], {opacity:0.1, scale: 0.8, duration: 0.5 }, "<");
      }
      if (index === lines.length - 1) {
        tl.to(line, { scale: 0.8, duration: 0.5 });
      }
    });
  });

  return () => mm.revert(); // Proper cleanup
}, []);

  return (
    <>
          {/* 
    <section className="w-fit mx-auto text-center my-[200px]  text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl section2">
      <div className="line2 text-shadow-light dark:text-shadow-dark">
        Design Smarter
      </div>
      <div className="line2 text-shadow-light dark:text-shadow-dark">
        Launch Faster
      </div>
      <div className="line2 text-shadow-light dark:text-shadow-dark">
        Convert Better
      </div>
    </section>
       */}
       <section className="container-wrapper flex">

      <Rythem
          className=" hidden lg:inline w-fit mx-auto text-center my-[200px]  text-4xl sm:text-6xl md:text-7xl lg:text-8xl section2 "
          imgsWidth={125}
          markers={true}
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
              src="/home/dynamic.jpg" alt="Animated UI elements" />
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
         <Rythem
          className="lg:hidden  w-fit mx-auto text-center my-[200px]  text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl section2"
          imgsWidth={50}
          markers={false}
          positionToAnimation={80}
          >
          <Line className="flex mx-auto w-fit  line2">
            <Word>Design</Word>
            <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
              <Picture
              height={"100%"}
              
              src="/home/static.jpg"
                alt="Static webpage elements"
              />
            </Word>
            <Word>Smarter</Word>
          </Line>

          <Line className="flex mx-auto w-fit  line2">
            <Word>Launch</Word>
            <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
              <Picture 
              height={"100%"}
              
              src="/home/dynamic.jpg" alt="Animated UI elements" />
            </Word>
            <Word>Faster</Word>
          </Line>

          <Line className="flex mx-auto w-fit line2">
            <Word>Convert</Word>
            <Word className="rounded-md scale-[0.40] md:scale-[0.65]">
              <Picture
              height={"100%"}
              
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
