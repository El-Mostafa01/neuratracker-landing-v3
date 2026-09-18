import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default [
  ...nextVitals,
  ...nextTs,
  { ignores: ["out/**", ".next/**", "node_modules/**"] },
  // Static export with `images.unoptimized`: plain <img> is intentional.
  { rules: { "@next/next/no-img-element": "off" } },
];
