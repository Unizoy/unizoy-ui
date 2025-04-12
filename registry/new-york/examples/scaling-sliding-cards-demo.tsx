"use client";

import React, { useRef } from "react";
import { ScalingSlidingCards } from "@/registry/new-york/ui/scaling-sliding-cards";

export default function () {
    const parentRef = useRef<HTMLDivElement>(null);

    // Define the images and their styles with explicit width and height
    const items = [
        {
          link: "https://static.wixstatic.com/media/0d6674_6b2a6e4ca17a4fdfa3af22ac8cfb94b8~mv2.png/v1/fill/w_510,h_600,al_c,lg_1,q_85,enc_avif,quality_auto/Group%204721221.png",
          style: "w-[16rem] h-[20rem] sm:w-[20rem] sm:h-[24rem] lg:w-[24rem] lg:h-[28rem]",
        },
        {
          link: "https://static.wixstatic.com/media/0d6674_bf5ed4c16a044f6b86d67ea508319d85~mv2.png/v1/fill/w_1103,h_542,fp_0.43_0.17,q_90,enc_avif,quality_auto/Group%201000003094.png",
          style: "w-[36rem] h-[21rem] sm:w-[40rem] sm:h-[25rem] lg:w-[60rem] lg:h-[30rem]",
        },
        {
          link: "https://static.wixstatic.com/media/0d6674_6f7baf7f6bbc4842b8b5446838b73c5a~mv2.png/v1/fill/w_606,h_600,al_c,lg_1,q_90,enc_avif,quality_auto/icecream.png",
          style: "w-[21rem] h-[20rem] sm:w-[25rem] sm:h-[24rem] lg:w-[30rem] lg:h-[28rem]",
        },
        {
          link: "https://static.wixstatic.com/media/0d6674_523047e73ed04f5da4d01e2013ead27c~mv2.png/v1/fill/w_779,h_543,fp_0.49_0.52,q_90,enc_avif,quality_auto/beauty.png",
          style: "w-[28rem] h-[21rem] sm:w-[32rem] sm:h-[25rem] lg:w-[40rem] lg:h-[30rem]",
        },
        {
          link: "https://static.wixstatic.com/media/0d6674_db8c76159aef4e0fad0bf37dcad1b8ac~mv2.png/v1/fill/w_948,h_559,al_c,q_90,enc_avif,quality_auto/extream.png",
          style: "w-[28rem] h-[18rem] sm:w-[32rem] sm:h-[22rem] lg:w-[40rem] lg:h-[26rem] rounded-t-3xl",
        },
        {
          link: "https://static.wixstatic.com/media/0d6674_e3fb94834b8e407da0db6f9e352b3c01~mv2.png/v1/fill/w_444,h_600,al_c,lg_1,q_85,enc_avif,quality_auto/ticket.png",
          style: "w-[16rem] h-[24rem] sm:w-[20rem] sm:h-[28rem] lg:w-[24rem] lg:h-[32rem]",
        },
        {
          link: "https://static.wixstatic.com/media/0d6674_3a43219acb3a4bdc8b3b8709df9ce17c~mv2.png/v1/fill/w_784,h_543,al_c,q_90,enc_avif,quality_auto/Hotel.png",
          style: "w-[28rem] h-[18rem] sm:w-[32rem] sm:h-[22rem] lg:w-[40rem] lg:h-[27rem]",
        },
        {
          link: "https://static.wixstatic.com/media/0d6674_d87baca0478e4339b95bb78ccc06ff20~mv2.png/v1/fill/w_535,h_321,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MuseumNew.png",
          style: "w-[28rem] h-[18rem] sm:w-[32rem] sm:h-[22rem] lg:w-[40rem] lg:h-[25rem]",
        },
        {
          link: "https://static.wixstatic.com/media/0d6674_6c71e8e47f554350bfc9fc45230d3cd1~mv2.png/v1/fill/w_450,h_271,fp_0.70_0.34,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hero%203.png",
          style: "w-[28rem] h-[18rem] sm:w-[32rem] sm:h-[22rem] lg:w-[40rem] lg:h-[26rem]",
        },
      ];
  return (
    <div className="w-full h-[50vh] overflow-scroll" ref={parentRef}>
       <ScalingSlidingCards
          photos={items}
          fromXPercent={80}
          toXPercent={-40}
          triggerStart="top 5%"
          triggerEnd="+=200% top"
          scrubSpeed={1}
          gap={30}
          useMarkers={false}
          wrapperClassName="text-white h-[90vh]"
          scrollerRef={parentRef}
        />
    </div>
  )
}
