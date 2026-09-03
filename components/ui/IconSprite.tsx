import { readFileSync } from "fs";
import path from "path";

const variants = ["bold", "outline", "linear", "broken"] as const;

function readSprite(variant: (typeof variants)[number]) {
  return readFileSync(
    path.join(
      process.cwd(),
      "node_modules/@gems-group/icons/dist",
      variant,
      `icons-${variant}.svg`
    ),
    "utf8"
  );
}

export default function IconSprite() {
  const sprite = variants.map(readSprite).join("");

  return (
    <div
      style={{ display: "none" }}
      dangerouslySetInnerHTML={{ __html: sprite }}
    />
  );
}
