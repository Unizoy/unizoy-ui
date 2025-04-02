"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

 const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const menuItemRef = useRef(null);
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (active === item && dropdownRef.current) {
      // Reset styles for animation
      gsap.set(dropdownRef.current, { opacity: 0, scale: 0.85, y: 10 });
      
      // Animate dropdown
      gsap.to(dropdownRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }

    // for hover delay , removing this can cause abrution in the animation 
    if (menuItemRef.current) {
      gsap.to(menuItemRef.current, {
        duration: 0.3,
        ease: "power1.out",
      });
    }
  }, [active, item]);
  const handleMouseEnter=useCallback(()=>setActive(item),[setActive,item]);
  return (
    <div onMouseEnter={handleMouseEnter} className="relative">
      <p
        ref={menuItemRef}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </p>
      {active !== null && active === item && (
        <div 
          ref={containerRef}
          className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
        >
          <div
            ref={dropdownRef}
            className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
          >
            <div className="w-max h-full p-4">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

 const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
   const handleMouseLeave=useCallback(()=>{setActive(null)},[setActive])
  return (
    <nav
      onMouseLeave={handleMouseLeave} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

 const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

 const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};
export {Menu,MenuItem,ProductItem,HoveredLink}