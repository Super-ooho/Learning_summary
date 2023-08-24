// 实际前端开发：
// 模块化：js模块化，css模块化，其他资源模块化
// 组件化：复用现有的UI结构、样式和行为
// 规范化：目录结构的划分、编码规范、接口规范、文档规范等
// 自动化：自动化构建、部署、测试

// 前端工程化解决方案：
// 早期grunt、gulp
// 目前webpack、vite

// webpack：是前端项目工程化的具体解决方案，是基于node.js开发出来的打包工具，因此在它的配置文件中，支持使用node.js相关的语法和模块进行webpack的个性化配置
// 功能：友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器JavaScript的兼容性、性能优化等强大功能
// 好处：让程序员把工作重心放到具体功能实现上，提高前端开发效率和项目的可维护性
// 注意：目前企业级的前端项目开发中，绝大多数的项目都是基于webpack进行打包构建的
// 安装：npm i webpack5.5.1 webpack-cli@4.2.0 -D
// 配置：
// 1.在项目根目录中，创建名为webpack.config.js文件，并初始化如下基本配置
// module.exports = {
//     mode: 'development'
// }

// 补充：
// development：开发环境，不会对打包生成的文件进行代码压缩和性能优化，打包速度快，适合开发阶段使用
// production：生产环境，会对打包生成的文件进行代码压缩和性能优化，打包速度很慢，仅适合在项目发布阶段使用



// 2.在package.json的scripts节点下，新增dev脚本如下：
// "scripts": {
//     "dev": "webpack"
// }
// scripts节点下的脚本，可以通过npm run执行，例如npm run dev
// 3.在终端中运行npm run dev命令，启动webpack进行项目的打包构建

// 执行webpack命令之后，就会读取webpack.config.js配置文件，读取里面的配置项，根据配置项对项目进行打包构建，目录中多了一个dist文件夹，里面有一个main.js文件，将有兼容性的代码转换成没有兼容性问题的js代码

// webpack中的默认约定：
// 1.默认打包入口文件为src里面的index.js
// 2.默认输出文件路径为dist中的main.js
// 可以在webpack.config.js中修改打包的默认约定

// webpack中的插件
// 通过安装和配置第三方插件，可以拓展webpack的能力，从而让webpack用起来更方便，常用的有两个：
// 1.webpack-dev-server：类似于node.js中的nodemon，修改源代码会自动进行项目打包构建，安装完成后在webpack配置文件中在dev配置项后面添加serve参数
// webpack进行实时打包之后，打包生成的文件不存放在output节点指定路径下，而是存放在内存中，提高性能
// 如何访问？放到了项目根目录中看不到虚拟的文件中，文件名和output中指定的文件名一样，只是路径不同
// 通过devServer节点对该插件进行更多配置
// devServer:{
//     // 自动打开浏览器
//     open:true,
//     // 默认地址
//     host:'127.0.1',
//     // 默认端口号
//     port:80
// }

// 2.html-webpack-plugin
// 通过此插件可以将src目录下的index.html首页，复制一份到项目根目录中，下次访问localhost:8080端口就不需要再点击src文件夹了，直接能看到首页
// 将复制的文件放到了内存中，所以在根目录下看不到，将打包好的js文件自动注入到index.html中，不需要手动引入bundle.js了

// loader概述
// webpack默认只能打包处理以.js后缀结尾的模块，其他的非.js后缀结尾的模块需要调用相应的loader加载器才可以正常打包，否则会报错
// 作用：协助webpack打包处理特定的文件模块，比如css-loader,less-loader,babel-loader可以打包处理webpack无法处理的高级JS语法

// 打包处理css文件：
// 安装：npm i style-loader@2.0.0 css-loader@5.0.1 -D
// 使用：在webpack配置文件的module的rules数组中，添加loader规则
// test表示匹配的类型，use表示调用的loader，use中的loader顺序是固定的，多个loader调用顺序是从后往前的
// module: {
//     rules: [
//         { test: /\.css$/, use: ['style-loader', 'css-loader'] }
//     ]
// }

