"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-guest-GuestRegister-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRegister.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRegister.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      checkRegisterFlag: false,
      submittingFlag: false,
      activePage: 'Register',
      record: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('register')) {
      this.$root.$refs['pages'].$refs['right-page'].activePage = 'Register';
    }
  },
  methods: {
    loadComponent: function loadComponent() {
      this.submittingFlag = false;
      this.errors = {}; // ************************** FOR TESTING ***************************

      if (appEnvironment === 'local') {
        this.record.company_code = 'ACME';
        this.record.company_name = 'Acme Inc';
        this.record.company_trading_name = 'Acme Attorneys';
        this.record.email = 'admin@acme.co.za';
        this.record.password = 'secret';
        this.record.password_confirmation = 'secret';
        this.record.name = 'Rick Jordan';
        this.record.website = 'legalsuite.co.za';
        this.record.dbhost = 'legalsuite.dyndns.org';
        this.record.dbport = '1433';
        this.record.dbdatabase = 'legalsuite';
        this.record.dbusername = 'ls';
        this.record.dbpassword = 'password';
        $('input[name="company_code"]').val(this.record.company_code);
        $('input[name="company_name"]').val(this.record.company_name);
        $('input[name="company_trading_name"]').val(this.record.company_trading_name);
        $('input[name="name"]').val(this.record.name);
        $('input[name="email"]').val(this.record.email);
        $('input[name="password"]').val(this.record.password);
      } // ******************************************************************

    },
    checkRegister: function checkRegister() {
      var _this = this;

      this.submittingFlag = true;
      this.errors = {}; // Clear previous errors
      // root.$snotify.simple('Checking Register', 'Please wait...', { timeout: 0, icon: 'img/cogs.gif' });

      axios.post('/checkRegister', this.record)["finally"](function () {
        _this.submittingFlag = false;
      }).then(function (response) {
        // console.log("Response");
        // console.log(response);
        // root.$snotify.clear();
        if (response.data.errors) {
          if (response.data.errors) {
            showError('Error', response.data.errors);
          }
        } else if (response.data.response == 'Client not Registered') {
          _this.checkRegisterFlag = true;
        }

        _this.errors = {}; // root.$snotify.simple('Registering your Company', 'Please wait...', { timeout: 60, icon: 'img/check.png' });

        _this.activePage = "Login";
      });
    },
    companyNameChanged: function companyNameChanged() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this2.record.company_trading_name) {
                  _this2.record.company_trading_name = _this2.record.company_name;
                  $('input[name="company_trading_name"]').val(_this2.record.company_name);
                }

                if (_this2.record.company_code) {
                  _context.next = 14;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return axios.post('/generateCompanyCode', {
                  name: _this2.record.company_name
                });

              case 5:
                response = _context.sent;
                _this2.record.company_code = response.data;
                $('input[name="company_code"]').val(response.data);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                showError('Error generating Company Code', _context.t0);

              case 13:
                ;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }))();
    },
    checkData: function checkData() {
      //showError('Access denied','<p>You cannot delete ' + rowData.description + '</p><p>It is associated with this email.</p>');
      if (!$('input[name="name"]')[0].checkValidity()) {
        validationError('Please enter your name');
        return false;
      }

      if (!$("#email")[0].checkValidity()) {
        validationError('Please enter your email address');
        return false;
      }

      if (!$("#password")[0].checkValidity()) {
        validationError('Please provide a password');
        return false;
      }

      if (!$("#company_code")[0].checkValidity()) {
        validationError('Please enter a company code');
        return false;
      }

      if (!$("#company_name")[0].checkValidity()) {
        validationError('Please enter a company name');
        return false;
      }

      if (!$("#company_trading_name")[0].checkValidity()) {
        validationError('Please enter a trading name for the company');
        return false;
      }

      return true;
    },
    okClicked: function okClicked() {
      var _this3 = this;

      this.submittingFlag = true;
      this.errors = {}; // Clear previous errors

      this.record.company_timezone = "+02:00";
      this.record.company_country = "ZA";
      root.$snotify.simple('Registering your Company', 'Please wait...', {
        timeout: 0,
        icon: 'img/cogs.gif'
      });
      axios.post('/register', this.record)["finally"](function () {
        _this3.submittingFlag = false;
      }).then(function (response) {
        _this3.submittingFlag = false;

        if (response.data.errors) {
          root.$snotify.clear();

          if (response.data.errors) {
            showError('Error', response.data.errors);
          } else {
            _this3.errors = response.data.errors;
          }
        } else {
          _this3.errors = {};
          document.cookie = "company=" + _this3.record.company_code;
          document.cookie = "login=" + _this3.record.email;
          root.$snotify.clear();
          window.location = '/?login';
          showSuccess('Success', response); // window.location = '/?registration=success';
        }
      });
    },
    hide: function hide() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].closePage(this.activePage);
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/guest/GuestRegister.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/guest/GuestRegister.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GuestRegister_vue_vue_type_template_id_69c2a0ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuestRegister.vue?vue&type=template&id=69c2a0ab& */ "./resources/js/pages/guest/GuestRegister.vue?vue&type=template&id=69c2a0ab&");
/* harmony import */ var _GuestRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuestRegister.vue?vue&type=script&lang=js& */ "./resources/js/pages/guest/GuestRegister.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GuestRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GuestRegister_vue_vue_type_template_id_69c2a0ab___WEBPACK_IMPORTED_MODULE_0__.render,
  _GuestRegister_vue_vue_type_template_id_69c2a0ab___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/guest/GuestRegister.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/guest/GuestRegister.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/guest/GuestRegister.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRegister.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/guest/GuestRegister.vue?vue&type=template&id=69c2a0ab&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/guest/GuestRegister.vue?vue&type=template&id=69c2a0ab& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestRegister_vue_vue_type_template_id_69c2a0ab___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestRegister_vue_vue_type_template_id_69c2a0ab___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestRegister_vue_vue_type_template_id_69c2a0ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuestRegister.vue?vue&type=template&id=69c2a0ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRegister.vue?vue&type=template&id=69c2a0ab&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRegister.vue?vue&type=template&id=69c2a0ab&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/guest/GuestRegister.vue?vue&type=template&id=69c2a0ab& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "card h-100 border-0",
      attrs: { id: "guest-register-form" },
    },
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
      _c("div", { staticClass: "card-body overflow-auto pt-2 p-3" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.checkRegisterFlag,
                expression: "!checkRegisterFlag",
              },
            ],
            staticClass: "row",
          },
          [
            _c("div", { staticClass: "col-lg-12 mb-4" }, [
              _c("fieldset", [
                _c("legend", [_vm._v("Registration")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _c("text-input", {
                      attrs: {
                        _class: "col-md-6",
                        popOver:
                          "<h4>Firm Code</h4>                                        \r\n                            <p><strong>Enter your Company's Firm Code</strong></p>",
                        popOverContainer: "#guest-register-form",
                        name: "firmcode",
                        label: "Firm Code",
                        error: _vm.errors.firmcode,
                      },
                      model: {
                        value: _vm.record.firmcode,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "firmcode", $$v)
                        },
                        expression: "record.firmcode",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-md-6",
                        staticStyle: { "align-self": "flex-end" },
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info form-button mb-1",
                            attrs: { id: "checkRegister", type: "button" },
                            on: { click: _vm.checkRegister },
                          },
                          [
                            _vm._v(
                              "\r\n                                Register\r\n                            "
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Please enter your Company's Firm Code, this will check if the company is registered on the LegalSuite API and grant LegalSuite Online Access."
                  ),
                ]),
              ]),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.checkRegisterFlag,
                expression: "checkRegisterFlag",
              },
            ],
            staticClass: "row",
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6" }, [
              _c("fieldset", [
                _c("legend", [_vm._v("Company")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _c("text-input", {
                      attrs: {
                        _class: "col-md-12",
                        popOver:
                          "<h4>User</h4>                                        \r\n                            <p><strong>Enter your first name and last name here</strong></p>\r\n                            <p>Note: Since you are the person who registered the company, you will be added as and Employee with <em>Administrator privileges</em>.</p>\r\n                            <p>The Adminstrator has the highest security level and has access to all areas of the program and can add additional Employees, for example, once you have logged into the program.</p>",
                        popOverContainer: "#guest-register-form",
                        name: "name",
                        label: "Name",
                        error: _vm.errors.name,
                      },
                      model: {
                        value: _vm.record.name,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "name", $$v)
                        },
                        expression: "record.name",
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
                        _class: "col-md-12",
                        popOver:
                          "<h4>Email Address</h4>\r\n                            <p>Enter your email address here.</p>\r\n                            <p>You will use this email address to login to this Company.</p>",
                        popOverContainer: "#guest-register-form",
                        name: "email",
                        label: "Email",
                        error: _vm.errors.email,
                      },
                      model: {
                        value: _vm.record.email,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "email", $$v)
                        },
                        expression: "record.email",
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
                        _class: "col-md-12",
                        popOver:
                          "<h4>Website</h4>\r\n                            <p>Enter the address of your website here.</p>",
                        popOverContainer: "#guest-register-form",
                        name: "website",
                        label: "Website",
                        error: _vm.errors.website,
                      },
                      model: {
                        value: _vm.record.website,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "website", $$v)
                        },
                        expression: "record.website",
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
                        _class: "col-md-6",
                        popOver:
                          "<h4>Password</h4>\r\n                            <p>Please provide a strong password.</p>\r\n                            <p>You will use this password to login to this Company.</p>",
                        popOverContainer: "#guest-register-form",
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
                _c(
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _c("text-input", {
                      attrs: {
                        _class: "col-md-6",
                        popOver:
                          "<h4>password_confirmation</h4>\r\n                            <p>Please confirm your password.</p>\r\n                            <p>You will use this password to login to this Company.</p>",
                        popOverContainer: "#guest-register-form",
                        type: "password",
                        name: "password_confirmation",
                        label: "Password",
                        error: _vm.errors.password_confirmation,
                      },
                      model: {
                        value: _vm.record.password_confirmation,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "password_confirmation", $$v)
                        },
                        expression: "record.password_confirmation",
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6" }, [
              _c("fieldset", [
                _c("legend", [_vm._v("Database")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _c("text-input", {
                      attrs: {
                        _class: "col-md-12",
                        popOver: "<h4>Host</h4><p>xxx.</p>",
                        popOverContainer: "#guest-register-form",
                        name: "dbhost",
                        label: "Host",
                        error: _vm.errors.dbhost,
                      },
                      model: {
                        value: _vm.record.dbhost,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "dbhost", $$v)
                        },
                        expression: "record.dbhost",
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
                        _class: "col-md-12",
                        popOver: "<h4>Port</h4><p>xxx.</p>",
                        popOverContainer: "#guest-register-form",
                        name: "dbport",
                        label: "Port",
                        error: _vm.errors.dbport,
                      },
                      model: {
                        value: _vm.record.dbport,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "dbport", $$v)
                        },
                        expression: "record.dbport",
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
                        _class: "col-md-12",
                        popOver: "<h4>Database</h4><p>xxx</p>",
                        popOverContainer: "#guest-register-form",
                        name: "dbdatabase",
                        label: "Database",
                        error: _vm.errors.dbdatabase,
                      },
                      model: {
                        value: _vm.record.dbdatabase,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "dbdatabase", $$v)
                        },
                        expression: "record.dbdatabase",
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
                        _class: "col-md-12",
                        popOver: "<h4>Username</h4><p>xxx</p>",
                        popOverContainer: "#guest-register-form",
                        name: "dbusername",
                        label: "Username",
                        error: _vm.errors.dbusername,
                      },
                      model: {
                        value: _vm.record.dbusername,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "dbusername", $$v)
                        },
                        expression: "record.dbusername",
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
                        _class: "col-md-12",
                        popOver: "<h4>Password</h4><p>xxx</p>",
                        popOverContainer: "#guest-register-form",
                        name: "dbpassword",
                        label: "Password",
                        error: _vm.errors.dbpassword,
                      },
                      model: {
                        value: _vm.record.dbpassword,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "dbpassword", $$v)
                        },
                        expression: "record.dbpassword",
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _vm.checkRegisterFlag
        ? _c("form-buttons", {
            attrs: {
              editing: false,
              saveText: "Register",
              saveTitle: "Register a Company",
              record: "Company",
            },
            on: { "ok-clicked": _vm.okClicked, "cancel-clicked": _vm.hide },
          })
        : _vm._e(),
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
      _c("i", { staticClass: "fa fa-edit mr-2" }),
      _vm._v("Register"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12 mb-3" }, [
      _c("fieldset", [
        _c("legend", [_vm._v("Registration")]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("p", [
              _vm._v(
                "There is no Company with this FirmCode Registered, please enter the Company and SQL Server Details below to Register"
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);