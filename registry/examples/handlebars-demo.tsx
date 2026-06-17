import { Handlebars } from "../ui/handlebars"

export default function HandlebarsDemo() {
  return (
    <div className="w-full h-64 flex justify-center items-center rounded-lg p-4">
      <Handlebars>
        <span className="text-6xl text-yellow-400 md:text-6xl font-extrabold tracking-tighter">
          DRAG ME
        </span>
      </Handlebars>
    </div>
  )
}
