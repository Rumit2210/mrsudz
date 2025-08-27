import { motion } from "framer-motion";
import carwashImg from "../assets/home/hero.jpg"; // adjust "../" if AboutHero is deeper

/* helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function AboutHero() {
  return (
    <section className="relative grid items-center gap-10 lg:grid-cols-2">
      <div className="text-center lg:text-left">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
          initial="hidden"
          animate="visible"
        >
          <motion.span custom={0} variants={fadeUp} className="block">
            About <span className="text-sky-700">Mr-Sudz</span>
          </motion.span>
          <motion.span
            custom={1}
            variants={fadeUp}
            className="block mt-2 text-gray-700 text-lg sm:text-xl font-medium"
          >
            Friendly. Fast. Eco-minded car care.
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-prose text-gray-600 mx-auto lg:mx-0"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          We started with a simple idea: a wash that treats your paint right, saves water, and gets you
          back on the road in minutes.
        </motion.p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
          {["Eco Soap", "Fiber Safe", "Quick Dry"].map((t, i) => (
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
      </div>

      {/* hero image (right) */}
      <div className="relative order-first lg:order-last">
        <div className="mx-auto aspect-[4/3] w-full max-w-lg rounded-3xl bg-white/70 p-6 shadow-lg">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <motion.img
              src={carwashImg}
              alt="Mr-Sudz team and bay"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.06, y: 12, rotate: -1, opacity: 0 }}
              animate={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-white/10 pointer-events-none" />
          </div>
        </div>
        <span className="absolute -right-2 -top-2 inline-block h-8 w-8 rounded-full bg-sky-300/80 blur-[1px]" />
        <span className="absolute -left-2 bottom-8 inline-block h-10 w-10 rounded-full bg-sky-200 blur-[2px]" />
      </div>
    </section>
  );
}
