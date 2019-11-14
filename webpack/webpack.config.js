
const path = require('path')
// 這個配置文件，起始就是一個 JS 文件，通過 Node 中的模塊操作，向外暴露了一個 配置物件
module.exports={
    entry:path.join(__dirname,"./src/main.js"),//入口，表示要使用webpack打包哪個文件
    output:{//輸出文件的相關配置
        path:path.join(__dirname,"./dist"),//指定 打包好的文件 輸出到哪個目錄中去
        filename:"bundle.js" //這是指定 輸出文件的名稱

    }





// 當我們在 控制台，直接輸入 webpack 命令執行的時候，webpack 做了以下幾步：
// 1. 首先，webpack 發現，我們並沒有通過命令的形式，給它指定入口和出口
// 2. webpack 就會去 項目的 根目錄中，查找一個叫做 `webpack.config.js` 的配置文件
// 3. 當找到配置文件後，webpack 會去解析執行這個 配置文件，當解析執行完配置文件後，就得到了 配置文件中，導出的配置對象
// 4. 當 webpack 拿到 配置對像後，就拿到了 配置對像中，指定的 入口 和 出口，然後進行打包構建；
}