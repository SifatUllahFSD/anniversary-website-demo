"use client";

import { useMemo } from "react";
import { Heart } from "lucide-react";

export default function LoveLetter() {


  return (

    <>
   <section id="letter" className="letter-card mx-4 relative overflow-hidden rounded-[42px] gw-root backdrop-blur-3xl p-8 md:p-14">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
      />

  {/* Background Heart */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <span className="text-[520px] text-[#b76e79]/10 blur-sm select-none">
      ❤️
    </span>
  </div>

  <div className="relative z-10">

    <p className="letter-eyebrow uppercase tracking-[0.55em] text-center text-sm font-semibold">
      WRITTEN WITH LOVE
    </p>

    <h2 className="letter-title mt-5 text-center text-5xl md:text-6xl leading-normal italic font-bold">
      A Letter From My Heart
    </h2>

    <p className="letter-subtitle mt-4 text-center italic">
      Every word below carries a piece of my heart. ❤️
    </p>

    <div className="letter-divider w-28 h-px mx-auto my-10"></div>

    <div className="letter-body space-y-9 text-[19px] md:text-[22px] leading-[2.2]">

      <p>
        ❤️ Since{" "}
        <span className="letter-pill font-bold">
          10 August 2023
        </span>
        , you have become one of the{" "}
        <span className="font-semibold letter-ink-strong">
          most beautiful parts
        </span>{" "}
        of my life. What began as something simple slowly turned into a love
        that is{" "}
        <span className="letter-accent font-semibold">deeper</span>,{" "}
        <span className="letter-accent font-semibold">stronger</span> and far
        more{" "}
        <span className="letter-accent font-semibold">
          meaningful
        </span>{" "}
        than I ever imagined.
      </p>

      <p>
        🌸 You brought a{" "}
        <span className="font-semibold letter-ink-strong">
          quiet kind of peace
        </span>{" "}
        into my life—the kind that makes even ordinary days feel extraordinary.
        Your presence has filled my heart with{" "}
        <span className="font-bold letter-accent">comfort</span>, my mind with{" "}
        <span className="font-bold letter-accent">calmness</span>, and my soul
        with a place it can truly call{" "}
        <span className="font-bold letter-accent">home</span>.
      </p>

      <p>
        ✨ Every conversation, every smile, every laugh and every little moment
        we&apos;ve shared has become a memory I will treasure forever. Thank you for
        making my world brighter simply by being a part of it.
      </p>

      <p>
        💖 I don&apos;t know what tomorrow holds for us, but I know one thing with
        complete certainty—
        <span className="font-semibold letter-ink-strong">
          meeting you has been one of the greatest blessings of my life.
        </span>{" "}
        Thank you for every beautiful memory, every warm smile and every second
        that made my heart believe in love even more.
      </p>

      <div className="my-16 text-center">

        <div className="letter-quote-mark text-8xl">
          ❝
        </div>

        <p className="mt-4 text-3xl md:text-4xl italic font-semibold letter-accent">
          If someone ever asks me...
        </p>

        <p className="mt-5 text-2xl md:text-3xl letter-ink-strong">
          &quot;Have you ever truly loved someone?&quot;
        </p>

        <p className="letter-title mt-10 text-5xl md:text-6xl font-bold">
          I would simply smile...
        </p>

        <p className="mt-10 text-4xl md:text-5xl leading-[2] letter-title-font">

          <span className="letter-ink-strong">&quot;Yes...&quot;</span>

          <br />

          <span className="letter-accent">
            Quietly.
          </span>

          <br />

          <span className="letter-ink-strong">
            Slowly.
          </span>

          <br />

          <span className="letter-title font-bold">
            With all my heart.
          </span>

          ❤️

        </p>

      </div>

      <p className="letter-accent text-center text-2xl italic leading-[2]">
        💫 Every heartbeat reminds me of you.
        <br />
        Every day with you is a beautiful gift,
        <br />
        and every moment spent loving you is a memory
        I will cherish forever.
      </p>

    </div>

    <div className="mt-16 flex justify-center">
      <div className="letter-divider w-40 h-px"></div>
    </div>

    <div className="mt-12 text-center">

      <p className="letter-title mt-0 text-4xl md:text-5xl italic font-bold">
        Forever, Always &amp; Beyond ❤️
      </p>

      <p className="letter-subtitle mt-8 text-xl italic">
        With all my love,
      </p>

      <h3 className="letter-signature mt-4 text-2xl md:text-4xl tracking-[0.25em] font-semibold">
         JACOB MILLER
      </h3>

      <p className="letter-date mt-4">
        Since 10 August 2023 • ∞
      </p>

    </div>

  </div>

  <style>{`
    .letter-card {
      --gold: #b76e79;
      --gold-soft: rgba(183, 110, 121, 0.14);
      --ink: #5c2a35;
      --muted: #9c6b74;
      --font-display: 'Cormorant Garamond', serif;
      --font-body: 'Inter', -apple-system, sans-serif;

      border: 1px solid rgba(255, 255, 255, 0.45);
      box-shadow: 0 40px 90px -40px rgba(183, 110, 121, 0.4);
    }

    .letter-eyebrow {
      font-family: var(--font-body);
      color: var(--gold);
    }

    .letter-title,
    .letter-title-font {
      font-family: var(--font-display);
      color: var(--ink);
    }

    .letter-title {
      background: linear-gradient(90deg, var(--ink) 0%, var(--gold) 50%, var(--ink) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .letter-subtitle {
      font-family: var(--font-body);
      color: var(--muted);
    }

    .letter-divider {
      background: linear-gradient(to right, transparent, var(--gold), transparent);
    }

    .letter-body {
      font-family: var(--font-body);
      color: var(--ink);
    }

    .letter-ink-strong {
      color: var(--ink);
    }

    .letter-accent {
      color: var(--gold);
    }

    .letter-pill {
      color: var(--ink);
      background: var(--gold-soft);
      padding: 4px 12px;
      border-radius: 999px;
    }

    .letter-quote-mark {
      color: var(--gold);
      filter: drop-shadow(0 0 20px rgba(183, 110, 121, 0.35));
      font-family: var(--font-display);
    }

    .letter-signature {
      font-family: var(--font-display);
      color: var(--ink);
    }

    .letter-date {
      font-family: var(--font-body);
      color: var(--muted);
    }
  `}</style>

</section>
    </>

  )
  }