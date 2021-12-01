//Gāi wénjiàn yòng yú chuàngjiàn Vuex zhōng zuìwéi héxīn de store import Vue from'vue' //yǐnrù Vuex import Vuex from'vuex' //yìngyòng Vuex chājiàn Vue.Use(Vuex) //zhǔnbèi actions——yòng yú xiǎngyìng zǔjiàn zhōng de dòngzuò const actions = { /* jia(context,value){ console.Log('actions zhōng de jia bèi diàoyòngle') context.Commit('JIA',value) }, jian(context,value){ console.Log('actions zhōng de jian bèi diàoyòngle') context.Commit('JIAN',value) }, */ jiaOdd(context,value){ console.Log('actions zhōng de jiaOdd bèi diàoyòngle') if(context.State.Sum% 2){ context.Commit('JIA',value) } }, jiaWait(context,value){ console.Log('actions zhōng de jiaWait bèi diàoyòngle') setTimeout(()=>{ context.Commit('JIA',value) },500) } } //zhǔnbèi mutations——yòng yú cāozuò shùjù (state) const mutations = { JIA(state,value){ console.Log('mutations zhōng de JIA bèi diàoyòngle') state.Sum += value }, JIAN(state,value){ console.Log('mutations zhōng de JIAN bèi diàoyòngle') state.Sum -= value } } //zhǔnbèi state——yòng yú cúnchú shùjù const state = { sum:0, //Dāngqián de hé school:'Shàng guīgǔ', subject:'Qiánduān' } //zhǔnbèi getters——yòng yú jiāng state zhōng de shùjù jìnxíng jiāgōng const getters = { bigSum(state){ return state.Sum*10 } } //chuàngjiàn bìng bàolù store export default new Vuex.Store({ actions, mutations, state, getters })
顯示更多
1061 / 5000
翻譯結果
//該文件用於創建Vuex中最為核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//應用Vuex插件
Vue.use(Vuex)

//準備actions——用於響應組件中的動作
const actions = {
	/* jia(context,value){
		console.log('actions中的jia被調用了')
		context.commit('JIA',value)
	},
	jian(context,value){
		console.log('actions中的jian被調用了')
		context.commit('JIAN',value)
	}, */
	jiaOdd(context,value){
		console.log('actions中的jiaOdd被調用了')
		if(context.state.sum % 2){
			context.commit('JIA',value)
		}
	},
	jiaWait(context,value){
		console.log('actions中的jiaWait被調用了')
		setTimeout(()=>{
			context.commit('JIA',value)
		},500)
	}
}
//準備mutations——用於操作數據（state）
const mutations = {
	JIA(state,value){
		console.log('mutations中的JIA被調用了')
		state.sum += value
	},
	JIAN(state,value){
		console.log('mutations中的JIAN被調用了')
		state.sum -= value
	}
}
//準備state——用於存儲數據
const state = {
	sum:0, //當前的和
	school:'尚矽谷',
	subject:'前端'
}
//準備getters——用於將state中的數據進行加工
const getters = {
	bigSum(state){
		return state.sum*10
	}
}

//創建並暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
}) 