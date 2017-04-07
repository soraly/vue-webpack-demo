import './css/index.css'
import './less/test.less'
import Vue from 'vue'
import app from './App.vue'
import router from './router/router.config.js'
console.log(router,'router')
console.log(Vue,'vv');

//4. 创建和挂在跟实例
var vm = new Vue({
    el: '#box',
    router: router,
    render: h => h(app),
    data: {
        word: 'hello,fenfen'
    }
})


