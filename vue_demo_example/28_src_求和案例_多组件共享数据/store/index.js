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
	},
	ADD_PERSON(state,value){
		console.log('mutations中的ADD_PERSON被調用了')
		state.personList.unshift(value)
	}
}
//準備state——用於存儲數據
const state = {
	sum:0, //當前的和
	school:'尚矽谷',
	subject:'前端',
	personList:[
		{id:'001',name:'張三'}
	]
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