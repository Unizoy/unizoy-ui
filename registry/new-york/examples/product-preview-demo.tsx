"use client"
import ProductPreview from "@/registry/new-york/ui/product-preview"
import { useRef } from "react"
import { BsLightningCharge } from "react-icons/bs"

export default function ProductPreviewDemo() {
  const parentRef = useRef<HTMLDivElement>(null)
  const articleTop = [
    {
      title: { text: "Innovative Charging", className: "text-3xl font-bold" },
      description: {
        text: "Experience fast and efficient charging with USB-C compatibility, ensuring you never run out of power.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
    {
      title: { text: "Seamless Design", className: "text-3xl font-bold" },
      description: {
        text: "Crafted with precision, the sleek design complements any modern workspace or lifestyle.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
    {
      title: { text: "Enhanced Durability", className: "text-3xl font-bold" },
      description: {
        text: "Built to last, with robust materials that ensure long-term reliability and performance.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
  ]

  const articleBottom = [
    {
      title: { text: "Advanced Features", className: "text-red-900 text-3xl font-bold" },
      description: {
        text: "Equipped with cutting-edge technology to enhance your productivity and experience.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
    {
      title: { text: "User-Friendly Interface", className: "text-3xl font-bold" },
      description: {
        text: "Intuitive controls and seamless connectivity for an effortless user experience.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
    {
      title: { text: "Eco-Friendly", className: "text-3xl font-bold" },
      description: {
        text: "Manufactured with environmentally sustainable materials, contributing to a greener planet.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
  ]

  return (
    <div ref={parentRef} className="w-full h-screen overflow-scroll ">
      <div className="w-full h-40 bg-black border-b flex justify-center items-center border-white text-white px-3">
        Scroll to Explore Product Features
      </div>
      <ProductPreview
        productSrc="/examples/0001.webp"
        articleTop={articleTop}
        articleBottom={articleBottom}
        scroller={parentRef} // optional
        rotate={45}
        scaleFactor={0.08}
      />
    </div>
  )
}
