export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  carouselImages: string[];
  date: string;
  readTime: string;
  author: string;
  description: string;
}

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

// Helper function to get consistent image for a given index
const getImageForIndex = (index: number) => {
  return availableImages[index % availableImages.length];
};

// Helper function to get carousel images for a case study
const getCarouselImages = (baseIndex: number) => {
  return [
    getImageForIndex(baseIndex),
    getImageForIndex(baseIndex + 1),
    getImageForIndex(baseIndex + 2),
    getImageForIndex(baseIndex + 3),
  ];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "sustainable-residential-buildings",
    title: "The Need for Sustainable Residential Buildings: A Comprehensive Analysis",
    category: "Strategy",
    image: getImageForIndex(0),
    carouselImages: getCarouselImages(0),
    date: "May 10, 2025",
    readTime: "5 min read",
    author: "Qualitas Team",
    description: "It is undeniable - Australia has a housing crisis. Figures indicate there is a shortage of 200,000 houses nationally and already, annual targets to address the undersupply are not being met. This case study explores sustainable solutions and their implementation."
  },
  {
    id: 2,
    slug: "private-lending-credit-real-estate-cycles",
    title: "Private lending: When credit and real estate cycles diverge",
    category: "News",
    image: getImageForIndex(1),
    carouselImages: getCarouselImages(1),
    date: "May 8, 2025",
    readTime: "4 min read",
    author: "Arlene McCoy",
    description: "A look at how economic shifts are shaping the property sector and creating new opportunities for private lenders."
  },
  {
    id: 3,
    slug: "residential-sector-priority",
    title: "Why the residential sector continues to be a priority for investors",
    category: "Insights",
    image: getImageForIndex(2),
    carouselImages: getCarouselImages(2),
    date: "May 6, 2025",
    readTime: "6 min read",
    author: "Qualitas Team",
    description: "Exploring the factors that make residential real estate an attractive investment opportunity in current market conditions."
  },
  {
    id: 4,
    slug: "asx-announcement-1h25-results",
    title: "ASX ANNOUNCEMENT: Qualitas releases 1H25 results",
    category: "News",
    image: getImageForIndex(3),
    carouselImages: getCarouselImages(3),
    date: "May 4, 2025",
    readTime: "3 min read",
    author: "Qualitas Team",
    description: "Qualitas Limited (ASX: QAL) announces its first half 2025 financial results and strategic outlook."
  },
  {
    id: 5,
    slug: "market-analysis-trends",
    title: "Market analysis and trends in alternative real estate investment",
    category: "Research",
    image: getImageForIndex(4),
    carouselImages: getCarouselImages(4),
    date: "May 2, 2025",
    readTime: "7 min read",
    author: "Qualitas Team",
    description: "Comprehensive analysis of current market trends and their implications for alternative real estate investment strategies."
  },
  {
    id: 6,
    slug: "esg-investment-framework",
    title: "ESG Investment Framework: Building Sustainable Portfolios",
    category: "ESG",
    image: getImageForIndex(5),
    carouselImages: getCarouselImages(5),
    date: "April 30, 2025",
    readTime: "8 min read",
    author: "Qualitas Team",
    description: "How environmental, social, and governance factors are reshaping investment decisions in real estate."
  },
  {
    id: 7,
    slug: "construction-debt-opportunities",
    title: "Construction Debt: Emerging Opportunities in Infrastructure",
    category: "Education",
    image: getImageForIndex(6),
    carouselImages: getCarouselImages(6),
    date: "April 28, 2025",
    readTime: "6 min read",
    author: "Qualitas Team",
    description: "Exploring the growing demand for construction financing and the opportunities it presents for investors."
  },
  {
    id: 8,
    slug: "low-carbon-debt-strategies",
    title: "Low Carbon Debt Strategies: Financing the Green Transition",
    category: "CPD Program",
    image: getImageForIndex(0),
    carouselImages: getCarouselImages(0),
    date: "April 26, 2025",
    readTime: "5 min read",
    author: "Qualitas Team",
    description: "How low carbon debt instruments are supporting the transition to sustainable real estate development."
  }
];

// Helper function to get case study by slug
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};

// Helper function to get case studies by category
export const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
  return caseStudies.filter(study => study.category === category);
};

// Helper function to get recent case studies
export const getRecentCaseStudies = (limit: number = 4): CaseStudy[] => {
  return caseStudies.slice(0, limit);
}; 