<template>
  <div> 
      <my-twoheader :text="text"></my-twoheader>
      <div id="register">
          <div id="countryAndArea" @click="area">
              <span class="area">+{{ this.$store.state.areacode }}</span>
              <span class="country">{{ this.$store.state.country }}</span>
          </div>
          <input type="tel" name="user_tel" id="userTel" placeholder="请输入手机号码">
          <input type="button" id="nextStep" value="下一步" @click="verificationCode">
      </div>
  </div>
</template>
<script>
import myTwoheader from './public/twoheader.vue'
export default {
  data(){
      return {
          text: "注册"
      }
  },
  components:{
        myTwoheader
  },
  methods: {
      verificationCode: function(){
        //   this.$router.push('/verificationCode')
      },
      area: function(){
          this.$router.push('/areaCode')
      }
  }
}
</script>
<style scoped>
    #forgetPassWord{
        width: 100%;
        font-size: 18px;
    }
    #countryAndArea{
        width: calc(100% - 40px);
        height: 50px;
        border: 1px solid #ccc;
        display: flex;
        margin: 30px 0 10px 20px;
    }
    .area, .country{
        display: inline-block;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
    .area{
        width: 30%;
        border-right: 1px solid #ccc;
    }
    .country{
        width: 70%;
    }
    #forgetPassWord>input{
        display: block;
        width: calc(100% - 40px);
        border: 1px solid #ccc;
        margin-left: 20px;
    }
    #userTel{
        height: 50px;
        padding-left: 10px;
    }
    #nextStep{
        background-color: #0000CD;
        height: 38px;
        border-radius: 5px;
        color: white;
        margin-top: 20px;
    }
</style>


