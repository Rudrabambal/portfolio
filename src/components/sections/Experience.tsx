"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle, ArrowRight } from "lucide-react";

export default function Experience() {
  const exp = {
    role: "Machine Learning Intern",
    company: "Betaque Solutions",
    duration: "May 2025 - July 2025",
    description: "Data-driven intern focused on optimization models.",
    responsibilities: [
      "Developed a price optimization model to identify optimal product pricing.",
      "Performed data preprocessing, EDA, and feature engineering using Python.",
    ],
    achievements: [
      "Enabled revenue and profit maximization through targeted pricing.",
      "Collaborated with data teams to clean datasets for ML algorithms.",
    ],
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          
          <div className="p-8 md:p-12 grid md:grid-cols-[1fr_1.5fr] gap-12 items-start relative z-10">
            {/* Left Column: Role & Company */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                <Briefcase size={28} className="text-primary" />
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
                  {exp.role}
                </h3>
                <div className="text-xl text-accent font-medium mb-6">
                  {exp.company}
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300">
                  <Calendar size={16} className="text-gray-400" />
                  {exp.duration}
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed border-t border-white/5 pt-6">
                {exp.description}
              </p>
            </div>

            {/* Right Column: Details */}
            <div className="space-y-8 bg-black/20 rounded-2xl p-6 md:p-8 border border-white/5 backdrop-blur-sm">
              <div>
                <h4 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <ArrowRight size={18} className="text-primary" /> Core Responsibilities
                </h4>
                <div className="space-y-4">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-6">
                <h4 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500/80" /> Key Achievements
                </h4>
                <div className="space-y-4">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-green-500/70 mt-0.5 shrink-0 font-bold">✦</span>
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
