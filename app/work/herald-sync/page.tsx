import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackToWork from "@/components/BackToWork";

export const metadata: Metadata = {
  title: "Herald Sync — Project Overview | Dipti Aryal",
  description:
    "Project overview for Herald Sync, a mobile application UI/UX design completed during an internship at Herald Development Platform.",
};

function ProjectImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-6">
      <div className="relative w-full rounded-2xl overflow-hidden bg-blue-50 border border-blue-100">
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

export default function HeraldSyncProject() {
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
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 mb-5">
            Project Overview · Internship
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-[1.1] mb-5">
            Herald Sync
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed max-w-2xl mb-8">
            Mobile application UI/UX design completed during an internship at
            Herald Development Platform, focusing on improving the user
            experience.
          </p>

          {/* Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Role",        value: "UI/UX Design Intern"        },
              { label: "Company",     value: "Herald Development Platform" },
              { label: "Tools",       value: "Figma"                      },
              { label: "Year",        value: "2025"                       },
            ].map((m) => (
              <div key={m.label} className="bg-white rounded-2xl border border-stone-100 p-4">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">{m.label}</p>
                <p className="text-sm font-semibold text-stone-800">{m.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cover image
            File: /public/images/herald-sync/cover.png */}
        <ProjectImage
          src="/images/herald-sync/cover.png"
          alt="Herald Sync — Mobile Application Design"
          caption="Herald Sync — mobile app design"
        />

        {/* Figma link */}
        <div className="flex items-center gap-3 my-8 p-4 bg-white rounded-2xl border border-stone-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm text-stone-500">View my screens in Figma:</span>
          <Link
            href="https://www.figma.com/design/Weqa9pmNBNqJEvbkjRLr7S/Herald-Sync?node-id=555-2128&t=a791sFmUfKWkGnCh-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-2 transition-colors"
          >
            Open in Figma ↗
          </Link>
        </div>

        {/* About */}
        <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-12 mb-4">About the Project</h2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-6">
          Herald Sync is a mobile application built by a team at Herald
          Development Platform. As a UI/UX Design Intern, I contributed
          specific screens to the project as part of the collaborative
          design workflow.
        </p>

        <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-12 mb-4">My Contribution</h2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          During my internship, I worked on different projects and was assigned to different teams and features,
          including work related to the Herald Sync project. I contributed by making design changes and improvements
          to different website screens and features based on project requirements. I also worked on a parking-related
          feature as part of my assigned project work.
        </p>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          In addition, I conducted user research and created a UX case study for my own project, where I analyzed
          user needs, identified usability findings, and documented design decisions.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["Figma", "UI/UX Design", "Website Design", "Design Improvements", "User Research", "UX Case Study"].map((t) => (
            <span key={t} className="text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1.5 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-12 mb-6">My Screens</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { src: "/images/herald-sync/screen-1.png", alt: "Herald Sync — screen 1" },
            { src: "/images/herald-sync/screen-2.png", alt: "Herald Sync — screen 2" },
          ].map((s) => (
            <div key={s.src} className="relative rounded-2xl overflow-hidden bg-blue-50 border border-blue-100 aspect-[4/3] flex items-center justify-center">
              <Image src={s.src} alt={s.alt} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                <p className="text-xs font-semibold text-blue-200">{s.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 p-5 bg-blue-50/60 rounded-2xl border border-blue-100">
          <p className="text-sm text-stone-500 leading-relaxed">
            This work was completed as part of my internship at Herald Development Platform.
            View my screens in Figma above, or{" "}
            <Link href="/#contact" className="text-violet-600 font-semibold hover:underline">
              get in touch
            </Link>{" "}
            to learn more about my contributions.
          </p>
        </div>

        {/* Footer nav */}
        <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <BackToWork />
          <Link
            href="/work/mediq"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-violet-600 transition-colors"
          >
            Next: MediQ Project
            <svg className="transition-transform duration-200 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
