<template>
		<ul>
			<li v-for="item in [1,3,4,5,65,7]">{{ item }}</li>
		</ul>
</template>

<script>
export default {
	data() {
		return {
			topStatus: '',
		};
	},
	methods: {
		handleTopChange(status) {
			this.topStatus = status;
		},
		loadBottom() {
	  		// 加载更多数据
	  		alert()
			this.allLoaded = true;// 若数据已全部获取完毕
			this.$refs.loadmore.onBottomLoaded();
		}

	}
};
</script>

<style scoped>
	li{
		height: 200px;
	}
</style>