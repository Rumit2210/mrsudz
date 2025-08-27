// src/components/home/HowItWorks.jsx
import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  Timer,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import bubblesBg from "/src/assets/home/background-3.jpg"; // keeps your bg

export default function HowItWorks() {
  const features = [
    {
      icon: <Timer className="w-7 h-7" />,
      title: "SPARKLING RESULTS IN MINUTES",
      tone: "from-slate-100 to-slate-200",
      ring: "ring-slate-300",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "SAFE ON PAINT, TOUGH ON DIRT",
      tone: "from-slate-100 to-slate-200",
      ring: "ring-slate-300",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "FREE POWER VACUUMS & FRIENDLY CREW",
      tone: "from-cyan-50 to-sky-100",
      ring: "ring-sky-300",
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "CLEAR PRICING — NO PRESSURE",
      tone: "from-slate-100 to-slate-200",
      ring: "ring-slate-300",
    },
  ];

  return (
    <section
      className="relative rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl bg-white/90"
      style={{
        backgroundImage: `url(${bubblesBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Heading + Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2
          className="
            text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider
            text-transparent bg-clip-text 
            bg-gradient-to-b text-teal-400
            drop-shadow-[0_3px_0_rgba(0,0,0,0.08)]
          "
        >
          Why Mr. Sudz Car Wash?
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Serving Columbus with fast, gentle, and eco-friendly washes—right here
          at{" "}
          <span className="font-semibold">
            5560 W Broad St, Columbus, Ohio, 43228
          </span>
          . Drive in for a spotless finish—no appointments needed.
        </p>

        <div className="mt-5">
          <a
            href="#packages"
            className="inline-block rounded-full px-6 py-3 sm:px-8 sm:py-4
                       bg-cyan-600 text-white font-bold shadow-lg hover:bg-cyan-500
                       transition-transform duration-200 hover:scale-[1.03]"
          >
            SEE WASH MENU
          </a>
        </div>
      </div>

      {/* Social / review badges */}
      <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 text-[13px]">
        <span className="px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 shadow">
          👍 4.9
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 shadow">
          💬 Loved by Columbus drivers
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 shadow">
          ⭐ Trusted local favorite
        </span>
      </div>

      {/* Feature cards */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="rounded-[28px] bg-white p-5 sm:p-6 text-center shadow-lg border border-slate-100
                         hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center">
                <div
                  className={`relative -mt-10 mb-3 w-16 h-16 rounded-full ring-4 ${f.ring}
                              bg-gradient-to-br ${f.tone} shadow-md flex items-center justify-center`}
                >
                  <div className="text-slate-800">{f.icon}</div>
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300" />
                  <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300" />
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold tracking-wide text-slate-900 uppercase">
                {f.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bullet list (no unlimited mention) */}
      <div className="mt-8 sm:mt-10 max-w-3xl mx-auto">
        <ul className="grid gap-3">
          {[
            "Local & convenient — 5560 W Broad St, Columbus, OH 43228",
            "Flexible options: single washes & packages",
            "Eco-friendly soaps & spotless rinse",
            "Free, powerful vacuums at every bay",
            "No long-term commitments",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 mt-0.5 text-cyan-600 flex-shrink-0" />
              <span className="jumbo text-base sm:text-lg text-white leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
