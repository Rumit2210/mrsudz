import { motion } from "framer-motion";

/* light ambient bubbles */
function FloatingBubbles() {
  const bubbles = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b) => (
        <motion.div
          key={b}
          className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-60"
          initial={{
            x: Math.random() * 300,
            y: 320,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{ y: -40, x: Math.random() * 300 }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default function CtaSection() {
  return (
    <section className="relative py-16">
      <FloatingBubbles />

      <div className="relative container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="relative max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Main card (MATCHED) */}
            <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-700">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent face-shine" />

              <div className="relative z-10">
                <motion.h2
                  className="text-teal-400 font-cartoon text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  JOIN OUR WASH CLUB!
                </motion.h2>

                <motion.p
                  className="text-white/95 font-cartoon text-lg sm:text-xl lg:text-2xl font-medium mb-8 sm:mb-10 max-w-2xl mx-auto drop-shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Get your suds on and swim out for a convenient car wash
                  whenever you'd like.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <motion.button
                    className="relative group bg-white text-sky-700 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 font-cartoon ">
                      Join Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute inset-0 bg-white rounded-2xl group-hover:text-white transition-colors duration-300 flex items-center justify-center font-bold">
                      Join Now
                    </span>
                  </motion.button>

                  <motion.button
                    className="group border-2 font-cartoon  border-white text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl hover:bg-white hover:text-sky-700 transition-all duration-300 transform hover:-translate-y-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* Decorative bubbles */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-6 w-16 h-16 bg-cyan-300 rounded-full opacity-25"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Trust indicators (blue/cyan) */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-semibold">No Commitment</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-semibold">24/7 Access</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="font-semibold">Premium Care</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
