
import $ from "jquery"

// 注意： 如果要通過路徑的形式，去引入 node_modules 中相關的文件，可以直接省略 路徑前面的 node_modules 這一層目錄，直接寫 包的名稱，然後後面跟上具體的文件路徑
// 不寫 node_modules 這一層目錄 ，默認 就會去 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'

// 使用 import 語法，導入 CSS樣式表
import './css/index.css'
import './css/index.less'
// import './css/index.scss'
// 注意： webpack, 默認只能打包處理 JS 類型的文件，無法處理 其它的非 JS 類型的文件；
// 如果要處理 非JS類型的文件，我們需要手動安裝一些 合適 第三方 loader 加載器；
// 1. 如果想要打包處理 css 文件，需要安裝 cnpm i style-loader css-loader -D
// 2. 打開webpack.config.js 這個配置文件，在裡面，新增一個配置節點，叫做module, 它是一個對象；在這個module 對象身上，有個rules 屬性，這個rules 屬性是個數組；這個數組中，存放了，所有第三方文件的匹配和處理規則；

// 注意： webpack 處理第三方文件類型的過程：
// 1. 發現這個 要處理的文件不是JS文件，然後就去 配置文件中，查找有沒有對應的第三方 loader 規則
// 2. 如果能找到對應的規則， 就會調用 對應的 loader 處理 這種文件類型；
// 3. 在調用loader 的時候，是從後往前調用的；
// 4. 當最後的一個 loader 調用完畢，會把 處理的結果，直接交給 webpack 進行 打包合併，最終輸出到 bundle.js 中去

$(function () {
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', function () {
      return '#' + 'D97634'
    })
  })


  // 使用 webpack-dev-server 這個工具，來實現自動打包編譯的功能
// 1. 運行 npm i webpack-dev-server -D 把這個工具安裝到項目的本地開發依賴
// 2. 安裝完畢後，這個 工具的用法， 和 webpack 命令的用法，完全一樣
// 3. 由於，我們是在項目中，本地安裝的webpack-dev-server ， 所以，無法把它當作腳本命令，在powershell 終端中直接運行；（只有那些安裝到全局-g 的工具，才能在終端中正常執行）
// 4. 注意： webpack-dev-server 這個工具，如果想要正常運行，要求，在本地項目中，必須安裝 webpack
// 5. webpack-dev-server 幫我們打包生成的bundle.js 文件，並沒有存放到實際的物理磁盤上；而是，直接託管到了電腦的內存中，所以，我們在項目根目錄中，根本找不到這個打包好的bundle.js;
// 6. 我們可以認為， webpack-dev-server 把打包好的文件，以一種虛擬的形式，託管到了咱們項目的根目錄中，雖然我們看不到它，但是，可以認為， 和dist src node_modules 平級，有一個看不見的文件，叫做bundle.js

// class 關鍵字，是ES6中提供的新語法，是用來 實現 ES6 中面向對象編程的方式
class Person {
    // 使用 static 關鍵字，可以定義靜態屬性
    // 所謂的靜態屬性，就是 可以直接通過 類名， 直接訪問的屬性
    // 實例屬性： 只能通過類的實例，來訪問的屬性，叫做實例屬性
    static info = { name: 'zs', age: 20 }
  }

// 在webpack 中，默認只能處理一部分ES6 的新語法，一些更高級的ES6語法或者ES7 語法，webpack 是處理不了的；這時候，就需要藉助於第三方的loader，來幫助webpack 處理這些高級的語法，當第三方loader 把高級語法轉為低級的語法之後，會把結果交給webpack 去打包到bundle.js 中
// 通過 Babel ，可以幫我們將 高級的語法轉換為 低級的語法
// 1. 在 webpack 中，可以運行如下兩套 命令，安裝兩套包，去安裝 Babel 相關的loader功能：
// 1.1 第一套包： cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// 1.2 第二套包： cnpm i babel-preset-env babel-preset-stage-0 -D
// 2. 打開 webpack 的配置文件，在 module 節點下的 rules 數組中，添加一個 新的 匹配規則：
// 2.1 { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ }
// 2.2 注意： 在配置 babel 的 loader規則的時候，必須 把 node_modules 目錄，通過 exclude 選項排除掉：原因有倆：
// 2.2.1 如果 不排除 node_modules， 則Babel 會把 node_modules 中所有的 第三方 JS 文件，都打包編譯，這樣，會非常消耗CPU，同時，打包速度非常慢；
// 2.2.2 哪怕，最終，Babel 把 所有 node_modules 中的JS轉換完畢了，但是，項目也無法正常運行！
// 3. 在項目的根目錄中，新建一個叫做.babelrc 的Babel 配置文件，這個配置文件，屬於JSON格式，所以，在寫.babelrc 配置的時候，必須符合JSON語法規範： 不能寫註釋，字符串必須用雙引號
// 3.1 在 .babelrc 寫如下的配置： 大家可以把 preset 翻譯成 【語法】 的意思
        // {
        // "presets": ["env", "stage-0"],
        // "plugins": ["transform-runtime"]
        // }
// 4. 了解： 目前，我們安裝的babel-preset-env, 是比較新的ES語法， 之前， 我們安裝的是babel-preset-es2015, 現在，出了一個更新的語法插件，叫做babel-preset -env ，它包含了所有的和es***相關的語法