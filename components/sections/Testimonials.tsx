"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import FadeIn from "@/components/ui/FadeIn";
import { getAppStage } from "@/lib/app-stage";

const stage = getAppStage();

const testimonials = [
  {
    name: "Amara O.",
    rating: 4,
    quote:
      "I found a barely-used dining set for half the retail price. The whole process from browsing to pickup took less than a day - I'm hooked.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Michael T.",
    rating: 5,
    quote:
      "Listing my old home gym equipment took five minutes and it sold within the week. Declut made clearing out my garage genuinely painless.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Priya R.",
    rating: 5,
    quote:
      "What I love most is how secure everything feels. I never worried about payment or meeting a stranger - Declut handled it all smoothly.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Daniel K.",
    rating: 5,
    quote:
      "Sold three appliances in my first month on the app. The support team even helped me sort out a pickup scheduling issue right away.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Sophia L.",
    rating: 4,
    quote:
      "Declut turned my spring cleaning into extra cash. Uploading photos and setting a price was so much simpler than other apps I've tried.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Chidi N.",
    rating: 5,
    quote:
      "As a buyer, the category filters saved me so much time. Found a great desk and chair combo within minutes of opening the app.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces&q=80",
  },
];

const PAGE_SIZE = 2;
const pageCount = Math.ceil(testimonials.length / PAGE_SIZE);

const cardVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Testimonials() {
  const [[page, direction], setPageState] = useState([0, 0]);
  const current = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(pageCount - 1, index));
    setPageState([next, next > page ? 1 : -1]);
  };

  if (stage !== "live") return null;

  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#FCFCFD] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-wide text-primary">
              Real Experiences
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">
              What Our Users Say
            </h2>
          </FadeIn>
          <Image
            src="/svg/Quote-mark.svg"
            alt=""
            width={100}
            height={81}
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 hidden select-none sm:block"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 grid gap-6 sm:grid-cols-2"
        >
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            {current.map((testimonial) => (
              <motion.div
                key={`${page}-${testimonial.name}`}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="rounded-2xl border border-ink/10 bg-white p-7"
              >
                <div className="flex gap-4">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-ink/70">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Image
                        key={i}
                        src={i < testimonial.rating ? "/svg/star.svg" : "/svg/empty-star.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-primary">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonials page ${i + 1}`}
                aria-current={i === page}
                className={`h-2 rounded-full transition-all ${
                  i === page ? "w-6 bg-primary" : "w-2 bg-ink/15 hover:bg-ink/25"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral text-ink/40 transition-colors enabled:hover:bg-primary-100 enabled:hover:text-primary disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <FiArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              disabled={page === pageCount - 1}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary transition-colors enabled:hover:bg-primary enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <FiArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
