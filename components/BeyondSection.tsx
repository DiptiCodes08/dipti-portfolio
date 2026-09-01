"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import QAModal from "./QAModal";

const designWork = [
  { label: "Event Poster",  src: "/images/devops-pioneer/poster-1.png" },
  { label: "Flex Banner",   src: "/images/devops-pioneer/banner-1.png" },
  { label: "Flex Banner",   src: "/images/devops-pioneer/banner-2.png" },
];

export default function BeyondSection() {
  const [qaOpen, setQaOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500 mb-4 block">
              More Work
            </span>
            <h2 className="text-3xl font-bold text-stone-900 tracking-tight mb-10">
              Beyond UI/UX
            </h2>
          </ScrollReveal>

          {/* ── DevOps Pioneer card ── */}
          <ScrollReveal delay={0.1}>
            <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-50 rounded-3xl border border-violet-100 p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-violet-100/40 transition-all duration-300 group mb-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative flex flex-col md:flex-row md:items-start gap-8">
                {/* Icon */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-violet-100 border border-violet-200 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.636 5.636l2.121 2.121M16.243 16.243l2.121 2.121M16.243 7.757l-2.121 2.121M7.757 16.243l-2.121 2.121"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                <div className="flex-1">
                  <p className="text-[10px] font-bold text-violet-500 uppercase tracking-[0.2em] mb-1.5">
                    Community Designer
                  </p>
                  <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-violet-600 transition-colors">
                    DevOps Pioneer Community
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed max-w-xl mb-6">
                    Contributed to the community by designing promotional materials,
                    including event posters and flex banners, and participating in
                    community initiatives and events.
                  </p>

                  {/* Design work image grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {designWork.map((item, i) => (
                      <div
                        key={i}
                        className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-violet-100 shadow-sm bg-violet-50"
                      >
                        <Image
                          src={item.src}
                          alt={item.label}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-2 py-2">
                          <p className="text-[9px] font-semibold text-white">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── QA & Software Testing card ── */}
          <ScrollReveal delay={0.18}>
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50/40 rounded-3xl border border-stone-200 p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-stone-100/60 hover:border-violet-100 transition-all duration-300 group mb-8">

              <div className="relative flex flex-col md:flex-row md:items-center gap-8">
                {/* Icon */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500 group-hover:bg-violet-50 group-hover:border-violet-100 group-hover:text-violet-600 transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 9h18M3 15h18M9 3v18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M13 12l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="flex-1">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-1.5 group-hover:text-violet-500 transition-colors">
                    QA &amp; Software Testing
                  </p>
                  <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-violet-600 transition-colors">
                    Manual Testing &amp; Test Documentation
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed max-w-xl mb-4">
                    Manual software testing and test case documentation using
                    Microsoft Excel.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Manual Testing", "Test Cases", "Functional Testing", "UI Testing", "Bug Reporting", "Excel"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold bg-stone-50 text-stone-500 border border-stone-200 px-3 py-1 rounded-full group-hover:border-violet-100 group-hover:bg-violet-50 group-hover:text-violet-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setQaOpen(true)}
                    className="group/btn inline-flex items-center gap-2 text-sm font-bold text-stone-600 hover:text-violet-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 rounded"
                  >
                    View QA Work
                    <svg
                      className="transition-transform duration-200 group-hover/btn:translate-x-1"
                      width="14" height="14" viewBox="0 0 16 16" fill="none"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

  
        </div>
      </section>

      {/* QA modal — outside section so it can be full-screen */}
      <QAModal open={qaOpen} onClose={() => setQaOpen(false)} />
    </>
  );
}
