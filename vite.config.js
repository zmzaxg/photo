import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  publicDir: 'public',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // 把 admin.html 也作为入口打包输出
      input: {
        main: './index.html',
        admin: './admin.html'
      }
    }
  }
})