"use client";
import React from "react"
import { NavigationIcon } from "@/registry/new-york/ui/navigation-icon"

export default function NavigationIconDemo() {
  const handleClick = () => {
    
  }

  const items = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Robert",
    },
    {
      id: 3,
      name: "Jane",
    },
    {
      id: 4,
      name: "Emily",
    },
  ]
  return (
    <div className="flex gap-2 justify-center items-center">
      {items.map((it) => (
        <div key={it.id} className="">
          <NavigationIcon
            parentDivClass=""
            innerDivClass=""
            textClass="text-lg "
            borderClass="border-2 border-[#c2ff5d]"
            translateYUp={130}
            translateYDown={130}
            opposite={true}
            duration={0.6}
            stagger={0.1}
            onClick={handleClick}
          >
            {it.name}
          </NavigationIcon>
        </div>
      ))}
    </div>
  )
}
