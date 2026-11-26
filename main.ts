import { mkdirSync, writeFileSync } from "node:fs";

// Rejected Olympic Sports — one funny single-line sport the Olympics
// rejected: made-up, real enough to sound like a broadcast, absurd enough
// to be funny.
const ENTRY =
  "Speed Putting the Duvet Cover On: two athletes, one duvet, no instructions. First to cry is disqualified.";
const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}
// The gate also rejects whitespace-only text, so check that explicitly.
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
