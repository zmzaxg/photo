import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
// 仅新增两行兼容ESM获取路径，原有import不动
import { fileURLToPath, dirname } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    // 下面整段是纯新增，原有build内部配置完全保留不动
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