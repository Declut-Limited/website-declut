"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import FadeIn from "@/components/ui/FadeIn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    number: "1",
    title: "Wide Selection",
    description:
      "Access a wide range of quality items, ensuring you find exactly what you're looking for.",
  },
  {
    number: "2",
    title: "Secure Transactions",
    description: "Rest easy knowing that all transactions on Declut are protected.",
  },
  {
    number: "3",
    title: "Cost-Effective Solutions",
    description:
      "Save money by buying pre-loved items or earning cash by selling items you no longer need.",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        phoneRef.current,
        { yPercent: 8 },
        {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="scroll-mt-24 overflow-hidden bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Why you should choose us?
          </h2>
          <p className="mt-4 text-base text-ink/50 sm:text-lg">
            Discover Why Declut Is Your Top Choice for Buying and Selling -
            Convenience, Value, and Community Await!
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="relative mx-auto w-full max-w-sm py-6 lg:max-w-none">
            <div ref={phoneRef} className="relative mx-auto aspect-square w-[85%]">
              <Image
                src="/images/mobile-mockup.gif"
                alt="Declut app preview showing browsable listings by category"
                fill
                unoptimized
                sizes="(min-width: 1024px) 420px, 320px"
                className="rounded-[28px] object-contain"
              />
            </div>
          </div>

          <motion.ol
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-10"
          >
            {features.map((feature) => (
              <motion.li
                key={feature.number}
                variants={itemVariants}
                className="flex gap-5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-base font-bold text-primary"
                >
                  {feature.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-ink/60">{feature.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
