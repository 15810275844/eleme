<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <transition name="right">
            <m-address-opt v-show="addressPage" ></m-address-opt>
        </transition>
        <m-footer></m-footer>
    </div>
</template>

<script>
import Footer from "./components/footer/Footer";
import AddressOpt from "./components/addressOpt/AddressOpt";
import { mapState } from 'vuex';
export default {
    name: 'app',
    components: {
        'm-footer': Footer,
        'm-address-opt': AddressOpt
    },
    computed: mapState(['addressPage']),
    watch: {
        $route(to) {
        }
    }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
    .right-enter-active,.right-leave-active{
        transition:all .3s;
    }
    .right-enter-active {
        transform: translateX(0%);
    }
    .right-enter,.right-leave-active{
        transform: translateX(100%);
    }
</style>
