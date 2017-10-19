// 填写验证码 修改密码
<template>
  <div>
      <my-twoheader :text="text"></my-twoheader>
      <div id="verificationContent">
            <p id="verificationText">已向+86-18103845835发送验证码短信</p>
            <div id="verificationInfo">
                <input type="number" id="verification" placeholder="请输入验证码">
                <span id="verificationTime">重新发送<span class="time"></span></span>
            </div>
            <input type="password" name="pwd" id="verificationPassWord" placeholder="新的6至16位登录密码">
            <input type="button" id="accomplish" value="完成" @click="accomplish">
      </div>
      

  </div>
</template>
<script>
import myTwoheader from './public/twoheader.vue'
export default {
  data(){
      return {
          text: "找回密码"
      }
  },
  components: {
      myTwoheader
  },
  methods: {
      accomplish: function(){
          this.$router.push('/')
      }
  }
}
</script>
<style scoped>
    #verificationContent{
        width: 100%;
        font-size: 16px;
    }
    #verificationText{
        width: calc(100% - 40px);
        font-size: 14px;
        color: #ccc;
        text-align: center;
        margin: 30px 0 25px 20px;
        letter-spacing: 1px;
    }
    #verificationInfo{
        width: calc(100% - 40px);
        border: 1px solid #ccc;
        height: 50px;
        margin: 0 0 15px 20px;
        display: flex;
        font-size: 16px;
    }
    #verification, #verificationTime{
        display: inline-block;
        height: 50px;
        padding-left: 10px;
    }
    #verification{
        width: 55%;
        border-right: 1px solid #ccc;
    }
    #verificationTime{
        width: 45%;
        text-align: center;
        line-height: 50px;
    }
    #verificationContent>input{
        display: block;
        width: calc(100% - 40px);
        margin-left: 20px;
    }
    #verificationPassWord{
        padding-left: 10px;
        height: 50px;
        border: 1px solid #ccc;
        margin-bottom: 15px;
    }
    #accomplish{
        background-color: #0000CD;
        border-radius: 5px;
        color: white;
        height: 35px;
    }
</style>

