(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{DhLq:function(s,t,a){"use strict";a.r(t);var e={data:function(){return{value1:"",value2:"",value3:""}},methods:{resetPassword:function(){var s=this;this.$http.post("/auth/reset/password/",{token:this.$route.params.token,email:this.value1,password:this.value2,password_confirmation:this.value3}).then((function(t){s.$router.push("/pages/login")}),(function(s){console.error(s)}))}}},l=a("KHd+"),o=Object(l.a)(e,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"h-screen flex w-full bg-img"},[e("div",{staticClass:"vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center"},[e("vx-card",[e("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[e("img",{staticClass:"mx-auto",attrs:{src:a("u0tf"),alt:"login"}})]),s._v(" "),e("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"},[e("div",{staticClass:"p-8"},[e("div",{staticClass:"vx-card__title mb-8"},[e("h4",{staticClass:"mb-4"},[s._v("Reset Password")]),s._v(" "),e("p",[s._v("Please enter your new password.")])]),s._v(" "),e("vs-input",{staticClass:"w-full mb-6",attrs:{type:"email","label-placeholder":"Email"},model:{value:s.value1,callback:function(t){s.value1=t},expression:"value1"}}),s._v(" "),e("vs-input",{staticClass:"w-full mb-6",attrs:{type:"password","label-placeholder":"Password"},model:{value:s.value2,callback:function(t){s.value2=t},expression:"value2"}}),s._v(" "),e("vs-input",{staticClass:"w-full mb-8",attrs:{type:"password","label-placeholder":"Confirm Password"},model:{value:s.value3,callback:function(t){s.value3=t},expression:"value3"}}),s._v(" "),e("div",{staticClass:"flex flex-wrap justify-between flex-col-reverse sm:flex-row"},[e("vs-button",{staticClass:"w-full sm:w-auto mb-8 sm:mb-auto mt-3 sm:mt-auto",attrs:{type:"border",to:"/pages/login"}},[s._v("Go Back To Login")]),s._v(" "),e("vs-button",{staticClass:"w-full sm:w-auto"},[s._v("Reset")])],1)],1)])])])])],1)])}),[],!1,null,null,null);t.default=o.exports},u0tf:function(s,t){s.exports="/images/reset-password.png?965156dace52dc1b319d6363d3040ff2"}}]);