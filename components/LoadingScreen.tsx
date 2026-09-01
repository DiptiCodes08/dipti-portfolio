"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <div className="text-center">
            <motion.p
              className="text-2xl font-bold tracking-[0.25em] text-stone-900 uppercase"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
            >
              Dipti Aryal
            </motion.p>
            <motion.p
              className="text-xs font-medium tracking-[0.35em] text-violet-500 uppercase mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.4 } }}
            >
              UI/UX Designer
            </motion.p>
            {/* Loading bar */}
            <motion.div
              className="mt-6 mx-auto h-0.5 bg-stone-100 rounded-full overflow-hidden"
              style={{ width: 80 }}
            >
              <motion.div
                className="h-full bg-violet-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%", transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" } }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
