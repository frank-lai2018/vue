
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions={
    increment(context,value){
        console.log("increment 被調用")
        context.commit("INCREMENT",value)
    },
    decrement(context,value){
        console.log("decrement 被調用")
        context.commit("DECREMENT",value)
    },
    incrementOdd(context,value){
        console.log("incrementOdd 被調用",context)
        if(context.state.sum % 2){
            context.commit("INCREMENT",value)
        }
    },
    incrementWait(context,value){
        console.log("incrementWait 被調用",context)
        window.setTimeout(() => {
            context.commit('INCREMENT',value)
        },500)
    }
}

const mutations={
    INCREMENT(state,value){
        console.log("INCREMENT 被調用")
        state.sum += value

    },
    DECREMENT(state,value){
        console.log("DECREMENT 被調用")
        state.sum -= value

    }
}

const state={
    sum:0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})