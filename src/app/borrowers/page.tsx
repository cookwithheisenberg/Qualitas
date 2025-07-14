"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeroParallax } from "@/components/HeroParallax";
import { Parallax } from "react-scroll-parallax";

export default function Borrowers() {
  const [selectedState, setSelectedState] = useState("All");

  // Shuffled images from public folder
  const images = [
    "/hero-placeholder.jpg",
    "/aboutus_banner.jpg",
    "/Meet Our Team.jpg",
    "/Person 1.jpg",
    "/Person 2.jpg",
    "/Person 3.jpg",
    "/placeholder.avif",
  ];

  const loanProducts = [
    {
      title: "Construction finance",
      description: "Flexible funding for residential and commercial construction projects with progressive drawdowns and competitive terms.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M3 21h18M3 7h18M3 3h18M7 21V7M17 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Investment loans",
      description: "Tailored financing for commercial and residential investment properties with flexible structures and competitive rates.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Bridging finance",
      description: "Short-term funding solutions for time-sensitive opportunities, refinancing, and settlement bridging requirements.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Development finance",
      description: "Comprehensive funding for large-scale residential and commercial development projects with staged release structures.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M3 21h18M3 7h18M3 3h18M7 21V7M17 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Acquisition finance",
      description: "Fast-track funding for property acquisitions with competitive terms and streamlined approval processes.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Refinancing",
      description: "Refinancing solutions to optimize existing debt structures, unlock equity, and improve cash flow positions.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M3 21h18M3 7h18M3 3h18M7 21V7M17 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  const caseStudies = [
    {
      state: "NSW",
      title: "Sunny heights: A case study in urban living",
      subheading: "$45M - $250M",
      description: "A $250m senior debt facility helped to fund construction of West End, a development comprising 377 residential apartments across two towers in Sydney's inner west.",
      image: images[0],
    },
    {
      state: "QLD",
      title: "Brisbane waterfront: Luxury living redefined",
      subheading: "$30M - $180M",
      description: "A $180m development finance facility supported the construction of premium waterfront apartments in Brisbane's fastest-growing precinct.",
      image: images[1],
    },
    {
      state: "VIC",
      title: "Melbourne central: Mixed-use excellence",
      subheading: "$60M - $320M",
      description: "A $320m construction finance facility enabled the development of a mixed-use precinct combining residential, retail, and commercial spaces.",
      image: images[2],
    },
    {
      state: "WA",
      title: "Perth innovation: Sustainable development",
      subheading: "$25M - $150M",
      description: "A $150m investment loan supported the development of Perth's first carbon-neutral residential community with integrated smart technology.",
      image: images[3],
    },
  ];

  const teamMembers = [
    {
      name: "Alex Morgan",
      title: "Senior Lending Manager",
      state: "NSW",
      bio: "Alex brings 20+ years of experience in real estate credit investing, with a track record in loan origination, portfolio management, and risk oversight across Australia's property markets.",
      image: images[4],
    },
    {
      name: "George",
      title: "Senior Lending Specialist",
      state: "VIC",
      bio: "George specializes in complex financing structures and has extensive experience in development finance, working with clients across Victoria's most dynamic property markets.",
      image: images[5],
    },
    {
      name: "James Wilson",
      title: "Senior Lending Specialist",
      state: "QLD",
      bio: "James leads our Queensland lending operations with deep expertise in construction finance and investment property financing across the state's growing markets.",
      image: images[6],
    },
  ];

  // Team member card component (copied from Our Team page)
  function TeamMemberCard({ name, title, image, description, linkedin }: { name: string; title: string; image: string; description: string; linkedin: string }) {
    return (
      <div className="relative group w-full h-[28rem] md:h-[33rem] flex flex-col items-center justify-end overflow-hidden rounded-xl shadow-sm border border-primary/10 bg-white">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 z-10 bg-[#0A2342]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-0 text-white pointer-events-none">
          <div className="w-full flex flex-col items-start px-5 pb-24 gap-2 pointer-events-auto">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white bg-transparent text-white font-medium rounded-lg px-5 py-2 text-sm hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              tabIndex={0}
              aria-label={`View ${name}'s LinkedIn`}
            >
              View LinkedIn
            </a>
            <div className="text-base opacity-90 text-left max-w-xs">
              {description}
            </div>
          </div>
        </div>
        {/* Name and title inside image, left-aligned at bottom */}
        <div className="absolute left-0 bottom-0 z-20 w-full px-5 pb-4 pt-8 flex flex-col items-start bg-gradient-to-t from-black/60 via-black/0 to-transparent">
          <div className="text-base md:text-xl font-semibold text-white drop-shadow-md mb-0">{name}</div>
          <div className="text-sm md:text-lg text-white/80 drop-shadow mb-1">{title}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroParallax 
        heading="Flexible funding to take you to the next level"
        body="As a leading alternative lender, we help your vision become reality with finance that's fast, flexible and more personalised."
        imageSrc={images[0]}
        overlay={true}
      />

      {/* Loan Products and Services Section */}
      <section className="w-full flex justify-center bg-white py-8 md:py-12 mt-14 md:mt-[120px]">
        <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
        <div className="w-full max-w-screen-2xl px-4 md:px-8 relative z-10">
          <h2 className="title-md mb-8">Loan products and services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProducts.map((product, index) => (
              <Card key={index} className="flex flex-col items-start p-6 rounded-xl shadow-sm h-full transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
                <div className="text-accent mb-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{product.title}</h3>
                <p className="body-md text-primary/80">{product.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full flex justify-center bg-white py-0 mt-14 md:mt-[120px]">
        <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
        <div className="w-full max-w-screen-2xl px-4 md:px-8 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="title-md">Case studies</h2>
            <div className="flex items-center gap-2">
              <label htmlFor="state-filter" className="body-sm font-medium text-primary">State:</label>
              <select
                id="state-filter"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="border border-primary/30 rounded-lg px-3 py-1 body-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="All">All</option>
                <option value="NSW">NSW</option>
                <option value="QLD">QLD</option>
                <option value="VIC">VIC</option>
                <option value="WA">WA</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies
              .filter(study => selectedState === "All" || study.state === selectedState)
              .map((study, index) => (
                <Card key={index} className="flex flex-col rounded-xl shadow-sm overflow-hidden transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent p-0" tabIndex={0}>
                  <div className="relative aspect-[16/9] w-full rounded-t-xl overflow-hidden flex-shrink-0">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-accent text-white text-xs font-medium px-2 py-1 rounded">
                      {study.state}
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">{study.title}</h3>
                    <p className="text-sm font-medium text-accent mb-2">{study.subheading}</p>
                    <p className="text-sm text-primary/80 flex-1">{study.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Meet the Lending Team Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Section Title & Paragraph */}
          <div className="flex flex-col items-start justify-start border-t border-primary/20 pt-6 md:col-span-1 mb-6 md:mb-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Meet the lending team</span>
            <p className="body-md text-primary/80">
              Our lending team brings decades of experience in real estate credit, development, and investment. With deep market knowledge and a commitment to client success, they deliver tailored funding solutions and expert guidance for every project.
            </p>
          </div>
          {/* Team Member 1 */}
          <TeamMemberCard
            name="Alex Morgan"
            title="Senior Lending Manager"
            image={images[4]}
            description="Alex brings 20+ years of experience in real estate credit investing, with a track record in loan origination, portfolio management, and risk oversight across Australia's property markets."
            linkedin="#"
          />
          {/* Team Member 2 */}
          <TeamMemberCard
            name="George"
            title="Senior Lending Specialist"
            image={images[5]}
            description="George specializes in complex financing structures and has extensive experience in development finance, working with clients across Victoria's most dynamic property markets."
            linkedin="#"
          />
          {/* Team Member 3 */}
          <TeamMemberCard
            name="James Wilson"
            title="Senior Lending Specialist"
            image={images[6]}
            description="James leads our Queensland lending operations with deep expertise in construction finance and investment property financing across the state's growing markets."
            linkedin="#"
          />
        </div>
      </section>
    </div>
  );
} 