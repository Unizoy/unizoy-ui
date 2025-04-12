"use client"
import { ReactElement, RefObject, useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

interface CardSliderProps {
  cards: {
    card: ReactElement
    rotate: number
    transformOrigin?: string
  }[]
  cardWidth: number
  top?: number
  left?: number
  /**
   * Should be multiple of 100 eg. 100,200....
   */
  animationLength?: number
  scrollerRef?: RefObject<HTMLElement>
}

function ScrollingCards({
  cards,
  cardWidth,
  top = 35,
  left = 20,
  animationLength = 300,
  scrollerRef,
}: CardSliderProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const instanceIdRef = useRef<string>(
    `rotating-text-${Math.random().toString(36).substring(2, 11)}`
  )
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    console.log("from useEffext");
    
    if (scrollerRef?.current) {
      setForceUpdate(!forceUpdate)
    }
  }, [scrollerRef?.current])
  useGSAP(() => {
    if (!sectionRef.current || !cardsRef.current) return
     const existingTrigger = ScrollTrigger.getById(instanceIdRef.current)
    const existingTrigger2 = ScrollTrigger.getById(instanceIdRef.current + "2")
    if (existingTrigger && existingTrigger2) {
      existingTrigger.kill()
      existingTrigger2.kill()
    }
    const unitLeftDis = (50 - left) / cards.length
    // Set initial position for all cards (below viewport)
    gsap.set(cardsRef.current, {
      top: window.innerHeight + 300,
      rotate: (i) => `${cards[i].rotate}deg`,
    })
    const innerTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center", // Start when section center hits viewport center
        end: `+=${animationLength}%`, // End after scrolling 300% of section height
        scrub: true, // Smooth scrubbing effect
        markers: false, // Set to
        scroller: scrollerRef?.current ?? window,
        id:instanceIdRef.current
      },
    })
    // Create timeline for sequential animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center", // Start when section center hits viewport center
        end: "+=300%", // End after scrolling 300% of section height
        pin: true, // Pin the section while animation plays
        scrub: 1, // Smooth scrubbing effect
        scroller: scrollerRef?.current ?? window,
        markers:false,
        id: instanceIdRef.current + "2",
        onUpdate: (self) => {
          const direction = self.direction
          const topCards = cardsRef.current.filter((card) => {
            if (card.offsetTop /(scrollerRef?.current?.getBoundingClientRect().height|| window.innerHeight )<= top / 100) return true
            else return false
          })

          if (direction == 1) {
            innerTl.clear()
            innerTl.to(
              topCards,
              {
                left: (i) => {
                  return `${i * unitLeftDis + left}%`
                },
              },
              "<"
            )
          } else {
            innerTl.clear()
            innerTl.to(topCards, {
              left: "50%",
            })
          }
        },
      },
    })

    // Add each card to the timeline with sequential animation
    cardsRef.current.forEach((card) => {
      if (!card) return

      tl.to(
        card,
        {
          top: `${top}%`,
          ease: "none",
        },
        ">"
      ) // Stagger the animations
    })
  }, [cards, cardsRef.current,forceUpdate])

  return (
    <section
      ref={sectionRef}
      className="h-full relative flex items-center justify-center overflow-hidden "
    >
      {cards.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) cardsRef.current[index] = el
          }}
          style={{
            rotate: `${item.rotate}deg`,
            transformOrigin: `${
              item.transformOrigin ?? `${index % 2 === 0 ? "left" : "right"}`
            }`,
            width: `${cardWidth}px`,
            position: "absolute",
          }}
          className="transition-all  -translate-x-1/2 -translate-y-1/2 left-1/2  top-full"
        >
          {item.card}
        </div>
      ))}
    </section>
  )
}

