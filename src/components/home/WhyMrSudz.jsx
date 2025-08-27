import { motion } from "framer-motion";

export default function WhyMrSudz() {
  const benefits = [
    {
      t: "100% Touchless",
      d: "No brushes. No swirls. Pure jets + foam for a scratch-free shine.",
      icon: (
        <motion.svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          initial={{ y: 0 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Touchless"
        >
          <defs>
            <linearGradient id="gradTouch" x1="0" x2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          {/* nozzle */}
          <path d="M3 7h6l2 3H5l-2-3z" fill="url(#gradTouch)" />
          {/* spray */}
          <circle cx="13.5" cy="8" r="0.9" fill="url(#gradTouch)" />
          <circle cx="15.8" cy="9.2" r="0.7" fill="url(#gradTouch)" />
          <circle cx="18" cy="10.1" r="0.6" fill="url(#gradTouch)" />
          {/* car */}
          <path
            d="M6 14l2-3h8l2 3v3a1 1 0 0 1-1 1h-1v-1H9v1H7a1 1 0 0 1-1-1v-3z"
            fill="url(#gradTouch)"
          />
          <circle cx="8" cy="17" r="1" fill="url(#gradTouch)" />
          <circle cx="16" cy="17" r="1" fill="url(#gradTouch)" />
        </motion.svg>
      ),
    },
    { 
      t: "Water-smart", 
      d: "Lower water use. Same sparkle.",
      icon: (
        <motion.svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Water smart"
        >
          <defs>
            <linearGradient id="gradWater" x1="0" x2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <path d="M12 2.5c-3.5 0-6.3 3.5-6.3 7.8 0 4.3 2.8 7.8 6.3 7.8s6.3-3.5 6.3-7.8c0-4.3-2.8-7.8-6.3-7.8zm0 13.5c-2.5 0-4.5-2.5-4.5-5.7s2-5.7 4.5-5.7 4.5 2.5 4.5 5.7-2 5.7-4.5 5.7z" fill="url(#gradWater)" />
          <circle cx="12" cy="10" r="2" fill="url(#gradWater)" />
        </motion.svg>
      )
    },
    { 
      t: "Paint-safe", 
      d: "Foam + microfiber. No swirls.",
      icon: (
        <motion.svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 2, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Paint safe"
        >
          <defs>
            <linearGradient id="gradShield" x1="0" x2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="url(#gradShield)" />
          <path d="M19 15L20.5 18.5L24 20L20.5 21.5L19 25L17.5 21.5L14 20L17.5 18.5L19 15Z" fill="url(#gradShield)" />
        </motion.svg>
      )
    },
    { 
      t: "Transparent prices", 
      d: "No surprises at checkout.",
      icon: (
        <motion.svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          initial={{ x: 0 }}
          animate={{ x: [0, 1.5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Transparent prices"
        >
          <defs>
            <linearGradient id="gradPrice" x1="0" x2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" fill="url(#gradPrice)" />
          <path d="M12 8C13.1 8 14 8.9 14 10S13.1 12 12 12 10 11.1 10 10 10.9 8 12 8ZM12 13C14.21 13 16 14.79 16 17H8C8 14.79 9.79 13 12 13Z" fill="url(#gradPrice)" />
        </motion.svg>
      )
    },
    {
      t: "Spot-free Rinse",
      d: "Filtered water. No mineral marks. Just glassy finish.",
      icon: (
        <motion.svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Spot-free"
        >
          <defs>
            <linearGradient id="gradRinse" x1="0" x2="1">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <path d="M12 2S6 9 6 13a6 6 0 0012 0c0-4-6-11-6-11z" fill="url(#gradRinse)" />
          <path d="M12 18a4 4 0 01-4-4" fill="url(#gradRinse)" />
        </motion.svg>
      ),
    },
    {
      t: "In–Out in Minutes",
      d: "Fast lanes, clear steps. Shine that fits your day.",
      icon: (
        <motion.svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Fast"
        >
          <defs>
            <linearGradient id="gradFast" x1="0" x2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
          <path d="M3 12h12l-3-3M3 12h12l-3 3" fill="url(#gradFast)" />
          <circle cx="19" cy="12" r="2" fill="url(#gradFast)" />
        </motion.svg>
      ),
    },
  ];

  return (
    <section className="space-y-6 sm:space-y-8">
      <h2 className="heading-section font-bold text-center lg:text-left">Why Mr-Sudz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {benefits.map((benefit, i) => (
          <motion.div 
            key={benefit.t} 
            className="rounded-2xl bg-white p-6 sm:p-8 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="flex justify-center mb-4">
              {benefit.icon}
            </div>
            <p className="font-bold text-xl mb-3 text-gray-800">{benefit.t}</p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
