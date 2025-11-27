import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For development server
  server: {
    host: true, 
    port: 5173, 
  },

  // For preview after build
  preview: {
    host: "0.0.0.0", 
    port: 4173, 
    strictPort: false,
  },
});
