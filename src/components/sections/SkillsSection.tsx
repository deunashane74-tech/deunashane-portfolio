"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const renderIcon = (iconName: string) => {
    if (iconName.startsWith("Fa")) {
      const Icon = (FaIcons as any)[iconName];
      return Icon ? <Icon size={24} /> : null;
    }
    const Icon = (SiIcons as any)[iconName];
    return Icon ? <Icon size={24} /> : null;
  };

  return (
    <section id="skills" className="py-24 bg-[#18181B] border-y border-[#27272A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and the tools I use to build robust applications and games.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#DC143C] rounded-full"></span>
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.programming.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex items-center gap-3 px-5 py-3 bg-[#0F0F0F] border border-[#27272A] rounded-sm hover:border-[#DC143C] hover:text-[#DC143C] transition-colors cursor-default text-[#E4E4E7]"
                >
                  {renderIcon(skill.icon)}
                  <span className="font-medium tracking-wide">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Tools */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#DC143C] rounded-full"></span>
              Development Tools
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.tools.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex items-center gap-3 px-5 py-3 bg-[#0F0F0F] border border-[#27272A] rounded-sm hover:border-[#DC143C] hover:text-[#DC143C] transition-colors cursor-default text-[#E4E4E7]"
                >
                  {renderIcon(skill.icon)}
                  <span className="font-medium tracking-wide">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#DC143C] rounded-full"></span>
              Databases
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.databases.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex items-center gap-3 px-5 py-3 bg-[#0F0F0F] border border-[#27272A] rounded-sm hover:border-[#DC143C] hover:text-[#DC143C] transition-colors cursor-default text-[#E4E4E7]"
                >
                  {renderIcon(skill.icon)}
                  <span className="font-medium tracking-wide">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#DC143C] rounded-full"></span>
              Areas of Interest
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  variants={itemVariants}
                  className="px-4 py-2 bg-[#27272A]/30 text-[#A1A1AA] text-sm rounded-full border border-[#27272A]"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
