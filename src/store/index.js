import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		addressPage: false 		//首页右侧选择地址
	},
	mutations: {
		showAddressPage: state => state.addressPage=true,
		hideAddressPage: state => state.addressPage=false
	}
})