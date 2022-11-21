"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-settings-SetupClientMatters-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientMatters.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientMatters.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    ClientMattersTable: function ClientMattersTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-client-matter-template-MatterTemplatesTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/client/matter-template/MatterTemplatesTable */ "./resources/js/pages/client/matter-template/MatterTemplatesTable.vue"));
    },
    ClientMattersForm: function ClientMattersForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-client-matter-template-MatterTemplatesForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/client/matter-template/MatterTemplatesForm */ "./resources/js/pages/client/matter-template/MatterTemplatesForm.vue"));
    }
  },
  data: function data() {
    return {
      activePage: 'Client Matters',
      table: null
    };
  },
  methods: {
    hide: function hide() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].closePage(this.activePage);
    },
    newRecordButtonClicked: function newRecordButtonClicked() {
      this.$refs['settings-client-matters-form'].table = this.table;
      this.$refs['settings-client-matters-form'].insertClicked();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/SetupClientMatters.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/settings/SetupClientMatters.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetupClientMatters_vue_vue_type_template_id_5dfa95bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetupClientMatters.vue?vue&type=template&id=5dfa95bd& */ "./resources/js/pages/settings/SetupClientMatters.vue?vue&type=template&id=5dfa95bd&");
/* harmony import */ var _SetupClientMatters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetupClientMatters.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/SetupClientMatters.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SetupClientMatters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetupClientMatters_vue_vue_type_template_id_5dfa95bd___WEBPACK_IMPORTED_MODULE_0__.render,
  _SetupClientMatters_vue_vue_type_template_id_5dfa95bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/SetupClientMatters.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/SetupClientMatters.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/settings/SetupClientMatters.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupClientMatters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetupClientMatters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientMatters.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupClientMatters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/SetupClientMatters.vue?vue&type=template&id=5dfa95bd&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/settings/SetupClientMatters.vue?vue&type=template&id=5dfa95bd& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupClientMatters_vue_vue_type_template_id_5dfa95bd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupClientMatters_vue_vue_type_template_id_5dfa95bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupClientMatters_vue_vue_type_template_id_5dfa95bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetupClientMatters.vue?vue&type=template&id=5dfa95bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientMatters.vue?vue&type=template&id=5dfa95bd&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientMatters.vue?vue&type=template&id=5dfa95bd&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientMatters.vue?vue&type=template&id=5dfa95bd& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            _c("h3", [_vm._v("Matter Views")]),
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
          _c("client-matters-table", {
            ref: "settings-client-matters-table",
            attrs: {
              "table-id": "settings-client-matters-table",
              lazyLoadFlag: true,
              formRef: "settings-client-matters-form",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("client-matters-form", {
        ref: "settings-client-matters-form",
        attrs: {
          id: _vm._uid + "-settings-client-matters-form",
          parentTableRef: "settings-client-matters-table",
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