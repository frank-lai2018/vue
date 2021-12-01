<Template> <div> <button@click="getStudents">huòqǔ xuéshēng xìnxī </button> <button@click="getCars">huòqǔ qìchē xìnxī </button> </div> </template> <script> import axios from'axios' export default { name:'App', methods: { GetStudents(){ axios.Get('http://Localhost:8080/Students').Then( response => { console.Log('qǐngqiú chénggōngle',response.Data) }, error => { console.Log('qǐngqiú shībàile',error.Message) } ) }, getCars(){ axios.Get('http://Localhost:8080/Demo/cars').Then( response => { console.Log('qǐngqiú chénggōngle',response.Data) }, error => { console.Log('qǐngqiú shībàile',error.Message) } ) } }, } </script>
顯示更多
656 / 5000
翻譯結果
<template>
	<div>
		<button @click="getStudents">獲取學生信息</button>
		<button @click="getCars">獲取汽車信息</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'App',
		methods: {
			getStudents(){
				axios.get('http://localhost:8080/students').then(
					response => {
						console.log('請求成功了',response.data)
					},
					error => {
						console.log('請求失敗了',error.message)
					}
				)
			},
			getCars(){
				axios.get('http://localhost:8080/demo/cars').then(
					response => {
						console.log('請求成功了',response.data)
					},
					error => {
						console.log('請求失敗了',error.message)
					}
				)
			}
		},
	}
</script> 