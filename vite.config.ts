import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/vite-ci-cd/", // Change this to match your repo name
  plugins: [react()],
});
