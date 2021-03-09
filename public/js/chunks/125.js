(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/First.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/First.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chenfengyuan/vue-countdown */ "./node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js");
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0__);
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
      value1: ''
    };
  },
  components: {
    'countdown': _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default.a
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
    loginback: function loginback() {
      if (!this.checkLogin()) return;
      this.$router.push('/pages/login').catch(function () {});
    },
    start_free_trial: function start_free_trial() {
      if (!this.checkLogin()) return;
      this.$router.push('/pages/trial-step-one').catch(function () {});
    },
    onExplore: function onExplore() {
      if (!this.checkLogin()) return;
      this.$router.push('/pages/main/onboarding').catch(function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/First.vue?vue&type=template&id=116312eb&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/First.vue?vue&type=template&id=116312eb& ***!
  \*************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "w-full p-4" }, [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "circle-radius text-xl cus-btn-width-one",
                  attrs: { color: "#2BBBDB" },
                  on: { click: _vm.start_free_trial }
                },
                [_vm._v("Start free trial")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-full input-wrapper-two-column mt-3 flex justify-evenly"
            },
            [
              _c(
                "vs-button",
                {
                  staticClass: "circle-radius text-xl cus-btn-width-one",
                  attrs: { color: "#bab7b7", type: "border" },
                  on: { click: _vm.loginback }
                },
                [_vm._v("Log In")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-full input-wrapper-two-column mt-3 flex justify-evenly"
            },
            [
              _c(
                "vs-button",
                {
                  staticClass: "circle-radius text-xl cus-btn-width-one",
                  attrs: { color: "#bab7b7", type: "border" },
                  on: { click: _vm.onExplore }
                },
                [_vm._v("Explore")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "w-full cus-pt-three" }, [_vm._v(" ")])
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
    return _c("div", { staticClass: "w-full title mt-20" }, [
      _c(
        "h1",
        { staticClass: "font-medium tracking-normal px-20 title-font-one" },
        [_vm._v("동화 대화"), _c("br"), _vm._v("‘공감’")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "w-full mt-8 description leading-relaxed\ttext-lg px-4" },
      [
        _c("span", { staticClass: "color-gray-one title-font-three" }, [
          _vm._v("동화 대화에서 작가들의 협업은"),
          _c("br"),
          _vm._v("아이들로 하여금"),
          _c("br"),
          _vm._v("어른의 도움없이"),
          _c("br"),
          _vm._v("혼자 책을 있는 그대로 느끼게 하는"),
          _c("br"),
          _vm._v("미래 고부가가치 사업입니다.")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/First.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/pages/First.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _First_vue_vue_type_template_id_116312eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./First.vue?vue&type=template&id=116312eb& */ "./resources/js/src/views/pages/First.vue?vue&type=template&id=116312eb&");
/* harmony import */ var _First_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./First.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/First.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _First_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _First_vue_vue_type_template_id_116312eb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _First_vue_vue_type_template_id_116312eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/First.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/First.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/First.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_First_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./First.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/First.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_First_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/First.vue?vue&type=template&id=116312eb&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/First.vue?vue&type=template&id=116312eb& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_First_vue_vue_type_template_id_116312eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./First.vue?vue&type=template&id=116312eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/First.vue?vue&type=template&id=116312eb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_First_vue_vue_type_template_id_116312eb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_First_vue_vue_type_template_id_116312eb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);