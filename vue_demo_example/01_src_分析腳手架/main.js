/* 
	該文件是整個項目的入口文件
*/
//引入Vue
import Vue from 'vue'
//引入App組件，它是所有組件的父組件
import App from './App.vue'
//關閉vue的生產提示
Vue.config.productionTip = false

/* 
	關於不同版本的Vue：
	
		1.vue.js與vue.runtime.xxx.js的區別：
				(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
				(2).vue.runtime.xxx.js是運行版的Vue，只包含：核心功能；沒有模板解析器。

		2.因為vue.runtime.xxx.js沒有模板解析器，所以不能使用template配置項，需要使用
			render函數接收到的createElement函數去指定具體內容。
*/

//創建Vue實例物件---vm
new Vue({
	el:'#app',
	//render函數完成了這個功能：將App組件放入容器中
  render: h => h(App),
	// render:q=> q('h1','你好啊')

	// template:`<h1>你好啊</h1>`,
	// components:{App},
})