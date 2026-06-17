"use client"

import React, {
  useRef,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react"
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"

// Register the Draggable plugin with GSAP
gsap.registerPlugin(Draggable)

type HandlebarsProps = PropsWithChildren

function Handlebars({ children }: HandlebarsProps) {
  // Refs for the elements we'll be animating or interacting with
  const containerRef = useRef<HTMLDivElement>(null)
  const leftHandleRef = useRef<HTMLDivElement>(null)
  const rightHandleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLSpanElement>(null)

  // Refs to store the Draggable instances
  const leftDraggableRef = useRef<Draggable[] | null>(null)
  const rightDraggableRef = useRef<Draggable[] | null>(null)

  // State to hold the width of the container
  const [width, setWidth] = useState(0)

  // This effect runs once to set up a ResizeObserver
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        setWidth(entry.contentRect.width)
      }
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Initialize draggables and set up initial positions
  useEffect(() => {
    if (
      !leftHandleRef.current ||
      !rightHandleRef.current ||
      !contentRef.current ||
      width === 0
    ) {
      return
    }

    // Clean up existing draggables if they exist
    if (leftDraggableRef.current) {
      leftDraggableRef.current[0].kill()
    }
    if (rightDraggableRef.current) {
      rightDraggableRef.current[0].kill()
    }

    // Set initial positions
    gsap.set(leftHandleRef.current, { x: 0 })
    gsap.set(rightHandleRef.current, { x: width - 28 })

    // Helper function to update the CSS mask
    const updateMask = () => {
      if (
        !contentRef.current ||
        !leftDraggableRef.current ||
        !rightDraggableRef.current
      )
        return

      const leftX = leftDraggableRef.current[0].x
      const rightX = rightDraggableRef.current[0].x + 28 // Add handle width to right position

      const leftPercent = Math.max(0, Math.min(100, (leftX / width) * 100))
      const rightPercent = Math.max(0, Math.min(100, (rightX / width) * 100))

      const maskValue = `linear-gradient(90deg, 
        transparent 0%, 
        transparent ${leftPercent}%, 
        black ${leftPercent}%, 
        black ${rightPercent}%, 
        transparent ${rightPercent}%, 
        transparent 100%)`

      gsap.set(contentRef.current, {
        mask: maskValue,
        webkitMask: maskValue,
      })
    }

    // Create Left Draggable Handle
    leftDraggableRef.current = Draggable.create(leftHandleRef.current, {
      type: "x",
      bounds: { minX: 0, maxX: width - 28 }, // Can go all the way to the right edge
      onDrag: function () {
        updateMask()
        // Update right handle bounds - can touch but not overlap
        if (rightDraggableRef.current) {
          rightDraggableRef.current[0].applyBounds({
            minX: this.x + 28, // Right handle starts where left handle ends (touching)
            maxX: width - 28,
          })
        }
      },
      onPress: function () {
        gsap.to(this.target, { scale: 1.1, duration: 0.2 })
      },
      onRelease: function () {
        gsap.to(this.target, { scale: 1, duration: 0.2 })
      },
    })

    // Create Right Draggable Handle
    rightDraggableRef.current = Draggable.create(rightHandleRef.current, {
      type: "x",
      bounds: { minX: 28, maxX: width - 28 }, // Can touch left handle but not overlap
      onDrag: function () {
        updateMask()
        // Update left handle bounds - can touch but not overlap
        if (leftDraggableRef.current) {
          leftDraggableRef.current[0].applyBounds({
            minX: 0,
            maxX: this.x - 28, // Left handle can go up to where right handle starts (touching)
          })
        }
      },
      onPress: function () {
        gsap.to(this.target, { scale: 1.1, duration: 0.2 })
      },
      onRelease: function () {
        gsap.to(this.target, { scale: 1, duration: 0.2 })
      },
    })

    // Set initial mask to show full content
    updateMask()

    // Cleanup function
    return () => {
      leftDraggableRef.current?.[0].kill()
      rightDraggableRef.current?.[0].kill()
    }
  }, [width]) // Re-run when width changes

  return (
    <div className="flex justify-center gap-4 leading-16">
      <div
        ref={containerRef}
        className="relative -rotate-[2.76deg] mt-0.5 w-64 md:w-96"
      >
        {/* The main container for the content and handles */}
        <div className="absolute inset-0 w-full h-full rounded-2xl border border-yellow-500 flex justify-between z-1">
          {/* Left Handle */}
          <div
            ref={leftHandleRef}
            className="absolute z-10 h-full border border-yellow-500 w-7 rounded-full bg-gray-800 flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
            style={{ left: 0 }}
          >
            <div className="w-2 h-8 rounded-full bg-yellow-500" />
          </div>

          {/* Right Handle */}
          <div
            ref={rightHandleRef}
            className="absolute z-10 h-full border border-yellow-500 w-7 rounded-full bg-gray-800 flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
            style={{ left: 0 }}
          >
            <div className="w-2 h-8 rounded-full bg-yellow-500" />
          </div>
        </div>

        {/* The content that gets masked */}
        <span
          ref={contentRef}
          className="inline-flex items-center justify-center w-full h-full px-9 relative rounded-2xl"
        >
          {children}
        </span>
      </div>
    </div>
  )
}

export { Handlebars }
