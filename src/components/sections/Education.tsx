"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Building2, BookOpen } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      institution: "Shri Ramdeobaba College of Engineering and Management",
      degree: "B.Tech — Computer Science and Engineering (AI & ML)",
      date: "2023 – 2027",
      location: "Nagpur, Maharashtra",
      status: "Currently Pursuing",
      statusColor: "text-primary bg-primary/10 border-primary/20",
      dotColor: "bg-primary",
      icon: <GraduationCap className="text-primary" size={24} />,
      cgpa: "CGPA: 7.95"
    },
    {
      institution: "New Sunflower School",
      degree: "Higher Secondary Education (Class XII)",
      date: "2022 – 2023",
      location: "Madhya Pradesh",
      status: "Completed",
      statusColor: "text-accent bg-accent/10 border-accent/20",
      dotColor: "bg-accent",
      icon: <Building2 className="text-accent" size={24} />,
      cgpa: "Percentage: 77.4%"
    },
    {
      institution: "Kailashpat Singhania High School",
      degree: "Secondary Education (Class X)",
      date: "2020 – 2021",
      location: "Madhya Pradesh",
      status: "Completed",
      statusColor: "text-accent bg-accent/10 border-accent/20",
      dotColor: "bg-accent",
      icon: <BookOpen className="text-accent" size={24} />,
      cgpa: "Percentage: 89.9%"
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Where I <span className="text-primary">Studied</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-primary via-accent to-secondary rounded-full" />
          
          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 relative z-10"
              >
                {/* Timeline Dot */}
                <div className="mt-10 w-6 h-6 flex items-center justify-center shrink-0">
                  <div className={`w-3 h-3 rounded-full ${edu.dotColor} shadow-[0_0_12px_currentColor]`} />
                </div>

                <div className="flex-1 glass-card p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-white/20 transition-all duration-300 bg-black/40 backdrop-blur-xl">
                  
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {edu.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{edu.institution}</h3>
                    <div className="text-gray-300 font-medium mb-3 text-sm md:text-base">{edu.degree}</div>
                    
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-gray-400" />
                        <span>{edu.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-gray-400" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium text-gray-400 bg-white/5 px-2 py-0.5 rounded-md">
                        <span>{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="mt-4 md:mt-0 shrink-0">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-medium border ${edu.statusColor} flex items-center gap-2 shadow-sm`}>
                      {edu.status === "Completed" ? (
                        <span>✓</span>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      )} 
                      {edu.status}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
