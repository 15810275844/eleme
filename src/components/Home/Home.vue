<template>
	<div>
		<m-header></m-header>
		<m-swiper></m-swiper>
		<m-list :list="list"></m-list>
		<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
	</div>
</template>

<script>
import Header from "./Header.vue";
import Swiper from "./Swiper.vue";
import List from "./List.vue";
import InfiniteLoading from 'vue-infinite-loading';
export default {
	name:'Home',
	data () {
		return {
			list:[1,2,3]
		}
	},
	methods:{
		onInfinite() {
			// alert()
			const temp = [];
			for (let i = this.list.length + 1; i <= this.list.length + 5; i++) {
				temp.push(i);
			}
			this.list = this.list.concat(temp);
			this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
	    }
	},
	mounted () {
		// alert(1)
	},
	components: {
		'm-header':Header,
		'm-swiper':Swiper,
		'm-list':List,
		InfiniteLoading
	}
}
</script>

<style scoped>

</style>