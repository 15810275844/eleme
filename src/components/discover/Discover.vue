<template>
	<div>
        <m-header msg="发现" fixed="true"></m-header>
		<div class="border-b flex header border-t">
            <a href="https://h5.ele.me/exchange/" class="head-l  border-r">
                    <h3 class="first">积分商城</h3>
                <p>0元好物在这里！</p>
                <img class="img-block" src="./images/head-l.jpeg" alt="积分商城">
            </a>
            <div class="head-r flex-1">
                <a href="https://h5.ele.me/exchange/" class="t border-b flex">
                    <div>
                        <h3 class="two">精彩内容</h3>
                        <p>素食美味大推介</p>
                    </div>
                    <div>
                        <img class="img-block" src="./images/head-r-t.jpeg" alt="精彩内容">
                    </div>
                </a>
                <a href="https://h5.ele.me/commend/#!/" class="b flex">
                    <div>
                        <h3 class="three">推荐有奖</h3>
                        <p>5元现金拿不停</p>
                    </div>
                    <div>
                        <img class="img-block" src="./images/head-r-b.jpeg" alt="推荐有奖">
                    </div>
                </a>
            </div>
        </div>
        <div class="bwc">
            <a href="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/">
                <img src="./images/bawangcan.jpeg" class="img-block" alt="">
            </a>
        </div>
	</div>
</template>

<script>
import Header from '../header/header'
export default {
	data () {
		return {
			msg:'我是discover'
		}
	},
    components:{
        'm-header':Header
    }
}
</script>

<style scoped type="text/less" lang="less">
    @p:0.75;
    .header{
        background:#fff;
        box-sizing:border-box;
        margin-bottom: 0.28*0.75rem;
        h3{
            font-size: .36rem;
            margin-bottom: .12rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &.first{
                color:rgb(255, 151, 0);;
            }
            &.two{
                color:rgb(245, 120, 93);
            }
            &.three{
                color:rgb(27, 169, 225);
            }
        }
        p{
            color:#999;
        }
        .head-l{
            height:3.46rem;
            width:50%;
            padding:.3rem;
            padding-top:.48rem;
            text-align:left;
            box-sizing: border-box;
            img{
                width:1.5rem;
                margin-left:.4rem;
                margin-top:.2rem;
            }
        }
        .head-r{
            .t,.b{
                padding:.48rem .3rem;
                text-align:left;
                justify-content:space-between;
                padding-bottom:.3rem;
            }
            .b{
                padding-bottom:0;
                padding-top:.26rem;
            }
            img{
                width:.9rem;
            }
        }
    }
    .bwc{
        margin-bottom:.2rem;
    }
</style>
