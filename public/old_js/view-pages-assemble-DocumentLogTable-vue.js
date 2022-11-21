"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-assemble-DocumentLogTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    DocumentLogTableActions: function DocumentLogTableActions() {
      return __webpack_require__.e(/*! import() */ "view-pages-assemble-DocumentLogTableActions-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./DocumentLogTableActions */ "./resources/js/pages/assemble/DocumentLogTableActions.vue"));
    }
  },
  created: function created() {
    this.url = "/correspondence/get";
    this.route = "correspondence";
    this.title = 'Documents';
    this.plural = 'Documents';
    this.singular = 'Document';
  },
  methods: {
    selectRecord: function selectRecord(id) {
      this.highlightRow(id);
      var data = this.table.row('#' + id).data();
      this.$root.previewPdf.title = data.description + ' (' + (data.matter || data.party || data.employeeName || 'General Correspondence') + ')';
      this.$root.previewPdf.document = data;
      this.$root.previewPdf.documentPath = data.url; //Being watched: To load the iFrame

      this.$root.previewPdf.show();
    },
    defineTableColDefs: function defineTableColDefs() {
      var tableColumnDefs = [{
        title: "Created",
        name: "date",
        width: "25%",
        data: null,
        targets: 2,
        render: function render(data) {
          return data.dateFormatted;
        }
      }, {
        title: "Document",
        name: "description",
        width: "30%",
        data: null,
        targets: 3,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "Location",
        searchable: false,
        orderable: false,
        width: "25%",
        data: null,
        targets: 4,
        render: function render(data) {
          return htmlDecode(data.matter || data.party || data.employeeName || 'General Correspondence');
        }
      } // {
      //     title: "File Name",
      //     name: "fileName",
      //     data: null,
      //     visible: false,
      //     targets: 5,
      //     render: function (data) {
      //         return data.fileName;
      //     }
      // },
      // {
      //     title: "Path",
      //     data: null,
      //     visible: false,
      //     searchable: false,
      //     targets: 6,
      //     render: function (data) {
      //         return data.path;
      //     }
      // },
      // {
      //     title: "Url",
      //     data: null,
      //     visible: false,
      //     searchable: false,
      //     targets: 7,
      //     render: function (data) {
      //         return data.url;
      //     }
      // },
      ];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/assemble/DocumentLogTable.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/assemble/DocumentLogTable.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentLogTable_vue_vue_type_template_id_7577cdc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentLogTable.vue?vue&type=template&id=7577cdc9& */ "./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=template&id=7577cdc9&");
/* harmony import */ var _DocumentLogTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentLogTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentLogTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentLogTable_vue_vue_type_template_id_7577cdc9___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocumentLogTable_vue_vue_type_template_id_7577cdc9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/assemble/DocumentLogTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentLogTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentLogTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentLogTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=template&id=7577cdc9&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=template&id=7577cdc9& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentLogTable_vue_vue_type_template_id_7577cdc9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentLogTable_vue_vue_type_template_id_7577cdc9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentLogTable_vue_vue_type_template_id_7577cdc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentLogTable.vue?vue&type=template&id=7577cdc9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=template&id=7577cdc9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=template&id=7577cdc9&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/DocumentLogTable.vue?vue&type=template&id=7577cdc9& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            _c("document-log-table-actions", {
              attrs: { "table-id": _vm.tableId },
            }),
            _vm._v(" "),
            _c("table-options", { attrs: { tableId: _vm.tableId } }),
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