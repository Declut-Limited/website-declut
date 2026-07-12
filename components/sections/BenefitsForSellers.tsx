"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { HiMapPin, HiClipboardDocumentList, HiBanknotes } from "react-icons/hi2";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const cards = [
  {
    icon: HiMapPin,
    iconColor: "text-peach",
    cardBg: "bg-peach-25",
    title: "Reaching a wide audience",
    description:
      "Increase the visibility of your listings and attract more potential buyers by reaching a wider audience on Declut.",
    position:
      "relative w-full sm:absolute sm:left-[12%] sm:top-[6%] sm:z-20 sm:w-[40%]",
  },
  {
    icon: HiClipboardDocumentList,
    iconColor: "text-accent-primary",
    cardBg: "bg-accent-50",
    title: "Easy Listing Process",
    description:
      "A hassle-free listing process that saves you time and effort, making it easy to showcase your items and start selling.",
    position:
      "relative w-full sm:absolute sm:bottom-0 sm:left-0 sm:z-20 sm:w-[40%]",
  },
  {
    icon: HiBanknotes,
    iconColor: "text-primary",
    cardBg: "bg-primary-25",
    title: "Earning Extra Cash",
    description:
      "Unused items turn to cash effortlessly, providing you with an easy and effective way to supplement your income.",
    position:
      "relative w-full sm:absolute sm:bottom-0 sm:right-0 sm:z-20 sm:w-[40%]",
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

export default function BenefitsForSellers() {
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
      id="benefits-sellers"
      ref={sectionRef}
      className="scroll-mt-24 overflow-hidden bg-background-light py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Benefits For Sellers
          </h2>
          <p className="mt-4 text-base text-ink/50 sm:text-lg">
            Unlock your Selling potential: Explore why Declut is your premier
            destination for selling - Ease, Profitability &amp; Support Await!
          </p>
        </div>

        <div className="mt-16 grid min-w-0 gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
            <h3 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Declutter With Ease
            </h3>
            <p className="mx-auto mt-4 max-w-md text-ink/60 lg:mx-0">
              Explore the array of benefits awaiting buyers on Declut - from
              diverse selections to secure transactions and beyond
            </p>
            <a
              href="#"
              className="mt-6 inline-block font-semibold text-primary-darker underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              See how it helped others
            </a>
          </div>

          <div className="relative order-1 mx-auto w-full min-w-0 max-w-md sm:aspect-754/582 lg:order-2 lg:mx-0 lg:max-w-none">
            <div
              ref={blobRef}
              aria-hidden="true"
              className="absolute left-[17%] top-0 hidden w-[76%] sm:block"
            >
              <Image
                src="/images/yellow-background.png"
                alt=""
                width={851}
                height={916}
                className="h-auto w-full"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute left-[77%] top-[33%] z-30 hidden aspect-square w-[11%] overflow-hidden rounded-full sm:block"
            >
              <Image
                src="/images/User-Thumb-blue.png"
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
                  <h4 className="mt-4 font-bold text-ink">{card.title}</h4>
                  <p className="mt-2 text-sm text-ink/60">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
