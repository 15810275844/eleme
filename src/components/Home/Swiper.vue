<template>
	<div id="swiper">
		<mt-swipe :auto="0" :prevent="true">
		  <mt-swipe-item v-for="(item,index) in [1,2]" :key="index">
				<router-link to="home" tag="div" class="col-xs-25 text-center">
					<div class="img-block">
						<img src="./images/01.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>美食</span>
				</router-link>
				<router-link to="home" tag="div" class="col-xs-25 text-center">
					<div class="img-block">
						<img src="./images/02.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>甜品饮品</span>
				</router-link>
				<router-link to="home" tag="div" class="col-xs-25 text-center">
					<div class="img-block">
						<img src="./images/03.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>商店超市</span>
				</router-link>
				<router-link to="home" tag="div" class="col-xs-25 text-center">
					<div class="img-block">
						<img src="./images/04.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>预订早餐</span>
				</router-link>
				<router-link to="home" tag="div" class="col-xs-25 text-center">
					<div class="img-block">
						<img src="./images/05.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>果蔬生鲜</span>
				</router-link>
				<router-link to="home" tag="div" class="col-xs-25 text-center">
					<div class="img-block">
						<img src="./images/06.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>新店特惠</span>
				</router-link>
				<router-link to="home" tag="div" class="col-xs-25 text-center">
					<div class="img-block">
						<img src="./images/07.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>准时达</span>
				</router-link>
				<router-link to="home" tag="div" class="col-xs-25 text-center">
					<div class="img-block">
						<img src="./images/08.jpeg" height="-1" width="-1" alt="">
					</div>
					<span>下午茶</span>
				</router-link>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
</script>

<style scoped>
	#swiper{
		margin-bottom:0.2rem;
	}
	.mint-swipe-indicators .mint-swipe-indicator{
		width:0.2rem;
		height:0.2rem;
		opacity:0.6;
	}
	.text-center{
		margin-top:0.22rem;

	}
	.mint-swipe{
		height:3.54rem;
		background:#fff;
	}
	.mint-swipe-item{
		display:flex!important;
		flex-wrap:wrap;
	}
	img{
		width:100%;
		display:block;
	}
	.mint-swipe-items-wrap .img-block{
		width:0.9rem;
		height:0.9rem;
		margin:0 auto;
	}
	.mint-swipe-items-wrap span{
		display:inline-block;
		margin-top:0.1rem;
	}
	.mint-swipe-items-wrap > div{
		height:auto;
	}

</style>