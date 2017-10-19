<template>
  <div>
    <div class="lists">
        <div class="list">
            <div class="list-left">
                <img src="~assets/image/cat.jpg" class="img">
                <span>可可</span>
            </div>
        </div>
        
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        },
        props:[],
        methods:{
          
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
.lists .list .list-left .img{
    display:inline-block;
    margin-right:8px;
    border-radius:50%;
    width:20px;
    height:20px;
}

</style>
