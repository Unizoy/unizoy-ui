'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';

export interface CarouselItem {
  title: string;
  description: string;
  imageUrl: string;
}

gsap.registerPlugin(Draggable);

interface DraggableCarouselProps {
  items: CarouselItem[];
  /**
   * keep this number between 0-1 
   */
  friction?:number;
  cardWidth?:string;
}

export default function DraggableCarousel({ items,friction=0.92,cardWidth }: DraggableCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);
  
  // Tracking for custom inertia
  const lastPositionsRef = useRef<Array<{ time: number, x: number }>>([]);
  const isThrowingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  useGSAP(() => {
    if (!carouselRef.current || !wrapperRef.current) return;

    const carousel = carouselRef.current;
    const wrapper = wrapperRef.current;

    // Calculate the total width of all cards
    const totalWidth = wrapper.scrollWidth;
    const carouselWidth = carousel.offsetWidth;
    const maxX = -(totalWidth - carouselWidth);

    // Clear position tracking array
    lastPositionsRef.current = [];
    
    // Create draggable instance
    const draggable = Draggable.create(wrapper, {
      type: "x",
      bounds: {
        minX: maxX,
        maxX: 0
      },
      // Disable GSAP's built-in inertia
      inertia: false,
      dragResistance: 0,
      edgeResistance: 0.9,
      onDragStart: function() {
        // Clear any ongoing inertia animation
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
        
        isThrowingRef.current = false;
        lastPositionsRef.current = [];
      },
      onDrag: function() {
        // Track position and time for velocity calculation
        const currentX = this.x;
        lastPositionsRef.current.push({
          time: Date.now(),
          x: currentX
        });
        
        // Keep only the last 10 positions for accurate velocity calculation
        if (lastPositionsRef.current.length > 10) {
          lastPositionsRef.current.shift();
        }
      },
      onDragEnd: function() {
        // Calculate velocity from tracked positions
        const positions = lastPositionsRef.current;
        if (positions.length < 2) return;
        
        const newest = positions[positions.length - 1];
        const oldest = positions[Math.max(0, positions.length - 6)]; // Use ~5 positions for smoother velocity
        
        const timeDiff = newest.time - oldest.time;
        if (timeDiff === 0) return;
        
        // Calculate pixels per millisecond, then convert to pixels per frame
        const velocity = ((newest.x - oldest.x) / timeDiff) * 16.67; // ~60fps
        
        // Only apply inertia if there's significant velocity
        if (Math.abs(velocity) > 0.5) {
          applyInertia(velocity, this.x, maxX);
        }
      }
    })[0];
    
    draggableInstanceRef.current = draggable;
    
    // Custom inertia implementation
    const applyInertia = (initialVelocity: number, startX: number, minBound: number) => {
      let velocity = initialVelocity;
      let currentX = startX;
      // const friction =friction; // Adjust for more or less "slide" - lower = faster slowdown
      
      isThrowingRef.current = true;
      
      const animate = () => {
        if (Math.abs(velocity) < 0.5 || !isThrowingRef.current) {
          // Stop animation when velocity becomes very small
          isThrowingRef.current = false;
          animationFrameRef.current = null;
          
          // Snap back if out of bounds
          if (currentX > 0) {
            gsap.to(wrapper, { x: 0, duration: 0.3, ease: "power2.out" });
          } else if (currentX < minBound) {
            gsap.to(wrapper, { x: minBound, duration: 0.3, ease: "power2.out" });
          }
          
          return;
        }
        
        // Apply friction to slow down
        velocity *= friction;
        
        // Update position
        currentX += velocity;
        
        // Handle bouncing off boundaries
        if (currentX > 0) {
          // Bouncing off the start
          velocity *= -0.5;
          currentX = 0;
        } else if (currentX < minBound) {
          // Bouncing off the end
          velocity *= -0.5;
          currentX = minBound;
        }
        
        // Apply the new position
        if (wrapper) {
          gsap.set(wrapper, { x: currentX });
          
          // Allow Draggable to update its internal state
          if (draggableInstanceRef.current) {
            draggableInstanceRef.current.update();
          }
        }
        
        // Continue animation
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      // Start animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Cleanup function
    return () => {
      // Kill the draggable instance
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
        draggableInstanceRef.current = null;
      }
      
      // Cancel any ongoing animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  });

  // Allow interrupting the throw animation when user interacts
  useEffect(() => {
    const handleInterrupt = () => {
      if (isThrowingRef.current) {
        isThrowingRef.current = false;
      }
    };
    
    document.addEventListener('mousedown', handleInterrupt);
    document.addEventListener('touchstart', handleInterrupt);
    
    return () => {
      document.removeEventListener('mousedown', handleInterrupt);
      document.removeEventListener('touchstart', handleInterrupt);
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <div
        ref={wrapperRef}
        className="flex gap-6 p-4"
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{width:cardWidth??"300px"}}
            className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}