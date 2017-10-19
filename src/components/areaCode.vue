<template>
  <div>
      <my-twoheader :text="text"></my-twoheader>
      <div id="areaCodeContent">
        <p v-for="item in items" id="areaList">
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
          items: []
      }
  },
  components: {
      myTwoheader
  },
  mounted: function () {
      var that = this;
      $.ajax({
          type: 'get',
          url: '/data/countryAndAreaCode.json',
          success: function(req){
              req.forEach(function(element) {
                  var e = element.split('-');
                  that.items.push(e)
              });

          }
      })
      var areaCodeContent = document.getElementById('areaCodeContent');
      areaCodeContent.addEventListener('touchmove',function(){
          areaCodeContent.style.transform = 'translateY(10px)'
      })
  }
}
</script>
<style scoped>
    #areaList{
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 25px 0 25px;
    }
</style>

