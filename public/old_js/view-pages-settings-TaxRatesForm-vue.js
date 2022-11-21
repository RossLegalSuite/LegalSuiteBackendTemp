"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-settings-TaxRatesForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRatesForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRatesForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_1__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    TaxRateComponentsTable: function TaxRateComponentsTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-settings-TaxRateComponentsTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./TaxRateComponentsTable */ "./resources/js/pages/settings/TaxRateComponentsTable.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'Tax Rates'
    }
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      axios.post('/taxrates/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];

        _this.show(); // **************************************
        // Load the tax rate components table
        // **************************************


        var taxRateComponentsTable = _this.$refs['tax-rate-components-table'];
        taxRateComponentsTable.parentId = _this.record.id;
        taxRateComponentsTable.tableOptions = {
          scrollY: '30vh',
          drawCallback: function drawCallback() {
            _this.calculateTotalTaxRate();
          }
        };
        taxRateComponentsTable.loadDataTable();
        setTimeout(function () {
          $('#' + _this.id + ' input[name="description"]').focus();
        });
      });
    },
    calculateTotalTaxRate: function calculateTotalTaxRate() {
      console.log('calculateTotalTaxRate');
    },
    initNewRecord: function initNewRecord() {
      var _this2 = this;

      // ??? this.table = this.$parent.$refs["tax-rates-table"];
      this.record = {
        description: null
      };
      this.show();
      setTimeout(function () {
        $('#' + _this2.id + ' input[name="description"]').focus();
      });
    },
    okClicked: function okClicked() {
      var _this3 = this;

      axios.post('/taxrates/store', this.record).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this3.errors = response.data.errors;
          }
        } else {
          _this3.errors = {};

          _this3.highlightTableRow(response.data.id, response.data.fromDate);
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this3.table.singular, error);
      });
    },
    highlightTableRow: function highlightTableRow(id, fromDate) {
      var _this4 = this;

      axios.post('/taxrates/getTablePosition', {
        fromDate: fromDate
      }).then(function (response) {
        _this4.table.jumpToRow(id, response.data);

        _this4.closeForm();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/TaxRatesForm.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/settings/TaxRatesForm.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaxRatesForm_vue_vue_type_template_id_52ded87f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxRatesForm.vue?vue&type=template&id=52ded87f& */ "./resources/js/pages/settings/TaxRatesForm.vue?vue&type=template&id=52ded87f&");
/* harmony import */ var _TaxRatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxRatesForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/TaxRatesForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaxRatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxRatesForm_vue_vue_type_template_id_52ded87f___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaxRatesForm_vue_vue_type_template_id_52ded87f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/TaxRatesForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/TaxRatesForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/settings/TaxRatesForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaxRatesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRatesForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRatesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/TaxRatesForm.vue?vue&type=template&id=52ded87f&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/settings/TaxRatesForm.vue?vue&type=template&id=52ded87f& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRatesForm_vue_vue_type_template_id_52ded87f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRatesForm_vue_vue_type_template_id_52ded87f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRatesForm_vue_vue_type_template_id_52ded87f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaxRatesForm.vue?vue&type=template&id=52ded87f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRatesForm.vue?vue&type=template&id=52ded87f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRatesForm.vue?vue&type=template&id=52ded87f&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRatesForm.vue?vue&type=template&id=52ded87f& ***!
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
  return _c("section", [
    _c("div", { staticClass: "modal", attrs: { id: _vm.id } }, [
      _c(
        "div",
        { staticClass: "modal-dialog modal-dialog-centered modal-lg" },
        [
          _c(
            "div",
            {
              staticClass: "modal-content",
              staticStyle: { "border-color": "steelblue" },
            },
            [
              _c("div", { staticClass: "modal-header steelblue" }, [
                _c("h2", { staticClass: "modal-title page-title" }, [
                  _c("i", { staticClass: "fa fa-calculator mr-2" }),
                  _vm._v(" "),
                  !_vm.editing
                    ? _c("span", [_vm._v("Rate will be Added")])
                    : _vm.viewing
                    ? _c("span", [_vm._v("Rate")])
                    : _c("span", [_vm._v("Rate will be Changed")]),
                ]),
                _vm._v(" "),
                _c("i", {
                  staticClass:
                    "cp top-right fa fa-times-circle fa-2x text-white",
                  attrs: {
                    title: "Close this window",
                    "data-dismiss": "modal",
                  },
                }),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-body",
                  staticStyle: { "min-height": "50vh" },
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("text-input", {
                            attrs: {
                              _class: "col-md-8",
                              name: "description",
                              label: "Description",
                              error: _vm.errors.description,
                            },
                            model: {
                              value: _vm.record.description,
                              callback: function ($$v) {
                                _vm.$set(_vm.record, "description", $$v)
                              },
                              expression: "record.description",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "fieldset",
                        { staticClass: "mt-1" },
                        [
                          _c("legend", [_vm._v("Components")]),
                          _vm._v(" "),
                          _c("tax-rate-components-table", {
                            ref: "tax-rate-components-table",
                            attrs: {
                              "form-ref": "tax-rate-components-form",
                              "table-id": "tax-rate-components-table",
                              "lazy-load-flag": true,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("form-buttons", {
                attrs: {
                  editing: _vm.editing,
                  viewing: _vm.viewing,
                  record: "Tax Rate",
                },
                on: {
                  "ok-clicked": _vm.okClicked,
                  "cancel-clicked": _vm.hide,
                  "delete-clicked": _vm.deleteClicked,
                },
              }),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);