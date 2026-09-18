// Full-page + per-section screenshots of the running dev server, for visual comparison with the Figma frame.
// Usage: node scripts/shoot.mjs [url] [outDir] [width]
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const url = process.argv[2] ?? "http://localhost:3001";
const out = process.argv[3] ?? "shots";
const width = Number(process.argv[4] ?? 1554);
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle" });
await page.addStyleTag({ content: ".reveal{opacity:1!important;transform:none!important;transition:none!important} *{animation-play-state:paused!important}" });
// scroll through once so lazy images load
const total = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < total; y += 800) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await page.waitForTimeout(80); }
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);
await page.screenshot({ path: `${out}/full.png`, fullPage: true });
const sections = await page.$$("main > section, footer");
let i = 0;
for (const s of sections) {
  const id = (await s.getAttribute("id")) || `section-${i}`;
  await s.screenshot({ path: `${out}/${String(i).padStart(2, "0")}-${id}.png` });
  i++;
}
console.log(`saved ${i} sections + full page to ${out}/ (page height ${total}px)`);
await browser.close();
