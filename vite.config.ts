import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  define: {
    'globalThis.__DEV__': JSON.stringify(false),
  },
});
