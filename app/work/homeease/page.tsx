import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackToWork from "@/components/BackToWork";

export const metadata: Metadata = {
  title: "HomeEase — UX Case Study | Dipti Aryal",
  description:
    "A full UX case study for HomeEase, a local service discovery app. Covers user research, problem definition, wireframing, prototyping, and usability testing.",
};

// ─── Image helper ────────────────────────────────────────────────────────────
// Place your images in /public/images/homeease/
// Supported filenames are documented in the comments next to each slot below.
function CaseImage({
  src,
  alt,
  caption,
  priority = false,
  width = 1200,
  height = 700,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="my-8">
      <div className="relative w-full rounded-2xl overflow-hidden bg-teal-50 border border-teal-100">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-contain"
          priority={priority}
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

// ─── Section heading ──────────────────────────────────────────────────────────
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-16 mb-4">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold text-stone-800 mt-8 mb-3">{children}</h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] text-stone-600 leading-relaxed">{children}</p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomeEaseCaseStudy() {
  return (
    <div className="bg-[#f8f8fb] min-h-screen">
      {/* ── Top nav bar ── */}
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

        {/* ── Hero ── */}
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 mb-5">
            UX Case Study
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-[1.1] mb-5">
            HomeEase
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed max-w-2xl mb-8">
            A mobile-first app connecting locals to trusted home service
            providers — from plumbing to cleaning — in just a few taps.
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Role",     value: "UI/UX Designer" },
              { label: "Type",     value: "Mobile App"     },
              { label: "Tools",    value: "Figma"          },
              { label: "Year",     value: "2025"           },
            ].map((m) => (
              <div key={m.label} className="bg-white rounded-2xl border border-stone-100 p-4">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">{m.label}</p>
                <p className="text-sm font-semibold text-stone-800">{m.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Cover image ──
            File: /public/images/homeease/cover.png
            Suggested: hero screen or overview mockup */}
        <CaseImage
          src="/images/homeease/cover.png"
          alt="HomeEase app — cover"
          caption="HomeEase — Local Service Discovery App"
          priority
        />

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 my-8">
          {/* Figma prototype */}
          <div className="flex-1 flex items-center gap-3 p-4 bg-white rounded-2xl border border-stone-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm text-stone-500">Case study:</span>
            <Link
              href="https://www.figma.com/proto/vLlc1FcekbXDxyjfLBfGo3/CaseStudy-of-HomeEase?node-id=487-177&t=kNHJ6JpkGVy2ebaf-0&scaling=min-zoom&content-scaling=fixed&page-id=316%3A596"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-teal-600 hover:text-teal-700 underline underline-offset-2 transition-colors"
            >
              Open Figma Prototype ↗
            </Link>
          </div>

          {/* Live project / prototype link */}
          <div className="flex-1 flex items-center gap-3 p-4 bg-white rounded-2xl border border-stone-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#0d9488" strokeWidth="1.5"/>
              <path d="M12 3c-2 2.5-3 5-3 9s1 6.5 3 9M12 3c2 2.5 3 5 3 9s-1 6.5-3 9M3 12h18" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-sm text-stone-500">Project link:</span>
            <Link
              href="https://www.figma.com/design/Y8fgzo3bJy4EkNSdD7zluv/%F0%9F%9A%80-Project-Starter-Template-Share-?node-id=0-1&t=KY244LR7I198icAW-1" // ← Replace with your live project or Figma project URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-teal-600 hover:text-teal-700 underline underline-offset-2 transition-colors"
            >
              View Project ↗
            </Link>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────────────────────
            CASE STUDY CONTENT
            Fill each section below with your actual content.
            Each image slot has a comment showing the exact filename to use.
        ──────────────────────────────────────────────────────────────────── */}

        <H2>Overview</H2>
        <P>
          {/* Replace this paragraph with your own project overview */}
          HomeEase is a mobile application designed to help users in Kathmandu
          find and book trusted local service providers quickly and easily. The
          project aimed to solve the problem of unreliable, word-of-mouth
          service discovery in the local market.
        </P>

        <H2>Problem</H2>
        <P>
          {/* Replace with your problem statement */}
          Finding reliable home service providers — plumbers, electricians,
          cleaners — is a common pain point for urban households. People rely on
          personal networks, which is slow and inconsistent, and there is no
          trusted, centralised platform for the local market.
        </P>

        {/* Image: /public/images/homeease/problem.png
            Suggested: problem statement slide or pain-point diagram */}
        <CaseImage
          src="/images/homeease/problem.png"
          alt="HomeEase — problem definition"
          caption="Problem definition"
        />

        <H2>Research</H2>
        <P>
          {/* Replace with your research summary */}
          I conducted user interviews and surveys to understand how people
          currently find home service providers, what frustrates them, and what
          they would expect from a digital solution.
        </P>

        <H3>Key Findings</H3>
        <ul className="list-disc list-inside space-y-2 text-[15px] text-stone-600 leading-relaxed mb-4">
          {/* Replace these with your actual research findings */}
          <li>Users rely heavily on word-of-mouth recommendations</li>
          <li>Trust and verified reviews are the top priority</li>
          <li>Booking needs to be fast — users want same-day availability</li>
          <li>Price transparency is important before booking</li>
        </ul>

        {/* Image: /public/images/homeease/research.png
            Suggested: research notes, affinity map, or survey results */}
        <CaseImage
          src="/images/homeease/research.png"
          alt="HomeEase — user research findings"
          caption="User research findings"
        />

        <H2>User Pain Points</H2>
        <P>
          {/* Replace with your user pain points */}
          Based on the research, three core pain points were identified that the
          design needed to address directly.
        </P>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          {[
            { n: "01", title: "No trusted source",  body: "No reliable platform to verify service providers" },
            { n: "02", title: "Slow discovery",      body: "Finding someone through contacts takes too long"   },
            { n: "03", title: "No price clarity",    body: "Pricing is unknown until the provider arrives"     },
          ].map((p) => (
            <div key={p.n} className="bg-white rounded-2xl border border-stone-100 p-5">
              <span className="text-2xl font-black text-teal-100">{p.n}</span>
              <p className="text-sm font-bold text-stone-800 mt-2 mb-1">{p.title}</p>
              <p className="text-xs text-stone-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <H2>User Flow</H2>
        <P>
          {/* Replace with your user flow description */}
          I mapped out the core user journey — from opening the app to
          successfully booking a service provider.
        </P>

        {/* Image: /public/images/homeease/user-flow.png
            Suggested: user flow diagram or journey map */}
        <CaseImage
          src="/images/homeease/user-flow.png"
          alt="HomeEase — user flow diagram"
          caption="Core user flow"
        />

        <H2>Wireframes</H2>
        <P>
          {/* Replace with your wireframing description */}
          Low-fidelity wireframes were created to explore the key screens and
          test the navigation structure before moving to high-fidelity design.
        </P>

        {/* Image: /public/images/homeease/wireframes.png
            Suggested: wireframe screens side by side */}
        <CaseImage
          src="/images/homeease/wireframes.png"
          alt="HomeEase — wireframes"
          caption="Low-fidelity wireframes"
        />

        <H2>UI Design</H2>
        <P>
          {/* Replace with your UI design description */}
          High-fidelity screens were designed in Figma following a clean,
          accessible visual system with a teal colour palette to convey
          trust and reliability.
        </P>

        {/* Image: /public/images/homeease/ui-screens.png
            Suggested: final UI screens or component overview */}
        <CaseImage
          src="/images/homeease/ui-screens.png"
          alt="HomeEase — final UI screens"
          caption="Final high-fidelity screens"
          width={3840}
          height={5035}
        />

        <H2>Final Solution</H2>
        <P>
          {/* Replace with your final solution summary */}
          The final design delivers a fast, trustworthy, and easy-to-use service
          discovery experience — with verified provider profiles, transparent
          pricing, and a streamlined booking flow.
        </P>

        {/* Image: /public/images/homeease/final.png
            Suggested: polished mockup or feature highlight screens */}
        <CaseImage
          src="/images/homeease/final.png"
          alt="HomeEase — final design"
          caption="Final design solution"
        />

        <H2>Key Learnings</H2>
        <ul className="list-disc list-inside space-y-2 text-[15px] text-stone-600 leading-relaxed">
          {/* Replace with your actual learnings */}
          <li>Trust signals are more important than visual polish for service apps</li>
          <li>Usability testing early caught navigation issues before high-fidelity work</li>
          <li>Simplifying the booking flow from 6 steps to 3 improved task completion</li>
        </ul>

        {/* ── Footer nav ── */}
        <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <BackToWork />
          <Link
            href="/work/herald-sync"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-violet-600 transition-colors"
          >
            Next: Herald Sync
            <svg className="transition-transform duration-200 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
}
