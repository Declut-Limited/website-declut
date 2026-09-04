"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const contactDetails = [
  {
    icon: "call" as const,
    value: "+234 916 000 6032",
    href: "tel:+2349160006032",
  },
  {
    icon: "sms" as const,
    value: "Mydeclutapp@gmail.com",
    href: "mailto:mydeclutapp@gmail.com",
  },
  {
    icon: "location" as const,
    value: "5 Ogunsiji close, Allen, Ikeja, Lagos state.",
    href: undefined,
  },
];

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.338066036792!2d3.3514960735048396!3d6.604845122215785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9234071499cb%3A0x2b1a5de922a9039b!2s5%20Ogunsiji%20Cl%2C%20Allen%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1788474297151!5m2!1sen!2sng";

type Status = "idle" | "submitting" | "success" | "error";

const emptyForm = { name: "", email: "", phone: "", message: "" };

export default function GetInTouch() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof typeof emptyForm) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!API_BASE_URL) {
      setStatus("error");
      setErrorMessage("Contact form isn't configured right now. Please try again later.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm(emptyForm);
      } else {
        setStatus("error");
        setErrorMessage(
          Array.isArray(data.error?.message)
            ? data.error.message.join(" ")
            : "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-300 px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <FadeIn className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] sm:aspect-4/3">
              <iframe
                src={MAP_EMBED_SRC}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Declut office location"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <div className="absolute right-4 top-6 hidden w-auto flex-col gap-4 rounded-2xl bg-white p-5 shadow-xl sm:right-8 sm:top-10 sm:flex sm:p-6">
              {contactDetails.map((detail) => (
                <div key={detail.value} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-50">
                    <Icon name={detail.icon} variant="bold" size={16} color="#2563eb" />
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-sm text-ink/70 transition-colors hover:text-primary"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="max-w-50 text-sm text-ink/70">{detail.value}</p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">Get in touch</h2>

            {status === "success" ? (
              <p className="mt-6 text-sm text-ink/60">
                Thanks for reaching out — we&apos;ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <Input
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Your Name"
                  value={form.name}
                  onChange={updateField("name")}
                  className="h-auto rounded-xl border-none bg-neutral px-4 py-3 text-sm placeholder:text-ink/40"
                />
                <Input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={updateField("email")}
                  className="h-auto rounded-xl border-none bg-neutral px-4 py-3 text-sm placeholder:text-ink/40"
                />
                <Input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={updateField("phone")}
                  className="h-auto rounded-xl border-none bg-neutral px-4 py-3 text-sm placeholder:text-ink/40"
                />
                <Textarea
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={4}
                  placeholder="Message"
                  value={form.message}
                  onChange={updateField("message")}
                  className="rounded-xl border-none bg-neutral px-4 py-3 text-sm placeholder:text-ink/40"
                />

                {status === "error" && (
                  <p role="alert" className="text-sm text-destructive">
                    {errorMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="h-auto self-start rounded-full bg-primary px-8 py-3 text-sm font-bold text-white hover:bg-primary/90"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
