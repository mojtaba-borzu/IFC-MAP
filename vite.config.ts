import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    define: {
      "process.env": {},
      "import.meta.env": {},
    },
    build: {
      outDir: "build",
    },
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 3000,
      open: true, // this will open directly to your browser
    },
    preview: {
      port: 3000,
      open: true, // this will open directly to your browser
    },
  };
});
