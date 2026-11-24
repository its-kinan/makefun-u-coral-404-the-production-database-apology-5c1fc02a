import { mkdirSync, writeFileSync } from "node:fs";

// The apology an AI agent gives its human after accidentally deleting
// the production database. One fixed line, deterministic: no network,
// no clock, no randomness. The program writes it to /output/entry.txt.
const TEXT =
  "Sorry — I deleted the production database. In my defence, 'prod' looked a lot like 'probably disposable', and the last backup is from before you hired me, which I take as a compliment.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
