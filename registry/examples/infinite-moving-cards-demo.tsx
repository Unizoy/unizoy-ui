import InfiniteMovingCards from "@/registry/ui/infinite-moving-cards"
export default function InfiniteMovingCardsDemo() {
  const testimonials = [
    {
      quote:
        "Having been closely involved in the development of Unizoy UI, I can confidently say it’s a game‑changer for modern web projects. Its GSAP‑powered animations, React component structure, and TypeScript foundation make building sleek, high‑performance UIs a seamless experience. It’s not just a library, it’s a toolkit built with developers in mind.",
      name: "Ankush Jaiswal,",
      title: "Full Stack Developer",
    },
    {
      quote: "Haven't found any better open-source GSAP component library!",
      name: "Bhavya Patel",
      title: "Unizoy",
    },
    {
      quote:
        "Just copy and paste, and boom, your animated website is ready! I love how easy it is to create animations using Unizoy UI.",
      name: "Rajpurohit Vijesh",
      title: "Unizoy",
    },
    {
      quote:
        "Unizoy UI is very simple to use. I can add nice animations without writing too much code. It saves my time and works really well.",
      name: "Faizan Pathan",
      title: "Full Stack Developer",
    },
  ]
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  )
}
