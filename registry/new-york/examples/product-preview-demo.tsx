import ProductPreview from "@/registry/new-york/ui/product-preview"
import { BsLightningCharge } from "react-icons/bs"

export default function ProductPreviewDemo() {
  const articleTop = [
    {
      title: { text: "Innovative Charging", className: "text-xl md:text-2xl lg:text-3xl font-bold" },
      description: {
        text: "Experience fast and efficient charging with USB-C compatibility, ensuring you never run out of power.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
    {
      title: { text: "Seamless Design", className: "text-xl md:text-2xl lg:text-3xl font-bold" },
      description: {
        text: "Crafted with precision, the sleek design complements any modern workspace or lifestyle.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
    {
      title: { text: "Enhanced Durability", className: "text-xl md:text-2xl lg:text-3xl font-bold" },
      description: {
        text: "Built to last, with robust materials that ensure long-term reliability and performance.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
  ]

  const articleBottom = [
    {
      title: {
        text: "Advanced Features",
        className: "text-red-900 text-xl md:text-2xl lg:text-3xl font-bold",
      },
      description: {
        text: "Equipped with cutting-edge technology to enhance your productivity and experience.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
    {
      title: {
        text: "User-Friendly Interface",
        className: "text-xl md:text-2xl lg:text-3xl font-bold",
      },
      description: {
        text: "Intuitive controls and seamless connectivity for an effortless user experience.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
    {
      title: { text: "Eco-Friendly", className: "text-xl md:text-2xl lg:text-3xl font-bold" },
      description: {
        text: "Manufactured with environmentally sustainable materials, contributing to a greener planet.",
      },
      icon: <BsLightningCharge className="scale-[2]" />,
    },
  ]

  return (
    <div className="w-full  ">
      <div className="w-full h-40 bg-black border-b flex justify-center items-center border-white text-white px-3">
        Scroll to Explore Product Features
      </div>
      <ProductPreview
        productSrc="/examples/0001.webp"
        articleTop={articleTop}
        articleBottom={articleBottom}
        start="top 10%"
        rotate={45}
        scaleFactor={0.08}
      />
    </div>
  )
}
