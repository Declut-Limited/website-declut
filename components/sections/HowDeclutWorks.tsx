"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import FadeIn from "@/components/ui/FadeIn";
import WaitlistModal from "@/components/ui/WaitlistModal";
import AppDownloadModal from "@/components/ui/AppDownloadModal";
import { getAppStage } from "@/lib/app-stage";

const stage = getAppStage();

const steps = [
  {
    image: "/images/illustration-one.png",
    title: "List It",
    description:
      "Take a photo, write a short description, set your price. Live in under 60 seconds.",
  },
  {
    image: "/images/illustration-two.png",
    title: "Sell It",
    description:
      "Chat with interested buyers, agree on a time, and confirm the handoff inside the app.",
  },
  {
    image: "/images/illustration-three.png",
    title: "Hand It Over",
    description:
      "Meet locally, hand it over, get paid instantly. Both sides leave a review.",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HowDeclutWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-wide text-primary">
              Simple Process
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">
              How It Works
            </h2>
          </FadeIn>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group mb-1 flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            Watch a demo
            <FiArrowRight
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-10 sm:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.div key={step.title} variants={itemVariants} className="text-center">
              <Image
                src={step.image}
                alt=""
                width={360}
                height={280}
                className="mx-auto w-full max-w-34"
              />
              <h3 className="mt-4 font-bold text-ink">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-ink/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {stage === "waitlist" ? (
        <WaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      ) : (
        <AppDownloadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      )}
    </section>
  );
}
