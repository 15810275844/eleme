<template>
	<header>
		<div class="top">
			<router-link to="home" tag="div" class="location ">
				<i class="icon iconfont icon-msnui-pos"></i>
				<h1 class="ellipsis-1">朝阳区大屯路金泉家园</h1>
				<i class="icon iconfont icon-wodedingdan18"></i>
			</router-link>
			<div class="weather flex">
				<div class="tpt">
					<p>19°</p>
					<span>晴天</span>
				</div>
				<i class="icon iconfont icon-tianqi"></i>
			</div>
		</div>
		<div class="search">
			<form action="">
				<input type="text" placeholder="搜索商家、商品">
			</form>
		</div>
		<div class="list">
			<div>
				<router-link to="home" v-for="(item,index) in 12" :key="index">星巴克</router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data () {
		return {
		}
	}
}
</script>

<style scoped>
	header{
		height:2.3rem;
		background:#0096ff;
		padding-left: 0.28rem;
	}
	header .top{
		display:flex;
		justify-content:space-between;
		height:0.82rem;
	}
	.location{
		display:flex;
		padding-top:0.24rem;
		line-height:0.5rem;
		position:relative;
	}
	.location h1{
		font-size:0.36rem;
		color:#fff;
		width:3.5rem;
	}
	.location i {
		color:#fff;
		font-size:0.36rem;
		position:relative;
		left:-0.06rem;
	}
	.weather {
		padding-right: 0.34rem;
		color:#fff;
	}
	.weather i{
		padding-top: 0.2rem;
		font-size:0.5rem;
	}
	.weather .tpt{
		padding-top:0.18rem;
		padding-right: 0.15rem;
		text-align:left;
	}
	.tpt{
		font-size:0.2rem;
	}
	.tpt p{
		font-weight: 400;
		font-size:0.28rem;
	}
	.search{
		padding-right: 0.28rem;
	}
	.search input {
		background:#fff;
		text-align:center;
		border:0;
		height:0.72rem;
		width:100%;
		border-radius:0.5rem;
		margin:8px 0;
		font-size:0.26rem; 
		margin-bottom:0;
	}
	header .list {
		width:100%;
		overflow:hidden;
	}
	header .list div{
		display: flex;
		overflow-x: auto;
		align-items: center;
		white-space: nowrap;
		height: .6rem;
	}
	header .list a{
		color:#fff;
		margin-right:20px;
	}
	header .icon-wodedingdan18{
		font-size:0.12rem;
		margin-left:0.1rem;
	}
</style>