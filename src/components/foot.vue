<template>
    <div class="foot">
        <ul>
            <li v-for="(item,index) in list">
                {{index+1}}, {{item }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list: [
                    '吃饭','睡觉','电视','游戏'
                ]
            }
        }
    }
</script>
<style lang="less">
    .foot {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    ul {
        overflow: hidden;
        li {
            width: 25%;
            padding: 20px;
            text-align: center;
            color: black;
        }
    }
    li {
        float: left;
    }
</style>