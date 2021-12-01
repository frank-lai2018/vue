//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false



//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
  store,
	beforeCreate() {
		Vue.prototype.$bus = this
	}
})