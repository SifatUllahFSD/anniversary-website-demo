'use client';

import { useState, useMemo } from 'react';

// 3 columns x 2 rows on desktop = 6/slide, 2 columns x 3 rows on mobile = 6/slide
const ITEMS_PER_SLIDE = 6;

// Put your image paths here (files placed in the public/images folder).
// This is the only source of photos — visitors can't add or remove any.
const images = [
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/7.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
   "/images/6.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
   "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",

  
 
];

export default function Gallery() {
  const [slide, setSlide] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const totalSlides = Math.max(1, Math.ceil(images.length / ITEMS_PER_SLIDE));

  const currentPhotos = useMemo(
    () => images.slice(slide * ITEMS_PER_SLIDE, slide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE),
    [slide]
  );

  const goPrev = () => setSlide((s) => (s - 1 + totalSlides) % totalSlides);
  const goNext = () => setSlide((s) => (s + 1) % totalSlides);

  return (
    <div id="gallery" className="gw-root ">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap"
      />

      <header className="gw-header">
        <div style={{ width: '100%' }}>
          <span className="gw-eyebrow">Our Memories</span>
          <h1 className="gw-title">Anniversary Gallery</h1>
        </div>
      </header>

      {images.length === 0 ? (
        <div className="gw-empty">
          <div className="gw-empty-mark">✦</div>
          <p>No photos yet.</p>
        </div>
      ) : (
        <>
          <div className="gw-grid" key={slide}>
            {currentPhotos.map((url, i) => {
              const globalIndex = slide * ITEMS_PER_SLIDE + i;
              return (
                <figure
                  className="gw-cell"
                  key={url}
                  onClick={() => setLightbox(globalIndex)}
                >
                  <img src={url} alt="" loading="lazy" />
                  <span className="gw-cell-index">{String(globalIndex + 1).padStart(2, '0')}</span>
                </figure>
              );
            })}
          </div>

          <nav className="gw-pagination" aria-label="Slide navigation">
            <button
              className="gw-arrow"
              onClick={goPrev}
              disabled={totalSlides <= 1}
              aria-label="Previous slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <ul className="gw-pages">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <li key={i}>
                  <button
                    className={`gw-page-num ${i === slide ? 'is-active' : ''}`}
                    onClick={() => setSlide(i)}
                    aria-current={i === slide ? 'true' : undefined}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>

            <button
              className="gw-arrow"
              onClick={goNext}
              disabled={totalSlides <= 1}
              aria-label="Next slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </nav>
        </>
      )}

      {lightbox !== null && images[lightbox] && (
        <div className="gw-lightbox" onClick={() => setLightbox(null)}>
          <img src={images[lightbox]} alt="" onClick={(e) => e.stopPropagation()} />
          <button className="gw-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            ×
          </button>
        </div>
      )}

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
          padding: 40px 28px 32px;
          border-radius: 20px;
          max-width: 1080px;
          margin: 0 auto;
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

        .gw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          animation: gw-fade 0.35s ease;
        }
        @media (max-width: 720px) {
          .gw-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }
        @keyframes gw-fade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .gw-grid {
            animation: none;
          }
        }

        .gw-cell {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.35);
          border: 1px solid var(--line);
          cursor: pointer;
          padding: 0;
          margin: 0;
        }
        .gw-cell img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .gw-cell:hover img {
          transform: scale(1.06);
        }
        .gw-cell:hover {
          border-color: var(--gold);
        }
        .gw-cell-index {
          position: absolute;
          bottom: 8px;
          left: 8px;
          font-family: var(--font-display);
          font-size: 12px;
          letter-spacing: 0.05em;
          color: #fff5f6;
          background: rgba(183, 110, 121, 0.55);
          padding: 2px 8px;
          border-radius: 999px;
          backdrop-filter: blur(4px);
        }

        .gw-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-top: 28px;
        }
        .gw-arrow {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.4);
          color: var(--ink);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
        }
        .gw-arrow:hover:not(:disabled) {
          border-color: var(--gold);
          color: var(--gold);
          transform: translateY(-1px);
        }
        .gw-arrow:disabled {
          opacity: 0.35;
          cursor: default;
        }

        .gw-pages {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .gw-page-num {
          min-width: 30px;
          height: 30px;
          padding: 0 8px;
          border-radius: 999px;
          border: 1px solid transparent;
          background: transparent;
          color: var(--muted);
          font-family: var(--font-display);
          font-size: 15px;
          cursor: pointer;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .gw-page-num:hover {
          color: var(--ink);
        }
        .gw-page-num.is-active {
          background: var(--gold);
          border-color: var(--gold);
          color: #fff5f6;
          font-weight: 600;
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
          animation: gw-fade 0.2s ease;
        }
        .gw-lightbox img {
          max-width: 100%;
          max-height: 88vh;
          border-radius: 10px;
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
    </div>
  );
}