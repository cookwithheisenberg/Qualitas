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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getCardPosition = (index: number) => {
    const baseDelay = 0.2;
    return `${index * baseDelay}s`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length, getCardPosition]);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>
      
      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: getCardPosition(index) }}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>
            
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ${index % 2 === 1 ? 'md:order-first' : ''}`}>
              <Card className="p-6 md:p-8 border border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Text content */}
                  <div className="flex-1">
                    <div className="text-2xl md:text-3xl font-light text-primary mb-2">{item.year}</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">{item.title}</h3>
                    <p className="text-base md:text-lg text-primary/80 leading-relaxed">{item.description}</p>
                  </div>
                  
                  {/* Image */}
                  {item.image && (
                    <div className="md:w-48 md:flex-shrink-0">
                      <div className="rounded-xl overflow-hidden bg-gray-200 aspect-[4/3]">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 