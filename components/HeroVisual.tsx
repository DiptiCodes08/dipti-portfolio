"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function FloatCard({
  children,
  className,
  delay = 0,
  floatClass = "animate-float-a",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  floatClass?: string;
}) {
  return (
    <motion.div
      className={`absolute bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-stone-200/60 border border-white/80 ${floatClass} ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 30 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 30 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { mx.set(0); my.set(0); };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full max-w-[340px] lg:max-w-[400px] h-[420px] flex items-center justify-center"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-72 h-72 rounded-full bg-violet-200/40 blur-[60px] animate-pulse-glow" />
      </div>

      {/* Profile card — 3D tilt */}
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
        className="animate-float-b relative z-10 w-60 h-60 lg:w-64 lg:h-64 rounded-[2rem] overflow-hidden shadow-2xl shadow-violet-200/50 border-4 border-white"
      >
        <Image
          src="/images/profile/photo.jpg"
          alt="Dipti Aryal"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Inner shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none" />
      </motion.div>

      {/* Floating card — top right: Design skill */}
      <FloatCard className="top-4 -right-4 lg:-right-10 p-3.5 w-44 z-20" delay={0.5} floatClass="animate-float-a">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M8 2l1.6 3.2 3.6.5-2.6 2.5.6 3.6L8 10.1l-3.2 1.7.6-3.6L2.8 5.7l3.6-.5L8 2z" fill="#7c3aed"/>
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-bold text-stone-800">UI/UX Design</p>
            <p className="text-[9px] text-stone-400">Core Skill</p>
          </div>
        </div>
      </FloatCard>

      {/* Floating card — bottom left: skills */}
      <FloatCard className="bottom-8 -left-4 lg:-left-10 p-3.5 w-48 z-20" delay={0.7} floatClass="animate-float-b">
        <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-2">Key Tools</p>
        <div className="flex flex-wrap gap-1.5">
          {["Figma", "Research", "Prototyping", "Wireframes"].map((s) => (
            <span key={s} className="text-[9px] bg-violet-50 text-violet-700 px-2 py-0.5 rounded-full border border-violet-100 font-semibold">
              {s}
            </span>
          ))}
        </div>
      </FloatCard>

      {/* Floating card — bottom right: projects */}
      <FloatCard className="bottom-0 right-0 lg:-right-4 p-3 w-36 z-20" delay={0.9} floatClass="animate-float-c">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <p className="text-[10px] font-bold text-stone-700">Available</p>
        </div>
        <p className="text-[9px] text-stone-400 leading-relaxed">Open to design opportunities</p>
      </FloatCard>

      {/* Decorative ring */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full border border-violet-100/60 animate-spin-slow" />
      </div>
    </div>
  );
}
