import { TypeWriter } from "@/registry/default/ui/typewriter"

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
      staticText={StaticTextWithClasses}
      textArray={DynamicTextWithClasses}
    />
  )
}
