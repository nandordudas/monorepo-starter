import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        '@workspace/ui',
        '@workspace/utils/make-safe',
      ],
    },
  },
  plugins: [
    react(),
  ],
})
