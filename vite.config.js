import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@fortawesome/free-brands-svg-icons"], // Make sure to include the Font Awesome package
  },
});


