<template>
  <transition name="slide">
        <div class="l-modal" v-if="showNavItems">
            <div class="text-red-500 bg-white w-3/5 ml-auto shadow h-full py-3 px-6 relative">
                <button @click="$emit('toggleNav')" class="absolute right-4 top-2">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.4502 8L8.4502 24" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.4502 8L24.4502 24" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <router-link to="/" class="text-gray-700 mt-12 block font-medium">Home</router-link>
                <router-link to="/" class="text-gray-700 mt-6 block font-medium">Dashboard</router-link>
                <router-link to="/" class="text-gray-700 mt-6 block font-medium">Projects</router-link>
                <router-link to="/" class="text-gray-700 mt-6 block font-medium">Tasks</router-link>
                <router-link to="/" class="text-gray-700 mt-6 block font-medium">Reporting</router-link>
                <router-link to="/" class="text-gray-700 mt-6 block font-medium">Users</router-link>
                
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        showNavItems:{
            type: Boolean,
            required: true,
        }
    }

}
</script>

<style>
.l-modal{
  display: block;
  position: fixed;
  z-index: 11000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #F9F5FF;
}
.slide-enter-active{
  animation-name: slide-in;
  animation-duration: .5s;
}
.slide-leave-active{
  animation: slide-in .5s reverse;
  /* transition: opacity .1s ease-out; */
}
@keyframes slide-in {
  0%{
    transform: translateX(400px);
  }
  100%{
    transform: translateX(0);
  }
}
</style>