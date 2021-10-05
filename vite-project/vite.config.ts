import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  return defineConfig({
      plugins: [vue()],
      server: {
        host: '0.0.0.0', /* 指定服务器主机名 */
        port: 8087, /* 指定服务器端口 */
        strictPort: true, /* 设为 true 时若端口已被占用则会直接退出 */
        // https: true, 
        open: '/', /* 在服务器启动时自动在浏览器中打开应用程序 */ 
        hmr: {
          overlay: false, /* 为 false 可以禁用服务器错误遮罩层 */
        },
        proxy: {
          // 字符串简写写法
          '/foo': 'http://localhost:4567/foo',
          // 选项写法
          '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          },
          // 正则表达式写法
          '^/fallback/.*': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/fallback/, '')
          }
        },
      },
      resolve: {
        /* 设置路径别名 */
        alias: {
          'src': path.resolve(__dirname, './src')
        },
        // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'] /* 默认这些，不建议.vue */
      },
      css: {
        /* CSS 预处理器 */
        preprocessorOptions: {
          scss: {
            additionalData: '@import "src/assets/styles/global.scss";'
          }
        }
      },
      build: {
        chunkSizeWarningLimit: 1500, /* chunk 大小警告的限制（以 kbs 为单位） */
      }

  })
}
// export default defineConfig({
//   plugins: [vue()]
// })
