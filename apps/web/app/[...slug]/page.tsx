"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ComingSoon() {
  const pathname = usePathname();
  const pageName = pathname
    .replace("/", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg-hero grid-pattern relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
            top: "10%",
            right: "10%",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            bottom: "15%",
            left: "10%",
            animationDelay: "2s",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6 max-w-lg"
      >
        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/30"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
          <span className="gradient-text">{pageName || "Page"}</span>
        </h1>

        <p className="text-lg text-muted mb-2">Coming Soon</p>

        <p className="text-sm text-muted-dark leading-relaxed mb-10 max-w-md mx-auto">
          We&apos;re building something amazing. This section of CreatorOS AI is
          under active development and will be available shortly.
        </p>

        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Home
        </Link>

        {/* Status pill */}
        <div className="mt-10 inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Under Development
        </div>
      </motion.div>
    </div>
  );
}
