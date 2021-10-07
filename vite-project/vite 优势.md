# vite 优势

Vite 主要有两大主要优势:


1. 利用浏览器内置 ES Module 的支持(script 标签加上属性 type="module" 即可)，浏览器直接向 dev server 逐个请求各个模块，而不需要提前把所有文件打包。


2. 借助 esbuild 超快的编译速度把第三方库进行预构建，一方面将零散的文件打到一起，减少网络请求，另一方面全面转换为 ESM 模块语法，以适配浏览器内置的 ESM 支持


## HMR(Hot Module Replacement)热更新又称热替换

