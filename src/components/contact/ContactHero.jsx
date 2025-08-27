import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

/* shared fadeUp helper */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function ContactHero() {
  // Build an embeddable Google Maps URL for your address
  const address = "5560 W Broad St, Columbus, Ohio 43228";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section className="relative grid items-center gap-10 lg:grid-cols-2">
      {/* Left: copy + actions */}
      <div className="text-center lg:text-left">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
          initial="hidden"
          animate="visible"
        >
          <motion.span custom={0} variants={fadeUp} className="block">
            Contact <span className="text-sky-700">Mr-Sudz</span>
          </motion.span>
          <motion.span
            custom={1}
            variants={fadeUp}
            className="block mt-2 text-gray-700 text-lg sm:text-xl font-medium"
          >
            Questions, bookings, partnerships — we’re here to help.
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-prose text-gray-600 mx-auto lg:mx-0"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          Fast replies from a friendly local team. Tell us what you need and we’ll get right back.
        </motion.p>

        {/* quick actions */}
        <motion.div
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
        >
          <a
            href="tel:+16147073202"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 sm:px-8 sm:py-4 text-white font-medium hover:bg-sky-700 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call us
          </a>
          <a
            href="mailto:Office@mrsudzcarwash.com"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-sky-200 bg-white px-6 py-3 sm:px-8 sm:py-4 font-medium hover:bg-sky-50 transition-colors"
          >
            <Mail className="h-5 w-5" />
            Email us
          </a>
        </motion.div>
      </div>

      {/* Right: embedded Google Map */}
      <div className="relative order-first lg:order-last">
        <div className="mx-auto aspect-[4/3] w-full max-w-lg rounded-3xl bg-white/70 p-6 shadow-lg">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <iframe
              title="Mr-Sudz Location"
              src={mapSrc}
              className="absolute inset-0 h-full w-full rounded-2xl border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* subtle gloss overlay; doesn't block clicks */}
            <div className="absolute inset-0 bg-white/10 pointer-events-none" />
          </div>
        </div>

        {/* little floating bubbles */}
        <span className="absolute -right-2 -top-2 inline-block h-8 w-8 rounded-full bg-sky-300/80 blur-[1px]" />
        <span className="absolute -left-2 bottom-8 inline-block h-10 w-10 rounded-full bg-sky-200 blur-[2px]" />
      </div>
    </section>
  );
}
