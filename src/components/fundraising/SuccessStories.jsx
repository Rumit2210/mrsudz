import { motion } from "framer-motion";
import { Quote, Star, Users, Calendar, DollarSign } from "lucide-react";

export default function SuccessStories() {
  const stories = [
    {
      organization: "Lincoln High School Soccer Team",
      type: "Sports Team",
      amount: "$450",
      cars: 85,
      hours: 6,
      quote: "Amazing experience! The Mr-Sudz team made everything so easy. Our players had fun while raising money for new uniforms. We'll definitely do this again!",
      contact: "Sarah M., Team Coach",
      color: "bg-blue-50",
      accent: "text-blue-600"
    },
    {
      organization: "St. Mary's Youth Group",
      type: "Church Group",
      amount: "$320",
      cars: 65,
      hours: 5,
      quote: "Perfect fundraiser for our mission trip. The community loved supporting a great cause while getting their cars cleaned. Highly recommend!",
      contact: "Pastor David K.",
      color: "bg-green-50",
      accent: "text-green-600"
    },
    {
      organization: "Riverside Elementary PTA",
      type: "School Organization",
      amount: "$275",
      cars: 55,
      hours: 4,
      quote: "Fantastic way to bring parents together while raising funds for our library. Professional service and great community engagement!",
      contact: "Jennifer L., PTA President",
      color: "bg-purple-50",
      accent: "text-purple-600"
    }
  ];

  const stats = [
    { label: "Organizations Helped", value: "150+", icon: <Users className="w-6 h-6" /> },
    { label: "Total Funds Raised", value: "$45K+", icon: <DollarSign className="w-6 h-6" /> },
    { label: "Cars Washed", value: "8,500+", icon: <Calendar className="w-6 h-6" /> },
    { label: "Average Rating", value: "4.9/5", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Success Stories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See how organizations like yours have successfully raised funds with Mr-Sudz.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-center mb-3 text-sky-600">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Success Stories */}
      <div className="space-y-8">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className={`${story.color} rounded-2xl p-8 relative overflow-hidden`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              {/* Organization Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className={`w-6 h-6 ${story.accent}`} />
                  <span className={`text-sm font-medium ${story.accent} uppercase tracking-wide`}>
                    {story.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {story.organization}
                </h3>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className={`text-2xl font-bold ${story.accent}`}>{story.amount}</div>
                    <div className="text-xs text-gray-600">Raised</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${story.accent}`}>{story.cars}</div>
                    <div className="text-xs text-gray-600">Cars</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${story.accent}`}>{story.hours}h</div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="lg:col-span-2">
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                  "{story.quote}"
                </blockquote>
                <cite className="text-sm font-medium text-gray-600 not-italic">
                  — {story.contact}
                </cite>
                
                {/* Star Rating */}
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${story.accent.replace('text-', 'bg-')} opacity-10 rounded-full -translate-y-8 translate-x-8`}></div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Create Your Success Story?
        </h3>
        <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
          Join the 150+ organizations that have successfully raised funds with Mr-Sudz. 
          Let's make your next fundraiser a huge success!
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-sky-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Your Fundraiser
        </a>
      </div>
    </section>
  );
}