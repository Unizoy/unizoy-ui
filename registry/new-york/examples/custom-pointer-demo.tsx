import {
  CursorIcon,
  CustomCursor,
  NameTag,
} from "@/registry/new-york/ui/custom-pointer"

export default function Card() {
  return (
    <div className="w-64 h-96 border rounded-xl  flex justify-between items-center flex-col p-3 cursor-none relative">
      <div className="rounded-xl w-[90%] h-48 overflow-hidden my-3 mx-auto">
        <img
          src={
            "https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"image"}
          className="w-full h-48 object-cover"
        />
      </div>
      <h1 className="text-xl md:text-3xl font-bold w-full p-3 ">Hover Me</h1>
      <p className=" px-3 pb-3 text-start">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui
        illo consequatur delectus repellat dignissimos soluta incidunt! Iste ab
        animi nes
      </p>

      <CustomCursor className="scale-100">
        <NameTag name="Ankush" src="/avatars/01.png" />
      </CustomCursor>
    </div>
  )
}
