"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "Python", icon: "🐍", category: "Backend", proficiency: "Advanced", description: "ML pipelines, data processing, scripting" },
  { name: "JavaScript", icon: "⚡", category: "Frontend", proficiency: "Intermediate", description: "DOM manipulation, ES6+, async programming" },
  { name: "C++", icon: "⚙️", category: "Backend", proficiency: "Intermediate", description: "DSA, competitive programming, systems" },
  { name: "React.js", icon: "⚛️", category: "Frontend", proficiency: "Intermediate", description: "Hooks, component architecture, state management" },
  { name: "Next.js", icon: "▲", category: "Frontend", proficiency: "Intermediate", description: "SSR, SSG, App Router, API routes" },
  { name: "HTML & CSS", icon: "🎨", category: "Frontend", proficiency: "Advanced", description: "Semantic HTML, Flexbox, Grid, animations" },
  { name: "Node.js", icon: "🟢", category: "Backend", proficiency: "Intermediate", description: "REST APIs, Express, middleware" },
  { name: "MongoDB", icon: "🍃", category: "Backend", proficiency: "Intermediate", description: "CRUD ops, aggregation, Mongoose ODM" },
  { name: "Machine Learning", icon: "🤖", category: "AI/ML", proficiency: "Advanced", description: "Supervised & unsupervised learning models" },
  { name: "TensorFlow", icon: "🔷", category: "AI/ML", proficiency: "Proficient", description: "Deep learning, neural network training" },
  { name: "NLP", icon: "🧠", category: "AI/ML", proficiency: "Proficient", description: "Text processing, sentiment analysis" },
  { name: "LangChain", icon: "🔗", category: "AI/ML", proficiency: "Proficient", description: "LLM chaining, RAG pipelines, agents" },
  { name: "Git & GitHub", icon: "🐙", category: "Tools", proficiency: "Advanced", description: "Version control, branching, collaboration" },
  { name: "Docker", icon: "🐳", category: "Tools", proficiency: "Beginner", description: "Containerisation, docker-compose" },
  { name: "PostgreSQL", icon: "🐘", category: "Tools", proficiency: "Intermediate", description: "Relational DB, joins, indexing" },
  { name: "VS Code", icon: "💻", category: "Tools", proficiency: "Advanced", description: "Extensions, debugging, workspace config" },
];

const categories = ["All", "Frontend", "Backend", "AI/ML", "Tools"];

const proficiencyColor: Record<string, string> = {
  Advanced: "text-primary",
  Proficient: "text-white",
  Intermediate: "text-accent",
  Beginner: "text-gray-500",
};

function SkillCard({ skill }: { skill: typeof skills[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full aspect-square cursor-pointer"
      style={{ perspective: "800px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-3 p-4 text-center border border-white/10 hover:border-primary/50 transition-colors"
          style={{ backfaceVisibility: "hidden", background: "rgba(18, 20, 22, 0.75)", backdropFilter: "blur(10px)" }}
        >
          <div className="text-4xl">{skill.icon}</div>
          <div className="text-sm font-semibold text-white leading-tight">{skill.name}</div>
          <span
            className="px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide"
            style={{ background: "rgba(109, 129, 150, 0.15)", color: "#CBCBCB" }}
          >
            {skill.category}
          </span>
          <span className="text-[10px] text-gray-500">[click to flip]</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-3 p-5 text-center border border-white/15"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "rgba(18, 20, 22, 0.95)",
            backdropFilter: "blur(15px)"
          }}
        >
          <div className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Proficiency</div>
          <div className={`text-xl font-extrabold tracking-tight ${proficiencyColor[skill.proficiency]}`}>
            {skill.proficiency}
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">{skill.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(213,189,175,0.3)]"
                  : "bg-transparent text-gray-400 border-white/15 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence>
            {filtered.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
