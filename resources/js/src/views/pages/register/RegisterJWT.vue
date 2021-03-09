<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="flex w-full justify-center mt-2">
    <div class="flex gap-0 register-board-wrapper">
      <div class="flex-none register-board-left-side"></div>
      <div class="flex-grow register-board-middle-side">

        <div class="inner-wrapper text-center flex flex-col">
            <div class="w-full title mt-5 sm:mt-20">
                <h1 class="font-medium tracking-normal title-font-one">동화 대화 작업방 만들기</h1>
            </div>
            <div class="w-full mt-5 description leading-relaxed	text-lg flex justify-center">
                <div class="color-gray-one title-font-two text-center">창의적 상상의 동화 세상을 꽃피게 할 그림동화 ,<br>Simpatia, '심파띠아'에서 시작합니다.</div>
            </div>

            <div class="scroll-container-one overflow-y-auto">
              <div class="w-full mt-5 description leading-relaxed	text-lg flex justify-end">
                <div class="w-full sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12 grid grid-cols-8 gap-4">
                  <div class="col-span-7">
                    <div class="text-left font-bold">커뮤니티 작가 공개</div>
                    <div class="color-gray-one text-left">검색에서 작가님을 찾을 수 있게 공개해요<br>"테스트 결과는 공유하지 않습니다."</div>
                  </div>
                  <div class="col-span-1 flex items-center"><vs-switch v-model="switchPublic" color="#4098ff" /></div>
                </div>
              </div>
                
              <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
                  <div class="w-full flex justify-center">
                  <vs-input
                      v-validate="'required|alpha_dash|min:3'"
                      data-vv-validate-on="blur"
                      name="displayName"
                      data-vv-as="이름"
                      label="이름"
                      placeholder="작가"
                      v-model="displayName"
                      class="w-full text-lg"/>
                  </div>
                  <div class="w-full flex justify-left">
                  <span class="w-1/2 text-danger text-sm">{{ errors.first('displayName') }}</span>
                  </div>
              </div>

              <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
                  <div class="w-full flex justify-between">
                    <vs-input
                        v-validate="'required|email|min:3'"
                        data-vv-validate-on="blur"
                        name="email"
                        data-vv-as="이메일 주소"
                        label="이메일 주소"
                        placeholder="클릭하여 작성하세요"
                        v-model="email"
                        class="text-lg w-3/5"/>
                    
                    <vs-select
                      class="selectExample"
                      label="작가 유형"
                      v-model="selectType"
                      >
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in options1" />
                    </vs-select>
                  </div>
                  <div class="w-full flex justify-left">
                    <span class="w-1/2 text-danger text-sm">{{ errors.first('email') }}</span>
                  </div>
              </div>

              <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
                  <div class="w-full flex justify-center">
                  <vs-input
                      v-validate="'required|min:8'"
                      data-vv-validate-on="blur"
                      type="password"
                      name="password"
                      data-vv-as="비밀번호"
                      label="비밀번호"
                      placeholder="최소 8자리 이상: 영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합"
                      v-model="password"
                      ref="password"
                      class="w-full text-lg"/>
                  </div>
                  <div class="w-full flex justify-left">
                  <span class="w-full text-danger text-sm">{{ errors.first('password') }}</span>
                  </div>
              </div>

              <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
                  <div class="w-full flex justify-center">
                  <vs-input
                      v-validate="'required|min:8|confirmed:password'"
                      data-vv-validate-on="blur"
                      type="password"
                      name="confirm_password"
                      data-vv-as="비밀번호 다시쓰기"
                      label="비밀번호 다시쓰기"
                      placeholder=""
                      v-model="confirm_password"
                      class="w-full text-lg"/>
                  </div>
                  <div class="w-full flex justify-left">
                  <span class="w-full text-danger text-sm">{{ errors.first('confirm_password') }}</span>
                  </div>
              </div>

              <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
                  <div>Nationality</div>
                  <div class="flex justify-start mt-3">
                    <vs-radio color="#4098ff" v-model="nationality" vs-value="k">내국인</vs-radio>
                    <vs-radio class="ml-12" color="#4098ff" v-model="nationality" vs-value="f">외국인</vs-radio>
                  </div>
              </div>

              <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
                  <div>성별</div>
                  <div class="flex justify-start mt-3">
                    <vs-radio color="#4098ff" v-model="sex" vs-value="m">남</vs-radio>
                    <vs-radio class="ml-20" color="#4098ff" v-model="sex" vs-value="w">여</vs-radio>
                  </div>
              </div>

              <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
                  <div>생년월일</div>
                  <datepicker placeholder="생년월일을 선택하세요." v-model="birthday" format="yyyy/MM/dd"></datepicker>
              </div>

              <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
                  <div class="w-full flex justify-center">
                  <vs-input
                      v-validate="'required|min:3'"
                      data-vv-validate-on="blur"
                      name="address"
                      data-vv-as="주소지"
                      label="주소지"
                      placeholder="주소지"
                      v-model="address"
                      class="w-full text-lg"/>
                  </div>
                  <div class="w-full flex justify-left">
                  <span class="w-full text-danger text-sm">{{ errors.first('address') }}</span>
                  </div>
              </div>

              <div class="w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col">
                  <div class="w-full flex justify-center">
                  <vs-input
                      v-validate="'required|alpha_dash|min:3'"
                      data-vv-validate-on="blur"
                      name="phonenumber"
                      data-vv-as="전화번호"
                      label="전화번호"
                      placeholder="010-1234-5678"
                      v-model="phonenumber"
                      class="w-full text-lg"/>
                  </div>
                  <div class="w-full flex justify-left">
                  <span class="w-full text-danger text-sm">{{ errors.first("phonenumber") }}</span>
                  </div>
              </div>

              <div class="w-full mt-96 flex justify-start mt-5">
                  <vs-button :disabled="false" @click="onTendencySelect" color="#2BBBDB" class="circle-radius text-xl w-40">성향 맞춤</vs-button>
              </div>

            </div>

              <div class="w-full mt-5 mb-5">
                  <vs-button :disabled="!validateForm" @click="registerUserJWt" color="#2BBBDB" class="circle-radius text-xl cus-btn-width-one">동화 대화 시작하기</vs-button>
              </div>

               <!-- <vs-button  type="border" to="/pages/login" class="mt-6">Login</vs-button>
               <vs-button class="float-right mt-6" @click="registerUserJWt" :disabled="!validateForm">Register</vs-button> -->
        </div>

      </div>
      <div class="flex-none register-board-right-side"></div>
    </div>
  </div>
