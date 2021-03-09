<template>
  <div class="flex w-full justify-center mt-2">
    <div class="flex gap-0 login-board-wrapper">
      <div class="flex-none login-board-left-side"></div>
      <div class="flex-grow login-board-middle-side">

        <div class="inner-wrapper text-center flex flex-col">
            <div class="w-full title mt-5 sm:mt-20">
                <h1 class="font-medium tracking-normal title-font-one">30일간 무료 체험하기!</h1>
            </div>
            <div class="w-full mt-5 description leading-relaxed	text-lg flex justify-center">
                <div class="color-gray-one title-font-two text-left">한달에 4500원으로 무료 체험을<br>시작해보세요! 취소는 언제든지~<br><div class="mt-3">step 1/2</div></div>
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
                    class="w-1/2 text-lg"/>
                </div>
                <div class="w-full flex justify-center">
                <span class="w-1/2 text-danger text-sm">{{ errors.first('email') }}</span>
                </div>
            </div>
            <div class="w-full text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
                <div class="w-full flex justify-center">
                <vs-input data-vv-validate-on="blur"
                    v-validate="'required|min:6|max:10'"
                    type="password"
                    name="password"
                    data-vv-as="비밀번호"
                    label="비밀번호"
                    placeholder="클릭하여 작성하세요"
                    v-model="password"
                    class="w-1/2 text-lg" />
                </div>
                <div class="w-full flex justify-center">
                <span class="w-1/2 text-danger text-sm">{{ errors.first('password') }}</span>
                </div>
            </div>
            <div class="w-full input-wrapper-two-column mt-5 flex justify-evenly pt-5">
              <vs-checkbox color="dark" :disabled="true" v-model="check1" class="lg:w-1/2 w-2/3 text-left title-font-five whitespace-nowrap">&nbsp;&nbsp;동화 대화의 최신 정보 업데이트를 부탁해요</vs-checkbox>
            </div>
            <div class="w-full input-wrapper-two-column mt-5 flex justify-evenly">
              <vs-checkbox color="dark" v-model="check2" class="lg:w-1/2 w-2/3 text-left title-font-five whitespace-nowrap">&nbsp;&nbsp;[필수] 그림대화 <a href="#">이용약관</a><br>&nbsp;&nbsp;[필수] 그림대화 <a href="#">개인정보 수집 및 이용동의</a></vs-checkbox>
            </div>
            <div class="w-full input-wrapper-two-column mt-5 flex justify-evenly">
              <vs-checkbox color="dark" v-model="check3" class="lg:w-1/2 w-2/3 text-left title-font-five whitespace-nowrap">&nbsp;&nbsp;[필수] 한 달 무료 이용 후,<br><a href="#">매월 정기결제</a> 에 동의합니다.</vs-checkbox>
            </div>
            <div class="w-full p-3">&nbsp;</div>
            <div class="w-full mt-96">
                <vs-button :disabled="!validateForm" @click="goNext" color="#2BBBDB" class="circle-radius text-xl cus-btn-width-one">다음</vs-button>
            </div>
            <div class="w-full p-5">&nbsp;</div>
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
            email: '',
            password: '',
            check1: true,
            check2: false,
            check3: false
        }
    },
    computed: {
        validateForm() {
        // return !this.errors.any() && this.email != '' && this.password != '' && this.check2 && this.check3;
        return !this.errors.any() && this.check2 && this.check3;
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
        goNext(){
            if (!this.checkLogin()) return
            this.$router.push('/pages/trial-step-two').catch(() => {})
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