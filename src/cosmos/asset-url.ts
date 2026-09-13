/**
 * The one porting change the offline shell forces on a viewer like this.
 *
 * A dev server is a web root, so `fetch('/catalog/catalog.bin')` is correct
 * there. An INSTALLED cartridge is served from
 * `mnemo-plugin://app/<plugin-id>/index.html`, where a root-absolute path
 * resolves to `mnemo-plugin://app/catalog/catalog.bin` — a URL whose first
 * segment matches no installed plugin id, so the host's protocol handler
 * returns 404 and the viewer reports that the catalogue could not be read.
 * Resolving against `document.baseURI` instead keeps the call sites correct
 * under BOTH the dev server (base `/`) and the installed protocol
 * (base `mnemo-plugin://app/<id>/`).
 *
 * Vite's `base: './'` only rewrites the URLs it can SEE at build time. The two
 * catalogue fetches are built at runtime from string literals, so they are the
 * ones that have to go through here.
 */
export function assetUrl(path: string): string {
  // A caller may already hand us an absolute URL (http:, blob:, data:). Leave
  // it alone rather than mangling it into the cartridge's own origin.
  if (/^[a-z][a-z0-9+.-]*:/i.test(path)) return path;
  return new URL(path.replace(/^\/+/, ''), document.baseURI).toString();
}
