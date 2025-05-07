import { ScrollingCards } from "@/registry/ui/scrolling-cards"

export default function () {
  const cards = [
    {
      card: (
        <Card
          imgSrc="/examples/scrolling-card-1.png"
          title="Card 1"
          description="Reach fot the stars"
        />
      ),
      rotate: 20,
    },
    {
      card: (
        <Card
          imgSrc="/examples/scrolling-card-2.png"
          title="Card 2"
          description="Reach fot the stars"
        />
      ),
      rotate: -5,
    },
    {
      card: (
        <Card
          imgSrc="/examples/scrolling-card-3.png"
          title="Card 3"
          description="Reach fot the stars"
        />
      ),
      rotate: 0,
    },
    {
      card: (
        <Card
          imgSrc="/examples/scrolling-card-4.png"
          title="Card 4"
          description="Reach fot the stars"
        />
      ),
      rotate: 5,
    },
    {
      card: (
        <Card
          imgSrc="/examples/scrolling-card-5.png"
          title="Card 5"
          description="Reach fot the stars"
        />
      ),
      rotate: -20,
    },
  ]
  return (
    <div className="w-full">
      <section className="h-40 w-full bg-black flex justify-center items-center text-white text-2xl">
        {" "}
        Scroll to animate
      </section>

      <ScrollingCards cards={cards} cardWidth={300} animationLength={500} />
    </div>
  )
}
interface CardProps {
  title: string
  description: string
  imgSrc: string
  alt?: string
}

const Card = ({
  title,
  description,
  imgSrc,
  alt = "Card image",
}: CardProps) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg dark:shadow-none border dark:border dark:border-gray-700 hover:shadow-xl dark:hover:border-gray-600">
      <div className="p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="aspect-w-4 aspect-h-3 w-full">
          <img
            src={imgSrc}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}
