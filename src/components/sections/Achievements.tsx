"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, label }: { value: number; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 glass-card rounded-2xl">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2"
      >
        {count}+
      </motion.div>
      <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
};

export default function Achievements() {
  const stats = [
    { value: 15, label: "Projects Completed" },
    { value: 500, label: "GitHub Contributions" },
    { value: 200, label: "DSA Problems Solved" },
    { value: 5, label: "Hackathons" },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Counter key={idx} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
