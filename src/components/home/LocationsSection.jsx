import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import logo from "/src/assets/logos/1.png";

/* ====== Your location & links ====== */
const LOCATION = {
  name: "Mr. Sudz",
  address: "5560 W Broad St",
  cityState: "Columbus, OH 43228",
  phone: "+1 (614) 707-3202",
  email: "Office@mrsudzcarwash.com",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=5560+W+Broad+St%2C+Columbus%2C+OH%2C+43228",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=5560+W+Broad+St%2C+Columbus%2C+OH%2C+43228",
};

// Shared gradient used on the CTA
const MATCHED_GRADIENT = "from-teal-400 via-cyan-500 to-blue-600";

/* Tiny “rain” for the card header */
function WaterDrops({ isActive }) {
  const drops = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {isActive &&
        drops.map((d) => (
          <motion.div
            key={d}
            className="absolute w-1 h-3 bg-blue-300 rounded-full opacity-70"
            initial={{ x: Math.random() * 240, y: -10, scaleY: 0 }}
            animate={{ y: 220, scaleY: [0, 1, 1, 0] }}
            transition={{
              duration: 0.8,
              delay: Math.random() * 0.4,
              ease: "easeIn",
            }}
          />
        ))}
    </div>
  );
}

/* Left-side compact “ticket” card */
function LocationCard({
  name,
  address,
  cityState,
  phone,
  email,
  mapUrl,
  directionsUrl,
}) {
  const [hover, setHover] = useState(false);
  const [showDrops, setShowDrops] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (hover) {
      controls.start({
        y: -3,
        scale: 1.01,
        transition: { type: "spring", stiffness: 400, damping: 12 },
      });
      setShowDrops(true);
    } else {
      controls.start({
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 400, damping: 12 },
      });
      setShowDrops(false);
    }
  }, [hover, controls]);

  return (
    <motion.div
      animate={controls}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative rounded-2xl p-5 sm:p-6
                 bg-white/8 backdrop-blur-lg ring-1 ring-white/10
                 shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                 overflow-hidden"
    >
      <WaterDrops isActive={showDrops} />

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-white/20 grid place-items-center">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-white tracking-wide drop-shadow">
          {name}
        </h3>
      </div>

      {/* Address */}
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group mb-3"
      >
        <p className="text-white/95 font-semibold leading-tight">{address}</p>
        <p className="text-white/80 group-hover:text-white transition">
          {cityState}
        </p>
      </a>

      {/* Contact chips */}
      <div className="space-y-2 mb-4">
        <a
          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
          className="flex items-center gap-2 text-white/90 hover:text-white transition"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm">{phone}</span>
        </a>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 text-white/90 hover:text-white transition"
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm">{email}</span>
        </a>
      </div>

      {/* Socials */}
      <div className="flex gap-3 mb-5">
        <a
          href="https://www.facebook.com/Mr.SudzCarWash"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/15 rounded-full hover:bg-white/25 transition"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 text-white" />
        </a>
        <a
          href="https://www.instagram.com/mrsudzexpress/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/15 rounded-full hover:bg-white/25 transition"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* CTA — compact but shiny */}
      <motion.button
        onClick={() => window.open(directionsUrl, "_blank")}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`relative w-full py-3 rounded-xl font-bold text-white
                    overflow-hidden shadow-lg bg-gradient-to-r ${MATCHED_GRADIENT}`}
      >
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-xl"
          initial={false}
          animate={{ x: ["-20%", "140%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%)",
          }}
        />
        <span className="relative z-10">GET DIRECTIONS</span>
      </motion.button>

      {/* Ticket notches for a unique feel */}
      <span className="absolute -left-3 top-12 w-6 h-6 rounded-full bg-[#0ea5e9]/20" />
      <span className="absolute -right-3 top-28 w-6 h-6 rounded-full bg-[#22d3ee]/20" />
    </motion.div>
  );
}

export default function LocationsSection() {
  return (
    <section className="relative py-14">
      <div className="container mx-auto px-4">
        {/* Compact two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: title + info card (compact) */}
          <div className="space-y-6 max-w-xl">
            <div className="flex items-start justify-between">
              <h2 className="text-4xl md:text-5xl font-extrabold text-teal-400 leading-tight">
                WHERE TO
                <br />
                FIND US
              </h2>
              {/* Floating logo that overlaps the map area visually */}
              <motion.img
                src={logo}
                alt="Mr. Sudz Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow pointer-events-none select-none"
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <p className="text-white/90 max-w-prose">
              Our Mr. Sudz Car Wash location proudly serving Columbus, Ohio.
            </p>

            <LocationCard {...LOCATION} />
          </div>

          {/* Right: compact map card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative max-w-3xl lg:max-w-none mx-auto">
              {/* Map card (smaller, with fixed aspect) */}
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl bg-white/5 backdrop-blur">
                <iframe
                  src="https://www.google.com/maps?q=5560+W+Broad+St,+Columbus,+OH+43228&output=embed"
                  className="w-full aspect-[16/11] sm:aspect-[4/3] md:aspect-[16/10]" // <-- compact sizes
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mr. Sudz Car Wash — 5560 W Broad St, Columbus, OH 43228"
                />
              </div>

              {/* Small chips under the map */}
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={LOCATION.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-semibold
                             bg-white/10 hover:bg-white/20 text-white
                             ring-1 ring-white/15 transition"
                >
                  Open in Google Maps
                </a>
                <a
                  href={LOCATION.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-semibold
                             bg-gradient-to-r from-teal-500 to-cyan-600 text-white
                             shadow hover:brightness-110 transition"
                >
                  Driving Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
