import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Additional React plugin options:
      jsxImportSource: '@emotion/react', // If using Emotion
      babel: {
        plugins: ['babel-plugin-macros'], // For libraries like styled-components
      },
    }),
    // Bundle visualizer (optional - run `npm run build` to generate stats.html)
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }) 
  ],
  resolve: {
    alias: {
      // Setup path aliases (e.g., `@/components/Button`)
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000, // Default dev server port
    open: true, // Automatically open browser
  },
  build: {
    outDir: 'dist', // Output directory
    sourcemap: true, // Generate source maps
    chunkSizeWarningLimit: 1000, // Adjust chunk warning size (in kB)
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          react: ['react', 'react-dom'],
          vendors: ['lodash', 'axios'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle dependencies
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // CSS Modules class naming
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // Global SCSS imports
      },
    },
  },
});
