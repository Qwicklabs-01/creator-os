"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "AI Content Creation",
    description:
      "Generate captions, scripts, blog posts, and hooks using local LLMs like Llama 3 and Mistral. Trained on your brand voice.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: "Image Synthesis",
    description:
      "Create stunning visuals with Stable Diffusion and SDXL. Product shots, social graphics, and brand-consistent imagery.",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    title: "Video Generation",
    description:
      "Produce short-form videos with Remotion. Auto-generate reels, TikToks, and YouTube Shorts from text prompts.",
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Smart Analytics",
    description:
      "Track engagement, predict trends, and optimize posting schedules using AI-powered performance analysis.",
    color: "success",
    gradient: "from-success/20 to-success/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Brand Memory",
    description:
      "Long-term brand memory via Qdrant vector DB. Your AI remembers your voice, style, audience, and what performs best.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "Campaign Management",
    description:
      "Plan, execute, and track multi-platform campaigns. Automatic scheduling, A/B testing, and performance reports.",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    title: "Multi-Platform Publishing",
    description:
      "Publish to Instagram, TikTok, YouTube, X, LinkedIn, and more. One command, every platform.",
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Team Collaboration",
    description:
      "Role-based access, real-time collaboration, approval workflows, and white-label agency dashboards.",
    color: "success",
    gradient: "from-success/20 to-success/5",
  },
];

const colorMap: Record<string, string> = {
  primary: "text-primary-light",
  secondary: "text-secondary-light",
  accent: "text-accent-light",
  success: "text-success",
};

const bgColorMap: Record<string, string> = {
  primary: "bg-primary/10",
  secondary: "bg-secondary/10",
  accent: "bg-accent/10",
  success: "bg-success/10",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/30 to-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Everything You Need
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Your entire content agency,{" "}
            <span className="gradient-text">automated</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From ideation to publishing, CreatorOS AI handles every step with
            intelligent AI agents working in concert.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative glass rounded-xl p-6 hover-card gradient-border cursor-default"
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-lg ${bgColorMap[feature.color]} ${colorMap[feature.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold mb-2 group-hover:text-primary-light transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle gradient overlay on hover */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
