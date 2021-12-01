<template>
	<div class="school">
		<h2>學校名稱：{{name}}</h2>
		<h2>學校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'萊豬黨',
				address:'萊豬總部'
			}
		},
	}
</script>

<style>
	.school{
		background-color: gray;
	}
</style>