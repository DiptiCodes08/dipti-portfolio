import Link from "next/link";

export default function BackToWork() {
  return (
    <Link
      href="/#work"
      className="group inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-violet-600 transition-colors"
    >
      <svg
        className="transition-transform duration-200 group-hover:-translate-x-1"
        width="16" height="16" viewBox="0 0 16 16" fill="none"
      >
        <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Back to Work
    </Link>
  );
}
