"use client";
import { ParallaxProvider } from "react-scroll-parallax";
 
export function ParallaxProviderClient({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
} 