"use client"
import { cva, VariantProps } from "class-variance-authority"
import {
  ButtonHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react"
import { cn } from "../lib/utils"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowRight } from "lucide-react"

const buttonVariants = cva(
  `flex justify-center items-center relative z-10 hover:text-black
   px-4 py-2 sm:px-6 sm:py-3 bg-black text-white font-bold border-2 rounded-2xl sm:rounded-3xl overflow-hidden`,
  {
    variants: {
      variant: {
        pink: "border-pink-400",
        yellow: "border-yellow-400",
        blue: "border-blue-600",
        red: "border-red-400",
        purple: "border-purple-400",
        green: "border-green-400",
        teal: "border-teal-400",
        orange: "border-orange-400",
        indigo: "border-indigo-400",
        emerald: "border-emerald-400",
        amber: "border-amber-400",
        cyan: "border-cyan-400",
        lime: "border-lime-400",
        fuchsia: "border-fuchsia-400",
        rose: "border-rose-400",
        sky: "border-sky-400",
        sunset:
          "border-orange-400 border-t-yellow-300 border-r-red-400 border-b-purple-500 border-l-pink-400",
        ocean:
          "border-blue-500 border-t-cyan-400 border-r-teal-500 border-b-blue-600 border-l-indigo-500",
        forest:
          "border-green-500 border-t-emerald-400 border-r-lime-500 border-b-green-600 border-l-teal-500",
        galaxy:
          "border-purple-500 border-t-indigo-400 border-r-violet-500 border-b-purple-600 border-l-fuchsia-500",
        neon: "border-lime-400 border-opacity-90 shadow-sm shadow-lime-400",
        ember:
          "border-red-500 border-t-orange-400 border-r-amber-500 border-b-red-600 border-l-rose-500",
        arctic:
          "border-cyan-400 border-t-sky-300 border-r-blue-400 border-b-cyan-500 border-l-teal-400",
        candy:
          "border-pink-400 border-t-fuchsia-300 border-r-purple-400 border-b-pink-500 border-l-rose-400",
      },
      intent: {
        small: "text-sm sm:text-base",
        medium: "text-base sm:text-lg",
        large: "text-lg sm:text-xl",
      },
    },
    defaultVariants: {
      intent: "small",
    },
  }
)
const variantToColorClass = {
  pink: "bg-pink-400",
  yellow: "bg-yellow-400",
  blue: "bg-blue-600",
  red: "bg-red-400",
  purple: "bg-purple-400",
  green: "bg-green-400",
  teal: "bg-teal-400",
  orange: "bg-orange-400",
  indigo: "bg-indigo-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  cyan: "bg-cyan-400",
  lime: "bg-lime-400",
  fuchsia: "bg-fuchsia-400",
  rose: "bg-rose-400",
  sky: "bg-sky-400",
  sunset: "bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500",
  ocean: "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600",
  forest: "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600",
  galaxy: "bg-gradient-to-br from-indigo-400 via-purple-500 to-fuchsia-600",
  neon: "bg-lime-400 bg-opacity-90 shadow-md shadow-lime-400",
  ember: "bg-gradient-to-br from-orange-400 via-red-500 to-rose-600",
  arctic: "bg-gradient-to-br from-sky-300 via-cyan-400 to-blue-500",
  candy: "bg-gradient-to-br from-fuchsia-400 via-pink-500 to-rose-500",
} as const
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "blue", intent, children, className, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const circleRef = useRef<HTMLDivElement>(null)
    const [circleSize, setCircleSize] = useState<number>(0)

    const updateCircleSize = () => {
      if (buttonRef.current) {
        const buttonWidth = buttonRef.current.offsetWidth
        const buttonHeight = buttonRef.current.offsetHeight
        // Use the larger dimension to ensure circle covers button
        const maxDimension = Math.max(buttonWidth, buttonHeight)
        //this 0.8 makes sures that circle is slightly smaller than being twice in size
        setCircleSize(maxDimension * 0.8)
      }
    }

    useEffect(() => {
      updateCircleSize()
      // Add resize listener for responsive updates
      const handleResize = () => {
        updateCircleSize()
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [children])

    useGSAP(() => {
      // Initialize GSAP timeline for scale animations
      const circle = circleRef.current
      const button = buttonRef.current

      if (!circle || !button) return

      // Set up the mousemove handler for direct position updates
      const updateCirclePosition = (e: MouseEvent) => {
        if (!circle) return

        const rect = button.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        // Direct DOM manipulation for position (smoother than GSAP for continuous updates)

        circle.style.top = `${y}px`
        circle.style.left = `${x}px`
      }

      const handleMouseEnter = (e: MouseEvent) => {
        if (!circle) return

        // Position the circle before showing it
        const rect = button.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        circle.style.top = `${y}px`
        circle.style.left = `${x}px`
        circle.style.display = "flex"

        // Use GSAP only for the scale animation
        gsap.to(circle, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = (e: MouseEvent) => {
        if (!circle) return
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        // Use GSAP for the scaling out animation
        gsap.to(circle, {
          scale: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            circle.style.display = "none"
            circle.style.top = `${y}px`
            circle.style.left = `${x}px`
          },
        })
      }

      // Attach event listeners
      button.addEventListener("mousemove", updateCirclePosition)
      button.addEventListener("mouseenter", handleMouseEnter)
      button.addEventListener("mouseleave", handleMouseLeave)

      // Clean up
      return () => {
        button.removeEventListener("mousemove", updateCirclePosition)
        button.removeEventListener("mouseenter", handleMouseEnter)
        button.removeEventListener("mouseleave", handleMouseLeave)
      }
    }, [circleSize])

    return (
      <button
        ref={(node) => {
          if (buttonRef && node) {
            ;(buttonRef as React.MutableRefObject<HTMLButtonElement>).current =
              node
          }
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn(buttonVariants({ className, variant, intent }))}
        {...props}
      >
        <div
          ref={circleRef}
          className={cn(
            "z-0 circle absolute hidden top-0 left-0 pointer-events-none rounded-full ",
            variantToColorClass[variant || "blue"]
          )}
          style={{
            width: `${2 * circleSize}px`,
            height: `${2 * circleSize}px`,
            transform: "translate(-50%, -50%) scale(0)",
          }}
        />
        <div className="absolute top-0 left-0 z-20 whitespace-nowrap w-full h-full flex justify-center items-center">
          {children}
        </div>
        <div className="whitespace-nowrap w-full h-full  flex opacity-0">
          {children}
        </div>
      </button>
    )
  }
)

Button.displayName = "Button"

interface Button2Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  hoverColor?: string
}
function Button2({ children, className, hoverColor, ...props }: Button2Props) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    if (!buttonRef.current) return

    const handleEnter = () => {
      const tl = gsap.timeline()
      tl.to(buttonRef.current, {
        scale: 0.8,
        duration: 0.15,
      })
        .to(buttonRef.current, {
          scale: 1,
          ease: "bounce.out",
          duration: 0.25,
        })
        .to(
          bgRef.current,
          {
            top: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "0"
        )
    }
    const handleLeave = () => {
      gsap.to(bgRef.current, {
        top: "100%",
        ease: "power2.out",
        duration: 0.3,
      })
    }
    buttonRef.current.parentElement?.addEventListener("mouseenter", handleEnter)
    buttonRef.current.parentElement?.addEventListener("mouseleave", handleLeave)
    return () => {
      buttonRef.current?.parentElement?.removeEventListener(
        "mouseenter",
        handleEnter
      )
      buttonRef.current?.parentElement?.removeEventListener(
        "mouseleave",
        handleLeave
      )
    }
  }, [])
  return (
    //event listners is applied to this div
    <div className="w-fit h-fit">
      <button
        ref={buttonRef}
        className={cn(
          className,
          "px-6 py-2 rounded-3xl cursor-pointer relative overflow-hidden"
        )}
        {...props}
      >
        <div className="absolute w-full h-full z-10 flex items-center justify-center top-0 left-0">
          {children}
        </div>
        <div
          ref={bgRef}
          className={cn(
            "z-0 w-full h-full absolute bg-white left-0 top-[100%] pointer-events-none",
            hoverColor
          )}
        ></div>
        <div className="opacity-0">{children}</div>
      </button>
    </div>
  )
}

