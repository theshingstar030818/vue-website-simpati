<!-- =========================================================================================
    File Name: ForgotPassword.vue
    Description: FOrgot Password Page
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
                <h1 class="title-font-one font-medium font-familiy-NanumSquareB">이런! 비밀번호를 잊어버리셨군요</h1>
            </div>
            <div class="w-full mt-5 description leading-relaxed	text-lg">
                <span class="color-gray-one title-font-two">저희가 찾았습니다.</span>
            </div>
            <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col color-gray-one">
                <div class="w-full flex justify-center">
                <vs-input
                    type="email"
                    v-validate="'required|email|min:3'"
                    data-vv-validate-on="blur"
                    name="email"
                    data-vv-as="이메일 주소"
                    label="이메일 주소"
                    placeholder="비밀번호 재 설정을 위한 이메일을 입력하세요"
                    v-model="value1"
                    class="cus-btn-width-two text-lg"/>
                </div>
                <div class="w-full flex justify-center">
                <span class="w-1/2 text-danger text-sm">{{ errors.first('email') }}</span>
                </div>
            </div>
            <div class="w-full input-wrapper-two-column mt-5 flex justify-evenly">
                <span class="w-1/2 text-left color-gray-one">다시 로그인하기</span>
            </div>
            <div class="w-full input-wrapper-two-column mt-5 flex justify-evenly">
                <vs-button color="#bab7b7" type="border" @click="loginback" class="circle-radius text-xl cus-btn-width-one">Log In</vs-button>
            </div>
            <div class="w-full cus-pt-six">&nbsp;</div>
            <div class="w-full mt-96">
                <vs-button @click="recoverPassword" color="#2BBBDB" class="circle-radius text-xl cus-btn-width-one">비밀번호 재설정하기</vs-button>
            </div>
            <div class="w-full cus-pt-seven">&nbsp;</div>
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
            value1: ''
        }
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
        recoverPassword(){
            this.$http.post("/auth/reset-password", {email: this.value1}).then(result => {
                this.response = result.data;
                console.log(result.data);
            }, error => {
                console.error(error);
            });
        },
        loginback(){
            if (!this.checkLogin()) return
            this.$router.push('/pages/login').catch(() => {})
        }
    }
}
</script>

<style lang="scss">
  .inner-wrapper {
    h1 {
      font-size: 2.5rem;
    }
  }
</style>