"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-feeunits-FeeUnitTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.url = "/feeunits/get";
    this.route = "feeunits";
    this.title = 'Units';
    this.plural = 'Units';
    this.singular = 'Unit';
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var targets = this.selectTableFlag ? 1 : 2;
      var tableColumnDefs = [{
        title: "Description",
        name: "fee_units.description",
        data: null,
        targets: targets,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }];

      if (!this.selectTableFlag) {
        tableColumnDefs.push({
          title: "Code",
          name: "fee_units.code",
          width: '20%',
          data: null,
          targets: 1,
          render: function render(data) {
            return htmlDecode(data.code);
          }
        });
      }

      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/feeunits/FeeUnitTable.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/feeunits/FeeUnitTable.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeeUnitTable_vue_vue_type_template_id_babe941e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeeUnitTable.vue?vue&type=template&id=babe941e& */ "./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=template&id=babe941e&");
/* harmony import */ var _FeeUnitTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeeUnitTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeeUnitTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeeUnitTable_vue_vue_type_template_id_babe941e___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeeUnitTable_vue_vue_type_template_id_babe941e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/feeunits/FeeUnitTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeUnitTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeUnitTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeUnitTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=template&id=babe941e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=template&id=babe941e& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeUnitTable_vue_vue_type_template_id_babe941e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeUnitTable_vue_vue_type_template_id_babe941e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeUnitTable_vue_vue_type_template_id_babe941e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeUnitTable.vue?vue&type=template&id=babe941e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=template&id=babe941e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=template&id=babe941e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feeunits/FeeUnitTable.vue?vue&type=template&id=babe941e& ***!
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "d-flex justify-content-between table-functions-row" },
      [
        _c("global-search"),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("table-options"),
            _vm._v(" "),
            _vm.newRecordButton
              ? _c("new-record-button", {
                  attrs: {
                    type: "button",
                    title: "Create a new " + _vm.singular,
                    text: "Add",
                  },
                })
              : _vm._e(),
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