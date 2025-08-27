import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FundraisingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How much can we expect to raise?",
      answer: "Most organizations raise $200-400 per event, depending on the number of cars and duration. With 50-100 cars at $3-5 per car, you can see significant returns for your cause."
    },
    {
      question: "What do we need to provide?",
      answer: "You provide volunteers (typically 4-8 people) to help direct traffic, greet customers, and promote your cause. We supply everything else - location, equipment, water, soap, and professional car wash service."
    },
    {
      question: "How long does a fundraising event last?",
      answer: "Most events run 4-6 hours. Half-day events (4 hours) typically see 40-60 cars, while full-day events (6 hours) can accommodate 75-100+ cars. We're flexible with timing to fit your needs."
    },
    {
      question: "What types of organizations can participate?",
      answer: "All types! Schools, sports teams, churches, clubs, non-profits, community organizations, and charitable causes are welcome. Any group looking to raise funds for a legitimate purpose can participate."
    },
    {
      question: "When can we schedule our event?",
      answer: "We're available most weekends and can accommodate weekday events with advance notice. Weekends typically see higher traffic. We recommend booking 2-4 weeks in advance to secure your preferred date."
    },
    {
      question: "What happens if it rains?",
      answer: "We can reschedule for weather. Light rain usually doesn't stop car washes, but we'll work with you to pick the best alternative date if needed. Safety and success of your event is our priority."
    },
    {
      question: "How much space do we need?",
      answer: "Events are held at our Mr-Sudz location, so you don't need to worry about space requirements. Our facility can handle multiple cars simultaneously with proper traffic flow and customer parking."
    },
    {
      question: "Is there a minimum number of volunteers required?",
      answer: "We recommend 4-8 volunteers for optimal results. This allows for traffic direction, customer greeting, payment collection, and promotion of your cause. More volunteers often means better fundraising results."
    },
    {
      question: "How do we collect payment?",
      answer: "You handle all payment collection from customers. We recommend bringing a cash box, card reader (like Square), and receipt book. Clear signage about your cause helps encourage donations above the base price."
    },
    {
      question: "Can we sell additional items during the event?",
      answer: "Absolutely! Many organizations sell snacks, drinks, merchandise, or accept additional donations. This is a great way to maximize your fundraising potential during the event."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Got questions about fundraising with Mr-Sudz? Here are the answers to our most common questions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-inset"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-sky-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
            </button>
            
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Still Have Questions */}
      <div className="bg-gradient-to-r  rounded-2xl p-8 text-center">
        <HelpCircle className="w-12 h-12 text-sky-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Still Have Questions?
        </h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our team is here to help! Contact us directly to discuss your specific fundraising needs 
          and we'll help you plan the perfect event.
        </p>

         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/contact"
          className="rounded-xl bg-sky-600 px-8 py-4 text-white font-medium hover:bg-sky-700 transition-colors w-full sm:w-auto text-center"
        >
          Contact Us
        </a>
        <a
          href="/packages"
          className="rounded-xl border-2 border-sky-600 text-sky-600 px-8 py-4 font-medium hover:bg-sky-50 transition-colors w-full sm:w-auto text-center"
        >
          Call: (987) 654-3210
        </a>
      </div>
       
      </div>
    </section>
  );
}