"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SmoothScrollLink from "./SmoothScrollLink";

const navLinks = [
  { label: "Home",       href: "#home"       },
  { label: "About",      href: "#about"      },
  { label: "Work",       href: "#work"       },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm shadow-stone-100/60 border-b border-stone-100/80"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-base font-bold tracking-tight text-stone-900 hover:text-violet-600 transition-colors duration-200"
        >
          <span className="text-violet-600">D</span>ipti
          <span className="text-stone-300 mx-1">·</span>
          <span className="font-medium text-stone-500 text-sm">UI/UX</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id      = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <SmoothScrollLink
                  to={id}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-violet-600"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-violet-50 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </SmoothScrollLink>
              </li>
            );
          })}
        </ul>

        {/* Desktop right-side actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* CV button */}
          <a
            href="/cv/Dipti_Aryal_CV_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-600 px-4 py-2.5 rounded-full
              border border-stone-200 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50
              transition-all duration-200"
            aria-label="View CV — opens in new tab, download available inside"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M9 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6M9 2l4 4M9 2v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CV ↗
          </a>

          {/* Let's Talk */}
          <SmoothScrollLink
            to="contact"
            className="inline-flex items-center gap-2 bg-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full
              hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5
              active:translate-y-0 active:shadow-none
              transition-all duration-200"
          >
            Let&apos;s Talk
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SmoothScrollLink>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl hover:bg-stone-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-stone-700 origin-center transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-stone-700 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-stone-700 origin-center transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-stone-100"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                >
                  <SmoothScrollLink
                    to={link.href.replace("#", "")}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "text-violet-600 bg-violet-50"
                        : "text-stone-600 hover:text-violet-600 hover:bg-stone-50"
                    }`}
                  >
                    {link.label}
                  </SmoothScrollLink>
                </motion.div>
              ))}
              <SmoothScrollLink
                to="contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex justify-center bg-violet-600 text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-violet-700 transition-colors"
              >
                Let&apos;s Talk
              </SmoothScrollLink>
              <a
                href="/cv/Dipti_Aryal_CV_Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex justify-center items-center gap-2 bg-stone-50 text-stone-700 text-sm font-semibold px-5 py-3 rounded-full border border-stone-200 hover:border-violet-300 hover:text-violet-600 transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M9 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6M9 2l4 4M9 2v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                View CV ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
