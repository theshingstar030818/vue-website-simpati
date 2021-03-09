<template>
  <div class="flex w-full justify-center mt-2">
    <div class="flex gap-0 login-board-wrapper">
      <div class="flex-none login-board-left-side"></div>
      <div class="flex-grow login-board-middle-side">

        <div class="inner-wrapper text-center flex flex-col">
            <div class="w-full title mt-0 sm:mt-20">
              <div class="title-font-one font-medium px-15 font-familiy-NanumSquareB">멋진 그림 동화를 만들어봐요</div>
            </div>
            <div class="w-full mt-5 description leading-relaxed	text-lg title-font-two">
              <span class="color-gray-one">창의적 상상의 동화, 세상을 꽃피게 할 <br>그림동화, <br>여기서 시작합니다. </span>
            </div>
            <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
              <div class="w-full flex justify-center">
                <vs-input
                    v-validate="'required|email|min:3'"
                    data-vv-validate-on="blur"
                    name="email"
                    data-vv-as="이메일 주소"
                    label="이메일 주소"
                    placeholder="클릭하여 작성하세요"
                    v-model="email"
                    class="w-full sm:w-1/2 text-lg"/>
              </div>
              <div class="w-full flex justify-center">
                <span class="w-1/2 text-danger text-sm">{{ errors.first('email') }}</span>
              </div>
            </div>
            <div class="w-full text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
              <div class="w-full flex justify-center">
                <vs-input data-vv-validate-on="blur"
                    v-validate="'required|min:8'"
                    type="password"
                    name="password"
                    data-vv-as="비밀번호"
                    label="비밀번호"
                    placeholder="클릭하여 작성하세요"
                    v-model="password"
                    class="w-full sm:w-1/2 text-lg" />
              </div>
              <div class="w-full flex justify-center">
                <span class="w-1/2 text-danger text-sm">{{ errors.first('password') }}</span>
              </div>
            </div>
            <div class="w-full input-wrapper-two-column mt-5 flex justify-evenly">
              <div>
                <vs-button @click="registerUser" color="#bab7b7" type="flat" class="circle-radius">회원 가입하기</vs-button>
              </div>
              <div>
                <vs-button @click="recoveryPwd" color="#bab7b7" type="flat" class="circle-radius">비밀번호 찾기</vs-button>
              </div>
            </div>
            <div class="w-full cus-pt-one">&nbsp;</div>
            <div class="w-full">
              <vs-button :disabled="!validateForm" @click="loginJWT" color="#2BBBDB" class="circle-radius text-xl cus-btn-width-one">동화 대화 시작하기</vs-button>
            </div>
            <div class="w-full cus-pt-two">&nbsp;</div>
        </div>

      </div>
      <div class="flex-none login-board-right-side"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // email: 'admin@admin.com',
      // password: 'adminadmin',
      email: '',
      password: '',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.email != '' && this.password != '';
    },
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
    loginJWT() {
      if (!this.checkLogin()) return

      // Loading
      this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password
        }
      }

    this.$store.dispatch('auth/loginJWT', payload)
        .then(() => { this.$vs.loading.close() })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: '오유',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    },
    registerUser() {
      if (!this.checkLogin()) return
      this.$router.push('/pages/register').catch(() => {})
    },
    recoveryPwd() {
      if (!this.checkLogin()) return
      this.$router.push('/pages/forgot-password').catch(() => {})
    }
  }
}

</script>

<style lang="scss">
  .inner-wrapper {
    // h1 {
    //   font-size: 2.5rem;
    // }
  }
</style>