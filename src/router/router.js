import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/login.vue'
import Home from '../components/home.vue';
import Setting from '../components/setting.vue';
import Makeoffice from '../components/makeAppointment.vue';
import Instantconference from '../components/instantconference.vue';
import Meeting from '../components/meeting.vue';
import Choose from '../components/choose.vue'
import Info from '../components/info.vue';
import Start from '../components/start.vue';
import ForgetPassWord from '../components/forgetPassWord.vue'; // 忘记密码 输入手机号获取验证码
import VerificationCode from '../components/verificationCode.vue'; // 填写并验证码 
import AreaCode from '../components/areaCode.vue'; // 国家和区号
import Register from '../components/register.vue'



import "hammerjs";

// 2017/10/16 （可以删除）
import Drawing from '../components/drawing.vue';

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {path: '/', component: Login},
        {path: '/home', component: Home},
        {path: '/makeappointment', component: Makeoffice},//预约
        {path: '/instantconference', component: Instantconference},//即时
        {path: '/meeting', component: Meeting},//开始开会
        {path: '/choose', component: Choose},//选择参会人员
        {path: '/setting', component: Setting}, // 设置个人信息
        {path: '/info', component: Info}, // 消息
        {path: '/start', component: Start},
        {path: '/forgetPassWord', component: ForgetPassWord},  // 忘记密码 输入手机号获取验证码
        {path: '/verificationCode', component: VerificationCode},  // 填写并验证码
        {path: '/areaCode', component: AreaCode},
        {path: '/register', component: Register},



        {path: '/drawing', component: Drawing} // 画板
    ]
})
