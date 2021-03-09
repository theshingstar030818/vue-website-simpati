<template>
  <div class="flex w-full justify-center mt-2">
    <div class="flex gap-0 login-board-wrapper">
      <div class="flex-none login-board-left-side"></div>
      <div class="flex-grow login-board-middle-side">

        <div class="inner-wrapper text-center flex flex-col">
            <div class="w-full title mt-20">
                <h1 class="font-medium tracking-normal px-20 title-font-one">30일간 무료 체험하기!</h1>
            </div>
            <div class="w-full mt-5 description leading-relaxed	text-lg flex justify-center">
                <div class="color-gray-one title-font-two text-left">한달에 4500원으로 무료 체험을<br>시작해보세요! 취소는 언제든지~<br><div class="mt-3">step 2/2</div></div>
            </div>
            <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5">
                <div class="w-2/3 lg:w-3/5">
                    <div class="w-full">매달마다 구독</div>
                    <div class="grid grid-cols-2 w-full cus-border-one p-2" v-bind:class="{'bordor-color-blue': radios1=='monthly'}">
                        <div class="">4,500원</div>
                        <vs-radio v-model="radios1" vs-value="monthly" class="-ml-4"></vs-radio>
                    </div>
                    <div class="w-full mt-5">1년간 매달 구독 <span class="text-blue-500">18% 할인</span></div>
                    <div class="grid grid-cols-2 w-full cus-border-one p-2" v-bind:class="{'bordor-color-blue': radios1=='yearly'}">
                        <div class="">4,500원</div>
                        <vs-radio v-model="radios1" vs-value="yearly" class="-ml-4"></vs-radio>
                    </div>

                    <div class="w-full flex flex-col cus-border-one mt-5 p-2">
                        <div>계좌이체</div>
                        <div class="cus-color-gray-two">xxxx-xxxx-xxxx-x 그림대회 앞</div>
                    </div>

                    <div class="w-full border-0 border-b-1 border-solid cus-border-color-gray-one">&nbsp;</div>
                    <div class="grid grid-cols-2">
                        <div>첫달 30일</div>
                        <div class="text-right">0원</div>
                    </div>

                    <div class="grid grid-cols-2">
                        <div>그 후 30일</div>
                        <div class="text-right">4,500원</div>
                    </div>
                    <div class="w-full cus-color-gray-two mt-3">다음 버튼을 누르면, 서비스 취소 전까지 매달 자동 결제가 신청됩니다. (4,500원/부가세 별도) 한 달 동안 언제든지 취소하시면 자동 결제 되지 않습니다. 일정 달, 년에 대해서 부분 환불 또는 부분 취소가 불가합니다. </div>
                    <div class="w-full cus-pt-four">&nbsp;</div>
                    <div class="w-full">
                        <vs-button :disabled="!validateForm" @click="goNext" color="#2BBBDB" class="circle-radius w-full text-xl">구독 신청하기</vs-button>
                    </div>
                    <div class="w-full cus-pt-five">&nbsp;</div>
                </div>
            </div>
        </div>
    
      </div>
      <div class="flex-none login-board-right-side"></div>
    </div>
  </div>
</template>

<script>
import Dialogs from '../../components/vuesax/dialogs/Dialogs.vue';
export default {
    data() {
        return {
            radios1: 'monthly'
        }
    },
    computed: {
        validateForm() {
        return !this.errors.any();
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
            this.$router.push('/pages/register').catch(() => {})
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