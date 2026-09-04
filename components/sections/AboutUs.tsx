"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    label: "Our Mission",
    heading: "Simplify Decluttering, Foster Sustainability",
    description:
      "To provide a platform where individuals can easily buy and sell pre-loved household items, fostering sustainability, community, and convenience.",
  },
  {
    label: "Our Vision",
    heading: "Creating a World of Sustainable Decluttering",
    description:
      "To create a world where decluttering is effortless, and every item finds a home, contributing to more sustainable and connected society.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function AboutUs() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-ink pb-16 lg:pb-20">
      <div aria-hidden="true" className="flex h-5 w-full">
        <div className="w-[18%] bg-white" />
        <div className="w-[61%] bg-primary-50" />
        <div className="w-[21%] bg-primary" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 size-80 -translate-x-1/3 translate-y-1/3 rounded-full border border-white/10"
      />

      <div className="relative mx-auto max-w-300 px-6 pt-16 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-wide text-white">
              About Us
            </p>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-4xl">
              We are your go-to platform for simplifying the decluttering
              process.
            </h2>
            <p className="mt-6 text-sm text-white/70">
              At Declut, we believe that decluttering should be easy,
              rewarding and sustainable. With Declut, you can effortlessly
              list items you no longer need, connect with buyers who are
              eager to give those items a new life, and discover unique
              treasures for treasures.
            </p>
            <p className="mt-4 text-sm text-white/70">
              Join our growing community of declutters who are committed to
              reducing waste, promoting sustainability, and creating a more
              organized and clutter-free world. Whether you&apos;re
              downsizing, upgrading, or simply looking to declutter, Declut
              is here to help you on your journey.
            </p>
            <p className="mt-4 text-sm text-white/70">
              Thank you for choosing Declut. Let&apos;s declutter together
            </p>
          </motion.div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-10"
          >
            {pillars.map((pillar) => (
              <motion.div key={pillar.label} variants={itemVariants}>
                <p className="text-xs font-bold uppercase tracking-wide text-white">
                  {pillar.label}
                </p>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                  {pillar.heading}
                </h3>
                <p className="mt-3 text-sm text-white/70">{pillar.description}</p>
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <p className="text-xs font-bold uppercase tracking-wide text-white">
                Our Values
              </p>
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                Our Core Principles: Driving Our Purpose
              </h3>
              <p className="mt-3 text-sm text-white/70">
                At Declut, our core values - <span className="font-medium text-primary">sustainability</span>,{" "}
                <span className="font-medium text-primary">community</span>,
                and <span className="font-medium text-primary">convenience</span> -
                shape everything we do. They inspire us to promote
                environmental stewardship, foster a sense of belonging, and
                provide seamless experiences for our users.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
