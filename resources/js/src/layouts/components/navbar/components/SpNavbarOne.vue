 <!-- =========================================================================================
    File Name: SpNavbarOne.vue
    Description: Rendering of Simpatia Navbar
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="mt-5">
        <vs-navbar v-model="activeItem" class="p-2" v-if="isShowLogin">

            <div slot="title">
              <a id="logo" href="#">
                <img id="logo-img" src="@assets/images/logo/logo.png" alt="logo" class="mx-auto">
              </a>
            </div>

            <vs-navbar-item index="0">
                <div @click="loginback" class="text-base cursor-pointer hover:underline">Log In</div>
            </vs-navbar-item>
        </vs-navbar>
        <div slot="title" v-else>
          <a id="logo" href="#">
            <img src="@assets/images/logo/logo.png" alt="logo" class="mx-auto">
          </a>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        activeItem: 0
    }),
    props: {
      isShowLogin: { type: Boolean, default: true },
    },
    methods: {
      checkLogin() {
      // If user is already logged in notify
        if (this.$store.state.auth.isUserLoggedIn()) {
          // Close animation if passed as payload
          // this.$vs.loading.close()

          this.$vs.notify({
          title: '로그인 시도',
          text: '이미 로그인하셨습니다!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
          })
          return false
        }
        return true
      },
      loginback(){
          if (!this.checkLogin()) return
          this.$router.push('/pages/login').catch(() => {})
      },
    }
}
</script>
