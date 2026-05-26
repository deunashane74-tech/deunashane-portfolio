"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Academic Background
          </h2>
          <p className="text-[#A1A1AA] text-lg">
            My educational journey and foundational knowledge.
          </p>
        </motion.div>

        <div className="relative border-l border-[#27272A] ml-4 md:ml-6 space-y-12 pb-4">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute w-10 h-10 bg-[#18181B] rounded-full -left-[20.5px] top-0 flex items-center justify-center border border-[#27272A] z-10 group-hover:border-[#DC143C] transition-colors">
                <GraduationCap size={18} className="text-[#DC143C]" />
              </div>
              
              <div className="bg-[#18181B] p-6 rounded-sm border border-[#27272A] hover:border-[#DC143C]/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#DC143C] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#DC143C] bg-[#DC143C]/10 rounded-sm">
                  {item.period}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {item.school}
                </h3>
                
                <p className="text-[#A1A1AA] font-medium text-lg mb-4">
                  {item.degree}
                </p>

                {item.expectedGraduation && (
                  <p className="text-sm text-[#A1A1AA] mb-4">
                    Expected Graduation: <span className="text-white">{item.expectedGraduation}</span>
                  </p>
                )}

                {item.areasOfStudy && (
                  <div className="mt-4 pt-4 border-t border-[#27272A]">
                    <h4 className="text-sm font-semibold text-white mb-3">Relevant Areas of Study:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.areasOfStudy.map((area, i) => (
                        <li key={i} className="flex items-center text-sm text-[#A1A1AA] gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#DC143C]/60" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
