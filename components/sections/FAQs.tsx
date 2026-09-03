"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "How do I list my item for sale on Declut?",
    answer:
      "Sign up for a free account, tap \"List an Item,\" add photos and details about what you're selling, set your price, and publish. Your listing goes live instantly for buyers to discover.",
  },
  {
    question: "What types of items can I sell on Declut?",
    answer:
      "Declut is built for household items - furniture, electronics, appliances, home decor, and more. If it's in good, usable condition and legal to sell, there's likely a buyer for it on Declut.",
  },
  {
    question: "How does payment work on Declut?",
    answer:
      "Buyers pay securely through Declut's platform. Funds are held safely until the transaction is confirmed complete, protecting both buyers and sellers throughout the process.",
  },
  {
    question: "Can I negotiate the price of an item with the seller?",
    answer:
      "Yes. Buyers can message sellers directly to ask questions or propose a different price before committing to a purchase.",
  },
  {
    question: "What happens if I'm not satisfied with my purchase?",
    answer:
      "If an item isn't as described, you can report the issue through the app. Declut's support team will help resolve disputes and, where applicable, facilitate a refund.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="scroll-mt-24 bg-background-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">
            FAQs
          </h2>
          <p className="mt-4 text-sm text-ink/50 sm:text-base">
            Explore our comprehensive FAQ section to discover everything you
            need to know about using Declut for buying and selling.
          </p>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl bg-white"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={index !== 0 ? "border-t border-ink/10" : ""}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-header-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:px-8"
                  >
                    <span className="text-sm font-bold text-ink">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex h-6 w-6 shrink-0 items-center justify-center transition-colors ${
                        isOpen ? "text-primary" : "text-ink"
                      }`}
                    >
                      <FiPlus size={20} aria-hidden="true" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-header-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-xs text-ink/60 sm:px-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
