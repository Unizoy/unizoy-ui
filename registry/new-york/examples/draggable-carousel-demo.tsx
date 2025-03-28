import DraggableCarousel, {
  CarouselItem,
} from "@/registry/new-york/ui/draggable-carousel"

export default function DraggableCarouselDemo() {
  const carouselItems: CarouselItem[] = [
    {
      title: "Mountain Retreat",
      description: "A peaceful mountain getaway surrounded by nature",
      imageUrl:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800",
    },
    {
      title: "Ocean Vista",
      description: "Breathtaking views of the endless ocean horizon",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800",
    },
    {
      title: "Urban Adventure",
      description: "Explore the vibrant city life and culture",
      imageUrl:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800",
    },
    {
      title: "Forest Escape",
      description: "Get lost in the tranquility of ancient forests",
      imageUrl:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800",
    },
    {
      title: "Desert Oasis",
      description: "Experience the mystique of endless sand dunes",
      imageUrl:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800",
    },
    {
      title: "Mountain Retreat",
      description: "A peaceful mountain getaway surrounded by nature",
      imageUrl:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800",
    },
    {
      title: "Ocean Vista",
      description: "Breathtaking views of the endless ocean horizon",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800",
    },
    {
      title: "Urban Adventure",
      description: "Explore the vibrant city life and culture",
      imageUrl:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800",
    },
    {
      title: "Forest Escape",
      description: "Get lost in the tranquility of ancient forests",
      imageUrl:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800",
    },
    {
      title: "Desert Oasis",
      description: "Experience the mystique of endless sand dunes",
      imageUrl:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800",
    },
  ]
  return (
    <DraggableCarousel items={carouselItems} friction={0.9} cardWidth="200px" />
  )
}
