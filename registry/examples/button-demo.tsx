import { Button, Button2, Button3 } from "@/registry/ui/button"

export default function ButtonDemo() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-3 justify-between items-center">
      <Button variant={"blue"}>Button</Button>
      <Button2 className="border" hoverColor="bg-green-600">
        Button2
      </Button2>
      <Button3 className="border">Button3</Button3>
    </div>
  )
}
