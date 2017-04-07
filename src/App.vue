<template>
    <div >
        <Logo></Logo>
        {{name}}
        <button @click="change">Vue8 btn</button>
        <MainInput v-on:man="getData" />
        <List :test="test" :one="one"></List>
        <Child></Child>
        <Foot></Foot>
        <router-link to="/home">
            go to home

        </router-link>
        <router-link to="/news">
            go to news
        </router-link>
        <router-view></router-view>
    </div>

</template>

<script>
    import foot from './components/foot.vue'
    import logo from './components/logo.vue'
    import main from './components/main.vue'
    import list from './components/list.vue'
    import Vue from 'vue'
    var Child = {
        template: '<div>A custom component!</div>'
    }
    export default {
        data(){
            return {
                name: 'xiaomi',
                one : '',
                test: 'this is test3'
            }
        },
        created(){
            this.name = 'xiang'

        },
        methods: {
            getData(val){
                console.log(val,'vall');
                this.one = val;
            },
            change(){
                console.log('change test');
                this.test = 'i am back'
            }
        },
        components: {
            Foot: foot,
            Logo: logo,
            List: list,
            Child: Child,
            MainInput: main
        }
    }
</script>
<style>
 #head {
     background: lightgray;
 }

</style>