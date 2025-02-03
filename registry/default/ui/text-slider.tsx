import React, { useRef, useLayoutEffect, forwardRef } from "react";
import { cn, mergeRefs } from "../lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "up" | "down";
  duration?: number;
  ease?: string;
  stagger?: number;
  start?: string;
  end?: string;
}

const TextSlider = forwardRef<HTMLDivElement, TextSliderProps>(
  (
    {
      className,
      children,
      direction = "up",
      duration = 1,
      ease = "power2.out",
      stagger = 0.5,
      start = "35",
      end = "0",
      ...props
    },
    ref
  ) => {
    const localRef = useRef<HTMLDivElement>(null);
    const childrenHeights = useRef<number[]>([]);

    // Calculate heights of direct children
    useLayoutEffect(() => {
      if (!localRef.current?.children) return;

      childrenHeights.current = Array.from(localRef.current.children).map(
        (child) => child.getBoundingClientRect().height
      );
    }, [children]);

    useGSAP(
      () => {
        const elements = localRef.current?.children;
        if (!elements) return;
        console.log("running animations");

        // Animate elements
        gsap.from(elements, {
          y: (c) => {
            return direction === "down"
              ? -childrenHeights.current[c]
              : childrenHeights.current[c];
          },
          opacity: 0,
          duration: duration,
          ease: ease,
          stagger: stagger,

          scrollTrigger: {
            trigger: elements,
            start,
            end,
            toggleActions: "play none none reset",
          },
        });
      },
      {
        scope: localRef,
        dependencies: [direction, duration, ease, stagger, start, end],
      }
    );

    return (
      <div
        ref={mergeRefs(ref, localRef)}
        className={cn("overflow-hidden  ", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);



TextSlider.displayName="TextSlider"
export {TextSlider };
