"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import FadeIn from "@/components/ui/FadeIn";
import AppDownloadModal from "@/components/ui/AppDownloadModal";
import { getAppStage } from "@/lib/app-stage";

const stage = getAppStage();

const whyJoinCards = [
  {
    icon: "/svg/key.svg",
    title: "Early access",
    description: "Be among the first to experience the new Declut.",
  },
  {
    icon: "/svg/shop.svg",
    title: "Local marketplace",
    description: "Discover buyers, sellers and quality finds near you.",
  },
  {
    icon: "/svg/security.svg",
    title: "No spam",
    description: "Only useful early-access and launch updates.",
  },
];

const products = [
  {
    image: "/images/featured-3.png",
    alt: "Hisense 1.5HP air conditioning unit",
    title: "Hisense 1.5HP Air Conditioner",
    price: "245,000",
    distance: "0.4 km",
    condition: "Excellent",
    conditionColor: "text-lavender",
  },
  {
    image: "/images/featured-1.png",
    alt: "Apple MacBook Pro on a desk",
    title: "Apple MacBook Pro 2021",
    price: "855,000",
    distance: "3.7 km",
    condition: "Good",
    conditionColor: "text-peach",
  },
  {
    image: "/images/featured-2.png",
    alt: "Orange fabric sofa with a pink cushion",
    title: "Orange Fabric Sofa Set",
    price: "480,000",
    distance: "2.3 km",
    condition: "Neatly Used",
    conditionColor: "text-accent-primary",
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function FeaturedItems() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <section id="featured-items" className="scroll-mt-24 bg-primary-25 py-16 lg:py-20">
      <div className="mx-auto max-w-300 px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-wide text-primary">
              {stage === "waitlist" ? "Why join early?" : "Fresh listings"}
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-ink sm:text-3xl">
              {stage === "waitlist"
                ? "A Simpler Marketplace Is Coming."
                : "Featured Finds Near You"}
            </h2>
          </FadeIn>

          {stage === "live" && (
            <button
              type="button"
              onClick={() => setIsDownloadOpen(true)}
              className="group mb-1 flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Get the App
              <FiArrowRight
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        {stage === "waitlist" ? (
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-8 sm:grid-cols-3"
          >
            {whyJoinCards.map((card) => (
              <motion.div key={card.title} variants={itemVariants} className="text-center">
                <Image src={card.icon} alt="" width={40} height={40} className="mx-auto" />
                <h3 className="mt-3 text-base font-bold text-ink">{card.title}</h3>
                <p className="mt-1.5 text-sm text-ink/60">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 sm:grid-cols-3"
          >
            {products.map((product) => (
              <motion.div key={product.title} variants={itemVariants}>
                <div className="relative aspect-4/2 overflow-hidden rounded-2xl">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-sm ${product.conditionColor}`}
                  >
                    {product.condition}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink/70">{product.title}</p>
                <div className="mt-1 flex items-center justify-between">
                  <p className="font-bold text-ink">
                    <span aria-hidden="true">₦</span> {product.price}
                  </p>
                  <p className="text-xs text-ink/40">{product.distance}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {stage === "live" && (
        <AppDownloadModal open={isDownloadOpen} onOpenChange={setIsDownloadOpen} />
      )}
    </section>
  );
}
