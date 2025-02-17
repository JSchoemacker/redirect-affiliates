import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    sourcemap: false
  },
  server: {
   port: 3001,
   strictPort: true,
   host: true,
   allowedHosts: true
  },
  preview: {
   allowedHosts: true
  }
 });