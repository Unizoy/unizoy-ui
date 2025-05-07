"use client"
import * as React from "react"
import gsap from "gsap"
import { cn } from "../lib/utils"
import { useGSAP } from "@gsap/react"
const colorPairs = [
  { primary: "#FF6B6B", secondary: "#4ECDC4" },
  { primary: "#A17FB0", secondary: "#5D5FEF" },
  { primary: "#FF9F43", secondary: "#FF5E7D" },
  { primary: "#00D2FF", secondary: "#3A7BD5" },
  { primary: "#08AEEA", secondary: "#2AF598" },
]

const getRandomColorPair = () => {
  return colorPairs[Math.floor(Math.random() * colorPairs.length)]
}

interface CursorIconProps extends React.HTMLAttributes<HTMLDivElement> {}

const CursorIcon = ({ className, children, ...props }: CursorIconProps) => (
  <div className={cn("mb-4", className)} {...props}>
    {children}
  </div>
)

interface NameTagProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  src?: string
}

function NameTag({ name, src, className, children, ...props }: NameTagProps) {
  if (name || src) {
    return (
      <div
        className={cn(
          "flex items-center p-2 rounded-2xl gap-3 mt-4 scale-0",
          className
        )}
        {...props}
      >
        {src && (
          <img
            src={src}
            className="h-5 w-5 border rounded-full"
            alt="Profile"
          />
        )}
        {name && <p className="font-semibold">{name}</p>}
      </div>
    )
  }
  return <div {...props}>{children}</div>
}

interface CustomCursorProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const CustomCursor = ({ children, className, ...props }: CustomCursorProps) => {
  const [colors, setColors] = React.useState(getRandomColorPair)
  const [hasCursorIcon, setHasCursorIcon] = React.useState(false)
  const localRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    let parent = localRef.current?.parentElement
    if (!parent || !localRef.current) return

    const mouseEnter = () => {
      gsap.to(localRef.current, { opacity: 1, duration: 0.1 })
      gsap.to("[data-nametag]", { scale: 1, duration: 0.3 })
      parent.style.border = `1px solid ${colors.secondary}`
    }

    const mouseLeave = () => {
      gsap.to(localRef.current, { opacity: 0, duration: 0.1 })
      gsap.to("[data-nametag]", { scale: 0, duration: 0.1 })
      setColors(getRandomColorPair())
      parent.style.border = `0.5px solid ${prefersDark ? "#E9E9E8" : "#262626"}`
      // parent.classList.add("border");
    }

    const mouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      gsap.to(localRef.current, { x, y, duration: 0.1 })
    }

    parent.addEventListener("mouseenter", mouseEnter)
    parent.addEventListener("mouseleave", mouseLeave)
    parent.addEventListener("mousemove", mouseMove)

    return () => {
      parent.removeEventListener("mouseenter", mouseEnter)
      parent.removeEventListener("mouseleave", mouseLeave)
      parent.removeEventListener("mousemove", mouseMove)
      parent.style.cursor = ""
    }
  }, [colors])

  // Improved detection of CursorIcon component
  React.useEffect(() => {
    // Initialize with false
    let foundCursorIcon = false

    // Enhanced check for CursorIcon components
    React.Children.forEach(children, (child) => {
      if (child && React.isValidElement(child)) {
        // Check if the component is CursorIcon
        if (
            (child.type as any).name === "CursorIcon" ||
            (child.type as any).displayName === "CursorIcon"||
            (child.type as any)._payload?.value?.displayName=="CursorIcon"
        ) {
          foundCursorIcon = true
        }
      }
    })

    setHasCursorIcon(foundCursorIcon)
  }, [children])

  return (
    <div
      ref={localRef}
      className={cn(
        "absolute top-0 left-0 opacity-0 pointer-events-none",
        className
      )}
      {...props}
    >
      {/* Only show default cursor when no CursorIcon is found */}
      {!hasCursorIcon && (
        <CursorIcon style={{ color: colors.secondary }}>
          <svg
            style={{ rotate: "-70deg" }}
            className="scale-150"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
          </svg>
        </CursorIcon>
      )}
      {children &&
        React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                // @ts-ignore
                style: {
                  backgroundColor:
                    (child.type as any).displayName !== "CursorIcon"
                      ? colors.secondary
                      : undefined,
                } as React.CSSProperties,
                "data-nametag": true,
              })
            : child
        )}
    </div>
  )
}

// Add displayName for better component identification
CursorIcon.displayName = "CursorIcon"
NameTag.displayName = "NameTag"

export { CustomCursor, CursorIcon, NameTag }
