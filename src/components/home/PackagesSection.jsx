import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// ✅ Import images (works with Vite/React build)
import bestImg from "/src/assets/home/background-3.jpg";
import betterImg from "/src/assets/home/background-3.jpg";
import basicImg from "/src/assets/home/background-3.jpg";

/* ---- REAL PACKAGES ---- */
const PLANS = [
  {
    tier: "BEST",
    subtitle: "INCLUDES EVERYTHING!",
    membershipPrice: 35,
    singlePrice: 18,
    features: [
      "Graphene Shine & Protect",
      "Heated Triple Foam",
      "Tire & Wheel Cleaner",
    ],
    gradient: "from-sky-500 to-blue-700",
    image: bestImg,
    trending: true,
  },
  {
    tier: "BETTER",
    subtitle: "INCLUDES BASIC WASH +",
    membershipPrice: 30,
    singlePrice: 15,
    features: [
      "Heated Foam Presoak",
      "Undercarriage Wash",
      "Clear Coat Protectant",
    ],
    gradient: "from-emerald-500 to-teal-700",
    image: betterImg,
  },
  {
    tier: "BASIC",
    subtitle: "",
    membershipPrice: 25,
    singlePrice: 10,
    features: ["Wash", "Rinse", "Dry"],
    gradient: "from-slate-500 to-slate-700",
    image: basicImg,
  },
];

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

function WaterDrops({ isActive }) {
  const drops = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {isActive &&
        drops.map((d) => (
          <motion.div
            key={d}
            className="absolute w-1 h-3 bg-blue-300 rounded-full opacity-70"
            initial={{ x: Math.random() * 260, y: -10, scaleY: 0 }}
            animate={{ y: 300, scaleY: [0, 1, 1, 0] }}
            transition={{
              duration: 0.9,
              delay: Math.random() * 0.5,
              ease: "easeIn",
            }}
          />
        ))}
    </div>
  );
}

/* Card with real image + overlay (icons removed, bigger fonts) */
function MembershipCard({
  tier,
  subtitle,
  membershipPrice,
  singlePrice,
  features,
  gradient,
  image,
  trending,
}) {
  const [hover, setHover] = useState(false);
  const [showDrops, setShowDrops] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (hover) {
      controls.start({
        y: -8,
        scale: 1.02,
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
    <div
      className="relative group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {trending && (
        <motion.div
          className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ delay: 0.35, type: "spring", stiffness: 500 }}
        >
          MOST POPULAR
        </motion.div>
      )}

      <motion.div
        animate={controls}
        className="relative min-h-[520px] md:min-h-[540px] rounded-2xl border border-white/40 shadow-xl overflow-hidden"
      >
        {/* Real image layer (better for perf + lazy loading) */}
        <img
          src={image}
          alt={`${tier} package`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/10" />

        {/* sheen */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 w-full mix-blend-screen"
          initial={{ x: "-100%" }}
          animate={hover ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        <WaterDrops isActive={showDrops} />

        {/* content */}
        <div className="relative z-10 p-8 h-full grid grid-rows-[auto_auto_1fr_auto] gap-6">
          {/* Header (no icon) */}
          <div className="text-center space-y-2">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide drop-shadow">
              {tier}
            </h3>
            {subtitle ? (
              <p className="text-sm md:text-base font-semibold tracking-widest text-cyan-100/90 uppercase drop-shadow">
                {subtitle}
              </p>
            ) : (
              <div className="h-3" />
            )}
          </div>

          {/* Price block */}
          <div className="text-center space-y-2">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-6xl leading-none font-black text-cyan-200 drop-shadow">
                ${membershipPrice}
              </span>
              <span className="text-cyan-100/80 font-bold text-xl">/mo</span>
            </div>
            <p className="text-sm md:text-base text-cyan-100/80">
              per month (Membership)
            </p>
            <p className="text-base md:text-lg text-white/90 mt-1">
              <span className="font-semibold">${singlePrice}</span> single wash
            </p>
          </div>

          {/* Features */}
          <div className="min-h-[160px]">
            <ul className="space-y-3">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  className="flex items-start text-base md:text-lg text-white/95 leading-relaxed drop-shadow"
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.15 }}
                >
                  <span
                    aria-hidden
                    className="mt-0.5 mr-2 text-xl text-cyan-200"
                  >
                    •
                  </span>
                  <span>{f}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <motion.button
              className={`w-full py-4 px-5 rounded-xl text-lg md:text-xl font-bold text-white bg-gradient-to-r ${gradient} shadow-lg relative overflow-hidden`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/contact")}
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
              />
              <span className="relative z-10">Join Membership</span>
            </motion.button>
            <p className="text-xs md:text-sm text-cyan-100/90 text-center mt-3 drop-shadow">
              Free vacuums with membership
            </p>
          </div>
        </div>

        {/* corner tint accent */}
        <div
          className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${gradient} opacity-20 rounded-bl-[2rem]`}
        />
      </motion.div>
    </div>
  );
}

export default function PackagesSection() {
  return (
    <section className="relative py-16">
      <FloatingBubbles />

      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h2
          className="text-4xl md:text-5xl font-extrabold
                     text-transparent bg-clip-text
                     bg-gradient-to-r text-teal-400 from-cyan-400 via-white to-blue-500
                     drop-shadow-[0_0_14px_rgba(56,189,248,0.55)]"
        >
          Wash Packages
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-5" />
        <p
          className="text-lg md:text-xl mt-4 max-w-2xl mx-auto
                     text-transparent bg-clip-text
                     bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-300
                     drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]"
        >
          Pick your shine level. Clear pricing, roomy design, and buttons
          aligned every time.
        </p>
      </div>

      {/* Cards */}
      <div className="container-responsive grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        {PLANS.map((p, i) => (
          <motion.div
            key={p.tier}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              type: "spring",
              stiffness: 100,
            }}
          >
            <MembershipCard {...p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
