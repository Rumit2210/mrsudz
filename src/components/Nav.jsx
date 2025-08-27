import { useState, useRef, useEffect } from "react";
import {
  Instagram,
  Facebook,
  User,
  Mail,
  Menu,
  X,
  Sparkles,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

// Links look/feel (↑ bumped sizes)
const link =
  "px-4 py-2 text-slate-100/90 hover:text-cyan-200 font-semibold tracking-wide text-base md:text-lg transition-colors duration-200";
const mobileLink =
  "block px-6 py-4 text-xl font-semibold text-slate-100/90 hover:text-cyan-200 hover:bg-cyan-900/20 transition-colors duration-200 border-b border-white/10 last:border-b-0";

// Tiny bubble creator (inside the navbar only)
function NavBubbles() {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((i) => {
        const size = 8 + Math.random() * 18;
        const startX = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 5 + Math.random() * 4;

        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${startX}%`,
              bottom: -16,
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(184,242,255,0.6) 50%, rgba(56,189,248,0.35) 100%)",
              boxShadow: "0 0 10px rgba(56,189,248,0.4)",
              border: "1px solid rgba(255,255,255,0.35)",
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -80 - Math.random() * 40,
              x: [0, (Math.random() - 0.5) * 40, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              delay,
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

export default function SoapySharkNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // NEW: the sticky wrapper ref (covers top bar + navbar)
  const stickyRef = useRef(null);

  // Smooth scroll with header offset (uses sticky wrapper height)
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = stickyRef.current?.offsetHeight ?? 96;
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onAnchorClick = (e, id) => {
    e.preventDefault();
    scrollToId(id);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {};
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* STICKY WRAPPER: top bar + navbar all stick together */}
      <div ref={stickyRef} className="sticky top-0 z-50 overflow-visible">
        {/* Top utility bar */}
        <div className="hidden font-cartoon md:block bg-gradient-to-r from-cyan-900/70 via-cyan-800/60 to-blue-900/70 text-cyan-100 text-base py-2 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-4 flex justify-end items-center space-x-6">
            <a
              href="https://www.facebook.com/Mr.SudzCarWash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-200 transition-colors flex items-center gap-1"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/mrsudzexpress/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-200 transition-colors flex items-center gap-1"
            >
              <Instagram className="h-4 w-4" />
            </a>
            {/* Address → opens Google Maps */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=5560+W+Broad+St%2C+Columbus%2C+Ohio%2C+43228"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-200 transition-colors flex items-center gap-1"
            >
              <MapPin className="h-4 w-4" />
              5560 W Broad St, Columbus, Ohio, 43228
            </a>

            {/* Phone → tap to call */}
            <a
              href="tel:+16147073202"
              className="hover:text-cyan-200 transition-colors flex items-center gap-1"
            >
              <Phone className="h-4 w-4" />
              +1 (614) 707-3202
            </a>
          </div>
        </div>

        {/* Main navbar (no sticky here; the wrapper handles it) */}
        <header
          className="overflow-visible backdrop-blur-md 
                     bg-gradient-to-r from-slate-800/70 via-cyan-800/60 to-blue-900/70 
                     border-b border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
        >
          <div className="relative">
            <NavBubbles />
          </div>

          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between h-20 lg:h-24">
              {/* BIG logo */}
              <a
                href="#hero"
                onClick={(e) => onAnchorClick(e, "hero")}
                className="flex-shrink-0 relative"
                aria-label="Go to top"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -4 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -2, 0],
                    rotate: [0, -1.2, 1.2, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.35, ease: "easeOut" },
                    scale: { duration: 0.45, ease: "backOut" },
                    y: {
                      delay: 0.35,
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      delay: 0.35,
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="
                    relative flex items-center justify-center
                    w-[88px] h-[88px]
                    md:w-[112px] md:h-[112px]
                    lg:w-[172px] lg:h-[172px]
                    xl:w-[196px] xl:h-[196px]
                    lg:translate-y-6
                  "
                  style={{
                    filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.35))",
                  }}
                >
                  <span className="absolute -inset-3 rounded-full bg-cyan-300/20 blur-xl" />
                  <motion.span
                    className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
                    initial={false}
                  >
                    <motion.span
                      className="absolute -left-1/2 top-0 h-full w-1/2 rotate-[18deg] bg-white/35 blur-sm"
                      initial={{ x: "-140%", opacity: 0 }}
                      whileHover={{ x: "220%", opacity: 1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </motion.span>
                  <motion.span
                    className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
                    style={{
                      width: "60%",
                      height: "14%",
                      background:
                        "radial-gradient(60% 80% at 50% 50%, rgba(56,189,248,0.25), transparent 70%)",
                    }}
                    animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src={logo}
                    alt="MR.SUDZ Logo"
                    className="relative w-full h-full object-contain"
                    whileHover={{ rotate: -2 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  />
                </motion.div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden font-cartoon lg:flex items-center space-x-8">
                <a
                  href="#packages"
                  onClick={(e) => onAnchorClick(e, "packages")}
                  className={link}
                >
                  Wash Packages & Prices
                </a>
                <a
                  href="#how-it-works"
                  onClick={(e) => onAnchorClick(e, "how-it-works")}
                  className={link}
                >
                  Why Join the Club
                </a>
                <a
                  href="#testimonials"
                  onClick={(e) => onAnchorClick(e, "testimonials")}
                  className={link}
                >
                  Testimonials
                </a>

                {/* NEW */}
                <a
                  href="#fundraising"
                  onClick={(e) => onAnchorClick(e, "fundraising")}
                  className={link}
                >
                  Fundraising
                </a>
              </nav>

              {/* JOIN button */}
              <div className="hidden lg:block">
                <motion.a
                  href="#join"
                  onClick={(e) => onAnchorClick(e, "join")}
                  className="
      relative inline-flex items-center justify-center rounded-full
      px-6 py-2.5 font-cartoon font-extrabold tracking-wide
      text-[16px] text-white overflow-hidden
      border border-white/20 shadow-[0_6px_16px_rgba(14,165,233,.35)]
    "
                  style={{
                    background:
                      "linear-gradient(90deg,#0ea5e9,#22d3ee,#06b6d4,#22d3ee,#0ea5e9)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  whileHover={{
                    scale: 1.06,
                    boxShadow:
                      "0 12px 28px rgba(14,165,233,.45), 0 6px 16px rgba(0,0,0,.22)",
                    transition: { duration: 0.12, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* subtle, clipped shine only on hover */}
                  <motion.span
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%)",
                    }}
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "220%" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    aria-hidden
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    JOIN THE WASH CLUB
                  </span>
                </motion.a>
              </div>

              {/* Mobile actions: socials + menu toggle */}
              <div className="lg:hidden flex items-center gap-1">
                <a
                  href="https://www.instagram.com/mrsudzexpress/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-cyan-200 hover:text-cyan-100 hover:bg-white/10 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>

                <a
                  href="https://www.facebook.com/Mr.SudzCarWash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-cyan-200 hover:text-cyan-100 hover:bg-white/10 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>

                <button
                  onClick={() => setIsMobileMenuOpen((s) => !s)}
                  className="p-2 rounded-lg text-white/90 hover:bg-white/10 transition-colors duration-200"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 left-0 bg-slate-950/95 text-white shadow-xl border-b border-white/10">
            <nav className="pt-24 pb-6">
              <a
                href="#packages"
                className={mobileLink}
                onClick={(e) => onAnchorClick(e, "packages")}
              >
                Wash Packages & Prices
              </a>
              <a
                href="#how-it-works"
                className={mobileLink}
                onClick={(e) => onAnchorClick(e, "how-it-works")}
              >
                Why Join the Club
              </a>
              <a
                href="#testimonials"
                className={mobileLink}
                onClick={(e) => onAnchorClick(e, "testimonials")}
              >
                Testimonials
              </a>
              <a
                href="#fundraising"
                className={mobileLink}
                onClick={(e) => onAnchorClick(e, "fundraising")}
              >
                Fundraising
              </a>
              <div className="px-6 py-4">
                <motion.a
                  href="#join"
                  onClick={(e) => onAnchorClick(e, "join")}
                  className="block w-full text-center px-6 py-4 rounded-full font-cartoon font-extrabold text-xl text-teal-400 relative overflow-hidden border border-teal-400/30"
                  style={{
                    background:
                      "linear-gradient(90deg,#0e7490,#0891b2,#22d3ee,#0891b2,#0e7490)",
                    backgroundSize: "280% 100%",
                    boxShadow:
                      "0 6px 18px rgba(13,148,136,.28), 0 2px 6px rgba(0,0,0,.18), inset 0 0 0 1px rgba(45,212,191,.22)",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  whileHover={{
                    scale: 1.07,
                    boxShadow:
                      "0 16px 38px rgba(45,212,191,.5), 0 8px 22px rgba(0,0,0,.25), inset 0 0 0 2px rgba(45,212,191,.35)",
                    transition: { duration: 0.12, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="absolute -inset-1 rounded-full bg-teal-400/20 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full mix-blend-soft-light opacity-40"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, rgba(255,255,255,.07) 0 10px, rgba(255,255,255,0) 10px 20px)",
                    }}
                    aria-hidden
                  />
                  <motion.span
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%)",
                    }}
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "220%" }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    aria-hidden
                  />
                  <span className="relative z-10 inline-flex items-center justify-center gap-2 text-white">
                    <Sparkles className="w-5 h-5 -ml-1 drop-shadow-[0_0_8px_rgba(45,212,191,.55)]" />
                    JOIN THE WASH CLUB
                  </span>
                </motion.a>
              </div>

              <div className="px-6 py-4 flex justify-center space-x-6 border-t border-white/10">
                <a
                  href="https://www.facebook.com/Mr.SudzCarWash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-cyan-200 hover:text-cyan-100"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/mrsudzexpress/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-cyan-200 hover:text-cyan-100"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="mailto:info@mrsudz.com"
                  className="p-2 text-cyan-200 hover:text-cyan-100"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
