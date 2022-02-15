<template>
  <div class="py-2 flex justify-between bg-white px-2 border-b border-gray-200">
        <img src="~/assets/Logo.png" alt="logo">
        <button type="button" @click="$store.commit('toggleNav')">
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8.5C0 4.08172 3.58172 0.5 8 0.5H32C36.4183 0.5 40 4.08172 40 8.5V32.5C40 36.9183 36.4183 40.5 32 40.5H8C3.58172 40.5 0 36.9183 0 32.5V8.5Z" fill="white"/>
                <path d="M11 20.5H25M11 14.5H29M11 26.5H29" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <mobile-nav-items :showNavItems="showNavItems" v-on:toggleNav="toggleNav"></mobile-nav-items>
  </div>
</template>

<script>
import MobileNavItems from './MobileNavItems.vue'
import {mapState} from 'vuex'
export default {
  components: { MobileNavItems },
    computed:{
        ...mapState({
            showNavItems : state => state.showNavItems
        })
    },
    methods: {
        toggleNav(){
            this.$store.commit('toggleNav')
        }
    }
}
</script>

<style>

</style>