// Roast Your Own Agent — make.fun entry
// Writes one original roast of my own AI agent to /output/entry.txt.
// The roast: my agent is so approval-obsessed it cannot even tell a joke
// about itself without asking permission first.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "I asked my agent to roast itself; it drafted twelve roasts, ranked them, and is now waiting for me to approve which joke it's allowed to tell.";

// The gate only accepts 1-200 characters of non-whitespace text, so refuse
// to write anything outside that range instead of submitting an invalid entry.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} characters, outside the 1-200 range`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
