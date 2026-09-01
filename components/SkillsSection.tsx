"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    label: "Design",
    color: "violet",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828M18.364 5.636l-2.828 2.828M8.464 15.536l-2.828 2.828"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Usability Testing",
      "User Journey Mapping",
      "Responsive Design",
      "Design Systems",
    ],
  },
  {
    label: "Development",
    color: "slate",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M8 6L3 12L8 18M16 6L21 12L16 18M13 4L11 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    skills: [
      "HTML",
      "CSS",
      "Responsive Web Design",
      "AWS",
      "Git",
      "GitHub",
    ],
  },
  {
    label: "Other",
    color: "purple",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    skills: [
      "Manual Testing",
      "Test Case Writing",
      "Bug Reporting",
      "Requirements Gathering",
      "User Stories",
      "Agile",
      "Scrum",
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string; tag: string; tagText: string; tagBorder: string }> = {
  violet: {
    bg: "bg-violet-50/60",
    border: "border-violet-100",
    text: "text-violet-600",
    iconBg: "bg-violet-100",
    tag: "bg-white",
    tagText: "text-violet-700",
    tagBorder: "border-violet-100",
  },
  slate: {
    bg: "bg-slate-50/60",
    border: "border-slate-200",
    text: "text-slate-600",
    iconBg: "bg-slate-100",
    tag: "bg-white",
    tagText: "text-slate-600",
    tagBorder: "border-slate-200",
  },
  purple: {
    bg: "bg-purple-50/60",
    border: "border-purple-100",
    text: "text-purple-600",
    iconBg: "bg-purple-100",
    tag: "bg-white",
    tagText: "text-purple-700",
    tagBorder: "border-purple-100",
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#f8f8fb]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500 mb-4 block">
            Skills &amp; Tools
          </span>
          <h2 className="text-4xl font-bold text-stone-900 tracking-tight mb-16">
            What I Work With
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: ci * 0.1, duration: 0.6, ease: "easeOut" }}
                className={`${c.bg} border ${c.border} rounded-3xl p-7 hover:shadow-lg transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-2xl ${c.iconBg} flex items-center justify-center ${c.text}`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-stone-900">{cat.label}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.04, duration: 0.3, ease: "easeOut" }}
                      whileHover={{ scale: 1.04 }}
                      className={`text-xs font-semibold ${c.tag} ${c.tagText} border ${c.tagBorder} px-3.5 py-1.5 rounded-full cursor-default shadow-sm`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
