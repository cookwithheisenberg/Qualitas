"use client";

export default function OurTeam() {
  // Unsplash royalty-free portrait images for prototyping
  const localImages = [
    "/person 1.jpg",
    "/person 2.jpg",
    "/person 3.jpg",
  ];
  return (
    <main className="w-full min-h-screen" style={{ backgroundColor: '#CCD0DA' }}>
      {/* Hero Row */}
      <section className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start justify-between pt-16 md:pt-24 pb-8 md:pb-16 gap-8 md:gap-0 px-4 md:px-8">
        {/* Left: Label */}
        <div className="flex-1 flex flex-col items-start justify-start">
          <span className="label-md mb-2 md:mb-0 mt-2 md:mt-4">Our People</span>
        </div>
        {/* Right: Large Heading */}
        <div className="flex-[2] flex flex-col items-start md:items-end justify-start">
          <h1 className="headline-lg text-primary text-left md:text-right leading-tight max-w-2xl">
            The secret to our success is attracting the <span className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4">best</span> talent:
          </h1>
        </div>
      </section>
      {/* Grid Section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Section Title & Paragraph */}
          <div className="flex flex-col items-start justify-start border-t border-primary/20 pt-6 md:col-span-1 mb-6 md:mb-0">
            <span className="label-md mb-4">Board of Directors</span>
            <p className="body-md text-primary/80">
              Our team combines extensive expertise in finance, law, and corporate governance. With decades of experience from top global institutions, they drive innovation, strong governance, and strategic growth, ensuring operational excellence and sustainable success across all facets of our operations.
            </p>
          </div>
          {/* Board Member 1 */}
          <TeamMemberCard
            name="Manager 1"
            title="Managing Director"
            image={localImages[0 % localImages.length]}
            description="Manager 1 leads our investment strategy and team culture."
            linkedin="#"
          />
          {/* Board Member 2 */}
          <TeamMemberCard
            name="Manager 2"
            title="Managing Director"
            image={localImages[1 % localImages.length]}
            description="Manager 2 drives operational excellence and innovation."
            linkedin="#"
          />
          {/* Board Member 3 */}
          <TeamMemberCard
            name="Manager 3"
            title="Non-Executive Director"
            image={localImages[2 % localImages.length]}
            description="Manager 3 brings global perspective and governance expertise."
            linkedin="#"
          />
          {/* Board Member 4 */}
          <TeamMemberCard
            name="Manager 4"
            title="Non-Executive Director"
            image={localImages[0 % localImages.length]}
            description="Manager 4 ensures strategic growth and compliance."
            linkedin="#"
          />
          {/* Board Member 5 */}
          <TeamMemberCard
            name="Manager 5"
            title="Chairman"
            image={localImages[1 % localImages.length]}
            description="Manager 5 provides leadership and vision for the board."
            linkedin="#"
          />
        </div>
      </section>

      {/* Our team section */}
      <section className="w-full max-w-screen-2xl mx-auto mt-20 md:mt-[80px] pb-8 md:pb-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Section Title & Paragraph */}
          <div className="flex flex-col items-start justify-start border-t border-primary/20 pt-6 md:col-span-1 mb-6 md:mb-0">
            <span className="label-md mb-4">Our team</span>
            <p className="body-md text-primary/80">
              Our team brings together diverse backgrounds and expertise, united by a passion for excellence and a commitment to our clients’ success. We foster a collaborative environment where every member contributes to our shared vision.
            </p>
          </div>
          {/* Team Member 1 */}
          <TeamMemberCard
            name="Team Member 1"
            title="Portfolio Manager"
            image={localImages[0 % localImages.length]}
            description="Team Member 1 specializes in portfolio management and client relations."
            linkedin="#"
          />
          {/* Team Member 2 */}
          <TeamMemberCard
            name="Team Member 2"
            title="Senior Analyst"
            image={localImages[1 % localImages.length]}
            description="Team Member 2 provides deep analytical insights and supports investment decisions."
            linkedin="#"
          />
          {/* Team Member 3 */}
          <TeamMemberCard
            name="Team Member 3"
            title="Associate"
            image={localImages[2 % localImages.length]}
            description="Team Member 3 supports the team with research and analysis."
            linkedin="#"
          />
          {/* Team Member 4 */}
          <TeamMemberCard
            name="Team Member 4"
            title="Investment Manager"
            image={localImages[0 % localImages.length]}
            description="Team Member 4 manages client portfolios and relationships."
            linkedin="#"
          />
          {/* Team Member 5 */}
          <TeamMemberCard
            name="Team Member 5"
            title="Analyst"
            image={localImages[1 % localImages.length]}
            description="Team Member 5 delivers data-driven insights for investment decisions."
            linkedin="#"
          />
        </div>
      </section>
      {/* Removed extra Team Members Grid section at the bottom */}
    </main>
  );
}

// Team member card component
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