/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export → produces an /out folder of plain HTML/CSS/JS
  // that GitHub Pages can host for free.
  output: "export",
  images: {
    // GitHub Pages has no image optimizer, so serve images as-is.
    unoptimized: true,
  },
  // Ensures every route resolves to a folder/index.html (Pages-friendly).
  trailingSlash: true,
};

export default nextConfig;
