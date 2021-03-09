<template>
  <div class="layout--full-page-three">
    <div class="flex justify-center">
      <div class="login-header-wrapper">
        <sp-navbar-two :isShowLogin=true>
        </sp-navbar-two>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import SpNavbarTwo from '../components/navbar/components/SpNavbarTwo.vue'

export default {
  components: {
    SpNavbarTwo,
  }
}
</script>

<style>
.vs-navbar {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>