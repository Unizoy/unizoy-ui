import RotatingText from "@/registry/new-york/ui/rotating-text"


export default function RotatingTextDemo() {

  return (
    <div className="w-full">
      <div className="w-full h-40 bg-black border-b flex justify-center items-center border-white text-white px-3">
        Scroll to see the animation
      </div>
      <RotatingText
        text={[
          { data: "Hello, World!", className: "text-5xl" },
          { data: "This is a sample text.", className: "text-5xl" },
        ]}
      />
    </div>
  )
}
