import { fileURLToPath } from 'node:url';
import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

const here = (relative: string) => fileURLToPath(new URL(relative, import.meta.url));

export default defineConfig({
  // RELATIVE base, not '/'. An installed cartridge is served from
  // mnemo-plugin://app/<plugin-id>/… — a root-absolute asset URL resolves to
  // mnemo-plugin://app/assets/… which matches NO plugin id prefix and 404s.
  // The same reason forces assetUrl() on the runtime fetches of the catalogue:
  // Vite only rewrites what it can see at build time.
  base: './',
  publicDir: here('./public'),
  plugins: [react()],
  resolve: { alias: { '@': here('./src') } },
  server: {
    host: '127.0.0.1', // IPv4 loopback: Electron does not reach ::1 here
    port: 5219,        // apps/dev-ports.json is the single source of truth
    strictPort: true,
    cors: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    // catalog.bin is fetched at runtime by URL. Nothing may be inlined.
    assetsInlineLimit: 0,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
  },
} as UserConfig & { test: Record<string, unknown> });
