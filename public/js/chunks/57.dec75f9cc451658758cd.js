(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"8QAU":function(t,e,s){"use strict";s("MTsq")},MTsq:function(t,e,s){var a=s("NToQ");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,i);a.locals&&(t.exports=a.locals)},NToQ:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".register-tabs-container {\n  min-height: 517px;\n}\n[dir] .register-tabs-container .con-tab {\n  padding-bottom: 23px;\n}",""])},Ofs7:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{displayName:this.$store.state.StoreRegisterUserJWT.displayName,email:this.$store.state.StoreRegisterUserJWT.email,password:"",confirm_password:"",isTermsConditionAccepted:this.$store.state.StoreRegisterUserJWT.isTermsConditionAccepted,switchPublic:this.$store.state.StoreRegisterUserJWT.switchPublic,selectType:this.$store.state.StoreRegisterUserJWT.selectType,options1:[{text:"글",value:0},{text:"그림",value:1},{text:"소리",value:2}],nationality:this.$store.state.StoreRegisterUserJWT.nationality,sex:this.$store.state.StoreRegisterUserJWT.sex,birthday:this.$store.state.StoreRegisterUserJWT.birthday,address:this.$store.state.StoreRegisterUserJWT.address,phonenumber:this.$store.state.StoreRegisterUserJWT.phonenumber}},components:{Datepicker:s("+jP+").a},computed:{validateForm:function(){return!this.errors.any()}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUserJWt:function(){if(this.validateForm&&this.checkLogin()){var t={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUserJWT",t)}},onTendencySelect:function(){if(this.validateForm&&this.checkLogin()){var t={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password,isTermsConditionAccepted:this.isTermsConditionAccepted,switchPublic:this.switchPublic,selectType:this.selectType,nationality:this.nationality,sex:this.sex,birthday:this.birthday,address:this.address,phonenumber:this.phonenumber},notify:this.$vs.notify};this.$store.dispatch("auth/storeRegisterUserJWT",t),this.$router.push("/pages/tendency-stressmeasure").catch((function(){}))}},goNext:function(){}}},i=s("KHd+"),l={data:function(){return{displayName:"",email:"",password:"",confirm_password:"",isTermsConditionAccepted:!0}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.displayName&&""!=this.email&&""!=this.password&&""!=this.confirm_password&&!0===this.isTermsConditionAccepted}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUser:function(){if(this.validateForm&&this.checkLogin()){var t={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUser",t)}}}},r={methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerAuth0:function(){this.checkLogin()&&this.$auth.login({target:this.$route.query.to})}}},n={components:{RegisterJwt:Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex w-full justify-center mt-2"},[s("div",{staticClass:"flex gap-0 register-board-wrapper"},[s("div",{staticClass:"flex-none register-board-left-side"}),t._v(" "),s("div",{staticClass:"flex-grow register-board-middle-side"},[s("div",{staticClass:"inner-wrapper text-center flex flex-col"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"scroll-container-one overflow-y-auto"},[s("div",{staticClass:"w-full mt-5 description leading-relaxed\ttext-lg flex justify-end"},[s("div",{staticClass:"w-full sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12 grid grid-cols-8 gap-4"},[t._m(2),t._v(" "),s("div",{staticClass:"col-span-1 flex items-center"},[s("vs-switch",{attrs:{color:"#4098ff"},model:{value:t.switchPublic,callback:function(e){t.switchPublic=e},expression:"switchPublic"}})],1)])]),t._v(" "),s("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",{staticClass:"w-full flex justify-center"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full text-lg",attrs:{"data-vv-validate-on":"blur",name:"displayName","data-vv-as":"이름",label:"이름",placeholder:"작가"},model:{value:t.displayName,callback:function(e){t.displayName=e},expression:"displayName"}})],1),t._v(" "),s("div",{staticClass:"w-full flex justify-left"},[s("span",{staticClass:"w-1/2 text-danger text-sm"},[t._v(t._s(t.errors.first("displayName")))])])]),t._v(" "),s("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",{staticClass:"w-full flex justify-between"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|min:3",expression:"'required|email|min:3'"}],staticClass:"text-lg w-3/5",attrs:{"data-vv-validate-on":"blur",name:"email","data-vv-as":"이메일 주소",label:"이메일 주소",placeholder:"클릭하여 작성하세요"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("vs-select",{staticClass:"selectExample",attrs:{label:"작가 유형"},model:{value:t.selectType,callback:function(e){t.selectType=e},expression:"selectType"}},t._l(t.options1,(function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})})),1)],1),t._v(" "),s("div",{staticClass:"w-full flex justify-left"},[s("span",{staticClass:"w-1/2 text-danger text-sm"},[t._v(t._s(t.errors.first("email")))])])]),t._v(" "),s("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",{staticClass:"w-full flex justify-center"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:8",expression:"'required|min:8'"}],ref:"password",staticClass:"w-full text-lg",attrs:{"data-vv-validate-on":"blur",type:"password",name:"password","data-vv-as":"비밀번호",label:"비밀번호",placeholder:"최소 8자리 이상: 영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("div",{staticClass:"w-full flex justify-left"},[s("span",{staticClass:"w-full text-danger text-sm"},[t._v(t._s(t.errors.first("password")))])])]),t._v(" "),s("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",{staticClass:"w-full flex justify-center"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:8|confirmed:password",expression:"'required|min:8|confirmed:password'"}],staticClass:"w-full text-lg",attrs:{"data-vv-validate-on":"blur",type:"password",name:"confirm_password","data-vv-as":"비밀번호 다시쓰기",label:"비밀번호 다시쓰기",placeholder:""},model:{value:t.confirm_password,callback:function(e){t.confirm_password=e},expression:"confirm_password"}})],1),t._v(" "),s("div",{staticClass:"w-full flex justify-left"},[s("span",{staticClass:"w-full text-danger text-sm"},[t._v(t._s(t.errors.first("confirm_password")))])])]),t._v(" "),s("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",[t._v("Nationality")]),t._v(" "),s("div",{staticClass:"flex justify-start mt-3"},[s("vs-radio",{attrs:{color:"#4098ff","vs-value":"k"},model:{value:t.nationality,callback:function(e){t.nationality=e},expression:"nationality"}},[t._v("내국인")]),t._v(" "),s("vs-radio",{staticClass:"ml-12",attrs:{color:"#4098ff","vs-value":"f"},model:{value:t.nationality,callback:function(e){t.nationality=e},expression:"nationality"}},[t._v("외국인")])],1)]),t._v(" "),s("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",[t._v("성별")]),t._v(" "),s("div",{staticClass:"flex justify-start mt-3"},[s("vs-radio",{attrs:{color:"#4098ff","vs-value":"m"},model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}},[t._v("남")]),t._v(" "),s("vs-radio",{staticClass:"ml-20",attrs:{color:"#4098ff","vs-value":"w"},model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}},[t._v("여")])],1)]),t._v(" "),s("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",[t._v("생년월일")]),t._v(" "),s("datepicker",{attrs:{placeholder:"생년월일을 선택하세요.",format:"yyyy/MM/dd"},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}})],1),t._v(" "),s("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",{staticClass:"w-full flex justify-center"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"w-full text-lg",attrs:{"data-vv-validate-on":"blur",name:"address","data-vv-as":"주소지",label:"주소지",placeholder:"주소지"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),s("div",{staticClass:"w-full flex justify-left"},[s("span",{staticClass:"w-full text-danger text-sm"},[t._v(t._s(t.errors.first("address")))])])]),t._v(" "),s("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",{staticClass:"w-full flex justify-center"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full text-lg",attrs:{"data-vv-validate-on":"blur",name:"phonenumber","data-vv-as":"전화번호",label:"전화번호",placeholder:"010-1234-5678"},model:{value:t.phonenumber,callback:function(e){t.phonenumber=e},expression:"phonenumber"}})],1),t._v(" "),s("div",{staticClass:"w-full flex justify-left"},[s("span",{staticClass:"w-full text-danger text-sm"},[t._v(t._s(t.errors.first("phonenumber")))])])]),t._v(" "),s("div",{staticClass:"w-full mt-96 flex justify-start mt-5"},[s("vs-button",{staticClass:"circle-radius text-xl w-40",attrs:{disabled:!t.validateForm,color:"#2BBBDB"},on:{click:t.onTendencySelect}},[t._v("성향 맞춤")])],1)]),t._v(" "),s("div",{staticClass:"w-full mt-5 mb-5"},[s("vs-button",{staticClass:"circle-radius text-xl cus-btn-width-one",attrs:{disabled:!t.validateForm,color:"#2BBBDB"},on:{click:t.goNext}},[t._v("동화 대화 시작하기")])],1)])]),t._v(" "),s("div",{staticClass:"flex-none register-board-right-side"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full title mt-5 sm:mt-20"},[e("h1",{staticClass:"font-medium tracking-normal title-font-one"},[this._v("동화 대화 작업방 만들기")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mt-5 description leading-relaxed\ttext-lg flex justify-center"},[e("div",{staticClass:"color-gray-one title-font-two text-center"},[this._v("창의적 상상의 동화 세상을 꽃피게 할 그림동화 ,"),e("br"),this._v("Simpatia, '심파띠아'에서 시작합니다.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-span-7"},[e("div",{staticClass:"text-left font-bold"},[this._v("커뮤니티 작가 공개")]),this._v(" "),e("div",{staticClass:"color-gray-one text-left"},[this._v("검색에서 작가님을 찾을 수 있게 공개해요"),e("br"),this._v('"테스트 결과는 공유하지 않습니다."')])])}],!1,null,null,null).exports,RegisterFirebase:Object(i.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clearfix"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Name",name:"displayName",placeholder:"Name"},model:{value:t.displayName,callback:function(e){t.displayName=e},expression:"displayName"}}),t._v(" "),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("displayName")))]),t._v(" "),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("email")))]),t._v(" "),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("password")))]),t._v(" "),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:t.confirm_password,callback:function(e){t.confirm_password=e},expression:"confirm_password"}}),t._v(" "),s("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("confirm_password")))]),t._v(" "),s("vs-checkbox",{staticClass:"mt-6",model:{value:t.isTermsConditionAccepted,callback:function(e){t.isTermsConditionAccepted=e},expression:"isTermsConditionAccepted"}},[t._v("I accept the terms & conditions.")]),t._v(" "),s("vs-button",{staticClass:"mt-6",attrs:{type:"border",to:"/pages/login"}},[t._v("Login")]),t._v(" "),s("vs-button",{staticClass:"float-right mt-6",attrs:{disabled:!t.validateForm},on:{click:t.registerUser}},[t._v("Register")])],1)}),[],!1,null,null,null).exports,RegisterAuth0:Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("vs-button",{staticClass:"mb-3 mt-4 ml-2",attrs:{color:"#eb5424"},on:{click:this.registerAuth0}},[this._v("Auth0")])}),[],!1,null,null,null).exports}},o=(s("8QAU"),Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("register-jwt")}),[],!1,null,null,null));e.default=o.exports}}]);