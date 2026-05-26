"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { X, ExternalLink, ChevronRight } from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Lock body scroll when modal is open
  if (typeof window !== "undefined") {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <section id="projects" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto text-lg">
            A showcase of my recent work in mobile and game development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#18181B] border border-[#27272A] rounded-sm overflow-hidden group cursor-pointer hover:border-[#DC143C]/50 transition-colors flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 bg-[#27272A] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"; // Tech placeholder
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-[#DC143C] text-white text-xs font-semibold rounded-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#DC143C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm mb-6 flex-1">
                  {project.shortDescription}
                </p>

                <div className="flex items-center text-sm font-semibold text-[#E4E4E7] mt-auto">
                  View Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#18181B] border border-[#27272A] rounded-sm overflow-hidden flex flex-col max-h-[90vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-[#0F0F0F] rounded-full text-[#A1A1AA] hover:text-white border border-[#27272A] transition-colors"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto custom-scrollbar">
                {/* Modal Header / Image */}
                <div className="relative h-64 sm:h-80 bg-[#27272A]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover opacity-60"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                    <span className="px-3 py-1 bg-[#DC143C] text-white text-xs font-semibold rounded-sm mb-3 inline-block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">{selectedProject.title}</h2>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#DC143C] rounded-full" /> Overview
                      </h4>
                      <p className="text-[#A1A1AA] leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#DC143C] rounded-full" /> Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedProject.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-[#A1A1AA] text-sm">
                            <ChevronRight size={16} className="text-[#DC143C] mr-2 flex-shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-[#0F0F0F] p-4 rounded-sm border border-[#27272A]">
                        <h5 className="text-white font-semibold mb-2 text-sm">Challenges</h5>
                        <p className="text-[#A1A1AA] text-sm">{selectedProject.challenges}</p>
                      </div>
                      <div className="bg-[#0F0F0F] p-4 rounded-sm border border-[#27272A]">
                        <h5 className="text-white font-semibold mb-2 text-sm">Solutions</h5>
                        <p className="text-[#A1A1AA] text-sm">{selectedProject.solutions}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-[#0F0F0F] p-6 rounded-sm border border-[#27272A]">
                      <h4 className="text-white font-bold mb-4 border-b border-[#27272A] pb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 bg-[#18181B] border border-[#27272A] text-xs font-medium text-[#E4E4E7] rounded-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-[#DC143C] text-white font-medium rounded-sm hover:bg-[#991B1B] transition-colors"
                    >
                      View Live Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