</template>


<script>
import Datepicker from 'vuejs-datepicker';

export default {
    data() {
        return {
            displayName: this.$store.state.StoreRegisterUserJWT.displayName,
            // displayName: "this.$store.state.StoreRegisterUserJWT.displayName",
            email: this.$store.state.StoreRegisterUserJWT.email,
            password: '',
            confirm_password: '',
            isTermsConditionAccepted: this.$store.state.StoreRegisterUserJWT.isTermsConditionAccepted,
            switchPublic: this.$store.state.StoreRegisterUserJWT.switchPublic,

            selectType: this.$store.state.StoreRegisterUserJWT.selectType,
            options1:[
              {text:'글',value:0},
              {text:'그림',value:1},
              {text:'소리',value:2},
            ],

            nationality: this.$store.state.StoreRegisterUserJWT.nationality,
            sex: this.$store.state.StoreRegisterUserJWT.sex,
            birthday: this.$store.state.StoreRegisterUserJWT.birthday,
            address: this.$store.state.StoreRegisterUserJWT.address,
            phonenumber: this.$store.state.StoreRegisterUserJWT.phonenumber,
        }
    },
    components: {
      Datepicker
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.displayName != '' && this.email != '' && this.password != '' && this.confirm_password != '' && this.nationality != '' && this.sex != '' && this.birthday != '' && this.address != '' && this.phonenumber != '';
            // return !this.errors.any();
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


            // Loading
            this.$vs.loading()

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
              .then(() => { 
                console.log('dispatch registerUserJWT -> then');
                this.$vs.loading.close() 
                })
              .catch(error => {
                console.log('dispatch registerUserJWT -> catch');
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
        onTendencySelect() {
            console.log("onTendencySelect");
            // If form is not validated or user is already login return
            // if (!this.validateForm || !this.checkLogin()) {
            //   return;
            // }

            const payload = {
              userDetails: {
                displayName: this.displayName,
                email: this.email,
                password: this.password,
                confirmPassword: this.confirm_password,

                isTermsConditionAccepted: this.isTermsConditionAccepted,
                switchPublic: this.switchPublic,
                selectType:this.selectType,

                nationality: this.nationality,
                sex: this.sex,
                birthday: this.birthday,
                address: this.address,
                phonenumber: this.phonenumber
              },
              notify: this.$vs.notify
            }
            console.log("!!!!!"); console.log(payload);
            this.$store.dispatch('auth/storeRegisterUserJWT', payload);
            this.$router.push('/pages/tendency-tags-setting').catch(() => {});
        },
        goNext(){}
    }
}
</script>
