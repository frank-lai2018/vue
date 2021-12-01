<template>
	<div class="container">
		<Category title="美食" >
			<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<a slot="footer" href="http://www.atguigu.com">更多美食</a>
		</Category>

		<Category title="遊戲" >
			<ul slot="center">
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
			<div class="foot" slot="footer">
				<a href="http://www.atguigu.com">單機遊戲</a>
				<a href="http://www.atguigu.com">網絡遊戲</a>
			</div>
		</Category>

		<Category title="電影">
			<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<template v-slot:footer>
				<div class="foot">
					<a href="http://www.atguigu.com">經典</a>
					<a href="http://www.atguigu.com">熱門</a>
					<a href="http://www.atguigu.com">推薦</a>
				</div>
				<h4>歡迎前來觀影</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
		data() {
			return {
				foods:['火鍋','燒烤','小龍蝦','牛排'],
				games:['紅色警戒','穿越火線','勁舞團','超級瑪麗'],
				films:['《教父》','《拆彈專家》','《你好，李煥英》','《尚矽谷》']
			}
		},
	}
</script>

<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>