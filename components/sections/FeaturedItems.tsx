"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedItems() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const deskRef = useRef<HTMLDivElement>(null);
  const sofaRef = useRef<HTMLDivElement>(null);
  const acRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(deskRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          acRef.current,
          { x: 60, y: -30, opacity: 0, duration: 0.7, ease: "power3.out" },
          "<0.1"
        )
        .from(
          sofaRef.current,
          { y: 50, opacity: 0, scale: 0.9, duration: 0.7, ease: "power3.out" },
          "<0.15"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="featured-items"
      ref={sectionRef}
      className="scroll-mt-24 bg-primary-25 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Featured Items
          </h2>
          <p className="mt-4 text-base text-ink/50 sm:text-lg">
            Discover top picks from our carefully curated collection of
            quality items. We&apos;ve got something special waiting for you.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h3 className="text-3xl font-extrabold text-ink sm:text-4xl">
              Discover Your Hidden Gems
            </h3>
            <p className="mx-auto mt-4 max-w-md text-ink/60 lg:mx-0">
              Explore our handpicked collection of top-rated items. From
              trendy decor to tech essentials, find something special to
              enhance your space and simplify your life.
            </p>
            <a
              href="#"
              className="group mt-6 inline-flex items-center gap-2 font-semibold text-primary-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary-25 rounded-sm"
            >
              See more featured items
              <FiArrowRight
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="relative order-1 mx-auto aspect-6/5 w-full max-w-sm lg:order-2 lg:mx-0 lg:max-w-none">
            <div
              ref={deskRef}
              className="absolute bottom-0 left-0 z-10 aspect-3/4 w-[52%]"
            >
              <Image
                src="/images/featured-1.png"
                alt="Laptop and monitor set up on a desk"
                fill
                sizes="(min-width: 1024px) 300px, 220px"
                className="rounded-[28px] object-cover shadow-xl"
              />
            </div>

            <div
              ref={acRef}
              className="absolute right-0 top-0 z-20 aspect-3/4 w-[52%]"
            >
              <Image
                src="/images/featured-3.png"
                alt="Outdoor air conditioning unit"
                fill
                sizes="(min-width: 1024px) 300px, 220px"
                className="rounded-[28px] object-cover shadow-xl"
              />
            </div>

            <div
              ref={sofaRef}
              className="absolute left-[26%] top-[8%] z-30 aspect-3/4 w-[52%]"
            >
              <Image
                src="/images/featured-2.png"
                alt="Orange sofa with a pink cushion"
                fill
                sizes="(min-width: 1024px) 310px, 230px"
                className="rounded-[28px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
