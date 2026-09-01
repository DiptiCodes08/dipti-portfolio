"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  role: string;
  tools: string[];
  tags: string[];
  category: string;
  accentColor: string;
  bgGradient: string;
  imagePath: string;
  imageAlt: string;
  featured?: boolean;
  /** "case-study" shows "View Case Study →", "project" shows "View Project →" */
  buttonType?: "case-study" | "project";
  actionHref?: string;
  figmaHref?: string;
  index?: number;
}

function ImagePlaceholder({
  label,
  bgGradient,
  accentColor,
}: {
  label: string;
  bgGradient: string;
  accentColor: string;
}) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{ background: bgGradient }}
    >
      {/* Camera / image icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{ background: accentColor + "33" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="text-center px-4">
        <p className="text-white/90 text-xs font-semibold">{label}</p>
        <p className="text-white/50 text-[10px] mt-0.5">Replace with project image</p>
      </div>
    </div>
  );
}

export default function ProjectCard({
  title,
  subtitle,
  role,
  tools,
  tags,
  category,
  accentColor,
  bgGradient,
  imagePath,
  imageAlt,
  featured = false,
  buttonType = "case-study",
  actionHref = "#",
  figmaHref,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.12, duration: 0.65, ease: "easeOut" }}
      className={`group relative bg-white rounded-3xl border overflow-hidden flex flex-col
        shadow-sm hover:shadow-2xl hover:shadow-violet-100/60 hover:-translate-y-1.5
        transition-all duration-300
        ${featured
          ? "border-violet-100 hover:border-violet-200 ring-1 ring-violet-100/50"
          : "border-stone-100 hover:border-stone-200"
        }`}
    >
      {/* Cover image area */}
      <div
        className="relative overflow-hidden aspect-[16/9]"
        style={{ background: bgGradient }}
      >
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Placeholder layer — sits behind the image; shows when image is missing */}
        <div className="absolute inset-0 -z-10">
          <ImagePlaceholder
            label={`${title} — Project Cover`}
            bgGradient={bgGradient}
            accentColor={accentColor}
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          {featured && (
            <span className="bg-violet-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
              Featured
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm text-stone-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[10px] font-bold text-violet-500 uppercase tracking-[0.15em] mb-2">
          {role}
        </p>
        <h3 className="text-xl font-bold text-stone-900 mb-1.5 group-hover:text-violet-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-stone-500 leading-relaxed mb-4">{subtitle}</p>

        {/* Tools */}
        <div className="mb-4">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">Tools</p>
          <div className="flex flex-wrap gap-1.5">
            {tools.map((t) => (
              <span
                key={t}
                className="text-[10px] bg-violet-50 text-violet-600 border border-violet-100 px-2.5 py-1 rounded-full font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-stone-50 text-stone-500 border border-stone-100 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            href={actionHref}
            className="group/link inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-700 transition-colors"
          >
            {buttonType === "case-study" ? "View Case Study" : "View Project"}
            <svg
              className="transition-transform duration-200 group-hover/link:translate-x-1"
              width="14" height="14" viewBox="0 0 16 16" fill="none"
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}
