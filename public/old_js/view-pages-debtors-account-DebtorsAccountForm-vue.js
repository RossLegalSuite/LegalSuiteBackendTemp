"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-debtors-account-DebtorsAccountForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var _pages_form_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/form-template */ "./resources/js/pages/form-template.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    resource: {
      type: String,
      "default": 'ColDebit'
    },
    secProc: {
      type: String,
      "default": 'Debtors Account - Update'
    }
  },
  data: function data() {
    return {
      virtual: false,
      editingTypes: [{
        label: 'Debit',
        value: 'D'
      }, {
        label: 'Credit',
        value: 'P'
      }, {
        label: 'Interest',
        value: 'J'
      }, {
        label: 'Collection Commission',
        value: 'W'
      }],
      allTypes: [{
        label: 'Cost',
        value: 'D'
      }, {
        label: 'Payment',
        value: 'P'
      }, {
        label: 'Interest',
        value: 'I'
      }, {
        label: '*Interest',
        value: 'J'
      }, {
        label: 'Collection Commission',
        value: 'X'
      }, {
        label: '*Collection Commission',
        value: 'W'
      }, {
        label: 'Employer\'s Commission',
        value: 'V'
      }],
      debitCategories: [{
        label: 'Cost',
        value: 'C'
      }, {
        label: 'Admin Fee',
        value: 'A'
      }, {
        label: 'Sheriff\'s Fee',
        value: 'S'
      }, {
        label: 'Tracing Fee',
        value: 'T'
      }, {
        label: 'Revenue Stamp',
        value: 'R'
      }, {
        label: 'Postage',
        value: 'P'
      }, {
        label: 'Journal',
        value: 'J'
      }, {
        label: 'Other',
        value: 'O'
      }],
      creditCategories: [{
        label: 'Payment',
        value: 'P'
      }, {
        label: 'Journal',
        value: 'J'
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['currentMatter', 'currentColData'])),
  methods: {
    editRecord: function editRecord(id) {
      this.record = this.table.table.row('#' + id).data();
      console.log("this.record.formatteddate", this.record.formatteddate);

      if (this.record.type == 'I' || this.record.type == 'X' || this.record.type == 'V') {
        this.viewing = this.virtual = true;
      } else {
        this.viewing = this.virtual = false;
      } // Example
      //this.$refs['debtorcollcommpercent'].setReadOnly = false;

      /*  Columns
          amount
          balance
          capitalbalance
          category
          costbalance
          date
          description
          employeename
          formatteddate
          interestbalance
          interestrate
          lastinterestdate
          matterid
          recordid
          timerstamp
          totalamount
          trantype
          type
          typedescription
          vatamount
        */


      this.initFormData();
    },
    initNewRecord: function initNewRecord() {
      this.record = {
        matterid: this.currentMatter.recordid,
        formatteddate: moment().format(root.datePickerOptions.format),
        description: '',
        type: this.record.type ? this.record.type : 'D',
        category: this.record.category ? this.record.category : 'C',
        employeename: root.loggedInEmployeeName,
        employeeid: root.loggedInEmployeeId,
        interestrate: this.currentMatter.interestrate,
        collcommflag: this.currentMatter.debtorcollcommoption == 'N' ? 0 : 1,
        amount: null,
        vatamount: null,
        vatflag: root.control.vatmethod == 'N' ? 0 : 1,
        reference: '',
        documentcode: ''
      };
      this.initFormData();
    },
    initFormData: function initFormData() {
      var _this = this;

      this.displayForm();

      if (!this.viewing) {
        setTimeout(function () {
          return $('#' + _this.id + ' input[name="description"]').focus();
        });
      }
    },
    isDebit: function isDebit() {
      if (this.virtual) {
        return false;
      } else {
        return (this === null || this === void 0 ? void 0 : this.record.type) == 'D' || (this === null || this === void 0 ? void 0 : this.record.type) == 'J' || (this === null || this === void 0 ? void 0 : this.record.type) == 'W' ? true : false;
      }
    },
    isManualInterest: function isManualInterest() {
      return (this === null || this === void 0 ? void 0 : this.record.type) == 'J' ? true : false;
    },
    isPayment: function isPayment() {
      return (this === null || this === void 0 ? void 0 : this.record.type) == 'P' ? true : false;
    },
    isVatable: function isVatable() {
      if (this.virtual) {
        return false;
      } else {
        return (this === null || this === void 0 ? void 0 : this.record.type) == 'D' || (this === null || this === void 0 ? void 0 : this.record.type) == 'W' ? true : false;
      }
    },
    isCommissionable: function isCommissionable() {
      if (this.virtual) {
        return false;
      } else {
        return !this.isDebit() && (this === null || this === void 0 ? void 0 : this.record.category) != 'J' ? true : false;
      }
    },
    showEmployerCommission: function showEmployerCommission() {
      if ((this === null || this === void 0 ? void 0 : this.record.type) == 'P' && this !== null && this !== void 0 && this.record.date && parseInt(this === null || this === void 0 ? void 0 : this.record.date) >= parseInt(this.currentColData.emofirstdate) && this.currentColData.emoamount && this.currentColData.emocommissionpercent) {
        return true;
      } else {
        return false;
      }
    },
    amountChanged: function amountChanged(value) {
      this.record.amount = formatDecimal(value);
      this.calculateVatAmount();
    },
    calculateVatAmount: function calculateVatAmount() {
      var vatFlag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!vatFlag) vatFlag = this.record.vatflag;
      var vatAmount = '0.00';

      if (vatFlag == '1') {
        var vatRate = root.getCurrentVatRate(this.record.date);
        vatAmount = '' + formatDecimal(this.record.amount * vatRate / 100);
      }

      $('#' + this.id + ' input[name="vatamount"]').val(vatAmount);
      this.record.vatamount = vatAmount;
    },
    typeChanged: function typeChanged(option) {
      console.log("Handle type changed", option);

      if (this.record.type == 'D' || this.record.type == 'W') {
        // Cost or Collection Commission
        this.record.category = 'C';
      } else if (this.record.type == 'J') {
        // User inserted Interest
        this.record.category = 'I';
      } else if (this.record.type == 'P') {
        // Payment
        this.record.category = 'P';
      }
    },
    categoryChanged: function categoryChanged(option) {
      this.record.category = option.value;
    },
    okClicked: function okClicked() {
      var _this2 = this;

      this.record.date = this.record.formatteddate;
      axios.post('/coldebit/store', this.record).then(function (response) {
        if (response.data.errors) {
          showError('Error saving Debtor Transaction', response.data.errors);
        } else {
          _this2.errors = {};

          _this2.hide(); //console.log("response.data.data",response.data.data);


          _this2.table.table.ajax.reload(function () {
            _this2.table.table.row('#' + response.data.data[0].recordid).scrollTo();

            setTimeout(function () {
              _this2.table.highlightRow(response.data.data[0].recordid);
            }, 1000); //let tablePosition = this.table.table.row('#' + response.data.data[0].recordid).index();
            // console.log("tablePosition",tablePosition);
            // console.log("response.data.data[0].recordid",response.data.data[0].recordid);
            // this.jumpToRow(response.data.data[0].recordid, tablePosition);
          });
        }
      })["catch"](function (error) {
        showError('Error saving Debtor Transaction', error);
      });
    },
    // jumpToRow(recordId, tablePosition) {
    //     this.table.table.scroller.toPosition( tablePosition, false );
    //     setTimeout(() => { this.table.highlightRow(recordId); },1000);
    // },
    highlightTableRow: function highlightTableRow(id) {
      console.error("'highlightTableRow - TO DO", id);
    },
    pageTitle: function pageTitle() {
      if (this.editing) {
        return this.virtual ? 'Virtual Transaction' : 'Transaction will be Changed';
      } else {
        return 'Transaction will be Added';
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/debtors-account/DebtorsAccountForm.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/debtors-account/DebtorsAccountForm.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DebtorsAccountForm_vue_vue_type_template_id_7f012ee2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DebtorsAccountForm.vue?vue&type=template&id=7f012ee2& */ "./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=template&id=7f012ee2&");
/* harmony import */ var _DebtorsAccountForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DebtorsAccountForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DebtorsAccountForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DebtorsAccountForm_vue_vue_type_template_id_7f012ee2___WEBPACK_IMPORTED_MODULE_0__.render,
  _DebtorsAccountForm_vue_vue_type_template_id_7f012ee2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/debtors-account/DebtorsAccountForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtorsAccountForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DebtorsAccountForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtorsAccountForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=template&id=7f012ee2&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=template&id=7f012ee2& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtorsAccountForm_vue_vue_type_template_id_7f012ee2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtorsAccountForm_vue_vue_type_template_id_7f012ee2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtorsAccountForm_vue_vue_type_template_id_7f012ee2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DebtorsAccountForm.vue?vue&type=template&id=7f012ee2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=template&id=7f012ee2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=template&id=7f012ee2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/debtors-account/DebtorsAccountForm.vue?vue&type=template&id=7f012ee2& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
              ? "modal-content blue-border"
              : "card h-100 border-0",
          },
          [
            _c("div", { class: _vm.modal ? "" : "card-header" }, [
              _c(
                "div",
                {
                  class: _vm.modal
                    ? "modal-header blue-bg"
                    : "d-flex justify-content-between",
                },
                [
                  _c("div", { staticClass: "page-title" }, [
                    _c("h3", { staticClass: "modal-title" }, [
                      _c("span", {
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
            _c(
              "div",
              {
                staticClass: "modal-body overflow-auto p-3",
                style: _vm.modal ? "height:65vh" : "",
              },
              [
                _c(
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-md-4" },
                      [
                        _c("label", [_vm._v("Date")]),
                        _vm._v(" "),
                        _c("date-picker", {
                          ref: "datePickerComponent",
                          attrs: {
                            readOnly: _vm.viewing,
                            config: _vm.$root.datePickerOptions,
                          },
                          model: {
                            value: _vm.record.formatteddate,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "formatteddate", $$v)
                            },
                            expression: "record.formatteddate",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("text-input", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.virtual && _vm.editing,
                          expression: "!virtual && editing",
                        },
                      ],
                      attrs: {
                        popOver:
                          "<h4>Employee</h4><p>The User who inserted the Transaction.</p>",
                        _class: "col-md-4",
                        readOnly: true,
                        name: "employee",
                        label: "Employee",
                      },
                      model: {
                        value: _vm.record.employeename,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "employeename", $$v)
                        },
                        expression: "record.employeename",
                      },
                    }),
                    _vm._v(" "),
                    _c("text-input", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.virtual,
                          expression: "!virtual",
                        },
                      ],
                      attrs: {
                        popOver:
                          "<h4>Document Code</h4><p>Indicates which process this transaction appears on (e.g. LOD).</p>",
                        _class: _vm.editing
                          ? "col-md-4"
                          : "col-md-4 offset-md-4",
                        readOnly: _vm.viewing,
                        name: "documentcode",
                        label: "Document Code",
                      },
                      model: {
                        value: _vm.record.documentcode,
                        callback: function ($$v) {
                          _vm.$set(_vm.record, "documentcode", $$v)
                        },
                        expression: "record.documentcode",
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
                        readOnly: _vm.viewing,
                        name: "description",
                        label: "Description",
                        lookupLibraryFlag: true,
                        lookupLibraryCategory: "Description",
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
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.virtual,
                          expression: "virtual",
                        },
                      ],
                      staticClass: "col-md-5",
                    },
                    [
                      _c("label", [_vm._v("Type")]),
                      _vm._v(" "),
                      _c("pop-over", {
                        attrs: {
                          content:
                            "\r\n                            <h4>Type</h4>\r\n                            <p><strong>Cost</strong> - Increases the Cost Balance (except if it's Category is set to <em>Journal</em> which increases the Capital Balance). </p><p><strong>Type = D</strong></p>\r\n                            <p><strong>Payment</strong> - Reduces the Balances (based on the rules defined in the Settings) and (optionally) attracts Collection Commission (except if it's Category is set to <em>Journal</em> which then simply decreases the Capital Balance) </p><p><strong>Type = P</strong></p>\r\n                            <p><strong>Interest</strong> - Increases the Interest Balance. This is a <strong><em>virtual</em></strong> transaction, i.e. it is calculated and inserted by the program whenever a Payment is made, but interest may also be inserted manually by the User if required </p><p><strong>Type = I (Virual transaction) or Type = J (Manually inserted)</strong></p>\r\n                            <p><strong>Collection Commission</strong> - This is a <strong><em>virtual</em></strong> transaction and is applied when a Payment is made and increases the Cost Balance </p><p><strong>Type = X (Virual transaction) or Type = W (Manually inserted)</strong></p>\r\n                            <p><strong>Employer's Commission</strong> - This is a <strong><em>virtual</em></strong> transaction and is applied when a Payment is made and there is an Emoluments Attachment Order. It is treated as a Payment and therefore decreases the Capital Balance </p><p><strong>Type = V</strong></p>\r\n                            ",
                        },
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          tabindex: -1,
                          options: _vm.allTypes,
                          clearable: false,
                          searchable: false,
                          reduce: function (allTypes) {
                            return allTypes.value
                          },
                        },
                        on: { "option:selected": _vm.typeChanged },
                        model: {
                          value: _vm.record.type,
                          callback: function ($$v) {
                            _vm.$set(_vm.record, "type", $$v)
                          },
                          expression: "record.type",
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
                          value: !_vm.virtual,
                          expression: "!virtual",
                        },
                      ],
                      staticClass: "col-md-5",
                    },
                    [
                      _c("label", [_vm._v("Type")]),
                      _vm._v(" "),
                      _c("pop-over", {
                        attrs: {
                          content:
                            "\r\n                            <h4>Type</h4>\r\n                            <p><strong>Debit</strong>: Increases the Cost Balance (except if it's Category is set to <em>Journal</em> which then <em>increases</em> the Capital Balance)</p>\r\n                            <p><strong>Credit</strong>: Reduces the Capital Balance and attracts Collection Commission (except if it's Category is set to <em>Journal</em>)</p>\r\n                            <p><strong>Interest</strong>: Interest manually inserted by the user - Increases the Interest Balance</p>\r\n                            <p><strong>Collection Commission</strong>: Collection commission manually inserted by the user - Increases the Cost Balance</p>",
                        },
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          tabindex: -1,
                          options: _vm.editingTypes,
                          clearable: false,
                          searchable: false,
                          reduce: function (editingTypes) {
                            return editingTypes.value
                          },
                        },
                        on: { "option:selected": _vm.typeChanged },
                        model: {
                          value: _vm.record.type,
                          callback: function ($$v) {
                            _vm.$set(_vm.record, "type", $$v)
                          },
                          expression: "record.type",
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
                          value:
                            _vm.isDebit() &&
                            !_vm.isManualInterest() &&
                            !_vm.virtual,
                          expression:
                            "isDebit() && !isManualInterest() && !virtual",
                        },
                      ],
                      staticClass: "col-md-5",
                    },
                    [
                      _c("label", [_vm._v("Category")]),
                      _vm._v(" "),
                      _c("pop-over", {
                        attrs: {
                          content:
                            "\r\n                            <h4>Category</h4>\r\n                            <p>A Category is used to classify the Transactions by its type. Some Categories (such a the Journal category) indicate how the Transaction affects the Balances.</p>",
                        },
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          tabindex: -1,
                          options: _vm.debitCategories,
                          clearable: false,
                          searchable: false,
                          reduce: function (debitCategories) {
                            return debitCategories.value
                          },
                        },
                        on: { "option:selected": _vm.categoryChanged },
                        model: {
                          value: _vm.record.category,
                          callback: function ($$v) {
                            _vm.$set(_vm.record, "category", $$v)
                          },
                          expression: "record.category",
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
                          value:
                            !_vm.isDebit() &&
                            !_vm.isManualInterest() &&
                            !_vm.virtual,
                          expression:
                            "!isDebit() && !isManualInterest() && !virtual",
                        },
                      ],
                      staticClass: "col-md-5",
                    },
                    [
                      _c("label", [_vm._v("Category")]),
                      _vm._v(" "),
                      _c("pop-over", {
                        attrs: {
                          content:
                            "\r\n                            <h4>Category</h4>\r\n                            <p>A Category is used to classify the Transactions by its type. Some Categories (such a the Journal category) indicate how the Transaction affects the Balances.</p>",
                        },
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          tabindex: -1,
                          options: _vm.creditCategories,
                          clearable: false,
                          searchable: false,
                          reduce: function (creditCategories) {
                            return creditCategories.value
                          },
                        },
                        on: { "option:selected": _vm.categoryChanged },
                        model: {
                          value: _vm.record.category,
                          callback: function ($$v) {
                            _vm.$set(_vm.record, "category", $$v)
                          },
                          expression: "record.category",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-5" }, [
                    _c(
                      "div",
                      { staticClass: "form-group row" },
                      [
                        _c("text-input", {
                          attrs: {
                            label: "Amount",
                            _class: "col-md-10",
                            type: "number",
                            "input-class": "form-input-number",
                            readOnly: _vm.viewing,
                            name: "amount",
                          },
                          on: { change: _vm.amountChanged },
                          model: {
                            value: _vm.record.amount,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "amount", $$v)
                            },
                            expression: "record.amount",
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
                            value: _vm.isVatable(),
                            expression: "isVatable()",
                          },
                        ],
                        staticClass: "form-group row",
                      },
                      [
                        _c("text-input", {
                          attrs: {
                            label: "Vat Amount",
                            _class: "col-md-10",
                            type: "number",
                            "input-class": "form-input-number",
                            readOnly: true,
                            name: "vatamount",
                          },
                          model: {
                            value: _vm.record.vatamount,
                            callback: function ($$v) {
                              _vm.$set(_vm.record, "vatamount", $$v)
                            },
                            expression: "record.vatamount",
                          },
                        }),
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
                          value:
                            _vm.isVatable() ||
                            _vm.isPayment() ||
                            _vm.isCommissionable() ||
                            _vm.showEmployerCommission(),
                          expression:
                            "isVatable() || isPayment() || isCommissionable() || showEmployerCommission()",
                        },
                      ],
                      staticClass: "col-md-7",
                    },
                    [
                      _c("fieldset", { staticClass: "my-2" }, [
                        _c("legend", [_vm._v("Options")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.isVatable(),
                                expression: "isVatable()",
                              },
                            ],
                            staticClass: "form-group row",
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c(
                                  "b-form-checkbox",
                                  {
                                    attrs: {
                                      id: _vm.id + "-vatflag",
                                      name: "vatflag",
                                      value: "1",
                                      "unchecked-value": "0",
                                      switch: "",
                                      size: "lg",
                                    },
                                    on: { change: _vm.calculateVatAmount },
                                    model: {
                                      value: _vm.record.vatflag,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.record, "vatflag", $$v)
                                      },
                                      expression: "record.vatflag",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                        Charge Vat on this Transaction\r\n                                    "
                                    ),
                                  ]
                                ),
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
                                value: _vm.isCommissionable(),
                                expression: "isCommissionable()",
                              },
                            ],
                            staticClass: "form-group row",
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c(
                                  "b-form-checkbox",
                                  {
                                    attrs: {
                                      id: _vm.id + "-collcommflag",
                                      name: "collcommflag",
                                      value: "1",
                                      "unchecked-value": "0",
                                      switch: "",
                                      size: "lg",
                                    },
                                    model: {
                                      value: _vm.record.collcommflag,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.record,
                                          "collcommflag",
                                          $$v
                                        )
                                      },
                                      expression: "record.collcommflag",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                        Charge Collection Commission\r\n                                    "
                                    ),
                                  ]
                                ),
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
                                value: _vm.showEmployerCommission(),
                                expression: "showEmployerCommission()",
                              },
                            ],
                            staticClass: "form-group row",
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c(
                                  "b-form-checkbox",
                                  {
                                    attrs: {
                                      id: _vm.id + "-overrideemocommflag",
                                      name: "overrideemocommflag",
                                      value: "1",
                                      "unchecked-value": "0",
                                      switch: "",
                                      size: "lg",
                                    },
                                    model: {
                                      value: _vm.record.overrideemocommflag,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.record,
                                          "overrideemocommflag",
                                          $$v
                                        )
                                      },
                                      expression: "record.overrideemocommflag",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                                        Charge Employer's Commission\r\n                                    "
                                    ),
                                  ]
                                ),
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
                                value: _vm.isPayment(),
                                expression: "isPayment()",
                              },
                            ],
                            staticClass: "form-group row",
                          },
                          [
                            _c("text-input", {
                              attrs: {
                                popOver:
                                  "<h4>Reference</h4><p>A reference for this Transaction (e.g. the receipt no).</p>",
                                _class: "col-md-4",
                                readOnly: _vm.viewing,
                                name: "reference",
                                label: "Reference",
                              },
                              model: {
                                value: _vm.record.reference,
                                callback: function ($$v) {
                                  _vm.$set(_vm.record, "reference", $$v)
                                },
                                expression: "record.reference",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]
                  ),
                ]),
              ]
            ),
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
                        value: !_vm.viewing,
                        expression: "!viewing",
                      },
                    ],
                    staticClass: "btn btn-large btn-primary",
                    attrs: { type: "button" },
                    on: { click: _vm.deleteClicked },
                  },
                  [_vm._m(0)]
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
                        value: !_vm.viewing,
                        expression: "!viewing",
                      },
                    ],
                    staticClass: "btn btn-success form-button mr-3",
                    attrs: { type: "button", title: "Save" },
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
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.viewing,
                        expression: "!viewing",
                      },
                    ],
                    staticClass: "btn btn-danger form-button",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      title: "Exit without saving",
                    },
                  },
                  [
                    _c("i", { staticClass: "fa fa-times-circle fa-lg mr-2" }),
                    _vm._v("Cancel"),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.viewing,
                        expression: "viewing",
                      },
                    ],
                    staticClass: "btn btn-danger form-button",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      title: "Exit",
                    },
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
    return _c("span", { attrs: { title: "Delete" } }, [
      _c("i", { staticClass: "fa fa-trash fa-lg mr-2" }),
      _vm._v("Delete"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);