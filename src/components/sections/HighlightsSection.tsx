"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { highlights } from "@/data/portfolio";

export default function HighlightsSection() {
  return (
    <section className="py-12 bg-[#18181B] border-y border-[#27272A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2 text-sm md:text-base font-medium text-[#E4E4E7]"
            >
              <CheckCircle2 className="text-[#DC143C]" size={20} />
              {highlight}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
