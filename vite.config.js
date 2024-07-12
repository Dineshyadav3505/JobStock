import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    compression({
      include: /\.(html|css|js|svg|json)$/i,
      algorithm: 'brotliCompress',
      threshold: 10240, // Only compress files larger than 10KB
      deleteOriginalAssets: false,
      compressionOptions: {
        level: 9
      }
    })
  ]
})