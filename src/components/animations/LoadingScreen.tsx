"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5s loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F0F0F]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider animate-pulse-glow mb-4">
                Shane Dedil Deuna
              </h1>
              <p className="text-[#A1A1AA] text-lg md:text-xl font-medium tracking-widest uppercase">
                Game Developer & Mobile Developer
              </p>
              
              <div className="mt-12 flex flex-col items-center">
                <div className="h-[2px] w-48 bg-[#27272A] rounded-full overflow-hidden relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[#DC143C]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>
                <p className="text-xs text-[#A1A1AA] mt-4 uppercase tracking-widest animate-pulse">
                  Loading Portfolio...
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
}
