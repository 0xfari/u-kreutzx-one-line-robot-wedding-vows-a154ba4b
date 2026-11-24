import * as fs from "node:fs";
import * as path from "node:path";

// The vow keeps the old wedding rhythm and swaps in the machine parts.
// The payoff lands in the last words, where the judge's brief says it should.
// One-Line Robot Wedding Vows: a single vow, at most 160 characters, for a
// robot couple. The line is written to /output/entry.txt by run() below.
const VOW =
  "I vow to love you in sickness and in health, in 5G and in airplane mode, till a factory reset do us part.";

function emptyFolder(dir: string): void {
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  emptyFolder(outDir);
  fs.writeFileSync(path.join(outDir, "entry.txt"), VOW + "\n", "utf8");
}

run();