function SnappingScrollingCards({
  cards,
  cardWidth,
  top = 35,
  left = 30,
  animationLength = 400,
  scrollerRef,
}: CardSliderProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const instanceIdRef = useRef<string>(
    `rotating-text-${Math.random().toString(36).substring(2, 11)}`
  )
  const [forceUpdate, setForceUpdate] = useState(false)

  useEffect(() => {
    console.log("from useEffext");
    
    if (scrollerRef?.current) {
      setForceUpdate(!forceUpdate)
    }
  }, [scrollerRef?.current])
  useGSAP(() => {
    if (!sectionRef.current || cardsRef.current.some((ref) => !ref)) return

    // // Clear any existing ScrollTriggers
    // ScrollTrigger.getAll().forEach((st) => st.kill())
    const existingTrigger = ScrollTrigger.getById(instanceIdRef.current)
   
    if (existingTrigger) {
      existingTrigger.kill()
    }
    const unitLeftDis = (50 - left) / (cards.length - 1 || 1)

    // Calculate maximum rotation to adjust starting position
    const maxRotation = Math.max(...cards.map((card) => Math.abs(card.rotate)))
    const extraPadding = maxRotation * 2 // Add extra padding based on rotation

    // Reset all cards to initial position - move them further down to account for rotation
    gsap.set(cardsRef.current, {
      top: window.innerHeight + 300 + extraPadding,
      left: "50%",
      rotate: (i) => `${cards[i]?.rotate || 0}deg`,
      opacity: 0, // Start with opacity 0
      clearProps: "none", // Clear any previously set props
    })

    // Create main scroll trigger
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center center",
      end: `+=${animationLength}%`,
      pin: true,
      scrub: 1,
      id:instanceIdRef.current,
      scroller: scrollerRef?.current ?? window,
      onUpdate: (self) => {
        // Calculate current scroll progress (0-1)
        const progress = self.progress

        // Total scroll is divided into sections:
        // - First 70% of scroll brings cards up sequentially
        // - Remaining 30% ensures all cards reach final horizontal position

        const verticalSection = 0.7 // 70% of scroll dedicated to vertical movement

        cardsRef.current.forEach((card, i) => {
          if (!card) return

          // Calculate when this card should start its vertical animation
          // (distributed evenly across the first 70% of scroll)
          const cardStartPoint = (i / cards.length) * verticalSection

          // Calculate progress of this card's animation sequence (0-1)
          let cardProgress =
            (progress - cardStartPoint) / (verticalSection / cards.length)
          cardProgress = Math.max(0, Math.min(1, cardProgress))

          // Calculate vertical position
          const verticalProgress = Math.min(1, cardProgress * 2) // Complete vertical movement in first half of card's sequence
          const startY = window.innerHeight + 300 + extraPadding
          const endY = (window.innerHeight * top) / 100
          const topPosition = startY - (startY - endY) * verticalProgress

          // Calculate horizontal position (starts when vertical is halfway done)
          let horizontalProgress = 0
          if (cardProgress > 0.5) {
            // Map 0.5-1 to 0-1 for horizontal animation
            horizontalProgress = (cardProgress - 0.5) * 2

            // Use eased progress based on overall scroll progress to ensure all cards finish together
            // When overall progress reaches 1, all cards should be at their final position
            const masterProgress = Math.min(1, progress / 1)
            horizontalProgress = Math.min(horizontalProgress, masterProgress)
          }

          // Calculate final left position
          const leftPos =
            50 - (50 - (left + i * unitLeftDis)) * horizontalProgress

          // Apply transforms directly
          gsap.set(card, {
            top: topPosition,
            left: `${leftPos}%`,
            opacity: cardProgress > 0 ? 1 : 0, // Fade in when animation starts
          })
        })
      },
    })

    return () => {
      st.kill()
    }
  }, [cards, cardWidth, top, left,forceUpdate])

  return (
    <section
      ref={sectionRef}
      className="h-full relative flex items-center justify-center overflow-hidden"
    >
      {cards.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) cardsRef.current[index] = el
          }}
          style={{
            rotate: `${item.rotate}deg`,
            transformOrigin:
              item.transformOrigin || (index % 2 === 0 ? "left" : "right"),
            width: `${cardWidth}px`,
            position: "absolute",
          }}
          className="transition-all -translate-x-1/2 -translate-y-1/2"
        >
          {item.card}
        </div>
      ))}
    </section>
  )
}
export { ScrollingCards, SnappingScrollingCards }
