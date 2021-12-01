<Template> <div> <ul> <li v-for="m in messageList" :Key="m.Id"> <!-- Tiào zhuǎn lùyóu bìng xiédài params cānshù,to de zìfú chuàn xiěfǎ --> <!-- <Router-link:To="`/home/message/detail/${m.Id}/${m.Title}`">{{m.Title}}</router-link>&nbsp;&nbsp; --> <!-- Tiào zhuǎn lùyóu bìng xiédài params cānshù,to de duìxiàng xiěfǎ --> <router-link:To="{ name:'Xiangqing', query:{ Id:M.Id, title:M.Title } }"> {{m.Title}} </router-link> <button@click="pushShow(m)">push chákàn </button> <button@click="replaceShow(m)">replace chákàn </button> </li> </ul> <hr> <router-view></router-view> </div> </template> <script> export default { name:'Message', data() { return { messageList:[ {Id:'001',Title:'Xiāoxī 001'}, {id:'002',Title:'Xiāoxī 002'}, {id:'003',Title:'Xiāoxī 003'} ] } }, methods: { PushShow(m){ this.$Router.Push({ name:'Xiangqing', query:{ Id:M.Id, title:M.Title } }) }, replaceShow(m){ this.$Router.Replace({ name:'Xiangqing', query:{ Id:M.Id, title:M.Title } }) } }, beforeDestroy() { // console.Log('Message zǔjiàn jíjiāng bèi xiāohuǐle') }, } </script>
顯示更多
1136 / 5000
翻譯結果
<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 跳轉路由並攜帶params參數，to的字符串寫法 -->
				<!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

				<!-- 跳轉路由並攜帶params參數，to的對象寫法 -->
				<router-link :to="{
					name:'xiangqing',
					query:{
						id:m.id,
						title:m.title
					}
				}">
					{{m.title}}
				</router-link>
				<button @click="pushShow(m)">push查看</button>
				<button @click="replaceShow(m)">replace查看</button>
			</li>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data() {
			return {
				messageList:[
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
			}
		},
		methods: {
			pushShow(m){
				this.$router.push({
					name:'xiangqing',
					query:{
						id:m.id,
						title:m.title
					}
				})
			},
			replaceShow(m){
				this.$router.replace({
					name:'xiangqing',
					query:{
						id:m.id,
						title:m.title
					}
				})
			}
		},
		beforeDestroy() {
			// console.log('Message組件即將被銷毀了')
		},
	}
</script> 