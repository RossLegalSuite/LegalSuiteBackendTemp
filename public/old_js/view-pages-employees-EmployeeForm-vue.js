"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-employees-EmployeeForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_1__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_2__["default"]],
  computed: {
    loggedInEmployeeId: function loggedInEmployeeId() {
      return root.loggedInEmployeeId;
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'Employees'
    },
    parentType: {
      type: String,
      "default": 'General'
    },
    title: {
      type: String,
      "default": ''
    },
    uniqueId: String
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapMutations)(['setCurrentEmployee'])), {}, {
    editRecord: function editRecord(id) {
      var _this = this;

      axios.post('/employees/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];

        _this.setCurrentEmployee({
          id: _this.record.id,
          name: _this.record.name,
          email: _this.record.email
        });

        _this.initFormData();
      });
    },
    initNewRecord: function initNewRecord() {
      var _this2 = this;

      if (this.parentType === 'General') root.$refs['pages'].$refs["left-page"].clearPages();
      this.record = {
        name: null,
        email: null,
        password: null
      };
      this.initFormData();
      setTimeout(function () {
        return $('#' + _this2.id + ' input[name="name"]').focus();
      });
    },
    initFormData: function initFormData() {
      this.displayForm();
    },
    testEmail: function testEmail() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                root.$snotify.simple('Logging in to Email Server', 'Connecting', {
                  timeout: 0,
                  icon: 'img/cogs.gif'
                });
                _context.next = 3;
                return _this3.$root.emailModal.checkSmtpDetails().then(function (smtpDetails) {
                  var params = {
                    incomingServer: smtpDetails.incomingServer,
                    incomingPort: smtpDetails.incomingPort,
                    incomingEncryption: smtpDetails.incomingEncryption,
                    userName: _this3.record.smtpUserName,
                    password: _this3.record.smtpPassword
                  };
                  axios.post('/mail/testIncomingServer', params).then(function (response) {
                    root.$snotify.clear();

                    if (response.data.error) {
                      showError('Email Server Error', response.data.error);
                    } else {
                      root.$snotify.simple('Connected to Email Server', 'Success', {
                        timeout: 3000,
                        icon: 'img/check.png'
                      });
                    }
                  });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    okClicked: function okClicked() {
      var _this4 = this;

      axios.post('/employees/store', this.record).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this4.errors = response.data.errors;
          }
        } else {
          _this4.errors = {};

          _this4.setCurrentEmployee({
            id: response.data.id,
            name: response.data.name,
            email: response.data.email
          });

          if (_this4.table) {
            _this4.highlightTableRow(response.data.id, response.data.name);
          } else {
            _this4.closeForm();
          }
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this4.table.singular, error);
      });
    },
    changePassword: function changePassword() {
      showError('To Do', 'changePassword');
    },
    highlightTableRow: function highlightTableRow(id, name) {
      var _this5 = this;

      axios.post('/employees/getTablePosition', {
        name: name
      }).then(function (response) {
        _this5.table.jumpToRow(id, response.data);

        _this5.closeForm();
      });
    },
    pageTitle: function pageTitle() {
      return this.record.name ? this.record.name : '';
    }
  })
});

/***/ }),

