import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const createBubble = (delay, size, x, y, isMobile) => ({
  initial: {
    opacity: 0,
    scale: 0,
    x,
    y,
  },
  animate: {
    opacity: [0, 0.6, 0.8, 0.4, 0],
    scale: [0, size * 0.5, size, size * 1.2, size * 0.8],
    x: x + (Math.random() - 0.5) * 100,
    y: y - 200 - Math.random() * 300,
  },
  transition: {
    delay,
    duration: 6 + Math.random() * 4,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeOut",
  },
});

const floatingBubble = (delay, size, startX, startY) => ({
  initial: {
    opacity: 0.3,
    scale: size,
    x: startX,
    y: startY,
  },
  animate: {
    opacity: [0.3, 0.7, 0.3],
    y: [startY, startY - 50, startY],
    x: [startX, startX + 20, startX - 10, startX],
  },
  transition: {
    delay,
    duration: 8 + Math.random() * 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

export default function CarWashBubbleBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 800
  );
  const [screenHeight, setScreenHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 600
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenWidth(width);
      setScreenHeight(height);
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate random bubbles that rise up
  const getRisingBubbles = () => {
    const bubbles = [];
    const count = isMobile ? 15 : 25;

    for (let i = 0; i < count; i++) {
      bubbles.push({
        d: Math.random() * 8, // delay
        s: 0.3 + Math.random() * 1.2, // size
        x: Math.random() * screenWidth,
        y: screenHeight + 50 + Math.random() * 100,
      });
    }
    return bubbles;
  };

  // Generate floating stationary bubbles
  const getFloatingBubbles = () => {
    const bubbles = [];
    const count = isMobile ? 8 : 15;

    for (let i = 0; i < count; i++) {
      bubbles.push({
        d: Math.random() * 5,
        s: 0.4 + Math.random() * 0.8,
        x: Math.random() * screenWidth,
        y: Math.random() * screenHeight,
      });
    }
    return bubbles;
  };

  const risingBubbles = getRisingBubbles();
  const floatingBubbles = getFloatingBubbles();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep blue-teal gradient background matching Mr. Sudz */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-700 via-cyan-800 to-blue-900" />
      <div className="absolute inset-0 bg-gradient-radial from-cyan-600/20 via-transparent to-blue-900/40" />

      {/* Rising soap bubbles */}
      {risingBubbles.map((bubble, i) => (
        <motion.div
          key={`rising-bubble-${i}`}
          className="absolute rounded-full"
          style={{
            width: isMobile ? 40 + bubble.s * 30 : 60 + bubble.s * 40,
            height: isMobile ? 40 + bubble.s * 30 : 60 + bubble.s * 40,
            background: `radial-gradient(circle at 30% 30%, 
              rgba(255,255,255,0.9), 
              rgba(184,242,255,0.7) 40%, 
              rgba(56,189,248,0.5) 70%, 
              rgba(14,165,233,0.3) 100%)`,
            boxShadow: `
              0 0 20px rgba(56,189,248,0.4),
              inset 0 0 20px rgba(255,255,255,0.3),
              inset -5px -5px 10px rgba(14,165,233,0.2)
            `,
            border: "1px solid rgba(255,255,255,0.3)",
            willChange: "transform, opacity",
          }}
          {...createBubble(bubble.d, bubble.s, bubble.x, bubble.y, isMobile)}
        />
      ))}

      {/* Floating ambient bubbles */}
      {floatingBubbles.map((bubble, i) => (
        <motion.div
          key={`floating-bubble-${i}`}
          className="absolute rounded-full"
          style={{
            width: isMobile ? 20 + bubble.s * 25 : 30 + bubble.s * 35,
            height: isMobile ? 20 + bubble.s * 25 : 30 + bubble.s * 35,
            background: `radial-gradient(circle at 40% 30%, 
              rgba(255,255,255,0.8), 
              rgba(184,242,255,0.5) 50%, 
              rgba(56,189,248,0.3) 80%, 
              rgba(14,165,233,0.2) 100%)`,
            boxShadow: `
              0 0 15px rgba(56,189,248,0.3),
              inset 0 0 15px rgba(255,255,255,0.2)
            `,
            border: "1px solid rgba(255,255,255,0.2)",
            willChange: "transform, opacity",
          }}
          {...floatingBubble(bubble.d, bubble.s, bubble.x, bubble.y)}
        />
      ))}

      {/* Large decorative bubbles in corners */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 30%, 
            rgba(255,255,255,0.6), 
            rgba(184,242,255,0.4) 40%, 
            rgba(56,189,248,0.2) 100%)`,
          boxShadow: "0 0 40px rgba(56,189,248,0.3)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 right-16 w-24 h-24 rounded-full opacity-15"
        style={{
          background: `radial-gradient(circle at 30% 30%, 
            rgba(255,255,255,0.6), 
            rgba(184,242,255,0.4) 40%, 
            rgba(56,189,248,0.2) 100%)`,
          boxShadow: "0 0 30px rgba(56,189,248,0.3)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full opacity-25"
        style={{
          background: `radial-gradient(circle at 30% 30%, 
            rgba(255,255,255,0.7), 
            rgba(184,242,255,0.5) 40%, 
            rgba(56,189,248,0.3) 100%)`,
          boxShadow: "0 0 25px rgba(56,189,248,0.4)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Mobile specific smaller bubbles */}
      {isMobile && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`mobile-bubble-${i}`}
              className="absolute rounded-full"
              style={{
                width: 15 + Math.random() * 20,
                height: 15 + Math.random() * 20,
                left: Math.random() * screenWidth,
                top: Math.random() * screenHeight,
                background: `radial-gradient(circle at 40% 30%, 
                  rgba(255,255,255,0.6), 
                  rgba(184,242,255,0.4) 60%, 
                  rgba(56,189,248,0.2) 100%)`,
                boxShadow: "0 0 10px rgba(56,189,248,0.3)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </>
      )}

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-cyan-700/10" />
    </div>
  );
}
