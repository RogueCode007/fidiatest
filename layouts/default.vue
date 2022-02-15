<template>
  <div>
      <mobile-nav class="lg:hidden"></mobile-nav>
      <nav-bar class="hidden lg:flex"></nav-bar>
      <Header class="hidden lg:flex" />
      <Nuxt />
  </div>
</template>

<script>
import MobileNav from '../components/MobileNav.vue'
import NavBar from '../components/NavBar.vue'
import Header from '../components/Header.vue'
export default {
  components: { MobileNav, NavBar, Header},

}
<
    NavBar/script>

<style>

</style>