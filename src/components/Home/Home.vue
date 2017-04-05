<template>
	<div ref="profile" class="overflow" >
		<m-header></m-header>
		<m-swiper></m-swiper>
		<h3 class="text-l border-tb">推荐商家</h3>
		<m-list :list="list"></m-list>
		<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" ></infinite-loading>
        <div class="upwrad border" v-upward @click="upwrad"></div>
	</div>
</template>

<script>
import Header from "./Header.vue";
import Swiper from "./Swiper.vue";
import List from "../list/List.vue";
import InfiniteLoading from 'vue-infinite-loading';

export default {
	name:'Home',
	data () {
		return {
			list:[1,2,3],
			windowH:""
		}
	},
	methods:{
		onInfinite() {
			setTimeout(() => {
				const temp = [];
				for (let i = this.list.length + 1; i <= this.list.length + 5; i++) {
					temp.push(i);
				}
				this.list = this.list.concat(temp);
				this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
			}, 1000);
	    },
		aaa () {
			this.$http.get('/api/home/list').then((res)=>{
				var data = res.data;
				console.log(data)
			}).catch((err)=>{
				console.log(err)
			});
		},
        upwrad (){
            document.body.scrollTop = 0 ;
        }
	},
	mounted () {

	},
	computed:{
		addressPage(){
			return this.$store.state.addressPage;
		}
	},
	components: {
		'm-header':Header,
		'm-swiper':Swiper,
		'm-list':List,
		InfiniteLoading
	},
	watch:{
		addressPage(val, oldVal){
			var this_ = this;
			val ? setTimeout(()=>{this_.$refs.profile.style.height = '1px'}, 300) : this_.$refs.profile.style.height = 'auto'
		}
	}


}
</script>

<style scoped>
	h3.text-l{
		line-height: 0.68rem;
	    font-weight: 600;
	    background-color: #fff;
	    font-size: 0.3rem;
	    padding-left: 0.3rem;
	}

</style>
