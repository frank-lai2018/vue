<template>
	<div>
		<h2>學校名稱：{{name | mySlice}}</h2>
		<h2>學校地址：{{address}}</h2>
		<button @click="test">點我測試一個hello方法</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'萊豬',
				address:'萊豬總部',
			}
		},
		methods: {
			test(){
				this.hello()
			}
		},
	}
</script>