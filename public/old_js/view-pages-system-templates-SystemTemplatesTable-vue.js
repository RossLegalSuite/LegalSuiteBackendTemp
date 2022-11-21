"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-system-templates-SystemTemplatesTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    SystemTemplatesFilterForm: function SystemTemplatesFilterForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-system-templates-SystemTemplatesFilterForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SystemTemplatesFilterForm */ "./resources/js/pages/system-templates/SystemTemplatesFilterForm.vue"));
    }
  },
  created: function created() {
    this.url = "/lolsystemtemplate/get";
    this.route = "templates";
    this.title = 'Templates';
    this.plural = 'Templates';
    this.singular = 'Template';
    this.tableName = 'lolsystemtemplate';
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var tableColumnDefs = [{
        title: "Title",
        name: "title",
        width: "25%",
        data: null,
        targets: 1,
        render: function render(data) {
          return htmlDecode(data.title);
        }
      }, {
        title: "Description",
        name: "description",
        data: null,
        width: "40%",
        targets: 2,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "Type",
        visible: true,
        searchable: true,
        filterExclude: false,
        name: "type",
        width: "12%",
        data: null,
        targets: 3,
        render: function render(data) {
          return data.type;
        }
      }, {
        title: "Source",
        visible: false,
        searchable: true,
        filterExclude: false,
        name: "source",
        width: "12%",
        data: null,
        targets: 4,
        render: function render(data) {
          return data.source;
        }
      }, {
        title: "Role",
        visible: false,
        searchable: true,
        filterExclude: false,
        name: "roleid",
        width: "12%",
        data: null,
        targets: 5,
        render: function render(data) {
          return data !== null && data !== void 0 && data.roledescription ? data.roledescription : '';
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/system-templates/SystemTemplatesTable.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/system-templates/SystemTemplatesTable.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SystemTemplatesTable_vue_vue_type_template_id_16c7a11f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemTemplatesTable.vue?vue&type=template&id=16c7a11f& */ "./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=template&id=16c7a11f&");
/* harmony import */ var _SystemTemplatesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemTemplatesTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SystemTemplatesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SystemTemplatesTable_vue_vue_type_template_id_16c7a11f___WEBPACK_IMPORTED_MODULE_0__.render,
  _SystemTemplatesTable_vue_vue_type_template_id_16c7a11f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/system-templates/SystemTemplatesTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTemplatesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemTemplatesTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTemplatesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=template&id=16c7a11f&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=template&id=16c7a11f& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTemplatesTable_vue_vue_type_template_id_16c7a11f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTemplatesTable_vue_vue_type_template_id_16c7a11f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SystemTemplatesTable_vue_vue_type_template_id_16c7a11f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SystemTemplatesTable.vue?vue&type=template&id=16c7a11f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=template&id=16c7a11f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=template&id=16c7a11f&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-templates/SystemTemplatesTable.vue?vue&type=template&id=16c7a11f& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
        [
          _c("global-search"),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("filter-form-button"),
              _vm._v(" "),
              _c("table-options"),
              _vm._v(" "),
              _vm.newRecordButton
                ? _c("new-record-button", {
                    attrs: {
                      type: "button",
                      title: "Create a new " + _vm.singular,
                      text: "New " + _vm.singular,
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
      _vm._v(" "),
      _c("table-footer", { ref: "tableFooter" }),
      _vm._v(" "),
      _c("system-templates-filter-form", {
        ref: _vm.tableId + "-filter-form",
        attrs: { id: _vm.tableId + "-filter-form" },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);