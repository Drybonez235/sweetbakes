// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', // Where to output build files
    emptyOutDir: true, // Clean dist before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        cakes: resolve(__dirname, 'cakes.html'),
        flavors: resolve(__dirname, 'flavors.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        cookies: resolve(__dirname, 'traditional-cookies.html'),
        decoratedcookies: resolve(__dirname, 'decorated-cookies.html'),
        macarons: resolve(__dirname, 'macarons.html'),
        donuts: resolve(__dirname, 'donuts.html'),
        pies: resolve(__dirname, 'pies.html'),
        contact: resolve(__dirname, 'contact.html'),
        theme: resolve(__dirname, 'theme.html'),
        christmas: resolve(__dirname, 'christmas-index.html'),
      },
    },
  },

  assetsInclude: ['**/*.js'],
  publicDir: 'public',

  server: {
    port: 3000,
    open: true, // Set to true if you want the browser to open on `npm run dev`
    strictPort: true, // Fail if 3000 is in use
  },
});