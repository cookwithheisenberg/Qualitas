import { Card } from "@/components/ui/card";
import { Parallax } from "react-scroll-parallax";

export function StatsRow() {
  return (
    <section className="w-full flex justify-center bg-white py-8 md:py-12 mt-14 md:mt-[120px]">
      <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
      <div className="w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-0 px-4 md:px-8 relative z-10">
        {/* QAL Card */}
        <Card className="flex flex-col justify-start bg-[#F5F7FA] rounded-xl border-0 p-4 md:p-6 min-h-[120px] md:min-h-[140px] shadow-sm w-full">
          <span className="text-base font-semibold text-primary mb-1">QAL</span>
          <div className="flex flex-row items-end gap-2 mb-1">
            <span className="text-2xl font-light text-primary">A$2.34</span>
            <span className="text-base text-green-600 font-medium">↑ 1.6%</span>
          </div>
          <span className="text-xs text-primary/70">Last updated: 11:12am 24 May 2025</span>
          <a href="#" className="text-accent underline text-xs mt-2">View more market data</a>
        </Card>
        {/* $9.2bn Card */}
        <Card className="flex flex-col justify-start bg-primary rounded-xl border-0 p-4 md:p-6 min-h-[120px] md:min-h-[140px] shadow-sm w-full">
          <span className="text-4xl font-light text-white mb-2">$9.2bn</span>
          <span className="text-base text-white/90 font-medium">Funds under management</span>
        </Card>
        {/* 83% Card */}
        <Card className="flex flex-col justify-start bg-[#7C8496] rounded-xl border-0 p-4 md:p-6 min-h-[120px] md:min-h-[140px] shadow-sm w-full">
          <span className="text-4xl font-light text-white mb-2">83%</span>
          <span className="text-base text-white/90 font-medium">Institutional capital composition</span>
          <span className="text-sm text-white/80 mt-1">Extensive global institutional<br/>and wholesale investor base</span>
        </Card>
        {/* 77% Card */}
        <Card className="flex flex-col justify-start bg-[#7C8496] rounded-xl border-0 p-4 md:p-6 min-h-[120px] md:min-h-[140px] shadow-sm w-full">
          <span className="text-4xl font-light text-white mb-2">77%</span>
          <span className="text-base text-white/90 font-medium">Allocation to residential</span>
          <span className="text-sm text-white/80 mt-1">Driven by robust<br/>investment fundamentals</span>
        </Card>
        {/* $27bn + 48/264 Screenshot-accurate Card */}
        <Card className="relative flex flex-col md:flex-row items-center bg-primary rounded-xl border-0 p-4 md:p-8 min-h-[120px] md:min-h-[220px] shadow-sm overflow-visible col-span-1 md:col-span-2 w-full">
          {/* Left: $27bn */}
          <div className="flex flex-col justify-center items-start flex-1 min-w-[220px] h-full">
            <span className="text-5xl font-light text-white mb-2">$27bn</span>
            <span className="text-xl text-white/90 font-medium">Total value of investments</span>
          </div>
          {/* Center: Pill/Slider with dots and lines */}
          <div className="relative flex flex-col items-center justify-center h-[160px] w-16">
            {/* Pill */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-8 h-[160px] bg-white/30 rounded-full" />
            {/* Top dot and line */}
            <div className="absolute left-1/2 top-[32px] -translate-x-1/2 flex items-center">
              <div className="w-6 h-6 bg-white rounded-full z-10" />
              <div className="h-0.5 w-[60px] bg-white ml-0.5" />
            </div>
            {/* Middle dot and line */}
            <div className="absolute left-1/2 top-[96px] -translate-x-1/2 flex items-center">
              <div className="w-6 h-6 bg-white rounded-full z-10" />
              <div className="h-0.5 w-[60px] bg-white ml-0.5" />
            </div>
          </div>
          {/* Right: Stats aligned with dots, spaced out */}
          <div className="flex flex-col justify-between items-start flex-1 min-w-[220px] h-full pl-16 relative">
            <div className="absolute left-0 top-[18px] flex flex-col items-start">
              <span className="text-5xl font-light text-white leading-none mb-1">48</span>
              <span className="text-xl text-white/90 font-medium leading-tight">Total equity investments</span>
            </div>
            <div className="absolute left-0 top-[82px] flex flex-col items-start">
              <span className="text-5xl font-light text-white leading-none mb-1">264</span>
              <span className="text-xl text-white/90 font-medium leading-tight">Total credit investments</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
} 