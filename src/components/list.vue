<template>
    <div class="">
        <h3>{{word}},,,,,this is word</h3>
       <table>
           <tr>
               <th>姓名</th>
               <th>年龄</th>
               <th>地址</th>
           </tr>
           <tr v-for="item in list">
               <td>{{item.name}}</td>
               <td>{{item.age}}</td>
               <td>{{item.addr}}</td>
           </tr>
       </table>
    </div>
</template>
<script>
    export default {
        props: ['one','test'],
        mounted(){
            this.item = this.one;
            this.word =  this.test;
            console.log( this.item,' this.item');
        },
        data(){
            return {
                item: '',
                word: '',
                list: [
                    {name: 'xiang',age:'20',addr:'杭州'},
                    {name: 'fenfen',age:'20',addr:'杭州'}
                    ]
            }
        },
        created(){
          console.log('start');
        },
        beforeUpdate(val){
            console.log(val,11);
        },
        updated(val){
            console.log(val,22);
        },
        watch: {
            item: function (val) {
                console.log(item,'item')
            },
            test(){
                this.word =  this.test;
            }
        },
        methods: {

        },
        computed: {

        }
    }
</script>
<style>

</style>