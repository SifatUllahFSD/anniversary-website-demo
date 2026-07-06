'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Put your image paths here (files placed in the public/images folder).
// Add as many as you like — this is the only source of photos.
const images = [
  "/images/17.jpg",
  "/images/7.jpg",
  "/images/13.jpg",
  "/images/3.jpg",
  "/images/2.jpg",
  
];

// A handful of different transition styles — one is picked each time the
// slide changes, so no two transitions in a row necessarily look the same.
const transitions = [
  {
    initial: (dir) => ({ x: dir > 0 ? 220 : -220, opacity: 0, scale: 0.96 }),
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -220 : 220, opacity: 0, scale: 0.96 }),
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  {
    initial: (dir) => ({ y: dir > 0 ? 180 : -180, opacity: 0 }),
    animate: { y: 0, opacity: 1 },
    exit: (dir) => ({ y: dir > 0 ? -180 : 180, opacity: 0 }),
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  {
    initial: () => ({ opacity: 0, scale: 0.82 }),
    animate: { opacity: 1, scale: 1 },
    exit: () => ({ opacity: 0, scale: 1.12 }),
    transition: { duration: 0.55, ease: 'easeInOut' },
  },
  {
    initial: (dir) => ({ rotate: dir > 0 ? 10 : -10, opacity: 0, scale: 0.92 }),
    animate: { rotate: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ rotate: dir > 0 ? -10 : 10, opacity: 0, scale: 0.92 }),
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  {
    initial: () => ({ opacity: 0, filter: 'blur(10px)', scale: 1.05 }),
    animate: { opacity: 1, filter: 'blur(0px)', scale: 1 },
    exit: () => ({ opacity: 0, filter: 'blur(10px)', scale: 0.97 }),
    transition: { duration: 0.55, ease: 'easeInOut' },
  },
];

const AUTOPLAY_MS = 3200;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [transitionCount, setTransitionCount] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [paused, setPaused] = useState(false);

  const total = images.length;
  const activeTransition = transitions[transitionCount % transitions.length];

  const goTo = useCallback(
    (i, dir) => {
      setDirection(dir);
      setTransitionCount((c) => c + 1);
      setIndex(((i % total) + total) % total);
    },
    [total]
  );

  const goPrev = () => goTo(index - 1, -1);
  const goNext = () => goTo(index + 1, 1);

  useEffect(() => {
    if (paused || lightbox || total <= 1) return;
    const t = setInterval(() => goTo(index + 1, 1), AUTOPLAY_MS);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, lightbox, total]);

  return (
    <section id="Gallery" className="gw-root my-15! md:my-25! ">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap"
      />

      <header className="gw-header">
        <div style={{ width: '100%' }}>
          <span className="gw-eyebrow">Our Special Memories</span>
          <h1 className="gw-title">A Love Worth Remembering</h1>
        </div>
      </header>

      {total === 0 ? (
        <div className="gw-empty">
          <div className="gw-empty-mark">✦</div>
          <p>No photos yet.</p>
        </div>
      ) : (
        <div
          className="gw-frame"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ maxWidth: 620, margin: '0 auto' }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={index}
              src={images[index]}
              alt=""
              custom={direction}
              variants={activeTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={activeTransition.transition}
              className="gw-frame-img"
              onClick={() => setLightbox(true)}
            />
          </AnimatePresence>

          <button className="gw-overlay-arrow gw-overlay-left" onClick={goPrev} aria-label="Previous slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="gw-overlay-arrow gw-overlay-right" onClick={goNext} aria-label="Next slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <span className="gw-counter">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="gw-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <motion.img
              key={index}
              src={images[index]}
              alt=""
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="gw-lightbox-close" onClick={() => setLightbox(false)} aria-label="Close">
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gw-root {
        
          --bg: rgba(255, 214, 224, 0.45);
          --panel: rgba(255, 235, 240, 0.55);
          --line: rgba(183, 110, 121, 0.22);
          --gold: #b76e79;
          --gold-soft: rgba(183, 110, 121, 0.14);
          --ink: #5c2a35;
          --muted: #9c6b74;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Inter', -apple-system, sans-serif;
          font-family: var(--font-body);
          background: linear-gradient(160deg, rgba(255, 224, 233, 0.55) 0%, rgba(255, 214, 224, 0.35) 60%, rgba(255, 236, 240, 0.4) 100%);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          color: var(--ink);
          padding: 40px 20px 40px;
          border-radius: 20px;
          max-width: 1080px;
         
          box-shadow: 0 30px 70px -35px rgba(183, 110, 121, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
        }

        .gw-header {
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--line);
          text-align: center;
        }
        .gw-eyebrow {
          display: block;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 4px;
          font-weight: 600;
        }
        .gw-title {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 600;
          margin: 0;
          letter-spacing: 0.01em;
          color: var(--ink);
        }

        .gw-empty {
          border: 1px dashed rgba(183, 110, 121, 0.4);
          border-radius: 16px;
          padding: 72px 24px;
          text-align: center;
          background: rgba(255, 255, 255, 0.25);
        }
        .gw-empty-mark {
          font-size: 26px;
          color: var(--gold);
          margin-bottom: 14px;
        }
        .gw-empty p {
          margin: 0;
          font-size: 16px;
          color: var(--ink);
        }

        .gw-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 18px;
          overflow: hidden;
          background: transparent;
          border: 1px solid var(--line);
          box-shadow: 0 25px 55px -25px rgba(183, 110, 121, 0.45);
        }
        @media (max-width: 640px) {
          .gw-frame {
            aspect-ratio: 4 / 3;
            border-radius: 14px;
          }
        }
        .gw-frame-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          cursor: pointer;
        }

        .gw-overlay-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: rgba(92, 42, 53, 0.4);
          color: #fff5f6;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: background 0.2s ease, transform 0.15s ease;
          z-index: 3;
        }
        .gw-overlay-arrow:hover {
          background: rgba(183, 110, 121, 0.75);
          transform: translateY(-50%) scale(1.06);
        }
        .gw-overlay-left {
          left: 14px;
        }
        .gw-overlay-right {
          right: 14px;
        }
        @media (max-width: 640px) {
          .gw-overlay-arrow {
            width: 36px;
            height: 36px;
          }
          .gw-overlay-left {
            left: 8px;
          }
          .gw-overlay-right {
            right: 8px;
          }
        }

        .gw-counter {
          position: absolute;
          bottom: 12px;
          left: 14px;
          font-family: var(--font-display);
          font-size: 13px;
          letter-spacing: 0.06em;
          color: #fff5f6;
          background: rgba(183, 110, 121, 0.6);
          padding: 4px 12px;
          border-radius: 999px;
          backdrop-filter: blur(4px);
          z-index: 2;
        }

        .gw-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(92, 42, 53, 0.55);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 32px;
        }
        .gw-lightbox img {
          max-width: 100%;
          max-height: 88vh;
          border-radius: 12px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        }
        .gw-lightbox-close {
          position: absolute;
          top: 24px;
          right: 28px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.15);
          color: #fff5f6;
          font-size: 20px;
          cursor: pointer;
        }
        .gw-lightbox-close:hover {
          border-color: var(--gold);
          color: var(--gold);
        }
      `}</style>
    </section>
  );
}