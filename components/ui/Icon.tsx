import type { CSSProperties } from "react";

export type IconVariant = "bold" | "outline" | "linear" | "broken";

interface IconProps {
  name: string;
  variant?: IconVariant;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export default function Icon({
  name,
  variant = "linear",
  size = 24,
  color = "currentColor",
  className = "",
  style = {},
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={{ fill: color, stroke: color, ...style }}
    >
      <use href={`#icon-${variant}-${name}`} />
    </svg>
  );
}
