<template>
	<div id="star" class="">
		<div class="default clearfix">
			<i class="icon iconfont icon-xingxing"></i>
			<i class="icon iconfont icon-xingxing"></i>
			<i class="icon iconfont icon-xingxing"></i>
			<i class="icon iconfont icon-xingxing"></i>
			<i class="icon iconfont icon-xingxing"></i>
		</div>
		<div class="fill" :style="{width:gradeFn}">
			<i class="icon iconfont icon-xingxing"></i>
			<i class="icon iconfont icon-xingxing"></i>
			<i class="icon iconfont icon-xingxing"></i>
			<i class="icon iconfont icon-xingxing"></i>
			<i class="icon iconfont icon-xingxing"></i>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	props:['grade'],
	computed: {
		gradeFn:function(){
			return Number(this.grade*20).toFixed(2) + '%';
		}
	}
}
</script>

<style scoped>
	.default i{
		float:left;
	}
	#star{
		position:relative;
		height: 0.24rem;
		line-height: 0.24rem;
	}
	i{
		font-size:0.24rem;
		color:#ddd;
	}
	.fill{
		position:absolute;
		left:0;
		overflow:hidden;
		display:flex;
		top:0;
	}
	.fill i{
		color:#ffaa0c;
		left:0;
		top:0;
	}
</style>