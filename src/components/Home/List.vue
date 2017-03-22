<template>
	<div id="list">
		<h3 class="text-l">推荐商家</h3>
		<div class="store flex bj-white">
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
				<div class="star flex">
					<div>
						<m-star :grade="'1.6'"></m-star>
					</div>
					<div>asd</div>
				</div>
				<div class="btm">
					3
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
	}
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
		margin-top:0.1rem;
	}


</style>