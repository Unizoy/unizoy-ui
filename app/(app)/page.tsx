import HeroSection from "@/components/hero-section"
import HeroSection2 from "@/components/hero-section-2"
import HeroGridSection from "@/components/hero-grid-section"
import HeroVideoGrid from "@/components/hero-video-grid"
import { TextHoverEffect } from "@/registry/ui/text-hover-effect"
import Motto from "@/components/hero-bulg-out"
import HeroRythem from "@/components/hero-rythemic"

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <HeroVideoGrid />
      <HeroSection2 />
      <HeroGridSection />
      <HeroRythem />
      <section className="container-wrapper">
        <TextHoverEffect text="UNIZOY" />
      </section>
    </>
  )
}
