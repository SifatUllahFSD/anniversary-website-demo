"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-fit md:min-h-[92vh] flex items-center justify-center px-5 pt-30 pb-6 md:pt-29 md:pb-6"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-5xl"
      >
        <div className="hero-card backdrop-blur-2xl gw-root rounded-[32px] md:rounded-[50px] p-6 md:p-14 flex flex-col md:flex-row items-center gap-6 md:gap-10">

          {/* 👤 IMAGE */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-36 h-36 md:w-80 md:h-80"
          >
            <div className="hero-photo-ring relative h-full w-full rounded-full overflow-hidden">
              <Image
                src="/images/7.jpg"
                fill
                priority
                alt="Couple"
                className="object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="hero-heart-badge absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 rounded-full p-2 md:p-3"
            >
              <Heart fill="white" className="text-white w-4 h-4 md:w-6 md:h-6" />
            </motion.div>
          </motion.div>

          {/* 💌 TEXT */}
          <div className="text-center md:text-left flex-1">

            {/* NAME BLOCK */}
            <div className="flex flex-col items-center justify-center">

              <span className="hero-eyebrow">Forever &amp; Always</span>

              <h1 className="hero-name">
                WILLIAM JACOB MILLER
              </h1>

              {/* separator */}
              <div className="flex items-center justify-center gap-3 my-2 md:my-4">
                <div className="h-px w-12 md:w-24 hero-divider-line"></div>

                <Heart
                  fill="#b76e79"
                  className="text-[#b76e79] w-4 h-4 md:w-6 md:h-6"
                />

                <div className="h-px w-12 md:w-24 hero-divider-line"></div>
              </div>

              <h2 className="hero-name hero-name-secondary">
                OLIVIA ROSE TAYLOR
              </h2>

            </div>

            {/* 💎 SUB TEXT */}
            <div className="mt-4 md:mt-8 flex flex-col items-center md:translate-x-2">

              <p className="hero-subtext">
                Together Since
              </p>

              <p className="hero-date">
                10 August 2023
              </p>

            </div>

          </div>

        </div>
      </motion.div>

      <style>{`
        .hero-card {
          --gold: #b76e79;
          --gold-soft: rgba(183, 110, 121, 0.14);
          --ink: #5c2a35;
          --muted: #9c6b74;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Inter', -apple-system, sans-serif;

          background: linear-gradient(
            160deg,
            rgba(255, 224, 233, 0.35) 0%,
            rgba(255, 214, 224, 0.20) 60%,
            rgba(255, 236, 240, 0.28) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 40px 90px -40px rgba(183, 110, 121, 0.4);
        }

        .hero-photo-ring {
          border: 6px solid rgba(255, 255, 255, 0.55);
          box-shadow:
            0 0 0 3px rgba(183, 110, 121, 0.25),
            0 25px 50px -20px rgba(92, 42, 53, 0.4);
        }

        .hero-heart-badge {
          background: linear-gradient(135deg, #b76e79, #8f4a56);
          box-shadow: 0 10px 24px -8px rgba(183, 110, 121, 0.6);
        }

        .hero-eyebrow {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 6px;
        }

        @media (min-width: 768px) {
          .hero-eyebrow {
            font-size: 11px;
            margin-bottom: 8px;
          }
        }

        .hero-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 24px;
          letter-spacing: 0.01em;
          color: var(--ink);
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .hero-name-secondary {
          color: var(--gold);
        }

        @media (min-width: 768px) {
          .hero-name {
            font-size: 46px;
          }
        }

        .hero-divider-line {
          background: linear-gradient(to right, transparent, var(--gold), transparent);
        }

        .hero-subtext {
          font-family: var(--font-body);
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (min-width: 768px) {
          .hero-subtext {
            font-size: 15px;
          }
        }

        .hero-date {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 20px;
          color: var(--ink);
          background: var(--gold-soft);
          padding: 3px 14px;
          border-radius: 999px;
          margin-top: 4px;
        }

        @media (min-width: 768px) {
          .hero-date {
            font-size: 26px;
            padding: 4px 18px;
            margin-top: 6px;
          }
        }
      `}</style>
    </section>
  );
}