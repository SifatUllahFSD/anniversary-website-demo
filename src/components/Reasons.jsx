"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const reasons = [
  "You make my world peaceful ❤️",
  "You understand me without words 💫",
  "Your smile heals everything 🌸",
  "You are my safe place 💍",
  "You believe in me always ✨",
  "You feel like home 🏡",
  "You never leave my side 🔥",
  "You are my forever love ❤️",
];

export default function Reasons() {
  return (
    <section
      id="reasons"
      className="reasons-root py-8 md:py-10  px-5 relative z-10 bg-transparent"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-20 text-center mb-8 md:mb-12"
      >
        <span className="reasons-eyebrow">From My Heart to Yours</span>

        <h2 className="reasons-title mt-2 text-3xl md:text-5xl font-bold!">
          💖 Reasons I Love You
        </h2>

        <div className="reasons-divider mt-5"></div>
      </motion.div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4 md:gap-6">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -3 }}
            className="reason-card relative p-6 rounded-2xl overflow-hidden"
          >
            {/* Glow effect */}
            <div className="reason-glow absolute -top-10 -right-10 w-24 h-24 rounded-full"></div>

            <div className="relative z-10 flex items-start gap-3">
              <Heart className="reason-icon mt-1 shrink-0" size={16} fill="#b76e79" />
              <p className="reason-text text-sm md:text-base leading-relaxed">
                {item}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .reasons-root {
          --gold: #b76e79;
          --gold-soft: rgba(183, 110, 121, 0.14);
          --ink: #5c2a35;
          --muted: #9c6b74;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Inter', -apple-system, sans-serif;
        }

        .reasons-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .reasons-title {
          font-family: var(--font-display);
          color: var(--ink);
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .reasons-divider {
          width: 96px;
          height: 1px;
          margin: 0 auto;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
        }

        .reason-card {
          background: linear-gradient(
            160deg,
            rgba(255, 224, 233, 0.35) 0%,
            rgba(255, 236, 240, 0.22) 100%
          );
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 20px 45px -25px rgba(183, 110, 121, 0.35);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .reason-card:hover {
          border-color: rgba(183, 110, 121, 0.4);
          box-shadow: 0 25px 55px -25px rgba(183, 110, 121, 0.45);
        }

        .reason-glow {
          background: var(--gold);
          filter: blur(28px);
          opacity: 0.18;
        }

        .reason-icon {
          color: var(--gold);
        }

        .reason-text {
          font-family: var(--font-body);
          color: var(--ink);
        }
      `}</style>
    </section>
  );
}