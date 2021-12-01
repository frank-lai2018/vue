<template>
	<div>
		<h2>學生姓名：{{name}}</h2>
		<h2>學生年齡：{{age}}</h2>
	</div>
</template>

<script>
	 export default {
		name:'Student',
		data(){
			return {
				name:'張三',
				age:18
			}
		}
	}
</script>