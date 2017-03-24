<template>
	<div id="box" class="bj-white">
		<m-header :msg="'选择地址'" to-back="addressBack" @addressBack="addressBack"></m-header>
		<div class="bj-main ">
			<input type="search" class="bj-white" placeholder="请输入地址" 	ref="ipt">
		</div>
	</div>
</template>

<script>
import Header from "../header/header";
export default {
	data () {
		return {
		}
	},
	components:{
		'm-header':Header
	},
	methods:{
		addressBack(){
			this.$store.commit('hideAddressPage')
		}
	},
	computed:{
		addressPage(){
			return this.$store.state.addressPage
		}
	},
	watch:{
		addressPage(val){
			val?this.$refs.ipt.focus():false;
		}
	}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	#box{
		position:fixed;
		left:0;
		top:0;
		width:100%;
		height:100%;
		z-index:9;
	}
	input{
		margin-top: .1rem;
	    width: 90%;
	    height: .54rem;
	    border-radius: .55rem;
	    padding: 0 .36rem;
	    font-size: .26rem;
	}
	.bj-main{
		padding-bottom: 0.3rem;
	}

</style>