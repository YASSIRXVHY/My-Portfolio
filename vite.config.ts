import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// './' keeps asset paths relative, so the same build works on
// GitHub Pages (sub-path) and on Vercel/Netlify (root domain).
export default defineConfig({
  plugins: [react()],
  base: './',
});
