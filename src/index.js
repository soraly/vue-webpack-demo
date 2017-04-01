import './css/index.css'
import './less/test.less'
import  Vue from 'vue/dist/vue.js'
import app from './App.vue'
var name = 'xiang';

var vm = new Vue({
    el: '#box',
    components: {
      'App': app
    },
    data: {
        word: 'hello,fenfen'
    }
})


