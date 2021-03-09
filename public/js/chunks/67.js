(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterJWT_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterJWT.vue */ "./resources/js/src/views/pages/register/RegisterJWT.vue");
/* harmony import */ var _RegisterFirebase_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterFirebase.vue */ "./resources/js/src/views/pages/register/RegisterFirebase.vue");
/* harmony import */ var _RegisterAuth0_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterAuth0.vue */ "./resources/js/src/views/pages/register/RegisterAuth0.vue");
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
  components: {
    RegisterJwt: _RegisterJWT_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    RegisterFirebase: _RegisterFirebase_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    RegisterAuth0: _RegisterAuth0_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    checkLogin: function checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {
        // Close animation if passed as payload
        // this.$vs.loading.close()
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        });
        return false;
      }

      return true;
    },
    registerAuth0: function registerAuth0() {
      if (!this.checkLogin()) return;
      this.$auth.login({
        target: this.$route.query.to
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      displayName: '',
      email: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.displayName != '' && this.email != '' && this.password != '' && this.confirm_password != '' && this.isTermsConditionAccepted === true;
    }
  },
  methods: {
    checkLogin: function checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {
        // Close animation if passed as payload
        // this.$vs.loading.close()
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        });
        return false;
      }

      return true;
    },
    registerUser: function registerUser() {
      // If form is not validated or user is already login return
      if (!this.validateForm || !this.checkLogin()) return;
      var payload = {
        userDetails: {
          displayName: this.displayName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirm_password
        },
        notify: this.$vs.notify
      };
      this.$store.dispatch('auth/registerUser', payload);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
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
      displayName: this.$store.state.StoreRegisterUserJWT.displayName,
      // displayName: "this.$store.state.StoreRegisterUserJWT.displayName",
      email: this.$store.state.StoreRegisterUserJWT.email,
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: this.$store.state.StoreRegisterUserJWT.isTermsConditionAccepted,
      switchPublic: this.$store.state.StoreRegisterUserJWT.switchPublic,
      selectType: this.$store.state.StoreRegisterUserJWT.selectType,
      options1: [{
        text: '글',
        value: 0
      }, {
        text: '그림',
        value: 1
      }, {
        text: '소리',
        value: 2
      }],
      nationality: this.$store.state.StoreRegisterUserJWT.nationality,
      sex: this.$store.state.StoreRegisterUserJWT.sex,
      birthday: this.$store.state.StoreRegisterUserJWT.birthday,
      address: this.$store.state.StoreRegisterUserJWT.address,
      phonenumber: this.$store.state.StoreRegisterUserJWT.phonenumber
    };
  },
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.displayName != '' && this.email != '' && this.password != '' && this.confirm_password != '' && this.nationality != '' && this.sex != '' && this.birthday != '' && this.address != '' && this.phonenumber != ''; // return !this.errors.any();
    }
  },
  methods: {
    checkLogin: function checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {
        // Close animation if passed as payload
        // this.$vs.loading.close()
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        });
        return false;
      }

      return true;
    },
    registerUserJWt: function registerUserJWt() {
      var _this = this;

      // If form is not validated or user is already login return
      if (!this.validateForm || !this.checkLogin()) return; // Loading

      this.$vs.loading();
      var payload = {
        userDetails: {
          displayName: this.displayName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirm_password
        },
        notify: this.$vs.notify
      };
      this.$store.dispatch('auth/registerUserJWT', payload).then(function () {
        console.log('dispatch registerUserJWT -> then');

        _this.$vs.loading.close();
      }).catch(function (error) {
        console.log('dispatch registerUserJWT -> catch');

        _this.$vs.loading.close();

        _this.$vs.notify({
          title: '오유',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    onTendencySelect: function onTendencySelect() {
      console.log("onTendencySelect"); // If form is not validated or user is already login return
      // if (!this.validateForm || !this.checkLogin()) {
      //   return;
      // }

      var payload = {
        userDetails: {
          displayName: this.displayName,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirm_password,
          isTermsConditionAccepted: this.isTermsConditionAccepted,
          switchPublic: this.switchPublic,
          selectType: this.selectType,
          nationality: this.nationality,
          sex: this.sex,
          birthday: this.birthday,
          address: this.address,
          phonenumber: this.phonenumber
        },
        notify: this.$vs.notify
      };
      console.log("!!!!!");
      console.log(payload);
      this.$store.dispatch('auth/storeRegisterUserJWT', payload);
      this.$router.push('/pages/tendency-tags-setting').catch(function () {});
    },
    goNext: function goNext() {}
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-tabs-container {\n  min-height: 517px;\n}\n[dir] .register-tabs-container .con-tab {\n  padding-bottom: 23px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("register-jwt")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=template&id=0d04f264&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=template&id=0d04f264& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "vs-button",
    {
      staticClass: "mb-3 mt-4 ml-2",
      attrs: { color: "#eb5424" },
      on: { click: _vm.registerAuth0 }
    },
    [_vm._v("Auth0")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=template&id=6a693c9e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=template&id=6a693c9e& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "clearfix" },
    [
      _c("vs-input", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "required|alpha_dash|min:3",
            expression: "'required|alpha_dash|min:3'"
          }
        ],
        staticClass: "w-full",
        attrs: {
          "data-vv-validate-on": "blur",
          "label-placeholder": "Name",
          name: "displayName",
          placeholder: "Name"
        },
        model: {
          value: _vm.displayName,
          callback: function($$v) {
            _vm.displayName = $$v
          },
          expression: "displayName"
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "text-danger text-sm" }, [
        _vm._v(_vm._s(_vm.errors.first("displayName")))
      ]),
      _vm._v(" "),
      _c("vs-input", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "required|email",
            expression: "'required|email'"
          }
        ],
        staticClass: "w-full mt-6",
        attrs: {
          "data-vv-validate-on": "blur",
          name: "email",
          type: "email",
          "label-placeholder": "Email",
          placeholder: "Email"
        },
        model: {
          value: _vm.email,
          callback: function($$v) {
            _vm.email = $$v
          },
          expression: "email"
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "text-danger text-sm" }, [
        _vm._v(_vm._s(_vm.errors.first("email")))
      ]),
      _vm._v(" "),
      _c("vs-input", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "required|min:6|max:10",
            expression: "'required|min:6|max:10'"
          }
        ],
        ref: "password",
        staticClass: "w-full mt-6",
        attrs: {
          type: "password",
          "data-vv-validate-on": "blur",
          name: "password",
          "label-placeholder": "Password",
          placeholder: "Password"
        },
        model: {
          value: _vm.password,
          callback: function($$v) {
            _vm.password = $$v
          },
          expression: "password"
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "text-danger text-sm" }, [
        _vm._v(_vm._s(_vm.errors.first("password")))
      ]),
      _vm._v(" "),
      _c("vs-input", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "min:6|max:10|confirmed:password",
            expression: "'min:6|max:10|confirmed:password'"
          }
        ],
        staticClass: "w-full mt-6",
        attrs: {
          type: "password",
          "data-vv-validate-on": "blur",
          "data-vv-as": "password",
          name: "confirm_password",
          "label-placeholder": "Confirm Password",
          placeholder: "Confirm Password"
        },
        model: {
          value: _vm.confirm_password,
          callback: function($$v) {
            _vm.confirm_password = $$v
          },
          expression: "confirm_password"
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "text-danger text-sm" }, [
        _vm._v(_vm._s(_vm.errors.first("confirm_password")))
      ]),
      _vm._v(" "),
      _c(
        "vs-checkbox",
        {
          staticClass: "mt-6",
          model: {
            value: _vm.isTermsConditionAccepted,
            callback: function($$v) {
              _vm.isTermsConditionAccepted = $$v
            },
            expression: "isTermsConditionAccepted"
          }
        },
        [_vm._v("I accept the terms & conditions.")]
      ),
      _vm._v(" "),
      _c(
        "vs-button",
        { staticClass: "mt-6", attrs: { type: "border", to: "/pages/login" } },
        [_vm._v("Login")]
      ),
      _vm._v(" "),
      _c(
        "vs-button",
        {
          staticClass: "float-right mt-6",
          attrs: { disabled: !_vm.validateForm },
          on: { click: _vm.registerUser }
        },
        [_vm._v("Register")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "flex gap-0 register-board-wrapper" }, [
      _c("div", { staticClass: "flex-none register-board-left-side" }),
      _vm._v(" "),
      _c("div", { staticClass: "flex-grow register-board-middle-side" }, [
        _c("div", { staticClass: "inner-wrapper text-center flex flex-col" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "scroll-container-one overflow-y-auto" }, [
            _c(
              "div",
              {
                staticClass:
                  "w-full mt-5 description leading-relaxed\ttext-lg flex justify-end"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "w-full sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12 grid grid-cols-8 gap-4"
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-span-1 flex items-center" },
                      [
                        _c("vs-switch", {
                          attrs: { color: "#4098ff" },
                          model: {
                            value: _vm.switchPublic,
                            callback: function($$v) {
                              _vm.switchPublic = $$v
                            },
                            expression: "switchPublic"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]
            ),
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
                          value: "required|alpha_dash|min:3",
                          expression: "'required|alpha_dash|min:3'"
                        }
                      ],
                      staticClass: "w-full text-lg",
                      attrs: {
                        "data-vv-validate-on": "blur",
                        name: "displayName",
                        "data-vv-as": "이름",
                        label: "이름",
                        placeholder: "작가"
                      },
                      model: {
                        value: _vm.displayName,
                        callback: function($$v) {
                          _vm.displayName = $$v
                        },
                        expression: "displayName"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full flex justify-left" }, [
                  _c("span", { staticClass: "w-1/2 text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("displayName")))
                  ])
                ])
              ]
            ),
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
                  { staticClass: "w-full flex justify-between" },
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
                      staticClass: "text-lg w-3/5",
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
                    }),
                    _vm._v(" "),
                    _c(
                      "vs-select",
                      {
                        staticClass: "selectExample",
                        attrs: { label: "작가 유형" },
                        model: {
                          value: _vm.selectType,
                          callback: function($$v) {
                            _vm.selectType = $$v
                          },
                          expression: "selectType"
                        }
                      },
                      _vm._l(_vm.options1, function(item, index) {
                        return _c("vs-select-item", {
                          key: index,
                          attrs: { value: item.value, text: item.text }
                        })
                      }),
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full flex justify-left" }, [
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
                          value: "required|min:8",
                          expression: "'required|min:8'"
                        }
                      ],
                      ref: "password",
                      staticClass: "w-full text-lg",
                      attrs: {
                        "data-vv-validate-on": "blur",
                        type: "password",
                        name: "password",
                        "data-vv-as": "비밀번호",
                        label: "비밀번호",
                        placeholder:
                          "최소 8자리 이상: 영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합"
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
                _c("div", { staticClass: "w-full flex justify-left" }, [
                  _c("span", { staticClass: "w-full text-danger text-sm" }, [
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
                          value: "required|min:8|confirmed:password",
                          expression: "'required|min:8|confirmed:password'"
                        }
                      ],
                      staticClass: "w-full text-lg",
                      attrs: {
                        "data-vv-validate-on": "blur",
                        type: "password",
                        name: "confirm_password",
                        "data-vv-as": "비밀번호 다시쓰기",
                        label: "비밀번호 다시쓰기",
                        placeholder: ""
                      },
                      model: {
                        value: _vm.confirm_password,
                        callback: function($$v) {
                          _vm.confirm_password = $$v
                        },
                        expression: "confirm_password"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full flex justify-left" }, [
                  _c("span", { staticClass: "w-full text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("confirm_password")))
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"
              },
              [
                _c("div", [_vm._v("Nationality")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-start mt-3" },
                  [
                    _c(
                      "vs-radio",
                      {
                        attrs: { color: "#4098ff", "vs-value": "k" },
                        model: {
                          value: _vm.nationality,
                          callback: function($$v) {
                            _vm.nationality = $$v
                          },
                          expression: "nationality"
                        }
                      },
                      [_vm._v("내국인")]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-radio",
                      {
                        staticClass: "ml-12",
                        attrs: { color: "#4098ff", "vs-value": "f" },
                        model: {
                          value: _vm.nationality,
                          callback: function($$v) {
                            _vm.nationality = $$v
                          },
                          expression: "nationality"
                        }
                      },
                      [_vm._v("외국인")]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"
              },
              [
                _c("div", [_vm._v("성별")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-start mt-3" },
                  [
                    _c(
                      "vs-radio",
                      {
                        attrs: { color: "#4098ff", "vs-value": "m" },
                        model: {
                          value: _vm.sex,
                          callback: function($$v) {
                            _vm.sex = $$v
                          },
                          expression: "sex"
                        }
                      },
                      [_vm._v("남")]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-radio",
                      {
                        staticClass: "ml-20",
                        attrs: { color: "#4098ff", "vs-value": "w" },
                        model: {
                          value: _vm.sex,
                          callback: function($$v) {
                            _vm.sex = $$v
                          },
                          expression: "sex"
                        }
                      },
                      [_vm._v("여")]
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "w-full mt-5 text-align-left input-wrapper-one flex justify-center mt-5 flex-col"
              },
              [
                _c("div", [_vm._v("생년월일")]),
                _vm._v(" "),
                _c("datepicker", {
                  attrs: {
                    placeholder: "생년월일을 선택하세요.",
                    format: "yyyy/MM/dd"
                  },
                  model: {
                    value: _vm.birthday,
                    callback: function($$v) {
                      _vm.birthday = $$v
                    },
                    expression: "birthday"
                  }
                })
              ],
              1
            ),
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
                          value: "required|min:3",
                          expression: "'required|min:3'"
                        }
                      ],
                      staticClass: "w-full text-lg",
                      attrs: {
                        "data-vv-validate-on": "blur",
                        name: "address",
                        "data-vv-as": "주소지",
                        label: "주소지",
                        placeholder: "주소지"
                      },
                      model: {
                        value: _vm.address,
                        callback: function($$v) {
                          _vm.address = $$v
                        },
                        expression: "address"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full flex justify-left" }, [
                  _c("span", { staticClass: "w-full text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("address")))
                  ])
                ])
              ]
            ),
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
                          value: "required|alpha_dash|min:3",
                          expression: "'required|alpha_dash|min:3'"
                        }
                      ],
                      staticClass: "w-full text-lg",
                      attrs: {
                        "data-vv-validate-on": "blur",
                        name: "phonenumber",
                        "data-vv-as": "전화번호",
                        label: "전화번호",
                        placeholder: "010-1234-5678"
                      },
                      model: {
                        value: _vm.phonenumber,
                        callback: function($$v) {
                          _vm.phonenumber = $$v
                        },
                        expression: "phonenumber"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full flex justify-left" }, [
                  _c("span", { staticClass: "w-full text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("phonenumber")))
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "w-full mt-96 flex justify-start mt-5" },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "circle-radius text-xl w-40",
                    attrs: { disabled: false, color: "#2BBBDB" },
                    on: { click: _vm.onTendencySelect }
                  },
                  [_vm._v("성향 맞춤")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full mt-5 mb-5" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "circle-radius text-xl cus-btn-width-one",
                  attrs: { disabled: !_vm.validateForm, color: "#2BBBDB" },
                  on: { click: _vm.registerUserJWt }
                },
                [_vm._v("동화 대화 시작하기")]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex-none register-board-right-side" })
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
        _vm._v("동화 대화 작업방 만들기")
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
        _c(
          "div",
          { staticClass: "color-gray-one title-font-two text-center" },
          [
            _vm._v("창의적 상상의 동화 세상을 꽃피게 할 그림동화 ,"),
            _c("br"),
            _vm._v("Simpatia, '심파띠아'에서 시작합니다.")
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-span-7" }, [
      _c("div", { staticClass: "text-left font-bold" }, [
        _vm._v("커뮤니티 작가 공개")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "color-gray-one text-left" }, [
        _vm._v("검색에서 작가님을 찾을 수 있게 공개해요"),
        _c("br"),
        _vm._v('"테스트 결과는 공유하지 않습니다."')
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=59b7090a& */ "./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/register/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=59b7090a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/Register.vue?vue&type=template&id=59b7090a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_59b7090a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterAuth0.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterAuth0.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterAuth0_vue_vue_type_template_id_0d04f264___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterAuth0.vue?vue&type=template&id=0d04f264& */ "./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=template&id=0d04f264&");
/* harmony import */ var _RegisterAuth0_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterAuth0.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterAuth0_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterAuth0_vue_vue_type_template_id_0d04f264___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterAuth0_vue_vue_type_template_id_0d04f264___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/register/RegisterAuth0.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterAuth0_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterAuth0.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterAuth0_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=template&id=0d04f264&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=template&id=0d04f264& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterAuth0_vue_vue_type_template_id_0d04f264___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterAuth0.vue?vue&type=template&id=0d04f264& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterAuth0.vue?vue&type=template&id=0d04f264&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterAuth0_vue_vue_type_template_id_0d04f264___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterAuth0_vue_vue_type_template_id_0d04f264___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterFirebase.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterFirebase.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterFirebase_vue_vue_type_template_id_6a693c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterFirebase.vue?vue&type=template&id=6a693c9e& */ "./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=template&id=6a693c9e&");
/* harmony import */ var _RegisterFirebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterFirebase.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterFirebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterFirebase_vue_vue_type_template_id_6a693c9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterFirebase_vue_vue_type_template_id_6a693c9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/register/RegisterFirebase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterFirebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterFirebase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterFirebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=template&id=6a693c9e&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=template&id=6a693c9e& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterFirebase_vue_vue_type_template_id_6a693c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterFirebase.vue?vue&type=template&id=6a693c9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterFirebase.vue?vue&type=template&id=6a693c9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterFirebase_vue_vue_type_template_id_6a693c9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterFirebase_vue_vue_type_template_id_6a693c9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterJWT.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterJWT.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterJWT.vue?vue&type=template&id=653637e6& */ "./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6&");
/* harmony import */ var _RegisterJWT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterJWT.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterJWT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/register/RegisterJWT.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterJWT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterJWT.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterJWT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterJWT.vue?vue&type=template&id=653637e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/register/RegisterJWT.vue?vue&type=template&id=653637e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterJWT_vue_vue_type_template_id_653637e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);