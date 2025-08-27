import { motion } from "framer-motion";
import carwashImg from "/src/assets/home/hero.jpg"; // adjust path based on where this file is

/* helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function FundraisingHero() {
  return (
    <section className="relative grid items-center gap-10 lg:grid-cols-2">
      <div className="text-center lg:text-left">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
          initial="hidden"
          animate="visible"
        >
          <motion.span custom={0} variants={fadeUp} className="block">
            <span className="text-sky-700">Fundraising</span> Wash Days
          </motion.span>
          <motion.span
            custom={1}
            variants={fadeUp}
            className="block mt-2 text-gray-700 text-lg sm:text-xl font-medium"
          >
            Earn money while we do the washing.
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-prose text-gray-600 mx-auto lg:mx-0"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          Schools, clubs, and causes—host a wash day with us and earn per car.
          Partner with Mr-Sudz to raise funds for your organization.
        </motion.p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
          {["We supply space + water", "You bring your crew", "Keep a share per wash"].map((t, i) => (
            <motion.div
              key={t}
              className="rounded-xl bg-white/80 p-4 shadow-sm text-center animate-float"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="text-sm font-medium text-gray-700">{t}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-8 sm:mt-10"
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
        >
          <p className="text-gray-600 mb-4">
            Want to schedule a date? Use the contact form and add "Fundraising".
          </p>
          <a
            href="/contact"
            className="inline-block bg-sky-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-sky-700 transition-colors"
          >
            Schedule Your Fundraiser
          </a>
        </motion.div>
      </div>

      {/* hero image (right) */}
      <div className="relative order-first lg:order-last">
        <div className="mx-auto aspect-[4/3] w-full max-w-lg rounded-3xl bg-white/70 p-6 shadow-lg">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <motion.img
              src={carwashImg}
              alt="Mr-Sudz fundraising event"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.06, y: 12, rotate: -1, opacity: 0 }}
              animate={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-white/10 pointer-events-none" />
          </div>
        </div>
        <span className="absolute -right-2 -top-2 inline-block h-8 w-8 rounded-full bg-green-300/80 blur-[1px]" />
        <span className="absolute -left-2 bottom-8 inline-block h-10 w-10 rounded-full bg-sky-200 blur-[2px]" />
      </div>
    </section>
  );
}
