// Gāi wénjiàn zhuānmén yòng yú chuàngjiàn zhěnggè yìngyòng de lùyóuqì import VueRouter from'vue-router' //yǐnrù zǔjiàn import About from'../Pages/About' import Home from'../Pages/Home' import News from'../Pages/News' import Message from'../Pages/Message' import Detail from'../Pages/Detail' //chuàngjiàn bìng bào lòu yīgè lùyóuqì export default new VueRouter({ routes:[ { Path:'/About', component:About }, { path:'/Home', component:Home, children:[ { Path:'News', component:News, }, { path:'Message', component:Message, children:[ { Path:'Detail', component:Detail, } ] } ] } ] })
顯示更多
605 / 5000
翻譯結果
// 該文件專門用於創建整個應用的路由器
import VueRouter from 'vue-router'
//引入組件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//創建並暴露一個路由器
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News,
				},
				{
					path:'message',
					component:Message,
					children:[
						{
							path:'detail',
							component:Detail,
						}
					]
				}
			]
		}
	]
}) 