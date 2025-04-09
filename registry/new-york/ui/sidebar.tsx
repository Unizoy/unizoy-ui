"use client";
import React, { useEffect,useRef, useState, forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
    IconX  ,
    IconMenu2
} from "@tabler/icons-react";
import UnizoyLogo from "@/public/RevealText/UnizoyLogo.png"
const SidebarDemo = ()=> {
    const links = [
        { label: "Dashboard", href: "#", icon: <IconBrandTabler className="h-5 w-5" /> },
        { label: "Profile", href: "#", icon: <IconUserBolt className="h-5 w-5" /> },
        { label: "Settings", href: "#", icon: <IconSettings className="h-5 w-5" /> },
        { label: "Logout", href: "#", icon: <IconArrowLeft className="h-5 w-5" /> },
    ];


    const [open, setOpen] = useState(false);
    const sidebarRef = useRef(null);
    const [modal,setModal]=useState(false);

    return (
        <div
        >
            <Sidebar open={open} setOpen={setOpen} ref={sidebarRef} modal={modal} setModal={setModal}>
                <SidebarBody className="justify-between h-full ">
                    <div className=" relative flex flex-1 flex-col  overflow-x-hidden overflow-y-auto">
                        <div className="h-14">
                            {open ? <Logo /> : <LogoIcon />}
                        </div>


                        <div className="mt-8 flex flex-col gap-5">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} open={open} />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-start items-center ">
                        <a href={"#"} className="flex items-center gap-3 rounded-md h-8 text-black transition">
                            <Image
                                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                                className="size-8 rounded-full aspect-square"
                                width={50}
                                height={50}
                                alt="Avatar"
                            />
                            <span  className={`text-neutral-700 opacity-0  ${open && "duration-300 opacity-100"}`}>{open && "Bhavesh Patel"}</span>
                        </a>
                    </div>
                    <div onClick={()=>setModal(!modal)} className="sm:hidden inline absolute cursor-pointer text-black  top-5 right-5" ><IconX/></div>
                </SidebarBody>
            </Sidebar>
            <div onClick={()=>setModal(!modal)} className="w-full h-14 p-5 px-7 flex justify-end bg-neutral-100 cursor-pointer" >
                <IconMenu2 />
            </div>
            
        </div>
    );
}
export {SidebarDemo}
export const Logo = () => (
    <Link href="#" className="flex items-center gap-2 text-black h-14">
        <LogoIcon />
        <span className="font-medium text-xl">Unizoy</span>
    </Link>
);

export const LogoIcon = () => (
    <Link href="#" className="flex items-center h-14">
        <Image
        src={UnizoyLogo.src}
        className="h-5 w-5"
        width={20}
        height={20}
        alt="Logo"
        /> </Link>
);

interface SidebarProps {
    open?: boolean;
    modal: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(function Sidebar(
    {setOpen,modal, setModal, children },
    ref
) {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [isMobile,setMobile] =useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setOpen(true);
                setMobile(true)
                setModal(false)
            }
            else{
                setOpen(false);
                setMobile(false)
                
            }
        };

        handleResize(); // Run on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setOpen]);

    const handleMouseEnter = () => {
        if (window.innerWidth < 640 || !sidebarRef.current) return; 

        // Kill previous animations to prevent conflicts
        gsap.killTweensOf(sidebarRef.current);

        gsap.to(sidebarRef.current, {

            onComplete: () => setOpen(true),
        });
    };

    const handleMouseLeave = () => {
        if (window.innerWidth < 640 || !sidebarRef.current) return; 

        gsap.killTweensOf(sidebarRef.current);

        gsap.to(sidebarRef.current, {
            onStart: () => setOpen(false),
        });
    };
    

    return (
        <aside
            ref={sidebarRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                " h-full translate-x-0  sm:w-[5.5rem] sm:hover:w-[15rem] bg-neutral-100 shadow-lg text-neutral-700 overflow-hidden transition-all",

                isMobile && modal ? "w-screen h-screen -translate-x-[100%] absolute  z-50 duration-500":"duration-500 translate-x-0  "
                
            )}
            
        >
            {children}
        </aside>
    );
});


interface SidebarBodyProps {
    children: React.ReactNode;
    className?: string;
}

export const SidebarBody: React.FC<SidebarBodyProps> = ({ children, className }) => {
    return <div className={cn("flex flex-col py-5 px-2 pl-6", className)}>{children}</div>;
};

interface SidebarLinkProps {
    open: boolean;
    link: {
        href: string;
        icon: React.ReactNode;
        label: string;
    };
}


export const SidebarLink: React.FC<SidebarLinkProps> = ({ link, open }) => {
    const textRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const element = textRef.current;
        if (!element) return;

        // Kill any previous animations to prevent conflicts
        gsap.killTweensOf(element);

        gsap.fromTo(
            element,
            { opacity: 0, x: -10 },
            {
                opacity: open ? 1 : 0,
                x: open ? 0 : -10,
                duration: open ? 0.3 : 0.2, // Fade-in: 0.3s | Fade-out: 0.2s
                ease: "power2.out",
                overwrite: "auto", // Prevents animation conflicts
            }
        );

        // Hover animations
        const handleMouseEnter = () => {
            gsap.killTweensOf(element); // Kill existing animations
            gsap.to(element, { x: 5, duration: 0.3, ease: "power2.out", overwrite: "auto" });
        };

        const handleMouseLeave = () => {
            gsap.killTweensOf(element);
            gsap.to(element, { x: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
        };

        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mouseenter", handleMouseEnter);
            element.removeEventListener("mouseleave", handleMouseLeave);
            gsap.killTweensOf(element); // Clean up animations when unmounting
        };
    }, [open]);

    return (
        <a href={link.href} className="flex items-center gap-3 rounded-md h-10 text-black transition">
            <span>{link.icon}</span>
            <span ref={textRef} className="text-neutral-700 opacity-0">{link.label}</span>
        </a>
    );
};
