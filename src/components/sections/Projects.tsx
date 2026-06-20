"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Tielo Smart HR Portal",
      description: "AI-powered HR Management System for complete employee operations lifecycle.",
      features: ["Leave Management", "Attendance Tracking", "Payroll Integration", "AI Insights"],
      tech: ["Python", "FastAPI", "MySQL", "Next.js"],
      link: "#",
      github: "https://github.com/Rudrabambal"
    },
    {
      title: "Explainable Fake Review Detection",
      description: "Detects fake online reviews using advanced NLP combined with AI explainability.",
      features: ["LIME & SHAP", "Sentiment Analysis", "Review Classification", "React Dashboard"],
      tech: ["Python", "NLP", "Transformers", "React"],
      link: "#",
      github: "https://github.com/Rudrabambal"
    },
    {
      title: "AI Trip Estimator",
      description: "AI-powered travel cost estimation platform with demographic and dynamic date algorithms.",
      features: ["Demographic-aware", "Peak/Off-season logic", "Interactive Visuals"],
      tech: ["JavaScript", "HTML/CSS", "Chart.js"],
      link: "https://rudrabambal.github.io/AI-Trip-Estimator/",
      github: "https://github.com/Rudrabambal"
    },
    {
      title: "Drug Recommendation System",
      description: "ML-based healthcare platform that predicts suitable medications based on patient conditions.",
      features: ["Health parameter analysis", "Multi-model training", "Responsive UI"],
      tech: ["Python", "Scikit-Learn", "Flask", "Streamlit"],
      link: "#",
      github: "https://github.com/Rudrabambal"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Code2 size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="text-sm font-medium text-white mb-2">Key Features:</div>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
