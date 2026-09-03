"use client";

import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <LineSpinner size="40" stroke="3" speed="1" color="#2563eb" />
    </div>
  );
}
