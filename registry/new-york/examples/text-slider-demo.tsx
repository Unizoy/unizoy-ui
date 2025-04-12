import { TextSlider } from "@/registry/new-york/ui/text-slider"

export default function TextSliderDemo() {
  return (
    <div className="flex flex-col text-4xl md:text-5xl lg:text-7xl">
      <TextSlider start="top 90%" end="top" duration={0.5} translateX={10}>
        <div>Hello world !</div>
      </TextSlider>
      <TextSlider start="top 90%" end="top" popFrom="up" duration={0.5} translateX={-10}>
        <span>Slide like this.</span>
      </TextSlider>
    </div>
  )
}
