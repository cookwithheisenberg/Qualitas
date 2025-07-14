"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Borrowers() {
  const [selectedState, setSelectedState] = useState<string>("All");

  // Available images from public folder
  const availableImages = [
    "/placeholder.avif",
    "/hero-placeholder.jpg",
    "/aboutus_banner.jpg",
    "/Person 1.jpg",
    "/Person 2.jpg",
    "/Person 3.jpg",
    "/Meet Our Team.jpg",
  ];

  // Helper function to get random image
  const getRandomImage = () => {
    return availableImages[Math.floor(Math.random() * availableImages.length)];
  };

  // Loan products data
  const loanProducts = [
    {
      id: 1,
      title: "Construction Finance",
      description: "Flexible construction financing solutions for residential and commercial projects.",
      image: getRandomImage(),
      features: ["Up to 80% LVR", "Interest-only during construction", "Flexible drawdowns"]
    },
    {
      id: 2,
      title: "Development Finance",
      description: "Comprehensive development funding for large-scale residential projects.",
      image: getRandomImage(),
      features: ["Up to 75% LVR", "Project-based funding", "Expert guidance"]
    },
    {
      id: 3,
      title: "Bridge Finance",
      description: "Short-term bridging solutions for property acquisition and refinancing.",
      image: getRandomImage(),
      features: ["Quick approval", "Flexible terms", "Competitive rates"]
    }
  ];

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Sustainable Residential Development",
      description: "A 200-unit sustainable residential project in Melbourne's inner suburbs.",
      image: getRandomImage(),
      category: "Residential"
    },
    {
      id: 2,
      title: "Mixed-Use Commercial Project",
      description: "Innovative mixed-use development combining retail and office spaces.",
      image: getRandomImage(),
      category: "Commercial"
    },
    {
      id: 3,
      title: "Infrastructure Investment",
      description: "Large-scale infrastructure project supporting regional development.",
      image: getRandomImage(),
      category: "Infrastructure"
    }
  ];

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Lending Manager",
      image: "/Person 1.jpg",
      state: "NSW",
      description: "Sarah leads our NSW lending team with over 15 years of experience in commercial finance."
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Development Finance Specialist",
      image: "/Person 2.jpg",
      state: "VIC",
      description: "Michael specializes in development finance with expertise in large-scale residential projects."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "Construction Finance Manager",
      image: "/Person 3.jpg",
      state: "QLD",
      description: "Emma manages construction finance across Queensland with deep industry knowledge."
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Bridge Finance Specialist",
      image: "/Person 1.jpg",
      state: "WA",
      description: "David provides bridge finance solutions with quick turnaround times and flexible terms."
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Senior Credit Analyst",
      image: "/Person 2.jpg",
      state: "SA",
      description: "Lisa conducts thorough credit analysis ensuring robust risk management across all deals."
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Lending Operations Manager",
      image: "/Person 3.jpg",
      state: "TAS",
      description: "James oversees lending operations with focus on efficiency and customer service excellence."
    }
  ];

  // Filter team members by state
  const filteredTeamMembers = selectedState === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.state === selectedState);

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start justify-between pt-16 md:pt-24 pb-8 md:pb-16 gap-8 md:gap-0 px-4 md:px-8">
        {/* Left: Label */}
        <div className="flex-1 flex flex-col items-start justify-start">
          <span className="label-md mb-2 md:mb-0 mt-2 md:mt-4">Borrowers</span>
        </div>
        {/* Right: Large Heading */}
        <div className="flex-[2] flex flex-col items-end justify-start">
          <h1 className="headline-lg text-primary text-right leading-tight max-w-2xl">
            Flexible financing solutions for <span className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4">real estate</span> professionals.
          </h1>
        </div>
      </section>

      {/* Loan Products Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="title-md">Our Loan Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loanProducts.map((product) => (
            <Card key={product.id} className="flex flex-col transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
              <div className="relative rounded-t-xl overflow-hidden bg-gray-200 aspect-[16/9] border-b border-primary/20">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-primary mb-3">{product.title}</h3>
                <p className="body-md text-primary/80 mb-4 flex-1">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="body-sm text-primary/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="title-md">Case Studies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Card key={study.id} className="flex flex-col transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
              <div className="relative rounded-t-xl overflow-hidden bg-gray-200 aspect-[16/9] border-b border-primary/20">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  {study.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-primary mb-2">{study.title}</h3>
                <p className="body-md text-primary/80">{study.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Meet the Lending Team Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Section Title & Paragraph */}
          <div className="flex flex-col items-start justify-start border-t border-primary/20 pt-6 md:col-span-1 mb-6 md:mb-0">
            <span className="label-md mb-4">Meet the Lending Team</span>
            <p className="body-md text-primary/80">
              Our experienced lending team provides personalized service and expert guidance throughout your financing journey. With deep market knowledge and strong relationships, we ensure you get the best possible terms for your project.
            </p>
          </div>
          
          {/* Team Members Grid */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTeamMembers.map((member) => (
              <TeamMemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function TeamMemberCard({ 
  name, 
  title, 
  image, 
  state,
  description 
}: {
  name: string;
  title: string;
  image: string;
  state: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-primary/30 flex flex-col overflow-hidden transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group" tabIndex={0}>
      <div className="relative overflow-hidden bg-gray-200 aspect-[4/3]">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <p className="text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-primary">{name}</h3>
          <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-lg">
            {state}
          </span>
        </div>
        <p className="text-sm text-primary/70">{title}</p>
      </div>
    </div>
  );
} 