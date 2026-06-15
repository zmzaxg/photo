import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // 开发服务配置
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },

  // 静态资源：根目录 albums 作为可访问静态目录
  publicDir: path.resolve(__dirname, "./albums"),

  // 打包配置（EdgeOne/GitHub 自动构建专用）
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
  },

  // 基础路径：适配 EdgeOne 根域名/子路径部署
  base: "./",

  // 全局别名，统一资源路径
  resolve: {
    alias: {
      "@albums": path.resolve(__dirname, "./albums"),
    },
  },
});
