import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackToWork from "@/components/BackToWork";

export const metadata: Metadata = {
  title: "MediQ — Project Overview | Dipti Aryal",
  description:
    "Project overview for MediQ, an AI-powered medical appointment platform. UI/UX design and development by Dipti Aryal.",
};

function ProjectImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-6">
      <div className="relative w-full rounded-2xl overflow-hidden bg-violet-50 border border-violet-100">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="w-full h-auto object-cover"
          unoptimized
        />
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-stone-400 mt-3 font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function MediQProject() {
  return (
    <div className="bg-[#f8f8fb] min-h-screen">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <BackToWork />
          <Link href="/#contact" className="text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors">
            Dipti Aryal
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full border border-violet-100 mb-5">
            Project Overview
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-[1.1] mb-5">
            MediQ
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed max-w-2xl mb-8">
            An AI-powered platform that simplifies medical appointment booking,
            symptom checking, and patient-doctor communication.
          </p>

          {/* Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Role",     value: "UI/UX Designer & Developer" },
              { label: "Type",     value: "Web App"                    },
              { label: "Tools",    value: "Figma, React"               },
              { label: "Year",     value: "2025"                       },
            ].map((m) => (
              <div key={m.label} className="bg-white rounded-2xl border border-stone-100 p-4">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">{m.label}</p>
                <p className="text-sm font-semibold text-stone-800">{m.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cover image
            File: /public/images/mediq/cover.png */}
        <ProjectImage
          src="/images/mediq/cover.png"
          alt="MediQ — AI-Powered Medical Appointment Platform"
          caption="MediQ — project overview"
        />

        {/* Figma link */}
        <div className="flex items-center gap-3 my-8 p-4 bg-white rounded-2xl border border-stone-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm text-stone-500">View prototype:</span>
          <Link
            href="https://www.figma.com/proto/RqWw8STE8qiu5IuvPWrPUt/Doctor-Appointment-Booking?node-id=2002-101&p=f&t=sAInlYKfIbNWYmuG-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2002%3A101" // ← Replace with your real Figma prototype URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-violet-600 hover:text-violet-700 underline underline-offset-2 transition-colors"
          >
            Open Figma Prototype ↗
          </Link>
        </div>

        {/* About the project */}
        <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-12 mb-4">About the Project</h2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-6">
          MediQ is an AI-assisted healthcare platform designed to reduce friction in booking medical appointments
          and communicating with healthcare providers. This was my final-year project, where I worked on the
          project from design through development.
        </p>

        <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-12 mb-4">My Role</h2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          As the UI/UX Designer and Developer, I was responsible for the design process, from user research,
          wireframing, and prototyping in Figma through to developing and implementing the platform.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["Figma", "React", "User Research", "Prototyping", "UI Design", "Development"].map((t) => (
            <span key={t} className="text-xs font-semibold bg-violet-50 text-violet-600 border border-violet-100 px-3 py-1.5 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-12 mb-6">UI Screens</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { src: "/images/mediq/screen-1.png", alt: "MediQ — screen 1" },
            { src: "/images/mediq/screen-2.png", alt: "MediQ — screen 2" },
            { src: "/images/mediq/screen-3.png", alt: "MediQ — screen 3" },
            { src: "/images/mediq/screen-4.png", alt: "MediQ — screen 4" },
          ].map((s) => (
            <div key={s.src} className="relative rounded-2xl overflow-hidden bg-violet-50 border border-violet-100 aspect-[4/3] flex items-center justify-center">
              <Image src={s.src} alt={s.alt} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-violet-50 to-purple-50">
                <p className="text-xs font-semibold text-violet-300">{s.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note — honest framing */}
        <div className="mt-12 p-5 bg-violet-50/60 rounded-2xl border border-violet-100">
          <p className="text-sm text-stone-500 leading-relaxed">
            This project showcases my UI/UX design and front-end development skills.
            Explore the interactive prototype above to see the full experience, or{" "}
            <Link href="/#contact" className="text-violet-600 font-semibold hover:underline">
              get in touch
            </Link>{" "}
            if you&apos;d like to discuss the design decisions behind it.
          </p>
        </div>

        {/* Footer nav */}
        <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <BackToWork />
          <Link
            href="/work/homeease"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-violet-600 transition-colors"
          >
            Next: HomeEase Case Study
            <svg className="transition-transform duration-200 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
