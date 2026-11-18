import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackToWork from "@/components/BackToWork";

export const metadata: Metadata = {
  title: "AURELLE — AI Luxury Jewelry Campaign | Dipti Aryal",
  description:
    "A fictional luxury jewelry brand campaign built with AI-generated imagery and designed for Instagram and Pinterest. Covers brand identity, AI image generation, social media design, and content planning.",
};

// ─── Image helper ─────────────────────────────────────────────────────────────
function CaseImage({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-8">
      <div className="relative w-full rounded-2xl overflow-hidden bg-amber-50 border border-amber-100">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="w-full h-auto object-contain"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          unoptimized
        />
        {/* Placeholder shown until real image is added */}
        <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-amber-50 via-yellow-50 to-stone-50">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l2.5 5.5H20l-4.5 3.5 1.5 6L12 14l-5 3 1.5-6L4 7.5h5.5L12 2Z"
              stroke="#d97706" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <p className="text-xs font-semibold text-amber-300 text-center px-6">
            {alt}
          </p>
        </div>
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-stone-400 mt-3 font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── Section helpers ──────────────────────────────────────────────────────────
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-stone-900 tracking-tight mt-16 mb-4">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] text-stone-600 leading-relaxed">{children}</p>
  );
}

// ─── Content calendar data ────────────────────────────────────────────────────
const calendarRows = [
  {
    day: "Monday",
    platform: "Instagram",
    content: "New necklace launch (Post)",
    caption: "A little sparkle, a timeless statement. Meet our new gold necklace, made for every day.",
    hashtags: ["#LuxuryJewelry", "#GoldNecklace", "#JewelryLovers", "#TimelessElegance", "#Aurelle"],
    status: "Planned",
  },
  {
    day: "Tuesday",
    platform: "Instagram",
    content: "Jewelry styling tips (Carousel)",
    caption: "3 simple ways to style your gold pieces. Swipe to see how. Less is always more.",
    hashtags: ["#JewelryStyling", "#GoldJewelry", "#MinimalJewelry", "#StyleTips", "#Aurelle"],
    status: "Planned",
  },
  {
    day: "Wednesday",
    platform: "Instagram",
    content: "Product close-up (Story)",
    caption: "Every detail matters. Look closer at the shine of 18K gold.",
    hashtags: ["#JewelryCloseUp", "#GoldDetails", "#FineJewelry", "#LuxuryStyle", "#Aurelle"],
    status: "Planned",
  },
  {
    day: "Thursday",
    platform: "Instagram",
    content: "Brand introduction (Post)",
    caption: "Hello, we are AURELLE. Elegant, minimal, and made to be worn every day. Welcome to our world.",
    hashtags: ["#NewBrand", "#JewelryBrand", "#MinimalLuxury", "#ElegantStyle", "#Aurelle"],
    status: "Planned",
  },
  {
    day: "Friday",
    platform: "Pinterest",
    content: "Elegance in Every Detail (Pin)",
    caption: "Elegance in every detail. Save this for your next gold jewelry inspiration.",
    hashtags: ["#GoldJewelry", "#JewelryInspiration", "#LuxuryStyle", "#MinimalJewelry", "#Aurelle"],
    status: "Planned",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AurellePage() {
  return (
    <div className="bg-[#f8f8fb] min-h-screen">

      {/* ── Top nav ── */}
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
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100 mb-5">
            Campaign Design · AI + Social Media
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-[1.1] mb-5">
            AURELLE
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed max-w-2xl mb-8">
            A fictional luxury jewelry brand campaign built with AI-generated
            imagery — designed for Instagram and Pinterest with a consistent
            champagne, ivory, and gold brand identity.
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Role",     value: "Designer"                        },
              { label: "Type",     value: "Social Media Campaign"           },
              { label: "Tools",    value: "AI Image Gen, Canva, Sheets"     },
              { label: "Year",     value: "2026"                            },
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

        {/* ── Cover image ──
            File: /public/images/aurelle/cover.png
            Suggested: brand hero shot or best AI jewelry image */}
        <CaseImage
          src="/images/aurelle/cover.png"
          alt="AURELLE luxury jewelry campaign — cover image showing champagne and gold brand aesthetic"
          caption="AURELLE — AI Luxury Jewelry Campaign"
          priority
        />

        {/* ══════════════════════════════════════════════
            SECTION 1 — OVERVIEW
        ══════════════════════════════════════════════ */}
        <H2>Overview</H2>
        <P>
          AURELLE is a fictional luxury jewelry brand created as a personal
          campaign design project. The goal was to explore how AI image
          generation tools could be used alongside Canva to produce a
          polished, professional-looking social media campaign — from raw
          product imagery through to final platform-ready posts.
        </P>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          {[
            {
              n: "01",
              title: "AI Image Generation",
              body: "Generated and refined jewelry product images using AI tools, iterating prompts for quality and brand fit.",
            },
            {
              n: "02",
              title: "Social Media Design",
              body: "Designed 3 Instagram posts, 2 Stories, and 1 Pinterest pin in Canva with a unified brand style.",
            },
            {
              n: "03",
              title: "Content Planning",
              body: "Planned a 5-day content calendar with post copy, captions, and hashtag strategy in Google Sheets.",
            },
          ].map((c) => (
            <div key={c.n} className="bg-white rounded-2xl border border-stone-100 p-5">
              <span className="text-2xl font-black text-amber-100">{c.n}</span>
              <p className="text-sm font-bold text-stone-800 mt-2 mb-1">{c.title}</p>
              <p className="text-xs text-stone-500 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 2 — BRAND
        ══════════════════════════════════════════════ */}
        <H2>Brand Identity</H2>
        <P>
          The AURELLE brand is built around three core values: luxury,
          timelessness, and elegance. Every design decision — from color to
          typography — was made to reinforce those values consistently across
          all platforms.
        </P>

        {/* Color palette */}
        <div className="my-8 bg-white rounded-2xl border border-stone-100 p-6">
          <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">
            Colour Palette
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Champagne",  hex: "#F7E7CE", text: "text-stone-700" },
              { name: "Ivory",      hex: "#FFFFF0", text: "text-stone-700" },
              { name: "Gold",       hex: "#C9A84C", text: "text-white"     },
              { name: "Warm Stone", hex: "#8C7B6B", text: "text-white"     },
              { name: "Deep Black", hex: "#1A1A1A", text: "text-white"     },
            ].map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-2xl border border-stone-200 shadow-sm"
                  style={{ background: c.hex }}
                />
                <div className="text-center">
                  <p className="text-xs font-bold text-stone-700">{c.name}</p>
                  <p className="text-[10px] text-stone-400 font-mono">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="my-6 bg-white rounded-2xl border border-stone-100 p-6">
          <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">
            Typography
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <p
                className="text-3xl text-stone-900 mb-1"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Playfair Display
              </p>
              <p className="text-xs text-stone-400">Headlines · Serif · Luxury feel</p>
            </div>
            <div className="flex-1">
              <p className="text-3xl font-light tracking-widest text-stone-700 mb-1">
                MONTSERRAT
              </p>
              <p className="text-xs text-stone-400">Body & captions · Sans-serif · Clean</p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 3 — AI IMAGES
        ══════════════════════════════════════════════ */}
        <H2>AI Jewelry Images</H2>
        <P>
          Product images were generated using AI tools, with multiple prompt
          iterations to achieve the right lighting, material texture, and
          luxury aesthetic. Each image was reviewed and selected for brand
          consistency before being used in the campaign designs.
        </P>



        {/* ══════════════════════════════════════════════
            SECTION 4 — SOCIAL MEDIA DESIGNS
        ══════════════════════════════════════════════ */}
        <H2>Social Media Designs</H2>
        <P>
          All social media assets were designed in Canva using the AURELLE
          brand palette and typography. Each format — Instagram post, Story,
          and Pinterest pin — was sized and styled for its specific platform
          while maintaining a unified look and feel across the campaign.
        </P>

        {/* Instagram Posts */}
        <p className="text-sm font-bold text-stone-700 mt-8 mb-4 uppercase tracking-wider text-xs">
          Instagram Posts (1080 × 1080 px)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              src: "/images/aurelle/instagram-post-1.png",
              alt: "AURELLE Instagram post 1 — gold necklace with brand tagline on champagne background",
              caption: "Post 1 — Necklace launch",
            },
            {
              src: "/images/aurelle/instagram-post-2.png",
              alt: "AURELLE Instagram post 2 — ring close-up with minimal gold typography on ivory background",
              caption: "Post 2 — Ring feature",
            },
            {
              src: "/images/aurelle/instagram-post-3.png",
              alt: "AURELLE Instagram post 3 — earrings editorial shot with AURELLE branding overlay",
              caption: "Post 3 — Earrings editorial",
            },
          ].map((s) => (
            <figure key={s.src} className="flex flex-col gap-2">
              <div className="relative w-full rounded-2xl overflow-hidden bg-amber-50 border border-amber-100 aspect-square flex items-center justify-center">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-amber-50 to-yellow-50">
                  <p className="text-xs font-semibold text-amber-200 text-center px-3">
                    {s.caption}
                  </p>
                </div>
              </div>
              <figcaption className="text-center text-xs text-stone-400 font-medium">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Instagram Stories */}
        <p className="text-sm font-bold text-stone-700 mt-8 mb-4 uppercase tracking-wider text-xs">
          Instagram Stories (1080 × 1920 px)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            {
              src: "/images/aurelle/instagram-story-1.png",
              alt: "AURELLE Instagram Story 1 — full-bleed jewelry hero image with swipe-up CTA in gold text",
              caption: "Story 1",
            },
            {
              src: "/images/aurelle/instagram-story-2.png",
              alt: "AURELLE Instagram Story 2 — behind the scenes AI creation process with champagne color overlay",
              caption: "Story 2",
            },
          ].map((s) => (
            <figure key={s.src} className="flex flex-col gap-2">
              <div className="relative w-full rounded-2xl overflow-hidden bg-amber-50 border border-amber-100 aspect-[9/16] flex items-center justify-center">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-b from-amber-50 to-yellow-50">
                  <p className="text-xs font-semibold text-amber-200 text-center px-4">
                    {s.caption}
                  </p>
                </div>
              </div>
              <figcaption className="text-center text-xs text-stone-400 font-medium">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Pinterest Pin */}
        <p className="text-sm font-bold text-stone-700 mt-8 mb-4 uppercase tracking-wider text-xs">
          Pinterest Pin (1000 × 1500 px)
        </p>
        <div className="max-w-xs mx-auto">
          <figure className="flex flex-col gap-2">
            <div className="relative w-full rounded-2xl overflow-hidden bg-amber-50 border border-amber-100 aspect-[2/3] flex items-center justify-center">
              <Image
                src="/images/aurelle/pinterest-pin.png"
                alt="AURELLE Pinterest pin — vertical jewelry mood board with gold necklace, brand name, and campaign tagline on ivory background"
                fill
                className="object-cover"
                loading="lazy"
                unoptimized
              />
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-b from-amber-50 to-yellow-50">
                <p className="text-xs font-semibold text-amber-200 text-center px-4">
                  Pinterest pin
                </p>
              </div>
            </div>
            <figcaption className="text-center text-xs text-stone-400 font-medium">
              Pinterest Pin — campaign mood board
            </figcaption>
          </figure>
        </div>

        {/* ══════════════════════════════════════════════
            SECTION 5 — CONTENT CALENDAR
        ══════════════════════════════════════════════ */}
        <H2>Content Calendar</H2>
        <p className="text-[15px] text-stone-600 leading-relaxed mb-8">
          A 5-day Instagram and Pinterest content plan for AURELLE, with captions and hashtags.
        </p>

        {/* ── Desktop table ── */}
        <div className="hidden sm:block overflow-hidden rounded-2xl border border-stone-100 bg-white mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50/60">
                {["Day", "Platform", "Content", "Caption", "Hashtags", "Status"].map((h) => (
                  <th
                    key={h}
                    className="text-left text-[10px] font-bold text-stone-400 uppercase tracking-wider px-5 py-3"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {calendarRows.map((row) => (
                <tr key={row.day} className="hover:bg-stone-50/40 transition-colors">
                  <td className="px-5 py-4 font-bold text-amber-600 text-xs whitespace-nowrap">
                    {row.day}
                  </td>
                  <td className="px-5 py-4 text-stone-600 text-xs whitespace-nowrap">
                    {row.platform}
                  </td>
                  <td className="px-5 py-4 text-stone-800 text-xs font-semibold">
                    {row.content}
                  </td>
                  <td className="px-5 py-4 text-stone-500 text-xs max-w-[220px]">
                    {row.caption}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1">
                      {row.hashtags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-amber-50 text-amber-700 border border-amber-100 px-2 py-0.5 rounded-full font-medium whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2.5 py-1 rounded-full">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mobile stacked cards ── */}
        <div className="flex flex-col gap-4 sm:hidden mb-6">
          {calendarRows.map((row) => (
            <div
              key={row.day}
              className="bg-white rounded-2xl border border-stone-100 p-5"
            >
              {/* Top row: day + platform + status */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-600">{row.day}</span>
                  <span className="text-[10px] text-stone-400">·</span>
                  <span className="text-xs text-stone-500">{row.platform}</span>
                </div>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2.5 py-1 rounded-full">
                  {row.status}
                </span>
              </div>
              {/* Content */}
              <p className="text-sm font-semibold text-stone-800 mb-2">{row.content}</p>
              {/* Caption */}
              <p className="text-xs text-stone-500 leading-relaxed mb-3">{row.caption}</p>
              {/* Hashtags */}
              <div className="flex flex-wrap gap-1.5">
                {row.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-amber-50 text-amber-700 border border-amber-100 px-2 py-0.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools used */}
        <div className="flex flex-wrap gap-2 mb-10 mt-6">
          {[
            "AI Image Generation",
            "ChatGPT / Adobe Firefly",
            "Canva",
            "Google Sheets",
            "Brand Design",
            "Content Strategy",
            "Social Media",
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
        <div className="mt-10 p-5 bg-amber-50/60 rounded-2xl border border-amber-100">
          <p className="text-sm text-stone-500 leading-relaxed">
            AURELLE is a personal creative project exploring AI-assisted campaign design.{" "}
            <Link href="/#contact" className="text-violet-600 font-semibold hover:underline">
              Get in touch
            </Link>{" "}
            if you&apos;d like to see the full content calendar or discuss the design process.
          </p>
        </div>

        {/* ── Footer nav ── */}
        <div className="mt-20 pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <BackToWork />
          <Link
            href="/work/mediq"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-violet-600 transition-colors"
          >
            Next: MediQ
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
