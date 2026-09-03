"use client";

import Icon from "@/components/ui/Icon";
import { getAppStage } from "@/lib/app-stage";

const stage = getAppStage();

const avatarStack = [
  { initial: "A", bg: "bg-primary" },
  { initial: "J", bg: "bg-gold-primary" },
  { initial: "M", bg: "bg-peach" },
  { initial: "S", bg: "bg-accent-primary" },
  { initial: "K", bg: "bg-lavender" },
];

const stats = [
  { value: "4.9", icon: "star" as const, iconColor: "#fbbf24", label: "Average app rating" },
  { value: "50K+", icon: "people" as const, iconColor: "#2563eb", label: "Active declutters" },
  { value: "300K+", icon: "box" as const, iconColor: "#ffffff", label: "Items given a second life" },
];

export default function SocialProofBand() {
  return (
    <section className="bg-ink py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {stage === "waitlist" ? (
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            <span className="flex -space-x-2" aria-hidden="true">
              {avatarStack.map((avatar) => (
                <span
                  key={avatar.initial}
                  className={`flex size-6 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-ink ${avatar.bg}`}
                >
                  {avatar.initial}
                </span>
              ))}
            </span>
            <span aria-hidden="true" className="text-white/30">
              |
            </span>
            <span>
              Join <span className="font-bold text-primary">people like you</span>{" "}
              waiting for Declut
            </span>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-white/60">
                  <Icon name={stat.icon} variant="bold" size={14} color={stat.iconColor} />
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
