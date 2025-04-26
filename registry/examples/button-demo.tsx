import Button from "@/registry/ui/button"

export default function ButtonDemo() {
  return (
    <div className="w-full">
      <DemoAllVariants />
    </div>
  )
}
const variants = [
  "pink",
  "yellow",
  "blue",
  "red",
  "purple",
  "green",
  "teal",
  "orange",
  "indigo",
  "emerald",
  "amber",
  "cyan",
  "lime",
  "fuchsia",
  "rose",
  "sky",
  "sunset",
  "ocean",
  "forest",
  "galaxy",
  "neon",
  "ember",
  "arctic",
  "candy",
] as const
const DemoAllVariants = () => {
  return (
    <div className="p-6">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {variants.map((variant) => (
          <div key={variant} className="flex justify-center">
            <Button variant={variant} intent="medium">
              {variant}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
