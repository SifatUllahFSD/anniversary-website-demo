"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-root relative py-8 md:py-10 bg-transparent px-4">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >

        {/* Main Message */}
        <h2 className="footer-title text-3xl md:text-5xl font-bold! mb-6">
          ❤️ Forever Starts Here ❤️
        </h2>

        {/* Divider */}
        <div className="footer-divider mx-auto w-32 h-px mb-8" />

        {/* Quote */}
        <p className="footer-quote text-sm md:text-base leading-relaxed mb-10 italic">
          No matter where life takes us, my heart will always stay with you.
          <br />
          Every moment, every memory, every dream — it&apos;s all about us. 💖
        </p>

        {/* Signature */}
        <div className="footer-signature-card inline-block rounded-full px-10 py-4">

          <div className="footer-signature-label text-sm">
            With all my love,
          </div>

          <div className="footer-signature-name text-lg tracking-[0.2em]">
            —  JACOB MILLER ✍️
          </div>

        </div>

        {/* Footer Note */}
        <div className="footer-note text-sm mt-6 italic flex items-center justify-center gap-1">
          Made with <Heart size={13} fill="#b76e79" className="text-[#b76e79] inline" /> for OLIVIA ROSE TAYLOR
        </div>

      </motion.div>

      {/* Bottom line */}
      <div className="footer-copyright mt-16 text-center text-xs italic">
        © {new Date().getFullYear()} Our Love Story • All Memories Reserved 💕
      </div>

      <style>{`
        .footer-root {
          --gold: #b76e79;
          --gold-soft: rgba(183, 110, 121, 0.14);
          --ink: #5c2a35;
          --muted: #9c6b74;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Inter', -apple-system, sans-serif;
        }

        .footer-title {
          font-family: var(--font-display);
          color: var(--ink);
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .footer-divider {
          background: linear-gradient(to right, transparent, var(--gold), transparent);
        }

        .footer-quote {
          font-family: var(--font-body);
          color: var(--muted);
        }

        .footer-signature-card {
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 20px 45px -25px rgba(183, 110, 121, 0.35);
        }

        .footer-signature-label {
          font-family: var(--font-body);
          font-weight: 500;
          color: var(--gold);
        }

        .footer-signature-name {
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--ink);
        }

        .footer-note {
          font-family: var(--font-body);
          color: var(--muted);
        }

        .footer-copyright {
          font-family: var(--font-body);
          color: var(--muted);
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
}