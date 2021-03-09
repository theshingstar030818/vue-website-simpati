<!-- =========================================================================================
File Name: StressMeasure.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="flex w-full justify-center mt-2">
    <div class="flex gap-0 register-stress-measure-wrapper pb-8">
      <div class="flex-none register-stress-measure-left-side"></div>
      <div class="flex-grow register-stress-measure-middle-side flex justify-center">

        <div class="tendency-content-header inner-wrapper text-center flex flex-col md:py-5">
            <div class="">
                <div class="w-full title mt-8 sm:mt-10 text-left">
                    <h1 class="font-medium tracking-normal title-font-one">동화 대화 거울</h1>
                </div>
                <div class="w-full mt-0 description leading-relaxed	text-lg flex  text-left">
                    <div class="title-font-two text-left color-gray-two">“작가님의 작품은 당신의 거울입니다.”<br>현재 나의 스트레스 얼마나 될까요?</div>
                </div>
                <hr class="m-4">

                <div class="vs-tabs-wrapper-one">
                    <vs-tabs>
                        <vs-tab label="부모용 테스트">
                            <div class="tab-text" style="">
                                <div class="scroll-container-two overflow-y-auto">
                                    <div class="grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-6 lg:gap-x-40 py-8 pl-4">

                                        <div v-for="(itm, index) in items_for_parent" :key="index" class="slider-item w-full flex flex-col text-left">
                                            <div class="w-full font-semibold">
                                                {{ items_for_parent[index].desc }}
                                            </div>
                                            <div class="w-8/12 flex justify-between mt-2 mb-1 text-xs">
                                                <div>0/낮다</div>
                                                <div>5/높다</div>
                                            </div>
                                            <div class="w-8/12">
                                                <vue-slider
                                                v-model="items_for_parent[index].value"
                                                :adsorb="true"
                                                :interval="1"
                                                :data="data"
                                                :data-value="'id'"
                                                :data-lavel="'name'"
                                                ></vue-slider>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </vs-tab>
                        <vs-tab label="작가용 테스트">
                            <div class="tab-text" style="">
                                <div class="scroll-container-two overflow-y-auto">
                                    <div class="lg:overflow-y-auto grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-5 lg:gap-x-40 py-8 pl-4">

                                        <div v-for="(itm, index) in items_for_artist" :key="index" class="slider-item w-full flex flex-col text-left">
                                            <div class="w-full font-semibold">
                                                {{ items_for_artist[index].desc }}
                                            </div>
                                            <div class="w-8/12 flex justify-between mt-2 mb-1 text-xs">
                                                <div>0/낮다</div>
                                                <div>5/높다</div>
                                            </div>
                                            <div class="w-8/12">
                                                <vue-slider
                                                v-model="items_for_artist[index].value"
                                                :adsorb="true"
                                                :interval="1"
                                                :data="data"
                                                :data-value="'id'"
                                                :data-lavel="'name'"
                                                ></vue-slider>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </vs-tab>
                    </vs-tabs>
                </div>

                <div class="w-full">
                    <vs-button :disabled="!validateForm" @click="goRegister" color="#2BBBDB" class="circle-radius text-xl w-40 cus-btn-width-three">취소</vs-button>
                    <vs-button :disabled="!validateForm" @click="goRegister" color="#2BBBDB" class="circle-radius text-xl w-40 cus-btn-width-three">맞춤 테그 설정 완료</vs-button>
                </div>

            </div>

        </div>

      </div>
      <div class="flex-none register-board-right-side"></div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css'

