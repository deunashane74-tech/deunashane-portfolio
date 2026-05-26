"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import * as LucideIcons from "lucide-react";

export default function CertificationsSection() {
  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={28} className="text-[#DC143C]" /> : <LucideIcons.Award size={28} className="text-[#DC143C]" />;
  };

  return (
    <section className="py-24 bg-[#18181B] border-y border-[#27272A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto text-lg">
            Professional achievements and verified credentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0F0F0F] border border-[#27272A] rounded-sm p-6 hover:border-[#DC143C]/50 transition-colors group relative overflow-hidden"
            >
              {/* Decorative top border glow on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#DC143C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-14 h-14 rounded-full bg-[#18181B] flex items-center justify-center border border-[#27272A] mb-6 group-hover:bg-[#DC143C]/10 transition-colors">
                {renderIcon(cert.icon)}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-sm font-medium text-[#DC143C] mb-3">{cert.year}</p>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">{cert.description}</p>
              
              <div className="mt-6 flex items-center text-xs font-semibold tracking-wider text-[#A1A1AA] group-hover:text-white transition-colors">
                <LucideIcons.CheckCircle2 size={14} className="mr-1.5 text-[#DC143C]" />
                VERIFIED
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
