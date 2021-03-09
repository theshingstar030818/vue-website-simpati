<!-- =========================================================================================
  File Name: FullPage.vue
  Description: Full page layout
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="layout--full-page-one">
    <div class="flex justify-center">
      <div class="login-header-wrapper">
        <sp-navbar-one :isShowLogin=true>
        </sp-navbar-one>
        <div class="slogan-board flex flex-col sm:flex-row sm:justify-around text-center mt-0">
          <div class="w-full mt-0 text-left sm:text-center sm:mt-0 sm:w-48 slogan-text">작가들의 짧고 강한 창작물 모여 걸작이 됩니다.</div>
          <div class="w-full mt-0 text-left sm:text-center sm:mt-0 sm:w-48 slogan-text">작가들의 노트, 무드보드로 그림동화 탐색해봐요</div>
          <div class="w-full mt-0 text-left sm:text-center sm:mt-0 sm:w-48 slogan-text">나만의 특별한 그림동화를 제작해봐요</div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import SpNavbarOne from '../components/navbar/components/SpNavbarOne.vue'

export default {
  components: {
    SpNavbarOne,
  }
}
</script>

<style>
.vs-navbar {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>