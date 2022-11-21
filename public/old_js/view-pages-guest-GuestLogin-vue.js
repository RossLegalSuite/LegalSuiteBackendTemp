"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-guest-GuestLogin-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestLogin.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestLogin.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      submittingFlag: false,
      activePage: 'Login',
      record: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('login')) {
      this.$root.$refs['pages'].$refs['right-page'].activePage = 'Login';
    }
  },
  methods: {
    loadComponent: function loadComponent() {
      var _this = this;

      this.submittingFlag = false;
      this.errors = {};
      var urlParams = new URLSearchParams(window.location.search);
      var urlCompany = urlParams.get('company');
      var urlLogin = urlParams.get('login');
      this.record.company = urlCompany ? urlCompany : getCookie('company');
      this.record.login = urlLogin ? urlLogin : getCookie('login'); // ************************** FOR TESTING ***************************
      //if ( appEnvironment === 'local') {

      this.record.company = 'ACME01';
      this.record.login = 'RJ';
      this.record.password = 'lsw123';
      $('input[name="company"]').val(this.record.company);
      $('input[name="login"]').val(this.record.login);
      $('input[name="password"]').val(this.record.password); //}
      // ******************************************************************

      setTimeout(function () {
        if (_this.record.company && !_this.record.login) {
          $('input[name="login"]').focus();
        } else if (!_this.record.company && _this.record.login) {
          $('input[name="company"]').focus();
        } else if (_this.record.company && _this.record.login) {
          $('input[name="password"]').focus();
        } else {
          $('input[name="company"]').focus();
        }
      }, 100);
    },
    okClicked: function okClicked() {
      var _this2 = this;

      if (this.submittingFlag) return;
      this.submittingFlag = true;
      this.errors = {}; // Clear previous errors

      root.$snotify.simple('Logging in ' + this.record.login, 'Company: ' + this.record.company, {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      axios.post('/login', this.record)["finally"](function () {
        _this2.submittingFlag = false;
      }).then(function (response) {
        if (response.data.errors) {
          console.log("response.data.errors.login", response.data.errors.login);

          if (response.data.errors.company || response.data.errors.login || response.data.errors.password) {
            root.$snotify.clear();
            _this2.errors = response.data.errors;
          } else {
            showError('Error', response.data.errors);
          }
        } else {
          root.$snotify.clear();
          _this2.errors = {};
          document.cookie = "company=" + _this2.record.company;
          document.cookie = "login=" + _this2.record.login;
          window.location = '/home';
        }
      });
    },
    hide: function hide() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].closePage(this.activePage);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/guest/GuestLogin.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/guest/GuestLogin.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GuestLogin_vue_vue_type_template_id_76252291___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuestLogin.vue?vue&type=template&id=76252291& */ "./resources/js/pages/guest/GuestLogin.vue?vue&type=template&id=76252291&");
/* harmony import */ var _GuestLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuestLogin.vue?vue&type=script&lang=js& */ "./resources/js/pages/guest/GuestLogin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GuestLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GuestLogin_vue_vue_type_template_id_76252291___WEBPACK_IMPORTED_MODULE_0__.render,
  _GuestLogin_vue_vue_type_template_id_76252291___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/guest/GuestLogin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/guest/GuestLogin.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/guest/GuestLogin.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestLogin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestLogin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/guest/GuestLogin.vue?vue&type=template&id=76252291&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/guest/GuestLogin.vue?vue&type=template&id=76252291& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestLogin_vue_vue_type_template_id_76252291___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestLogin_vue_vue_type_template_id_76252291___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestLogin_vue_vue_type_template_id_76252291___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestLogin.vue?vue&type=template&id=76252291& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestLogin.vue?vue&type=template&id=76252291&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestLogin.vue?vue&type=template&id=76252291&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestLogin.vue?vue&type=template&id=76252291& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card h-100 border-0", attrs: { id: "guest-login-form" } },
    [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "div",
          { staticClass: "d-flex justify-content-between" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("page-close-button", { on: { closeClicked: _vm.hide } }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body overflow-auto pl-4 p-3" }, [
        _vm.errors.database
          ? _c("div", { staticClass: "row mb-3" }, [
              _c("div", { staticClass: "col-lg-12" }, [
                _c("fieldset", [
                  _c("legend", [_vm._v("Database Error")]),
                  _vm._v(" "),
                  _vm.errors.database
                    ? _c("div", {
                        staticClass: "invalid-feedback",
                        domProps: { innerHTML: _vm._s(_vm.errors.database[0]) },
                      })
                    : _vm._e(),
                ]),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group row" },
          [
            _c("text-input", {
              attrs: {
                _class: "col-md-4",
                popOver:
                  "<h4>Company</h4>\r\n                <p>Enter the Code of the Company you want to login to here.</p>\r\n                <p>Note: This code is assigned to your firm when LegalSuite Online is activated.</p>",
                popOverContainer: "#guest-login-form",
                name: "company",
                label: "Company",
                error: _vm.errors.company,
              },
              model: {
                value: _vm.record.company,
                callback: function ($$v) {
                  _vm.$set(_vm.record, "company", $$v)
                },
                expression: "record.company",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group row" },
          [
            _c("text-input", {
              attrs: {
                _class: "col-md-4",
                popOver:
                  "<h4>User</h4><p>Enter the <em>Employee Code</em> you use to login to the LegalSuite program.</p>",
                popOverContainer: "#guest-login-form",
                name: "login",
                label: "User",
                error: _vm.errors.login,
              },
              model: {
                value: _vm.record.login,
                callback: function ($$v) {
                  _vm.$set(_vm.record, "login", $$v)
                },
                expression: "record.login",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group row" },
          [
            _c("text-input", {
              attrs: {
                _class: "col-md-4",
                popOver:
                  "<h4>Password</h4><p>Enter the password you use to login to the LegalSuite program.</p>",
                popOverContainer: "#guest-login-form",
                type: "password",
                name: "password",
                label: "Password",
                error: _vm.errors.password,
              },
              model: {
                value: _vm.record.password,
                callback: function ($$v) {
                  _vm.$set(_vm.record, "password", $$v)
                },
                expression: "record.password",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("form-buttons", {
        attrs: {
          editing: false,
          saveText: "Login",
          saveTitle: "Login to the program",
          record: "User",
        },
        on: { "ok-clicked": _vm.okClicked, "cancel-clicked": _vm.hide },
      }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fa fa-lock mr-2" }),
      _vm._v("Login to LegalSuite"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);