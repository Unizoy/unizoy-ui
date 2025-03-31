"use client"
import React,{useRef} from "react";
import {ScrollingVideoCards} from "@/registry/new-york/ui/scrolling-video-cards";
import {Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

export default function () {
    const parentRef = useRef<HTMLDivElement>(null)
    const items = [
      {
        title: "We partnered with",
        description: "Mariah Carey to create content with Kay Jewelers",
        tag: "#jewelry",
        link: "https://servd-rhythm-influence.b-cdn.net/staging/Mariah-Short_Full.mp4",
      },
      {
        title: "We partnered with",
        description: "Kalen Allen to create content for Starbucks",
        tag: "#foodandbev",
        link: "https://servd-rhythm-influence.b-cdn.net/staging/Kalen-Allen-Oleato.mp4",
      },
      {
        title: "We partnered with",
        description: "HappyKelli to create content for Outshine Snacks",
        tag: "#foodandbev",
        link: "https://servd-rhythm-influence.b-cdn.net/staging/HappyKelli.mp4",
      },
      {
        title: "We partnered with",
        description: "Kat Stickler to create content for Lincoln",
        tag: "#automotive",
        link: "https://servd-rhythm-influence.b-cdn.net/staging/Kat_Final.mp4",
      },
      {
        title: "We partnered with",
        description: "NBA Star Brandon Beloti to create content for Wendy's",
        tag: "#sports",
        link: "https://servd-rhythm-influence.b-cdn.net/staging/NBA_Go-Biggie_1.mp4",
      },
      {
        title: "We partnered with",
        description: "David Quarles IV to create content for Pennington",
        tag: "#lifestyle",
        link: "https://servd-rhythm-influence.b-cdn.net/staging/David-Q-IV-Pennington.mp4",
      },
      {
        title: "We partnered with",
        description: "Devon Rodriguez to create content for V8",
        tag: "#foodandbev",
        link: "https://servd-rhythm-influence.b-cdn.net/staging/DevonRodriguez_V8_1-1.mp4",
      },
    ];
  return (
    <div className="w-full h-[90vh] overflow-scroll" ref={parentRef}>
       <ScrollingVideoCards
        videoItems={items}
        startXPercentage={75}
        endXPercentage={-40}
        scrollTriggerStart="top top"
        scrollTriggerEnd="bottom top"
        scrubSpeed={0.5}
        gap={20}
        useMarkers={false}
        descriptionTextClassName={`${dancingScript.className} my-0.5`}
        videoCardContainerClassName=""
        containerClassName="text-white h-[90vh]"
        scrollerRef={parentRef}
      />
    </div>
  )
}
