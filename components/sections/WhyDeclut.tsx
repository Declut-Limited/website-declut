"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type Tab = "sellers" | "buyers";

// Same 3 icons, same order, for both tabs — matches the reference design,
// where each card position (not each benefit) has a fixed icon.
const stepIcons = ["/svg/StepOneIcon.svg", "/svg/StepTwoIcon.svg", "/svg/StepThreeIcon.svg"];

const sellerBenefits = [
  {
    title: "List in under a minute",
    description:
      "Snap a photo, set a price, and you're live. No lengthy forms, no complicated setup.",
  },
  {
    title: "Earning Extra Cash",
    description:
      "Unused items turn to cash effortlessly, providing you with an easy and effective way to supplement your income.",
  },
  {
    title: "Reaching a wide audience",
    description:
      "Increase the visibility of your listings and attract more potential buyers by reaching a wider audience on Declut.",
  },
];

const buyerBenefits = [
  {
    title: "Unique/Discounted Items",
    description:
      "Discover one-of-a-kind treasures and unbeatable deals on Declut, where you can find unique items at discounted prices.",
  },
  {
    title: "Supporting Sustainable Practices",
    description:
      "Join us in reducing waste and supporting eco-friendly practices by giving pre-loved items a new home.",
  },
  {
    title: "Secure Transactions",
    description:
      "Shop with confidence knowing that your transactions on Declut are secure and protected.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function WhyDeclut() {
  const [tab, setTab] = useState<Tab>("sellers");
  const prefersReducedMotion = useReducedMotion();
  const benefits = tab === "sellers" ? sellerBenefits : buyerBenefits;

  return (
    <section id="why-declut" className="scroll-mt-24 bg-[#FCFCFD] py-16 lg:py-20">
      <div className="mx-auto max-w-300 px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-wide text-primary">
            Why Declut
          </p>
          <h2 className="mt-2 text-xl font-extrabold text-ink sm:text-3xl">
            Built For Both Sides Of The Deal
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-6">
          <div className="inline-flex rounded-full bg-gray-100 p-1">
            {(["sellers", "buyers"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setTab(value)}
                className={`rounded-full px-6 py-2.5 text-sm transition-colors ${
                  tab === value
                    ? "bg-white font-bold text-primary shadow-sm"
                    : "font-medium text-ink/50 hover:text-ink"
                }`}
              >
                For {value === "sellers" ? "Sellers" : "Buyers"}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <FadeIn className="mx-auto w-full max-w-md">
            <Image
              src={tab === "buyers" ? "/images/mobile-mockup-buyer.png" : "/images/mobile-mockup-seller.png"}
              alt={tab === "buyers" ? "Declut app preview for buyers" : "Declut app preview for sellers"}
              width={1976}
              height={1840}
              className="h-auto w-full"
              priority
            />
          </FadeIn>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate="visible"
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              className="flex flex-col gap-3"
            >
              {benefits.map((benefit, index) => {
                const isFeatured = index === 0;
                return (
                  <motion.div
                    key={benefit.title}
                    custom={index}
                    variants={prefersReducedMotion ? undefined : cardVariants}
                    initial={prefersReducedMotion ? undefined : "hidden"}
                    animate="visible"
                    className={`flex items-center gap-4 rounded-2xl p-3 sm:p-4 ${
                      isFeatured ? "bg-[#93C5FD] text-ink" : "bg-white"
                    }`}
                  >
                    <span
                      className={`flex size-14 shrink-0 items-center justify-center rounded-full ${
                        isFeatured ? "bg-white" : "bg-[#F2F4F7]"
                      }`}
                    >
                      <Image src={stepIcons[index]} alt="" width={32} height={32} className="w-120 h-120" />
                    </span>
                    <div>
                      <h3 className="font-bold">{benefit.title}</h3>
                      <p
                        className={`mt-1.5 text-sm ${
                          isFeatured ? "text-ink/70" : "text-ink/60"
                        }`}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
