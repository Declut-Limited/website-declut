"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import Icon from "@/components/ui/Icon";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import WaitlistModal from "@/components/ui/WaitlistModal";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { getAppStage } from "@/lib/app-stage";

const stage = getAppStage();

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

const avatarStack = [
  { initial: "A", bg: "bg-primary" },
  { initial: "J", bg: "bg-gold-primary" },
  { initial: "M", bg: "bg-peach" },
  { initial: "S", bg: "bg-accent-primary" },
  { initial: "K", bg: "bg-lavender" },
];

export default function Hero() {
  const leftBadgeRef = useRef<HTMLDivElement>(null);
  const rightBadgeRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(leftBadgeRef.current, {
        y: "+=10",
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(rightBadgeRef.current, {
        y: "-=10",
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-70"
      >
        <Image
          src="/svg/hero-Illustration.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      <div
        ref={leftBadgeRef}
        className="absolute left-4 top-[30%] z-10 hidden items-center gap-1.5 rounded-full bg-white px-3 py-2 shadow-lg sm:flex lg:left-[10%]"
      >
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
          <Icon name="flash" variant="bold" size={11} color="#ffffff" />
        </span>
        <span className="text-xs font-semibold text-ink">Sold in 2 hrs</span>
      </div>

      <div
        ref={rightBadgeRef}
        className="absolute right-4 top-[52%] z-10 hidden items-center gap-1.5 rounded-full bg-white px-3 py-2 shadow-lg sm:flex lg:right-[10%]"
      >
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-peach">
          <Icon name="location" variant="bold" size={11} color="#ffffff" />
        </span>
        <span className="text-xs font-semibold text-ink">Free to list</span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 mx-auto flex max-w-xl flex-col items-center px-6 py-20 text-center lg:py-28"
      >
        <motion.div
          variants={itemVariants}
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink/70 shadow-sm"
        >
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          The Decluttering Marketplace
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
        >
          Simplify Your Space,
          <br />
          <span className="text-primary">Amplify Your Life</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-sm text-sm text-ink/60 sm:text-base"
        >
          Turn clutter into cash effortlessly with Declut. List your
          household items for sale and unlock new possibilities for your
          space and wallet.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-7">
          {stage === "waitlist" ? (
            <div className="flex flex-col items-center gap-2.5">
              <motion.button
                type="button"
                onClick={() => setIsWaitlistOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Join Waitlist
              </motion.button>
              <p className="text-xs text-ink/50">
                Be the first to know when we launch
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <AppStoreBadges className="scale-90" />
              <div className="flex items-center gap-1.5 text-xs text-ink/60">
                <span className="flex -space-x-2" aria-hidden="true">
                  {avatarStack.map((avatar) => (
                    <span
                      key={avatar.initial}
                      className={`flex size-5 items-center justify-center rounded-full text-[9px] font-bold text-white ring-2 ring-white ${avatar.bg}`}
                    >
                      {avatar.initial}
                    </span>
                  ))}
                </span>
                <span className="flex items-center gap-1 font-semibold text-ink">
                  <Image src="/svg/star.svg" alt="" width={18} height={18} />
                  4.9
                </span>
                <span aria-hidden="true">·</span>
                <span>Loved by 50k+ declutterers</span>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>

      {stage === "waitlist" && (
        <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
      )}
    </section>
  );
}
