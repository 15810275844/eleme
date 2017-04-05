<template>
	<div>
        <m-header msg="订单" fixed="true"></m-header>
		{{msg}}
	</div>
</template>

<script>
import Header from '../header/header';
export default {
	data () {
		return {
			msg:'我是order'
		}
	},
    components:{
        'm-header':Header
    }
}
</script>

<style scoped>

</style>
Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.
