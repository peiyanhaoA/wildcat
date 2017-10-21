<template>
  <div>
    <div id="print">
      <video width="100%" height="100%" id="video"></video>
      <div class="cont-head">        
        <i class="iconfont icon-qianjin amt" :class="{'icon_r':isShow}" @click="show"></i>
        <div class="cont-right" v-if="isShow">
          <div><i class="iconfont">&#xe68c;</i></div>
          <div><i class="iconfont">&#xe629;</i></div>
          <div>
            <i class="iconfont">&#xe600;</i>
            <input type="file" class="file">
          </div>
          <div><i class="iconfont">&#xe764;</i></div>
          <div><i class="iconfont">&#xe75e;</i></div>
          <div><i class="iconfont">&#xe659;</i></div>
          <div><i class="iconfont">&#xe81d;</i></div>
        </div>        
      </div>
     
    </div>    
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  data() {
    return {
      isShow:false
    }
  },
  methods: {
    show:function(){
      if(this.isShow){
        this.isShow=false;
      }else{
        this.isShow=true;        
      }
    }
  },
  mounted: function() {
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var $print = $('#print');
    if (width < height) {
      $print.width(height);
      $print.height(width);
      $print.css('top', (height - width) / 2);
      $print.css('left', 0 - (height - width) / 2);
      $print.css('transform', 'rotate(90deg)');
      $print.css('transform-origin', '50% 50%');
    }

    window.addEventListener(evt, function() {     
      setTimeout(function() { 
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        if (width > height) {
          // $('html,body').width(width);
          // $('html,body').height(height);
          $print.width(width);
          $print.height(height);
          $print.css('position','absolute');
          $print.css('top', 0);
          $print.css('left', 0);
          $print.css('transform', 'none');
          $print.css('transform-origin', '50% 50%');
        }
        else {
          // $('html,body').width(height);
          // $('html,body').height(width);
          $print.width(height);
          $print.height(width);
          $print.css('top', (height - width) / 2);
          $print.css('left', 0 - (height - width) / 2);
          $print.css('transform', 'rotate(90deg)');
          $print.css('transform-origin', '50% 50%');
        }
      }, 300);
    }, false);


  },
  components: {

  }
}
</script>

<style scoped>


#print{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.cont-head{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:44px;
  line-height:44px;
  padding-left:10px;
  background-color:transparent;
}
.cont-head .cont-right{
  display:inline-block;
  margin-left:15px;
}
.cont-head .cont-right>div{
  display:inline-block;
  width:30px;
  height:30px;
  border-radius:50%;
  background-color:rgba(0,0,0,0.1);
  text-align:center;
  line-height:30px;
  font-size:20px;
  margin-left:5px;
  position:relative;
}
.cont-head .cont-right>div .iconfont{
  font-size:16px;
}
.cont-head .cont-right>div .file{
  opacity:0;
  width:100%;
  height:100%;
  left:0;
  top:0;
  position:absolute;
}
.amt{
  transition:all .2s;
  transform:rotate(90deg);  
  display:inline-block;
}
.icon_r{
  display:inline-block;
  transform:rotate(0deg);  
}
</style>

