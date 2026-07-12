"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        phoneRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.7,
          onComplete: () => {
            gsap.to(phoneRef.current, {
              y: "+=10",
              duration: 2.6,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
            gsap.to(cardRef.current, {
              y: "-=8",
              duration: 2.2,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: 0.2,
            });
          },
        }
      );
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 h-72 w-72 opacity-60 [background-image:radial-gradient(var(--color-primary-100)_1.5px,transparent_1.5px)] [background-size:16px_16px] lg:h-96 lg:w-96"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center lg:text-left"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-3 text-sm font-medium text-ink/60"
          >
            <span className="h-px w-6 bg-ink/30" aria-hidden="true" />
            Declut
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Simplify Your{" "}
            <span className="text-gold-primary">Space</span>, Amplify Your
            Life
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-md text-base text-ink/60 lg:mx-0 lg:text-lg"
          >
            Turn clutter into cash effortlessly with Declut. List your
            household items for sale and unlock new possibilities for your
            space and wallet.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center lg:justify-start"
          >
            <AppStoreBadges />
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div ref={phoneRef} className="relative mx-auto w-full max-w-[320px]">
            <Image
              src="/images/mobile-mockup.png"
              alt="Declut app showing browsable listings by category"
              width={640}
              height={1300}
              priority
              className="h-auto w-[95%] drop-shadow-2xl"
            />
          </div>

          <div
            ref={cardRef}
            className="absolute left-1/2 top-[54%] z-20 flex w-[85%] max-w-[300px] -translate-x-[28%] md:-translate-x-[88%] -translate-y-1/2 items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-xl sm:w-auto"
          >
            <div>
              <p className="text-xs text-ink/50">Total Price</p>
              <p className="text-lg font-bold text-ink">₦210,000.00</p>
            </div>
            <button
              type="button"
              className="whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Show Interest
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
