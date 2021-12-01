<template>
	<div>
		<h2 @click="showName">學生姓名：{{name}}</h2>
		<h2>學生性別：{{sex}}</h2>
	</div>
</template>

<script>
	// import {hunhe,hunhe2} from '../mixin'

	export default {
		name:'Student',
		data() {
			return {
				name:'張三',
				sex:'男'
			}
		},
		// mixins:[hunhe,hunhe2]
	}
</script>