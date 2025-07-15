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
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getCardPosition = (index: number) => {
    const baseDelay = 0.2;
    return `${index * baseDelay}s`;
  };

  return (
    <div className="w-full">
      {/* Active card positioned at top */}
      <div
        className={`transition-all duration-700 mb-24 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: getCardPosition(activeIndex) }}
      >
        <div className="relative min-h-[500px] px-8">
          {/* Card positioned to align with selected year */}
          <div 
            className="absolute transform -translate-x-1/2 transition-all duration-500 ease-in-out"
            style={{ 
              left: `${Math.max(14, Math.min(86, (activeIndex / (items.length - 1)) * 100))}%`,
              width: 'max-content',
              maxWidth: '28rem'
            }}
          >
            <Card className="p-6 md:p-8 border border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col gap-6">
                {/* Image */}
                {items[activeIndex].image && (
                  <div className="w-full">
                    <div className="rounded-xl overflow-hidden bg-gray-200 aspect-[4/2.5]">
                      <img 
                        src={items[activeIndex].image} 
                        alt={items[activeIndex].title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                )}
                
                {/* Text content */}
                <div className="flex-1">
                  <div className="text-2xl md:text-3xl font-light text-primary mb-2">
                    {items[activeIndex].year}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                    {items[activeIndex].title}
                  </h3>
                  <p className="text-base md:text-lg text-primary/80 leading-relaxed">
                    {items[activeIndex].description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Timeline line with integrated dots */}
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center relative min-w-[800px]">
          {/* Years positioned above */}
          <div className="absolute top-0 left-0 right-0 flex items-center">
            {items.map((item, index) => (
              <div key={index} className="flex items-center flex-1">
                {/* Line segment before dot (except for first item) */}
                {index > 0 && (
                  <div className="flex-1"></div>
                )}
                
                {/* Year centered with dot */}
                <div className="flex justify-center">
                  <div 
                    className={`text-base font-medium transition-all duration-300 ${
                      activeIndex === index 
                        ? 'text-primary scale-110' 
                        : 'text-primary/60 group-hover:text-primary/80'
                    }`}
                  >
                    {item.year}
                  </div>
                </div>
                
                {/* Line segment after dot (except for last item) */}
                {index < items.length - 1 && (
                  <div className="flex-1"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Continuous horizontal line with dots */}
          <div className="flex items-center w-full mt-8">
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-center flex-1">
                {/* Line segment before dot (except for first item) */}
                {index > 0 && (
                  <div className="flex-1 h-0.5 bg-primary/20"></div>
                )}
                
                {/* Dot */}
                <div className="relative flex flex-col items-center cursor-pointer group">
                  {/* Timeline dot */}
                  <div 
                    className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 z-10 ${
                      activeIndex === index 
                        ? 'bg-primary scale-150' 
                        : 'bg-primary/40 hover:bg-primary/60'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  ></div>
                </div>
                
                {/* Line segment after dot (except for last item) */}
                {index < items.length - 1 && (
                  <div className="flex-1 h-0.5 bg-primary/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 