// 打包处理less文件：
// 安装：npm i less-loader@7.1.0 less@3.12.2 -D
// 使用：在webpack配置文件的module的rules数组中，添加loader规则
// test表示匹配的类型，use表示调用的loader，use中的loader顺序是固定的，多个loader调用顺序是从后往前的
// module: {
//     rules: [
//         { test: /\.css$/, use: ['style-loader', 'css-loader'] }
//         { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
//     ]
// }


// 打包处理css文件中与url路径相关的文件：
// 安装：npm i url-loader@4.1.1 file-loader@6.2.0 -D
// 使用：在webpack配置文件的module的rules数组中，添加loader规则
// test表示匹配的类型，use表示调用的loader，use中的loader顺序是固定的，多个loader调用顺序是从后往前的
// module: {
//     rules: [
//         { test: /\.css$/, use: ['style-loader', 'css-loader'] }
//         { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
//?之后的是loader的参数项，limit用来指定图片的大小，单位是字节，只有<=limit大小的图片才会被转为base64格式的图片
//         { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' }
//     ]
// }

// loader的另一种配置方式
// module: {
//     rules: [
//         { test: /\.css$/, use: ['style-loader', 'css-loader'] },
//         { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
//         // ? 之后的是loader的参数项，limit用来指定图片的大小，单位是字节，只有 <= limit大小的图片才会被转为base64格式的图片
//         {
//             test: /\.jpg|png|gif$/, use: {
//                 loader: 'url-loader',
//                 options: {
//                     limit: 22229
//                 }
//             }
//         }
//     ]
// }

// 打包处理高级js语法相关的文件：
// 安装：。。。.。。很多




// 项目的打包发布
// 项目开发完成后对项目打包发布原因：
// 1.开发环境下，打包生成的文件存放于内存中，无法获取到最终打包生成的文件
// 2.开发环境下，打包生成的文件不会进行代码压缩和性能优化

// 配置webpack的打包发布
// 在pakage.json文件的scripts节点下，新增build命令如下
// "build":"webpack --mode production"
// 打包生成的dist文件夹里的文件很杂乱，存放规整，在webpack配置文件的output节点中，进行配置
// 注意：每次打包前先把以前打包的dist文件删除掉，自动清理需要安装并配置插件clean0webpack-plugin
// output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'js/bundle.js'
// }

// 企业级项目的打包发布时，远比刚才的方式要复杂得多，主要流程如下：
// 生成打包报告，根据报告分析具体的优化方案
// Tree-Shaking
// 为第三方库启用CDN加载
// 配置组件的按需加载
// 开启路由懒加载
// 自定制首页内容




// 生产环境遇到的问题：前端项目在投入生产环境之前，都需要对JavaScript源代码进行压缩混淆，从而减小文件的体积，提高文件的加载效率。此时就不可避免的产生了另一个问题:对压缩混淆之后的代码除错 (debug)是一件极其困难的事情，比如变量被替换成没有任何语义的名称，空行和注释被剔除
// Source Map：是一个信息文件，存储压缩前后代码对应关系，方便后期调试
// 开发环境下默认启动Source Map功能，控制台会定位出错的代码行数，但是记录的是生成后代码的位置，不是源代码的位置
// 解决方法是在webpack配置文件中添加如下配置
// module: {
//     mode: 'development',
//     devtool: 'eval-source-map'
// }

// 生产环境下，需要省略devtool选项，能够防止原始代码通过Source Map的形式暴露给别有所图的人
// 但是不利于调试，真正的做法是将devtool的值设置为nosources-source-map，只定位行数，不暴露代码

// 最佳方案：开发环境下，将devtool的值设置为eval-source-map，生产环境下，关闭Source Map或将devtool的值设置为nosources-source-map
// 实际开发中，不需要自己配置webpack，会使用命令行工具（俗称CLI）一键生成带有webpack的项目
// 开箱即用，所有的webpack配置项都是现成的，自己能看懂就行