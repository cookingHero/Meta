import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir: string) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('./src'),  // 设置 `@` 指向 `src` 目录
      views: pathResolve('./src/views'), // 设置 `views` 指向 `./src/views` 目录，下同
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets'),
    },
  },
  server: {
    port: 4000, // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
    open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
    cors: true, // 为开发服务器配置 CORS，配置为允许跨域

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:8000',    // 后台服务地址
    //     changeOrigin: true, // 是否允许不同源
    //     secure: false,      // 支持https
    //     rewrite: path => path.replace(/^/api /, '')
    //   }
    // }
  },
  build: {
    outDir: 'dist'
  }
})