/***/ "./resources/js/pages/employees/EmployeeForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/employees/EmployeeForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmployeeForm_vue_vue_type_template_id_0d606da5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeForm.vue?vue&type=template&id=0d606da5& */ "./resources/js/pages/employees/EmployeeForm.vue?vue&type=template&id=0d606da5&");
/* harmony import */ var _EmployeeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/employees/EmployeeForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmployeeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployeeForm_vue_vue_type_template_id_0d606da5___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmployeeForm_vue_vue_type_template_id_0d606da5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/employees/EmployeeForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/employees/EmployeeForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/employees/EmployeeForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/employees/EmployeeForm.vue?vue&type=template&id=0d606da5&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/employees/EmployeeForm.vue?vue&type=template&id=0d606da5& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeForm_vue_vue_type_template_id_0d606da5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeForm_vue_vue_type_template_id_0d606da5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeForm_vue_vue_type_template_id_0d606da5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeForm.vue?vue&type=template&id=0d606da5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeForm.vue?vue&type=template&id=0d606da5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeForm.vue?vue&type=template&id=0d606da5&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/EmployeeForm.vue?vue&type=template&id=0d606da5& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: _vm.modal ? "modal" : "", attrs: { id: _vm.id } }, [
    _c(
      "div",
      { class: _vm.modal ? "modal-dialog modal-dialog-centered modal-lg" : "" },
      [
        _c(
          "div",
          {
            class: _vm.modal
              ? "modal-content employees-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header employees-bg"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", [
                      !_vm.editing
                        ? _c("span", [_vm._v("Employee will be Added")])
                        : _c("span", {
                            domProps: { innerHTML: _vm._s(_vm.pageTitle()) },
                          }),
                    ]),
                    _vm._v(" "),
                    _vm.modal
                      ? _c("i", {
                          staticClass:
                            "cp top-right fa fa-times-circle fa-2x text-white",
                          attrs: {
                            title: "Close this window",
                            "data-dismiss": "modal",
                          },
                        })
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  !_vm.modal
                    ? _c("page-close-button", {
                        on: { closeClicked: _vm.closeForm },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body overflow-auto p-3" }, [
              _c(
                "div",
                { staticClass: "form-group row" },
                [
                  _c("text-input", {
                    attrs: {
                      _class: "col-md-7",
                      required: true,
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
                      _class: "col-md-7",
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
              !_vm.editing
                ? _c(
                    "div",
                    { staticClass: "form-group row" },
                    [
                      _c("text-input", {
                        attrs: {
                          _class: "col-md-7",
                          required: true,
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
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$root.control.smtpAuthentication === "Yes" &&
              _vm.$root.control.smtpServer
                ? _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-xxl-6 mt-xxl-0 mt-xl-3" }, [
                      _c(
                        "fieldset",
                        {
                          staticClass: "mt-3",
                          staticStyle: { background: "lightgrey" },
                        },
                        [
                          _c("legend", [_vm._v("Email Server Login Details")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group row" },
                            [
                              _c("text-input", {
                                attrs: {
                                  _class: "col-md-12",
                                  popOver:
                                    "<h4>User Name</h4>\r\n                                    <p>You can send emails directly from Ettorney and also add received emails to a Matter or Party's Correspondence.</p>\r\n                                    <p>To enable Ettorney to send email and read your email inbox, you need to specify the login details used by this Employee to access the company's Email Server.</p>\r\n                                    <p>You can get these details from your IT dept, hosting company or by examining the settings you use in the email client you normally use to send and receive email.</p>\r\n                                    ",
                                  popOverContainer: "#" + _vm.id,
                                  name: "smtpUserName",
                                  label: "User Name",
                                  error: _vm.errors.smtpUserName,
                                },
                                model: {
                                  value: _vm.record.smtpUserName,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "smtpUserName", $$v)
                                  },
                                  expression: "record.smtpUserName",
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
                                  name: "smtpPassword",
                                  label: "Password",
                                  error: _vm.errors.smtpPassword,
                                },
                                model: {
                                  value: _vm.record.smtpPassword,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "smtpPassword", $$v)
                                  },
                                  expression: "record.smtpPassword",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-right" }, [
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      _vm.record.smtpUserName &&
                                      _vm.record.smtpPassword,
                                    expression:
                                      "record.smtpUserName && record.smtpPassword",
                                  },
                                ],
                                staticClass: "btn btn-danger form-button mt-1",
                                attrs: {
                                  id: _vm.id + "-test-email-button",
                                  type: "button",
                                },
                                on: { click: _vm.testEmail },
                              },
                              [_vm._m(0)]
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c("div", [
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.editing && !_vm.readOnly,
                        expression: "editing && !readOnly",
                      },
                    ],
                    staticClass: "btn btn-primary form-button mr-3",
                    attrs: { type: "button" },
                    on: { click: _vm.deleteClicked },
                  },
                  [_vm._m(1)]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.editing &&
                          _vm.record.id == _vm.root.loggedInEmployeeId &&
                          !_vm.readOnly,
                        expression:
                          "editing && record.id == root.loggedInEmployeeId && !readOnly",
                      },
                    ],
                    staticClass: "btn btn-secondary form-button mr-3",
                    attrs: { type: "button" },
                    on: { click: _vm.changePassword },
                  },
                  [_vm._m(2)]
                ),
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.readOnly,
                        expression: "!readOnly",
                      },
                    ],
                    staticClass: "btn btn-success form-button mr-3",
                    attrs: { type: "button", title: "Save the Employee" },
                    on: { click: _vm.okClicked },
                  },
                  [
                    _c("i", { staticClass: "fa fa-check-circle fa-lg mr-2" }),
                    _vm._v("OK"),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger form-button",
                    attrs: { type: "button", title: "Exit without saving" },
                    on: { click: _vm.closeForm },
                  },
                  [
                    _c("i", { staticClass: "fa fa-times-circle fa-lg mr-2" }),
                    _vm._v("Close"),
                  ]
                ),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { attrs: { title: "Check if you can login to the Email Server" } },
      [
        _c("i", { staticClass: "fa fa-cog fa-lg mr-2" }),
        _vm._v("Test Connection"),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { title: "Delete this Employee" } }, [
      _c("i", { staticClass: "fa fa-trash fa-lg mr-2" }),
      _vm._v("Delete"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { attrs: { title: "Change the Password for this Employee" } },
      [
        _c("i", { staticClass: "fa fa-recycle fa-lg mr-2" }),
        _vm._v("Change Password"),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);