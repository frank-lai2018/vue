//Yǐnrù Vue import Vue from'vue' //yǐnrù App import App from'./App.Vue' //wánzhěng yǐnrù //yǐnrù ElementUI zǔjiàn kù // import ElementUI from'element-ui'; //yǐnrù ElementUI quánbù yàngshì // import'element-ui/lib/theme-chalk/index.Css'; //àn xū yǐnrù import {Button,Row,DatePicker} from'element-ui'; //guānbì Vue de shēngchǎn tíshì Vue.Config.ProductionTip = false //yìngyòng ElementUI // Vue.Use(ElementUI); Vue.Component('atguigu-button', Button); Vue.Component('atguigu-row', Row); Vue.Component('atguigu-date-picker', DatePicker); //chuàngjiàn vm new Vue({ el:'#App', render: H => h(App), })
顯示更多
524 / 5000
翻譯結果
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//完整引入
//引入ElementUI組件庫
// import ElementUI from 'element-ui';
//引入ElementUI全部樣式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button,Row,DatePicker } from 'element-ui';

//關閉Vue的生產提示
Vue.config.productionTip = false

//應用ElementUI
// Vue.use(ElementUI);
Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguigu-date-picker', DatePicker);

//創建vm
new Vue({
	el:'#app',
	render: h => h(App),
}) 