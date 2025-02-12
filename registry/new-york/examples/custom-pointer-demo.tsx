import {
  CursorIcon,
  CustomCursor,
  NameTag,
} from "@/registry/new-york/ui/custom-pointer"

export default function Card() {
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
        <NameTag name="Ankush" src="/avatars/01.png" />
      </CustomCursor>
    </div>
  )
}


