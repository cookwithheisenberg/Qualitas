"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    
    // Scroll to center the selected dot
    const timelineContainer = document.querySelector('.timeline-container');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineContainer && timelineItems[index]) {
      const containerWidth = timelineContainer.clientWidth;
      const itemElement = timelineItems[index] as HTMLElement;
      const itemLeft = itemElement.offsetLeft;
      const itemWidth = itemElement.offsetWidth;
      
      const scrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);
      
      timelineContainer.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const [cardPosition, setCardPosition] = useState(0);

  // Calculate card position based on active index
  const getCardPosition = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems[activeIndex]) {
      const itemElement = timelineItems[activeIndex] as HTMLElement;
      const timelineContainer = document.querySelector('.timeline-container');
      
      if (!timelineContainer) return 0;
      
      const containerRect = timelineContainer.getBoundingClientRect();
      const itemRect = itemElement.getBoundingClientRect();
      const cardWidth = 320; // w-80 = 320px
      
      // Calculate the center of the selected item relative to the container
      const itemCenter = itemRect.left - containerRect.left + (itemRect.width / 2);
      
      // Center the card on the selected dot
      const centeredPosition = itemCenter - (cardWidth / 2);
      
      // Ensure card doesn't go outside container bounds
      const containerWidth = containerRect.width;
      const maxPosition = containerWidth - cardWidth;
      const minPosition = 0;
      
      return Math.max(minPosition, Math.min(centeredPosition, maxPosition));
    }
    return 0;
  };

  // Update card position when active index changes
  useEffect(() => {
    const updatePosition = () => {
      setCardPosition(getCardPosition());
    };
    
    // Small delay to ensure DOM is updated
    const timer = setTimeout(updatePosition, 100);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="w-full">
      {/* Content Card */}
      <div className="w-full px-4 md:px-8 mb-8 relative">
        <div 
          className="transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(${cardPosition}px)`,
            width: '320px'
          }}
        >
                              <Card className="p-6 md:p-8 rounded-xl shadow-sm border-primary/10 w-80">
            <div className="flex flex-col items-start gap-4">
              {/* Header */}
              <div className="w-full text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                  {items[activeIndex].title}
                </h3>
              </div>
              {/* Image */}
              {items[activeIndex].image && (
                <div className="w-full">
                  <img
                    src={items[activeIndex].image}
                    alt={items[activeIndex].title}
                    className="w-full h-32 md:h-40 rounded-lg object-cover border border-primary/10"
                  />
                </div>
              )}
              {/* Content */}
              <div className="w-full text-left">
                <p className="text-base text-primary/80 leading-relaxed line-clamp-5" style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {items[activeIndex].description}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full overflow-x-auto pb-8 timeline-container">
        <div className="flex min-w-max px-4 md:px-8">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-primary/20 mx-4 md:mx-8 z-10" />
          
          {/* Timeline Items */}
          <div className="flex gap-8 md:gap-12 relative z-10">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[200px] md:min-w-[240px] timeline-item relative"
                style={{ minHeight: 96 }} // enough height for year, dot, label
              >
                {/* Year */}
                <div className={`text-lg md:text-xl font-semibold mb-2 ${index === activeIndex ? 'text-[#0A2342]' : 'text-primary/60'}`}>
                  {item.year}
                </div>
                {/* Dot - absolutely positioned over the line */}
                <div className="relative w-full flex justify-center" style={{ height: 32 }}>
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 cursor-pointer z-20 ${
                      index === activeIndex
                        ? 'bg-[#0A2342] border-[#0A2342] shadow-lg scale-125'
                        : 'bg-white border-primary/40 hover:border-primary/60'
                    }`}
                    onClick={() => handleDotClick(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${item.year} - ${item.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleDotClick(index);
                      }
                    }}
                  />
                </div>
                {/* Label */}
                <div className="text-sm md:text-base font-medium text-primary mt-2 text-center">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 