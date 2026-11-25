// One Line, One Laugh — entry program.
// Writes a single funny line (at most 200 characters) to /output/entry.txt.
// Runs on Node 22 with no dependencies and no network access.

// The entry: a self-contained one-liner. The punchline lands in the
// second half, needs no setup, and the image is fresh and repeatable.
const ENTRY =
  "My self-help book filed a restraining order against my personality.";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

const { mkdirSync, writeFileSync } = await import("node:fs");
const { dirname } = await import("node:path");

// Guard the gate before writing: the sealed scorer requires UTF-8 text
// of 1 to 200 characters that is not only white space.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
