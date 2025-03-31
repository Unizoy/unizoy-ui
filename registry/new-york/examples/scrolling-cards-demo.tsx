"use client"
import { ScrollingCards } from "@/registry/new-york/ui/scrolling-cards"
import { CreditCard, Heart, Star, Sun, Zap } from "lucide-react"
import { useRef } from "react"

export default function () {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const cards = [
    {
      card: (
        <div className="rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-6 shadow-xl h-[400px] flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2000"
            alt="Premium card"
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
          <CreditCard className="h-12 w-12 text-white" />
          <h3 className="text-xl font-bold text-white mt-4">Premium Card</h3>
          <p className="mt-2 text-white/80">Experience luxury at its finest</p>
        </div>
      ),
      rotate: 20,
    },
    {
      card: (
        <div className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-6 shadow-xl h-[400px] flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80&w=2000"
            alt="Love card"
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
          <Heart className="h-12 w-12 text-white" />
          <h3 className="text-xl font-bold text-white mt-4">Love Card</h3>
          <p className="mt-2 text-white/80">Share the love with others</p>
        </div>
      ),
      rotate: -5,
    },
    {
      card: (
        <div className="rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-6 shadow-xl h-[400px] flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=2000"
            alt="Star card"
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
          <Star className="h-12 w-12 text-white" />
          <h3 className="text-xl font-bold text-white mt-4">Star Card</h3>
          <p className="mt-2 text-white/80">Reach for the stars</p>
        </div>
      ),
      rotate: 0,
    },
    {
      card: (
        <div className="rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-6 shadow-xl h-[400px] flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&q=80&w=2000"
            alt="Sun card"
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
          <Sun className="h-12 w-12 text-white" />
          <h3 className="text-xl font-bold text-white mt-4">Sun Card</h3>
          <p className="mt-2 text-white/80">Brighten up your day</p>
        </div>
      ),
      rotate: 5,
    },
    {
      card: (
        <div className="rounded-xl bg-gradient-to-br from-red-500 to-rose-500 p-6 shadow-xl h-[400px] flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1506259091721-347e791bab0f?auto=format&fit=crop&q=80&w=2000"
            alt="Energy card"
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
          <Zap className="h-12 w-12 text-white" />
          <h3 className="text-xl font-bold text-white mt-4">Energy Card</h3>
          <p className="mt-2 text-white/80">Power up your life</p>
        </div>
      ),
      rotate: -20,
    },
  ]
  return (
    <div className="w-full h-screen overflow-scroll" ref={scrollerRef}>
      <section className="h-96 w-full bg-black flex justify-center items-center text-white text-5xl">
        {" "}
        Scroll to animate
      </section>

      <ScrollingCards
       cards={cards} 
       cardWidth={300} 
       animationLength={500}
       scrollerRef={scrollerRef}//not required
        />
        
    </div>
  )
}
