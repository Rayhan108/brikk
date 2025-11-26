import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For development server
  server: {
    host: true, // accept connections from network IPs
    port: 5173, // optional: default Vite port
  },
 
  // For preview after build
  preview: {
    host: '0.0.0.0',  // allow external access
    port: 4173,        // preview port
    strictPort: false, // if true, will fail if port is taken
  }
})