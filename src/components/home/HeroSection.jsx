// src/components/home/HeroSection.jsx
import { motion } from "framer-motion";

// 👉 Use your actual image
import slide3 from "/src/assets/home/background-3.jpg";

const HERO = {
  bg: slide3,
  title: "FAST, GENTLE, ECO-FRIENDLY",
  subtitle:
    "Premium soaps, soft touch, and quick dry. Keep your vehicle looking next-level clean.",
  cta: { label: "VIEW PACKAGES", href: "/packages" },
  badge: { label: "Eco Safe", ratingText: "Biodegradable chemistry" },
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[86vh] min-h-[520px] overflow-hidden"
      aria-label="Hero"
    >
      {/* Static background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dim overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="w-full max-w-4xl text-center text-white">
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-slate-800 shadow-md mb-4">
            <span className="inline-block h-5 w-5 rounded bg-[#10B981]" />
            {/* green badge dot */}
            <span className="text-sm font-semibold">{HERO.badge.label}</span>
            <span className="text-sm opacity-80">
              · {HERO.badge.ratingText}
            </span>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="font-extrabold tracking-tight drop-shadow-md
                       text-3xl sm:text-5xl lg:text-6xl leading-tight"
          >
            {HERO.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-4 mx-auto max-w-3xl text-sm sm:text-base lg:text-lg text-white/90"
          >
            {HERO.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6"
          >
            <a
              href={HERO.cta.href}
              className="inline-block rounded-xl bg-cyan-600 px-7 py-3 sm:px-8 sm:py-4
                         font-semibold text-white shadow-lg hover:shadow-xl
                         hover:bg-cyan-500 active:scale-[0.99] transition"
            >
              {HERO.cta.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
