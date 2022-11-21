"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-feenotes-EditFeeItemForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_pages_form_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    resource: {
      type: String,
      "default": 'Fee Items'
    }
  },
  data: function data() {
    return {
      customUnitsAmount: null,
      customAmountPerUnit: null,
      customUnitsFactor: null,
      amount: 0,
      amountString: '',
      unitsDescription: ''
    };
  },
  methods: {
    editRecord: function editRecord(record) {
      var _this = this;

      this.editing = true; // Note: The record is passed by address, not value
      // So we are actually directly manipulating the row in the data table

      this.record = record;
      this.amount = parseMoney(this.record.amount);
      this.amountString = formatMoney(this.amount, false).toString();
      this.customUnitsAmount = this.record.customUnitsAmount || record.unitquantity;
      this.customUnitsFactor = this.record.customUnitsFactor || record.factor;
      this.customAmountPerUnit = this.record.customAmountPerUnit || record.amount;
      this.customAmountPerUnit = formatMoney(this.customAmountPerUnit, false).toString();
      this.setUnitsLabel();
      this.setAmountLabel();
      this.displayForm();
      setTimeout(function () {
        return $('#' + _this.id + ' input[name="description"]').focus();
      });
    },
    setUnitsLabel: function setUnitsLabel() {
      if (this.record.unitsflag == 1) {
        this.$refs.unitsAmountLabel.setLabel = this.record.unitplural.capitalize();
      }
    },
    setAmountLabel: function setAmountLabel() {
      if (this.record.unitsflag == 1) {
        this.$refs.amountLabel.setLabel = this.getAmountLabel();
      }
    },
    getAmountLabel: function getAmountLabel() {
      var returnValue = '';
      if (!this.record.unitsingular) return returnValue;
      if (!this.customUnitsAmount || !this.customAmountPerUnit || !this.customUnitsFactor) return; // In case they change it to zero

      if (this.customUnitsFactor == 0) {
        returnValue = 'Amount per ' + this.record.unitsingular;
      } else {
        if (parseFloat(this.customUnitsFactor) !== 1) {
          returnValue = 'Amount for every ' + this.customUnitsFactor + ' ' + this.record.unitplural;
        } else {
          returnValue = 'Amount per ' + this.record.unitsingular;
        }
      }

      return returnValue;
    },
    employeeSelected: function employeeSelected(selectedRecord) {
      this.record.employeeid = selectedRecord.recordid;
      this.record.employeename = selectedRecord.name;
    },
    setAmount: function setAmount() {
      this.amount = this.amountString ? parseFloat(stripCommas(this.amountString)) : 0;
    },
    unitsIncreased: function unitsIncreased() {
      this.customUnitsAmount = '' + (parseFloat(this.customUnitsAmount) + 1);
      this.recalculateAmount();
    },
    unitsDecreased: function unitsDecreased() {
      this.customUnitsAmount = '' + (parseFloat(this.customUnitsAmount) - 1);

      if (parseFloat(this.customUnitsAmount) < 0) {
        this.customUnitsAmount = '0';
      }

      this.recalculateAmount();
    },
    recalculateAmount: function recalculateAmount() {
      // In case they backspace so input is empty
      if (!this.customUnitsAmount || !this.customAmountPerUnit || !this.customUnitsFactor) return; // In case they change any to zero

      if (this.customUnitsAmount == 0 || this.customAmountPerUnit == 0 || this.customUnitsFactor == 0) {
        this.amountString = '0';
      } else {
        var calculatedAmount = formatDecimal(this.customAmountPerUnit * parseFloat(this.customUnitsAmount) / parseFloat(this.customUnitsFactor));
        this.amountString = '' + calculatedAmount;
        this.setAmount();
      }
    },
    deleteRecord: function deleteRecord(id) {
      this.hide();
      this.$parent.deleteFeeItem(id);
    },
    okClicked: function okClicked() {
      this.record.amount = root.formatDecimal(this.amount).toString();
      this.record.unitquantity = this.customUnitsAmount;
      this.record.customUnitsAmount = this.customUnitsAmount;
      this.record.customAmountPerUnit = root.formatDecimal(this.customAmountPerUnit).toString();
      this.record.customUnitsFactor = this.customUnitsFactor;
      this.$parent.feeItemEdited(this.record);
      this.hide();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/feenotes/EditFeeItemForm.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/feenotes/EditFeeItemForm.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditFeeItemForm_vue_vue_type_template_id_4b04f568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditFeeItemForm.vue?vue&type=template&id=4b04f568& */ "./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=template&id=4b04f568&");
/* harmony import */ var _EditFeeItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditFeeItemForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditFeeItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditFeeItemForm_vue_vue_type_template_id_4b04f568___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditFeeItemForm_vue_vue_type_template_id_4b04f568___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/feenotes/EditFeeItemForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFeeItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditFeeItemForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFeeItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=template&id=4b04f568&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=template&id=4b04f568& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFeeItemForm_vue_vue_type_template_id_4b04f568___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFeeItemForm_vue_vue_type_template_id_4b04f568___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditFeeItemForm_vue_vue_type_template_id_4b04f568___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditFeeItemForm.vue?vue&type=template&id=4b04f568& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=template&id=4b04f568&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=template&id=4b04f568&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/EditFeeItemForm.vue?vue&type=template&id=4b04f568& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
              ? "modal-content steelblue-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header steelblue"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", [_vm._v("Fee Note will be Changed")]),
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
            _c(
              "div",
              {
                staticClass: "card-body overflow-auto p-3",
                style: _vm.modal ? "min-height:65vh" : "",
              },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      _c("label", [_vm._v("Date")]),
                      _vm._v(" "),
                      _c("date-picker", {
                        ref: "datePickerComponent",
                        attrs: { config: _vm.$root.datePickerOptions },
                        model: {
                          value: _vm.record.date,
                          callback: function ($$v) {
                            _vm.$set(_vm.record, "date", $$v)
                          },
                          expression: "record.date",
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors.dateTime
                        ? _c("div", {
                            staticClass: "invalid-feedback",
                            domProps: { innerHTML: _vm._s(_vm.errors.date[0]) },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _c("text-input", {
                      attrs: {
                        _class: "col-md-12",
                        popOver:
                          "<h4>Description</h4><p>Modify the description of the FeeNote.</p>",
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
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _c("text-input", {
                      attrs: {
                        popOver:
                          "<h4>Amount</h4><p>Specify the amount of the FeeNote.</p>",
                        _class: "col-md-4",
                        "input-class": "form-input-number",
                        name: "amount",
                        label: "Amount",
                        error: _vm.errors.amount,
                      },
                      on: { input: _vm.setAmount },
                      model: {
                        value: _vm.amountString,
                        callback: function ($$v) {
                          _vm.amountString = $$v
                        },
                        expression: "amountString",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "fieldset",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.record.unitsflag == 1,
                        expression: "record.unitsflag == 1",
                      },
                    ],
                    staticClass: "mt-1",
                    staticStyle: { background: "lightgrey" },
                  },
                  [
                    _c("legend", [_vm._v("Units")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c("text-input", {
                          ref: "unitsAmountLabel",
                          attrs: {
                            _class: "col-md-3",
                            popOver:
                              "<h4>Units</h4><p>Specify how many units apply to this Fee Note.</p>",
                            label: "Units",
                            type: "number",
                            "input-class": "form-input-number",
                            name: "unitsAmount",
                            error: _vm.errors.customUnitsAmount,
                            numberSpinnerFlag: true,
                            numberSpinnerUpCallback: _vm.unitsIncreased,
                            numberSpinnerDownCallback: _vm.unitsDecreased,
                          },
                          on: { input: _vm.recalculateAmount },
                          model: {
                            value: _vm.customUnitsAmount,
                            callback: function ($$v) {
                              _vm.customUnitsAmount = $$v
                            },
                            expression: "customUnitsAmount",
                          },
                        }),
                        _vm._v(" "),
                        _c("text-input", {
                          attrs: {
                            _class: "col-md-3",
                            popOver:
                              "<h4>Factor</h4>\r\n                            <p>Specify the ratio between the number of units and the cost per unit.</p>\r\n                            <p><strong>Note:</strong> The Fee Note Amount = the number of units <em>multiplied by</em> the cost per unit <em>divided by</em> the factor.</p>\r\n                            ",
                            label: "Factor",
                            type: "number",
                            "input-class": "form-input-number",
                            name: "customUnitsFactor",
                            error: _vm.errors.customUnitsFactor,
                          },
                          on: { input: _vm.recalculateAmount },
                          model: {
                            value: _vm.customUnitsFactor,
                            callback: function ($$v) {
                              _vm.customUnitsFactor = $$v
                            },
                            expression: "customUnitsFactor",
                          },
                        }),
                        _vm._v(" "),
                        _c("text-input", {
                          ref: "amountLabel",
                          attrs: {
                            _class: "col-md-6",
                            popOver:
                              "<h4>Amount Per Unit</h4><p>Specify the cost per unit.</p>",
                            label: "Amount",
                            "input-class": "form-input-number w-50",
                            error: _vm.errors.customAmountPerUnit,
                          },
                          on: { input: _vm.recalculateAmount },
                          model: {
                            value: _vm.customAmountPerUnit,
                            callback: function ($$v) {
                              _vm.customAmountPerUnit = $$v
                            },
                            expression: "customAmountPerUnit",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c("form-buttons", {
              attrs: {
                saveText: "Update",
                editing: true,
                viewing: false,
                record: "Fee Item",
              },
              on: {
                "ok-clicked": _vm.okClicked,
                "cancel-clicked": _vm.closeForm,
                "delete-clicked": _vm.deleteClicked,
              },
            }),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);