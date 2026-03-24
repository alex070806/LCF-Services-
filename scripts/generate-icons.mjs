import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";

const svgBuffer = readFileSync("public/favicon.svg");

async function generate() {
  // Favicon 32x32
  await sharp(svgBuffer).resize(32, 32).png().toFile("public/favicon-32x32.png");
  console.log("✓ favicon-32x32.png");

  // Apple touch icon 180x180
  await sharp(svgBuffer).resize(180, 180).png().toFile("public/apple-touch-icon.png");
  console.log("✓ apple-touch-icon.png");

  // PWA icons
  await sharp(svgBuffer).resize(192, 192).png().toFile("public/icon-192.png");
  console.log("✓ icon-192.png");

  await sharp(svgBuffer).resize(512, 512).png().toFile("public/icon-512.png");
  console.log("✓ icon-512.png");

  // OG Image 1200x630
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1e1b4b"/>
        <stop offset="50%" style="stop-color:#312e81"/>
        <stop offset="100%" style="stop-color:#4338ca"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <text x="600" y="260" font-family="system-ui,sans-serif" font-size="72" font-weight="800" fill="white" text-anchor="middle">LCF Services</text>
    <text x="600" y="340" font-family="system-ui,sans-serif" font-size="32" fill="rgba(255,255,255,0.7)" text-anchor="middle">Professional Auto Transport Dispatch</text>
    <text x="600" y="420" font-family="system-ui,sans-serif" font-size="24" fill="rgba(255,255,255,0.5)" text-anchor="middle">(509) 768-4532 · Spokane, WA</text>
    <text x="600" y="530" font-family="system-ui,sans-serif" font-size="20" fill="rgba(255,255,255,0.35)" text-anchor="middle">lcfservises.us</text>
  </svg>`;

  await sharp(Buffer.from(ogSvg)).png().toFile("public/og-image.png");
  console.log("✓ og-image.png (1200x630)");

  console.log("\nAll icons generated!");
}

generate().catch(console.error);
