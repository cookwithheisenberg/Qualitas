export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white m-0 pt-12 pb-8">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <span className="font-bold text-xl tracking-wide">QUALITAS</span>
          <div className="mt-4 text-sm text-white/80">
            Level 38, 120 Collins St, Melbourne VIC 3000 Australia<br />
            +61 3 9612 3900<br />
            info@qualitas.com.au
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="text-sm text-white/80 space-y-1">
            <li><a href="/about" className="hover:underline focus-visible:underline transition-colors">About</a></li>
            <li><a href="/news-insights" className="hover:underline focus-visible:underline transition-colors">News & Insights</a></li>
            <li>Careers</li>
            <li>Shareholders</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="text-sm text-white/80 space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Newsletter</div>
          <form className="flex flex-row gap-2 w-full">
            <input type="email" placeholder="Email address" className="flex-1 rounded-lg px-3 py-2 text-primary bg-white placeholder:text-primary/40 focus:outline-none min-w-0" />
            <button className="bg-accent text-white rounded-lg px-4 py-2 text-sm font-medium w-fit hover:bg-primary transition-colors whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/20 pt-6 text-center text-white/70 text-sm">
        Acknowledgement of country: Qualitas acknowledges the traditional custodians of country throughout Australia and their ongoing connection to land, sea, and community. We pay our respect to their elders past and present.<br />
        <span className="block mt-2">© 2024 Qualitas. All rights reserved.</span>
      </div>
    </footer>
  );
} 