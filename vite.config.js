import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // For development server
  server: {
    host: "dashboard.brikky.net",  // Set the host to your desired domain
    port: 5173,
  },

  // For preview after build
  preview: {
    host: "dashboard.brikky.net",  // Set the host to your desired domain
    port: 4173,
    strictPort: false,
  },
});
