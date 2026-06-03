"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const commandExamples = [
  { cmd: "Create content for next week", icon: "✦" },
  { cmd: "Generate 20 reels for Instagram", icon: "▶" },
  { cmd: "Create a luxury brand campaign", icon: "◆" },
  { cmd: "Analyze competitor performance", icon: "◉" },
  { cmd: "Generate viral content ideas", icon: "⚡" },
];

function TypingCommand() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = commandExamples[currentIndex]!;
    const fullText = current.cmd;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < fullText.length) {
            setDisplayText(fullText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(fullText.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % commandExamples.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="text-secondary-light">
      {displayText}
      <span className="inline-block w-0.5 h-4 bg-secondary ml-0.5 animate-pulse-glow align-middle" />
    </span>
  );
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary orb */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          top: "-10%",
          right: "-10%",
          animationDelay: "0s",
        }}
      />
      {/* Secondary orb */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          bottom: "5%",
          left: "-5%",
          animationDelay: "2s",
        }}
      />
      {/* Accent orb */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
          top: "40%",
          right: "20%",
          animationDelay: "4s",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 gradient-bg-hero grid-pattern overflow-hidden"
    >
      <FloatingOrbs />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              100% Open Source · Powered by Local AI Models
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              The{" "}
              <span className="gradient-text">AI-Powered</span>
              <br />
              Creative Operating
              <br />
              System
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
              CreatorOS AI is a fully autonomous content agency that creates,
              publishes, and optimizes your content using{" "}
              <span className="text-primary-light font-medium">open-source AI models</span>.
              From solo creators to large agencies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.a
                href="/signup"
                id="hero-cta-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl gradient-primary text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Start Creating for Free
              </motion.a>

            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-4 text-sm text-muted">
              <div className="flex -space-x-2">
                {[
                  "bg-primary",
                  "bg-secondary",
                  "bg-accent",
                  "bg-success",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${bg} border-2 border-bg flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>
                Trusted by <span className="text-text font-medium">2,500+</span>{" "}
                creators
              </span>
            </div>
          </motion.div>

          {/* Right: AI Command Center Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass-strong rounded-2xl p-1 shadow-2xl shadow-black/40">
              {/* Window Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-dark font-mono">
                    AI Command Center
                  </span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 space-y-4 font-mono text-sm min-h-[320px]">
                {/* Logo line */}
                <div className="text-muted-dark text-xs">
                  ╔══════════════════════════════════════╗
                  <br />
                  ║&nbsp;&nbsp;&nbsp;&nbsp;CreatorOS AI v1.0 — Command Center&nbsp;&nbsp;&nbsp;&nbsp;║
                  <br />
                  ╚══════════════════════════════════════╝
                </div>

                {/* Previous commands */}
                <div className="space-y-3">
                  <div>
                    <span className="text-primary-light">❯</span>{" "}
                    <span className="text-muted">
                      Generate 20 reels for Instagram
                    </span>
                  </div>
                  <div className="pl-4 text-success text-xs space-y-1">
                    <div>✓ Brand voice loaded from memory</div>
                    <div>✓ 20 scripts generated via Llama-3</div>
                    <div>✓ 20 images synthesized via Stable Diffusion</div>
                    <div>✓ Scheduled for optimal engagement times</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-primary-light">❯</span>{" "}
                    <span className="text-muted">
                      Analyze competitor @luxbrand
                    </span>
                  </div>
                  <div className="pl-4 text-secondary text-xs space-y-1">
                    <div>◉ Engagement rate: 4.2% (+1.1% above avg)</div>
                    <div>◉ Top format: Carousel posts (62% share)</div>
                    <div>◉ Peak posting: Tue/Thu 6pm UTC</div>
                  </div>
                </div>

                {/* Active typing */}
                <div className="pt-2 border-t border-border">
                  <span className="text-primary-light">❯</span>{" "}
                  <TypingCommand />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-medium text-success">
                  All Models Local
                </span>
              </div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs">🔒</span>
                <span className="text-xs font-medium text-text-secondary">
                  Your Data Stays Yours
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
