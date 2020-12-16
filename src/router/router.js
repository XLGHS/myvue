import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

//解决刷新报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


import Home from "../views/Home/Home.vue"
import Category from "../views/Category/Category.vue"
import Find from "../views/Find/Find.vue"
import Cart from "../views/Cart/Cart.vue"
import Mind from "../views/Mind/Mind.vue"

let routes = [{
    path: "/home",
    component: Home,
    children: [{
        path: "index",
        component: () =>
            import ('../views/Home/children/Index')
    }, {
        path: "household",
        component: () =>
            import ('../views/Home/children/Household')
    }, {
        path: "clothing",
        component: () =>
            import ('../views/Home/children/Clothing')
    }, {
        path: "shoebag",
        component: () =>
            import ('../views/Home/children/ShoeBag')
    }, {
        path: "mobilephones",
        component: () =>
            import ('../views/Home/children/MobilePhones')
    }, {
        path: "computer",
        component: () =>
            import ('../views/Home/children/Computer')
    }, {
        path: "hometextiles",
        component: () =>
            import ('../views/Home/children/HomeTextiles')
    }, {
        path: "personalmakeup",
        component: () =>
            import ('../views/Home/children/PersonalMakeup')
    }, {
        path: "/home",
        redirect: "/home/index"
    }]

}, {
    path: "/category",
    component: Category

}, {
    path: "/find",
    component: Find

}, {
    path: "/cart",
    component: Cart

}, {
    path: "/mind",
    component: Mind

}, {
    path: "/categorylist/:cid",
    component: () =>
        import ('../views/Category/components/CategoryList')
}, {
    path: "/detail/:gid",
    component: () =>
        import ('../views/Detail/Detail')
}, {
    path: "/search",
    component: () =>
        import ('../views/Search/Search')
}, {
    path: "/searchlist",
    component: () =>
        import ('../views/Search/SearchList')
}, {
    path: "/login",
    component: () =>
        import ('../views/Login/Login')
}, {
    path: "/login2",
    component: () =>
        import ('../views/Login/Login2')
}, {
    path: "/register",
    component: () =>
        import ('../views/Login/Register')
}, {
    path: "/",
    redirect: '/mind'
}, ]

let router = new VueRouter({
    routes
})

//注册一个全局前置守卫：
router.beforeEach(function(to, from, next) {
    console.log(from);
    // 限制路由
    if (to.path == '/login' || to.path == '/mind' || to.path == '/register') {
        next()
        return;
    }
    // 获取token
    const token = JSON.parse(window.localStorage.getItem("userInfo"))
    console.log(token);
    if (!token) return next("/mind")
    next()
})




export default router