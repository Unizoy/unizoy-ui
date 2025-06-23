import { ImageTrail } from "@/registry/ui/image-trail"

export default function ImageTrailDemo() {
  const imageUrls = [
    "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
    "https://plus.unsplash.com/premium_photo-1672363353887-d5a9d1a3c8c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1658397966058-d1d252892754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1678790910467-88db70ab008e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1673561556312-369de6f56032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1734027870965-a172e76582c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzh8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1740520224737-9838d33c2fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1741091742846-99cca6f6437b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1741298856762-1ff2f1204bc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741509541812-5d8f3e96df23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741571530246-227ba4024cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741484730838-d8cc2e4a9bf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1667428818562-fc8379f23bfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1741526798351-50eeb46b2a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1686600889814-1c9494b45e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  ].map((url) => `${url}?auto=format&fit=crop&w=400&q=80`)
  return (
    <div className="w-full h-[500px]">
      <ImageTrail
        images={imageUrls}
        text="Hover Magic"
        duration={1}
        spawnInterval={50}
      />
    </div>
  )
}
