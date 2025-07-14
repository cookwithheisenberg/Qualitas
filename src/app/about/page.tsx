"use client";
import { HeroParallax } from "@/components/HeroParallax";
import { Card } from "@/components/ui/card";
import { Timeline } from "@/components/Timeline";
import { Parallax } from "react-scroll-parallax";

export default function About() {
  return (
    <>
      <HeroParallax
        heading="About us"
        body={`Qualitas is a leading ASX-listed Australian alternative investment manager with $9.2 billion1 of funds under management. We match global capital with attractive risk-adjusted investments in real estate private credit and real estate private equity through a range of investment solutions for institutional, wholesale and retail clients.\n\nSince 2008, we have been investing through market cycles to finance assets with a combined value of over $27 billion2 across real estate sectors. Our focus is on real estate private credit, opportunistic real estate private equity, income producing commercial real estate and build-to-rent residential.`}
        imageSrc="/aboutus_banner.jpg"
      />
      {/* Vision & Purpose Section */}
      <section className="w-full flex justify-center bg-white py-8 md:py-12">
        <div className="w-full max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="flex flex-col items-start p-4 md:p-6 rounded-xl shadow-sm h-full w-full">
              <h3 className="title-md mb-2">Vision</h3>
              <p className="body-md text-primary/80">A dominant, global, client-led investment manager generating best-in-class long term value, a magnet for talent.</p>
            </Card>
            <Card className="flex flex-col items-start p-4 md:p-6 rounded-xl shadow-sm h-full w-full">
              <h3 className="title-md mb-2">Purpose</h3>
              <p className="body-md text-primary/80">A leading, trusted investor delivering access to long-term returns through focused, responsible and sophisticated real asset strategies.</p>
            </Card>
          </div>
        </div>
      </section>
      {/* Our Journey Section */}
      <section className="w-full flex justify-center bg-white py-8 md:py-16">
        <div className="w-full max-w-screen-2xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="title-md mb-4">Our Journey</h2>
            <p className="body-md text-primary/80 max-w-2xl mx-auto">
              From our founding in 2008 to becoming a leading ASX-listed alternative investment manager, 
              discover the key milestones that have shaped Qualitas into what we are today.
            </p>
          </div>
          <Timeline 
            items={[
              {
                year: "2008",
                title: "Foundation",
                description: "Qualitas was founded with a vision to become a leading alternative investment manager, focusing on real estate private credit and private equity opportunities in Australia.",
                image: "/aboutus_banner.jpg"
              },
              {
                year: "2012",
                title: "First Fund Launch",
                description: "Successfully launched our first institutional fund, marking the beginning of our journey as a trusted investment partner for institutional clients.",
                image: "/aboutus_banner.jpg"
              },
              {
                year: "2015",
                title: "Market Expansion",
                description: "Expanded our investment strategies across multiple real estate sectors, including commercial, residential, and industrial properties.",
                image: "/aboutus_banner.jpg"
              },
              {
                year: "2018",
                title: "ASX Listing",
                description: "Achieved a major milestone with our ASX listing, providing retail investors access to our sophisticated real estate investment strategies.",
                image: "/aboutus_banner.jpg"
              },
              {
                year: "2021",
                title: "$5B FUM Milestone",
                description: "Reached $5 billion in funds under management, demonstrating strong growth and investor confidence in our investment approach.",
                image: "/aboutus_banner.jpg"
              },
              {
                year: "2024",
                title: "Global Recognition",
                description: "Now managing over $9.2 billion in funds, Qualitas has established itself as a dominant force in Australian alternative investments with a global reputation for excellence.",
                image: "/aboutus_banner.jpg"
              }
            ]}
          />
          </div>
        </section>
      {/* Our Commitment to ESG Section */}
      <section className="w-full flex justify-center bg-[#F5F7FA] py-8 md:py-16">
        <div className="w-full max-w-screen-2xl px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-4">
          {/* Left: ESG Image */}
          <div className="flex-1 w-full flex items-center justify-center">
            <img
              src="/aboutus_banner.jpg"
              alt="Qualitas team and ESG commitment"
              className="rounded-2xl shadow-sm object-cover w-full max-w-md h-64 md:h-80 border border-primary/10"
              style={{ minWidth: 240 }}
            />
          </div>
          {/* Right: Content */}
          <div className="flex-1 w-full flex flex-col items-start justify-center max-w-xl">
            <h2 className="title-md mb-4">Our commitment to ESG</h2>
            <p className="body-md text-primary/80 mb-6">
              We are committed to the integration and management of appropriate ESG measures throughout the organisation, and in our funds and investment processes.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-white rounded-lg px-6 py-3 button-lg shadow-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
              tabIndex={0}
              aria-label="Learn more about ESG at Qualitas"
            >
              Learn more
            </a>
          </div>
          </div>
        </section>
      {/* Meet Our Team Section with Parallax */}
      <section className="relative w-full min-h-screen flex items-start justify-start overflow-hidden" style={{ backgroundColor: '#EFF1F6' }}>
        {/* Parallax Background */}
        <Parallax speed={-20} className="absolute inset-0 w-full h-full z-0">
          <img
            src="/Meet Our Team.jpg"
            alt="Qualitas team group photo"
            className="object-cover w-full h-full"
            style={{ minHeight: '100%', minWidth: 240 }}
          />
        </Parallax>
        {/* Overlay for text visibility */}
        <div className="absolute inset-0 w-full h-full bg-black/60 z-10 pointer-events-none" aria-hidden="true" />
        {/* Content Layer */}
        <div className="relative z-20 w-full h-full">
          {/* Content Top Left */}
          <div className="absolute left-8 top-8 md:left-[120px] md:top-[120px] max-w-xl">
            <h2 className="title-lg text-white mb-4">Meet Our Team</h2>
            <p className="body-md text-white/90 mb-8 max-w-md">
              We are a close-knit team building lasting relationships with those we back. Our people are driven by integrity, collaboration, and a commitment to excellence.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-2">
              <a
                href="/our-team"
                className="group text-white button-lg py-2 px-2 rounded-lg transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                tabIndex={0}
                aria-label="Our team"
              >
                <span className="inline-block transition-transform duration-200 group-hover:scale-x-125">→</span> Our team
              </a>
              <a
                href="#"
                className="group text-white button-lg py-2 px-2 rounded-lg transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                tabIndex={0}
                aria-label="Board of directors"
              >
                <span className="inline-block transition-transform duration-200 group-hover:scale-x-125">→</span> Board of directors
              </a>
            </div>
          </div>
          </div>
        </section>
      {/* CTA Section: Join the team at Qualitas */}
      <section className="w-full py-16 flex justify-center items-center" style={{ backgroundColor: '#CCD0DA' }}>
        <div className="w-full max-w-screen-2xl px-4 md:px-8 flex flex-col items-center justify-center gap-8">
          <h2 className="title-md text-center">Join the team at Qualitas</h2>
          <a
            href="#"
            className="inline-block bg-primary text-white rounded-lg px-8 py-4 button-lg shadow-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
            tabIndex={0}
            aria-label="View careers"
          >
            View careers
          </a>
        </div>
      </section>
    </>
  );
} 