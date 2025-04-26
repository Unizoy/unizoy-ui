import HeroSection from "@/components/hero-section"
import HeroSection2 from "@/components/hero-section-2"
import { TextHoverEffect } from "@/registry/new-york/ui/text-hover-effect"
import HeroGridSection from "@/components/hero-grid-section"
import HeroRythem from "@/components/hero-rythemic"

export default function IndexPage() {
  return (
    <>
      {/* <Announcement /> */}
      <HeroSection />
      <HeroSection2 />
      <HeroGridSection />
      <HeroRythem />
      <TextHoverEffect text="unizoy" />
    </>
  )
}
