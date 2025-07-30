import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Use relative paths for GitHub Pages compatibility
  build: {
    outDir: 'dist',
  },
  server: {
    open: true, // Automatically open browser on `npm run dev`
  }
});
