(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"0oPh":function(t,e,s){var i=s("vJag");"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(i,a);i.locals&&(t.exports=i.locals)},MRX1:function(t,e,s){"use strict";s("0oPh")},ood2:function(t,e,s){"use strict";s.r(e);var i=s("+jP+"),a=s("SXG0"),r=s.n(a),l=(s("JN9a"),{data:function(){return{items_for_artist:[{id:1,desc:"많은 일(직장)을 해야 해요",value:1},{id:2,desc:"다른 사람(직장)을 위한 일을 많이 해요",value:1},{id:3,desc:"일(직장)을 할 때 실수가 없어야 해요",value:1},{id:4,desc:"일(직장)을 할 때 부적절하게 할 때가 있어요",value:1},{id:5,desc:"다른 사람들이 내 일(직장)을 과소 평가해요",value:1},{id:6,desc:"내가 하고 있는 일(직장)에 불만을 느껴요",value:1},{id:7,desc:"누군가와 의견이 맞지 않아요",value:1},{id:8,desc:"다른 사람들과 좋은 관계를 유지하는 것이 중요해요",value:1}],items_for_parent:[{id:1,desc:"가끔 어떤 일을 잘 처리할 수 없어요",value:1},{id:2,desc:"생활의 많은 부분을 포기하고 싶어요",value:1},{id:3,desc:"육아에 대한 책임감이 커요",value:1},{id:4,desc:"나를 좋아하지 않아요",value:1},{id:5,desc:"나를 보고 잘 웃지 않아요",value:1},{id:6,desc:"그만두게 하는 것이 어려워요",value:1},{id:7,desc:"아이가 즐겁게 웃지 않아요",value:1},{id:8,desc:"아이는 어떤일을 잘 해내지 못해요",value:1},{id:9,desc:"아이는 나를 무척 속상하게 해요",value:1},{id:10,desc:"아이는 감정을 쉽게 폭발시켜요",value:1},{id:11,desc:"길들이는 것이 어려워요",value:1}],data:[{id:1,name:"1/낮다"},{id:2,name:"2"},{id:3,name:"3"},{id:4,name:"4"},{id:5,name:"5/높다"}]}},components:{Datepicker:i.a,VueSlider:r.a},computed:{validateForm:function(){return!this.errors.any()}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUserJWt:function(){if(this.validateForm&&this.checkLogin()){var t={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUserJWT",t)}},onTendencySelect:function(){if(this.validateForm&&this.checkLogin()){var t={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password,isTermsConditionAccepted:this.isTermsConditionAccepted,switchPublic:this.switchPublic,selectType:this.selectType,nationality:this.nationality,sex:this.sex,birthday:this.birthday,address:this.address,phonenumber:this.phonenumber},notify:this.$vs.notify};this.$store.dispatch("auth/storeRegisterUserJWT",t)}else console.log("11111111111111111")},goRegister:function(){this.$router.push("/pages/register").catch((function(){}))}}}),n=(s("MRX1"),s("KHd+")),d=Object(n.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex w-full justify-center mt-2"},[s("div",{staticClass:"flex gap-0 register-stress-measure-wrapper pb-8"},[s("div",{staticClass:"flex-none register-stress-measure-left-side"}),t._v(" "),s("div",{staticClass:"flex-grow register-stress-measure-middle-side flex justify-center"},[s("div",{staticClass:"tendency-content-header inner-wrapper text-center flex flex-col md:py-5"},[s("div",{},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("hr",{staticClass:"m-4"}),t._v(" "),s("div",{staticClass:"vs-tabs-wrapper-one"},[s("vs-tabs",[s("vs-tab",{attrs:{label:"부모용 테스트"}},[s("div",{staticClass:"tab-text"},[s("div",{staticClass:"scroll-container-two overflow-y-auto"},[s("div",{staticClass:"grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-6 lg:gap-x-40 py-8 pl-4"},t._l(t.items_for_parent,(function(e,i){return s("div",{key:i,staticClass:"slider-item w-full flex flex-col text-left"},[s("div",{staticClass:"w-full font-semibold"},[t._v("\n                                              "+t._s(t.items_for_parent[i].desc)+"\n                                          ")]),t._v(" "),s("div",{staticClass:"w-8/12 flex justify-between mt-2 mb-1 text-xs"},[s("div",[t._v("0/낮다")]),t._v(" "),s("div",[t._v("5/높다")])]),t._v(" "),s("div",{staticClass:"w-8/12"},[s("vue-slider",{attrs:{adsorb:!0,interval:1,data:t.data,"data-value":"id","data-lavel":"name"},model:{value:t.items_for_parent[i].value,callback:function(e){t.$set(t.items_for_parent[i],"value",e)},expression:"items_for_parent[index].value"}})],1)])})),0)])])]),t._v(" "),s("vs-tab",{attrs:{label:"작가용 테스트"}},[s("div",{staticClass:"tab-text"},[s("div",{staticClass:"scroll-container-two overflow-y-auto"},[s("div",{staticClass:"lg:overflow-y-auto grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-5 lg:gap-x-40 py-8 pl-4"},t._l(t.items_for_artist,(function(e,i){return s("div",{key:i,staticClass:"slider-item w-full flex flex-col text-left"},[s("div",{staticClass:"w-full font-semibold"},[t._v("\n                                              "+t._s(t.items_for_artist[i].desc)+"\n                                          ")]),t._v(" "),s("div",{staticClass:"w-8/12 flex justify-between mt-2 mb-1 text-xs"},[s("div",[t._v("0/낮다")]),t._v(" "),s("div",[t._v("5/높다")])]),t._v(" "),s("div",{staticClass:"w-8/12"},[s("vue-slider",{attrs:{adsorb:!0,interval:1,data:t.data,"data-value":"id","data-lavel":"name"},model:{value:t.items_for_artist[i].value,callback:function(e){t.$set(t.items_for_artist[i],"value",e)},expression:"items_for_artist[index].value"}})],1)])})),0)])])])],1)],1),t._v(" "),s("div",{staticClass:"w-full"},[s("vs-button",{staticClass:"circle-radius text-xl w-40 cus-btn-width-three",attrs:{disabled:!t.validateForm,color:"#2BBBDB"},on:{click:t.goRegister}},[t._v("취소")]),t._v(" "),s("vs-button",{staticClass:"circle-radius text-xl w-40 cus-btn-width-three",attrs:{disabled:!t.validateForm,color:"#2BBBDB"},on:{click:t.goRegister}},[t._v("맞춤 테그 설정 완료")])],1)])])]),t._v(" "),s("div",{staticClass:"flex-none register-board-right-side"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full title mt-8 sm:mt-10 text-left"},[e("h1",{staticClass:"font-medium tracking-normal title-font-one"},[this._v("동화 대화 거울")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mt-0 description leading-relaxed\ttext-lg flex  text-left"},[e("div",{staticClass:"title-font-two text-left color-gray-two"},[this._v("“작가님의 작품은 당신의 거울입니다.”"),e("br"),this._v("현재 나의 스트레스 얼마나 될까요?")])])}],!1,null,null,null);e.default=d.exports},vJag:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"[dir] .vue-slider-marks {\n  background-color: #b3ddff;\n}\n.vue-slider-mark {\n  width: 15px !important;\n  height: 15px !important;\n}\n[dir] .vue-slider-mark {\n  border-radius: 8px !important;\n  background-color: #b8c2cc !important;\n}\n[dir] .vue-slider-mark.vue-slider-mark-active {\n  background-color: #4098ff !important;\n}\n[dir] .vue-slider-dot-handle {\n  background-color: #008dff !important;\n}\n.ul-tabs.vs-tabs--ul.ul-tabs-left {\n  justify-content: center;\n}\n.vs-tabs--li {\n  /* Small (sm) */\n  /* Medium (md) */\n  /* Large (lg) */\n  /* Extra Large (xl) */\n  /* Extra Large (xl) */\n  /* Extra Large (xl) */\n}\n[dir] .vs-tabs--li {\n  margin: 0px 15px;\n  border: 1px solid #757575;\n  border-radius: 20px;\n}\n[dir] .vs-tabs--li.activeChild {\n  border: 1px solid blue;\n  border-radius: 20px;\n}\n@media (max-width: 639px) {\n[dir] .vs-tabs--li {\n    margin: 0px 3px;\n}\n}\n.line-vs-tabs {\n  display: none !important;\n}",""])}}]);