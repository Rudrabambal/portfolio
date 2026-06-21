"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  twinkleSpeed: number;
  twinkleDir: number;
}

interface SunMote {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vy: number;
  wobbleSpeed: number;
  wobbleRange: number;
  wobbleOffset: number;
}

interface Cloud {
  x: number;
  y: number;
  r: number;
  vx: number;
  opacity: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const themeRef = useRef("dark");

  useEffect(() => {
    // Check initial theme state on client mount
    if (typeof window !== "undefined") {
      themeRef.current = document.documentElement.classList.contains("light") ? "light" : "dark";
    }

    const handleThemeChange = () => {
      themeRef.current = document.documentElement.classList.contains("light") ? "light" : "dark";
    };

    window.addEventListener("themechange", handleThemeChange);
    return () => {
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let motes: SunMote[] = [];
    let clouds: Cloud[] = [];
    
    const starColors = ["#FFFFE3", "#CBCBCB", "#6D8196"]; // Theme palette

    // Set canvas dimensions
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements();
    };

    const initElements = () => {
      if (!canvas) return;
      
      // Init stars for Night Mode
      stars = [];
      const density = 0.00015;
      const starCount = Math.min(250, Math.floor(canvas.width * canvas.height * density));
      for (let i = 0; i < starCount; i++) {
        const colorVal = Math.random() > 0.4 ? starColors[0] : Math.random() > 0.5 ? starColors[1] : starColors[2];
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          color: colorVal,
          opacity: Math.random(),
          twinkleSpeed: 0.005 + Math.random() * 0.015,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
        });
      }

      // Init sun motes for Day Mode
      motes = [];
      const moteCount = Math.min(50, Math.floor(canvas.width * canvas.height * 0.00004));
      for (let i = 0; i < moteCount; i++) {
        motes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          opacity: 0.15 + Math.random() * 0.3,
          vy: -(0.2 + Math.random() * 0.4),
          wobbleSpeed: 0.01 + Math.random() * 0.02,
          wobbleRange: 5 + Math.random() * 15,
          wobbleOffset: Math.random() * Math.PI * 2,
        });
      }

      // Init clouds for Day Mode
      clouds = [];
      const cloudCount = 4;
      for (let i = 0; i < cloudCount; i++) {
        clouds.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.4, // Top 40% of the screen
          r: 120 + Math.random() * 100,
          vx: 0.05 + Math.random() * 0.08,
          opacity: 0.04 + Math.random() * 0.08,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseRef.current.targetX = (e.clientX - centerX) * 0.08;
      mouseRef.current.targetY = (e.clientY - centerY) * 0.08;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    const animate = () => {
      if (!canvas || !ctx) return;
      const mouse = mouseRef.current;
      const currentTheme = themeRef.current;

      // Interpolate mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      if (currentTheme === "light") {
        // --- LIGHT MODE (DAY) ---
        // Render beautiful sky gradient
        const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
        skyGrad.addColorStop(0, "#D2E1F3"); // Soft sky blue
        skyGrad.addColorStop(0.5, "#E9EFF7"); // Pale blue
        skyGrad.addColorStop(1, "#F4F6F8"); // Light grey/slate
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, w, h);

        // Sun light glow
        const sunGlow = ctx.createRadialGradient(w * 0.85, h * 0.15, 0, w * 0.85, h * 0.15, Math.min(w, h) * 0.6);
        sunGlow.addColorStop(0, "rgba(255, 255, 255, 0.4)");
        sunGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = sunGlow;
        ctx.fillRect(0, 0, w, h);

        // Render ambient moving clouds
        clouds.forEach((cloud) => {
          cloud.x += cloud.vx;
          if (cloud.x - cloud.r > w) {
            cloud.x = -cloud.r;
          }

          const cloudOffsetX = -mouse.x * 0.1;
          const cloudOffsetY = -mouse.y * 0.1;

          ctx.save();
          ctx.filter = "blur(40px)";
          ctx.beginPath();
          ctx.arc(cloud.x + cloudOffsetX, cloud.y + cloudOffsetY, cloud.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${cloud.opacity})`;
          ctx.fill();
          ctx.restore();
        });

        // Render rising warm-light sun motes
        motes.forEach((mote) => {
          mote.y += mote.vy;
          if (mote.y + mote.size < 0) {
            mote.y = h + mote.size;
            mote.x = Math.random() * w;
          }

          const wobble = Math.sin(Date.now() * mote.wobbleSpeed + mote.wobbleOffset) * mote.wobbleRange * 0.05;
          const moteOffsetX = -mouse.x * (mote.size * 0.15);
          const moteOffsetY = -mouse.y * (mote.size * 0.15);

          ctx.beginPath();
          ctx.arc(mote.x + wobble + moteOffsetX, mote.y + moteOffsetY, mote.size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 227, 0.65)"; // Soft ivory
          ctx.globalAlpha = mote.opacity;
          ctx.fill();
        });

        ctx.globalAlpha = 1.0;

      } else {
        // --- DARK MODE (NIGHT) ---
        // Solid base fill — paints the entire canvas with the dark background
        ctx.fillStyle = "#121416";
        ctx.fillRect(0, 0, w, h);

        // Space dust / cosmic nebula 1 (top left)
        const g1 = ctx.createRadialGradient(
          w * 0.25 - mouse.x * 0.4, 
          h * 0.3 - mouse.y * 0.4, 
          0, 
          w * 0.25 - mouse.x * 0.4, 
          h * 0.3 - mouse.y * 0.4, 
          Math.min(w, h) * 0.5
        );
        g1.addColorStop(0, "rgba(109, 129, 150, 0.08)");
        g1.addColorStop(1, "rgba(18, 20, 22, 0)");
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, w, h);

        // Cosmic nebula 2 (bottom right)
        const g2 = ctx.createRadialGradient(
          w * 0.75 - mouse.x * 0.6, 
          h * 0.7 - mouse.y * 0.6, 
          0, 
          w * 0.75 - mouse.x * 0.6, 
          h * 0.7 - mouse.y * 0.6, 
          Math.min(w, h) * 0.6
        );
        g2.addColorStop(0, "rgba(109, 129, 150, 0.06)");
        g2.addColorStop(1, "rgba(18, 20, 22, 0)");
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, w, h);

        // Draw twinkling stars
        stars.forEach((star) => {
          star.opacity += star.twinkleSpeed * star.twinkleDir;
          if (star.opacity >= 1) {
            star.opacity = 1;
            star.twinkleDir = -1;
          } else if (star.opacity <= 0.1) {
            star.opacity = 0.1;
            star.twinkleDir = 1;
          }

          const offsetX = -mouse.x * (star.size * 0.4);
          const offsetY = -mouse.y * (star.size * 0.4);

          let finalX = star.x + offsetX;
          let finalY = star.y + offsetY;

          if (finalX < 0) finalX += w;
          if (finalX > w) finalX -= w;
          if (finalY < 0) finalY += h;
          if (finalY > h) finalY -= h;

          ctx.beginPath();
          ctx.arc(finalX, finalY, star.size, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.opacity;
          ctx.fill();
        });

        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
