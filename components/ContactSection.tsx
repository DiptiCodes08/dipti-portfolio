import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#f8f8fb] relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-100/30 blur-[100px]" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-50/60 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500 mb-6 block">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight mb-6 leading-[1.1]">
              Let&apos;s Create Something{" "}
              <span className="text-violet-600">Meaningful</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-stone-500 leading-relaxed mb-12 text-base">
              I&apos;m currently open to Junior UI/UX Designer, Intern, and Product
              Design roles. If you&apos;re working on something meaningful and think
              I could be a great fit, I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://mail.google.com/mail/?view=cm&to=aryaldipti42@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-violet-600 text-white font-semibold px-8 py-4 rounded-full
                  hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-200 hover:-translate-y-0.5
                  active:translate-y-0 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 6.5l7 4.5 7-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Contact Me
              </Link>
              <Link
                href="https://www.linkedin.com/in/dipti-aryal-73579931b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-stone-700 font-semibold px-8 py-4 rounded-full
                  border border-stone-200 hover:border-violet-300 hover:text-violet-600 hover:shadow-lg hover:-translate-y-0.5
                  active:translate-y-0 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 8v5M6 6v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M9 13v-3a2 2 0 014 0v3M9 10v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                LinkedIn
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
