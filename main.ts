// Cat Reviews Its Human — make.fun entry
// Writes a one-line, one-star cat review to entry.txt.
// The review follows the judge brief: a specific complaint, a feline voice,
// and a sting in the last few words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star. He moved my food bowl two inches to the left without asking, then acted shocked when his laptop fell off the table. That was the warning shot.";

function main(): void {
  const text = ENTRY.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
  console.log(`wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
}

main();
