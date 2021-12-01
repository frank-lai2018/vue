<template>
	<div>
		<h2 @click="showName">學校名稱：{{name}}</h2>
		<h2>學校地址：{{address}}</h2>
	</div>
</template>

<script>
	//引入一個hunhe
	// import {hunhe,hunhe2} from '../mixin'

	export default {
		name:'School',
		data() {
			return {
				name:'拉拉拉',
				address:'萊豬',
				x:666
			}
		},
		// mixins:[hunhe,hunhe2],
	}
</script>