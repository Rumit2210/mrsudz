import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, Car, Droplets, Star } from "lucide-react";

function AnimatedNumber({ to = 0, decimals = 0, start = 0, inView = true, duration = 2 }) {
  const mv = useMotionValue(start);
  const rounded = useTransform(mv, (v) =>
    Number(v).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, duration, mv]);
  return <motion.span>{rounded}</motion.span>;
}

export default function AnimatedStats() {
  const [statsInView, setStatsInView] = useState(false);

  const stats = [
    { 
      value: 5, 
      suffix: "+", 
      label: "Years in service",
      icon: <Calendar className="w-8 h-8" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      accentColor: "bg-blue-600"
    },
    { 
      value: 12000, 
      suffix: "+", 
      label: "Cars cleaned",
      icon: <Car className="w-8 h-8" />,
      color: "text-green-600",
      bgColor: "bg-green-100",
      accentColor: "bg-green-600"
    },
    { 
      value: 1.8, 
      suffix: "M", 
      label: "Liters water saved*", 
      decimals: 1,
      icon: <Droplets className="w-8 h-8" />,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      accentColor: "bg-cyan-600"
    },
    { 
      value: 4.9, 
      suffix: "★", 
      label: "Avg. customer rating", 
      decimals: 1,
      icon: <Star className="w-8 h-8" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      accentColor: "bg-yellow-600"
    }
  ];

  return (
    <section
      className="mt-10 sm:mt-14 rounded-2xl bg-white p-6 sm:p-8 shadow-lg"
      onMouseEnter={() => setStatsInView(true)}
      onTouchStart={() => setStatsInView(true)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="text-center p-4 rounded-xl hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-4 mx-auto`}>
              <div className={stat.color}>
                {stat.icon}
              </div>
            </div>

            {/* Animated Number */}
            <div className="relative">
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-1">
                <AnimatedNumber 
                  to={stat.value} 
                  decimals={stat.decimals || 0}
                  inView={statsInView} 
                />
                <span className={stat.color}>{stat.suffix}</span>
              </p>
              
              {/* Accent line */}
              <div className={`w-12 h-1 ${stat.accentColor} rounded-full mx-auto mb-3`} />
            </div>

            {/* Label */}
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-4 right-4 opacity-5">
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
        </svg>
      </div>
      
      <p className="mt-6 text-xs text-gray-500 text-center">*Estimated vs. driveway wash.</p>
    </section>
  );
}