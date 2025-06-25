import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // ✅

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ makes Tailwind v4 just work
  ],
  server: {
    port: 2121,
  }
});
