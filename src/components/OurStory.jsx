"use client";

import { useEffect, useState } from "react";
import { Heart, BookOpen } from "lucide-react";

const startDate = new Date("2023-08-10T00:00:00");

export default function Story() {
  const initialTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [time, setTime] = useState(initialTime);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const update = () => {
      const now = new Date();
      const diff = now - startDate;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, "0");

  return (
    <section id="Story" className="relative w-full min-h-screen py-12  md:py-16 px-4 overflow-hidden bg-transparent">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
      />

      {/* BACKGROUND ROSE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <span className="text-[500px]">🌹</span>
      </div>

      {/* FULL SCREEN GLASS CARD */}
      <div className="relative w-full min-h-[85vh] rounded-[30px] story-root p-8 md:p-14">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="story-eyebrow mb-3">A Chapter Worth Telling</div>

          <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full story-header-pill">
            <BookOpen className="text-[#b76e79]" size={22} />

            <h2 className="story-title text-3xl md:text-5xl font-bold!">
              Our Story
            </h2>

            <Heart className="text-[#b76e79] animate-pulse" size={22} fill="#b76e79" />
          </div>
        </div>

        {/* STORY TEXT (FULL, NO CUT) */}
        <div className="story-body max-w-3xl mx-auto md:text-center space-y-7 text-[18px] md:text-[22px] leading-[2.2]">
          <p>Every beautiful story begins in an unexpected way.</p>

          <p>
            The year <span className="story-pill">2023</span>{" wasn't kind to me. It was filled with uncertainty, failures, and countless moments of disappointment. Just when I thought nothing beautiful was waiting ahead, life introduced me to "}
            <span className="story-accent">you</span>.
          </p>

          <p>
            What started as a simple conversation slowly became the most
            precious chapter of my life. Through every smile, every
            late-night conversation, every little argument, and every
            heartfelt apology, our love grew{" "}
            <span className="story-accent">stronger than I ever imagined</span>.
          </p>

          <p>
            Today, when I look back, I don&apos;t remember the difficult days
            anymore. I remember <span className="story-accent">us</span> —
            our laughter, our memories, and every moment that made this
            journey unforgettable.
          </p>

          <p className="story-quote">
            Thank you for choosing to stay, for believing in us, and for
            filling my life with love.
          </p>

          <p className="story-closing">
            You are, and always will be, my favorite chapter. ❤️
          </p>
        </div>

        {/* TIMER */}
        <div className="mt-16 text-center">
          <p className="story-timer-caption text-2xl md:text-3xl italic">
            Thank you for staying with me ❤️
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-5">
            {[
              { label: "days", value: mounted ? time.days : initialTime.days },
              { label: "hours", value: formatTime(mounted ? time.hours : initialTime.hours) },
              { label: "minutes", value: formatTime(mounted ? time.minutes : initialTime.minutes) },
              { label: "seconds", value: formatTime(mounted ? time.seconds : initialTime.seconds) },
            ].map((unit) => (
              <div key={unit.label} className="timer-box">
                <span className="timer-value">{unit.value}</span>
                <span className="timer-label">{unit.label}</span>
              </div>
            ))}
          </div>

          <p className="story-together mt-6 text-sm md:text-base tracking-[0.15em] uppercase">
            together, and counting ❤️
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-16 text-center">
          <p className="story-footer text-2xl md:text-3xl italic font-bold!">
            You are my favorite chapter ❤️
          </p>
        </div>

      </div>

      <style>{`
        .story-root {
          --gold: #b76e79;
          --gold-soft: rgba(183, 110, 121, 0.14);
          --ink: #5c2a35;
          --muted: #9c6b74;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Inter', -apple-system, sans-serif;

          background: linear-gradient(
            160deg,
            rgba(255, 224, 233, 0.28) 0%,
            rgba(255, 214, 224, 0.16) 60%,
            rgba(255, 236, 240, 0.22) 100%
          );
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 40px 90px -40px rgba(183, 110, 121, 0.4);
        }

        .story-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .story-header-pill {
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(183, 110, 121, 0.25);
          box-shadow: 0 12px 30px -18px rgba(183, 110, 121, 0.35);
        }

        .story-title {
          font-family: var(--font-display);
          font-weight: 700;
          letter-spacing: 0.01em;
          color: var(--ink) !important;
        }

        .story-body {
          font-family: var(--font-body);
          color: var(--ink);
        }

        .story-accent {
          font-family: var(--font-display);
          font-weight: 600;
          font-style: italic;
          color: var(--gold);
        }

        .story-pill {
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--ink);
          background: var(--gold-soft);
          padding: 2px 12px;
          border-radius: 999px;
        }

        .story-quote {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 600;
          font-size: 24px;
          color: var(--gold);
          border-left: 2px solid var(--gold);
          padding-left: 16px;
          text-align: left;
        }

        @media (min-width: 768px) {
          .story-quote {
            text-align: center;
            border-left: none;
            border-top: none;
            padding-left: 0;
          }
        }

        .story-closing {
          font-family: var(--font-display);
          font-weight: 600;
          font-style: italic;
          font-size: 22px;
          color: var(--ink);
        }

        .story-timer-caption {
          font-family: var(--font-display);
          color: var(--gold);
        }

        .timer-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 82px;
          padding: 14px 10px 12px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.35);
          border: 1px solid rgba(183, 110, 121, 0.25);
          box-shadow: 0 12px 24px -16px rgba(183, 110, 121, 0.35);
        }

        .timer-value {
          font-family: var(--font-display);
          font-size: 34px;
          font-weight: 600;
          line-height: 1;
          color: var(--ink);
        }

        .timer-label {
          margin-top: 6px;
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .story-together {
          font-family: var(--font-body);
          color: var(--muted);
        }

        .story-footer {
          font-family: var(--font-display);
          color: var(--ink) !important;
        }

        @media (max-width: 480px) {
          .timer-box {
            min-width: 68px;
            padding: 10px 8px;
          }
          .timer-value {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  );
}