// src/components/home/Testimonials.jsx
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Priya S.",
      text: "Quick and professional! My car looks amazing.",
      rating: 5,
    },
    {
      name: "Rahul M.",
      text: "Great value for money. Will definitely book again.",
      rating: 5,
    },
    {
      name: "Anjali K.",
      text: "Eco-friendly approach is exactly what I was looking for.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-16">
      {/* Title block (matches LocationsSection style) */}
      <div className="text-left mb-12 px-4 container mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-teal-400 mb-4 leading-tight">
          What Our Customers Say
        </h2>
        <p className="text-lg md:text-xl font-cartoon text-white/90 max-w-xl leading-relaxed">
          Real stories from people who joined the Wash Club.
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
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
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, j) => (
                <span key={j} className="text-yellow-400 text-base md:text-lg">
                  ★
                </span>
              ))}
            </div>

            {/* Review text */}
            <p className="text-base md:text-lg leading-relaxed text-white/90 mb-4">
              “{review.text}”
            </p>

            {/* Reviewer */}
            <p className="font-semibold text-teal-300 text-sm md:text-base">
              — {review.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
