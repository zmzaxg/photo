import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: __dirname,
  publicDir: path.resolve(__dirname, './albums'),

  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      // 把 admin.html、login.html 都打到 dist 根目录
      input: {
        index: path.resolve(__dirname, 'index.html'),
        login: path.resolve(__dirname, 'login.html'),
        admin: path.resolve(__dirname, 'admin.html')
      }
    }
  },

  base: './',

  resolve: {
    alias: {
      '@albums': path.resolve(__dirname, './albums')
    }
  }
})