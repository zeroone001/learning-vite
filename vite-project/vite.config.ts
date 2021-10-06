import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
import { loadEnv } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  console.log('mode', mode);
  
  return defineConfig({
      plugins: [vue(), eslintPlugin()],
      server: {
        host: '0.0.0.0', /* 指定服务器主机名 */
        port: parseInt(loadEnv(mode, process.cwd()).VITE_APP_PORT), /* 指定服务器端口 */
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
        assetsDir: 'resources', /* 指定生成静态资源的存放路径 */
        outDir: 'dist', /* 指定输出路径 */
        cssCodeSplit: false, /* 整个项目中的所有 CSS 将被提取到一个 CSS 文件中 */
        chunkSizeWarningLimit: 1500, /* chunk 大小警告的限制（以 kbs 为单位） */
        sourcemap: true, /* 构建后是否生成 source map 文件 */
        manifest: true, /*  */
      }

  })
}
// export default defineConfig({
//   plugins: [vue()]
// })
