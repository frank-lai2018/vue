
// 1.npm i vue -S//S代表安裝於專案用
// 2.導包import Vue from "vue"


// 在webpack 中嘗試使用 Vue：
// 注意： 在 webpack 中， 使用 import Vue from 'vue' 導入的 Vue 構造函數，功能不完整，只提供了 runtime-only 的方式，並沒有提供 像網頁中那樣的使用方式
import Vue from "vue"

// import Vue from '../node_modules/vue/dist/vue.js'
// 回顧 包的查找規則：
// 1. 找 項目根目錄中有沒有 node_modules 的文件夾
// 2. 在 node_modules 中 根據包名，找對應的 vue 文件夾
// 3. 在 vue 文件夾中，找 一個叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一個 main 屬性【main屬性指定了這個包在被加載時候，的入口文件】


import login from "./login.vue"
// 默認，webpack 無法打包 .vue 文件，需要安裝 相關的loader：
// cnpm i vue-loader vue-template-compiler -D
// 在配置文件中，新增loader哦配置項 { test:/\.vue$/, use: 'vue-loader' }

// let login={
//   template:"<h1>login</h1>"
// }

let vm = new Vue({
  el:"#app",
  data() {
    return {
      msg:"123"
    }
  },
  // components:{
  //   login
  // }
  render: function(c){
    return c(login);
  }

})


// 總結梳理： webpack 中如何使用 vue :
// 1. 安裝vue的包： cnpm i vue -S
// 2. 由於 在 webpack 中，推薦使用 .vue 這個組件模板文件定義組件，所以，需要安裝 能解析這種文件的 loader cnpm i vue-loader vue-template-complier -D
// 3. 在 main.js 中，導入 vue 模塊 import Vue from 'vue'
// 4. 定義一個 .vue 結尾的組件，其中，組件有三部分組成： template script style
// 5. 使用 import login from './login.vue' 導入這個組件
// 6. 創建 vm 的實例 var vm = new Vue({ el: '#app', render: c => c(login) })
// 7. 在頁面中創建一個 id 為 app 的 div 元素，作為我們 vm 實例要控制的區域；