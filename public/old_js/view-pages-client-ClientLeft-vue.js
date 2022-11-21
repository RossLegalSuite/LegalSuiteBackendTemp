"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-ClientLeft-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/ClientLeft.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/ClientLeft.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {
    var _this = this;

    axios.post('/getapikey', {
      company: this.$route.params.firmcode
    }).then(function (response) {
      if (response.data.errors) {
        _this.errorFlag = true;
        _this.errorMessage = response.data.errors;
      } else {
        _this.companyName = response.data.name;
        _this.companyEmail = response.data.email;
        _this.companyLogo = response.data.lolsettings.logo; //this.title = 'Client Portal';

        _this.errorFlag = false;
        _this.errorMessage = '';
        _this.gotApiKeyFlag = true;
        _this.$refs['text-input-login'].setPopOver = '<h4>Code</h4><p>Enter the code provided to you by ' + _this.companyName + '.</p>';
        _this.$refs['text-input-password'].setPopOver = '<h4>Password</h4><p>Enter the password provided to you by ' + _this.companyName + '.</p>';
        $('#client-login-form .popover-icon').popover();
        setTimeout(function () {
          $('input[name="login"]').focus();
        }); // ******************************************
        //              Testing
        // ******************************************

        _this.record.login = '0001';
        _this.record.password = '28787';
        $('input[name="login"]').val(_this.record.login);
        $('input[name="password"]').val(_this.record.password);
      }
    })["catch"](function (error) {
      _this.errorFlag = true;
      _this.errorMessage = error;
    }); // Show the Login Page
    // var checkExist = setInterval(() => {
    //     if (this.$root.$refs['pages'].$refs['right-page']) {
    //         //console.log("typeof this.$route",typeof this.$route);
    //         this.showPage('Login');
    //         clearInterval(checkExist);
    //     }
    // }, 100); // check every 100ms
  },
  data: function data() {
    return {
      submittingFlag: false,
      record: {},
      errors: {},
      //title: 'Loading..',
      companyName: '',
      companyLogo: '',
      companyEmail: '',
      errorFlag: false,
      errorMessage: '',
      gotApiKeyFlag: false
    };
  },
  methods: {
    okClicked: function okClicked() {
      var _this2 = this;

      if (this.submittingFlag) return;
      this.submittingFlag = true;
      this.errors = {}; // Clear previous errors

      this.record.firmCode = this.$route.params.firmcode;
      axios.post('/clientLogin', this.record)["finally"](function () {
        _this2.submittingFlag = false;
      }).then(function (response) {
        if (response.data.validationErrors) {
          _this2.errors = response.data.validationErrors;
        } else if (response.data.errors) {
          showError('Error', response.data.errors);
        } else {
          _this2.errors = {}; // document.cookie = "company=" + this.record.company;
          // document.cookie = "login=" + this.record.login;

          window.location = '/home';
        }
      });
    },
    showPage: function showPage(pageName) {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].showPage(pageName);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/ClientLeft.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/client/ClientLeft.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientLeft_vue_vue_type_template_id_5ec81386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientLeft.vue?vue&type=template&id=5ec81386& */ "./resources/js/pages/client/ClientLeft.vue?vue&type=template&id=5ec81386&");
/* harmony import */ var _ClientLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientLeft.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/ClientLeft.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClientLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientLeft_vue_vue_type_template_id_5ec81386___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClientLeft_vue_vue_type_template_id_5ec81386___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/ClientLeft.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/ClientLeft.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/client/ClientLeft.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/ClientLeft.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/ClientLeft.vue?vue&type=template&id=5ec81386&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/client/ClientLeft.vue?vue&type=template&id=5ec81386& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientLeft_vue_vue_type_template_id_5ec81386___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientLeft_vue_vue_type_template_id_5ec81386___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientLeft_vue_vue_type_template_id_5ec81386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientLeft.vue?vue&type=template&id=5ec81386& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/ClientLeft.vue?vue&type=template&id=5ec81386&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/ClientLeft.vue?vue&type=template&id=5ec81386&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/ClientLeft.vue?vue&type=template&id=5ec81386& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card h-100 border-0", attrs: { id: "client-login-form" } },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.gotApiKeyFlag,
              expression: "gotApiKeyFlag",
            },
          ],
          staticClass: "card-header",
        },
        [
          _vm.companyLogo
            ? _c("div", { staticClass: "text-center" }, [
                _c("img", {
                  staticClass: "img-fluid my-2",
                  staticStyle: { "max-height": "10vh" },
                  attrs: { src: _vm.companyLogo, alt: "Company Logo" },
                }),
              ])
            : _c("h3", { staticClass: "text-center" }, [
                _vm._v(_vm._s(_vm.companyName)),
              ]),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body overflow-auto p-3" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.errorFlag,
                expression: "errorFlag",
              },
            ],
            staticClass: "row mt-5",
          },
          [
            _c("div", { staticClass: "col-md-6 offset-md-3" }, [
              _c("fieldset", [
                _c(
                  "legend",
                  { staticStyle: { "background-color": "indianred" } },
                  [_vm._v("Error")]
                ),
                _vm._v(
                  "\r\n\r\n                    " +
                    _vm._s(_vm.errorMessage) +
                    "\r\n\r\n                "
                ),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
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
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.gotApiKeyFlag,
                expression: "gotApiKeyFlag",
              },
            ],
            staticClass: "row mt-5",
          },
          [
            _c(
              "div",
              { staticClass: "col-xl-6 offset-xl-3 col-md-8 offset-md-2" },
              [
                _c(
                  "fieldset",
                  {
                    staticClass: "shadow",
                    staticStyle: { "padding-left": "1.4rem" },
                  },
                  [
                    _c("legend", [_vm._v("Login")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group row mt-2" },
                      [
                        _c("text-input", {
                          ref: "text-input-login",
                          attrs: {
                            _class: "col-md-8",
                            popOverContainer: "#client-login-form",
                            "pop-over": "Dynamic",
                            name: "login",
                            label: "Code",
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
                          ref: "text-input-password",
                          attrs: {
                            _class: "col-md-8",
                            popOverContainer: "#client-login-form",
                            "pop-over": "Dynamic",
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
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group row mt-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "col-md-12",
                          staticStyle: { "text-align": "right" },
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success form-button mr-2",
                              attrs: { type: "button", title: "Continue" },
                              on: { click: _vm.okClicked },
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-check-circle fa-lg mr-2",
                              }),
                              _vm._v("Login"),
                            ]
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]
            ),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);