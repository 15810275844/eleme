<template>
	<footer>
		<ul class="flex">
			<router-link to="/home" tag="li" class="flex-1 text-center">
				<i class="icon iconfont icon-changyonglogo40"></i>
				<span>外卖</span>
			</router-link>
			<router-link to="/discover" tag="li" class="flex-1 text-center">
				<i class="icon iconfont icon-faxian"></i>
				<span>发现</span>
			</router-link>
			<router-link to="/order" tag="li" class="flex-1 text-center">
				<i class="icon iconfont icon-dingdan"></i>
				<span>订单</span>
			</router-link>
			<router-link to="/user" tag="li" class="flex-1 text-center">
				<i class="icon iconfont icon-wo"></i>
				<span>我的</span>
			</router-link>
		</ul>
	</footer>
</template>

<script>
export default {
	data () {
		return {
			msg:'我是底部'
		}
	}
}
</script>

<style scoped>
	footer{
		height:1.2rem;
		color:#666;
	}
	.flex{
		height:1.0rem;
		position:fixed;
		bottom:0;
		left:0;		
		width:100%;
		background:#fff;
	}
	i{
		display:block;
		height:0.54rem;
		line-height:0.54rem;
		margin-top:0.12rem;
		font-size:0.5rem;
	}
	span{
		display:inline-block;
		line-height:0.2rem;
		font-size:0.2rem;
		height:0.2rem;
	}
	.router-link-active{
		color:#0598ff;
	}
</style>