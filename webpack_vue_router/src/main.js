
import Vue from "vue";

import router from "./VueRouter.js";

import app from "./App.vue"

// 1. 導入 vue-router 包
import VueRouter from "vue-router";

// 2. 手動安裝 VueRouter
Vue.use(VueRouter);

let vm = new Vue({
  el:"#app",
  data:{},
  render: c =>c(app),// render 會把 el 指定的容器中，所有的內容都清空覆蓋，所以 不要 把 路由的 router-view 和 router-link 直接寫到 el 所控制的元素中
  router
})

// 注意： App 這個組件，是通過 VM 實例的 render 函數，渲染出來的， render 函數如果要渲染 組件， 渲染出來的組件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 組件， 是通過 路由匹配監聽到的，所以， 這兩個組件，只能展示到 屬於 路由的 <router-view></router-view> 中去；