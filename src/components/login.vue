<template>
  <div id="login">
      <div id="logo">
          <img src="../image/timg.jpg" alt="">
          仁光科技
      </div>
     <div id="loginContent">
         <input type="text" placeholder="手机号" class="username">
         <input type="text" placeholder="密码" class="password">
         <input type="button" value="登录" class="login" @click="Login">
     </div>
     <div id="registeredAndForget">
         <span class="registered" @click="register">注册账号</span>
         <span class="forget" @click="forgetPassword">忘记密码</span>
     </div>
     <div id="thirdLogin">
         <p>第三方登录</p>
         <a href="#" class="iconfont icon-github"></a>
         <a href="#" class="iconfont icon-qq1"></a>
     </div>
  </div>
</template>
<script>
export default {
  methods:{
      Login: function () {
          this.$router.push('/home')
      },
      forgetPassword: function(){
          this.$router.push('/forgetPassword')
      },
      register: function(){
          
      }
  }
}
</script>
<style>
    #login{
        width: 100%;
        height: 100%;
    }
    #logo{
        width: 100%;
        font-size: 20px;
        color: #8B008B;
        text-align: center;
        margin-top: 100px;
        font-weight: 600;
    }
    #logo>img{
        height: 30px;
    }
    #loginContent{
    width: 100%;
    margin-top: 70px;
    }
    #loginContent>input{
        display: block;
    }
    .username, .password{
        border-bottom: 1px solid #ccc;
        padding-left: 5px;
        margin-bottom: 15px;
        letter-spacing: 1px;
    }
    .username, .password, .login{
        width: calc(100% - 30px);
        height: 35px;
        font-size: 15px;
        margin-left: 15px;
    }
    .login{
        background-color: #0072E3;
        margin-top: 50px;
        color: white;
        border-radius: 4px;
        letter-spacing: 7px;
    }
    #registeredAndForget{
        width: 100%;
        text-align: center;
        font-size: 12px;
        margin-top: 15px;
        letter-spacing: 1px;
        color: #4169E1 ;
    }
    .registered{
        padding-right: 15px;
        border-right: 1px solid #ccc;
    }
    .forget{
        padding-left: 15px;
    }
    #thirdLogin{
        width:100%;
        text-align: center;
        margin-top: 30px;
        font-size: 15px;
    }
    #thirdLogin .iconfont{
        font-size: 26px;
        border-radius: 50%;
        margin-left: 8px;
    }
    #thirdLogin p{
        margin-bottom: 8px;
    }
</style>


 