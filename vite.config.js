import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
// 修复导入错误：分开引入
import { fileURLToPath } from 'url'

// ESM 获取当前目录
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    // 新增：同时打包 index.html + admin.html
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        admin: path.resolve(__dirname, 'admin.html')
      }
    }
  },
  server: {
    port: 5173,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})