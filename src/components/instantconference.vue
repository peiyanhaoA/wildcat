<template>
  <div>
    <my-twohead :text="text"></my-twohead>
    <div class="content">
      <my-show></my-show>
      <!-- 会议主题 -->
      <div class="theme">
        <v-btn color="info" class="btn" @click.native="sure">
          开始开会
          <span slot="loader" class="custom-loader">
            <v-icon light>cached</v-icon>
          </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import myTwohead from './public/twoheader.vue';
import myShow from './public/show.vue';
export default {

  data() {
    return {
      text: '即时会议'
    }
  },
  methods: {
    sure:function(){
      this.$router.push('/start');
    }
  },
  components: {
    myTwohead,
    myShow
  }
}
</script>

<style scoped>
.btn {
  position: absolute;
  bottom: 15px;
  margin: 0 2%;
  width: 96%;
}
</style>

