import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  CheckCircle, Clock, Droplets, Shield, Users, TrendingUp,
  Zap, Target, Star, ArrowRight 
} from "lucide-react";

// FundraisingFlipCard component
function FundraisingFlipCard({ title, price, features = [], trending = false }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group cursor-pointer relative"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
    >
      {trending && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold z-10">
          Most Popular
        </div>
      )}
      
      <motion.div
        className="relative h-72 w-full rounded-2xl bg-white shadow-xl preserve-3d border-2 border-gray-100 hover:border-green-300 transition-colors"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden p-6 flex flex-col justify-center items-center text-center rounded-2xl bg-gradient-to-br from-white to-green-50">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-4xl font-extrabold text-green-600 tracking-tight mb-2">
            {price}
          </p>
          {price !== "Contact" && (
            <p className="text-sm text-gray-500 mb-4">Per car washed</p>
          )}
          <p className="text-gray-500 text-sm">
            Hover / tap to see details
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden p-6 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-green-50 to-white"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
              What's included:
            </h4>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button
            className="mt-4 rounded-xl bg-green-600 px-4 py-3 text-sm font-medium text-white hover:bg-green-700 transition-colors w-full"
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = "/contact";
            }}
          >
            {price === "Contact" ? "Get Quote" : "Choose This Package"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function FundraisingBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Zero Upfront Investment",
      description: "We provide everything - space, equipment, water, soap, and professional staff.",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      delay: 0.1
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Instant Setup",
      description: "Minimal prep required. We handle all technical aspects while you focus on fundraising.",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.2
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: "Premium Experience",
      description: "Professional service that builds customer loyalty and repeat business.",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      delay: 0.3
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Fully Protected",
      description: "Complete insurance coverage and safety protocols for peace of mind.",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      delay: 0.4
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Community Impact",
      description: "Build connections while raising awareness for your important cause.",
      gradient: "from-indigo-400 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      delay: 0.5
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Maximum Returns",
      description: "Keep 70-85% of proceeds with industry-leading profit margins.",
      gradient: "from-red-400 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      delay: 0.6
    }
  ];

  const earningsData = [
    { cars: 50, earning: 200, duration: "4 hours", popularity: false },
    { cars: 75, earning: 300, duration: "6 hours", popularity: true },
    { cars: 100, earning: 400, duration: "8 hours", popularity: false }
  ];

  return (
    <section ref={ref} className="space-y-16 overflow-hidden">
      
      {/* Header with Floating Elements */}
      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Why Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the most profitable and stress-free fundraising solution
          </p>
        </motion.div>

        {/* Floating Background Elements */}
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-sky-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -top-32 -right-32 w-60 h-60 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Benefits Grid with Modern Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 60, rotateX: 45 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: benefit.delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Card Background with Gradient */}
           <div
  className={`relative h-full bg-gradient-to-br ${benefit.bgGradient}
              rounded-3xl p-8 backdrop-blur-sm shadow-lg hover:shadow-xl
              transition-shadow overflow-hidden ring-0`}
>
              
              {/* Animated Background Pattern */}
              <motion.div
    className="absolute inset-0 opacity-30"
    style={{
      background: `radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, rgba(255,119,198,0.3) 0%, transparent 50%)`
    }}
    animate={{
      scale: hoveredCard === index ? 1.1 : 1,
      opacity: hoveredCard === index ? 0.5 : 0.3
    }}
    transition={{ duration: 0.5 }}
  />

              {/* Floating Icon */}
              <motion.div
                className={`relative z-10 w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1 
                }}
                transition={{ duration: 0.5 }}
              >
                {benefit.icon}
                
                {/* Icon Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-lg opacity-50`}
                  animate={{
                    scale: hoveredCard === index ? [1, 1.3, 1] : 1,
                    opacity: hoveredCard === index ? [0.5, 0.8, 0.5] : 0.5
                  }}
                  transition={{ duration: 1, repeat: hoveredCard === index ? Infinity : 0 }}
                />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Animated Arrow */}
                <motion.div
                  className="flex items-center text-gray-500 group-hover:text-gray-700"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

    
    </section>
  );
}