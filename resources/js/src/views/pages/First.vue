<!-- =========================================================================================
    File Name: First.vue
    Description: First Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="flex w-full justify-center mt-2">
    <div class="flex gap-0 login-board-wrapper">
      <div class="flex-none login-board-left-side"></div>
      <div class="flex-grow login-board-middle-side">

        <div class="inner-wrapper text-center flex flex-col">
            <div class="w-full title mt-20">
                <h1 class="font-medium tracking-normal px-20 title-font-one">동화 대화<br>‘공감’</h1>
            </div>
            <div class="w-full mt-8 description leading-relaxed	text-lg px-4">
                <span class="color-gray-one title-font-three">동화 대화에서 작가들의 협업은<br>아이들로 하여금<br>어른의 도움없이<br>혼자 책을 있는 그대로 느끼게 하는<br>미래 고부가가치 사업입니다.</span>
            </div>
            <div class="w-full p-4">&nbsp;</div>
            <div class="w-full">
                <vs-button @click="start_free_trial" color="#2BBBDB" class="circle-radius text-xl cus-btn-width-one">Start free trial</vs-button>
            </div>
            <div class="w-full input-wrapper-two-column mt-3 flex justify-evenly">
                <vs-button color="#bab7b7" type="border" @click="loginback" class="circle-radius text-xl cus-btn-width-one">Log In</vs-button>
            </div>
            <div class="w-full input-wrapper-two-column mt-3 flex justify-evenly">
                <vs-button color="#bab7b7" type="border" @click="onExplore" class="circle-radius text-xl cus-btn-width-one">Explore</vs-button>
            </div>
            <div class="w-full cus-pt-three">&nbsp;</div>
        </div>

      </div>
      <div class="flex-none login-board-right-side"></div>
    </div>
  </div>
</template>


<script>
import VueCountdown from '@chenfengyuan/vue-countdown'

export default {
  data() {
    return {
      value1: ''
    }
  },
  components: {
    'countdown': VueCountdown
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
        start_free_trial(){
            if (!this.checkLogin()) return
            this.$router.push('/pages/trial-step-one').catch(() => {})
        },
        onExplore(){
            if (!this.checkLogin()) return
            this.$router.push('/pages/main/onboarding').catch(() => {})
        }
  }
}

</script>

