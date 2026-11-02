import type { Metadata } from "next";
import Link from "next/link";
import BackToWork from "@/components/BackToWork";

export const metadata: Metadata = {
  title: "UX Annotator Internship — Progressive Labs | Dipti Aryal",
  description:
    "UX annotation work at Progressive Labs — capturing website screenshots, using bounding boxes to highlight click targets, and documenting user flows for Watobu, Nihongo Nepal, and Foundery.",
};

const deliverables = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Website Screenshot Capture",
    description:
      "Systematically captured full-page and viewport screenshots across Watobu's web product to create a visual inventory of all user-facing screens.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <rect x="7" y="7" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 9h2M7 14h10M7 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Bounding Box Annotation",
    description:
      "Applied precise bounding boxes over interactive elements — buttons, links, form fields — to highlight click targets and define interaction zones for UX analysis.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 6h10M5 8v8M19 8v8M7 18h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "User Flow Documentation",
    description:
      "Mapped and documented end-to-end user flows through key journeys on the platform, providing structured records for the UX team to reference during analysis and redesign.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15 8.5H21.5L16 12.5L18.5 19L12 15L5.5 19L8 12.5L2.5 8.5H9L12 2Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Graphic Design — Nihongo Nepal",
    description:
      "Created graphic design assets for Nihongo Nepal as part of the same internship programme, producing visual materials aligned with the brand identity.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Testimonial — Foundery",
    description:
      "Provided a written testimonial for Foundery as a contributor within the Progressive Labs internship ecosystem.",
  },
];

export default function WatobuProject() {
  return (
    <div className="bg-[#f8f8fb] min-h-screen">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <BackToWork />
          <Link
            href="/#contact"
            className="text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
          >
            Dipti Aryal
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100 mb-5">
            UX Annotation · Internship
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-[1.1] mb-5">
            UX Annotator Internship
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed max-w-2xl mb-8">
            Worked as a UX Annotator at Progressive Labs on the Watobu product —
            capturing screenshots, annotating click targets with bounding boxes,
            and documenting user flows to support UX analysis.
          </p>

          {/* Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Role",     value: "UX Annotator Intern"  },
              { label: "Company",  value: "Progressive Labs"     },
              { label: "Product",  value: "Watobu"               },
              { label: "Year",     value: "2026"                 },
            ].map((m) => (
              <div key={m.label} className="bg-white rounded-2xl border border-stone-100 p-4">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                  {m.label}
                </p>
                <p className="text-sm font-semibold text-stone-800">{m.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What I did */}
        <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-14 mb-6">
          What I Did
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="bg-white rounded-2xl border border-stone-100 p-5 hover:border-amber-200 hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-3">
                {d.icon}
              </div>
              <h3 className="text-sm font-bold text-stone-800 mb-1.5">{d.title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>

        {/* About the role */}
        <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-14 mb-4">
          About the Role
        </h2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          As a UX Annotator Intern at Progressive Labs, my primary assignment was
          the Watobu product. UX annotation is the process of systematically
          documenting a digital interface so that designers, researchers, and
          developers share a common understanding of how every element should
          behave and be interacted with.
        </p>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-4">
          My work involved taking structured screenshots of each screen in the
          product, then overlaying precise bounding boxes to mark every
          interactive element — buttons, navigation items, input fields, and
          links. Alongside this, I mapped out the user flows that connected these
          screens, turning a collection of static captures into a readable record
          of the full user journey.
        </p>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-8">
          Within the same internship programme at Progressive Labs, I also
          contributed graphic design work for Nihongo Nepal and provided a
          testimonial for Foundery.
        </p>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            "UX Annotation",
            "Screenshot Documentation",
            "Bounding Box Markup",
            "User Flow Mapping",
            "Figma",
            "Graphic Design",
            "Progressive Labs",
          ].map((t) => (
            <span
              key={t}
              className="text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100 px-3 py-1.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-14 p-5 bg-amber-50/60 rounded-2xl border border-amber-100">
          <p className="text-sm text-stone-500 leading-relaxed">
            This work was completed as part of my internship at Progressive Labs.{" "}
            <Link
              href="/#contact"
              className="text-violet-600 font-semibold hover:underline"
            >
              Get in touch
            </Link>{" "}
            if you&apos;d like to learn more about my annotation process or see
            additional work samples.
          </p>
        </div>

        {/* Footer nav */}
        <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <BackToWork />
          <Link
            href="/work/herald-sync"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-violet-600 transition-colors"
          >
            Next: Herald Sync
            <svg
              className="transition-transform duration-200 group-hover:translate-x-1"
              width="16" height="16" viewBox="0 0 16 16" fill="none"
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
