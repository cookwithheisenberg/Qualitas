import React from "react";

const COLUMNS = [
  {
    label: "Private Equity",
    color: "border-l-4 border-[#F6B47B] text-[#F6B47B]",
    items: [
      "Qualitas Food Infrastructure Equity Fund",
      "Qualitas Real Estate Opportunity Fund 1",
      "Qualitas Real Estate Opportunity Fund 2",
    ],
  },
  {
    label: "Private Credit",
    color: "border-l-4 border-[#8B5C6B] text-[#8B5C6B]",
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
    color: "border-l-4 border-[#E6B96A] text-[#E6B96A]",
    items: [],
  },
  {
    label: "Qualitas Select",
    color: "border-l-4 border-[#3B7C8C] text-[#3B7C8C]",
    items: [],
  },
];

export function FundsMegaMenu({ visible, onMouseEnter, onMouseLeave }: { visible: boolean, onMouseEnter?: () => void, onMouseLeave?: () => void }) {
  if (!visible) return null;
  return (
    <div
      className={`fixed left-0 right-0 top-16 w-full bg-white shadow-xl border-t border-border z-50 flex justify-center transition-all duration-200 ease-out ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ willChange: 'opacity, transform' }}
    >
      <div className="w-full max-w-screen-xl flex flex-row gap-16 py-10 px-4 md:px-8 overflow-x-auto">
        <div className="text-5xl font-light text-primary flex items-start" style={{ minWidth: '120px' }}>Funds</div>
        {COLUMNS.map((col) => (
          <div key={col.label} className="min-w-[220px] flex flex-col gap-2">
            <div
              className={`font-semibold text-lg mb-4 pl-2 ${col.color} hover:underline focus-visible:underline transition-colors cursor-pointer`}
              tabIndex={0}
              style={{ background: 'none' }}
            >
              {col.label}
            </div>
            <ul className="flex flex-col space-y-4">
              {col.items.map((item) => (
                <li
                  key={item}
                  className="text-primary text-base font-normal leading-snug pl-2 hover:text-primary/90 focus-visible:text-primary/90 focus-visible:outline-none transition-colors cursor-pointer rounded whitespace-nowrap"
                  tabIndex={0}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 