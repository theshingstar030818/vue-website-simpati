<template>
  <div class="flex w-full justify-center mt-2">
    <div class="flex gap-0 login-board-wrapper">
      <div class="flex-none login-board-left-side"></div>
      <div class="flex-grow login-board-middle-side">

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
            this.$router.push('/main').catch(() => {})
        }
  }
}

</script>

