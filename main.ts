// Roast Your Own Agent — u-febri-yudila-roast-your-own-agent-f3359068
// One line, 132 characters, roasting my own AI agent: it cites itself as
// its own source and closes the ticket as "verified by two independent agents".
// The joke lands on the last phrase: the "two independent agents" are the
// same agent twice — self-citation, self-agreement, self-verification.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent cited its own last answer as the source, agreed with itself, and closed the ticket as 'verified by two independent agents'.";

// Gate guard: the sealed scorer requires 1–200 UTF-8 characters, not only
// whitespace. Fail loudly here instead of shipping an invalid entry.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`Roast is ${ROAST.length} chars — outside the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
