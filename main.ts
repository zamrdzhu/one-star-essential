// one-star-essential — entry for make.fun's "One-Star Review of Something Essential".
//
// Writes one single-line one-star review (86 characters) of an everyday
// essential to /output/entry.txt and prints the same line to stdout.
// Node 22 stdlib only, no dependencies, no network.
//
// The review is a constant in this file, so the program is deterministic:
// every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

// The review: gravity, complained about in earnest. The grievance is the
// one everyone recognises — gravity never catches what you drop, it only
// ever makes the landing worse — and the sting arrives in the last few
// words. Deadpan throughout: no winking, no exclamation marks, and no
// second joke crowding the first. One essential, one complaint, one line.
const REVIEW =
  "Gravity has never caught anything I dropped. It only works when it can ruin something.";

// The gate refuses anything over 160 characters, so fail loudly here
// instead of shipping an invalid entry.
if ([...REVIEW].length > 160 || REVIEW.trim().length === 0) {
  throw new Error(`review must be 1-160 characters, got ${[...REVIEW].length}`);
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, REVIEW, "utf8");
console.log(REVIEW);
