"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-feeitems-FeeItemForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SelectFeeUnit: function SelectFeeUnit() {
      return __webpack_require__.e(/*! import() */ "view-pages-feeunits-SelectFeeUnit-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/feeunits/SelectFeeUnit */ "./resources/js/pages/feeunits/SelectFeeUnit.vue"));
    }
  },
  props: {
    resource: {
      type: String,
      "default": 'Fee Items'
    }
  },
  data: function data() {
    return {
      amount: 0,
      taxAmount: 0,
      totalAmount: 0,
      amountString: '',
      taxAmountString: '',
      totalAmountString: '',
      taxRatePercentage: 0,
      salesTaxDescription: '&nbsp;',
      unitsDescription: '',
      activeTab: 'General',
      tabs: [{
        pageName: "General",
        title: "Details",
        iconClass: '',
        visible: true,
        active: true
      }, {
        pageName: "Limits",
        title: "Limits",
        iconClass: '',
        visible: true,
        active: false
      }, {
        pageName: "Units",
        title: "Units",
        iconClass: '',
        visible: true,
        active: false
      }]
    };
  },
  methods: {
    editRecord: function editRecord(id) {
      var _this = this;

      axios.post('/feeitems/get', {
        recordid: id
      }).then(function (response) {
        _this.record = response.data.data[0];
        _this.unitsDescription = 'per ' + _this.record.unitsDescription;

        _this.initFormData();
      });
    },
    initNewRecord: function initNewRecord(feeCodeId) {
      this.unitsDescription = '';
      this.activeTab = 'General';
      this.tabs[0].active = true;
      this.tabs[1].active = false;
      this.tabs[2].active = false;
      this.record = {
        feeCodeId: feeCodeId,
        description: null,
        sorter: null,
        amount: null,
        taxAmount: null,
        taxRateId: this.record.taxRateId ? this.record.taxRateId : root.control.salesTaxRateId,
        type: this.record.type || 'Fee',
        fromDate: null,
        toDate: null,
        fromAmount: null,
        toAmount: null,
        maximumAmount: null,
        unitsFlag: '0',
        unitsId: null,
        unitsFactor: '1'
      };
      this.initFormData();
    },
    initFormData: function initFormData() {
      var _this2 = this;

      if (!this.$root.feeUnits.length) this.$root.getFeeUnits();
      this.initSelectTaxRate();

      if (this.editing) {
        this.selectFeeUnit.record = {
          id: this.record.unitsId,
          description: htmlDecode(this.record.unitsDescription)
        };
      } else {
        this.selectFeeUnit.record = {};
      }

      this.displayForm();
      setTimeout(function () {
        return $('#' + _this2.id + ' input[name="description"]').focus();
      });
    },
    selectRecord: function selectRecord(id) {
      var _this3 = this;

      axios.post('/feeitems/get', {
        recordid: id
      }).then(function (response) {
        if (typeof _this3.$parent.feeItemSelected === 'function') _this3.$parent.feeItemSelected(response.data.data[0]);
      });
    },
    toggleUnitDescription: function toggleUnitDescription() {
      if (this.record.unitsFlag == '0') {
        this.unitsDescription = '';
      } else {
        this.unitsDescription = this.selectFeeUnit.record.description ? 'per ' + this.selectFeeUnit.record.description : '';
      }
    },
    feeUnitSelected: function feeUnitSelected(id, description) {
      this.record.unitsId = id;
      this.selectFeeUnit.record = {
        id: id,
        description: description
      };
      this.unitsDescription = 'per ' + description;
    },
    okClicked: function okClicked() {
      var _this4 = this;

      this.record.amount = this.amount;
      this.record.taxAmount = this.taxAmount;
      axios.post('/feeitems/store', this.record).then(function (response) {
        if (response.data.errors) {
          if (response.data.errors.general) {
            showError('Error', response.data.errors.general[0]);
          } else {
            _this4.errors = response.data.errors;
          }
        } else {
          _this4.errors = {};

          _this4.highlightTableRow(response.data.id, response.data.sorter);
        }
      })["catch"](function (error) {
        showError('Error saving ' + _this4.table.singular, error);
      });
    },
    toggleFromDatePicker: function toggleFromDatePicker() {
      this.$refs.fromDatePickerComponent.elem.data('DateTimePicker').toggle();
    },
    toggleToDatePicker: function toggleToDatePicker() {
      this.$refs.toDatePickerComponent.elem.data('DateTimePicker').toggle();
    },
    hideFromDatePicker: function hideFromDatePicker() {
      this.$refs.fromDatePickerComponent.elem.data('DateTimePicker').hide();
    },
    hideToDatePicker: function hideToDatePicker() {
      this.$refs.toDatePickerComponent.elem.data('DateTimePicker').hide();
    },
    highlightTableRow: function highlightTableRow(id, sorter) {
      var _this5 = this;

      axios.post('/feeitems/getTablePosition', {
        sorter: sorter
      }).then(function (response) {
        _this5.table.jumpToRow(id, response.data);

        _this5.closeForm();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/feeitems/FeeItemForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/feeitems/FeeItemForm.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeeItemForm_vue_vue_type_template_id_e3195b5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeeItemForm.vue?vue&type=template&id=e3195b5e& */ "./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=template&id=e3195b5e&");
/* harmony import */ var _FeeItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeeItemForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeeItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeeItemForm_vue_vue_type_template_id_e3195b5e___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeeItemForm_vue_vue_type_template_id_e3195b5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/feeitems/FeeItemForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeItemForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeItemForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=template&id=e3195b5e&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=template&id=e3195b5e& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeItemForm_vue_vue_type_template_id_e3195b5e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeItemForm_vue_vue_type_template_id_e3195b5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeItemForm_vue_vue_type_template_id_e3195b5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeItemForm.vue?vue&type=template&id=e3195b5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=template&id=e3195b5e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=template&id=e3195b5e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeitems/FeeItemForm.vue?vue&type=template&id=e3195b5e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
              ? "modal-content indianred-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header indianred"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", [
                      !_vm.editing
                        ? _c("span", [_vm._v("Fee Item will be Added")])
                        : _c("span", [_vm._v("Fee Item will be Changed")]),
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
            _c(
              "div",
              {
                staticClass: "card-body form-tab-body overflow-auto p-3",
                style: _vm.modal ? "min-height:65vh" : "",
              },
              [
                _c("form-tabs", { attrs: { tabs: _vm.tabs } }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.activeTab === "General",
                        expression: "activeTab === 'General'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c("text-input", {
                          attrs: {
                            _class: "col-md-12",
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
                        _c("radio-buttons", {
                          attrs: {
                            popOver:
                              "<h4>Type</h4>\r\n                            <p>A Fee Item can create Fee Notes as well as Disbursements.</p>\r\n                            <p>Indicate here whether a Fee or a Disbursement must be created by this item.</p>",
                            popOverContainer: "#" + _vm.id,
                            _class: "col-md-6",
                            record: _vm.record,
                            column: "type",
                            buttons: [
                              { value: "Fee", text: "Fee" },
                              { value: "Disbursement", text: "Disbursement" },
                            ],
                            name: "type",
                            label: "Type",
                            error: _vm.errors.type,
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.unitsDescription
                      ? _c(
                          "div",
                          {
                            staticClass: "row",
                            staticStyle: { "margin-top": "-0.75rem" },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "col-md-4",
                                staticStyle: { "text-align": "right" },
                              },
                              [
                                _vm._v(
                                  "\r\n                            " +
                                    _vm._s(_vm.unitsDescription) +
                                    "\r\n                        "
                                ),
                              ]
                            ),
                          ]
                        )
                      : _vm._e(),
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
                        value: _vm.activeTab === "Limits",
                        expression: "activeTab === 'Limits'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c("label", [_vm._v("From Date")]),
                          _vm._v(" "),
                          _c("pop-over", {
                            attrs: {
                              container: "#" + _vm.id,
                              content:
                                "\r\n                            <h4>From Date</h4>\r\n                            <p>This Fee Item will be inserted if the Fee Note date is greater than or equal to this date.</p>\r\n                            ",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "input-group" },
                            [
                              _c("date-picker", {
                                ref: "fromDatePickerComponent",
                                attrs: { config: _vm.$root.datePickerOptions },
                                on: { "dp-change": _vm.hideFromDatePicker },
                                model: {
                                  value: _vm.record.fromDate,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "fromDate", $$v)
                                  },
                                  expression: "record.fromDate",
                                },
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group-append" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: {
                                      tabindex: "-1",
                                      type: "button",
                                      title: "Click here to select a date",
                                    },
                                    on: { click: _vm.toggleFromDatePicker },
                                  },
                                  [_c("i", { staticClass: "fa fa-calendar" })]
                                ),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.errors.fromDate
                            ? _c("div", {
                                staticClass: "invalid-feedback",
                                domProps: {
                                  innerHTML: _vm._s(_vm.errors.fromDate[0]),
                                },
                              })
                            : _vm._e(),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c("label", [_vm._v("To Date")]),
                          _vm._v(" "),
                          _c("pop-over", {
                            attrs: {
                              container: "#" + _vm.id,
                              content:
                                "\r\n                            <h4>To Date</h4>\r\n                            <p>This Fee Item will be inserted if the Fee Note date is less than or equal to this date.</p>\r\n                            ",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "input-group" },
                            [
                              _c("date-picker", {
                                ref: "toDatePickerComponent",
                                attrs: { config: _vm.$root.datePickerOptions },
                                on: { "dp-change": _vm.hideToDatePicker },
                                model: {
                                  value: _vm.record.toDate,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.record, "toDate", $$v)
                                  },
                                  expression: "record.toDate",
                                },
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group-append" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: {
                                      tabindex: "-1",
                                      type: "button",
                                      title: "Click here to select a date",
                                    },
                                    on: { click: _vm.toggleToDatePicker },
                                  },
                                  [_c("i", { staticClass: "fa fa-calendar" })]
                                ),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.errors.toDate
                            ? _c("div", {
                                staticClass: "invalid-feedback",
                                domProps: {
                                  innerHTML: _vm._s(_vm.errors.toDate[0]),
                                },
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
                            _class: "col-md-4",
                            popOver:
                              "<h4>From Amount</h4>\r\n                            <p>This Fee Item will be inserted if the <em>quantum</em> of the Matter is greater than or equal to this amount.</p>",
                            popOverContainer: "#" + _vm.id,
                            type: "number",
                            "input-class": "form-input-number",
                            name: "fromAmount",
                            label: "From Amount",
                            error: _vm.errors.fromAmount,
                          },
                          model: {
                            value: _vm.record.fromAmount,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "fromAmount", $$v)
                            },
                            expression: "record.fromAmount",
                          },
                        }),
                        _vm._v(" "),
                        _c("text-input", {
                          attrs: {
                            _class: "col-md-4",
                            popOver:
                              "<h4>To Amount</h4>\r\n                            <p>This Fee Item will be inserted if the <em>quantum</em> of the Matter is less than or equal to this amount.</p>",
                            popOverContainer: "#" + _vm.id,
                            type: "number",
                            "input-class": "form-input-number",
                            name: "toAmount",
                            label: "To Amount",
                            error: _vm.errors.toAmount,
                          },
                          model: {
                            value: _vm.record.toAmount,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "toAmount", $$v)
                            },
                            expression: "record.toAmount",
                          },
                        }),
                      ],
                      1
                    ),
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
                        value: _vm.activeTab === "Units",
                        expression: "activeTab === 'Units'",
                      },
                    ],
                    staticClass: "form-tab-content",
                  },
                  [
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-12" },
                        [
                          _c(
                            "b-form-checkbox",
                            {
                              attrs: {
                                id: _vm.id + "-use-units-flag",
                                name: "useUnitsFlag",
                                value: "1",
                                "unchecked-value": "0",
                              },
                              on: { change: _vm.toggleUnitDescription },
                              model: {
                                value: _vm.record.unitsFlag,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "unitsFlag", $$v)
                                },
                                expression: "record.unitsFlag",
                              },
                            },
                            [
                              _vm._v(
                                "\r\n                                Use units\r\n                            "
                              ),
                            ]
                          ),
                        ],
                        1
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
                            value: _vm.record.unitsFlag == 1,
                            expression: "record.unitsFlag == 1",
                          },
                        ],
                        staticClass: "form-group row",
                      },
                      [
                        _c("select-fee-unit", {
                          ref: _vm.id + "-select-unit",
                          attrs: {
                            _class: "col-md-8",
                            id: _vm.id + "-select-unit",
                            popOver:
                              "<h4>Units</h4>\r\n                            <p>When debiting a Fee (or Disbursement), the amount may be a variable amount, i.e. it depends on the number of units (e.g. pages drafted or minutes spent drafting a document).</p>\r\n                            <p>You can specify the units here and the actual Amount will be calculated by multiplying the <em>per unit</em> Amount by the number of Units.</p>",
                            popOverContainer: "#" + this.id,
                            title: "The units used by this Fee Item",
                            formRef: _vm.id + "-select-unit",
                            error: _vm.errors.unitsId,
                          },
                        }),
                        _vm._v(" "),
                        _c("text-input", {
                          attrs: {
                            _class: "col-md-4",
                            popOver:
                              "<h4>Factor</h4>\r\n                            <p>In some cases, the units may be a multiple of a larger unit. \r\n                            For example, a folio is typically 100 words. If you wanted to debit per folio, but only know how many <em>words</em> were in a document, \r\n                            you could create a Unit called <strong>Folio</strong>, \r\n                            with the <em>singular</em> and <em>plural</em> as <strong>word</strong> and <strong>words</strong>.</p>\r\n                            <p>You would then set the <em>Factor</em> to 100 and the Fee Item will then prompt the user for <em>the number of words</em> \r\n                            and multiply the Amount by the number of words divided by 100 when creating the Fee (or Disbursement).</p>",
                            popOverContainer: "#" + _vm.id,
                            type: "number",
                            "input-class": "form-input-number",
                            name: "unitsFactor",
                            label: "Factor",
                            error: _vm.errors.unitsFactor,
                          },
                          model: {
                            value: _vm.record.unitsFactor,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "unitsFactor", $$v)
                            },
                            expression: "record.unitsFactor",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.record.unitsFlag == 1,
                            expression: "record.unitsFlag == 1",
                          },
                        ],
                        staticClass: "form-group row",
                      },
                      [
                        _c("text-input", {
                          attrs: {
                            _class: "col-md-4",
                            popOver:
                              "<h4>Maximum Amount</h4>\r\n                            <p>The amount of the Fee Item cannot be greater than this amount.</p>",
                            popOverContainer: "#" + _vm.id,
                            type: "number",
                            "input-class": "form-input-number",
                            name: "maximumAmount",
                            label: "Maximum Amount",
                            error: _vm.errors.maximumAmount,
                          },
                          model: {
                            value: _vm.record.maximumAmount,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "maximumAmount", $$v)
                            },
                            expression: "record.maximumAmount",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("form-buttons", {
              attrs: {
                editing: _vm.editing,
                viewing: _vm.viewing,
                readOnly: _vm.record.readOnly ? true : false,
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