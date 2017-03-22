<template>
	<div>
		<header>
			<div class="top">
				<div class="location ellipsis-1">
					<i class="icon iconfont icon-location"></i>
					<h1>朝阳区大屯路金泉家园</h1>
				</div>
				<div class="weather flex">
					<div class="tpt">
						<p>19°</p>
						<span>晴天</span>
					</div>
					<i class="icon iconfont icon-weather"></i>
				</div>
			</div>
			<div class="search">
				<form action="">
					<input type="text" placeholder="搜索商家、商品">
				</form>
			</div>
			<div class="list">
				<div>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
					<router-link to="home">冒菜</router-link>
				</div>
			</div>
		</header>
		<mt-swipe :auto="0">
	  		<mt-swipe-item>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/01.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>美食</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/02.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>甜品饮品</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/03.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>商店超市</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/04.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>预订早餐</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/05.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>果蔬生鲜</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/06.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>新店特惠</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/07.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>准时达</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/08.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>简餐</span>
	  			</router-link>
	  		</mt-swipe-item>
	  		<mt-swipe-item>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/01.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>土豪推荐</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/02.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>鲜花蛋糕</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/03.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>汉堡</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/04.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>日韩料理</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/05.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>麻辣烫</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/06.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>披萨意面</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/07.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>川湘菜</span>
	  			</router-link>
	  			<router-link to="home" tag="div" class="content">
					<div class="img-block">
						<img src="./images/08.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>包子粥店</span>
	  			</router-link>
	  		</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
export default {
	name:'Home',
	data () {
		return {
			msg: '首页'
		}
	},
	methods:{
	},
	mounted () {
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
		width:3.7rem;
		padding-top:0.24rem;
		line-height:0.5rem;
	}
	.location h1{
		font-size:0.36rem;
		color:#fff;
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
	.mint-swipe{
		height:3.54rem;
		background:#ccc;
	}
	.mint-swipe-item{
		display:flex!important;
		flex-wrap:wrap;
	}
	.mint-swipe-items-wrap .content{
		width:25%;
	}
	img{
		width:100%;
		display:block;
	}
	.mint-swipe-items-wrap .img-block{
		width:0.9rem;
		height:0.9rem;
		margin:0 auto;
		margin-top:0.22rem;
	}
	.mint-swipe-items-wrap span{
		display:inline-block;
		margin-top:0.1rem;
	}

</style>