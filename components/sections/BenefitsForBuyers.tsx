"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { HiReceiptPercent, HiArrowPath, HiLockClosed } from "react-icons/hi2";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import FadeIn from "@/components/ui/FadeIn";

const cards = [
  {
    icon: HiReceiptPercent,
    iconColor: "text-peach",
    cardBg: "bg-peach-25",
    title: "Unique/Discounted Items",
    description:
      "Discover one-of-a-kind treasures and unbeatable deals on Declut, where you can find unique items at discounted prices.",
    position:
      "relative w-full sm:absolute sm:left-[3%] sm:top-0 sm:z-20 sm:w-[41%]",
  },
  {
    icon: HiArrowPath,
    iconColor: "text-lavender",
    cardBg: "bg-lavender-25",
    title: "Supporting Sustainable Practices",
    description:
      "Join us in reducing waste and supporting eco-friendly practices by giving pre-loved items a new home.",
    position:
      "relative w-full sm:absolute sm:bottom-0 sm:left-0 sm:z-20 sm:w-[41%]",
  },
  {
    icon: HiLockClosed,
    iconColor: "text-accent-primary",
    cardBg: "bg-accent-50",
    title: "Secure Transactions",
    description:
      "Shop with confidence knowing that your transactions on Declut are secure and protected.",
    position:
      "relative w-full sm:absolute sm:bottom-0 sm:right-0 sm:z-20 sm:w-[41%]",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function BenefitsForBuyers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(blobRef.current, {
        y: 14,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="benefits-buyers"
      ref={sectionRef}
      className="scroll-mt-24 overflow-hidden bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">
            Benefits For Buyers
          </h2>
          <p className="mt-4 text-sm text-ink/50 sm:text-base">
            Explore our array of benefits awaiting buyers on Declut -from
            diverse selections to secure transactions and beyond.
          </p>
        </FadeIn>

        <div className="mt-16 grid min-w-0 gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="relative mx-auto w-full min-w-0 max-w-md sm:aspect-9/8 lg:mx-0 lg:max-w-none">
            <div
              ref={blobRef}
              aria-hidden="true"
              className="absolute left-[8%] top-[8%] hidden w-[73%] sm:block"
            >
              <Image
                src="/images/blue-background.png"
                alt=""
                width={964}
                height={977}
                className="h-auto w-full"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute left-[65%] top-[40%] z-30 hidden aspect-square w-[11%] overflow-hidden rounded-full sm:block"
            >
              <Image
                src="/images/User-Thumb-yellow.png"
                alt=""
                fill
                sizes="100px"
                className="object-cover"
              />
            </div>

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-4 sm:block"
            >
              {cards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={cardVariants}
                  className={`${card.position} ${card.cardBg} rounded-2xl p-5 shadow-lg`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ${card.iconColor}`}
                  >
                    <card.icon size={20} aria-hidden="true" />
                  </span>
                  <h4 className="mt-4 text-sm font-bold text-ink">{card.title}</h4>
                  <p className="mt-2 text-xs text-ink/60">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <FadeIn className="min-w-0 text-center lg:text-left">
            <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">
              Discover Endless Treasures
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm text-ink/60 lg:mx-0">
              Delve into the multitude of benefits available to buyers on
              Declut - from an extensive array of diverse selections
              catering to every taste and need, to seamless and secure
              transactions, and beyond, unlocking a world of convenience,
              value, and satisfaction
            </p>
            <a
              href="#"
              className="mt-6 inline-block text-sm font-semibold text-primary-darker underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              See how it helped others
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
