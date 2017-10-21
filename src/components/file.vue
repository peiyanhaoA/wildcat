<template>
  <div id="file">
    <v-container fluid class="wrap">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="cards">
          <v-list id="test" two-line subheader>
            <v-list-tile avatar v-for="item in items" v-bind:key="item.title" @click="" class="site">
              <v-checkbox id="checkbox" v-show="isShowCheckbox" v-model="item.ex" color="secondary" hide-details></v-checkbox>
              <v-list-tile-avatar>
                <v-icon v-bind:class="[item.iconClass]" >{{ item.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>

  <div id="fileFooter" v-show="isShowCheckbox">
    <div id="share" class="iconfont icon-fenxiang"></div>
    <div id="delete" class="iconfont icon-shanchu1" @click="del"></div>
    <div id="cancel" class="iconfont icon-quxiao" @click="cancel"></div>
  </div>


  </div>
</template>
<script>
export default {
  data () {
      return {
         items: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014', ex: false },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014', ex: false },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014', ex: false },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014', ex: false },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014', ex: false },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014', ex: false }
        ],
        isShowCheckbox: false
      }
    },
    mounted: function(){
      var test = document.getElementById("test");
      var that = this;
      if(test.childNodes.length > 0){
        test.childNodes.forEach(function(element,index) {
          var hammertime = new Hammer(element);
          hammertime.on("press", function (ev) {
            that.items[index].ex = true;
            that.isShowCheckbox = true;
          });
        });
      }
    },
    methods: {
      del: function(){
        var that = this;
        this.items.forEach(function(e,index){
          if(that.items[index].ex){
            that.items.splice(index,1)
          }
        })
      },
      cancel: function(){
        this.isShowCheckbox = false
      }
    }

}
</script>

<style scoped>
  .cards{
    box-shadow: none ! important;
  }
  .site{
    border-bottom: 1px solid #ccc;
  }
  .input-group__details{
    display: none ! important;
  }
  #checkbox{
    width: 30px;
  }
  #fileFooter{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
  }
  #fileFooter>.iconfont{
    width: 33.33%;
    height: 50px;
    font-size: 40px;
    text-align: center;
    line-height: 50px;
  }
  .wrap{
    padding: 0;
  }
</style>

