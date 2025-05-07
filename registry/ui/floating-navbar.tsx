"use client"
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  ReactElement,
  AnchorHTMLAttributes,
} from "react"
import gsap from "gsap"
import { cn } from "../lib/utils"

// Types for better code organization
type MenuItemProps = {
  item: string
  children?: React.ReactNode
}

type EnhancedMenuItemProps = MenuItemProps & {
  onMouseEnter?: () => void
  isActive?: boolean
  isAnimatingOut?: boolean
  registerDropdownRef?: (ref: HTMLDivElement | null) => void
  animateDropdownIn?: (ref: HTMLDivElement) => void
}

type MenuProps = {
  children: React.ReactNode
}

// The main Menu component that controls all state
const Menu = ({ children }: MenuProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [animatingOutItem, setAnimatingOutItem] = useState<string | null>(null)
  const dropdownRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear any existing timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Handle mouse enter on a menu item
  const handleItemMouseEnter = useCallback(
    (item: string) => {
      // Clear any ongoing animations/timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      // If we're animating out the same item that's being hovered,
      // just cancel the animation out
      if (animatingOutItem === item) {
        setAnimatingOutItem(null)
      }

      // If we're hovering a different item, animate the current one out first
      if (
        activeItem &&
        activeItem !== item &&
        animatingOutItem !== activeItem
      ) {
        const prevDropdown = dropdownRefs.current.get(activeItem)

        if (prevDropdown) {
          // Animate out the previously active dropdown
          gsap.to(prevDropdown, {
            opacity: 0,
            scale: 0.85,
            y: 10,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              // After animating out, set the new active item
              setActiveItem(item)
              setAnimatingOutItem(null)
            },
          })
          setAnimatingOutItem(activeItem)
          return
        }
      }

      // Set the new active item directly if no animation needed
      setActiveItem(item)
    },
    [activeItem, animatingOutItem]
  )

  // Handle mouse leave on the entire menu
  const handleMenuMouseLeave = useCallback(() => {
    if (activeItem) {
      const dropdown = dropdownRefs.current.get(activeItem)

      if (dropdown) {
        // Animate out the active dropdown
        gsap.to(dropdown, {
          opacity: 0,
          scale: 0.85,
          y: 10,
          duration: 0.4,
          ease: "power3.out",
          onComplete: () => {
            setActiveItem(null)
            setAnimatingOutItem(null)
          },
        })
        setAnimatingOutItem(activeItem)
      } else {
        // Fallback if ref is not available
        timeoutRef.current = setTimeout(() => {
          setActiveItem(null)
          setAnimatingOutItem(null)
        }, 400)
      }
    }
  }, [activeItem])

  // Register a dropdown ref
  const registerDropdownRef = useCallback(
    (item: string, ref: HTMLDivElement | null) => {
      if (ref) {
        dropdownRefs.current.set(item, ref)
      } else {
        dropdownRefs.current.delete(item)
      }
    },
    []
  )

  // Animate in a dropdown when it becomes active
  const animateDropdownIn = useCallback((ref: HTMLDivElement) => {
    gsap.set(ref, { opacity: 0, scale: 0.85, y: 10 })
    gsap.to(ref, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    })
  }, [])

  // Clone children to add necessary props
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement<MenuItemProps>(child)) {
      const item = child.props.item

      // Only pass valid props that are defined in the child component's prop type
      const enhancedProps: EnhancedMenuItemProps = {
        ...child.props,
        onMouseEnter: () => handleItemMouseEnter(item),
        isActive: activeItem === item,
        isAnimatingOut: animatingOutItem === item,
        registerDropdownRef: (ref: HTMLDivElement | null) =>
          registerDropdownRef(item, ref),
        animateDropdownIn,
      }

      return React.cloneElement(child, enhancedProps)
    }
    return child
  })

  return (
    <nav
      onMouseLeave={handleMenuMouseLeave}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {enhancedChildren}
    </nav>
  )
}

// MenuItem is now a controlled component that receives all it needs from Menu
const MenuItem = React.forwardRef<HTMLDivElement, EnhancedMenuItemProps>(
  (
    {
      item,
      children,
      onMouseEnter,
      isActive = false,
      isAnimatingOut = false,
      registerDropdownRef,
      animateDropdownIn,
    },
    _ref
  ) => {
    const menuItemRef = useRef<HTMLParagraphElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Register the dropdown ref when it's created
    useEffect(() => {
      if (dropdownRef.current && registerDropdownRef) {
        registerDropdownRef(dropdownRef.current)

        // Return cleanup function
        return () => {
          registerDropdownRef(null)
        }
      }
    }, [registerDropdownRef])

    // Animate dropdown in when it becomes active
    useEffect(() => {
      if (
        isActive &&
        dropdownRef.current &&
        animateDropdownIn &&
        !isAnimatingOut
      ) {
        animateDropdownIn(dropdownRef.current)
      }
    }, [isActive, animateDropdownIn, isAnimatingOut])

    return (
      <div onMouseEnter={onMouseEnter} className="relative">
        <p
          ref={menuItemRef}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </p>

        {/* Show dropdown when active OR when animating out */}
        {(isActive || isAnimatingOut) && (
          <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
            <div
              ref={dropdownRef}
              className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <div className="w-max h-full p-4">{children}</div>
            </div>
          </div>
        )}
      </div>
    )
  }
)

MenuItem.displayName = "MenuItem"

// Unchanged components
const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-base md:text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-xs md:text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  )
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactElement | string
}
const HoveredLink = ({ children, className = "", ...rest }: LinkProps) => {
  return (
    <a
      {...rest}
      className={cn(
        "text-neutral-700 dark:text-neutral-200 hover:text-black",
        className
      )}
    >
      {children}
    </a>
  )
}

export { Menu, MenuItem, ProductItem, HoveredLink }
