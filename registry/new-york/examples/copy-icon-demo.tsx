import React from "react"
import { CopyIcon } from "@/registry/new-york/ui/copy-icon"

export default function CopyIconDemo() {
  return (
    <CopyIcon
      parentClass=""
      iconClass="bg-black text-[#c2ff5d]"
      hiddenIconClass="bg-black text-white"
      startY={30} // Icons start lower
      enterY={0} // Move slightly up on hover
      endY={60} // Move further down when hiding
      duration={0.5} // Slower animation
      scaleFactor={1.1} // Larger scale on hover
    />
  )
}
