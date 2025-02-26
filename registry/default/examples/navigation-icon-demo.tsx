import React from "react"
import { NavigationIcon } from "@/registry/default/ui/navigation-icon"

export default function NavigationIconDemo() {

    const handleClick = () => {
        alert("Clicked on Nav-icon!");
    };

    const items = [
        {
            id: 1,
            name: "John Doe",
        },
        {
            id: 2,
            name: "Robert Johnson",
        },
        {
            id: 3,
            name: "Jane Smith",
        },
        {
            id: 4,
            name: "Emily Davis",
        },


    ];
    return (
        <div className="flex gap-2 justify-center items-center">
            {
                items.map((it) => (
                    <div key={it.id} className="" >
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
                        >{it.name}</NavigationIcon>
                    </div>
                ))
            }
        </div>
    )
}
