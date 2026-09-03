"use client";

import { motion } from "framer-motion";

export default function ClosingCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 overflow-hidden bg-primary-darker py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl"
          >
            <span className="block">Let&apos;s Declut</span>
            <span className="block pl-16 sm:pl-24 lg:pl-32">Your Space</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm text-white/70">
              Experience the liberation of decluttering with our innovative
              platform. Simply list your household items, connect with eager
              buyers, and effortlessly clear your space of unwanted items.
              Our user-friendly interface streamlines the process, offering
              convenience and peace of mind every step of the way. Say
              goodbye to clutter and hello to a refreshed, rejuvenated living
              space that reflects your true sense of serenity and style.
            </p>

            <motion.a
              href="mailto:hello@declut.app"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="mt-8 inline-block rounded-lg bg-primary-25 px-8 py-3.5 text-sm font-bold text-ink shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-darker"
            >
              Contact Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
