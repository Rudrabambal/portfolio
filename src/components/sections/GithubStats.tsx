"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitCommit, GitPullRequest, Star, Users } from "lucide-react";

export default function GithubStats() {
  const [stats, setStats] = useState({
    followers: 0,
    public_repos: 0,
    following: 0,
  });

  useEffect(() => {
    // Fetch basic public GitHub stats
    fetch("https://api.github.com/users/Rudrabambal")
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.message) {
          setStats({
            followers: data.followers,
            public_repos: data.public_repos,
            following: data.following,
          });
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-24 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            GitHub <span className="text-accent">Activity</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Public Repos", value: stats.public_repos, icon: <GitCommit className="text-accent" /> },
            { label: "Followers", value: stats.followers, icon: <Users className="text-primary" /> },
            { label: "Following", value: stats.following, icon: <Users className="text-secondary" /> },
            { label: "Top Rated", value: "A+", icon: <Star className="text-yellow-400" /> },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform"
            >
              <div className="mb-4 p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph Display (Static Embed using an open source widget) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-12 overflow-hidden flex justify-center"
        >
          <img 
            src="https://ghchart.rshah.org/8A2BE2/Rudrabambal" 
            alt="Rudra's Github Chart" 
            className="w-full max-w-4xl opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(138,43,226,0.2)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
