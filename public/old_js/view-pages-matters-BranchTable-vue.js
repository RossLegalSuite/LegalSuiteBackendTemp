"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matters-BranchTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/BranchTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/BranchTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.url = "/branch/get";
    this.route = "branches";
    this.title = 'Branches';
    this.plural = 'Branches';
    this.singular = 'Branch';
    this.select = ['branch.recordid', 'branch.description'];
    this.tableName = 'branch';
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var tableColumnDefs = [{
        title: "Description",
        name: "branch.Description",
        data: null,
        targets: 1,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      } // {
      //     title: "",
      //     visible: false,
      //     filterExclude: true,
      //     searchable: false,
      //     name: "branch.trustbankid",
      //     data: null,
      //     targets: 2,
      //     render: function (data) {
      //         return htmlDecode(data.trustbankid);
      //     }
      // },
      // {
      //     title: "",
      //     visible: false,
      //     filterExclude: true,
      //     searchable: false,
      //     name: "branch.trustbankdescription",
      //     data: null,
      //     targets: 3,
      //     render: function (data) {
      //         return htmlDecode(data.trustbankdescription);
      //     }
      // },
      // {
      //     title: "",
      //     visible: false,
      //     filterExclude: true,
      //     searchable: false,
      //     name: "branch.businessbankid",
      //     data: null,
      //     targets: 4,
      //     render: function (data) {
      //         return htmlDecode(data.businessbankid);
      //     }
      // },
      // {
      //     title: "",
      //     visible: false,
      //     filterExclude: true,
      //     searchable: false,
      //     name: "branch.businessbankdescription",
      //     data: null,
      //     targets: 5,
      //     render: function (data) {
      //         return htmlDecode(data.businessbankdescription);
      //     }
      // },
      ];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/matters/BranchTable.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/matters/BranchTable.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BranchTable_vue_vue_type_template_id_7c837116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BranchTable.vue?vue&type=template&id=7c837116& */ "./resources/js/pages/matters/BranchTable.vue?vue&type=template&id=7c837116&");
/* harmony import */ var _BranchTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BranchTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/matters/BranchTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BranchTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BranchTable_vue_vue_type_template_id_7c837116___WEBPACK_IMPORTED_MODULE_0__.render,
  _BranchTable_vue_vue_type_template_id_7c837116___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matters/BranchTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matters/BranchTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/matters/BranchTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BranchTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/BranchTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matters/BranchTable.vue?vue&type=template&id=7c837116&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/matters/BranchTable.vue?vue&type=template&id=7c837116& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchTable_vue_vue_type_template_id_7c837116___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchTable_vue_vue_type_template_id_7c837116___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BranchTable_vue_vue_type_template_id_7c837116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BranchTable.vue?vue&type=template&id=7c837116& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/BranchTable.vue?vue&type=template&id=7c837116&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/BranchTable.vue?vue&type=template&id=7c837116&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matters/BranchTable.vue?vue&type=template&id=7c837116& ***!
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
  return _c("div", [
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);