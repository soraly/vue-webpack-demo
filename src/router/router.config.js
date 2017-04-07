import Vue from 'vue'
import VueRouter from 'vue-router'
//1. 定义组件
import news from '../components/news.vue'
import home from '../components/home.vue'
//定义子组件
var detail = {
    template: '<div>this is detail page</div>'
}
var config = {
    template: '<div>this is config page</div>'
}
Vue.use(VueRouter)
//2. 定义路由
const routes = [
    {path: '/home',component: home,
        children: [
            {
                path: 'detail',
                component: detail
            },
            {
                path: 'config',
                component: config
            }
        ]
    },
    {path: '/news',component: news},
]
//3. 创建router实例
const  router = new VueRouter({
    routes
})
//4. 导出路由对象
export default router
