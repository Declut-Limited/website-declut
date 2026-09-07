"use client";

// import { useEffect, useState } from "react";
// import { FiX } from "react-icons/fi";

// const DISMISS_KEY = "declut-announcement-dismissed";

export default function AnnouncementBanner() {
  // const [dismissed, setDismissed] = useState(false);

  // useEffect(() => {
  //   if (window.localStorage.getItem(DISMISS_KEY) === "1") {
  //     setDismissed(true);
  //   }
  // }, []);

  // if (dismissed) return null;

  // const dismiss = () => {
  //   setDismissed(true);
  //   window.localStorage.setItem(DISMISS_KEY, "1");
  // };

  return (
    <div className="relative bg-peach px-3 py-2 text-center text-sm font-medium text-white sm:px-6">
      <span aria-hidden="true">✨</span> Something fresh is coming. Meet the
      new Declut — redesigned, refreshed, and launching soon.
      {/* <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 transition-colors hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <FiX size={14} aria-hidden="true" />
      </button> */}
    </div>
  );
}
