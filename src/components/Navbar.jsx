


"use client";

import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // নিচে গেলে hide
      } else {
        setShowNavbar(true); // উপরে গেলে show
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Love Time", href: "#Counter" },
    { name: "Letter", href: "#letter" },
    { name: "Story", href: "#Story" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reasons", href: "#reasons" },
    { name: "Future", href: "#future" },
  ];

  return (
    <header
      className={`navbar-root fixed top-0 left-0 w-full z-50 px-4 py-2 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
      />

      <nav className="nav-shell max-w-7xl mx-auto rounded-2xl">

        <div className="flex items-center justify-between h-20 px-6">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="logo-badge w-12 h-12 rounded-full flex items-center justify-center">
              <Heart className="text-white text-xl animate-pulse" size={20} fill="white" />
            </div>

            <div>
              <h1 className="logo-name font-bold text-lg">
               JACOB MILLER
              </h1>

              <p className="logo-sub text-xs">
                ❤️ OLIVIA ROSE TAYLOR
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="nav-link font-medium transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="hidden lg:block">
            <a
              href="#Memories"
              className="nav-cta px-5 py-2 rounded-full transition"
            >
              Our Memories ❤️
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="nav-mobile-btn lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="nav-mobile-menu lg:hidden">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="nav-mobile-link block px-6 py-4 transition"
              >
                {item.name}
              </a>
            ))}

          </div>
        )}

      </nav>

      <style>{`
        .navbar-root {
          --gold: #b76e79;
          --gold-soft: rgba(183, 110, 121, 0.14);
          --ink: #5c2a35;
          --muted: #9c6b74;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Inter', -apple-system, sans-serif;
        }

        .nav-shell {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 20px 50px -25px rgba(183, 110, 121, 0.35);
        }

        .logo-badge {
          background: linear-gradient(135deg, #b76e79, #8f4a56);
          box-shadow: 0 8px 20px -6px rgba(183, 110, 121, 0.55);
        }

        .logo-name {
          font-family: var(--font-display);
          color: var(--ink);
        }

        .logo-sub {
          font-family: var(--font-body);
          color: var(--muted);
        }

        .nav-link {
          font-family: var(--font-body);
          color: var(--ink);
        }

        .nav-link:hover {
          color: var(--gold);
        }

        .nav-cta {
          font-family: var(--font-body);
          font-weight: 600;
          color: #fff5f6;
          background: linear-gradient(135deg, #b76e79, #8f4a56);
          box-shadow: 0 10px 24px -10px rgba(183, 110, 121, 0.55);
        }

        .nav-cta:hover {
          background: linear-gradient(135deg, #a15f6a, #7c3f49);
        }

        .nav-mobile-btn {
          color: var(--gold);
        }

        .nav-mobile-menu {
          border-top: 1px solid rgba(183, 110, 121, 0.2);
        }

        .nav-mobile-link {
          font-family: var(--font-body);
          color: var(--ink);
        }

        .nav-mobile-link:hover {
          background: var(--gold-soft);
          border-radius: 1rem;
          color: var(--gold);
        }
      `}</style>
    </header>
  );
}