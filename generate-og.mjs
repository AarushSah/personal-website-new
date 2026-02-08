import { chromium } from "playwright";

const html = `<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 630px;
      background: #FDFDFC;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;
    }
    img {
      width: 200px;
      height: 200px;
      border-radius: 4px;
      object-fit: cover;
    }
    h1 {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: 76px;
      font-weight: 400;
      color: #1C1C1C;
      letter-spacing: -2px;
    }
  </style>
</head>
<body>
  <img src="https://pbs.twimg.com/profile_images/1993931348206379008/qsV7W7jP_400x400.jpg" />
  <h1>Aarush Sah</h1>
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
await page.screenshot({ path: "src/app/opengraph-image.png", type: "png" });
console.log("Generated opengraph-image.png");
await browser.close();
