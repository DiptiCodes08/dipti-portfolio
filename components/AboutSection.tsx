"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const skills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "Figma",
  "Responsive Design",
  "Web Development",
  "Design Systems",
];

export default function AboutSection() {
  const tagsRef = useRef(null);
  const tagsInView = useInView(tagsRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Photo */}
        <ScrollReveal direction="left">
          <div className="relative mx-auto max-w-sm">
            {/* Main image area */}
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-200/60 border border-violet-100/50">
              <Image
                src="/images/profile/photo.jpg"
                alt="Dipti Aryal"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Decorative gradient overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.5 } }}
              viewport={{ once: true }}
              className="absolute -right-6 top-8 bg-white rounded-2xl shadow-xl shadow-stone-200/60 border border-stone-100 p-4 w-40"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-xl bg-violet-100 flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2l1.6 3.2 3.6.5-2.6 2.5.6 3.6L8 10.1l-3.2 1.7.6-3.6L2.8 5.7l3.6-.5L8 2z" fill="#7c3aed"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-stone-800">Designer</span>
              </div>
              <p className="text-[10px] text-stone-400 leading-relaxed">CS background + design thinking</p>
            </motion.div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-3xl bg-violet-50 border border-violet-100 -z-10" />
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-2xl bg-purple-50 border border-purple-100 -z-10" />
          </div>
        </ScrollReveal>

        {/* Right — Content */}
        <div>
          <ScrollReveal delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500 mb-5 block">
              About Me
            </span>
            <h2 className="text-4xl font-bold text-stone-900 tracking-tight mb-6 leading-tight">
              Designing with purpose,<br />
              <span className="text-violet-600">thinking like a developer.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-stone-600 leading-relaxed mb-4 text-[15px]">
              I&apos;m a Computer Science graduate with hands-on experience in UI/UX
              design, user research, wireframing, prototyping, and usability
              testing. I enjoy transforming complex problems into simple and
              intuitive digital experiences.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-[15px]">
              My background in Computer Science helps me understand both the
              design and technical sides of digital products — so I can
              collaborate effectively with developers and build things that
              actually work.
            </p>
          </ScrollReveal>

          {/* Dual background strip */}
          <ScrollReveal delay={0.3}>
            <div className="flex gap-3 mb-8">
              <div className="flex-1 bg-violet-50 border border-violet-100 rounded-2xl p-4">
                <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center mb-2">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L10 6H15L11 9L13 14L8 11L3 14L5 9L1 6H6L8 1Z" fill="#7c3aed"/>
                  </svg>
                </div>
                <p className="text-xs font-bold text-stone-800">Design</p>
                <p className="text-[10px] text-stone-400 mt-0.5">User-centred thinking</p>
              </div>
              <div className="flex-1 bg-stone-50 border border-stone-100 rounded-2xl p-4">
                <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center mb-2">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M5 4l-3 4 3 4M11 4l3 4-3 4M9 2l-2 12" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-xs font-bold text-stone-800">Development</p>
                <p className="text-[10px] text-stone-400 mt-0.5">Technical foundation</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Skill tags */}
          <div ref={tagsRef} className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={tagsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                className="text-xs bg-stone-50 text-stone-600 border border-stone-200 px-3.5 py-1.5 rounded-full font-medium
                  hover:bg-violet-50 hover:border-violet-200 hover:text-violet-700 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <Link
            href="#skills"
            className="group inline-flex items-center gap-2 text-violet-600 font-bold text-sm hover:text-violet-700 transition-colors"
          >
            See All Skills
            <svg className="transition-transform duration-200 group-hover:translate-x-1" width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
