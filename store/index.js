import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		//token
        token:"",
		//用户信息
        userinfo:{
			username: "scgs762dgw9",//用户名
			nickname: "花晨月夕",//昵称
			avatar: "https://cdn.uviewui.com/uview/common/logo.png",//头像
			weChat: "wangming1571356682",//绑定的微信号
			qq: "1571356682",//绑定的qq
			name: "王明",//真实姓名
			sex: "男",//性别
			phone: "15870290085",//手机号
			address: "贵州省贵阳市贵安新区党武乡贵州民族大学",//现住址
			delivery_address: "贵州省贵阳市贵安新区党武乡贵州民族大学"//收货地址
		},
		//用户配置信息
        config:{},
		//需要全局共享的逻辑状态
		data: {},
    },
    getters: {
    },
    mutations: {
		setUserInfo(state, userinfo){
			state.userinfo = userinfo
			uni.setStorageSync("userinfo",userinfo)
		}
    },
    actions: {}
})
export default store