export default {
    data() {
        return {
            items_for_artist : [
                {
                    id: 1,
                    desc: "많은 일(직장)을 해야 해요",
                    value: 1,
                },
                {
                    id: 2,
                    desc: "다른 사람(직장)을 위한 일을 많이 해요",
                    value: 1,
                },
                {
                    id: 3,
                    desc: "일(직장)을 할 때 실수가 없어야 해요",
                    value: 1,
                },
                {
                    id: 4,
                    desc: "일(직장)을 할 때 부적절하게 할 때가 있어요",
                    value: 1,
                },
                {
                    id: 5,
                    desc: "다른 사람들이 내 일(직장)을 과소 평가해요",
                    value: 1,
                },
                {
                    id: 6,
                    desc: "내가 하고 있는 일(직장)에 불만을 느껴요",
                    value: 1,
                },
                {
                    id: 7,
                    desc: "누군가와 의견이 맞지 않아요",
                    value: 1,
                },
                {
                    id: 8,
                    desc: "다른 사람들과 좋은 관계를 유지하는 것이 중요해요",
                    value: 1, 
                },
            ],
        
            items_for_parent : [
                {
                    id: 1,
                    desc: "가끔 어떤 일을 잘 처리할 수 없어요",
                    value: 1,
                },
                {
                    id: 2,
                    desc: "생활의 많은 부분을 포기하고 싶어요",
                    value: 1,
                },
                {
                    id: 3,
                    desc: "육아에 대한 책임감이 커요",
                    value: 1,
                },
                {
                    id: 4,
                    desc: "나를 좋아하지 않아요",
                    value: 1,
                },
                {
                    id: 5,
                    desc: "나를 보고 잘 웃지 않아요",
                    value: 1,
                },
                {
                    id: 6,
                    desc: "그만두게 하는 것이 어려워요",
                    value: 1,
                },
                {
                    id: 7,
                    desc: "아이가 즐겁게 웃지 않아요",
                    value: 1,
                },
                {
                    id: 8,
                    desc: "아이는 어떤일을 잘 해내지 못해요",
                    value: 1, 
                },
                {
                    id: 9,
                    desc: "아이는 나를 무척 속상하게 해요",
                    value: 1, 
                },
                {
                    id: 10,
                    desc: "아이는 감정을 쉽게 폭발시켜요",
                    value: 1, 
                },
                {
                    id: 11,
                    desc: "길들이는 것이 어려워요",
                    value: 1, 
                },
            ],

            data: [{
                id: 1,
                name: '1/낮다',
            }, {
                id: 2,
                name: '2',
            }, {
                id: 3,
                name: '3',
            }, {
                id: 4,
                name: '4',
            }, {
                id: 5,
                name: '5/높다',
            }],
        }
    },
    components: {
      Datepicker,
      VueSlider
    },
    computed: {
        validateForm() {
            // return !this.errors.any() && this.displayName != '' && this.email != '' && this.password != '' && this.confirm_password != '' && this.isTermsConditionAccepted === true;
            return !this.errors.any();
        }
    },
    methods: {
        checkLogin() {
          // If user is already logged in notify
          if(this.$store.state.auth.isUserLoggedIn()) {

            // Close animation if passed as payload
            // this.$vs.loading.close()

            this.$vs.notify({
              title: 'Login Attempt',
              text: 'You are already logged in!',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'warning'
            })

            return false
          }
          return true
        },
        registerUserJWt() {
            // If form is not validated or user is already login return
            if (!this.validateForm || !this.checkLogin()) return

            const payload = {
              userDetails: {
                displayName: this.displayName,
                email: this.email,
                password: this.password,
                confirmPassword: this.confirm_password
              },
              notify: this.$vs.notify
            }
            this.$store.dispatch('auth/registerUserJWT', payload)
        },

        goRegister(){
            this.$router.push('/pages/register').catch(() => {});
        }
    }
}
</script>

<style lang="scss">
    .vue-slider-marks {
        background-color: #b3ddff;
    }
    .vue-slider-mark {
        width: 15px !important;
        height: 15px !important;
        // left: 25%;
        border-radius: 8px !important;
        background-color: #b8c2cc !important;
        &.vue-slider-mark-active {
            background-color: #4098ff !important;
        }
    }
    .vue-slider-dot-handle {
        background-color: #008dff !important;
    }

    .ul-tabs{
        &.vs-tabs--ul {
            &.ul-tabs-left {
                justify-content: center;
            }
        }
    }

    .vs-tabs--li {
        margin: 0px 15px;
        border: 1px solid #757575;
        border-radius: 20px;
        &.activeChild {
            border: 1px solid blue;
            border-radius: 20px;
        }
        @media(max-width:639px) {
            margin: 0px 3px;
        }
        /* Small (sm) */
        @media (min-width: 640px) { 
        }
        /* Medium (md) */
        @media (min-width: 768px) {
        }
        /* Large (lg) */
        @media (min-width: 1024px) {
        }
        /* Extra Large (xl) */
        @media (min-width: 1280px) { 
        }    
        /* Extra Large (xl) */
        @media (min-width: 1680px) { 
        }
        /* Extra Large (xl) */
        @media (min-width: 1920px) { 
        }
    }
    .line-vs-tabs {
        display:none !important;
    }
</style>