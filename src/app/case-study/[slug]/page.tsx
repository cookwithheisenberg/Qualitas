"use client";

import { useState, useEffect } from "react";
import { getCaseStudyBySlug, caseStudies } from "@/lib/caseStudies";

export default function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Get case study data when component mounts
  useEffect(() => {
    const loadCaseStudy = async () => {
      const resolvedParams = await params;
      const study = getCaseStudyBySlug(resolvedParams.slug);
      setCaseStudy(study);
      setLoading(false);
    };
    loadCaseStudy();
  }, [params]);

  // Show loading state
  if (loading || !caseStudy) {
    return (
      <main className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-primary">Loading...</div>
      </main>
    );
  }

  // Related insights data (using other case studies)
  const relatedInsights = caseStudies
    .filter(study => study.id !== caseStudy.id)
    .slice(0, 3)
    .map(study => ({
      id: study.id,
      category: study.category,
      title: study.title,
      image: study.image,
      slug: study.slug,
    }));

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % caseStudy.carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + caseStudy.carouselImages.length) % caseStudy.carouselImages.length);
  };

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-start overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={caseStudy.image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {/* Overlay for text visibility */}
          <div className="absolute inset-0 w-full h-full bg-black/60 z-10 pointer-events-none" aria-hidden="true" />
        </div>
        
        {/* Content */}
        <div className="relative z-20 w-full max-w-screen-2xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
              <a href="/news-insights" className="hover:text-white transition-colors">News & Insights</a>
              <span>•</span>
              <span>Case Study</span>
            </nav>
            
            {/* Meta data and tags */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-lg">{caseStudy.category}</span>
              <span className="text-sm text-white/80">{caseStudy.date}</span>
              <span className="text-sm text-white/80">•</span>
              <span className="text-sm text-white/80">{caseStudy.readTime}</span>
              <span className="text-sm text-white/80">•</span>
              <span className="text-sm text-white/80">By {caseStudy.author}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              {caseStudy.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl">
              {caseStudy.description}
            </p>

            {/* Share Options */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/80">Share:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-white/20 text-white rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-white/20 text-white rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="text-sm">𝕏</span>
                </button>
                <button className="w-10 h-10 bg-white/20 text-white rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </button>
                <button className="w-10 h-10 bg-white/20 text-white rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="text-sm">📧</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-screen-2xl mx-auto pb-16 md:pb-24 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction Paragraph */}
            <div>
              <h2 className="title-md mb-6">Introduction</h2>
              <div className="prose prose-lg max-w-none">
                <p className="body-lg text-primary/80 leading-relaxed mb-4">
                  The Australian housing market faces unprecedented challenges. With population growth outpacing housing supply, the need for innovative solutions has never been more critical. This comprehensive analysis examines the current state of the market and presents sustainable approaches to address the housing crisis.
                </p>
                <p className="body-lg text-primary/80 leading-relaxed">
                  Our research indicates that traditional construction methods are no longer sufficient to meet the growing demand. Sustainable building practices, combined with strategic investment approaches, offer a path forward that benefits both investors and communities.
                </p>
              </div>
            </div>

            {/* Key Statistics */}
            <div>
              <h2 className="title-md mb-6">Key Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#F5F7FA] rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-light text-primary mb-2">200K</div>
                  <div className="body-sm text-primary/70">Housing Shortage</div>
                </div>
                <div className="bg-[#F5F7FA] rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-light text-primary mb-2">15%</div>
                  <div className="body-sm text-primary/70">Annual Growth Rate</div>
                </div>
                <div className="bg-[#F5F7FA] rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-light text-primary mb-2">$2.5B</div>
                  <div className="body-sm text-primary/70">Investment Required</div>
                </div>
              </div>
            </div>

            {/* Bullet Points Section */}
            <div>
              <h2 className="title-md mb-6">Key Challenges</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span className="body-lg text-primary/80">Supply chain disruptions affecting construction timelines and costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span className="body-lg text-primary/80">Regulatory barriers preventing rapid development approval processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span className="body-lg text-primary/80">Limited access to financing for sustainable building projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span className="body-lg text-primary/80">Skills shortage in the construction industry</span>
                </li>
              </ul>
            </div>

            {/* Image Carousel */}
            <div>
              <h2 className="title-md mb-6">Project Gallery</h2>
              <div className="relative">
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-200">
                  <img 
                    src={caseStudy.carouselImages[currentImageIndex]} 
                    alt={`Project image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <span className="text-2xl text-primary">‹</span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <span className="text-2xl text-primary">›</span>
                </button>
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {caseStudy.carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div>
              <h2 className="title-md mb-6">Project Overview Video</h2>
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                  <p className="text-primary/60">Video placeholder - Click to play</p>
                </div>
              </div>
            </div>

            {/* Numbered List */}
            <div>
              <h2 className="title-md mb-6">Implementation Strategy</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Market Analysis</h3>
                    <p className="body-lg text-primary/80">Conduct comprehensive market research to identify opportunities and assess demand in target regions.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Stakeholder Engagement</h3>
                    <p className="body-lg text-primary/80">Engage with local communities, government bodies, and industry partners to build support and ensure compliance.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Sustainable Design</h3>
                    <p className="body-lg text-primary/80">Implement sustainable building practices and energy-efficient design principles throughout the development process.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Quality Assurance</h3>
                    <p className="body-lg text-primary/80">Establish rigorous quality control measures to ensure all projects meet the highest standards of construction and sustainability.</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Conclusion */}
            <div>
              <h2 className="title-md mb-6">Conclusion</h2>
              <div className="prose prose-lg max-w-none">
                <p className="body-lg text-primary/80 leading-relaxed mb-4">
                  The implementation of sustainable residential building practices represents a critical step forward in addressing Australia's housing crisis. Through strategic investment, innovative design, and collaborative partnerships, we can create housing solutions that benefit both investors and communities.
                </p>
                <p className="body-lg text-primary/80 leading-relaxed">
                  The success of these initiatives depends on continued commitment to sustainable practices, ongoing stakeholder engagement, and adaptive strategies that respond to evolving market conditions and community needs.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Meta Information */}
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Article Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="body-sm text-primary/60">Category:</span>
                  <span className="body-sm font-medium text-primary">{caseStudy.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-sm text-primary/60">Published:</span>
                  <span className="body-sm font-medium text-primary">{caseStudy.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-sm text-primary/60">Read Time:</span>
                  <span className="body-sm font-medium text-primary">{caseStudy.readTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="body-sm text-primary/60">Author:</span>
                  <span className="body-sm font-medium text-primary">{caseStudy.author}</span>
                </div>
              </div>
            </div>

            {/* Share Options */}
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Share This Article</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-[#1877F2] text-white rounded-lg flex items-center justify-center hover:bg-[#1877F2]/80 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-[#1DA1F2] text-white rounded-lg flex items-center justify-center hover:bg-[#1DA1F2]/80 transition-colors">
                  <span className="text-sm">𝕏</span>
                </button>
                <button className="w-10 h-10 bg-[#0077B5] text-white rounded-lg flex items-center justify-center hover:bg-[#0077B5]/80 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </button>
                <button className="w-10 h-10 bg-[#25D366] text-white rounded-lg flex items-center justify-center hover:bg-[#25D366]/80 transition-colors">
                  <span className="text-sm">📧</span>
                </button>
              </div>
            </div>

            {/* Author Info */}
            <div className="bg-[#F5F7FA] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">About the Author</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {caseStudy.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-primary">{caseStudy.author}</div>
                  <div className="text-sm text-primary/60">Investment Research</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Insights - Moved to Bottom */}
      <section className="w-full max-w-screen-2xl mx-auto pb-16 md:pb-24 px-4 md:px-8">
        <div className="border-t border-primary/20 pt-12">
          <h2 className="title-md mb-8">Related Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedInsights.map((insight) => (
              <RelatedInsightCard key={insight.id} {...insight} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function RelatedInsightCard({ 
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