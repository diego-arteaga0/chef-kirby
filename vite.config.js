import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,},
    optimizeDeps: {
      exclude: ['os', 'path'],
    },
    build: {
      rollupOptions: {
        external: ['os', 'path'],
      } }
})
