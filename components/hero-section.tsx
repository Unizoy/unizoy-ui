import { MdContentCopy } from "react-icons/md"
import { Button } from "./ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import AnimatedTooltipDemo from "@/registry/new-york/examples/animated-tooltip-demo"

export default function HeroSection() {
  return (
    <section className="my-[150px] text-2xl sm:text-4xl md:text-5xl lg:text-6xl items-center flex flex-col ">
      <h1 className=" w-fit mx-auto flex justify-center items-center font-semibold relative">
        Copy-Paste <MdContentCopy className="mx-3" /> Ui Elements
        {/* for all type of screens*/}
        <CursorLogo
          text="React"
          top={-70}
          left={10}
          color="#087EA4"
          className=" px-3 flex  rounded-md bg-[#087EA4] text-white dark:text-black scale-75 md:scale-100"
          positionOfCursor={{ top: 100, left: 100 }}
          Logo={
            <svg
              className="scale-[0.6] text-white dark:text-black"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6666 15.9998C10.6666 8.63584 13.0533 2.6665 16 2.6665C18.9466 2.6665 21.3333 8.63584 21.3333 15.9998C21.3333 23.3638 18.9466 29.3332 16 29.3332C13.0533 29.3332 10.6666 23.3638 10.6666 15.9998Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3 11.4934C19.756 7.81071 26.1986 6.89338 27.6893 9.44404C29.18 11.9947 25.156 17.048 18.7 20.7294C12.244 24.4107 5.80132 25.3294 4.31065 22.7774C2.81998 20.2267 6.84398 15.176 13.3 11.4934Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.7 11.4934C25.156 15.1734 29.18 20.2267 27.6893 22.7774C26.1986 25.3294 19.756 24.412 13.3 20.7294C6.84398 17.0467 2.81998 11.996 4.31065 9.44404C5.79998 6.89338 12.244 7.81071 18.7 11.4934Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18C15.4696 18 14.9609 17.7893 14.5858 17.4142C14.2107 17.0391 14 16.5304 14 16C14 15.4696 14.2107 14.9609 14.5858 14.5858C14.9609 14.2107 15.4696 14 16 14C16.5304 14 17.0391 14.2107 17.4142 14.5858C17.7893 14.9609 18 15.4696 18 16Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </h1>
      <h1 className="w-fit mx-auto font-semibold flex gap-3 relative">
        That Can Save Your{" "}
        <div className="hidden md:block">
          <AnimatedTooltipDemo />
        </div>
        {/* for above lg */}
        <CursorLogo
          text="Typescript"
          color="#3178C6"
          top={100}
          left={720}
          className="px-3  rounded-md bg-[#3178C6]  text-white dark:text-black lg:flex hidden"
          positionOfCursor={{ top: -150, left: -18 }}
          rotate={190}
          Logo={
            <svg
              width="24"
              height="24"
              className="scale-[0.6] text-white dark:text-black"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_81_72"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <path d="M0 0H24V24H0V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_81_72)">
                <path
                  d="M23.429 3.50909e-06H0.570001C0.495063 3.39377e-06 0.420861 0.01478 0.35164 0.0434876C0.282419 0.0721953 0.219539 0.114271 0.166596 0.167306C0.113654 0.220341 0.0716885 0.283296 0.0431022 0.352567C0.0145159 0.421838 -0.000130591 0.496066 8.78816e-07 0.571003V23.43C-0.000130854 23.505 0.0145486 23.5793 0.0431974 23.6487C0.0718461 23.718 0.113901 23.781 0.166949 23.8341C0.219998 23.8871 0.282996 23.9292 0.352333 23.9578C0.421669 23.9865 0.495979 24.0011 0.571001 24.001H23.43C23.505 24.0011 23.5793 23.9865 23.6487 23.9578C23.718 23.9292 23.781 23.8871 23.8341 23.8341C23.8871 23.781 23.9292 23.718 23.9578 23.6487C23.9865 23.5793 24.0011 23.505 24.001 23.43V0.570004C24.001 0.494981 23.9862 0.420697 23.9574 0.351411C23.9286 0.282125 23.8865 0.219199 23.8333 0.166244C23.7802 0.113288 23.7171 0.0713441 23.6477 0.0428168C23.5784 0.0142895 23.504 -0.000259726 23.429 3.50909e-06ZM14.286 12.826H11.429V21.714H9.143V12.826H6.286V10.857H14.286V12.826ZM14.926 21.206V18.831C14.926 18.831 16.224 19.809 17.781 19.809C19.338 19.809 19.278 18.791 19.278 18.651C19.278 17.174 14.866 17.174 14.866 13.9C14.866 9.448 21.295 11.205 21.295 11.205L21.215 13.321C21.215 13.321 20.137 12.602 18.919 12.602C17.701 12.602 17.262 13.182 17.262 13.8C17.262 15.397 21.714 15.238 21.714 18.452C21.714 23.402 14.926 21.207 14.926 21.207"
                  fill="currentColor"
                />
              </g>
            </svg>
          }
        />
        {/* for above md */}
        <CursorLogo
          text="Typescript"
          color="#3178C6"
          top={-120}
          left={500}
          className="px-3  rounded-md bg-[#3178C6]  text-white dark:text-black hidden md:flex lg:hidden"
          positionOfCursor={{ top: 100, left: -18 }}
          rotate={80}
          Logo={
            <svg
              width="24"
              height="24"
              className="scale-[0.6] text-white dark:text-black"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_81_72"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <path d="M0 0H24V24H0V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_81_72)">
                <path
                  d="M23.429 3.50909e-06H0.570001C0.495063 3.39377e-06 0.420861 0.01478 0.35164 0.0434876C0.282419 0.0721953 0.219539 0.114271 0.166596 0.167306C0.113654 0.220341 0.0716885 0.283296 0.0431022 0.352567C0.0145159 0.421838 -0.000130591 0.496066 8.78816e-07 0.571003V23.43C-0.000130854 23.505 0.0145486 23.5793 0.0431974 23.6487C0.0718461 23.718 0.113901 23.781 0.166949 23.8341C0.219998 23.8871 0.282996 23.9292 0.352333 23.9578C0.421669 23.9865 0.495979 24.0011 0.571001 24.001H23.43C23.505 24.0011 23.5793 23.9865 23.6487 23.9578C23.718 23.9292 23.781 23.8871 23.8341 23.8341C23.8871 23.781 23.9292 23.718 23.9578 23.6487C23.9865 23.5793 24.0011 23.505 24.001 23.43V0.570004C24.001 0.494981 23.9862 0.420697 23.9574 0.351411C23.9286 0.282125 23.8865 0.219199 23.8333 0.166244C23.7802 0.113288 23.7171 0.0713441 23.6477 0.0428168C23.5784 0.0142895 23.504 -0.000259726 23.429 3.50909e-06ZM14.286 12.826H11.429V21.714H9.143V12.826H6.286V10.857H14.286V12.826ZM14.926 21.206V18.831C14.926 18.831 16.224 19.809 17.781 19.809C19.338 19.809 19.278 18.791 19.278 18.651C19.278 17.174 14.866 17.174 14.866 13.9C14.866 9.448 21.295 11.205 21.295 11.205L21.215 13.321C21.215 13.321 20.137 12.602 18.919 12.602C17.701 12.602 17.262 13.182 17.262 13.8C17.262 15.397 21.714 15.238 21.714 18.452C21.714 23.402 14.926 21.207 14.926 21.207"
                  fill="currentColor"
                />
              </g>
            </svg>
          }
        />
        {/* for small screens */}
        <CursorLogo
          text="Typescript"
          color="#3178C6"
          top={-120}
          left={150}
          className="px-3  rounded-md bg-[#3178C6]  text-white dark:text-black flex md:hidden scale-75"
          positionOfCursor={{ top: 100, left: -18 }}
          rotate={80}
          Logo={
            <svg
              width="24"
              height="24"
              className="scale-[0.6] text-white dark:text-black"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_81_72"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <path d="M0 0H24V24H0V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_81_72)">
                <path
                  d="M23.429 3.50909e-06H0.570001C0.495063 3.39377e-06 0.420861 0.01478 0.35164 0.0434876C0.282419 0.0721953 0.219539 0.114271 0.166596 0.167306C0.113654 0.220341 0.0716885 0.283296 0.0431022 0.352567C0.0145159 0.421838 -0.000130591 0.496066 8.78816e-07 0.571003V23.43C-0.000130854 23.505 0.0145486 23.5793 0.0431974 23.6487C0.0718461 23.718 0.113901 23.781 0.166949 23.8341C0.219998 23.8871 0.282996 23.9292 0.352333 23.9578C0.421669 23.9865 0.495979 24.0011 0.571001 24.001H23.43C23.505 24.0011 23.5793 23.9865 23.6487 23.9578C23.718 23.9292 23.781 23.8871 23.8341 23.8341C23.8871 23.781 23.9292 23.718 23.9578 23.6487C23.9865 23.5793 24.0011 23.505 24.001 23.43V0.570004C24.001 0.494981 23.9862 0.420697 23.9574 0.351411C23.9286 0.282125 23.8865 0.219199 23.8333 0.166244C23.7802 0.113288 23.7171 0.0713441 23.6477 0.0428168C23.5784 0.0142895 23.504 -0.000259726 23.429 3.50909e-06ZM14.286 12.826H11.429V21.714H9.143V12.826H6.286V10.857H14.286V12.826ZM14.926 21.206V18.831C14.926 18.831 16.224 19.809 17.781 19.809C19.338 19.809 19.278 18.791 19.278 18.651C19.278 17.174 14.866 17.174 14.866 13.9C14.866 9.448 21.295 11.205 21.295 11.205L21.215 13.321C21.215 13.321 20.137 12.602 18.919 12.602C17.701 12.602 17.262 13.182 17.262 13.8C17.262 15.397 21.714 15.238 21.714 18.452C21.714 23.402 14.926 21.207 14.926 21.207"
                  fill="currentColor"
                />
              </g>
            </svg>
          }
        />
      </h1>
      <h1 className="w-fit mx-auto font-semibold relative">
        Development Time
        <CursorLogo
          text="Next.js"
          color="#0A0A0A"
          className="md:flex hidden dark:bg-white bg-black border text-white  dark:text-black"
          top={30}
          left={-150}
          rotate={-100}
          positionOfCursor={{ left: 100, top: -100 }}
          Logo={
            <svg
              width="28"
              className="scale-75"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.552 21.5332L11.68 8.6665H8.66663V19.3332H11.3333V12.5945L19.4493 23.1718C17.1175 24.5592 14.3447 25.0058 11.6952 24.4207C9.04572 23.8357 6.71878 22.2629 5.18806 20.0226C3.65735 17.7824 3.03791 15.0429 3.45584 12.362C3.87377 9.68109 5.29766 7.2602 7.43765 5.59215C9.57765 3.92409 12.2729 3.13425 14.9747 3.38341C17.6766 3.63257 20.1819 4.902 21.9807 6.9333C23.7796 8.96459 24.7367 11.6051 24.6573 14.3172C24.5779 17.0293 23.4679 19.6093 21.5533 21.5318M14 27.3332C21.364 27.3332 27.3333 21.3638 27.3333 13.9998C27.3333 6.63584 21.364 0.666504 14 0.666504C6.63596 0.666504 0.666626 6.63584 0.666626 13.9998C0.666626 21.3638 6.63596 27.3332 14 27.3332ZM16.6666 13.9998V8.6665H19.3333V13.9998H16.6666Z"
                fill="currentColor"
              />
            </svg>
          }
        />
      </h1>
      <p className=" text-xs md:text-sm text-center  text-foreground/80 md:w-1/2 mx-auto mt-5 font-semibold px-10 md:px-0">
        Discover and reuse beautiful, responsive elements across frameworks.
        Speed up your workflow with tested, production-ready code snippets.
      </p>
      <div className="relative">
        <Button asChild size="lg" className="mt-10 relative">
          <Link href="/docs/components">Get Started</Link>
        </Button>
        {/* for smaller screens */}
        <CursorLogo
          text="Next.js"
          color="#0A0A0A"
          className="md:hidden flex dark:bg-white bg-black border text-white  dark:text-black scale-75"
          top={120}
          left={-70}
          rotate={-100}
          positionOfCursor={{ left: 100, top: -100 }}
          Logo={
            <svg
              width="28"
              className="scale-75"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.552 21.5332L11.68 8.6665H8.66663V19.3332H11.3333V12.5945L19.4493 23.1718C17.1175 24.5592 14.3447 25.0058 11.6952 24.4207C9.04572 23.8357 6.71878 22.2629 5.18806 20.0226C3.65735 17.7824 3.03791 15.0429 3.45584 12.362C3.87377 9.68109 5.29766 7.2602 7.43765 5.59215C9.57765 3.92409 12.2729 3.13425 14.9747 3.38341C17.6766 3.63257 20.1819 4.902 21.9807 6.9333C23.7796 8.96459 24.7367 11.6051 24.6573 14.3172C24.5779 17.0293 23.4679 19.6093 21.5533 21.5318M14 27.3332C21.364 27.3332 27.3333 21.3638 27.3333 13.9998C27.3333 6.63584 21.364 0.666504 14 0.666504C6.63596 0.666504 0.666626 6.63584 0.666626 13.9998C0.666626 21.3638 6.63596 27.3332 14 27.3332ZM16.6666 13.9998V8.6665H19.3333V13.9998H16.6666Z"
                fill="currentColor"
              />
            </svg>
          }
        />
      </div>
    </section>
  )
}
interface CursorLogoProps {
  text: string
  Logo: React.ReactNode
  top: number
  left: number
  className?: string
  color: string
  positionOfCursor?: { top: number; left: number }
  rotate?: number
}
function CursorLogo({
  text,
  Logo,
  top,
  left,
  className,
  color,
  rotate = 0,
  positionOfCursor = { top: -10, left: -10 },
}: CursorLogoProps) {
  return (
    <div className="absolute" style={{ top: `${top}px`, left: `${left}px` }}>
      <div
        className={cn(
          className,
          "relative  gap-1 justify-center items-center px-3 rounded-md py-1 "
        )}
        // style={{ backgroundColor: color }}
      >
        {Logo}
        <span className="text-base font-semibold">{text}</span>
        <svg
          className={cn(
            `absolute scale-75`,
            color == "#0A0A0A" ? "fill-black dark:fill-white" : ``
          )}
          style={{
            top: `${positionOfCursor.top}%`,
            left: `${positionOfCursor.left}%`,
            rotate: `${rotate}deg`,
            fill: color !== "#0A0A0A" ? color : undefined,
          }}
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.1767 34.6467C37.9016 36.3158 36.2019 38.0071 34.5364 37.2739L2.04945 22.9723C0.332111 22.2162 0.507403 19.7246 2.31368 19.2165L14.1293 15.8927C14.7931 15.706 15.3138 15.1905 15.5073 14.5286L19.1587 2.03926C19.6838 0.24327 22.1675 0.0874762 22.9129 1.80377L37.1767 34.6467Z"
            fill="inherit"
          />
        </svg>
      </div>
    </div>
  )
}
