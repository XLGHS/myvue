import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import LyTab from 'ly-tab'
Vue.use(LyTab)

import router from "./router/router.js"

import store from "./store/index"

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')