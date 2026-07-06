// "use client";

// import { useEffect, useRef } from "react";

// export default function LiveBackground() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let width = (canvas.width = window.innerWidth);
//     let height = (canvas.height = window.innerHeight);

//     const hearts = Array.from({ length: 60 }).map(() => ({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       size: Math.random() * 20 + 10,
//       speed: Math.random() * 1 + 0.5,
//       drift: Math.random() * 1 - 0.5,
//       alpha: Math.random() * 0.6 + 0.2,
//     }));

//     function drawHeart(x, y, size) {
//       ctx.beginPath();
//       ctx.moveTo(x, y);
//       ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
//       ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.2, x, y + size * 1.5);
//       ctx.bezierCurveTo(x, y + size * 1.2, x + size, y + size, x + size, y);
//       ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
//       ctx.fillStyle = "rgba(255, 105, 180, 0.6)";
//       ctx.fill();
//     }

//     function animate() {
//       ctx.clearRect(0, 0, width, height);

//       // soft pink gradient bg
//       const gradient = ctx.createLinearGradient(0, 0, width, height);
//       gradient.addColorStop(0, "#ffe4f2");
//       gradient.addColorStop(1, "#ffc1e3");
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);

//       hearts.forEach((h) => {
//         h.y -= h.speed;
//         h.x += h.drift;

//         if (h.y < -20) {
//           h.y = height + 20;
//           h.x = Math.random() * width;
//         }

//         drawHeart(h.x, h.y, h.size);
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     const resize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", resize);

//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   return (
//      <canvas
//     ref={canvasRef}
//     className="fixed top-0 left-0 w-full h-full pointer-events-none"
//   />
//   );
// }















"use client";

import { useEffect, useRef } from "react";

export default function LiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    // 💛 Premium palette — soft rose-gold, matches ink/gold theme
    const GOLD = [183, 110, 121]; // #b76e79
    const INK = [92, 42, 53]; // #5c2a35

    const hearts = Array.from({ length: 46 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 16 + 8,
      speed: Math.random() * 0.6 + 0.25,
      drift: Math.random() * 0.6 - 0.3,
      baseAlpha: Math.random() * 0.35 + 0.15,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2,
      rotation: Math.random() * 0.4 - 0.2,
      hue: Math.random() > 0.5 ? GOLD : INK,
    }));

    const sparkles = Array.from({ length: 35 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.4,
      speed: Math.random() * 0.25 + 0.05,
      twinkleSpeed: Math.random() * 0.03 + 0.015,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    function drawHeart(x, y, size, alpha, rgb, rotation) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(0, -size / 2, -size, -size / 2, -size, 0);
      ctx.bezierCurveTo(-size, size, 0, size * 1.2, 0, size * 1.5);
      ctx.bezierCurveTo(0, size * 1.2, size, size, size, 0);
      ctx.bezierCurveTo(size, -size / 2, 0, -size / 2, 0, 0);
      ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
      ctx.fill();
      ctx.restore();
    }

    function drawSparkle(x, y, radius, alpha) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 245, 246, ${alpha})`;
      ctx.shadowColor = "rgba(183, 110, 121, 0.6)";
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    let raf;
    let t = 0;

    function animate() {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      // Elegant rose-gold gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#fff3f5");
      gradient.addColorStop(0.5, "#ffe4e9");
      gradient.addColorStop(1, "#ffd9e0");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Sparkles (subtle twinkling dust)
      sparkles.forEach((s) => {
        s.y -= s.speed;
        if (s.y < -5) {
          s.y = height + 5;
          s.x = Math.random() * width;
        }
        const twinkle = (Math.sin(t * s.twinkleSpeed + s.twinklePhase) + 1) / 2;
        drawSparkle(s.x, s.y, s.radius, twinkle * 0.7);
      });

      // Floating hearts with gentle mouse parallax + twinkle
      hearts.forEach((h) => {
        const parallaxX = (mouseX - width / 2) * 0.01;
        const parallaxY = (mouseY - height / 2) * 0.01;

        h.y -= h.speed;
        h.x += h.drift;

        if (h.y < -30) {
          h.y = height + 30;
          h.x = Math.random() * width;
        }
        if (h.x < -30) h.x = width + 30;
        if (h.x > width + 30) h.x = -30;

        const twinkle = (Math.sin(t * h.twinkleSpeed + h.twinklePhase) + 1) / 2;
        const alpha = h.baseAlpha + twinkle * 0.25;

        drawHeart(
          h.x + parallaxX,
          h.y + parallaxY,
          h.size,
          alpha,
          h.hue,
          h.rotation
        );
      });

      raf = requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
    />
  );
}