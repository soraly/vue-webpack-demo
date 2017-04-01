<template>
    <div >
        <Logo></Logo>
        <button @click="change">Vue btn</button>
        <MainInput v-on:man="getData" />
        <List :test="test" :one="one"></List>
        <Foot></Foot>
    </div>
</template>
<script>
    import foot from './components/foot.vue'
    import logo from './components/logo.vue'
    import main from './components/main.vue'
    import list from './components/list.vue'
    export default {
        data(){
            return {
                name: 'xiaomi',
                one : '',
                test: 'this is test'
            }
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
            MainInput: main
        }
    }
</script>
<style>
 #head {
     background: lightgray;
 }

</style>