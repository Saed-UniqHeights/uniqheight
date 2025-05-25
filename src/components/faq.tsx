import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [remainingFAQs, setRemainingFAQs] = useState<number>(0);

  const faqs = [
    {
      question: "How does the 3 SKU pricing work?",
      answer:
        "Our pricing starts at £49.99 for managing up to 3 SKUs. This includes all features and support. Additional SKUs are charged in increments of 3 at the same rate.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated based on your billing cycle.",
    },
    {
      question: "Is there a contract or long-term commitment?",
      answer:
        "No, all plans are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice.",
    },
    {
      question: "How does the free trial work?",
      answer:
        "The 14-day free trial gives you full access to all features. No credit card is required to start, and you can cancel anytime during the trial period.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. All payments are processed securely through Stripe.",
    },
  ];

  useEffect(() => {
    setRemainingFAQs(activeIndex === null ? faqs.length : faqs.length - 1);
  }, [activeIndex, faqs.length]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative max-w-2xl md:max-w-7xl md:min-w-screen mx-auto md:px-32 px-2 py-16">
     
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600"
        >
          Find answers to common questions about our pricing and service
        </motion.p>
      </div>

      <motion.div
        className="md:space-y-6 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.01 }}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <motion.button
              className={`w-full flex justify-between items-center p-6 text-left ${
                activeIndex === index ? "bg-gray-50" : "bg-white"
              }`}
              onClick={() => toggleFAQ(index)}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-lg font-medium text-gray-900">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeIndex === index ? (
                  <Minus className="text-gray-500 h-5 w-5" />
                ) : (
                  <Plus className="text-gray-500 h-5 w-5" />
                )}
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2, delay: 0.1 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.2 },
                      opacity: { duration: 0.1 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 bg-gray-50">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-600"
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-gray-500 mb-2">
          {remainingFAQs > 0
            ? `${remainingFAQs} more FAQ${
                remainingFAQs !== 1 ? "s" : ""
              } to read`
            : "You've read all FAQs"}
        </p>
      </motion.div>
    </div>
  );
};

export default FAQSection;
