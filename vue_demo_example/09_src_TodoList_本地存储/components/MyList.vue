<Template> <ul class="todo-main"> <MyItem v-for="todoObj in todos" :Key="todoObj.Id" :Todo="todoObj" :CheckTodo="checkTodo" :DeleteTodo="deleteTodo" /> </ul> </template> <script> import MyItem from'./MyItem' export default { name:'MyList', components:{MyItem}, //shēngmíng jiēshōu App chuándì guòlái de shùjù, qízhōng todos shì zìjǐ yòng de,checkTodo hé deleteTodo shì gěi zi zǔjiàn MyItem yòng de props:['Todos','checkTodo','deleteTodo'] } </script> <style scoped> /*main*/ .Todo-main { margin-left: 0Px; border: 1Px solid#ddd; border-radius: 2Px; padding: 0Px; } .Todo-empty { height: 40Px; line-height: 40Px; border: 1Px solid#ddd; border-radius: 2Px; padding-left: 5Px; margin-top: 10Px; } </style>
顯示更多
696 / 5000
翻譯結果
<template>
	<ul class="todo-main">
		<MyItem 
			v-for="todoObj in todos"
			:key="todoObj.id" 
			:todo="todoObj" 
			:checkTodo="checkTodo"
			:deleteTodo="deleteTodo"
		/>
	</ul>
</template>

<script>
	import MyItem from './MyItem'

	export default {
		name:'MyList',
		components:{MyItem},
		//聲明接收App傳遞過來的數據，其中todos是自己用的，checkTodo和deleteTodo是給子組件MyItem用的
		props:['todos','checkTodo','deleteTodo']
	}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style> 