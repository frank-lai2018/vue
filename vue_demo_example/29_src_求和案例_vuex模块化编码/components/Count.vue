
<Template> <div> <h1>dāngqián qiú hé wèi:{{Sum}}</h1> <h3>dāngqián qiú hé fàngdà 10 bèi wèi:{{BigSum}}</h3> <h3>wǒ zài {{school}}, xuéxí {{subject}}</h3> <h3 style="color:Red">Person zǔjiàn de zǒng rénshù shì:{{PersonList.Length}}</h3> <select v-model.Number="n"> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> </select> <button@click="increment(n)">+</button> <button@click="decrement(n)">-</button> <button@click="incrementOdd(n)">dāngqián qiú hé wéi jīshù zài jiā </button> <button@click="incrementWait(n)">děng yī děng zài jiā </button> </div> </template> <script> import {mapState,mapGetters,mapMutations,mapActions} from'vuex' export default { name:'Count', data() { return { n:1, //Yònghù xuǎnzé de shùzì } }, computed:{ //Jièzhù mapState shēngchéng jìsuàn shǔxìng, cóng state zhōng dòu qǔ shùjù.(Shùzǔ xiěfǎ) ...MapState('countAbout',['sum','school','subject']), ...MapState('personAbout',['personList']), //jièzhù mapGetters shēngchéng jìsuàn shǔxìng, cóng getters zhōng dòu qǔ shùjù.(Shùzǔ xiěfǎ) ...MapGetters('countAbout',['bigSum']) }, methods: { //Jièzhù mapMutations shēngchéng duìyìng de fāngfǎ, fāngfǎ zhōng huì diàoyòng commit qù liánxì mutations(duìxiàng xiěfǎ) ...MapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}), //jièzhù mapActions shēngchéng duìyìng de fāngfǎ, fāngfǎ zhōng huì diàoyòng dispatch qù liánxì actions(duìxiàng xiěfǎ) ...MapActions('countAbout',{incrementOdd:'JiaOdd',incrementWait:'JiaWait'}) }, mounted() { console.Log(this.$Store) }, } </script> <style lang="css"> button{ margin-left: 5Px; } </style>
顯示更多
1340 / 5000
翻譯結果
<template>
	<div>
		<h1>當前求和為：{{sum}}</h1>
		<h3>當前求和放大10倍為：{{bigSum}}</h3>
		<h3>我在{{school}}，學習{{subject}}</h3>
		<h3 style="color:red">Person組件的總人數是：{{personList.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">當前求和為奇數再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用戶選擇的數字
			}
		},
		computed:{
			//借助mapState生成計算屬性，從state中讀取數據。 （數組寫法）
			...mapState('countAbout',['sum','school','subject']),
			...mapState('personAbout',['personList']),
			//借助mapGetters生成計算屬性，從getters中讀取數據。 （數組寫法）
			...mapGetters('countAbout',['bigSum'])
		},
		methods: {
			//借助mapMutations生成對應的方法，方法中會調用commit去聯繫mutations(對象寫法)
			...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
			//借助mapActions生成對應的方法，方法中會調用dispatch去聯繫actions(對象寫法)
			...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
		},
		mounted() {
			console.log(this.$store)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style> 