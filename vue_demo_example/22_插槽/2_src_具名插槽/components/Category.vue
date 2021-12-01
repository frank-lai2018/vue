<template>
	<div class="category">
		<h3>{{title}}分類</h3>
		<!-- 定義一個插槽（挖個坑，等著組件的使用者進行填充） -->
		<slot name="center">我是一些默認值，當使用者沒有傳遞具體結構時，我會出現1</slot>
		<slot name="footer">我是一些默認值，當使用者沒有傳遞具體結構時，我會出現2</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['title']
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>