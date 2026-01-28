import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // For development server
  server: {
    host: "dashboard.brikky.net",  
    port: 5173,
  },

  // For preview after build
  preview: {
    host: "dashboard.brikky.net",
    port: 4173,
    strictPort: false,
  },



//   server: {
//   host: "localhost",  // or "0.0.0.0"
//   port: 5173,
// },
// preview: {
//   host: "localhost",
//   port: 4173,
//   strictPort: false,
// },

});
