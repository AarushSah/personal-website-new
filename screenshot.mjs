import { chromium } from "playwright";

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });

const pages = [
  { url: "http://localhost:3000", name: "home" },
  { url: "http://localhost:3000/work", name: "work" },
  { url: "http://localhost:3000/blog", name: "blog" },
  { url: "http://localhost:3000/blog/why-evals-are-hard", name: "blog-post" },
  { url: "http://localhost:3000/bookshelf", name: "bookshelf" },
  { url: "http://localhost:3000/opengraph-image", name: "og-image" },
];

for (const p of pages) {
  const page = await context.newPage();
  await page.goto(p.url, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `/tmp/${p.name}.png`, fullPage: true });
  console.log(`Captured ${p.name}`);
  await page.close();
}

await browser.close();
