<template>
    <div class="home">
        <h3>主页</h3>
        <div>
           my name is {{$route.params.myname}}
           <p>{{$route.params}}</p>
            <router-link to="/home/detail">详情页</router-link>
            <router-link to="/home/config">配置页</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        methods: {},
        computed: {}
    }
</script>
<style scoped="">
    .home {
        width: 200px;
        text-align: center;
    }
    .home div {
        width: 200px;
        height: 200px;
        background: aliceblue;
    }
</style>