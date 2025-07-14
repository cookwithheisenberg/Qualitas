"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeroParallax } from "@/components/HeroParallax";
import { Parallax } from "react-scroll-parallax";
import { FundsMegaMenu } from "@/components/FundsMegaMenu";
import { useRef } from "react";
import { getRecentCaseStudies } from "@/lib/caseStudies";

const NAV_LINKS = [
  { label: "Funds", href: "#" },
  { label: "Borrowers", href: "#" },
  { label: "News & Insights", href: "#" },
  { label: "Investor Centre", href: "#" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#" },
];

const FUNDS_MENU = [
  {
    label: "Private Equity",
    items: [
      "Qualitas Food Infrastructure Equity Fund",
      "Qualitas Real Estate Opportunity Fund 1",
      "Qualitas Real Estate Opportunity Fund 2",
    ],
  },
  {
    label: "Private Credit",
    items: [
      "Qualitas Private Credit Income Fund",
      "Qualitas Tactical Credit Fund",
      "Qualitas Senior Debt Fund",
      "Qualitas Construction Debt Fund",
      "Qualitas Low Carbon Debt Fund",
    ],
  },
  {
    label: "Listed Funds",
    items: [],
  },
  {
    label: "Qualitas Select",
    items: [],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fundsMenuOpen, setFundsMenuOpen] = useState(false);
  let fundsMenuCloseTimeout: NodeJS.Timeout | null = null;
  const [mobileFundsOpen, setMobileFundsOpen] = useState(false);

  const openFundsMenu = () => {
    if (fundsMenuCloseTimeout) clearTimeout(fundsMenuCloseTimeout);
    setFundsMenuOpen(true);
  };
  const closeFundsMenu = () => {
    fundsMenuCloseTimeout = setTimeout(() => setFundsMenuOpen(false), 150);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroParallax overlay={false} />
      {/* Stats Row */}
      <section className="w-full flex justify-center bg-white py-8 md:py-12 mt-14 md:mt-[120px]">
        <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
        <div className="w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-6 gap-0 px-4 md:px-8 relative z-10">
          {/* QAL Card */}
          <Card className="flex flex-col justify-start bg-[#F5F7FA] rounded-xl border-0 p-6 min-h-[140px] shadow-sm">
            <span className="label-md mb-1">QAL</span>
            <div className="flex flex-row items-end gap-2 mb-1">
              <span className="text-2xl font-light text-primary">A$2.34</span>
              <span className="body-md text-green-600 font-medium">↑ 1.6%</span>
            </div>
            <span className="body-sm text-primary/70">Last updated: 11:12am 24 May 2025</span>
            <a href="#" className="text-accent underline body-sm mt-2">View more market data</a>
          </Card>
          {/* $9.2bn Card */}
          <Card className="flex flex-col justify-start bg-primary rounded-xl border-0 p-6 min-h-[140px] shadow-sm">
            <span className="text-4xl font-light text-white mb-2">$9.2bn</span>
            <span className="body-md text-white/90 font-medium">Funds under management</span>
          </Card>
          {/* 83% Card */}
          <Card className="flex flex-col justify-start bg-[#7C8496] rounded-xl border-0 p-6 min-h-[140px] shadow-sm">
            <span className="text-4xl font-light text-white mb-2">83%</span>
            <span className="body-md text-white/90 font-medium">Institutional capital composition</span>
            <span className="body-sm text-white/80 mt-1">Extensive global institutional<br/>and wholesale investor base</span>
          </Card>
          {/* 77% Card */}
          <Card className="flex flex-col justify-start bg-[#7C8496] rounded-xl border-0 p-6 min-h-[140px] shadow-sm">
            <span className="text-4xl font-light text-white mb-2">77%</span>
            <span className="body-md text-white/90 font-medium">Allocation to residential</span>
            <span className="body-sm text-white/80 mt-1">Driven by robust<br/>investment fundamentals</span>
          </Card>
          {/* $27bn + 48/264 Screenshot-accurate Card */}
          <Card className="relative flex flex-row items-center bg-primary rounded-xl border-0 p-8 min-h-[220px] shadow-sm overflow-visible col-span-1 md:col-span-2">
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
      {/* Our Strategies Section */}
      <section className="w-full flex justify-center bg-white py-8 md:py-12 mt-14 md:mt-[120px]">
        <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
        <div className="w-full max-w-screen-2xl px-4 md:px-8 relative z-10">
          <h2 className="title-md mb-8">Our Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Private Credit */}
            <Card className="flex flex-col items-start p-6 rounded-xl shadow-sm h-full transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
              <h3 className="text-xl font-semibold text-primary mb-2">Private Credit</h3>
              <p className="body-md text-primary/80 mb-4">Sed ornare elit sem in tempor molestie. Ut dolor odio, dictum sodales velit eu, dictum enim. Sed nisi mi, suscipit felis in, sodales ex orci eu enim.</p>
              <Button variant="default" className="mt-auto button-lg">Learn More</Button>
            </Card>
            {/* Private Equity */}
            <Card className="flex flex-col items-start p-6 rounded-xl shadow-sm h-full transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
              <h3 className="text-xl font-semibold text-primary mb-2">Private Equity</h3>
              <p className="body-md text-primary/80 mb-4">Sed ornare elit sem in tempor molestie. Ut dolor odio, dictum sodales velit eu, dictum enim. Sed nisi mi, suscipit felis in, sodales ex orci eu enim.</p>
              <Button variant="default" className="mt-auto button-lg">Learn More</Button>
            </Card>
            {/* Listed */}
            <Card className="flex flex-col items-start p-6 rounded-xl shadow-sm h-full transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
              <h3 className="text-xl font-semibold text-primary mb-2">Listed</h3>
              <p className="body-md text-primary/80 mb-4">Sed ornare elit sem in tempor molestie. Ut dolor odio, dictum sodales velit eu, dictum enim. Sed nisi mi, suscipit felis in, sodales ex orci eu enim.</p>
              <Button variant="default" className="mt-auto button-lg">Learn More</Button>
            </Card>
          </div>
        </div>
      </section>
      {/* Featured Insights Hero Card (Bento) */}
      <section className="w-full flex justify-center bg-white py-8 md:py-12 mt-14 md:mt-[120px]">
        <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
        <div className="w-full max-w-screen-2xl px-4 md:px-8 relative z-10">
          {(() => {
            const featuredCaseStudy = getRecentCaseStudies(1)[0];
            return (
              <div className="bg-[#F5F7FA] rounded-3xl flex flex-col md:flex-row items-stretch p-8 md:p-16 gap-8 md:gap-12 border border-primary/30">
                {/* Left: Text */}
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-base font-medium text-primary/70 mb-4">{featuredCaseStudy.category.toUpperCase()}</span>
                  <h2 className="text-4xl md:text-5xl font-light text-primary mb-6 max-w-2xl">{featuredCaseStudy.title}</h2>
                  <p className="text-lg font-semibold text-primary mb-2">{featuredCaseStudy.description.split('.')[0]}.</p>
                  <p className="text-base text-primary/80 mb-8 max-w-xl">{featuredCaseStudy.description.split('.')[1]}.</p>
                  <a href={`/case-study/${featuredCaseStudy.slug}`} className="bg-primary text-white rounded-lg px-6 py-3 text-base font-medium w-fit hover:bg-accent transition-colors">Read more</a>
                </div>
                {/* Right: Bento Image Grid */}
                <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-4 min-w-[320px] max-w-lg">
                  {/* Top left: small */}
                  <div className="rounded-2xl overflow-hidden bg-gray-200 col-span-1 row-span-1 aspect-square">
                    <img src={featuredCaseStudy.carouselImages[0]} alt="Project image 1" className="w-full h-full object-cover" />
                  </div>
                  {/* Top right: tall */}
                  <div className="rounded-2xl overflow-hidden bg-gray-200 col-span-2 row-span-1 aspect-[2/1]">
                    <img src={featuredCaseStudy.carouselImages[1]} alt="Project image 2" className="w-full h-full object-cover" />
                  </div>
                  {/* Bottom left */}
                  <div className="rounded-2xl overflow-hidden bg-gray-200 col-span-1 row-span-1 aspect-square">
                    <img src={featuredCaseStudy.carouselImages[2]} alt="Project image 3" className="w-full h-full object-cover" />
                  </div>
                  {/* Bottom right */}
                  <div className="rounded-2xl overflow-hidden bg-gray-200 col-span-2 row-span-1 aspect-[2/1]">
                    <img src={featuredCaseStudy.carouselImages[3]} alt="Project image 4" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>
      {/* Featured Insights Section */}
      <section className="w-full flex justify-center bg-white py-8 md:py-12 mt-14 md:mt-[120px]">
        <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
        <div className="w-full max-w-screen-2xl px-4 md:px-8 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-light text-primary">Featured insights</h2>
            <a href="/news-insights" className="text-primary/60 text-base font-medium hover:underline">View all</a>
          </div>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {getRecentCaseStudies(5).map((insight) => (
                <a key={insight.id} href={`/case-study/${insight.slug}`} className="block">
                  <div className="bg-white rounded-2xl flex-shrink-0 w-[320px] snap-center border border-primary/30 flex flex-col transition-transform transition-shadow transition-colors duration-300 cursor-pointer hover:scale-[1.01] hover:shadow-md hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
                    <div className="rounded-t-2xl overflow-hidden bg-gray-200 aspect-[16/9] border-b border-primary/20">
                      <img src={insight.image} alt={insight.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-semibold text-primary/60 mb-2 uppercase tracking-wide">{insight.category}</span>
                      <h3 className="text-lg font-bold text-primary mb-2">{insight.title}</h3>
                      <p className="text-sm text-primary/80 mb-4 flex-1">{insight.description.substring(0, 100)}...</p>
                      <div className="flex items-center text-xs text-primary/60 gap-2 mb-2">
                        <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M8 1.333A6.667 6.667 0 108 14.667 6.667 6.667 0 008 1.333zm0 12A5.333 5.333 0 118 2.667a5.333 5.333 0 010 10.666zm.667-8H7.333v3.334l2.834 1.7.5-.82-2.334-1.38V5.333z" fill="currentColor"/></svg>{insight.date}</span>
                        <span>•</span>
                        <span>{insight.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-auto">
                        <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
                          {insight.author.charAt(0)}
                        </span>
                        <span className="text-xs text-primary font-medium">{insight.author}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {/* Carousel navigation (dots/arrows) - placeholder, not functional */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button className="w-9 h-9 rounded-full bg-white border border-primary/30 text-primary flex items-center justify-center shadow-sm hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary transition-colors">
                <span className="text-xl">&larr;</span>
              </button>
              <button className="w-9 h-9 rounded-full bg-white border border-primary/30 text-primary flex items-center justify-center shadow-sm hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary transition-colors">
                <span className="text-xl">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Shareholders Section */}
      <section className="w-full flex justify-center bg-white py-8 md:py-12 mt-14 md:mt-[120px]">
        <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
        <div className="w-full max-w-screen-2xl px-4 md:px-8 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-light text-primary">Shareholders</h2>
            <a href="#" className="text-primary/60 text-base font-medium hover:underline">View more</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Featured Shareholder Card */}
            <div className="md:col-span-1 bg-white rounded-2xl p-0 border border-primary/30 flex flex-col overflow-hidden">
              <div className="w-full bg-gray-200 overflow-hidden" style={{ height: '200px' }}>
                <img src="/placeholder.avif" alt="Shareholder" className="w-full h-full object-cover" />
              </div>
              <div className="bg-primary text-white text-xs font-semibold px-4 py-2 tracking-wide">QUALITAS LIMITED (ASX: QAL)</div>
              <div className="p-6 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-primary">2025 Macquarie Conference Presentation</h3>
                  <span className="text-xs text-primary/60">30/04/2025</span>
                </div>
                <p className="text-sm text-primary/80 mb-4">Qualitas Limited (ASX: QAL) (Qualitas or Company) provides the attached copy of Qualitas' 2025 Macquarie Conference presentation being given today.<br />Authorised for release by the Group Managing Director.</p>
                <button className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium w-fit hover:bg-accent transition-colors mt-auto">Read more</button>
              </div>
            </div>
            {/* Shareholder Notices List */}
            <div className="md:col-span-2 flex flex-col divide-y divide-primary/20 bg-white rounded-2xl border border-primary/30">
              {[
                { title: 'Notification of cessation of securities - QAL', desc: 'Description here Pis de qui offic tem que volorumque archill estincte vent ipienis exerspe raepudae diam cus eseaque ctinctemquis velliquas dolupta conseditate num autemonsant.', date: '30/04/2025' },
                { title: 'Change of Registered and Principal Administrative Office', desc: 'Description here Pis de qui offic tem que volorumque archill estincte vent ipienis exerspe raepudae diam cus eseaque ctinctemquis velliquas dolupta conseditate num autemonsant.', date: '30/04/2025' },
                { title: "Initial Director's Interest Notice", desc: 'Description here Pis de qui offic tem que volorumque archill estincte vent ipienis exerspe raepudae diam cus eseaque ctinctemquis velliquas dolupta conseditate num autemonsant.', date: '30/04/2025' },
                { title: 'Appointment of non-executive director', desc: 'Description here Pis de qui offic tem que volorumque archill estincte vent ipienis exerspe raepudae diam cus eseaque ctinctemquis velliquas dolupta conseditate num autemonsant.', date: '30/04/2025' },
              ].map((notice, idx) => (
                <div key={idx} className="flex flex-row items-start justify-between gap-6 px-6 py-5">
                  <div className="flex-1">
                    <span className="text-base font-bold text-primary mb-1 block">{notice.title}</span>
                    <span className="text-sm text-primary/70 block mb-1">{notice.desc}</span>
                  </div>
                  <div className="flex flex-col items-end min-w-[110px]">
                    <span className="text-xs text-primary/60 mb-2">{notice.date}</span>
                    <span className="text-primary text-xl">&rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* About Qualitas Section */}
      <section className="w-full flex justify-center bg-white py-8 md:py-12 mt-14 md:mt-[120px]">
        <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
        <div className="w-full max-w-screen-2xl px-4 md:px-8 relative z-10">
          <div className="bg-[#F5F7FA] rounded-3xl flex flex-col md:flex-row items-stretch p-8 md:p-16 gap-8 md:gap-12 border border-primary/30">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-6 max-w-2xl">About Qualitas</h2>
              <p className="text-base text-primary/80 mb-4 max-w-xl">Founded in 2008, Qualitas stands as a leading alternative real estate investment manager, leveraging deep market knowledge, robust risk management and institutional-grade governance to deliver value for investors and borrowers.</p>
              <ul className="list-disc pl-5 text-primary/90 mb-6">
                <li>Deep expertise in real estate finance</li>
                <li>Robust risk management</li>
                <li>Institutional-grade governance</li>
              </ul>
              <button className="bg-primary text-white rounded-lg px-6 py-3 text-base font-medium w-fit hover:bg-accent transition-colors">Learn more</button>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/3] w-full max-w-md border-b border-primary/20">
                <img src="/placeholder.avif" alt="About Qualitas" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Acknowledgement of Country Section */}
      <section className="w-full flex justify-center items-center bg-cover bg-center relative m-0 p-0 py-8 md:py-12 mt-14 md:mt-[120px]" style={{ backgroundImage: "url('/acknowledge.png')", minHeight: '180px' }}>
        <Parallax speed={-5} className="absolute inset-0 w-full h-full z-0" />
        <div className="w-full max-w-screen-2xl px-4 md:px-8 py-12 flex flex-col items-center justify-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">Acknowledgement of country</h2>
          <p className="text-lg md:text-xl text-primary text-center max-w-3xl">Qualitas acknowledges the traditional custodians of country throughout Australia and their ongoing connection to land, sea, and community. We pay our respect to their elders past and present.</p>
        </div>
      </section>
    </div>
  );
}
