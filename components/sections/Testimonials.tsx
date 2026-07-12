"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Amara O.",
    role: "Verified Buyer",
    quote:
      "I found a barely-used dining set for half the retail price. The whole process from browsing to pickup took less than a day - I'm hooked.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Michael T.",
    role: "Verified Seller",
    quote:
      "Listing my old home gym equipment took five minutes and it sold within the week. Declut made clearing out my garage genuinely painless.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Priya R.",
    role: "Verified Buyer",
    quote:
      "What I love most is how secure everything feels. I never worried about payment or meeting a stranger - Declut handled it all smoothly.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Daniel K.",
    role: "Verified Seller",
    quote:
      "Sold three appliances in my first month on the app. The support team even helped me sort out a pickup scheduling issue right away.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Sophia L.",
    role: "Verified Seller",
    quote:
      "Declut turned my spring cleaning into extra cash. Uploading photos and setting a price was so much simpler than other apps I've tried.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=faces&q=80",
  },
  {
    name: "Chidi N.",
    role: "Verified Buyer",
    quote:
      "As a buyer, the category filters saved me so much time. Found a great desk and chair combo within minutes of opening the app.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces&q=80",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollPrev(track.scrollLeft > 8);
    setCanScrollNext(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 8
    );
  };

  useEffect(() => {
    updateScrollState();
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const gap = 32;
    const amount = card ? card.offsetWidth + gap : 360;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-background py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            What people are saying
          </h2>
          <p className="mt-4 text-base text-ink/50 sm:text-lg">
            Read testimonials and reviews from satisfied buyers and sellers
            who have found success on our platform.
          </p>
        </div>

        <motion.div
          ref={trackRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="no-scrollbar mt-16 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-1 pb-4"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              data-card
              className="relative flex w-[85%] shrink-0 snap-start flex-col gap-6 rounded-3xl bg-white p-8 sm:w-[46%] sm:p-9"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-7 top-6 font-serif text-6xl leading-none text-primary-100 select-none"
              >
                &rdquo;
              </span>

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-[3px] ring-gold-primary ring-offset-2 ring-offset-white">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-primary-darker">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-ink/40">{testimonial.role}</p>
                </div>
              </div>

              <p className="relative text-[15px] leading-relaxed text-ink/70">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollPrev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral text-ink/40 transition-colors enabled:hover:bg-primary-100 enabled:hover:text-primary disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <FiArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollNext}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary transition-colors enabled:hover:bg-primary enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <FiArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
