"use client";

import { useState } from "react";
import { getCaseStudiesByCategory, getRecentCaseStudies } from "@/lib/caseStudies";

export default function NewsInsights() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  // Get case studies by category
  const mostRecentCards = getRecentCaseStudies(4);
  const qualitasNewsCards = getCaseStudiesByCategory("News").slice(0, 4);
  const marketInsightsCards = getCaseStudiesByCategory("Insights").slice(0, 4);
  const educationCards = getCaseStudiesByCategory("Education").slice(0, 4);
  const cpdProgramCards = getCaseStudiesByCategory("CPD Program").slice(0, 4);
  const esgCards = getCaseStudiesByCategory("ESG").slice(0, 4);

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start justify-between pt-16 md:pt-24 pb-8 md:pb-16 gap-8 md:gap-0 px-4 md:px-8">
        {/* Left: Label */}
        <div className="flex-1 flex flex-col items-start justify-start">
          <span className="label-md mb-2 md:mb-0 mt-2 md:mt-4">News & Insights</span>
        </div>
        {/* Right: Large Heading */}
        <div className="flex-[2] flex flex-col items-end justify-start">
          <h1 className="headline-lg text-primary text-right leading-tight max-w-2xl">
            Stay ahead with the latest news, insights, and research from <span className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4">Qualitas</span>.
          </h1>
        </div>
      </section>

      {/* Most Recent Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="title-md">Most Recent</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mostRecentCards.map((card) => (
            <InsightCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* Content Type Filters */}
      <section className="w-full max-w-screen-2xl mx-auto mt-12 md:mt-16 pb-4 md:pb-6 px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-3">
          {["All", "White Papers", "News", "Insights", "Research", "Videos", "Podcasts"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                selectedFilter === filter
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-primary border border-primary/30 hover:bg-primary/5 hover:border-primary/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Qualitas News Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="title-md">Qualitas News</h2>
          <a href="#" className="text-primary/60 text-base font-medium hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualitasNewsCards.map((card) => (
            <InsightCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="title-md">Market Insights</h2>
          <a href="#" className="text-primary/60 text-base font-medium hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketInsightsCards.map((card) => (
            <InsightCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="title-md">Education</h2>
          <a href="#" className="text-primary/60 text-base font-medium hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationCards.map((card) => (
            <InsightCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* CPD Program Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="title-md">CPD Program</h2>
          <a href="#" className="text-primary/60 text-base font-medium hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cpdProgramCards.map((card) => (
            <InsightCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* ESG Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="title-md">ESG</h2>
          <a href="#" className="text-primary/60 text-base font-medium hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {esgCards.map((card) => (
            <InsightCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}

// Insight Card Component (reused from homepage)
function InsightCard({ 
  category, 
  title, 
  image,
  slug
}: {
  category: string;
  title: string;
  image: string;
  slug: string;
}) {
  return (
    <a href={`/case-study/${slug}`} className="block">
      <div className="bg-white rounded-2xl border border-primary/30 flex flex-col transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
        <div className="relative rounded-t-2xl overflow-hidden bg-gray-200 aspect-[16/9] border-b border-primary/20">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {/* Strategy tag on top left */}
          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-lg">
            {category}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <span className="text-xs font-semibold text-primary/60 mb-2 uppercase tracking-wide">{category}</span>
          <h3 className="text-lg font-bold text-primary">{title}</h3>
        </div>
      </div>
    </a>
  );
} 