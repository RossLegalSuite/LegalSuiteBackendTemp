"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-settings-SetupSystemComponents-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SystemComponentsTable: function SystemComponentsTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-system-components-SystemComponentsTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/system-components/SystemComponentsTable */ "./resources/js/pages/system-components/SystemComponentsTable.vue"));
    },
    SystemComponentsForm: function SystemComponentsForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-system-components-SystemComponentsForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/system-components/SystemComponentsForm */ "./resources/js/pages/system-components/SystemComponentsForm.vue"));
    }
  },
  data: function data() {
    return {
      activePage: 'System Components',
      table: null
    };
  },
  methods: {
    hide: function hide() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].closePage(this.activePage);
    },
    newRecordButtonClicked: function newRecordButtonClicked() {
      this.$refs['settings-system-components-form'].table = this.table;
      this.$refs['settings-system-components-form'].insertClicked();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/SetupSystemComponents.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/settings/SetupSystemComponents.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetupSystemComponents_vue_vue_type_template_id_66bc5a42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetupSystemComponents.vue?vue&type=template&id=66bc5a42& */ "./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=template&id=66bc5a42&");
/* harmony import */ var _SetupSystemComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetupSystemComponents.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SetupSystemComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetupSystemComponents_vue_vue_type_template_id_66bc5a42___WEBPACK_IMPORTED_MODULE_0__.render,
  _SetupSystemComponents_vue_vue_type_template_id_66bc5a42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/SetupSystemComponents.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupSystemComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetupSystemComponents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupSystemComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=template&id=66bc5a42&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=template&id=66bc5a42& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupSystemComponents_vue_vue_type_template_id_66bc5a42___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupSystemComponents_vue_vue_type_template_id_66bc5a42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupSystemComponents_vue_vue_type_template_id_66bc5a42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetupSystemComponents.vue?vue&type=template&id=66bc5a42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=template&id=66bc5a42&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=template&id=66bc5a42&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupSystemComponents.vue?vue&type=template&id=66bc5a42& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card h-100 border-0" },
    [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "div",
          { staticClass: "d-flex justify-content-between" },
          [
            _c("h3", [_vm._v("Components")]),
            _vm._v(" "),
            _c("page-close-button", { on: { closeClicked: _vm.hide } }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body overflow-auto p-3" },
        [
          _c("system-components-table", {
            ref: "settings-system-components-table",
            attrs: {
              "table-id": "settings-system-components-table",
              lazyLoadFlag: true,
              formRef: "settings-system-components-form",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("system-components-form", {
        ref: "settings-system-components-form",
        attrs: {
          id: _vm._uid + "-settings-system-components-form",
          parentTableRef: "settings-system-components-table",
          modal: true,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);