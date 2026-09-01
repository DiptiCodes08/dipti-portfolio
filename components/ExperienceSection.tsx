"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "UI/UX Design Intern",
    company: "Herald Development Platform",
    period: "2025",
    type: "Internship",
    description:
      "Worked on mobile application UI/UX design and contributed to the design workflow, including wireframing, prototyping, and design handoff to development teams. Also presented a UX case study of HomeEase covering user research, usability findings, and design decisions.",
    tags: ["Mobile Design", "Figma", "Prototyping", "Wireframing", "Design Handoff", "UX Research"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14.5 8.5H21L15.5 12.5L18 19L12 15L6 19L8.5 12.5L3 8.5H9.5L12 2Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    role: "Community Designer",
    company: "DevOps Pioneer Community",
    period: "2025",
    type: "Volunteer",
    description:
      "Designed promotional materials including event posters and flex banners, and participated in community initiatives and events.",
    tags: ["Graphic Design", "Branding", "Event Design", "Community"],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.636 5.636l2.121 2.121M16.243 16.243l2.121 2.121M16.243 7.757l-2.121 2.121M7.757 16.243l-2.121 2.121"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ExperienceSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500 mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl font-bold text-stone-900 tracking-tight mb-16">
            Where I&apos;ve Worked
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div ref={lineRef} className="absolute left-6 top-0 bottom-0 w-px bg-stone-100 hidden sm:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-violet-400 to-purple-300"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-6 w-12 items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-violet-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  </div>
                </div>

                {/* Card */}
                <div className="group bg-[#f8f8fb] rounded-3xl border border-stone-100 p-7 hover:shadow-xl hover:shadow-stone-100/60 hover:border-violet-100 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 shrink-0 group-hover:bg-violet-100 transition-colors">
                        {exp.icon}
                      </div>
                      <div>
                        <div className="flex items-center flex-wrap gap-2 mb-1">
                          <h3 className="text-lg font-bold text-stone-900 group-hover:text-violet-600 transition-colors">
                            {exp.role}
                          </h3>
                          <span className="text-[10px] font-bold bg-violet-50 text-violet-600 border border-violet-100 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-stone-500">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-stone-400 bg-stone-100 px-3 py-1 rounded-full shrink-0 self-start">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed mb-5 ml-14">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 ml-14">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white text-stone-500 border border-stone-200 px-3 py-1 rounded-full hover:border-violet-200 hover:text-violet-600 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
