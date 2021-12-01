<template>
	<div>
		<h2>{{name}}</h2>
		<h2>{{sex}}</h2>
		<input type="text" v-fbind:value="name">
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'FRANK',
				sex:'男'
			}
		},
	}
</script>