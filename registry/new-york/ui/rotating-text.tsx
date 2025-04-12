"use client"
import { RefObject, useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "../lib/utils"
gsap.registerPlugin(ScrollTrigger)
interface RotatingTextProps {
  text: { data: string; className?: string }[]
  scrollerRef?: RefObject<HTMLElement>
  start?: string | number | ScrollTrigger.StartEndFunc
  end?: string | number | ScrollTrigger.StartEndFunc
  scrub?: number | boolean
  markers?: boolean | ScrollTrigger.MarkersVars
  className?: string
}
const RotatingText = ({
  text,
  scrollerRef,
  start = "top top",
  end = "+=300",
  scrub = 1,
  markers = false,
  className,
}: RotatingTextProps) => {
  const mainRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement[]>([])
  const instanceIdRef = useRef<string>(
    `rotating-text-${Math.random().toString(36).substring(2, 11)}`
  )
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    console.log("from useEffext");
    
    if (scrollerRef?.current) {
      setForceUpdate(!forceUpdate)
    }
  }, [scrollerRef?.current])
  useGSAP(() => {
    console.log("from use Gsap");
    
    if (!mainRef.current && !textRef.current) return

    // Kill only this component's ScrollTrigger instance if it exists
    const existingTrigger = ScrollTrigger.getById(instanceIdRef.current)
    if (existingTrigger) {
      existingTrigger.kill()
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start,
        end,
        scrub,
        pin: true,
        scroller: scrollerRef?.current ?? window,
        markers,
        id: instanceIdRef.current,
      },
    })
    tl.set(textRef.current, {
      rotationY: (index) =>
        index % 2 === 0
          ? gsap.utils.random(150, 180, 1)
          : gsap.utils.random(-180, -150, 1),
      scale: 0,
      transformOrigin: (index) => (index % 2 === 0 ? "bottom" : "top"),
    })

    tl.to(textRef.current, {
      scale: 1,
      rotationY: 0,
      ease: "none",
      stagger: {
        amount: 0.5,
        from: "random",
      },
    })

    return () => {
      // Cleanup ScrollTrigger instances when component unmounts

      const triggerToKill = ScrollTrigger.getById(instanceIdRef.current)
      if (triggerToKill) {
        triggerToKill.kill()
      }
    }
  }, [text, start, end, scrub, markers, forceUpdate])

  const charOffsets = text.reduce<number[]>((acc, item, i) => {
    const prev = acc[i - 1] ?? 0
    const newCount = item.data.length + prev
    return [...acc, newCount]
  }, [])

  return (
    <div
      ref={mainRef}
      className={cn(
        " h-screen text-9xl",
        className,
        " flex justify-center items-center  "
      )}
      style={{ perspective: "800px" }}
    >
      <div>
        {text.map((t, rowIndex) => (
          <div key={rowIndex} className={cn(t.className, "text-center")}>
            {t.data.split("").map((char, charIndex) => {
              const globalIndex =
                charIndex + (rowIndex > 0 ? charOffsets[rowIndex - 1] : 0)
              return (
                <span
                  key={charIndex}
                  style={{
                    display: "inline-block",
                    transformStyle: "preserve-3d",
                  }}
                  ref={(el) => {
                    if (el) textRef.current[globalIndex] = el
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RotatingText
// "use client"

// import { RefObject, useEffect, useRef, useState } from "react"
// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"
// import { useGSAP } from "@gsap/react"
// import { cn } from "../lib/utils"

// gsap.registerPlugin(ScrollTrigger)

// interface RotatingTextProps {
//   text: { data: string; className?: string }[]
//   scrollerRef?: RefObject<HTMLElement>
//   start?: string | number | ScrollTrigger.StartEndFunc
//   end?: string | number | ScrollTrigger.StartEndFunc
//   scrub?: number | boolean
//   markers?: boolean | ScrollTrigger.MarkersVars
//   className?: string
// }

// const RotatingText = ({
//   text,
//   scrollerRef,
//   start = "top top",
//   end = "+=300",
//   scrub = 1,
//   markers = false,
//   className,
// }: RotatingTextProps) => {
//   const mainRef = useRef<HTMLDivElement>(null)
//   const textRef = useRef<HTMLSpanElement[]>([])
//   const scrollTriggerRef = useRef<ScrollTrigger | null>(null)
//   const timelineRef = useRef<gsap.core.Timeline | null>(null)

//   // This ensures we recreate the animation whenever the scroller changes
//   const [scrollerReady, setScrollerReady] = useState(false)

//   // Monitor when the scrollerRef is ready (either not provided or actual element available)
//   useEffect(() => {
//     if (!scrollerRef || scrollerRef.current) {
//       console.log("Scroller is ready:", scrollerRef?.current || "window");
//       setScrollerReady(true);
//     } else {
//       setScrollerReady(false);
//     }
//   }, [scrollerRef?.current]);

//   // Clean up previous animation before creating a new one
//   useEffect(() => {
//     return () => {
//       // Clean up when component unmounts
//       if (scrollTriggerRef.current) {
//         console.log("Killing previous ScrollTrigger instance");
//         scrollTriggerRef.current.kill();
//         scrollTriggerRef.current = null;
//       }

//       if (timelineRef.current) {
//         timelineRef.current.kill();
//         timelineRef.current = null;
//       }
//     };
//   }, []);

//   // Create the animation when everything is ready
//   useEffect(() => {
//     if (!mainRef.current || textRef.current.length === 0 || !scrollerReady) return;

//     // Clean up previous instance if it exists
//     if (scrollTriggerRef.current) {
//       console.log("Killing previous ScrollTrigger instance");
//       scrollTriggerRef.current.kill();
//       scrollTriggerRef.current = null;
//     }

//     if (timelineRef.current) {
//       timelineRef.current.kill();
//       timelineRef.current = null;
//     }

//     console.log("Creating new ScrollTrigger with scroller:", scrollerRef?.current || "window");

//     // Create a new timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: mainRef.current,
//         start,
//         end,
//         scrub,
//         pin: true,
//         scroller: scrollerRef?.current || undefined, // undefined defaults to window
//         markers,
//         id: "rotatingTextTrigger", // Add an ID for easier debugging
//       },
//     });

//     // Store the ScrollTrigger instance for later cleanup
//     scrollTriggerRef.current = ScrollTrigger.getById("rotatingTextTrigger") as ScrollTrigger;
//     timelineRef.current = tl;

//     // Set up the animation
//     tl.set(textRef.current, {
//       rotationY: (index) =>
//         index % 2 === 0
//           ? gsap.utils.random(150, 180, 1)
//           : gsap.utils.random(-180, -150, 1),
//       scale: 0,
//       transformOrigin: (index) => (index % 2 === 0 ? "bottom" : "top"),
//     });

//     tl.to(textRef.current, {
//       scale: 1,
//       rotationY: 0,
//       ease: "none",
//       stagger: {
//         amount: 0.5,
//         from: "random",
//       },
//     });

//   }, [text, start, end, scrub, markers, scrollerReady]);

//   // Reset textRef when text content changes
//   useEffect(() => {
//     textRef.current = [];
//   }, [text]);

//   const charOffsets = text.reduce<number[]>((acc, item, i) => {
//     const prev = acc[i - 1] ?? 0
//     const newCount = item.data.length + prev
//     return [...acc, newCount]
//   }, [])

//   return (
//     <div
//       ref={mainRef}
//       className={cn(
//         "h-screen text-9xl",
//         className,
//         "flex justify-center items-center"
//       )}
//       style={{ perspective: "800px" }}
//     >
//       <div>
//         {text.map((t, rowIndex) => (
//           <div key={rowIndex} className={cn(t.className, "text-center")}>
//             {t.data.split("").map((char, charIndex) => {
//               const globalIndex =
//                 charIndex + (rowIndex > 0 ? charOffsets[rowIndex - 1] : 0)
//               return (
//                 <span
//                   key={charIndex}
//                   style={{
//                     display: "inline-block",
//                     transformStyle: "preserve-3d",
//                   }}
//                   ref={(el) => {
//                     if (el) textRef.current[globalIndex] = el
//                   }}
//                 >
//                   {char === " " ? "\u00A0" : char}
//                 </span>
//               )
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default RotatingText
// "use client"

// import { RefObject, useEffect, useRef, useState } from "react"
// import gsap from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"
// import { useGSAP } from "@gsap/react"
// import { cn } from "../lib/utils"

// gsap.registerPlugin(ScrollTrigger)

// interface RotatingTextProps {
//   text: { data: string; className?: string }[]
//   scrollerRef?: RefObject<HTMLElement>
//   start?: string | number | ScrollTrigger.StartEndFunc
//   end?: string | number | ScrollTrigger.StartEndFunc
//   scrub?: number | boolean
//   markers?: boolean | ScrollTrigger.MarkersVars
//   className?: string
// }

// const RotatingText = ({
//   text,
//   scrollerRef,
//   start = "top top",
//   end = "+=300",
//   scrub = 1,
//   markers = false,
//   className,
// }: RotatingTextProps) => {
//   const mainRef = useRef<HTMLDivElement>(null)
//   const textRef = useRef<HTMLSpanElement[]>([])
//   const [scrollerReady, setScrollerReady] = useState(false)

//   // Monitor when the scrollerRef is ready
//   useEffect(() => {
//     if (!scrollerRef || scrollerRef.current) {
//       console.log("Scroller is ready:", scrollerRef?.current || "window");
//       setScrollerReady(true);
//     } else {
//       setScrollerReady(false);
//     }
//   }, [scrollerRef?.current]);

//   // Reset textRef when text content changes
//   useEffect(() => {
//     textRef.current = [];
//   }, [text]);

//   // Use the useGSAP hook for animation
//   useGSAP(() => {
//     if (!mainRef.current || textRef.current.length === 0) return;

//     // Clean up any previous ScrollTrigger instances related to this component
//     ScrollTrigger.getAll().forEach(st => {
//       if (st.vars.trigger === mainRef.current) {
//         console.log("Killing existing ScrollTrigger");
//         st.kill();
//       }
//     });

//     console.log("Creating new ScrollTrigger with scroller:", scrollerRef?.current || "window");

//     // Create a new timeline with ScrollTrigger
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: mainRef.current,
//         start,
//         end,
//         scrub,
//         pin: true,
//         scroller: scrollerRef?.current || undefined, // undefined defaults to window
//         markers,
//         id: "rotatingTextTrigger",
//       },
//     });

//     // Set up the animation
//     tl.set(textRef.current, {
//       rotationY: (index) =>
//         index % 2 === 0
//           ? gsap.utils.random(150, 180, 1)
//           : gsap.utils.random(-180, -150, 1),
//       scale: 0,
//       transformOrigin: (index) => (index % 2 === 0 ? "bottom" : "top"),
//     });

//     tl.to(textRef.current, {
//       scale: 1,
//       rotationY: 0,
//       ease: "none",
//       stagger: {
//         amount: 0.5,
//         from: "random",
//       },
//     });

//     // Return cleanup function
//     return () => {
//       console.log("Cleaning up animations");
//       ScrollTrigger.getAll().forEach(st => {
//         if (st.vars.trigger === mainRef.current) {
//           st.kill();
//         }
//       });
//     };
//   }, [text, start, end, scrub, markers, scrollerReady]); // Include scrollerReady in dependencies

//   const charOffsets = text.reduce<number[]>((acc, item, i) => {
//     const prev = acc[i - 1] ?? 0
//     const newCount = item.data.length + prev
//     return [...acc, newCount]
//   }, [])

//   return (
//     <div
//       ref={mainRef}
//       className={cn(
//         "h-screen text-9xl",
//         className,
//         "flex justify-center items-center"
//       )}
//       style={{ perspective: "800px" }}
//     >
//       <div>
//         {text.map((t, rowIndex) => (
//           <div key={rowIndex} className={cn(t.className, "text-center")}>
//             {t.data.split("").map((char, charIndex) => {
//               const globalIndex =
//                 charIndex + (rowIndex > 0 ? charOffsets[rowIndex - 1] : 0)
//               return (
//                 <span
//                   key={charIndex}
//                   style={{
//                     display: "inline-block",
//                     transformStyle: "preserve-3d",
//                   }}
//                   ref={(el) => {
//                     if (el) textRef.current[globalIndex] = el
//                   }}
//                 >
//                   {char === " " ? "\u00A0" : char}
//                 </span>
//               )
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default RotatingText
