"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type Interest = "buying" | "selling" | "both";

const interestOptions: { value: Interest; title: string; description: string }[] = [
  {
    value: "buying",
    title: "Buying items",
    description: "Discover great pre-owned items near you.",
  },
  {
    value: "selling",
    title: "Selling items",
    description: "Turn things you no longer need into cash.",
  },
  {
    value: "both",
    title: "Both",
    description: "Buy great finds and sell things you no longer need.",
  },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function WaitlistModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<Interest>("buying");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const resetAndClose = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
    if (!nextOpen) {
      setTimeout(() => {
        setStatus("idle");
        setEmail("");
        setInterest("buying");
        setErrorMessage("");
      }, 200);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!API_BASE_URL) {
      setStatus("error");
      setErrorMessage("Waitlist signup isn't configured right now. Please try again later.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interest }),
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
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
    <Dialog open={open} onOpenChange={resetAndClose}>
      <DialogContent className="gap-3 rounded-2xl bg-white px-5 py-4 sm:max-w-lg sm:px-6 sm:py-5">
        {status === "success" ? (
          <div className="py-4 text-center">
            <DialogHeader>
              <DialogTitle className="text-lg font-extrabold text-ink">
                You&apos;re on the list
              </DialogTitle>
              <DialogDescription className="text-ink/60">
                We&apos;ll email you as soon as Declut launches.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg font-extrabold text-ink">
                Join the Declut Waitlist
              </DialogTitle>
              <DialogDescription className="text-ink/60">
                Be among the first to experience the new Declut. Get early
                access and we&apos;ll let you know as soon as we&apos;re live.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="waitlist-email" className="sr-only">
                  Email Address
                </Label>
                <Input
                  id="waitlist-email"
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-auto rounded-xl border-none bg-neutral px-3.5 py-2.5 text-sm placeholder:text-ink/40"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold text-ink">What are you interested in?</p>
                <RadioGroup
                  value={interest}
                  onValueChange={(value) => setInterest(value as Interest)}
                  className="gap-0 divide-y divide-white rounded-2xl bg-[#FCFCFD]"
                >
                  {interestOptions.map((option) => (
                    <label
                      key={option.value}
                      htmlFor={`interest-${option.value}`}
                      className="flex cursor-pointer items-start gap-2.5 px-3.5 py-2.5"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`interest-${option.value}`}
                        className="mt-1"
                      />
                      <span>
                        <span className="block text-sm font-bold text-ink">
                          {option.title}
                        </span>
                        <span className="block text-xs text-ink/60">
                          {option.description}
                        </span>
                      </span>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm text-destructive">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="h-auto rounded-full bg-primary py-2.5 text-sm font-bold text-white hover:bg-primary/90"
              >
                {status === "submitting" ? "Joining…" : "Join the Waitlist"}
              </Button>

              <p className="text-center text-xs text-ink/50">
                By joining the waitlist, you agree to receive launch updates
                and other communications from Declut. You can unsubscribe at
                any time. See our{" "}
                <a href="#" className="text-primary underline">
                  Privacy Policy
                </a>{" "}
                for details.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
