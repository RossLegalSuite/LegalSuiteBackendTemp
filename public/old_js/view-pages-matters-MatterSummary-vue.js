"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matters-MatterSummary-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterSummary.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterSummary.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
      trustTansferAmount: 0,
      loading: true,
      record: {}
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['currentMatter'])),
  methods: {
    calculateTransferAmount: function calculateTransferAmount() {
      this.trustTansferAmount = 0;
      var postedTotal = parseMoney(this.record.postedTotal);
      var trustBalance = parseMoney(this.record.trustBalance);

      if (postedTotal > 0 && trustBalance > 0) {
        if (trustBalance > postedTotal) {
          this.trustTansferAmount = postedTotal;
        } else {
          this.trustTansferAmount = trustBalance;
        }
      } //return formatMoney(this.trustTansferAmount);


      return this.trustTansferAmount;
    },
    trustTransfer: function trustTransfer() {
      console.log('trustTransfer', this.trustTansferAmount);
    },
    pageTitle: function pageTitle() {
      return this.currentMatter.fileref ? this.currentMatter.fileref + ' - ' + this.currentMatter.description : '';
    },
    closeClicked: function closeClicked() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].clearPages();
    },
    refreshPage: function refreshPage() {
      var _this = this;

      this.loading = true;
      axios.post('/matters/get', {
        recordid: this.currentMatter.recordid
      }).then(function (response) {
        _this.record = response.data.data[0];
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/matters/MatterSummary.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/matters/MatterSummary.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterSummary_vue_vue_type_template_id_22c11b22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterSummary.vue?vue&type=template&id=22c11b22& */ "./resources/js/pages/matters/MatterSummary.vue?vue&type=template&id=22c11b22&");
/* harmony import */ var _MatterSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterSummary.vue?vue&type=script&lang=js& */ "./resources/js/pages/matters/MatterSummary.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterSummary_vue_vue_type_template_id_22c11b22___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterSummary_vue_vue_type_template_id_22c11b22___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matters/MatterSummary.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matters/MatterSummary.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/matters/MatterSummary.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterSummary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterSummary.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matters/MatterSummary.vue?vue&type=template&id=22c11b22&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/matters/MatterSummary.vue?vue&type=template&id=22c11b22& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterSummary_vue_vue_type_template_id_22c11b22___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterSummary_vue_vue_type_template_id_22c11b22___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterSummary_vue_vue_type_template_id_22c11b22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterSummary.vue?vue&type=template&id=22c11b22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterSummary.vue?vue&type=template&id=22c11b22&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterSummary.vue?vue&type=template&id=22c11b22&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/MatterSummary.vue?vue&type=template&id=22c11b22& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card h-100 border-0" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "d-flex justify-content-between" }, [
        _c("h3", { staticClass: "page-title" }, [
          _vm._v("Summary: "),
          _c("span", { domProps: { innerHTML: _vm._s(_vm.pageTitle()) } }),
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("page-refresh-button", { on: { refreshPage: _vm.refreshPage } }),
            _vm._v(" "),
            _c("page-close-button", { on: { closeClicked: _vm.closeClicked } }),
          ],
          1
        ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body overflow-auto p-3" },
      [
        _vm.loading
          ? _c("page-loading")
          : _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "fieldset",
                  {
                    staticClass: "mt-1",
                    staticStyle: { padding: "0rem 1rem" },
                  },
                  [
                    _c("legend", [_vm._v("Work in Progress")]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "leaders mb-2" }, [
                      _c("li", [
                        _c("span", [_vm._v("Fees")]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.record.unpostedFees))]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.$root.parseMoney(
                                  _vm.record.unpostedDisbursements
                                ) > 0,
                              expression:
                                "$root.parseMoney(record.unpostedDisbursements) > 0",
                            },
                          ],
                        },
                        [
                          _c("span", [_vm._v("Disbursements")]),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(_vm._s(_vm.record.unpostedDisbursements)),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.$root.parseMoney(_vm.record.unpostedTax) !=
                                0,
                              expression:
                                "$root.parseMoney(record.unpostedTax) != 0",
                            },
                          ],
                        },
                        [
                          _c("span", [
                            _vm._v(_vm._s(_vm.$root.control.salesTaxType)),
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.record.unpostedTax))]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      staticStyle: { "border-top": "1px solid slategrey" },
                    }),
                    _vm._v(" "),
                    _c("ul", { staticClass: "leaders" }, [
                      _c("li", { staticStyle: { "font-weight": "600" } }, [
                        _c("span", [_vm._v("Total")]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.record.unpostedTotal))]),
                      ]),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "fieldset",
                  {
                    staticClass: "mt-1",
                    staticStyle: { padding: "0rem 1rem" },
                  },
                  [
                    _c("legend", [_vm._v("Invoiced")]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "leaders mb-2" }, [
                      _c("li", [
                        _c("span", [_vm._v("Fees")]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.record.postedFees))]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.$root.parseMoney(
                                  _vm.record.postedDisbursements
                                ) > 0,
                              expression:
                                "$root.parseMoney(record.postedDisbursements) > 0",
                            },
                          ],
                        },
                        [
                          _c("span", [_vm._v("Disbursements")]),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(_vm._s(_vm.record.postedDisbursements)),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.$root.parseMoney(_vm.record.postedTax) != 0,
                              expression:
                                "$root.parseMoney(record.postedTax) != 0",
                            },
                          ],
                        },
                        [
                          _c("span", [
                            _vm._v(_vm._s(_vm.$root.control.salesTaxType)),
                          ]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.record.postedTax))]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      staticStyle: { "border-top": "1px solid slategrey" },
                    }),
                    _vm._v(" "),
                    _c("ul", { staticClass: "leaders" }, [
                      _c("li", { staticStyle: { "font-weight": "600" } }, [
                        _c("span", [_vm._v("Total")]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.record.postedTotal))]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.$root.parseMoney(_vm.record.businessCredits) >
                              0,
                            expression:
                              "$root.parseMoney(record.businessCredits) > 0",
                          },
                        ],
                        staticClass: "leaders mb-2",
                      },
                      [
                        _c("li", [
                          _c("span", [_vm._v("Business Receipts")]),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(_vm._s(_vm.record.businessCredits)),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "fieldset",
                  {
                    staticClass: "mt-1",
                    staticStyle: { padding: "0rem 1rem" },
                  },
                  [
                    _c("legend", [_vm._v("Transfer")]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "leaders mb-2" }, [
                      _c("li", [
                        _c("span", [_vm._v("Trust Account")]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.record.trustBalance))]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.$root.parseMoney(_vm.record.postedTotal) >
                                0,
                              expression:
                                "$root.parseMoney(record.postedTotal) > 0",
                            },
                          ],
                        },
                        [
                          _c("span", [_vm._v("Transfer Available")]),
                          _vm._v(" "),
                          _c("span", {
                            domProps: {
                              textContent: _vm._s(
                                _vm.calculateTransferAmount()
                              ),
                            },
                          }),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: parseFloat(_vm.trustTansferAmount) > 0,
                            expression: "parseFloat(trustTansferAmount) > 0",
                          },
                        ],
                        staticClass: "text-center my-3",
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger form-button mr-2",
                            attrs: {
                              type: "button",
                              title: "Transfer funds from Trust to Business",
                            },
                            on: { click: _vm.trustTransfer },
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-refresh fa-lg mr-2",
                            }),
                            _vm._v("Tansfer Funds\n                        "),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);