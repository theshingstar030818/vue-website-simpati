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

                <div class="scroll-container-two overflow-y-auto">
                    <div class="grid lg:grid-cols-6">

                        <vs-checkbox v-for="(itm, index) in items_for_tags" :key="index" color="dark" v-model="items_for_tags[index].value" class="my-3 text-left title-font-five whitespace-nowrap">{{ itm.desc}}</vs-checkbox>

                    </div>
                </div>
 
                <div class="w-full">
                    <vs-button :disabled="!validateForm" @click="goRegister" color="#2BBBDB" class="circle-radius text-xl w-40 cus-btn-width-three">취소</vs-button>
                    <vs-button :disabled="!validateForm" @click="goNext" color="#2BBBDB" class="circle-radius text-xl w-40 cus-btn-width-three">다음</vs-button>
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
            items_for_tags : [
                {
                    id: 1,
                    desc: "낮은 활동성",
                    value: false,
                },
                {
                    id: 2,
                    desc: "계획성",
                    value: false,
                },
                {
                    id: 3,
                    desc: "조작성",
                    value: false,
                },
                {
                    id: 4,
                    desc: "사고적",
                    value: false,
                },
                {
                    id: 5,
                    desc: "높은 반응 강도",
                    value: false,
                },
                {
                    id: 6,
                    desc: "수줍음",
                    value: false,
                },
                {
                    id: 7,
                    desc: "애착과 사랑",
                    value: false,
                },
                {
                    id: 8,
                    desc: "상상의 힘",
                    value: false,
                },
                {
                    id: 9,
                    desc: "포근함 & 무서운 동물",
                    value: false,
                },
                {
                    id: 10,
                    desc: "그림자 놀이터",
                    value: false,
                },
                {
                    id: 11,
                    desc: "두려움이 많은 아이",
                    value: false,
                },
                {
                    id: 12,
                    desc: "떼쓰는 우리 아이",
                    value: false,
                },
                {
                    id: 13,
                    desc: "규칙성",
                    value: false,
                },
                {
                    id: 14,
                    desc: "낮은 반응강도",
                    value: false,
                },
                {
                    id: 15,
                    desc: "비사고적",
                    value: false,
                },
                {
                    id: 16,
                    desc: "지속성",
                    value: false,
                },
                {
                    id: 17,
                    desc: "높은 호기심",
                    value: false,
                },
                {
                    id: 18,
                    desc: "괴물의 시기",
                    value: false,
                },
                {
                    id: 19,
                    desc: "모험",
                    value: false,
                },
                {
                    id: 20,
                    desc: "숲, 정글 탐험",
                    value: false,
                },
                {
                    id: 21,
                    desc: "화가솥은 아이",
                    value: false,
                },
                {
                    id: 22,
                    desc: "부끄럼 쟁이",
                    value: false,
                },
                {
                    id: 23,
                    desc: "겁이 많은 아이",
                    value: false,
                },
                {
                    id: 24,
                    desc: "낮은 호기심",
                    value: false,
                },
                {
                    id: 25,
                    desc: "높은 활동성",
                    value: false,
                },
                {
                    id: 26,
                    desc: "비계획성",
                    value: false,
                },
                {
                    id: 27,
                    desc: "집중력",
                    value: false,
                },
                {
                    id: 28,
                    desc: "분명한 의사표현",
                    value: false,
                },
                {
                    id: 29,
                    desc: "부모 이해",
                    value: false,
                },
                {
                    id: 30,
                    desc: "나의 분신(내 몸)",
                    value: false,
                },
                {
                    id: 31,
                    desc: "구름타고 상상놀이",
                    value: false,
                },
                {
                    id: 32,
                    desc: "불안한 아이",
                    value: false,
                },
                {
                    id: 33,
                    desc: "말썽꾸러기 아이",
                    value: false,
                },
                {
                    id: 34,
                    desc: "외로운 아이",
                    value: false,
                },
                {
                    id: 35,
                    desc: "사물의 영속성",
                    value: false,
                },
                {
                    id: 36,
                    desc: "거울 역할 놀이",
                    value: false,
                },
                {
                    id: 37,
                    desc: "그림자 놀이",
                    value: false,
                },
                {
                    id: 38,
                    desc: "세상이 겁나는 아이",
                    value: false,
                },
                {
                    id: 39,
                    desc: "잠, 꿈 속에서",
                    value: false,
                },
                {
                    id: 40,
                    desc: "복 주머니",
                    value: false,
                },
                {
                    id: 41,
                    desc: "공감",
                    value: false,
                },
                {
                    id: 42,
                    desc: "배려",
                    value: false,
                },
                {
                    id: 43,
                    desc: "지식",
                    value: false,
                },
                {
                    id: 44,
                    desc: "자아 존중",
                    value: false,
                },
                {
                    id: 45,
                    desc: "숲속 이야기",
                    value: false,
                },
                {
                    id: 46,
                    desc: "할아버지, 할머니",
                    value: false,
                },
                {
                    id: 47,
                    desc: "상상 세계",
                    value: false,
                },
                {
                    id: 48,
                    desc: "시간, 변화의 이해",
                    value: false,
                },
                {
                    id: 49,
                    desc: "그 다음은 무엇일까?",
                    value: false,
                },
                {
                    id: 50,
                    desc: "기분이 달라져",
                    value: false,
                },
                {
                    id: 51,
                    desc: "슬픈아이",
                    value: false,
                },
                {
                    id: 52,
                    desc: "형제 관계",
                    value: false,
                },
                {
                    id: 53,
                    desc: "사회성 발달",
                    value: false,
                },
                {
                    id: 54,
                    desc: "불만이 있는 아이",
                    value: false,
                },
                {
                    id: 55,
                    desc: "장애가 있는 아이",
                    value: false,
                },
                {
                    id: 56,
                    desc: "도덕과 사랑",
                    value: false,
                },
                {
                    id: 57,
                    desc: "성숙",
                    value: false,
                },
                {
                    id: 58,
                    desc: "여유",
                    value: false,
                },
                {
                    id: 59,
                    desc: "균형놀이",
                    value: false,
                },
                {
                    id: 60,
                    desc: "진심",
                    value: false,
                },
                {
                    id: 61,
                    desc: "믿음",
                    value: false,
                },
                {
                    id: 62,
                    desc: "부모를 이해하기",
                    value: false,
                },
                {
                    id: 63,
                    desc: "요동치는, 고요한 바다",
                    value: false,
                },
                {
                    id: 64,
                    desc: "내 눈은 명탐정",
                    value: false,
                },
                {
                    id: 65,
                    desc: "상실을 체험한 아이",
                    value: false,
                },
                {
                    id: 66,
                    desc: "계절",
                    value: false,
                },
                {
                    id: 67,
                    desc: "친절",
                    value: false,
                },
            ],
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
        goRegister(){
            console.log("TagsSetting page!!");
            console.log(this.$store.state.StoreRegisterUserJWT);
            this.$router.push('/pages/register').catch(() => {});
            // this.$router.go(-1);
        },
        goNext(){
            this.$router.push('/pages/tendency-stressmeasure').catch(() => {});
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