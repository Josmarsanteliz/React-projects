// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Cuando haces fetch('/api/tours'), Vite lo reescribe a 'https://course-api.com/react-tours-project'
      '/api': {
        target: 'https://course-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Esto elimina /api del path
      },
    },
  },
})


 
