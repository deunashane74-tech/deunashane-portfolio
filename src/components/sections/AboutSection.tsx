"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            {/* Minimalist Image Placeholder / Frame */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-[#27272A] rounded-sm transform translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-[#18181B] rounded-sm overflow-hidden z-10">
                <img
                  src="/profile/shane-profile.jpg"
                  alt="Shane Dedil Deuna"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"; // Professional fallback
                  }}
                />
              </div>
              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#DC143C]/20 rounded-full blur-2xl z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-4">
              About Me
              <span className="h-px bg-[#27272A] flex-1 ml-4"></span>
            </h2>
            
            <div className="space-y-6 text-[#A1A1AA] text-lg leading-relaxed">
              <p>
                Hi, I'm <strong className="text-white font-semibold">Shane Dedil Deuna</strong>.
              </p>
              <p>
                As an aspiring Game Developer and Mobile Application Developer, I am passionate about creating interactive digital experiences, innovative applications, and engaging gameplay systems. I am currently an IT student deeply invested in building software that makes a difference.
              </p>
              <p>
                I enjoy transforming ideas into functional software through programming, creative problem-solving, and user-centered design. Whether it's architecting a mobile app's core mechanics or designing intuitive UI/UX, I am continuously learning and pushing my technical boundaries.
              </p>
              <p>
                My goal is to craft premium, robust, and beautiful applications that stand out in the modern digital landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
