// Design tokens. blog-setup rewrites this file from blog-ops/profile/image-style.md.
export const CANVAS = { width: 1800, height: 1200 }; // 3:2, render with --scale=2
export const TITLE_TOP = 110;
export const SAFE_MARGIN = 120;
export const palette = {
  background: "#F7F7F7", surface: "#FFFFFF", border: "#E5E7EB",
  text: "#222222", muted: "#6B7280",
  primary: "#2B6CB0", accent: "#0E9F8E", warn: "#E11D48",
};
export const fonts = { sans: "Montserrat, ui-sans-serif, sans-serif", mono: "ui-monospace, monospace" };
export const watermark = { text: "olgapak.com", opacity: 0.55 };
