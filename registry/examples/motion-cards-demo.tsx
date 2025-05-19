import MotionCards from "@/registry/ui/motion-cards"
import { ReactElement } from "react"
import { RiLockStarFill } from "react-icons/ri"
export default function MotionCardsDemo() {
  const cardsArray: ReactElement[] = [
    <Card1 />,
    <Card2 />,
    <Card3 />,
    <Card4 />,
  ]
  return (
    //make the width w-screen it will work well
    <div className="w-full  ">
      <div className="w-full h-40 bg-black border-b flex justify-center items-center border-white text-white px-3">
        Scroll to Explore Component
      </div>
      {/* !!! EXAMPLE USECASE !!! */}
      <MotionCards
        mainText={{
          text: "All in one",
          className: "text-red-900 text-5xl",
        }}
        cards={cardsArray}
      />
      <div className="w-full h-96 ">
        {/* Scroll to Explore Component */}
      </div>
    </div>
  )
}

//demo cards......
const Card1: React.FC = () => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden w-48">
        <img
          src="/examples/motion-card-demo-image-4.png"
          alt="Man with glasses"
          width={200}
          height={200}
        />
     
    </div>
  )
}
const Card2: React.FC = () => {
  return (
    <div className=" rounded-lg shadow-lg overflow-hidden w-48">
    <img src="/examples/motion-card-demo-image-3.png" alt="" width={200}
          height={200} />
    </div>
  )
}
const Card3: React.FC = () => {
  return (
    <div className=" rounded-2xl shadow-lg overflow-hidden w-48 text-black">
      <img src="/examples/motion-card-demo-image-2.png" alt=""  width={200}
          height={200}/>
    </div>
  )
}
const Card4: React.FC = () => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden w-48 text-black">
     <img src="/examples/motion-card-demo-image-1.png" alt="" width={200}
          height={200}/>
    </div>
  )
}
