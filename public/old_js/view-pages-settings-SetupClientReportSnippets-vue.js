"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-settings-SetupClientReportSnippets-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ClientReportSnippetsTable: function ClientReportSnippetsTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-snippets-SnippetsTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/snippets/SnippetsTable */ "./resources/js/pages/snippets/SnippetsTable.vue"));
    },
    ClientMatterSnippetsTable: function ClientMatterSnippetsTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-snippets-SnippetsTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/snippets/SnippetsTable */ "./resources/js/pages/snippets/SnippetsTable.vue"));
    },
    ClientReportSnippetsForm: function ClientReportSnippetsForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-snippets-SnippetsForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/snippets/SnippetsForm */ "./resources/js/pages/snippets/SnippetsForm.vue"));
    },
    ClientMatterSnippetsForm: function ClientMatterSnippetsForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-snippets-SnippetsForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/snippets/SnippetsForm */ "./resources/js/pages/snippets/SnippetsForm.vue"));
    }
  },
  data: function data() {
    return {
      activePage: 'Snippets',
      table: null,
      activeTab: null,
      tabs: [{
        pageName: "Matters",
        title: "Matter Snippets",
        iconClass: '',
        visible: true,
        active: true
      }, {
        pageName: "Reports",
        title: "Report Snippets",
        iconClass: '',
        visible: true,
        active: false
      }]
    };
  },
  watch: {
    activeTab: function activeTab(newValue) {
      if (newValue === "Matters") {} else if (newValue === "Reports") {}
    }
  },
  methods: {
    hide: function hide() {
      this.$root.$refs['right-hand-tab-container'].$refs['right-hand-tabs'].closePage(this.activePage);
    },
    newRecordButtonClicked: function newRecordButtonClicked(tableComponent) {
      console.log("newRecordButtonClicked tableComponent.tableName", tableComponent.tableName);

      if (tableComponent.tableName == 'lolclientmattersnippet') {
        var thisForm = this.$refs['settings-client-matter-snippets-form'];
        thisForm.table = tableComponent;
        thisForm.snippetTableName = tableComponent.tableName;
        thisForm.insertClicked();
      } else if (tableComponent.tableName == 'lolclientreportsnippet') {
        var _thisForm = this.$refs['settings-client-report-snippets-form'];
        _thisForm.table = tableComponent;
        _thisForm.snippetTableName = tableComponent.tableName;

        _thisForm.insertClicked();
      } // this.$refs['settings-client-report-snippets-form'].table = this.table;
      // this.$refs['settings-client-report-snippets-form'].insertClicked();

    }
  }
});

/***/ }),

/***/ "./resources/js/pages/settings/SetupClientReportSnippets.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/settings/SetupClientReportSnippets.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetupClientReportSnippets_vue_vue_type_template_id_57bb3fa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetupClientReportSnippets.vue?vue&type=template&id=57bb3fa2& */ "./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=template&id=57bb3fa2&");
/* harmony import */ var _SetupClientReportSnippets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetupClientReportSnippets.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SetupClientReportSnippets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SetupClientReportSnippets_vue_vue_type_template_id_57bb3fa2___WEBPACK_IMPORTED_MODULE_0__.render,
  _SetupClientReportSnippets_vue_vue_type_template_id_57bb3fa2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/SetupClientReportSnippets.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupClientReportSnippets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetupClientReportSnippets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupClientReportSnippets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=template&id=57bb3fa2&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=template&id=57bb3fa2& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupClientReportSnippets_vue_vue_type_template_id_57bb3fa2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupClientReportSnippets_vue_vue_type_template_id_57bb3fa2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupClientReportSnippets_vue_vue_type_template_id_57bb3fa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SetupClientReportSnippets.vue?vue&type=template&id=57bb3fa2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=template&id=57bb3fa2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=template&id=57bb3fa2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SetupClientReportSnippets.vue?vue&type=template&id=57bb3fa2& ***!
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
  return _c(
    "div",
    { staticClass: "card h-100 border-0" },
    [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "div",
          { staticClass: "d-flex justify-content-between" },
          [
            _c("h3", [_vm._v("Snippets")]),
            _vm._v(" "),
            _c("page-close-button", { on: { closeClicked: _vm.hide } }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body form-tab-body overflow-auto p-3" },
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
                  value: _vm.activeTab === "Matters",
                  expression: "activeTab === 'Matters'",
                },
              ],
              staticClass: "form-tab-content",
            },
            [
              _c("client-matter-snippets-table", {
                ref: "settings-client-matter-snippets-table",
                attrs: {
                  "table-id": "settings-client-matter-snippets-table",
                  lazyLoadFlag: true,
                  formRef: "settings-client-matter-snippets-form",
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
                  value: _vm.activeTab === "Reports",
                  expression: "activeTab === 'Reports'",
                },
              ],
              staticClass: "form-tab-content",
            },
            [
              _c("client-report-snippets-table", {
                ref: "settings-client-report-snippets-table",
                attrs: {
                  "table-id": "settings-client-report-snippets-table",
                  lazyLoadFlag: true,
                  formRef: "settings-client-report-snippets-form",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("client-matter-snippets-form", {
        ref: "settings-client-matter-snippets-form",
        attrs: {
          id: _vm._uid + "-settings-client-matter-snippets-form",
          parentTableRef: "settings-client-matter-snippets-table",
          modal: true,
        },
      }),
      _vm._v(" "),
      _c("client-report-snippets-form", {
        ref: "settings-client-report-snippets-form",
        attrs: {
          id: _vm._uid + "-settings-client-report-snippets-form",
          parentTableRef: "settings-client-report-snippets-table",
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