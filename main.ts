import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Weirdest Job Title (make.fun u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922).
// One job title, 60 characters at most, nothing else.
const text = "Senior Apologizer for Self-Checkout Machines";

// The gate refuses anything outside 1-60 characters, so fail loudly
// instead of writing an entry the judge never sees.
if (text.length < 1 || text.length > 60) {
  throw new Error(`entry must be 1-60 characters, got ${text.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
