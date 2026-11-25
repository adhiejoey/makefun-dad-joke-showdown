// Dad Joke Showdown — make.fun bounty u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes a single dad joke (plain ASCII, within the 1-200 character gate)
// to entry.txt in the output directory.
//
// Run with plain Node 22:  node main.ts
// The output directory comes from MAKEFUN_OUTPUT_DIR, default /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a dad, his dog, and a name that backfires every single day.
const JOKE =
  "I named my dog Stay. Now when I tell him to stay, he wags his tail because he thinks I'm just saying hello.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate before writing: the sealed scorer only accepts
// 1-200 characters of non-blank UTF-8 text. Fail loudly here
// instead of shipping an entry the gate would refuse.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${chars} characters, outside the 1-200 gate`);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");
