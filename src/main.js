import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import directive from './directive'
import Mint from 'mint-ui'
import axios from 'axios'


//mint 组件库
import 'mint-ui/lib/style.css'
Vue.use(Mint);

// mint ui 部分组件引用
import {
	Swipe, SwipeItem, Loadmore
}
	from 'mint-ui'

//自定义CSS
import './commons/less/style.less'

Vue.component(Loadmore.name, Loadmore);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: {
		App
	}
})


