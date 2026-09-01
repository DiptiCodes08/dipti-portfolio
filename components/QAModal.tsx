"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const screenshots = [
  {
    label: "Test Case Sheet",
    src: "/images/qa-work/sheet-1.png",
    description: "Test case documentation with test steps, expected results, actual results, and pass/fail status",
  },
  {
    label: "Bug Report Sheet",
    src: "/images/qa-work/sheet-2.png",
    description: "Bug reports with Bug ID, module, severity, priority, steps to reproduce, assigned developer, and status",
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function QAModal({ open, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="qa-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            key="qa-modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="qa-modal-title"
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl shadow-stone-200/80 border border-stone-100">

              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-stone-100 px-8 py-5 flex items-start justify-between rounded-t-3xl z-10">
                <div>
                  <span className="text-[10px] font-bold text-violet-500 uppercase tracking-[0.2em] block mb-1">
                    QA &amp; Software Testing
                  </span>
                  <h2 id="qa-modal-title" className="text-xl font-bold text-stone-900">
                    Excel Testing Work
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="shrink-0 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors ml-4 mt-0.5"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="px-8 py-7">
                {/* Description */}
                <p className="text-sm text-stone-500 leading-relaxed mb-7">
                  Manual software testing and test case documentation using
                  Microsoft Excel, covering functional testing, UI testing,
                  and bug reporting.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Manual Testing", "Test Cases", "Functional Testing", "UI Testing", "Bug Reporting", "Excel"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold bg-violet-50 text-violet-600 border border-violet-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Screenshots */}
                <div className="flex flex-col gap-5">
                  {screenshots.map((shot, i) => (
                    <div key={i} className="rounded-2xl border border-stone-100 overflow-hidden">
                      <div className="relative w-full bg-stone-50">
                        <Image
                          src={shot.src}
                          alt={shot.label}
                          width={1200}
                          height={700}
                          className="w-full h-auto object-contain"
                          unoptimized
                        />
                      </div>
                      <div className="px-4 py-3 bg-white border-t border-stone-100">
                        <p className="text-xs font-semibold text-stone-700 mb-0.5">{shot.label}</p>
                        <p className="text-xs text-stone-400 leading-relaxed">{shot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
