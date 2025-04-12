"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useEffect, useRef, useState, useCallback } from "react"

interface Image {
  id: number
  x: number
  y: number
  url: string
  timestamp: number
  isExpiring?: boolean // Flag to track images that are fading out
}

interface ImageTrailProps {
  images: string[]
  text: string
  duration?: number
  fadeOutDuration?: number
  spawnInterval?: number
  renderRadius?: number
  maxImages?: number
  easeForMovement?: string
}

export const ImageTrail: React.FC<ImageTrailProps> = ({
  images,
  text,
  duration = 1,
  spawnInterval = 0,
  renderRadius = 90,
  maxImages = 5,
  fadeOutDuration = 0.5,
  easeForMovement = "none",
}) => {
  const [activeImages, setActiveImages] = useState<Image[]>([])
  const [imageIndex, setImageIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastSpawnTimeRef = useRef(0)
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const imageIdCounter = useRef(0)
  const MAX_IMAGES = maxImages
  const imagesRef = useRef<HTMLDivElement>(null)
  const isTouchActiveRef = useRef(false)

  // Remove images that have completed their fade-out animation
  const removeExpiredImages = useCallback(() => {
    const now = performance.now()
    const timeToRemove = duration * 1000 - fadeOutDuration * 1000 // Start fading 1 second before removal

    setActiveImages((prev) => {
      // First, mark images that need to start fading
      const updatedImages = prev.map((img) => {
        if (now - img.timestamp > timeToRemove && !img.isExpiring) {
          // Start fade animation for this image
          const imgElement = imagesRef.current?.querySelector(
            `[data-id="${img.id}"]`
          )
          if (imgElement && !imgElement.classList.contains("fading")) {
            imgElement.classList.add("fading")
            gsap.to(imgElement, {
              opacity: 0,
              duration: fadeOutDuration,
              ease: "power2.out",
            })
          }
          return { ...img, isExpiring: true }
        }
        return img
      })

      // Then remove images that have completed their fade-out animation
      return updatedImages.filter(
        (img) => now - img.timestamp < duration * 1000
      )
    })
  }, [duration, fadeOutDuration])

  useGSAP(
    () => {
      if (!imagesRef.current) return

      const images = imagesRef.current.querySelectorAll("img:not(.fading)")
      if (!images || images.length <= 0) return

      const latestImage = images[images.length - 1]

      // If it's the first image, use the cursor's position
      const prevImage =
        activeImages.length > 1 ? activeImages[activeImages.length - 2] : null
      const startX = prevImage ? prevImage.x : lastPositionRef.current.x
      const startY = prevImage ? prevImage.y : lastPositionRef.current.y

      gsap.fromTo(
        latestImage,
        {
          left: startX,
          top: startY,
          opacity: 1,
        },
        {
          left: lastPositionRef.current.x,
          top: lastPositionRef.current.y,
          duration: 0.3,
          ease: easeForMovement,
        }
      )
    },
    { dependencies: [imageIndex], scope: containerRef }
  )

  useEffect(() => {
    const intervalId = setInterval(removeExpiredImages, 100)
    return () => clearInterval(intervalId)
  }, [removeExpiredImages])

  // Set up global touch event handling to prevent scrolling while interacting with our component
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (isTouchActiveRef.current && containerRef.current) {
        e.preventDefault()
      }
    }

    // Add the event listener with passive: false to allow preventDefault()
    document.addEventListener('touchmove', preventScroll, { passive: false })
    
    return () => {
      document.removeEventListener('touchmove', preventScroll)
    }
  }, [])

  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  const addImage = (x: number, y: number) => {
    const now = performance.now()
    if (now - lastSpawnTimeRef.current < spawnInterval) {
      return
    }

    const distance = getDistance(
      x,
      y,
      lastPositionRef.current.x,
      lastPositionRef.current.y
    )
    if (distance < renderRadius && activeImages.length > 0) {
      return
    }

    // If it's the first image, ensure lastPositionRef is updated
    if (activeImages.length === 0) {
      lastPositionRef.current = { x, y }
    }

    lastSpawnTimeRef.current = now
    lastPositionRef.current = { x, y }

    const newImage: Image = {
      id: imageIdCounter.current++,
      x,
      y,
      url: images[imageIndex],
      timestamp: now,
    }

    setActiveImages((prev) => {
      let newImages = [...prev, newImage]

      // If we're about to exceed MAX_IMAGES, mark the oldest for fading out
      if (newImages.length > MAX_IMAGES) {
        const oldestImage = newImages[0]

        // Only start fading if it's not already expiring
        if (!oldestImage.isExpiring) {
          // Mark it as expiring
          newImages[0] = { ...oldestImage, isExpiring: true }

          // Start fade-out animation
          const imgElement = imagesRef.current?.querySelector(
            `[data-id="${oldestImage.id}"]`
          )
          if (imgElement) {
            imgElement.classList.add("fading")
            gsap.to(imgElement, {
              opacity: 0,
              duration: fadeOutDuration,
              ease: "none",
            })
          }
        }

        // we keep the expiring image
        // until its fade-out animation completes
        if (newImages.length > MAX_IMAGES + 3) {
          // But we do limit how many fading images we keep to avoid memory issues
          newImages = newImages.slice(-(MAX_IMAGES + 3))
        }
      }

      return newImages
    })

    setImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePointerEvent = (x: number, y: number) => {
    if (!imagesRef.current) return
    const rect = imagesRef.current.getBoundingClientRect()
    const relativeX = x - rect.left
    const relativeY = y - rect.top
    addImage(relativeX, relativeY)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handlePointerEvent(e.clientX, e.clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    // Get the first touch point
    const touch = e.touches[0]
    if (touch) {
      handlePointerEvent(touch.clientX, touch.clientY)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    // Set the touch as active to prevent scrolling
    isTouchActiveRef.current = true
    
    const touch = e.touches[0]
    if (touch) {
      handlePointerEvent(touch.clientX, touch.clientY)
    }
  }

  const handleTouchEnd = () => {
    // Touch is no longer active, allow scrolling again
    isTouchActiveRef.current = false
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Canvas Layer */}
      <div className="absolute inset-0" ref={imagesRef}>
        {activeImages.map((img) => (
          <img
            key={img.id}
            data-id={img.id}
            src={img.url}
            alt=""
            className={`absolute images pointer-events-none ${img.isExpiring ? "fading" : ""}`}
            style={{
              left: `${img.x}px`,
              top: `${img.y}px`,
              width: "100px",
              height: "100px",
              objectFit: "cover",
              opacity: img.isExpiring ? undefined : 1, // Let the animation handle opacity for expiring images
            }}
          />
        ))}
      </div>

      {/* Text Layer */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <h1 className=" text-xl sm:text2xl md:text4xl lg:text-6xl font-bold dark:text-white text-black mix-blend-difference">
          {text}
        </h1>
      </div>
    </div>
  )
}
