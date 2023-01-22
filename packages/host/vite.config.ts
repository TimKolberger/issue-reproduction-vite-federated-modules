import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    minify: false,
    sourcemap: true,
  },
  plugins: [
    react(),
    federation({
      remotes: {
        remote_app: "http://localhost:3001/assets/remoteEntry.js",
        from: "vite",
        format: "esm",
      },
      shared: {
        react: {
          version: "^18.2.0",
        },
        "react-dom": {
          version: "^18.2.0",
        },
      },
    }),
  ],
});
