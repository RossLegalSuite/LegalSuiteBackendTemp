"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-settings-TaxRateComponentsTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      taxRateId: null
    };
  },
  created: function created() {
    this.url = "/taxratecomponents/get";
    this.route = "taxratecomponents";
    this.title = 'Components';
    this.plural = 'Components';
    this.singular = 'Component';
  },
  methods: {
    editRecord: function editRecord(id) {},
    defineTableColDefs: function defineTableColDefs() {
      var target = 1;
      var tableColumnDefs = [{
        title: "Description",
        name: "tax_components.description",
        data: null,
        targets: target,
        render: function render(data) {
          return htmlDecode(data.component_description);
        }
      }, {
        title: "Rate",
        name: "tax_components.rate",
        "class": "searchable text-right",
        data: null,
        targets: 2,
        render: function render(data) {
          return data.component_rate + '%';
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/TaxRateComponentsTable.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/settings/TaxRateComponentsTable.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaxRateComponentsTable_vue_vue_type_template_id_731c0b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxRateComponentsTable.vue?vue&type=template&id=731c0b40& */ "./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=template&id=731c0b40&");
/* harmony import */ var _TaxRateComponentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxRateComponentsTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaxRateComponentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxRateComponentsTable_vue_vue_type_template_id_731c0b40___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaxRateComponentsTable_vue_vue_type_template_id_731c0b40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/TaxRateComponentsTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRateComponentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaxRateComponentsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRateComponentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=template&id=731c0b40&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=template&id=731c0b40& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRateComponentsTable_vue_vue_type_template_id_731c0b40___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRateComponentsTable_vue_vue_type_template_id_731c0b40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxRateComponentsTable_vue_vue_type_template_id_731c0b40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaxRateComponentsTable.vue?vue&type=template&id=731c0b40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=template&id=731c0b40&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=template&id=731c0b40&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/TaxRateComponentsTable.vue?vue&type=template&id=731c0b40& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "d-flex justify-content-between table-functions-row" },
      [
        _c("global-search"),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("new-record-button", {
              attrs: {
                type: "button",
                title: "Create a new " + _vm.singular,
                text: "New " + _vm.singular,
              },
            }),
          ],
          1
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c("table", {
      staticClass: "table bordered",
      staticStyle: { width: "100%" },
      attrs: { id: _vm.tableId },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);