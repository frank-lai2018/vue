<template>
	<div class="school">
		<h2>學校名稱：{{name}}</h2>
		<h2>學校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'尚矽谷',
				address:'北京',
			}
		},
		mounted() {
			// console.log('School',this)
			/* this.$bus.$on('hello',(data)=>{
				console.log('我是School組件，收到了數據',data)
			}) */
			this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
				console.log(this)
				// console.log('有人發布了hello消息，hello消息的回調執行了',msgName,data)
			})
		},
		beforeDestroy() {
			// this.$bus.$off('hello')
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>