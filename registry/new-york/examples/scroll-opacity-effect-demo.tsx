import { ScrollOpacityEffect } from "@/registry/new-york/ui/scroll-opacity-effect"

export default function TextHoverEffectDemo() {
  return (
    <div className="w-full h-full">
      <ScrollOpacityEffect
        className="flex-1 items-center my-40 mx-auto w-5/6 md:w-1/2"
        animation={{
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        }}
      >
        <p className="w-full">
          A couple of college graduates, fresh out of university, left behind
          promising opportunities to pursue a bigger vision. They founded Unizoy
          - not just a web agency, but a family - where clients, even without
          technical knowledge, feel secure and understood.
        </p>
      </ScrollOpacityEffect>
    </div>
  )
}
