"use client";

import { motion } from "framer-motion";
import { Lightbulb, Trophy, Target, TrendingUp } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Lightbulb className="text-primary" size={24} />,
      title: "Founder Mindset",
      desc: "I don't just write code — I identify problems, design solutions, and think about the product from day zero.",
    },
    {
      icon: <TrendingUp className="text-accent" size={24} />,
      title: "Growth Driven",
      desc: "Obsessed with continuous improvement — in systems, in teams, and in myself. Always building, always shipping.",
    },
    {
      icon: <Target className="text-secondary" size={24} />,
      title: "Impact Focused",
      desc: "Every line of code I write is aimed at solving real problems for real people — not just passing tests.",
    },
    {
      icon: <Trophy className="text-yellow-400" size={24} />,
      title: "Natural Leader",
      desc: "Organized and led large-scale events (CPL-1 & CPL-2), proving that great products need great team dynamics.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I'm <span className="text-white font-semibold">Rudra Bambal</span>, an AI & Machine Learning undergraduate with a passion for building technology that solves real-world problems. I enjoy working at the intersection of <span className="text-primary font-medium">software engineering, artificial intelligence, and innovation</span>, turning ideas into practical and impactful solutions.
            </p>
            <p>
              My expertise spans <span className="text-primary font-medium">Machine Learning, Backend Development, Automation, and Problem Solving</span>, with hands-on experience developing intelligent applications and scalable systems. I approach every challenge with curiosity, analytical thinking, and a commitment to continuous improvement.
            </p>
            <p>
              Beyond academics and development, I value leadership, creativity, and execution — believing that great technology is not just about writing code, but about creating meaningful experiences and delivering real value.
            </p>
            <p className="text-primary font-semibold italic border-l-2 border-primary pl-4">
              "Building the future, one solution at a time." 🚀
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
