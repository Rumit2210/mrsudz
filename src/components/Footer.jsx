// src/components/FooterBar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Instagram, Facebook, MapPin, Mail } from "lucide-react";
import logo from "/src/assets/logo.png";
import footerBg from "/src/assets/footer/footer.jpg";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=5560+W+Broad+St%2C+Columbus%2C+OH%2C+43228";
const PHONE = "+1 (614) 707-3202";
const EMAIL = "Office@mrsudzcarwash.com";
const TAGLINE = "Unlimited shine, one easy membership.";

function WaveTop() {
  return (
    <div className="absolute left-0 right-0 -top-8 sm:-top-10 pointer-events-none">
      <svg
        className="w-full h-10 sm:h-12"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        {/* <path
          d="M0,60 C240,100 420,10 720,40 C1020,70 1200,10 1440,40 L1440,0 L0,0 Z"
          fill="rgba(34,211,238,0.25)"
        /> */}
      </svg>
      <svg
        className="w-full h-12 sm:h-14 -mt-3"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C240,120 420,30 720,60 C1020,90 1200,30 1440,60 L1440,0 L0,0 Z"
          fill="rgba(34,211,238,0.6)"
        />
      </svg>
    </div>
  );
}

/* ---- Get Directions: underline appears on hover + one-time shine per hover ---- */
function FancyTextLink({ href, children }) {
  const [shineKey, setShineKey] = useState(0);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial="rest"
      whileHover="hover"
      onHoverStart={() => setShineKey((k) => k + 1)}
      className="relative inline-flex items-center gap-2 text-2xl md:text-3xl font-extrabold
                 text-teal-200 hover:text-white transition"
    >
      <MapPin className="w-6 h-6" />
      <span className="relative">
        {children}

        {/* underline only on hover */}
        <motion.span
          variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="absolute left-0 -bottom-1 h-[3px] w-full origin-left rounded-full
                     bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400"
        />

        {/* one-time shine across the underline per hover */}
        <motion.span
          key={shineKey}
          initial={{ x: "-15%", opacity: 0.9 }}
          animate={{ x: "400%", opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute -bottom-[3px] left-0 h-[6px] w-1/4 rounded-full bg-white/80"
        />
      </span>
      <span aria-hidden>→</span>
    </motion.a>
  );
}

/* ---- Social icon: one-time shine per hover ---- */
function Social({ href, label, children }) {
  const [shineKey, setShineKey] = useState(0);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onHoverStart={() => setShineKey((k) => k + 1)}
      className="relative p-2 rounded-full bg-white/20 hover:bg-white/30 shadow transition"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        <motion.span
          key={shineKey}
          initial={{ x: "-120%" }}
          animate={{ x: "220%" }}
          transition={{ duration: 1, ease: "easeOut" }} // quick, runs once
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%)",
          }}
        />
      </span>
      <span className="relative z-10 block">{children}</span>
    </motion.a>
  );
}

export default function FooterBar() {
  const year = new Date().getFullYear();
  const [logoShineKey, setLogoShineKey] = useState(0);

  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,40,80,.92), rgba(0,120,170,.86)), url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <WaveTop />

      <div className="container mx-auto px-6 py-12 lg:py-5">
        <div className="flex flex-col gap-10 lg:gap-6 lg:flex-row items-center justify-between">
          {/* Logo — gentle float (loop), shine only once per hover */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -6, 0],
              rotate: [0, -1.6, 1.6, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: {
                delay: 0.35,
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                delay: 0.35,
                duration: 6.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            onHoverStart={() => setLogoShineKey((k) => k + 1)}
          >
            <span className="absolute -inset-6 rounded-full bg-cyan-300/15 blur-xl" />
            <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
              {/* one-time shine on hover */}
              <motion.span
                key={logoShineKey}
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%)",
                }}
              />
            </span>
            <img
              src={logo}
              alt="Mr. Sudz"
              className="relative w-44 sm:w-52 lg:w-60 h-auto drop-shadow-[0_10px_28px_rgba(0,0,0,.45)]"
            />
          </motion.div>

          {/* Center: Tagline (one-time entrance) + Get Directions (text link) */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }} // plays once
              transition={{ duration: 1, ease: "easeOut" }} // smooth & a bit faster
              className="font-cartoon font-extrabold tracking-tight
                         text-3xl md:text-4xl lg:text-5xl
                         text-transparent bg-clip-text
                         bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300"
            >
              {TAGLINE}
            </motion.h2>

            <div className="mt-4">
              <FancyTextLink href={MAPS_URL}>Get Directions</FancyTextLink>
            </div>
          </div>

          {/* Right: Contact + Socials */}
          <div className="text-center lg:text-right">
            <div className="space-y-2 text-lg md:text-xl">
              <a
                href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-2 text-cyan-100 hover:text-white transition"
                title="Call us"
              >
                <Phone className="w-5 h-5" /> {PHONE}
              </a>
              <br />
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-cyan-100 hover:text-white transition"
                title="Email us"
              >
                <Mail className="w-5 h-5" /> {EMAIL}
              </a>
            </div>

            <div className="mt-4 flex justify-center lg:justify-end gap-4">
              <Social
                href="https://www.facebook.com/Mr.SudzCarWash"
                label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Social>
              <Social
                href="https://www.instagram.com/mrsudzexpress/"
                label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Social>
            </div>
          </div>
        </div>

        {/* Quick links (kept) */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-lg text-cyan-100">
          <a href="#packages" className="hover:text-white transition">
            Wash Packages & Prices
          </a>
          <a href="#join" className="hover:text-white transition">
            Join the Unlimited Club
          </a>
          <a href="#contact" className="hover:text-white transition">
            Send Us a Message
          </a>
        </div>
      </div>

      <div className="py-5 text-center text-sm md:text-base text-cyan-100">
        © {year} Mr Sudz Car Wash. All Rights Reserved.
      </div>
    </footer>
  );
}
