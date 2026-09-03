"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AppStoreBadges from "@/components/ui/AppStoreBadges";
import WaitlistModal from "@/components/ui/WaitlistModal";
import { getAppStage } from "@/lib/app-stage";

const stage = getAppStage();

export default function ClosingCTA() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section id="get-started" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-300 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center before:pointer-events-none before:absolute before:-bottom-30 before:right-4 before:h-100 before:w-20 before:rotate-45 before:rounded-full before:bg-white/10 before:content-[''] after:pointer-events-none after:absolute after:-bottom-34 after:right-40 after:h-100 after:w-20 after:rotate-45 after:rounded-full after:bg-white/[0.07] after:content-[''] sm:px-12 lg:py-20"
          style={{
            background:
              "linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 size-175 -translate-x-1/3 -translate-y-1/2 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.28) 25%, rgba(219,234,254,0.16) 45%, rgba(147,197,253,0.08) 62%, transparent 78%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wide text-white">
              {stage === "waitlist" ? "Coming Soon" : "Start Today"}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {stage === "waitlist"
                ? "Be First to Experience the New Declut"
                : "Ready To Declutter Your Space?"}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/80">
              {stage === "waitlist"
                ? "Join the waitlist for early access to a simpler way to buy and sell quality pre-owned items near you."
                : "Join 50,000 people turning clutter into cash and finding pre-loved treasures nearby."}
            </p>

            <div className="mt-8 flex justify-center">
              {stage === "waitlist" ? (
                <motion.button
                  type="button"
                  onClick={() => setIsWaitlistOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="rounded-full bg-white px-8 py-3 text-sm font-bold text-ink shadow-sm transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Join the Waitlist
                </motion.button>
              ) : (
                <AppStoreBadges variant="light" />
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {stage === "waitlist" && (
        <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
      )}
    </section>
  );
}