interface Button3Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  initialDotTranslate?: number
  finalDotTranslate?: number
  initialArrowTranslate?: number
  finalArrowTranslate?: number
  initialTextTranslate?: number
  finalTextTranslate?: number
}

const Button3 = ({
  children,
  className,
  initialDotTranslate = -100,
  finalDotTranslate = 0,
  initialArrowTranslate = -100,
  finalArrowTranslate = -50,
  initialTextTranslate = -30,
  finalTextTranslate = 0,
  ...props
}: Button3Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const arrowRef = useRef<SVGSVGElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      const buttonElement = buttonRef.current
      const arrowElement = arrowRef.current
      const dotElement = dotRef.current
      const textElement = textRef.current

      const hoverInTimeline = gsap.timeline({
        paused: true,
        defaults: { duration: 0.3 },
      })

      const hoverOutTimeline = gsap.timeline({
        paused: true,
        defaults: { duration: 0.3 },
      })

      hoverInTimeline
        .to(
          buttonElement,
          {
            color: "#ffffff",
            duration: 0.2,
            backgroundColor: "#0016EC",
          },
          0
        )
        .to(dotElement, { opacity: 0, xPercent: initialDotTranslate }, 0)
        .to(arrowElement, { opacity: 1, xPercent: initialArrowTranslate }, 0)
        .to(textElement, { xPercent: initialTextTranslate }, "-=0.275")

      hoverOutTimeline
        .to(
          buttonElement,
          {
            backgroundColor: "rgba(255, 255, 255)",
            color: "#000000",
            duration: 0.2,
          },
          0
        )
        .to(arrowElement, { opacity: 0, xPercent: finalDotTranslate }, 0)
        .to(dotElement, { opacity: 1, xPercent: finalArrowTranslate }, 0)
        .to(textElement, { xPercent: finalTextTranslate }, "-=0.275")

      if (buttonElement) {
        buttonElement.addEventListener("mouseenter", () =>
          hoverInTimeline.restart().play()
        )
        buttonElement.addEventListener("mouseleave", () =>
          hoverOutTimeline.restart().play()
        )
      }

      return () => {
        if (buttonElement) {
          buttonElement.removeEventListener("mouseenter", () =>
            hoverInTimeline.restart().play()
          )
          buttonElement.removeEventListener("mouseleave", () =>
            hoverOutTimeline.restart().play()
          )
        }
      }
    },
    { scope: buttonRef }
  )
  return (
    <button
      ref={buttonRef}
      {...props}
      className={cn(
        "relative bg-white text-black rounded-[32px] px-6  py-3 flex items-center gap-[1em] text-[clamp(.875rem,1vw,1.75rem)] cursor-pointer  transition-all ease-custom shadow-buttonShadow overflow-hidden pointer-events-auto",
        className
      )}
    >
      <span
        ref={dotRef}
        className="inline-block size-1.5 lg:size-2  bg-black rounded-[100px] relative"
      />
      <p ref={textRef} className="font-aeonik font-medium">
        {children}
      </p>
      <ArrowRight
        ref={arrowRef}
        className="size-5 absolute right-0 opacity-0 overflow-hidden"
      />
    </button>
  )
}

export { Button, Button2, Button3 }
