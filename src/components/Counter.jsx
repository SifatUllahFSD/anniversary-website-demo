"use client";

import { useEffect, useState } from "react";

const START_DATE = new Date("2023-08-10T00:00:00");

/* 💎 CARD COMPONENT (OUTSIDE - FIXED) */
function Card({ title, emoji, data, compact }) {
  return (
    <div className="counter-card rounded-3xl p-6 md:p-8">

      <h2
        className="counter-card-title text-center text-xl md:text-2xl mb-6"
        style={{ color: "#5c2a35", fontWeight: 700 }}
      >
        {emoji} {title}
      </h2>

      {/* GRID */}
      {!compact ? (
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {Object.keys(data).map((key) => (
            <div key={key} className="counter-tile rounded-2xl py-4">
              <h3 className="counter-tile-value text-2xl md:text-3xl font-bold text-center">
                {String(data[key] ?? 0).padStart(2, "0")}
              </h3>
              <p className="counter-tile-label text-center text-xs md:text-sm mt-1 capitalize">
                {key}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* 💖 ONE LINE */
        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          {Object.keys(data).map((key) => (
            <div key={key} className="counter-pill flex items-center gap-2 px-4 py-2 rounded-full">
              <span className="counter-pill-value font-bold">
                {String(data[key] ?? 0).padStart(2, "0")}
              </span>
              <span className="counter-pill-label text-xs capitalize">
                {key}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* 💎 MAIN COMPONENT */
export default function Counter() {
  const initialCounterState = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const initialLoveState = { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  const [love, setLove] = useState(initialLoveState);
  const [next, setNext] = useState(initialCounterState);
  const [previous, setPrevious] = useState(initialCounterState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const update = () => {
      const now = new Date();

      // ❤️ LOVE TIME
      const diff = now - START_DATE;

      setLove({
        years: Math.floor(diff / (365 * 24 * 60 * 60 * 1000)),
        days: Math.floor(diff / 86400000),
        hours: Math.floor(diff / 3600000) % 24,
        minutes: Math.floor(diff / 60000) % 60,
        seconds: Math.floor(diff / 1000) % 60,
      });

      // ⏳ NEXT
      let nextDate = new Date(now.getFullYear(), 7, 10);
      if (now > nextDate) nextDate = new Date(now.getFullYear() + 1, 7, 10);

      const nextDiff = nextDate - now;

      setNext({
        days: Math.floor(nextDiff / 86400000),
        hours: Math.floor(nextDiff / 3600000) % 24,
        minutes: Math.floor(nextDiff / 60000) % 60,
        seconds: Math.floor(nextDiff / 1000) % 60,
      });

      // ⏮️ PREVIOUS
      let prevDate = new Date(now.getFullYear(), 7, 10);
      if (now < prevDate) prevDate = new Date(now.getFullYear() - 1, 7, 10);

      const prevDiff = now - prevDate;

      setPrevious({
        days: Math.floor(prevDiff / 86400000),
        hours: Math.floor(prevDiff / 3600000) % 24,
        minutes: Math.floor(prevDiff / 60000) % 60,
        seconds: Math.floor(prevDiff / 1000) % 60,
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="counter-root pt-6 pb-15 md:pb-20 px-4">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
      />

      <div className="text-center mb-10">
        <span className="counter-eyebrow z-999" style={{ color: "#b76e79", display: "block" }}>
          Every Second Counts
        </span>
        <h2
          className="counter-title mt-2 text-3xl md:text-4xl"
          style={{ color: "#5c2a35", fontWeight: 700 }}
        >
          Our Journey
        </h2>
        <div className="counter-divider mt-5"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Next Anniversary" emoji="⏳" data={mounted ? next : initialCounterState} />
          <Card title="Previous Anniversary" emoji="🎉" data={mounted ? previous : initialCounterState} />
        </div>

        {/* LOVE TIME */}
        <Card
          title="Our Love Time (Since 2023)"
          emoji="❤️"
          data={mounted ? love : initialLoveState}
          compact={true}
        />

      </div>

      <style>{`
        .counter-root {
          --gold: #b76e79;
          --gold-soft: rgba(183, 110, 121, 0.14);
          --ink: #5c2a35;
          --muted: #9c6b74;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Inter', -apple-system, sans-serif;
        }

        .counter-eyebrow {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .counter-title {
          font-family: var(--font-display);
          color: var(--ink);
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        .counter-divider {
          width: 96px;
          height: 1px;
          margin: 0 auto;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
        }

        .counter-card {
          background: linear-gradient(
            160deg,
            rgba(255, 224, 233, 0.30) 0%,
            rgba(255, 214, 224, 0.16) 60%,
            rgba(255, 236, 240, 0.22) 100%
          );
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 30px 60px -30px rgba(183, 110, 121, 0.4);
        }

        .counter-card-title {
          font-family: var(--font-display);
          color: var(--ink);
        }

        .counter-tile {
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(183, 110, 121, 0.25);
          box-shadow: 0 12px 24px -16px rgba(183, 110, 121, 0.35);
        }

        .counter-tile-value {
          font-family: var(--font-display);
          color: var(--ink);
        }

        .counter-tile-label {
          font-family: var(--font-body);
          color: var(--gold);
          opacity: 0.9;
        }

        .counter-pill {
          background: linear-gradient(135deg, #b76e79, #8f4a56);
          box-shadow: 0 10px 24px -10px rgba(183, 110, 121, 0.55);
        }

        .counter-pill-value {
          font-family: var(--font-display);
          color: #fff5f6;
        }

        .counter-pill-label {
          font-family: var(--font-body);
          color: #ffe3e8;
          opacity: 0.9;
        }
      `}</style>
    </section>
  );
}