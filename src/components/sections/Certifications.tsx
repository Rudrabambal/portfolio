"use client";

import { motion } from "framer-motion";
import { Award, Cloud, Code, Shield } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Foundation of Deep Learning",
      issuer: "NVIDIA",
      date: "Feb 2026",
      icon: <Award className="text-green-500" size={24} />,
    },
    {
      title: "Ethical Hacking",
      issuer: "IIT Bombay",
      date: "2024",
      icon: <Shield className="text-red-500" size={24} />,
    },
    {
      title: "Certified Cloud Data Engineering",
      issuer: "Coursera",
      date: "2025",
      icon: <Cloud className="text-blue-500" size={24} />,
    },
    {
      title: "Node.js and MongoDB: Backend Apps",
      issuer: "Coursera",
      date: "2024",
      icon: <Code className="text-yellow-500" size={24} />,
    },
  ];

  return (
    <section className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Licenses & <span className="text-secondary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:border-secondary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <div className="text-primary font-medium text-sm">{cert.issuer}</div>
                <div className="text-gray-500 text-xs mt-1">{cert.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
