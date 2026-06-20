"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-6 text-primary text-sm font-medium shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary drop-shadow-lg">
              Rudra Bambal
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 font-medium mb-6 h-[40px]">
            AI/ML Engineer & Backend Architect
          </div>
          
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            I architect intelligent systems and scalable backend infrastructure to drive innovation and solve complex technical challenges.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full glass text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Resume
              <Download size={18} />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Rudrabambal" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rudr123/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rudrabambal912@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-end items-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-[3px] bg-gradient-to-tr from-primary via-accent to-secondary shadow-[0_0_30px_rgba(213,189,175,0.15)]">
            <div className="w-full h-full bg-[#1c1c1c] rounded-full overflow-hidden">
              <img 
                src="/profile.png" 
                alt="Rudra Bambal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
