import { defineConfig } from 'vite'

export default defineConfig({
  // 静态资源根目录，保证 /albums 路径全局可访问
  publicDir: 'public',
  // 适配 EdgeOne 根路径部署
  base: './',
  server: {
    open: '/index.html',
    cors: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})