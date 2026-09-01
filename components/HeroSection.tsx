"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";

const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-100/50 blur-[120px]" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-purple-50/80 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-violet-600 bg-violet-50 px-4 py-2 rounded-full mb-8 border border-violet-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              📍 Kathmandu, Nepal — Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-stone-900 leading-[1.08] mb-5"
          >
            Hi, I&apos;m Dipti{" "}
            <span className="inline-block animate-float-b">👋</span>
          </motion.h1>

          <motion.p
            variants={item}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl font-semibold text-stone-500 mb-5 leading-snug"
          >
            UI/UX Designer &amp;{" "}
            <span className="text-violet-600">Computer Science Graduate</span>
          </motion.p>

          <motion.p
            variants={item}
            transition={{ duration: 0.6 }}
            className="text-base text-stone-500 leading-relaxed max-w-[480px] mb-10"
          >
            I design simple, user-friendly digital experiences by combining
            user-centred design, research, and technology.
          </motion.p>

          <motion.div variants={item} transition={{ duration: 0.6 }} className="flex flex-wrap gap-3">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 bg-violet-600 text-white font-semibold px-7 py-3.5 rounded-full
                hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-200 hover:-translate-y-0.5
                active:translate-y-0 transition-all duration-200"
            >
              View My Work
              <svg
                className="transition-transform duration-200 group-hover:translate-x-1"
                width="16" height="16" viewBox="0 0 16 16" fill="none"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-stone-700 font-semibold px-7 py-3.5 rounded-full
                border border-stone-200 hover:border-violet-300 hover:text-violet-600 hover:shadow-md hover:-translate-y-0.5
                active:translate-y-0 transition-all duration-200"
            >
              Get In Touch
            </Link>
            <a
              href="/cv/Dipti_Aryal_CV_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-stone-700 font-semibold px-7 py-3.5 rounded-full
                border border-stone-200 hover:border-violet-300 hover:text-violet-600 hover:shadow-md hover:-translate-y-0.5
                active:translate-y-0 transition-all duration-200"
              aria-label="View CV — opens in new tab, download available inside"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M9 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6M9 2l4 4M9 2v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View CV ↗
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div variants={item} transition={{ duration: 0.6 }} className="flex items-center gap-6 mt-12">
            <div className="h-px flex-1 bg-stone-100 max-w-[80px]" />
            <div className="flex items-center gap-4 text-xs text-stone-400 font-medium">
              <span>Figma</span>
              <span className="w-1 h-1 rounded-full bg-stone-200" />
              <span>User Research</span>
              <span className="w-1 h-1 rounded-full bg-stone-200" />
              <span>Prototyping</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 80 }}
          className="flex justify-center lg:justify-end"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium text-stone-400 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-stone-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-violet-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
