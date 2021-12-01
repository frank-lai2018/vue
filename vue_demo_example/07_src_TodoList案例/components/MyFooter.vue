<Template> <div class="todo-footer" v-show="total"> <label> <!-- <Input type="checkbox" :Checked="isAll" @change="checkAll"/> --> <input type="checkbox" v-model="isAll"/> </label> <span> <span>yǐ wánchéng {{doneTotal}}</span>/ quánbù {{total}} </span> <button class="btn btn-danger" @click="clearAll">qīngchú yǐ wánchéng rènwù </button> </div> </template> <script> export default { name:'MyFooter', props:['Todos','checkAllTodo','clearAllTodo'], computed: { //Zǒngshù total(){ return this.Todos.Length }, //yǐ wánchéng shù doneTotal(){ //cǐ chù shǐyòng reduce fāngfǎ zuò tiáojiàn tǒngjì /* const x = this.Todos.Reduce((pre,current)=>{ console.Log('@',pre,current) return pre + (current.Done? 1: 0) },0)*/ //Jiǎnxiě return this.Todos.Reduce((pre,todo)=> pre + (todo.Done? 1: 0),0) }, //Kòngzhì quán xuǎn kuāng isAll:{ //Quán xuǎn kuāng shìfǒu gōu xuǎn get(){ return this.DoneTotal === this.Total&& this.Total > 0 }, //isAll bèi xiūgǎi shí set bèi diàoyòng set(value){ this.CheckAllTodo(value) } } }, methods: { /* CheckAll(e){ this.CheckAllTodo(e.Target.Checked) }*/ //qīngkōng suǒyǒu yǐ wánchéng clearAll(){ this.ClearAllTodo() } }, } </script> <style scoped> /*footer*/ .Todo-footer { height: 40Px; line-height: 40Px; padding-left: 6Px; margin-top: 5Px; } .Todo-footer label { display: Inline-block; margin-right: 20Px; cursor: Pointer; } .Todo-footer label input { position: Relative; top: -1Px; vertical-align: Middle; margin-right: 5Px; } .Todo-footer button { float: Right; margin-top: 5Px; } </style>
顯示更多
1539 / 5000
翻譯結果
<template>
	<div class="todo-footer" v-show="total">
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
			<input type="checkbox" v-model="isAll"/>
		</label>
		<span>
			<span>已完成{{doneTotal}}</span> / 全部{{total}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任務</button>
	</div>
</template>

<script>
	export default {
		name:'MyFooter',
		props:['todos','checkAllTodo','clearAllTodo'],
		computed: {
			//總數
			total(){
				return this.todos.length
			},
			//已完成數
			doneTotal(){
				//此處使用reduce方法做條件統計
				/* const x = this.todos.reduce((pre,current)=>{
					console.log('@',pre,current)
					return pre + (current.done ? 1 : 0)
				},0) */
				//簡寫
				return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0) ,0)
			},
			//控制全選框
			isAll:{
				//全選框是否勾選
				get(){
					return this.doneTotal === this.total && this.total > 0
				},
				//isAll被修改時set被調用
				set(value){
					this.checkAllTodo(value)
				}
			}
		},
		methods: {
			/* checkAll(e){
				this.checkAllTodo(e.target.checked)
			} */
			//清空所有已完成
			clearAll(){
				this.clearAllTodo()
			}
		},
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style> 