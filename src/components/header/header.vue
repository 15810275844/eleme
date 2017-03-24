<template>
	<header>
		<i class="icon iconfont icon-jiantou" @click="back"></i>
		<h1 class="ellipsis-1">{{msg}}</h1>
	</header>
</template>

<script>

/*
	组建定义名称：m-header
	使用方法
		<m-header :msg="'标题名称'" :back="'后退或者前进的步数'"></m-header>
		back:(可以传后退步数,也可以传父自一定返回函数) 

		

*/
export default {
	data () {
		return {

		}
	},
	methods:{
		back () {
			var propsBack = this.toBack;
			if(isNaN(Number(propsBack))){
				this.$emit(propsBack)
			}else{
				this.$router.go(propsBack);
			};
		}
	},
	props:{
		msg:{
			type:String,
			default:""
		},
		toBack:{
			type:String,
			default:"-1"
		}
	}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	header {
		line-height:0.88rem;
		height:0.88rem;
		background:#0096ff;
		width:100%;
		position: relative;
		h1{
			width: 70%;
			color: #fff;
			margin:0 auto;
			height: 0.88rem;
			font-size: 0.36rem;
		}
		i{
			position: absolute;
			z-index: 1;
			left: 0;
			top: 0;
			width: 15%;
			height: 0.88rem;
			color: #fff;
			font-size: 0.5rem;
			text-align: left;
			box-sizing: border-box;
			padding-left: 0.1rem;
		}
	}
</style>