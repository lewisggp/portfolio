"use client";

import { useState, useEffect, useCallback } from "react";
import { BlurFade } from "./ui/blur-fade";
import { ProjectItem } from "../data/portfolio";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectsProps {
  items: ProjectItem[];
}

export default function Projects({ items }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  const openProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextSlide = useCallback(() => {
    if (!selectedProject || !selectedProject.images) return;
    setCurrentSlide((prev) =>
      prev === (selectedProject.images?.length || 0) - 1 ? 0 : prev + 1,
    );
  }, [selectedProject]);

  const prevSlide = useCallback(() => {
    if (!selectedProject || !selectedProject.images) return;
    setCurrentSlide((prev) =>
      prev === 0 ? (selectedProject.images?.length || 0) - 1 : prev - 1,
    );
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeProject();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, nextSlide, prevSlide]);

  return (
    <section
      className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5"
      id="projects"
    >
      <BlurFade delay={0.2} direction="up" inView>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-white text-4xl font-black tracking-tight mb-4">
              Featured Engineering Challenges
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              A selection of deep-tech projects involving complex arquitecture,
              design patters and enterprise AI integration.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <BlurFade
            key={item.id}
            delay={0.25 + index * 0.05}
            direction="up"
            inView
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden group card-hover transition-all duration-300 cursor-pointer"
            onClick={() => openProject(item)}
          >
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10 pointer-events-none"></div>
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={item.title}
                src={item.image}
              />
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                {item.typeLabels.map((label, i) => (
                  <span
                    key={i}
                    className="bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-primary"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-white text-2xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 border border-white/10 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors cursor-pointer">
                View Project{" "}
                <span className="material-symbols-outlined !text-lg">
                  visibility
                </span>
              </button> */}
            </div>
          </BlurFade>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={closeProject}
                  className="p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={
                      selectedProject.images
                        ? selectedProject.images[currentSlide]
                        : selectedProject.image
                    }
                    alt={`${selectedProject.title} slide ${currentSlide + 1}`}
                    className="w-full h-full object-contain max-h-[70vh]"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {selectedProject.images &&
                  selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                        className="absolute left-4 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors z-10"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        className="absolute right-4 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors z-10"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {selectedProject.images?.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === idx
                          ? "bg-white w-4"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 bg-[#0a0a0a] border-t border-white/5">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs uppercase font-bold tracking-widest px-2 py-1 border border-white/10 rounded text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
