(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      email: '',
      password: '',
      check1: true,
      check2: false,
      check3: false
    };
  },
  computed: {
    validateForm: function validateForm() {
      // return !this.errors.any() && this.email != '' && this.password != '' && this.check2 && this.check3;
      return !this.errors.any() && this.check2 && this.check3;
    }
  },
  methods: {
    checkLogin: function checkLogin() {
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
        });
        return false;
      }

      return true;
    },
    goNext: function goNext() {
      if (!this.checkLogin()) return;
      this.$router.push('/pages/trial-step-two').catch(function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inner-wrapper h1 {\n  font-size: 2.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepOne.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=template&id=165146bc&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=template&id=165146bc& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex w-full justify-center mt-2" }, [
    _c("div", { staticClass: "flex gap-0 login-board-wrapper" }, [
      _c("div", { staticClass: "flex-none login-board-left-side" }),
      _vm._v(" "),
      _c("div", { staticClass: "flex-grow login-board-middle-side" }, [
        _c("div", { staticClass: "inner-wrapper text-center flex flex-col" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"
            },
            [
              _c(
                "div",
                { staticClass: "w-full flex justify-center" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|email|min:3",
                        expression: "'required|email|min:3'"
                      }
                    ],
                    staticClass: "w-1/2 text-lg",
                    attrs: {
                      "data-vv-validate-on": "blur",
                      name: "email",
                      "data-vv-as": "이메일 주소",
                      label: "이메일 주소",
                      placeholder: "클릭하여 작성하세요"
                    },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "w-full flex justify-center" }, [
                _c("span", { staticClass: "w-1/2 text-danger text-sm" }, [
                  _vm._v(_vm._s(_vm.errors.first("email")))
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-full text-align-left input-wrapper-one flex justify-center mt-5 flex-col"
            },
            [
              _c(
                "div",
                { staticClass: "w-full flex justify-center" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:6|max:10",
                        expression: "'required|min:6|max:10'"
                      }
                    ],
                    staticClass: "w-1/2 text-lg",
                    attrs: {
                      "data-vv-validate-on": "blur",
                      type: "password",
                      name: "password",
                      "data-vv-as": "비밀번호",
                      label: "비밀번호",
                      placeholder: "클릭하여 작성하세요"
                    },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "w-full flex justify-center" }, [
                _c("span", { staticClass: "w-1/2 text-danger text-sm" }, [
                  _vm._v(_vm._s(_vm.errors.first("password")))
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-full input-wrapper-two-column mt-5 flex justify-evenly pt-5"
            },
            [
              _c(
                "vs-checkbox",
                {
                  staticClass:
                    "lg:w-1/2 w-2/3 text-left title-font-five whitespace-nowrap",
                  attrs: { color: "dark", disabled: true },
                  model: {
                    value: _vm.check1,
                    callback: function($$v) {
                      _vm.check1 = $$v
                    },
                    expression: "check1"
                  }
                },
                [_vm._v("  동화 대화의 최신 정보 업데이트를 부탁해요")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-full input-wrapper-two-column mt-5 flex justify-evenly"
            },
            [
              _c(
                "vs-checkbox",
                {
                  staticClass:
                    "lg:w-1/2 w-2/3 text-left title-font-five whitespace-nowrap",
                  attrs: { color: "dark" },
                  model: {
                    value: _vm.check2,
                    callback: function($$v) {
                      _vm.check2 = $$v
                    },
                    expression: "check2"
                  }
                },
                [
                  _vm._v("  [필수] 그림대화 "),
                  _c("a", { attrs: { href: "#" } }, [_vm._v("이용약관")]),
                  _c("br"),
                  _vm._v("  [필수] 그림대화 "),
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("개인정보 수집 및 이용동의")
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-full input-wrapper-two-column mt-5 flex justify-evenly"
            },
            [
              _c(
                "vs-checkbox",
                {
                  staticClass:
                    "lg:w-1/2 w-2/3 text-left title-font-five whitespace-nowrap",
                  attrs: { color: "dark" },
                  model: {
                    value: _vm.check3,
                    callback: function($$v) {
                      _vm.check3 = $$v
                    },
                    expression: "check3"
                  }
                },
                [
                  _vm._v("  [필수] 한 달 무료 이용 후,"),
                  _c("br"),
                  _c("a", { attrs: { href: "#" } }, [_vm._v("매월 정기결제")]),
                  _vm._v(" 에 동의합니다.")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "w-full p-3" }, [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full mt-96" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "circle-radius text-xl cus-btn-width-one",
                  attrs: { disabled: !_vm.validateForm, color: "#2BBBDB" },
                  on: { click: _vm.goNext }
                },
                [_vm._v("다음")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "w-full p-5" }, [_vm._v(" ")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex-none login-board-right-side" })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full title mt-5 sm:mt-20" }, [
      _c("h1", { staticClass: "font-medium tracking-normal title-font-one" }, [
        _vm._v("30일간 무료 체험하기!")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "w-full mt-5 description leading-relaxed\ttext-lg flex justify-center"
      },
      [
        _c("div", { staticClass: "color-gray-one title-font-two text-left" }, [
          _vm._v("한달에 4500원으로 무료 체험을"),
          _c("br"),
          _vm._v("시작해보세요! 취소는 언제든지~"),
          _c("br"),
          _c("div", { staticClass: "mt-3" }, [_vm._v("step 1/2")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/trial/StepOne.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/trial/StepOne.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepOne_vue_vue_type_template_id_165146bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepOne.vue?vue&type=template&id=165146bc& */ "./resources/js/src/views/pages/trial/StepOne.vue?vue&type=template&id=165146bc&");
/* harmony import */ var _StepOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepOne.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trial/StepOne.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StepOne_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StepOne.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/trial/StepOne.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StepOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StepOne_vue_vue_type_template_id_165146bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StepOne_vue_vue_type_template_id_165146bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trial/StepOne.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trial/StepOne.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/trial/StepOne.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepOne.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StepOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trial/StepOne.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trial/StepOne.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StepOne_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepOne.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StepOne_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StepOne_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StepOne_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StepOne_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/trial/StepOne.vue?vue&type=template&id=165146bc&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trial/StepOne.vue?vue&type=template&id=165146bc& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepOne_vue_vue_type_template_id_165146bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StepOne.vue?vue&type=template&id=165146bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trial/StepOne.vue?vue&type=template&id=165146bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepOne_vue_vue_type_template_id_165146bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StepOne_vue_vue_type_template_id_165146bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);