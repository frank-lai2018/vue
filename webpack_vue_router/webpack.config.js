
const path = require('path')

//啟用熱更新第2部
const webpack= require('webpack');

// 導入在內存中生成 HTML 頁面的 插件
// 只要是插件，都一定要 放到 plugins 節點中去
// 這個插件的兩個作用：
// 1. 自動在內存中根據指定頁面生成一個內存的頁面
// 2. 自動，把打包好的 bundle.js 追加到頁面中去
const htmlWebpackPlugin=require('html-webpack-plugin');

// 這個配置文件，起始就是一個 JS 文件，通過 Node 中的模塊操作，向外暴露了一個 配置物件
module.exports={
    entry:path.join(__dirname,"./src/main.js"),//入口，表示要使用webpack打包哪個文件
    output:{//輸出文件的相關配置
        path:path.join(__dirname,"./dist"),//指定 打包好的文件 輸出到哪個目錄中去
        filename:"bundle.js" //這是指定 輸出文件的名稱

    },
    devServer:{//配置dev-server參數
        open:true,//自動打開瀏覽器
        port:3000,//設置運行端口
        contentBase: "src",//設置託管根路徑
        hot:true//啟用熱更新 第一步
    },
    plugins:[
        ////啟用熱更新第3部
        new webpack.HotModuleReplacementPlugin(),

        //創建一個 在內存中生成HTML 頁面的插件
        new htmlWebpackPlugin({
            //指定 模板頁面，將來會根據指定的頁面路徑，去生成內存中的 頁面
            template:path.join(__dirname,"./src/index.html"),
            //指定生成頁面的名稱
            filename:"index.html"
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            // limit 給定的值，是圖片的大小，單位是byte， 如果我們引用的圖片，大於或等於給定的limit值，則不會被轉為base64格式的字符串， 如果圖片小於給定的limit 值，則會被轉為base64的字符串
            {test:/\.(jpg|png|gif|jpeg)$/,use:"url-loader?limit=7631&name=[hash:8]-[name].[ext]"},
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 來轉換ES高級語法
            { test:/\.vue$/, use: 'vue-loader' }, // 
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被導入時候的包的路徑
          "vue$": "vue/dist/vue.js"
        }
      }





}
// 當我們在 控制台，直接輸入 webpack 命令執行的時候，webpack 做了以下幾步：
// 1. 首先，webpack 發現，我們並沒有通過命令的形式，給它指定入口和出口
// 2. webpack 就會去 項目的 根目錄中，查找一個叫做 `webpack.config.js` 的配置文件
// 3. 當找到配置文件後，webpack 會去解析執行這個 配置文件，當解析執行完配置文件後，就得到了 配置文件中，導出的配置對象
// 4. 當 webpack 拿到 配置對像後，就拿到了 配置對像中，指定的 入口 和 出口，然後進行打包構建；