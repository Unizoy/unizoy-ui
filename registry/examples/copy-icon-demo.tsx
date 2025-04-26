import React from "react"
import { CopyIcon } from "@/registry/ui/copy-icon"

export default function CopyIconDemo() {
  const handleCopyClick = () => {
    alert("Copy  icon clicked!")
  }

  const handleHtmlClick = () => {
    alert("HTML icon clicked!")
  }

  const handleWebflowClick = () => {
    alert("Webflow icon clicked!")
  }
  return (
    <CopyIcon
      iconClass="bg-black"
      hiddenIconClass=""
      startY={30} // Icons start lower
      enterY={0} // Move slightly up on hover
      endY={60} // Move further down when hiding
      duration={0.5} // Slower animation
      scaleFactor={1.1} // Larger scale on hover
      onClick={handleCopyClick} // Click handler for main icon (Copy)
      onHtmlClick={handleHtmlClick} // Click handler for HTML icon
      onWebflowClick={handleWebflowClick} // Click handler for Webflow icon
    />
  )
}
