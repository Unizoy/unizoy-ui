"use client"
import MotionCards from "@/registry/new-york/ui/motion-cards"
import { ReactElement, useRef } from "react"
import { RiLockStarFill } from "react-icons/ri"
export default function MotionCardsDemo() {
  const parentRef = useRef<HTMLDivElement>(null)

  const cardsArray: ReactElement[] = [
    <Card1 />,
    <Card2 />,
    <Card3 />,
    <Card4 />,
    <Card5 />,
  ]
  return (
    //make the width w-screen it will work well
    <div ref={parentRef} className="w-full h-screen overflow-scroll ">
      <div className="w-full h-40 bg-black border-b flex justify-center items-center border-white text-white px-3">
        Scroll to Explore Component
      </div>
      {/* !!! EXAMPLE USECASE !!! */}
      <MotionCards
        mainText={{ text: "Unify your finance", className: "text-red-900 text-5xl" }}
        cards={cardsArray}
        scrollerRef={parentRef} // optional
      />
    </div>
  )
}

//demo cards......
const Card1: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-48">
      <div className="p-4 flex items-start space-x-3">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
          alt="Man with glasses"
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
     
    </div>
  )
}
const Card2: React.FC = () => {
  return (
    <div className="bg-green-500 rounded-lg shadow-lg overflow-hidden w-48">
      <div className="p-5 text-white">
        <div className="text-sm font-medium mb-2">Exchange</div>
        <div className="flex items-center">
          <span className="text-lg">−</span>
          <span className="text-2xl font-bold ml-1">€500.00</span>
        </div>
        <div className="flex items-center mt-1">
          <span className="text-lg">+</span>
          <span className="text-2xl font-bold ml-1">zł2,179.92</span>
        </div>
        <div className="mt-6 text-center py-1 bg-green-400 bg-opacity-30 rounded-md">
          Approved
        </div>
      </div>
    </div>
  )
}
const Card3: React.FC = () => {
  return (
    <div className="bg-blue-100 rounded-2xl shadow-lg overflow-hidden w-48 text-black">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs">€</span>
          </div>
          <span className="font-medium">EUR</span>
          <svg
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="text-3xl font-bold mb-2">€100</div>

        <div className="text-sm text-gray-500">
          Balance: <span className="font-medium">€4,921.22</span>
        </div>

        <button className="w-full mt-4 bg-white py-2 rounded-lg font-medium">
          Send
        </button>
      </div>
    </div>
  )
}
const Card4: React.FC = () => {
  return (
    <div className="bg-pink-100 rounded-2xl shadow-lg overflow-hidden w-48 text-black">
      <div className="p-5 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-pink-200 mb-3 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center mb-4">
          <h3 className="font-medium">Jane Thomas</h3>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-4">
          <RiLockStarFill size={14} className="mr-2" />
          <span>Secure payment</span>
        </div>

        <button className="w-full bg-white py-2 rounded-lg font-medium">
          Send
        </button>
      </div>
    </div>
  )
}
const Card5: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-48">
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">
          Business Solutions
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Enterprise financial tools for growing companies
        </p>
      </div>
    </div>
  )
}
