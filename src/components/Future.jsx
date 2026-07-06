"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const dreams = [
  "💍 Build a beautiful future together",
  "🏡 Create our own peaceful home",
  "✈️ Travel the world side by side",
  "📸 Capture every beautiful memory",
  "❤️ Stay together forever no matter what",
  "🌸 Grow old holding each other's hand",
];

export default function Future() {
  return (
    <section
      id="future"
      className="future-root py-8 md:py-10 px-5 relative z-10 bg-transparent"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-20 text-center mb-8 md:mb-12"
      >
        <span className="future-eyebrow">A Promise for Tomorrow</span>

        <h2 className="future-title mt-2 text-3xl md:text-5xl font-bold!">
          🌈 Our Future Dreams
        </h2>

        <div className="future-divider mt-5"></div>
      </motion.div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4 md:gap-6">
        {dreams.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, y: -3 }}
            className="dream-card relative p-6 rounded-2xl overflow-hidden"
          >
            {/* Glow effect */}
            <div className="dream-glow absolute -top-10 -right-10 w-28 h-28 rounded-full"></div>

            <p className="dream-text text-sm md:text-base leading-relaxed relative z-10">
              {item}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="future-closing text-center mt-10 md:mt-12 flex items-center justify-center gap-2"
      >
        <Heart size={16} fill="#b76e79" className="text-[#b76e79]" />
        <span>Our future starts with endless love</span>
        <Heart size={16} fill="#b76e79" className="text-[#b76e79]" />
      </motion.div>

      <style>{`
        .future-root {
          --gold: #b76e79;
          --gold-soft: rgba(183, 110, 121, 0.14);
          --ink: #5c2a35;
          --muted: #9c6b74;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Inter', -apple-system, sans-serif;
        }

        .future-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .future-title {
          font-family: var(--font-display);
          color: var(--ink);
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .future-divider {
          width: 96px;
          height: 1px;
          margin: 0 auto;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
        }

        .dream-card {
          background: linear-gradient(
            160deg,
            rgba(255, 224, 233, 0.35) 0%,
            rgba(255, 236, 240, 0.22) 100%
          );
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 25px 55px -30px rgba(183, 110, 121, 0.4);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .dream-card:hover {
          border-color: rgba(183, 110, 121, 0.4);
          box-shadow: 0 30px 60px -28px rgba(183, 110, 121, 0.5);
        }

        .dream-glow {
          background: var(--gold);
          filter: blur(34px);
          opacity: 0.2;
        }

        .dream-text {
          font-family: var(--font-body);
          font-weight: 500;
          color: var(--ink);
        }

        .future-closing {
          font-family: var(--font-display);
          font-weight: 600;
          font-style: italic;
          font-size: 20px;
          color: var(--gold);
        }
      `}</style>
    </section>
  );
}