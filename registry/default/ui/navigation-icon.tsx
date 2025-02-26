"use client";
import React, { ReactNode, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface NavigationIconProps {
    children: ReactNode;
    parentDivClass: string;
    innerDivClass: string;
    textClass: string;
    translateYUp?: number;
    translateYDown?: number;
    opposite?: boolean
    duration?: number,
    stagger?: number,
    borderClass: string,
    onClick?: () => void
}

const NavigationIcon: React.FC<NavigationIconProps> = ({
    children,
    innerDivClass,
    textClass,
    parentDivClass,
    translateYUp = 130,
    translateYDown = 130,
    opposite = false,
    duration = 0.5,
    stagger = 0.1,
    borderClass,
    onClick

}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [clicked, setClick] = useState<boolean>(false);

    const handleMouseEnter = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const container = containerRef.current.getBoundingClientRect();
            const isEnteringFromTop = e.clientY < container.top + container.height / 2;
            const spans = containerRef.current.querySelectorAll("span");
            const upward = opposite ? -1 : 1;
            gsap.to(spans, {
                y: isEnteringFromTop
                    ? `${translateYUp * upward}%`
                    : `${translateYDown * -1 * upward}%`, duration,
                stagger,
            });
        }
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const spans = containerRef.current.querySelectorAll("span");
            gsap.to(spans, {
                y: "0%", // Reset to the original position
                duration,
                stagger,
            });
        }
    };

    return (
        <div
            className={cn(` flex min-h-[100px] w-fit items-center justify-center overflow-hidden`, parentDivClass)}
        >
            <div
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {setClick(true);onClick?.()}}
                className={cn(`flex flex-col gap-2 h-10 items-center text-center pb-1 justify-center px-2 overflow-y-hidden rounded-full cursor-pointer ${clicked && borderClass}`, innerDivClass)}
            >
                <span className={textClass}>{children}</span>
                <span className={textClass}>{children}</span> {/* Middle Text */}
                <span className={textClass}>{children}</span>
            </div>
        </div>
    );
};

export  {NavigationIcon};
