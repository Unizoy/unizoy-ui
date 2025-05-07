import React from "react"
import { ScrollTextFlow } from "@/registry/ui/scroll-text-flow"

export default function ScrollTextFlowDemo() {
  const slideItems = [
    [
      { name: "UI/UX", style: "bg-[#CBBEDC] mt-2" },
      { name: "Success Designed Differently", style: "bg-[#F5CC53] ml-5" },
    ],
    [
      { name: "The First The Last", style: "bg-[#F49FC5] mt-2" },
      { name: "Insights", style: "bg-[#F5CC53] ml-5" },
      { name: "Development", style: "bg-[#F2FBE0] mt-10 ml-10" },
      { name: "Miami", style: "bg-[#CBBEDC] ml-5" },
    ],
    [
      { name: "Sexyness", style: "bg-[#F5CC53]" },
      { name: "Awwwards", style: "bg-[#CBBEDC] mt-10" },
      { name: "Development", style: "bg-[#F05E23]" },
      { name: "Team", style: "bg-[#34B550] ml-5" },
      { name: "Insights", style: "bg-[#F49FC5] ml-5" },
      { name: "Success Designed Differently", style: "bg-[#E97EFF] ml-14" },
    ],
    [
      { name: "Digital Experience", style: "bg-[#F2FBE0] mr-32" },
      { name: "Marketing", style: "bg-[#CBBEDC]" },
      { name: "Insights", style: "bg-[#F05E23] -mt-7" },
      { name: "Brand indentity", style: "bg-[#F49FC5] mx-14" },
      { name: "Creative Strategy", style: "bg-[#F2FBE0] ml-40" },
    ],
    [
      { name: "Sexyness", style: "bg-[#F5CC53]" },
      { name: "Digital Experience", style: "bg-[#E97EFF] mt-12 mr-20" },
      { name: "Dubai", style: "bg-[#34B550] mb-7" },
      { name: "Strong Message", style: "bg-[#F05E23] mx-16" },
      { name: "Design", style: "bg-[#CBBEDC] mt-12 mx-14" },
      { name: "Visual Language", style: "bg-[#F05E23] ml-20" },
      { name: "Development", style: "bg-[#F49FC5] mx-20" },
    ],
  ]
  return (
    <div className="w-full">
      <div className="w-full h-40 flex items-center justify-center  border-b border-black dark:border-white ">
        Scroll To animate
      </div>
      <ScrollTextFlow
        heading="TFTL©27 — Success Designed Differently."
        subheading="We Spread the Sexyness."
        slideGroups={slideItems}
        topGroupCount={2}
        wrapperClassName="bg-transparent text-black h-screen overflow-y-hidden"
        groupClassName="py-4 gap-10 flex-nowrap"
        textWrapperClassName="my-5 mb-8 w-full mx-auto"
        scrollTriggerStart="top top"
        scrollTriggerEnd="+=1500"
        useMarkers={false}
      />
    </div>
  )
}
