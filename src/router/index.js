import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Discover from '@/components/discover/Discover'
import Order from '@/components/order/Order'
import User from '@/components/user/User'

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [{
		path: '/eleme',
		name: 'home',
		component: Home
	}, {
		path: '/discover',
		name: 'discover',
		component: Discover
	}, {
		path: '/order',
		name: 'order',
		component: Order
	}, {
		path: '/user',
		name: 'user',
		component: User
	}, {
		path: '*',
		redirect: {
			name: 'home'
		}
	}]
})
