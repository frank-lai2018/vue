import VueRouter from "vue-router";


import account from "./router/Account.vue";
import goodList from "./router/GoodList.vue";
import login from "./router/Login.vue";
import register from "./router/Register.vue";

let router = new VueRouter({
    routes:[
        {
            path:"/account",
            component:account,
            children:[
                {path:"login",component:login},
                {path:"register",component:register}

            ]
        },
        {path:"/goodList",component:goodList},
    ]
})

export default router;