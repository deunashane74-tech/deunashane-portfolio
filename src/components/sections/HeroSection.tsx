"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { SiGodotengine, SiPython } from "react-icons/si";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { useEffect, useState } from "react";

// Subtle particles
const Particles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#DC143C]/20 rounded-full"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function HeroSection() {
  const titleText = "Shane Dedil Deuna";
  const subtitleText = "Aspiring Game Developer & Mobile Application Developer";

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-12 overflow-hidden bg-[#0F0F0F]">
      <Particles />

      {/* Floating Tech Icons Background */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-[#27272A] opacity-20 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCode size={120} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 text-[#27272A] opacity-20 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <SiGodotengine size={100} />
      </motion.div>

      <div className="z-10 max-w-4xl w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#27272A] bg-[#18181B]/50 backdrop-blur-sm text-xs font-semibold tracking-wide text-[#A1A1AA]"
        >
          AVAILABLE FOR INTERNSHIPS & FREELANCE
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          {titleText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 + index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 3 + titleText.length * 0.05 }}
            className="text-[#DC143C]"
          >
            |
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
          className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mb-10"
        >
          {subtitleText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-[#DC143C] text-white font-medium rounded-sm hover:bg-[#991B1B] transition-all transform hover:-translate-y-1 shadow-[0_0_15px_rgba(220,20,60,0.3)] hover:shadow-[0_0_25px_rgba(220,20,60,0.5)]"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3 bg-[#18181B] text-white font-medium rounded-sm border border-[#27272A] hover:bg-[#27272A] transition-all transform hover:-translate-y-1 flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="flex items-center gap-6 mt-12 text-[#A1A1AA]"
        >
          <a href="#" className="hover:text-white transition-colors p-2 hover:bg-[#18181B] rounded-full">
            <FaGithub size={20} />
          </a>
          <a href="#" className="hover:text-[#0A66C2] transition-colors p-2 hover:bg-[#18181B] rounded-full">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:Deunashane74@gmail.com" className="hover:text-[#DC143C] transition-colors p-2 hover:bg-[#18181B] rounded-full">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-[#A1A1AA] uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#A1A1AA] to-transparent"
        />
      </motion.div>
    </section>
  );
}
