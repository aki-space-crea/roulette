/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  base: "./",
  root: "./src",
  publicDir: "../public",
  build: {
    // root (= ./src) から見た相対パスで指定
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react(), VitePWA()],
  test: {
    // テスト環境を指定
    environment: "jsdom",
    // API をグローバルに使う
    globals: true,
    coverage: {
      // カバレッジ収集を有効化
      enabled: true,
      // テキスト（コンソール）と JSON 形式のサマリーで報告
      reporter: ["text", "json-summary"],
    },
  },
});
