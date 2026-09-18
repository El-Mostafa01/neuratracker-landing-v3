/** Prefix a /public path with the deployment base path (GitHub Pages serves under /<repo>/). */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
