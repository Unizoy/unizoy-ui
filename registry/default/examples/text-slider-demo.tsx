import { TextSlider } from "@/registry/default/ui/text-slider";

export default function TextSliderDemo() {
  return (
    <>
      <TextSlider stagger={0.5} start="top 90%" end="top" className="">
        <div>Hello world !</div>
        <div className="text-3xl">Slide like this.</div>
        <p>paragraphy</p>
      </TextSlider>
    </>
  );
}
