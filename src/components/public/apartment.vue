<template>
  <div>
    <div class="lists">
        <!--<div class="list" v-for="part in company.parts">
            <div class="list-left">
                <span>{{part.name}}</span>
            </div>
            <div class="list-right" @click="change(part)">
                <span>1</span>
                <i class="iconfont icon_i">&#xe655;</i>
            </div>
        </div>-->
        <div class="list" v-for="post in posts"   @click="change(post)">
            <div class="list-left">
                <span>{{post}}</span>
            </div>
            <div class="list-right">
                <span>1</span>
                <i class="iconfont icon_i">&#xe655;</i>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                posts:['总经办','技术中心','营销中心']
            }
        },
        props:[],
        methods:{
            change:function(post){
                this.$emit('transfer',post);
            }
        }    
    }
</script>
<style scoped>
.lists{
    background-color:#fff;
}
.lists .list{
    padding:10px 15px;
    border-bottom:1px solid #ccc;
}
.lists .list .list-left{
    display:inline-block;
}

.lists .list .list-right{
    display:inline-block;
    float:right;
    color:#888;
}
.icon_i{
    color:#ccc;
    margin-left:8px;
}
</style>
