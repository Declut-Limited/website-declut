"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import FadeIn from "@/components/ui/FadeIn";
import { getAppStage } from "@/lib/app-stage";

const stage = getAppStage();

const waitlistFaqs = [
  {
    question: "When will Declut launch?",
    answer:
      "We're putting the finishing touches on Declut and expect to launch soon. Join the waitlist and we'll email you the moment it's live.",
  },
  {
    question: "What is Declut?",
    answer:
      "Declut is a local marketplace for buying and selling pre-loved household items - furniture, electronics, appliances, and more - quickly and securely.",
  },
  {
    question: "What happens when I join the waitlist?",
    answer:
      "You'll get early access ahead of the public launch, plus occasional updates on our progress. We'll notify you by email as soon as Declut is ready.",
  },
  {
    question: "Does joining the waitlist cost anything?",
    answer:
      "No. Joining the waitlist is completely free, and there's no obligation to use Declut once it launches.",
  },
  {
    question: "Can I use Declut to buy and sell?",
    answer:
      "Yes. Declut is built for both buyers and sellers - you can browse listings, sell items you no longer need, or do both.",
  },
  {
    question: "Will my transactions be protected?",
    answer:
      "Yes. Every transaction on Declut goes through a secure, protected payment process designed to keep both buyers and sellers safe.",
  },
  {
    question: "How will you use my information?",
    answer:
      "We'll only use your email to send launch updates and early-access details. We won't share your information with third parties or spam you.",
  },
];

const liveFaqs = [
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
  const faqs = stage === "waitlist" ? waitlistFaqs : liveFaqs;

  return (
    <section id="faqs" className="scroll-mt-24 bg-[#FCFCFD] py-16 lg:py-20">
      <div className="mx-auto max-w-300 px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-wide text-primary">
            Need Answers?
          </p>
          <h2 className="mt-2 text-xl font-extrabold text-ink sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 overflow-hidden rounded-3xl bg-white"
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
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:px-8"
                  >
                    <span className="text-sm font-bold text-ink">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex size-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isOpen
                          ? "border-primary text-primary"
                          : "border-ink/15 text-ink"
                      }`}
                    >
                      <FiPlus size={16} aria-hidden="true" />
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
