import { TypeWriter } from "@/registry/new-york/ui/typewriter"

export default function TypeWriterDemo() {
  const StaticTextWithClasses = [
    { text: "We are" },
    { text: "Unizoy", className: "text-green-500" },
  ]
  const DynamicTextWithClasses = [
    { text: "Passionately", className: "text-blue-500" },
    { text: "Eagerly", className: "text-blue-500" },
  ]
  return (
    <TypeWriter
      className=" text-xl  lg:text-5xl"
      staticText={StaticTextWithClasses}
      textArray={DynamicTextWithClasses}
    />
  )
}
