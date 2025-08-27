import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function StorySection() {
  return (
    <motion.section 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

         {/* Visual Element */}
        <div className="relative">
          <div className="bg-gradient-to-br from-sky-200 to-blue-300 rounded-3xl h-80 flex items-center justify-center">
            <div className="text-center text-white">
              <Sparkles className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Premium Care</h3>
              <p className="text-sky-100">Every wash, every time</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-full p-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Founded with a simple mission: to provide Columbus with the best car wash experience 
              that's fast, safe, and environmentally responsible. At Mr-Sudz, we believe your car 
              deserves premium care without compromising on convenience or sustainability.
            </p>
            <p>
              Located on West Broad Street, we've been serving the Columbus community with pride, 
              treating every vehicle that comes through our doors with the same care we'd give our own.
            </p>
            <p>
              From our eco-friendly cleaning solutions to our advanced washing technology, 
              every detail is designed to give you the shine you want while protecting what matters most.
            </p>
          </div>
        </div>
        
       
      </div>
    </motion.section>
  );
}