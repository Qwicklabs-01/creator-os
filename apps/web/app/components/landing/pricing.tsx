"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for solo creators getting started.",
    features: [
      "1 Brand",
      "50 AI generations/month",
      "Basic analytics",
      "Community support",
      "3 scheduled posts",
    ],
    cta: "Start Free",
    popular: false,
    color: "muted",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious creators who want to scale.",
    features: [
      "5 Brands",
      "Unlimited AI generations",
      "Advanced analytics & insights",
      "Priority support",
      "Unlimited scheduling",
      "Custom brand voice training",
      "Image & video generation",
      "Campaign management",
    ],
    cta: "Start Pro Trial",
    popular: true,
    color: "primary",
  },
  {
    name: "Agency",
    price: "$99",
    period: "/month",
    description: "For agencies managing multiple clients.",
    features: [
      "25 Brands",
      "Unlimited everything",
      "White-label dashboard",
      "Client portals",
      "Team collaboration (10 seats)",
      "Custom domains",
      "API access",
      "Dedicated support",
    ],
    cta: "Start Agency Trial",
    popular: false,
    color: "secondary",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with custom requirements.",
    features: [
      "Unlimited brands & seats",
      "On-premise deployment",
      "Custom AI model training",
      "SLA guarantee",
      "Dedicated account manager",
      "Custom integrations",
      "Audit logs & compliance",
      "24/7 priority support",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "accent",
  },
];

const ctaColorMap: Record<string, string> = {
  muted: "bg-surface-lighter text-text hover:bg-surface-light",
  primary: "gradient-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50",
  secondary: "bg-secondary text-white shadow-lg shadow-secondary/30 hover:shadow-secondary/50",
  accent: "bg-accent text-black shadow-lg shadow-accent/30 hover:shadow-accent/50",
};

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/20 to-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Plans for every{" "}
            <span className="gradient-text">creator</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Start free and scale as you grow. No credit card required.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-full px-1.5 py-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual
                  ? "gradient-primary text-white shadow-md"
                  : "text-muted hover:text-text"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                annual
                  ? "gradient-primary text-white shadow-md"
                  : "text-muted hover:text-text"
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs text-accent-light font-semibold">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass rounded-2xl p-6 flex flex-col hover-card ${
                plan.popular
                  ? "border-primary/40 shadow-lg shadow-primary/10"
                  : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full gradient-primary text-xs font-semibold text-white shadow-lg shadow-primary/30">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {plan.price === "Custom"
                      ? "Custom"
                      : annual && plan.price !== "$0"
                        ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                        : plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-success mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${ctaColorMap[plan.color]}`}
                id={`pricing-${plan.name.toLowerCase()}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Buy Me a Coffee Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-2xl mx-auto text-center glass-strong rounded-3xl p-8 border border-border/50 shadow-xl"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-[#FFDD00]/10 rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8H6V17C6 19.2091 7.79086 21 10 21H14C16.2091 21 18 19.2091 18 17V14M20 8V14H18M20 8C21.1046 8 22 8.89543 22 10C22 11.1046 21.1046 12 20 12M18 14V8H20M6 8V5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V8M6 8H4M14 12V17M10 12V17" stroke="#FFDD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">Support CreatorOS</h3>
          <p className="text-muted mb-8">
            Love what we're building? You can support the development by buying us a coffee. Every bit helps us keep the servers running and build new features!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://buymeacoffee.com/CreatorSakshi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#FFDD00] text-black font-bold hover:bg-[#FFDD00]/90 transition-all shadow-lg shadow-[#FFDD00]/20 hover:shadow-[#FFDD00]/40 transform hover:-translate-y-1"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8H6V17C6 19.2091 7.79086 21 10 21H14C16.2091 21 18 19.2091 18 17V14M20 8V14H18M20 8C21.1046 8 22 8.89543 22 10C22 11.1046 21.1046 12 20 12M18 14V8H20M6 8V5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V8M6 8H4M14 12V17M10 12V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Buy me a coffee
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
