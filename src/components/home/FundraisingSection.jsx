import { motion } from "framer-motion";
import {
  Users,
  Droplets,
  PiggyBank,
  CalendarClock,
  HandCoins,
} from "lucide-react";

export default function FundraisingSection() {
  return (
    <section
      id="fundraising"
      className="relative py-16"
      aria-label="Car Wash Fundraisers"
    >
      {/* Title block (matches Testimonials style) */}
      <div className="text-left mb-12 px-4 container mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-teal-400 mb-4 leading-tight">
          Car Wash Fundraisers
        </h2>
        <p className="text-lg md:text-xl font-cartoon text-white/90 max-w-xl leading-relaxed">
          A car wash fundraiser is a classic and simple way for schools, sports
          teams, and nonprofits to raise money by offering car washing services
          in exchange for donations.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/15 ring-1 ring-white/20 text-white/95">
          <HandCoins className="w-5 h-5" />
          <span className="text-sm sm:text-base font-semibold">
            Raise funds • Build spirit • Have fun
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        {[
          {
            icon: <Users className="w-7 h-7" />,
            title: "Who It's For",
            text: "Schools, clubs, teams, churches, and nonprofits of all sizes.",
          },
          {
            icon: <Droplets className="w-7 h-7" />,
            title: "How It Works",
            text: "Pick a date, bring volunteers, and we'll help you host a fun, sudsy event.",
          },
          {
            icon: <PiggyBank className="w-7 h-7" />,
            title: "Why It Works",
            text: "Low cost, high visibility, and donations add up fast for your cause.",
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="
              relative rounded-2xl p-6 md:p-8
              bg-slate-900/80
              border border-white/15
              shadow-xl
              text-white
            "
          >
            <div className="flex items-center gap-3 text-teal-300 mb-4">
              {card.icon}
              <h3 className="text-xl font-extrabold">{card.title}</h3>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-white/90">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
