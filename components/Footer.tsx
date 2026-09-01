import Link from "next/link";

const navLinks = ["#home", "#about", "#work", "#experience", "#skills", "#contact"];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-14 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b border-stone-800">
          {/* Branding */}
          <div>
            <p className="text-white font-bold text-lg tracking-tight">
              <span className="text-violet-500">D</span>ipti Aryal
            </p>
            <p className="text-stone-500 text-sm mt-1">UI/UX Designer — Kathmandu, Nepal</p>
            <p className="text-stone-600 text-xs mt-3 max-w-xs leading-relaxed">
              Designing user-friendly digital experiences with purpose, research, and care.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((href) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-stone-500 hover:text-white transition-colors capitalize"
              >
                {href.replace("#", "")}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/in/dipti-aryal-73579931b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center hover:bg-violet-600 hover:border-violet-600 transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 8v5M6 6v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 13v-3a2 2 0 014 0v3M9 10v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link
              href="https://mail.google.com/mail/?view=cm&to=aryaldipti42@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center hover:bg-violet-600 hover:border-violet-600 transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 6.5l7 4.5 7-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-700">
          <p>© 2026 Dipti Aryal. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed &amp; Built with
            <span className="text-violet-500">♥</span>
            by Dipti Aryal
          </p>
        </div>
      </div>
    </footer>
  );
}
