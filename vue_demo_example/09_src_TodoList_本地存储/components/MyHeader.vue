<Template> <div class="todo-header"> <input type="text" placeholder="qǐng shūrù nǐ de rènwù míngchēng, àn huí chē jiàn quèrèn" v-model="title" @keyup.Enter="add"/> </div> </template> <script> import {nanoid} from'nanoid' export default { name:'MyHeader', //jiēshōu cóng App chuándì guòlái de addTodo props:['AddTodo'], data() { return { //shōují yònghù shūrù de title title:'' } }, Methods: { Add(){ //jiào yàn shùjù if(!This.Title.Trim()) return alert('shūrù bùnéng wéi kōng') //jiāng yònghù de shūrù bāozhuāng chéng yīgè todo duìxiàng const todoObj = {id:Nanoid(),title:This.Title,done:False} //tōngzhī App zǔjiàn qù tiānjiā yīgè todo duìxiàng this.AddTodo(todoObj) //qīngkōng shūrù this.Title ='' } }, } </script> <style scoped> /*header*/ .Todo-header input { width: 560Px; height: 28Px; font-size: 14Px; border: 1Px solid#ccc; border-radius: 4Px; padding: 4Px 7px; } .Todo-header input:Focus { outline: None; border-color: Rgba(82, 168, 236, 0.8); Box-shadow: Inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8Px rgba(82, 168, 236, 0.6); } </Style>
顯示更多
964 / 5000
翻譯結果
<template>
	<div class="todo-header">
		<input type="text" placeholder="請輸入你的任務名稱，按回車鍵確認" v-model="title" @keyup.enter="add"/>
	</div>
</template>

<script>
	import {nanoid} from 'nanoid'
	export default {
		name:'MyHeader',
		//接收從App傳遞過來的addTodo
		props:['addTodo'],
		data() {
			return {
				//收集用戶輸入的title
				title:''
			}
		},
		methods: {
			add(){
				//校驗數據
				if(!this.title.trim()) return alert('輸入不能為空')
				//將用戶的輸入包裝成一個todo對象
				const todoObj = {id:nanoid(),title:this.title,done:false}
				//通知App組件去添加一個todo對象
				this.addTodo(todoObj)
				//清空輸入
				this.title = ''
			}
		},
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style> 