<template>
	<div>
        <m-header msg="我的" fixed="true"></m-header>
		{{msg}}
	</div>
</template>

<script>
import Header from '../header/header';
export default {
	data () {
		return {
			msg:'我是 User'
		}
	},
    components:{
        'm-header':Header
    }
}
</script>

<style scoped>

</style>
