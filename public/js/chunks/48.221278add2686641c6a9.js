(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"HjW+":function(t,r,e){"use strict";e("lTid")},MlVC:function(t,r,e){(t.exports=e("I1BE")(!1)).push([t.i,".v-tour .v-step {\n  z-index: 55000;\n  filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.5));\n}[dir] .v-tour .v-step {\n  background-color: rgba(var(--vs-primary), 1);\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n}\n[dir] .v-tour .v-step .v-step__arrow {\n  border-color: rgba(var(--vs-primary), 1);\n}\n[dir] .v-tour .v-step .vs-button-border:not(.btn-tour-next):not(.btn-tour-finish) {\n  border-color: rgba(255, 255, 255, 0.5) !important;\n}",""])},lTid:function(t,r,e){var s=e("MlVC");"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,n);s.locals&&(t.exports=s.locals)},pC3X:function(t,r,e){"use strict";e.r(r);var s={name:"vx-tour",props:{steps:{required:!0,type:Array}},watch:{"$route.path":function(){this.$tours.vuexyTour.stop()}},mounted:function(){this.$tours.vuexyTour.start()}},n=(e("HjW+"),e("KHd+")),o=Object(n.a)(s,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-tour",{attrs:{name:"vuexyTour",steps:t.steps},scopedSlots:t._u([{key:"default",fn:function(r){return[e("transition",{attrs:{name:"fade"}},t._l(r.steps,(function(s,n){return r.currentStep===n?e("v-step",{key:n,attrs:{step:s,"previous-step":r.previousStep,"next-step":r.nextStep,stop:r.stop,"is-first":r.isFirst,"is-last":r.isLast,labels:r.labels}},[e("div",{staticClass:"flex justify-center",attrs:{slot:"actions"},slot:"actions"},[r.currentStep!=r.steps.length-1?e("vs-button",{staticClass:"mr-3",attrs:{size:"small","icon-pack":"feather",icon:"icon-x","icon-after":"",color:"#fff",type:"border"},on:{click:r.stop}},[t._v("\n                        Skip\n                    ")]):t._e(),t._v(" "),r.currentStep?e("vs-button",{staticClass:"mr-3",attrs:{size:"small","icon-pack":"feather",icon:"icon-chevrons-left",color:"#fff",type:"border"},on:{click:r.previousStep}},[t._v("\n                        Previous\n                    ")]):t._e(),t._v(" "),r.currentStep!=r.steps.length-1?e("vs-button",{staticClass:"btn-tour-next",attrs:{size:"small","icon-pack":"feather",icon:"icon-chevrons-right","icon-after":"",color:"#fff",type:"border"},on:{click:r.nextStep}},[t._v("\n                        Next\n                    ")]):t._e(),t._v(" "),r.currentStep==r.steps.length-1?e("vs-button",{staticClass:"btn-tour-finish",attrs:{size:"small","icon-pack":"feather",icon:"icon-check-circle","icon-after":"",color:"#fff",type:"border"},on:{click:r.stop}},[t._v("\n                        Finish\n                    ")]):t._e()],1)]):t._e()})),1)]}}])})}),[],!1,null,null,null);r.default=o.exports}}]);