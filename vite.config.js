import { defineConfig } from 'vite'

export default defineConfig({
  // 适配 EdgeOne 静态站点，根路径为 /
  base: '/',
  // 静态资源目录 public，albums 直接对外访问
  publicDir: 'public',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    // 静态打包，适配 CDN/EdgeOne
    outDir: 'dist',
    emptyOutDir: true
  },
  // 允许 glob 动态导入图片目录
  optimizeDeps: {
    exclude: []
  }
})