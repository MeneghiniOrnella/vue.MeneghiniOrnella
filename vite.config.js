import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) {
              return 'vendor-three';
            }
            if (id.includes('tresjs')) {
              return 'vendor-tresjs';
            }
            if (id.includes('fortawesome')) {
              return 'vendor-icons';
            }
            if (id.includes('vue')) {
              return 'vendor-vue';
            }
            return 'vendor-other';
          }
        },
      },
    },
  },
});