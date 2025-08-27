import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FlipCard({ title, price, features = [], cta = "Book Now" }) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggle = () => setFlipped(f => !f);

  // Auto-flip on mobile for better UX
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setFlipped(f => !f);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div
      className="perspective group cursor-pointer h-56 sm:h-64 w-full"
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onMouseLeave={() => !isMobile && setFlipped(false)}
      onClick={toggle}
      role="button"
      aria-pressed={flipped}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
    >
      <motion.div
        className="relative h-full w-full rounded-2xl bg-white shadow-lg preserve-3d hover:shadow-xl transition-shadow duration-300"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 120, 
          damping: 12,
          duration: isMobile ? 0.6 : 0.8 
        }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden p-4 sm:p-6 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-white to-sky-50/30">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              {title}
            </h3>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-600 mb-2">
              {price}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">
              {isMobile ? "Tap to see details" : "Hover to see what's inside"}
            </p>
            <div className="h-1 w-12 bg-sky-200 rounded-full mx-auto opacity-60" />
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden p-4 sm:p-6 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-sky-50 to-white"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="flex-1">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              What's included:
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-2 sm:gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="inline-block h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-sky-500 flex-shrink-0 mt-1.5 sm:mt-2" />
                  <span className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4">
            <button 
              className="w-full rounded-xl bg-sky-600 px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white hover:bg-sky-700 active:bg-sky-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              onClick={(e) => {
                e.stopPropagation();
                // Handle booking logic here
                console.log(`Booking ${title}`);
              }}
            >
              {cta}
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Mobile indicator */}
      {isMobile && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
          <div className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${!flipped ? 'bg-sky-600' : 'bg-gray-300'}`} />
          <div className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${flipped ? 'bg-sky-600' : 'bg-gray-300'}`} />
        </div>
      )}
    </div>
  );
}