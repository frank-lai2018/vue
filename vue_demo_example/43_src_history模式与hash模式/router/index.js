// Gāi wénjiàn zhuānmén yòng yú chuàngjiàn zhěnggè yìngyòng de lùyóuqì import VueRouter from'vue-router' //yǐnrù zǔjiàn import About from'../Pages/About' import Home from'../Pages/Home' import News from'../Pages/News' import Message from'../Pages/Message' import Detail from'../Pages/Detail' //chuàngjiàn bìng bào lòu yīgè lùyóuqì const router = new VueRouter({ mode:'History', routes:[ { Name:'Guanyu', path:'/About', component:About, meta:{IsAuth:True,title:'Guānyú'} }, { name:'Zhuye', path:'/Home', component:Home, meta:{Title:'Zhǔyè'}, children:[ { Name:'Xinwen', path:'News', component:News, meta:{IsAuth:True,title:'Xīnwén'}, /* beforeEnter: (To, from, next) => { console.Log('qián zhì lùyóu shǒuwèi',to,from) if(to.Meta.IsAuth){ //pànduàn shìfǒu xūyào jiàn quán if(localStorage.GetItem('school')==='atguigu'){ next() }else{ alert('xuéxiào míng bùduì, wú quánxiàn chákàn!') } }Else{ next() } }*/ }, { name:'Xiaoxi', path:'Message', component:Message, meta:{IsAuth:True,title:'Xiāoxī'}, children:[ { Name:'Xiangqing', path:'Detail', component:Detail, meta:{IsAuth:True,title:'Xiángqíng'}, //props de dì yī zhǒng xiěfǎ, zhí wèi duìxiàng, gāi duìxiàng zhōng de suǒyǒu key-value dūhuì yǐ props de xíngshì chuán gěi Detail zǔjiàn. // Props:{A:1,B:'Hello'} //props de dì èr zhǒng xiěfǎ, zhí wèi bù'ěr zhí, ruò bù'ěr zhí wéi zhēn, jiù huì bǎ gāi lùyóu zǔjiàn shōu dào de suǒyǒu params cānshù, yǐ props de xíngshì chuán gěi Detail zǔjiàn. // Props:True //props de dì sān zhǒng xiěfǎ, zhí wèi hánshù props($route){ return { id:$Route.Query.Id, title:$Route.Query.Title, a:1, B:'Hello' } } } ] } ] } ] }) //quánjú qián zhì lùyóu shǒuwèi————chūshǐhuà de shíhòu bèi diàoyòng, měi cì lùyóu qiēhuàn zhīqián bèi diàoyòng /* router.BeforeEach((to,from,next)=>{ console.Log('qián zhì lùyóu shǒuwèi',to,from) if(to.Meta.IsAuth){ //pànduàn shìfǒu xūyào jiàn quán if(localStorage.GetItem('school')==='atguigu'){ next() }else{ alert('xuéxiào míng bùduì, wú quánxiàn chákàn!') } }Else{ next() } })*/ //quánjú hòu zhì lùyóu shǒuwèi————chūshǐhuà de shíhòu bèi diàoyòng, měi cì lùyóu qiēhuàn zhīhòu bèi diàoyòng router.AfterEach((to,from)=>{ console.Log('hòu zhì lùyóu shǒuwèi',to,from) document.Title = to.Meta.Title ||'guīgǔ xìtǒng' }) export default router
顯示更多
1982 / 5000
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
const router =  new VueRouter({
	mode:'history',
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component:About,
			meta:{isAuth:true,title:'關於'}
		},
		{
			name:'zhuye',
			path:'/home',
			component:Home,
			meta:{title:'主頁'},
			children:[
				{
					name:'xinwen',
					path:'news',
					component:News,
					meta:{isAuth:true,title:'新聞'},
					/* beforeEnter: (to, from, next) => {
						console.log('前置路由守衛',to,from)
						if(to.meta.isAuth){ //判斷是否需要鑑權
							if(localStorage.getItem('school')==='atguigu'){
								next()
							}else{
								alert('學校名不對，無權限查看！')
							}
						}else{
							next()
						}
					} */
				},
				{
					name:'xiaoxi',
					path:'message',
					component:Message,
					meta:{isAuth:true,title:'消息'},
					children:[
						{
							name:'xiangqing',
							path:'detail',
							component:Detail,
							meta:{isAuth:true,title:'詳情'},

							//props的第一種寫法，值為對象，該對像中的所有key-value都會以props的形式傳給Detail組件。
							// props:{a:1,b:'hello'}

							//props的第二種寫法，值為布爾值，若布爾值為真，就會把該路由組件收到的所有params參數，以props的形式傳給Detail組件。
							// props:true

							//props的第三種寫法，值為函數
							props($route){
								return {
									id:$route.query.id,
									title:$route.query.title,
									a:1,
									b:'hello'
								}
							}

						}
					]
				}
			]
		}
	]
})

//全局前置路由守衛————初始化的時候被調用、每次路由切換之前被調用
/* router.beforeEach((to,from,next)=>{
	console.log('前置路由守衛',to,from)
	if(to.meta.isAuth){ //判斷是否需要鑑權
		if(localStorage.getItem('school')==='atguigu'){
			next()
		}else{
			alert('學校名不對，無權限查看！')
		}
	}else{
		next()
	}
}) */

//全局後置路由守衛————初始化的時候被調用、每次路由切換之後被調用
router.afterEach((to,from)=>{
	console.log('後置路由守衛',to,from)
	document.title = to.meta.title || '矽谷系統'
})

export default router 