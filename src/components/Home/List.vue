<template>
	<div id="list">
		<h3 class="text-l">推荐商家</h3>
		<div class="store flex bj-white"  v-for="(item,index) in list" :key="index">
			<div class="l">
				<div class="img">
					<img src="https://fuss10.elemecdn.com/b/b1/0c6a9919098436d2018521e0f36a7png.png?imageMogr/format/webp/" alt="" class="img-block">
				</div>
			</div>
			<div class="r flex-1">
				<div class="top flex">
					<h3 class="brand">DQ(上海人民广场店)</h3>
					<div class="t-tag flex">
						<span>保</span>
						<span>票</span>
						<span>准</span>
					</div>
				</div>
				<div class="star flex color-666">
					<div class="flex">
						<m-star :grade="'4.6'"></m-star>
						<span class="grade">4.6</span>
						<span class="market">月销售25</span>
					</div>
					<div class="tag">
						<span>准时达</span>
						<span>蜂鸟专送</span>
					</div>
				</div>
				<div class="btm flex color-666">
					<div>
						<span>¥20起送</span>
						<span>配送费约¥5</span>
					</div>
					<div>
						<span>826m</span>
						<span>28分钟</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Star from "../star/star.vue";
export default {
	components:{
		'm-star':Star
	},
	props:['list']
}
</script>

<style scoped>
	h3.text-l{
		line-height: 0.68rem;
	    font-weight: 600;
	    background-color: #fff;
	    border-top: 1px solid #eee;
	    border-bottom: 1px solid #eee;
	    font-size: 0.3rem;
	    padding-left: 0.3rem;
	}
	.l{
		position: relative;
	    padding: .3rem .2rem;
	}
	.r{
	    padding: .3rem .2rem .3rem 0;
	}
	.img{
		position: relative;
		width: 1.2rem;
		height: 1.2rem;
	}
	.top h3{
		overflow: hidden;
		margin: 0;
		padding: 0;
		max-width: 3.75rem;
		color: #333;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 700;
		font-size: 0.3rem;
		line-height: 0.32rem;
	}
	.top .brand:before{
		content:'品牌';
		margin-right: 0.1rem;
	    padding: 0.05rem;
	    height: 0.3rem;
	    border-radius: .1rem;
	    background-color: #ffd930;
	    color: #52250a;
	    vertical-align: top;
	    text-align: center;
	    font-weight: 700;
	    font-size: 0.22rem;
	    line-height: .3rem;
	}
	.top{
		justify-content:space-between;
	}
	.t-tag span{
		margin-right: .1rem;
		font-size: .2rem;
		font-style: normal;
		line-height: 1;
		height: .26rem;
		padding: 0.03rem;
		display: inline-block;
		box-sizing: border-box;
		text-align: center;
		border: 1px solid;
		border-radius: 0.03rem;
		color: rgb(153, 153, 153);
	    border-color: rgb(221, 221, 221);
	}
	.star{
		line-height: 24px;
		margin-top:0.2rem;
		justify-content: space-between;
	}
	.star .grade{
		margin:0  0.08rem;
		color: #ff6000;
	}
	.star .tag span{
		padding: 0 0.04rem;
		border: 1px solid #44a5ff;
		border-radius: .04rem;
		background-color: #fff;
		color: #2395ff;
		font-size: .2rem;
		line-height: .26rem;
	}
	.star .tag span:first-child{
		margin-right: .1rem;
	}
	.star .tag span:last-child{
		color: #fff;
		background: #44a5ff;
	}
	.star .market {
		font-size: .22rem;
	}
	.btm{
		margin-top: 0.17rem;
		line-height: .24rem;
		font-size: .22rem;
		justify-content: space-between;
	}
	.btm div:first-child span:last-child,.btm div:last-child span:last-child{
		margin-left: .2rem;
		position: relative;
	}
	.btm div:first-child span:last-child:after,.btm div:last-child span:last-child:after{
		content: '/';
		position: absolute;
		left: -.15rem;
		color: #ddd;
	}
	.btm div:last-child span:last-child{
		color: #2395ff;
	}


</style>