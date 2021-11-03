import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "styles": path.resolve(__dirname, "src/styles"),
      "components": path.resolve(__dirname, "src/components"),
      "utils": path.resolve(__dirname, "src/utils"),
      "apis": path.resolve(__dirname, "src/apis")
    }
  },
  server: {
    proxy: {
      '/api': 'https://www.qqlykm.cn'
    }
  }
})