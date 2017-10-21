<template>
  <div>
      <my-twoheader :text="text"></my-twoheader>
      <div id="areaCodeContent">
        <p v-for="item in items" id="areaList" @click="getCurrentElement">
            <span>{{ item[1] }}</span>
            <span>{{ item[2] }}</span>
        </p>
      </div>
  </div>
</template>
<script>
import myTwoheader from './public/twoheader.vue'
import $ from 'jquery'
export default {
  data(){
      return {
          text: "国家和区号",
          items: this.$store.state.areas
      }
  },
  components: {
      myTwoheader
  },
  methods:{
      getCurrentElement:function(e){
          this.$store.dispatch('fromAreaCode',{
              country: e.currentTarget.firstChild.innerText,
              areacode: e.currentTarget.lastChild.innerText
          })
          this.$router.push('/forgetPassWord')
      }
  },
  watch:{
      $router (to, from){
          console.log(to)
          console.log(from)
      }
  },
  mounted: function () {
     this.$store.dispatch('saveForm')
  },
  
}
</script>
<style scoped>
    #areaCodeContent{
        width: 100%;
        height: calc(100% - 44px);
        overflow-y: scroll;
    }
    #areaList{
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 25px 0 25px;
    }
</style>

