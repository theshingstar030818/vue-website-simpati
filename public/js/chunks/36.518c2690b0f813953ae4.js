(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{QKSj:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,"[dir] #page-login .social-login-buttons .bg-facebook {\n  background-color: #1551b1;\n}\n[dir] #page-login .social-login-buttons .bg-twitter {\n  background-color: #00aaff;\n}\n[dir] #page-login .social-login-buttons .bg-google {\n  background-color: #4285F4;\n}\n[dir] #page-login .social-login-buttons .bg-github {\n  background-color: #333;\n}",""])},QQ2B:function(t,e,i){"use strict";i("lrrJ")},XkYO:function(t,e,i){var s=i("QKSj");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(s,a);s.locals&&(t.exports=s.locals)},h8Rl:function(t,e,i){"use strict";i("XkYO")},kIv0:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,"",""])},lrrJ:function(t,e,i){var s=i("kIv0");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(s,a);s.locals&&(t.exports=s.locals)},xl0g:function(t,e,i){"use strict";i.r(e);var s={data:function(){return{email:"",password:"",checkbox_remember_me:!1}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.email&&""!=this.password}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"로그인 시도",text:"이미 로그인하셨습니다!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},loginJWT:function(){var t=this;if(this.checkLogin()){this.$vs.loading();var e={checkbox_remember_me:this.checkbox_remember_me,userDetails:{email:this.email,password:this.password}};this.$store.dispatch("auth/loginJWT",e).then((function(){t.$vs.loading.close()})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:"오유",text:e.message,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}))}},registerUser:function(){this.checkLogin()&&this.$router.push("/pages/register").catch((function(){}))},recoveryPwd:function(){this.checkLogin()&&this.$router.push("/pages/forgot-password").catch((function(){}))}}},a=(i("QQ2B"),i("KHd+")),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex w-full justify-center mt-2"},[i("div",{staticClass:"flex gap-0 login-board-wrapper"},[i("div",{staticClass:"flex-none login-board-left-side"}),t._v(" "),i("div",{staticClass:"flex-grow login-board-middle-side"},[i("div",{staticClass:"inner-wrapper text-center flex flex-col"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[i("div",{staticClass:"w-full flex justify-center"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|min:3",expression:"'required|email|min:3'"}],staticClass:"w-full sm:w-1/2 text-lg",attrs:{"data-vv-validate-on":"blur",name:"email","data-vv-as":"이메일 주소",label:"이메일 주소",placeholder:"클릭하여 작성하세요"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),i("div",{staticClass:"w-full flex justify-center"},[i("span",{staticClass:"w-1/2 text-danger text-sm"},[t._v(t._s(t.errors.first("email")))])])]),t._v(" "),i("div",{staticClass:"w-full text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[i("div",{staticClass:"w-full flex justify-center"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:8",expression:"'required|min:8'"}],staticClass:"w-full sm:w-1/2 text-lg",attrs:{"data-vv-validate-on":"blur",type:"password",name:"password","data-vv-as":"비밀번호",label:"비밀번호",placeholder:"클릭하여 작성하세요"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),i("div",{staticClass:"w-full flex justify-center"},[i("span",{staticClass:"w-1/2 text-danger text-sm"},[t._v(t._s(t.errors.first("password")))])])]),t._v(" "),i("div",{staticClass:"w-full input-wrapper-two-column mt-5 flex justify-evenly"},[i("div",[i("vs-button",{staticClass:"circle-radius",attrs:{color:"#bab7b7",type:"flat"},on:{click:t.registerUser}},[t._v("회원 가입하기")])],1),t._v(" "),i("div",[i("vs-button",{staticClass:"circle-radius",attrs:{color:"#bab7b7",type:"flat"},on:{click:t.recoveryPwd}},[t._v("비밀번호 찾기")])],1)]),t._v(" "),i("div",{staticClass:"w-full cus-pt-one"},[t._v(" ")]),t._v(" "),i("div",{staticClass:"w-full"},[i("vs-button",{staticClass:"circle-radius text-xl cus-btn-width-one",attrs:{disabled:!t.validateForm,color:"#2BBBDB"},on:{click:t.loginJWT}},[t._v("동화 대화 시작하기")])],1),t._v(" "),i("div",{staticClass:"w-full cus-pt-two"},[t._v(" ")])])]),t._v(" "),i("div",{staticClass:"flex-none login-board-right-side"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full title mt-0 sm:mt-20"},[e("div",{staticClass:"title-font-one font-medium px-15 font-familiy-NanumSquareB"},[this._v("멋진 그림 동화를 만들어봐요")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mt-5 description leading-relaxed\ttext-lg title-font-two"},[e("span",{staticClass:"color-gray-one"},[this._v("창의적 상상의 동화, 세상을 꽃피게 할 "),e("br"),this._v("그림동화, "),e("br"),this._v("여기서 시작합니다. ")])])}],!1,null,null,null).exports,r={data:function(){return{email:"demo@demo.com",password:"demodemo",checkbox_remember_me:!1}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.email&&""!=this.password}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},login:function(){this.$vs.loading();var t={checkbox_remember_me:this.checkbox_remember_me,userDetails:{email:this.email,password:this.password},notify:this.$vs.notify,closeAnimation:this.$vs.loading.close};this.$store.dispatch("auth/loginAttempt",t)},loginWithGoogle:function(){this.$store.dispatch("auth/loginWithGoogle",{notify:this.$vs.notify})},loginWithFacebook:function(){this.$store.dispatch("auth/loginWithFacebook",{notify:this.$vs.notify})},loginWithTwitter:function(){this.$store.dispatch("auth/loginWithTwitter",{notify:this.$vs.notify})},loginWithGithub:function(){this.$store.dispatch("auth/loginWithGithub",{notify:this.$vs.notify})},registerUser:function(){this.checkLogin()&&this.$router.push("/pages/register").catch((function(){}))}}},l=(i("h8Rl"),{methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},loginAuth0:function(){this.checkLogin()&&this.$auth.login({target:this.$route.query.to})},registerUser:function(){this.checkLogin()&&this.$router.push("/pages/register").catch((function(){}))}}}),n={components:{LoginJwt:o,LoginFirebase:Object(a.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|min:3",expression:"'required|email|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur",name:"email","icon-no-border":"",icon:"icon icon-user","icon-pack":"feather","label-placeholder":"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),i("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("email")))]),t._v(" "),i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",type:"password",name:"password","icon-no-border":"",icon:"icon icon-lock","icon-pack":"feather","label-placeholder":"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),i("span",{staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("password")))]),t._v(" "),i("div",{staticClass:"flex flex-wrap justify-between my-5"},[i("vs-checkbox",{staticClass:"mb-3",model:{value:t.checkbox_remember_me,callback:function(e){t.checkbox_remember_me=e},expression:"checkbox_remember_me"}},[t._v("Remember Me")]),t._v(" "),i("router-link",{attrs:{to:"/pages/forgot-password"}},[t._v("Forgot Password?")])],1),t._v(" "),i("vs-button",{attrs:{type:"border"},on:{click:t.registerUser}},[t._v("Register")]),t._v(" "),i("vs-button",{staticClass:"float-right",attrs:{disabled:!t.validateForm},on:{click:t.login}},[t._v("Login")]),t._v(" "),i("vs-divider",[t._v("OR")]),t._v(" "),i("div",{staticClass:"social-login-buttons flex flex-wrap items-center mt-4"},[i("div",{staticClass:"bg-facebook pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4",on:{click:t.loginWithFacebook}},[i("svg",{staticClass:"text-white h-4 w-4 svg-inline--fa fa-facebook-f fa-w-9",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 264 512"}},[i("path",{attrs:{fill:"currentColor",d:"M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"}})])]),t._v(" "),i("div",{staticClass:"bg-twitter pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4",on:{click:t.loginWithTwitter}},[i("svg",{staticClass:"text-white h-4 w-4 svg-inline--fa fa-twitter fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[i("path",{attrs:{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])]),t._v(" "),i("div",{staticClass:"bg-google pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4",on:{click:t.loginWithGoogle}},[i("svg",{staticClass:"text-white h-4 w-4 svg-inline--fa fa-google fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"google",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512"}},[i("path",{attrs:{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"}})])]),t._v(" "),i("div",{staticClass:"bg-github pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4",on:{click:t.loginWithGithub}},[i("svg",{staticClass:"text-white h-4 w-4 svg-inline--fa fa-github-alt fa-w-15",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 480 512"}},[i("path",{attrs:{fill:"currentColor",d:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"}})])])])],1)}),[],!1,null,null,null).exports,LoginAuth0:Object(a.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("vs-button",{staticClass:"mb-4 ml-2",attrs:{color:"#eb5424"},on:{click:this.loginAuth0}},[this._v("Auth0")])}),[],!1,null,null,null).exports}},c=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("login-jwt")}),[],!1,null,null,null);e.default=c.exports}}]);