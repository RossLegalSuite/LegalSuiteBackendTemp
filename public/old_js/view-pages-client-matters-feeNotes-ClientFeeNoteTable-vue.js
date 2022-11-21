"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-matters-feeNotes-ClientFeeNoteTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/tables/table-template */ "./resources/js/components/tables/table-template.js");
//
//
//
//
//
//
//
//
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
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.url = "/feenote/get";
    this.route = "feenote";
    this.tableName = 'feenote';
    this.title = 'Fee Notes';
    this.plural = 'Fee Notes';
    this.singular = 'Fee Note';
    this.viewTableFlag = true;
    this.initialOrder = [[1, "asc"], [2, "asc"]];
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var tableColumnDefs = [{
        title: "Date",
        name: "feenote.date",
        filterColumnName: "feenote.date",
        filterType: 'Date',
        data: null,
        width: "12%",
        targets: 1,
        render: function render(data) {
          return data.formatteddate;
        }
      }, {
        title: "Sorter",
        name: "feenote.sorter",
        searchable: false,
        orderable: false,
        visible: false,
        data: null,
        targets: 2,
        render: function render(data) {
          return data.sorter;
        }
      }, {
        title: "Description",
        name: "feenote.description",
        data: null,
        width: "25%",
        orderable: false,
        targets: 3,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "Amount Excl",
        name: "amountexcl",
        orderable: false,
        searchable: false,
        "class": "text-number",
        data: null,
        visible: true,
        width: "15%",
        targets: 4,
        render: function render(data) {
          return data.amountexcl;
        }
      }, {
        title: "Vat Rate",
        name: "vatrate",
        orderable: false,
        searchable: false,
        visible: false,
        data: null,
        width: "12%",
        targets: 5,
        render: function render(data) {
          return data.vatratedescription;
        }
      }, {
        title: "Vat",
        name: "vatamount",
        orderable: false,
        searchable: false,
        "class": "text-number",
        data: null,
        width: "12%",
        targets: 6,
        render: function render(data) {
          return data.vatamount;
        }
      }, {
        title: "Amount",
        name: "feenote.amount",
        filterType: 'Number',
        "class": "text-number",
        data: null,
        orderable: false,
        width: "15%",
        targets: 7,
        render: function render(data) {
          return data.amount;
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ClientFeeNoteTable_vue_vue_type_template_id_53ff5a7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientFeeNoteTable.vue?vue&type=template&id=53ff5a7d& */ "./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=template&id=53ff5a7d&");
/* harmony import */ var _ClientFeeNoteTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientFeeNoteTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ClientFeeNoteTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientFeeNoteTable_vue_vue_type_template_id_53ff5a7d___WEBPACK_IMPORTED_MODULE_0__.render,
  _ClientFeeNoteTable_vue_vue_type_template_id_53ff5a7d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientFeeNoteTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientFeeNoteTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientFeeNoteTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=template&id=53ff5a7d&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=template&id=53ff5a7d& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientFeeNoteTable_vue_vue_type_template_id_53ff5a7d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientFeeNoteTable_vue_vue_type_template_id_53ff5a7d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientFeeNoteTable_vue_vue_type_template_id_53ff5a7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ClientFeeNoteTable.vue?vue&type=template&id=53ff5a7d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=template&id=53ff5a7d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=template&id=53ff5a7d&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/feeNotes/ClientFeeNoteTable.vue?vue&type=template&id=53ff5a7d& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        { staticClass: "d-flex justify-content-between table-functions-row" },
        [_c("global-search"), _vm._v(" "), _c("div", [_c("table-options")], 1)],
        1
      ),
      _vm._v(" "),
      _c("table", {
        staticClass: "table bordered",
        staticStyle: { width: "100%" },
        attrs: { id: _vm.tableId },
      }),
      _vm._v(" "),
      _c("table-footer"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);