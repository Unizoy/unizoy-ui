import {TextSlider} from  "@/registry/new-york/ui/text-slider"

export default function TextSliderDemo(){


return(
    <>
    <TextSlider stagger={0.5} start="top 90%" end="top">
     <div>Hello world !</div>
     <span>Slide like this.</span>  
    </TextSlider>
    </>
)

}