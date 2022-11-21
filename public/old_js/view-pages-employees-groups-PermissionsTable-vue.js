"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-employees-groups-PermissionsTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    this.url = "/permissions/get";
    this.route = "permissions";
    this.title = 'Permissions';
    this.plural = 'Permissions';
    this.singular = 'Permission';
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var _this = this;

      var tableColumnDefs = [{
        title: "Resource",
        name: "resources.description",
        data: null,
        width: '40%',
        targets: 0,
        render: function render(data) {
          return data.resourceDescription;
        }
      }, {
        searchable: false,
        orderable: false,
        title: "View",
        name: "permissions.viewFlag",
        "class": "text-center",
        data: null,
        width: '15%',
        targets: 1,
        render: function render(data) {
          var checked = data.viewFlag ? 'checked' : '';
          return '<input ' + checked + ' id="' + _this.tableId + '-view-flag-' + data.id + '" data-id="' + data.id + '" type="checkbox" class="' + _this.tableId + '-view-flag">';
        }
      }, {
        searchable: false,
        orderable: false,
        title: "Insert",
        name: "permissions.insertFlag",
        "class": "text-center",
        data: null,
        width: '15%',
        targets: 2,
        render: function render(data) {
          var checked = data.insertFlag ? 'checked' : '';
          return '<input ' + checked + ' id="' + _this.tableId + '-insert-flag-' + data.id + '" data-id="' + data.id + '" type="checkbox" class="' + _this.tableId + '-insert-flag">';
        }
      }, {
        searchable: false,
        orderable: false,
        title: "Change",
        name: "permissions.changeFlag",
        "class": "text-center",
        data: null,
        width: '15%',
        targets: 3,
        render: function render(data) {
          var checked = data.changeFlag ? 'checked' : '';
          return '<input ' + checked + ' id="' + _this.tableId + '-change-flag-' + data.id + '" data-id="' + data.id + '" type="checkbox" class="' + _this.tableId + '-change-flag">';
        }
      }, {
        searchable: false,
        orderable: false,
        title: "Delete",
        name: "permissions.deleteFlag",
        "class": "text-center",
        data: null,
        width: '15%',
        targets: 4,
        render: function render(data) {
          var checked = data.deleteFlag ? 'checked' : '';
          return '<input ' + checked + ' id="' + _this.tableId + '-delete-flag-' + data.id + '" data-id="' + data.id + '" type="checkbox" class="' + _this.tableId + '-delete-flag">';
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/employees/groups/PermissionsTable.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/employees/groups/PermissionsTable.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PermissionsTable_vue_vue_type_template_id_6d20aa82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionsTable.vue?vue&type=template&id=6d20aa82& */ "./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=template&id=6d20aa82&");
/* harmony import */ var _PermissionsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionsTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermissionsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermissionsTable_vue_vue_type_template_id_6d20aa82___WEBPACK_IMPORTED_MODULE_0__.render,
  _PermissionsTable_vue_vue_type_template_id_6d20aa82___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/employees/groups/PermissionsTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermissionsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=template&id=6d20aa82&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=template&id=6d20aa82& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionsTable_vue_vue_type_template_id_6d20aa82___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionsTable_vue_vue_type_template_id_6d20aa82___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionsTable_vue_vue_type_template_id_6d20aa82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermissionsTable.vue?vue&type=template&id=6d20aa82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=template&id=6d20aa82&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=template&id=6d20aa82&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/groups/PermissionsTable.vue?vue&type=template&id=6d20aa82& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      [_c("global-search"), _vm._v(" "), _c("div")],
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