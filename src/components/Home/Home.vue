<template>
	<div>
		<m-header></m-header>
		<m-swiper></m-swiper>
		<m-list></m-list>
	</div>
</template>

<script>
import Header from "./Header.vue";
import Swiper from "./Swiper.vue";
import List from "./List.vue";
export default {
	name:'Home',
	data () {
		return {
		}
	},
	methods:{
	},
	mounted () {
	},
	components: {
		'm-header':Header,
		'm-swiper':Swiper,
		'm-list':List
	}
}
</script>

<style scoped>

</style>