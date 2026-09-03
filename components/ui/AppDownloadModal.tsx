"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AppDownloadModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-2xl bg-white px-5 py-5 sm:max-w-sm sm:px-6 sm:py-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-extrabold text-ink">
            Get Declut App
          </DialogTitle>
          <DialogDescription className="text-ink/60">
            Open your phone&apos;s camera and scan this QR code to begin
            downloading the <span className="font-bold text-primary">Declut</span>{" "}
            app.
          </DialogDescription>
        </DialogHeader>

        <Image
          src="/images/QR_Code.png"
          alt="QR code to download the Declut app"
          width={1600}
          height={1600}
          className="mx-auto h-auto w-full max-w-100"
        />
      </DialogContent>
    </Dialog>
  );
}
