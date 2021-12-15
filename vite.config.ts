import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
// import babel from 'vite-babel-plugin';
import legacy from '@vitejs/plugin-legacy'
import { loadEnv } from 'vite';
import { resolve } from 'path';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  console.log('mode', mode);
  
  return defineConfig({
      base: './', /* 这个就是webpack里面的publicPath */
      plugins: [
        vue(), 
        eslintPlugin(),
        // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
        /* 利用了babel, 来解决转成ES5的代码，因为esbuild 最低只支持到ES6 */
        legacy({
          targets: ['defaults', 'not IE 11']
        }),
        // https://github.com/antfu/vite-plugin-optimize-persist
        PkgConfig(),
        OptimizationPersist()
      ],
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
            target: 'https://jsonplaceholder.typicode.com/todos',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          },
          '/api2': {
            target: 'https://jsonplaceholder.typicode.com/users',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api2/, '')
          },
          // 正则表达式写法
          '^/fallback/.*': {
            target: 'https://jsonplaceholder.typicode.com/todos',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/fallback/, '')
          }
        },
      },
      resolve: {
        /* 设置路径别名 */
        alias: {
          'src': resolve(__dirname, 'src'),
          '/images': 'src/assets/images'
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
        // target: 'es2015', /*  */
        // terserOptions: {
        //   compress: {
        //     defaults: false
        //   }
        // },
        brotliSize: false, /* 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能 */
        outDir: 'dist', /* 指定输出路径 */
        cssCodeSplit: false, /* 整个项目中的所有 CSS 将被提取到一个 CSS 文件中 */
        chunkSizeWarningLimit: 1500, /* chunk 大小警告的限制（以 kbs 为单位） */
        sourcemap: true, /* 构建后是否生成 source map 文件 */
        manifest: true, /*  */
        assetsDir: 'static/img/', /* 指定生成静态资源的存放路径 */
        emptyOutDir: true, /* 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录 */
        rollupOptions: {
          output: {
              chunkFileNames: 'static/js/[name].[hash].js',
              entryFileNames: 'static/js/[name].[hash].js',
              assetFileNames: 'static/[ext]/[name].[hash].[ext]',
          },
        }
      }
  })
}
// export default defineConfig({
//   plugins: [vue()]
// })
