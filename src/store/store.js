import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isShowHeadMore: false,
        chooseUsers:[],
        areas:[],
        areacode:'86',
        country:'中国'
    },
    getter:{

    },
    mutations:{
        ShowHeadMore: function (state){
            if(state.isShowHeadMore === true){
                state.isShowHeadMore = false;
            }else{
                state.isShowHeadMore = true;
            } 
        },
        ChooseUsers:function(state,chooseusers){
            state.chooseUsers=chooseusers;
        }
    },
    actions:{
        saveForm (context) {
            axios({
                method: 'get',
                url: '/data/countryAndAreaCode.json'
            })
            .then(function(req){
                req.data.forEach(function(e) {
                   var arr = e.split("-")
                   context.state.areas.push(arr)
                });
            })
            .catch(function(err){
                console.log(err)
            })
        },
        fromAreaCode (context, products) {
            context.state.areacode = products.areacode
            context.state.country = products.country
        }
    }
})