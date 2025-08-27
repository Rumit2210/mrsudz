import { motion } from "framer-motion";
import { Package, Calendar, Sparkles, Car } from "lucide-react";

export default function ProcessSection() {
  const PROCESS = [
    { 
      n: "1", 
      t: "Pick a package", 
      d: "Choose the clean that fits your day and budget.",
      icon: <Package className="w-6 h-6" />,
      color: "bg-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    { 
      n: "2", 
      t: "Book a time", 
      d: "Grab a slot online or swing by — your call.",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-green-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    { 
      n: "3", 
      t: "We wash", 
      d: "Safe, thorough, and fast. You relax.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-purple-600",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    { 
      n: "4", 
      t: "Drive happy", 
      d: "That crisp, just-cleaned feeling never gets old.",
      icon: <Car className="w-6 h-6" />,
      color: "bg-orange-600",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
  ];

  return (
    <section className="mt-12">
      <h3 className="text-xl font-bold text-center lg:text-left">How we work</h3>
      <div className="relative mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-200 pointer-events-none" />
        {PROCESS.map((p, i) => (
          <motion.div
            key={p.n}
            className="relative rounded-xl bg-white p-5 shadow hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${p.iconBg} mb-4`}>
              <div className={p.iconColor}>
                {p.icon}
              </div>
            </div>

            {/* Step Number */}
            <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${p.color} text-white font-bold text-sm mb-3 absolute top-3 right-3`}>
              {p.n}
            </div>

            {/* Content */}
            <p className="font-semibold text-lg mb-2">{p.t}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{p.d}</p>

            {/* Decorative element */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${p.color} rounded-b-xl opacity-20`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}