"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";

export function HeroParallax({
  heading = "Experts in real\nestate investment\nmanagement",
  body,
  imageSrc = "/hero-placeholder.jpg",
  overlay = true,
}: {
  heading?: string;
  body?: string;
  imageSrc?: string;
  overlay?: boolean;
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-start justify-start overflow-hidden bg-white">
      <Parallax speed={-20} className="absolute inset-0 w-full h-full z-0">
        <Image
          src={imageError ? "/hero-placeholder.jpg" : imageSrc}
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
          priority
          onError={() => setImageError(true)}
          onLoad={() => setImageLoaded(true)}
          sizes="100vw"
          className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </Parallax>
      {/* Overlay for text visibility */}
      {overlay && (
        <div className="absolute inset-0 w-full h-full bg-black/60 z-10 pointer-events-none" aria-hidden="true" />
      )}
      {/* EST. 2009 top right */}
      <span
        className="absolute z-20 text-white/80 text-lg md:text-xl font-normal tracking-wide right-8 md:right-24"
        style={{ top: "calc(160px + 4px)" }}
      >
        EST. 2009
      </span>
      <div
        className="relative z-20 flex flex-col items-start justify-start h-full w-full px-4 md:px-24"
        style={{ paddingTop: "160px" }}
      >
        <h1
          className="text-white text-[40px] md:text-[80px] font-light tracking-tight text-left max-w-5xl mb-4"
          style={{ lineHeight: 1.05 }}
        >
          {heading.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>
      </div>
      {body && (
        <div className="absolute bottom-0 right-0 w-full flex justify-end pb-12 md:pb-24 px-4 md:px-24 z-20 pointer-events-none">
          <p className="text-white/90 text-[18px] max-w-3xl whitespace-pre-line pointer-events-auto">{body}</p>
        </div>
      )}
    </section>
  );
} 