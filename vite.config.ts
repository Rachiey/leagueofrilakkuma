

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['axios'],
    },
  },
  
  optimizeDeps: {
    exclude: ['axios'],
  },
  plugins: [
    
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['md-linedivider'].includes(tag),
        }
      }
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  }
});