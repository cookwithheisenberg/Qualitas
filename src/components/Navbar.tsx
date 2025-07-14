"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FundsMegaMenu } from "@/components/FundsMegaMenu";

const NAV_LINKS = [
  { label: "Funds", href: "#" },
  { label: "Borrowers", href: "/borrowers" },
  { label: "News & Insights", href: "/news-insights" },
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

export default function Navbar() {
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
    <header className="sticky top-0 z-30 w-full bg-primary border-b border-border/60">
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between h-16 px-4 sm:px-8 relative">
        <a href="/" className="font-bold text-xl tracking-wide text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors">QUALITAS</a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center relative">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="relative">
              {link.label === "Funds" ? (
                <div
                  className="relative"
                  onMouseEnter={openFundsMenu}
                  onMouseLeave={closeFundsMenu}
                  onFocus={openFundsMenu}
                  onBlur={closeFundsMenu}
                >
                  <a
                    href={link.href}
                    className="text-white text-base font-medium hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors px-2 py-1 rounded"
                    aria-haspopup="true"
                    aria-expanded={fundsMenuOpen ? "true" : "false"}
                    tabIndex={0}
                  >
                    {link.label}
                  </a>
                  <FundsMegaMenu visible={fundsMenuOpen} onMouseEnter={openFundsMenu} onMouseLeave={closeFundsMenu} />
                </div>
              ) : (
                <a
                  href={link.href}
                  className="text-white text-base font-medium hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors px-2 py-1 rounded"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <Button className="ml-4 min-w-[88px] h-10 px-6 text-base font-medium bg-white text-primary hover:bg-accent hover:text-white transition-colors hidden md:inline-flex" variant="default">
          LOGIN
        </Button>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect y="5" width="24" height="2" rx="1" fill="currentColor"/><rect y="11" width="24" height="2" rx="1" fill="currentColor"/><rect y="17" width="24" height="2" rx="1" fill="currentColor"/></svg>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start gap-2 px-4 py-6 md:hidden z-50 animate-fade-in">
            {NAV_LINKS.map((link) =>
              link.label === "Funds" ? (
                <div key={link.label} className="w-full">
                  <button
                    className="w-full flex items-center justify-between text-primary text-lg font-medium py-2 px-2 rounded hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                    aria-expanded={mobileFundsOpen}
                    aria-controls="mobile-funds-menu"
                    onClick={() => setMobileFundsOpen((open) => !open)}
                  >
                    <span>Funds</span>
                    <svg className={`ml-2 transition-transform ${mobileFundsOpen ? 'rotate-180' : ''}`} width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <div
                    id="mobile-funds-menu"
                    className={`pl-4 bg-white rounded-b overflow-hidden transition-all duration-300 ease-in-out ${mobileFundsOpen ? 'max-h-[600px] opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
                    style={{ willChange: 'max-height, opacity' }}
                  >
                    {FUNDS_MENU.map((cat) => (
                      <div key={cat.label} className="mb-6">
                        <div
                          className={`font-semibold text-base mb-1 pl-2 border-l-4 ${
                            cat.label === 'Private Equity' ? 'border-[#F6B47B] text-[#F6B47B]' :
                            cat.label === 'Private Credit' ? 'border-[#8B5C6B] text-[#8B5C6B]' :
                            cat.label === 'Listed Funds' ? 'border-[#E6B96A] text-[#E6B96A]' :
                            cat.label === 'Qualitas Select' ? 'border-[#3B7C8C] text-[#3B7C8C]' :
                            'border-accent text-accent'
                          }`}
                        >
                          {cat.label}
                        </div>
                        <ul className="flex flex-col gap-2">
                          {cat.items.map((item) => (
                            <li key={item} className="text-primary text-base font-normal leading-snug pl-2 hover:text-accent focus-visible:text-accent focus-visible:outline-none transition-colors cursor-pointer whitespace-nowrap">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-full text-primary text-lg font-medium py-2 px-2 rounded hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileFundsOpen(false);
                  }}
                >
                  {link.label}
                </a>
              )
            )}
            <Button className="w-full mt-2" variant="default">LOGIN</Button>
          </div>
        )}
      </nav>
    </header>
  );
} 