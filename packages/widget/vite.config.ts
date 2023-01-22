import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"

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
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Counter": "./src/widgets/counter.widget.tsx",
      },
      shared: {
        react: {
          requiredVersion: "^18.2.0",
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
        },
      },
    }),
  ],
})
