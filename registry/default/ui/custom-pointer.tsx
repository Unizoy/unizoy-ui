"use client"
import * as React from "react"
import gsap from "gsap"
import { cn } from "../lib/utils"
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
  <div className={cn(" mb-4", className)} {...props}>
    {children}
  </div>
)

interface NameTagProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  src?: string
}

const NameTag = ({
  name,
  src,
  className,
  children,
  ...props
}: NameTagProps) => {
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
        {name && <p className="text-black font-semibold">{name}</p>}
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
  const [isCursorIcon, setIsCursorIcon] = React.useState(false)
  const localRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    let parent = localRef.current?.parentElement
    if (!parent || !localRef.current) return

    const mouseEnter = () => {
      gsap.to(localRef.current, { opacity: 1, duration: 0.1 })
      gsap.to("[data-nametag]", { scale: 1, duration: 0.3 })
      parent.style.border = "2px solid red"
    }

    const mouseLeave = () => {
      gsap.to(localRef.current, { opacity: 0, duration: 0.1 })
      gsap.to("[data-nametag]", { scale: 0, duration: 0.1 })
      setColors(getRandomColorPair())
      parent.style.border = "1px solid black"
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
    }
  }, [])

  // let isCursorIcon = true;
  React.useEffect(() => {
    React.Children.forEach(children, (child) => {
      if (child && React.isValidElement(child)) {
        console.log(child)

        // Ensure child.type is a function before accessing its name
        if (
          typeof child.type === "function" &&
          child.type.name === "CursorIcon"
        ) {
          setIsCursorIcon(true)
        }
      }
    })
  }, [children])

  return (
    <div
      ref={localRef}
      className={cn("absolute top-0 left-0 opacity-0", className)}
      {...props}
    >
      {!isCursorIcon && (
        <CursorIcon style={{ color: colors.primary }}>
          <svg
            style={{ rotate: "-70deg" }}
            className="scale-150"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
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
                  color: colors.primary,
                  backgroundColor:
                    (child.type as any).name !== "CursorIcon"
                      ? colors.secondary
                      : undefined,
                } as React.CSSProperties, // Ensure TypeScript recognizes this as a valid style object
                "data-nametag": true,
              })
            : child
        )}
    </div>
  )
}

export { CustomCursor, CursorIcon, NameTag }
