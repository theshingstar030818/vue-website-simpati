(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{Bn4W:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".inner-wrapper h1 {\n  font-size: 2.5rem;\n}",""])},atpp:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{email:"",password:"",check1:!0,check2:!1,check3:!1}},computed:{validateForm:function(){return!this.errors.any()&&this.check2&&this.check3}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"로그인 시도",text:"이미 로그인하셨습니다!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},goNext:function(){this.checkLogin()&&this.$router.push("/pages/trial-step-two").catch((function(){}))}}},i=(s("dv5+"),s("KHd+")),l=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex w-full justify-center mt-2"},[s("div",{staticClass:"flex gap-0 login-board-wrapper"},[s("div",{staticClass:"flex-none login-board-left-side"}),t._v(" "),s("div",{staticClass:"flex-grow login-board-middle-side"},[s("div",{staticClass:"inner-wrapper text-center flex flex-col"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",{staticClass:"w-full flex justify-center"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email|min:3",expression:"'required|email|min:3'"}],staticClass:"w-1/2 text-lg",attrs:{"data-vv-validate-on":"blur",name:"email","data-vv-as":"이메일 주소",label:"이메일 주소",placeholder:"클릭하여 작성하세요"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),s("div",{staticClass:"w-full flex justify-center"},[s("span",{staticClass:"w-1/2 text-danger text-sm"},[t._v(t._s(t.errors.first("email")))])])]),t._v(" "),s("div",{staticClass:"w-full text-align-left input-wrapper-one flex justify-center mt-5 flex-col"},[s("div",{staticClass:"w-full flex justify-center"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],staticClass:"w-1/2 text-lg",attrs:{"data-vv-validate-on":"blur",type:"password",name:"password","data-vv-as":"비밀번호",label:"비밀번호",placeholder:"클릭하여 작성하세요"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("div",{staticClass:"w-full flex justify-center"},[s("span",{staticClass:"w-1/2 text-danger text-sm"},[t._v(t._s(t.errors.first("password")))])])]),t._v(" "),s("div",{staticClass:"w-full input-wrapper-two-column mt-5 flex justify-evenly pt-5"},[s("vs-checkbox",{staticClass:"lg:w-1/2 w-2/3 text-left title-font-five whitespace-nowrap",attrs:{color:"dark",disabled:!0},model:{value:t.check1,callback:function(e){t.check1=e},expression:"check1"}},[t._v("  동화 대화의 최신 정보 업데이트를 부탁해요")])],1),t._v(" "),s("div",{staticClass:"w-full input-wrapper-two-column mt-5 flex justify-evenly"},[s("vs-checkbox",{staticClass:"lg:w-1/2 w-2/3 text-left title-font-five whitespace-nowrap",attrs:{color:"dark"},model:{value:t.check2,callback:function(e){t.check2=e},expression:"check2"}},[t._v("  [필수] 그림대화 "),s("a",{attrs:{href:"#"}},[t._v("이용약관")]),s("br"),t._v("  [필수] 그림대화 "),s("a",{attrs:{href:"#"}},[t._v("개인정보 수집 및 이용동의")])])],1),t._v(" "),s("div",{staticClass:"w-full input-wrapper-two-column mt-5 flex justify-evenly"},[s("vs-checkbox",{staticClass:"lg:w-1/2 w-2/3 text-left title-font-five whitespace-nowrap",attrs:{color:"dark"},model:{value:t.check3,callback:function(e){t.check3=e},expression:"check3"}},[t._v("  [필수] 한 달 무료 이용 후,"),s("br"),s("a",{attrs:{href:"#"}},[t._v("매월 정기결제")]),t._v(" 에 동의합니다.")])],1),t._v(" "),s("div",{staticClass:"w-full p-3"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"w-full mt-96"},[s("vs-button",{staticClass:"circle-radius text-xl cus-btn-width-one",attrs:{disabled:!t.validateForm,color:"#2BBBDB"},on:{click:t.goNext}},[t._v("다음")])],1),t._v(" "),s("div",{staticClass:"w-full p-5"},[t._v(" ")])])]),t._v(" "),s("div",{staticClass:"flex-none login-board-right-side"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full title mt-5 sm:mt-20"},[e("h1",{staticClass:"font-medium tracking-normal title-font-one"},[this._v("30일간 무료 체험하기!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mt-5 description leading-relaxed\ttext-lg flex justify-center"},[e("div",{staticClass:"color-gray-one title-font-two text-left"},[this._v("한달에 4500원으로 무료 체험을"),e("br"),this._v("시작해보세요! 취소는 언제든지~"),e("br"),e("div",{staticClass:"mt-3"},[this._v("step 1/2")])])])}],!1,null,null,null);e.default=l.exports},"dv5+":function(t,e,s){"use strict";s("xe4m")},xe4m:function(t,e,s){var a=s("Bn4W");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,i);a.locals&&(t.exports=a.locals)}}]);