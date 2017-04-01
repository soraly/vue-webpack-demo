<template>
    <div class="main">
        <div class="contain">
            <div class="control">
                <label for="name">姓名：</label>
                <input v-model="content.name" type="text" id="name" >
            </div>
            <div class="control">
                <label for="name">年龄：</label>
                <input v-model="content.age" type="text" id="age" >
            </div>
            <div class="control">
                <label for="name">地址：</label>
                <input v-model="content.addr" type="text" id="addr" >
            </div>

        </div>
        <button @click="add()">点我添加</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                content: {}
            }
        },

        methods: {
            add(){
                console.log(this.content);
                this.$emit('man',this.content)
            }
        }
    }
</script>
<style lang="less">
    .main {
        margin: 20px;
        .control {
            margin-bottom: 20px;
        }
        input {
            height: 30px;
            width: 200px;
        }
        button {
            font-size: 16px ;
          padding: 5px;
        }
    }
</style>