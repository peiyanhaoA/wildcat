<template>
  <div>
      <search  @transfer="enter"></search>
      <div class="part">
        <div class="part-title">
          <span @click="tab='apartment'">仁光科技</span>
          <span v-for="post in posts">
            <i class="iconfont icon_c">&#xe655;</i>
            <i>{{post}}</i>
          </span>
        </div>
        <component :is="tab" :company="sendMsg" @transfer="getMsg"></component>
      </div>
  </div>
</template>
<script>

import search from './public/search.vue';
import apartment from './public/apartment.vue';
import person from './public/person.vue';
export default {
  data(){
    return{
      tab:'apartment',
      sendMsg:null,
      posts:[]
      
    }
  },
  created:function(){
   this.sendMsg=this.company;
  },
  methods:{
    enter:function(name){      
      for(var i=0;i<this.items.length;i++){       
        for(var j=0;j<this.items[i].items.length;j++){
          console.log(name==this.items[i].items[j].title);
          if(name==this.items[i].items[j].title){
            this.items[i].active=true;
            break;
          }else{
             this.items[i].active=false;
          }
        }
      }
      
    },
    getMsg:function(msg){
      console.log(msg);
      this.posts.push(msg);
      this.tab="person";
      
    }
  },
  components:{
    search,
    apartment,
    person
  }
  
}
</script>

<style scoped>      
.part{
  overflow-y: auto;
  height: 100%;
  font-size: 16px;
}
.part .part-title{
  background-color: #fff;
  padding: 10px 15px;
  border-bottom: 1px solid #ccc;
  color:#888;
}
.part .part-title .icon_c{
  margin:0 10px;
  font-size: 14px;
  color:#ccc;
}
.font_c{
  color:#3879d9;
}

</style>

