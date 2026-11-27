import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Weirdest Job Title (make.fun u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922).
// One job title, 60 characters at most, nothing else.
const text = "Senior Apologizer for Self-Checkout Machines";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
