import {
  CustomCursor,
  CursorIcon,
  NameTag,
} from "@/registry/default/ui/custom-pointer"

export default function CardWithCustomCursor() {
  return (
    <div className="w-64 h-96 border rounded-xl bg-white flex justify-between items-center flex-col p-3 cursor-none relative">
      <div>
        <img
          src="https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="df"
        />
      </div>
      <p className="text-black">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui
        illo consequatur delectus repellat dignissimos soluta incidunt! Iste ab
        animi nes
      </p>

      <CustomCursor className="scale-100">
        <CursorIcon className="relative">
          <div className="w-8 h-8 rounded-[100%] animate-ping bg-red-400 ">

          </div>
          <div className="w-4 h-4 rounded-[100%] bg-green-400 animate-pulse absolute top-0 left-0 transform translate-x-[50%] translate-y-[50%] "></div>
        </CursorIcon>
        <NameTag name="Ankush" src="/avatars/01.png" />
      </CustomCursor>
    </div>
  )
}
