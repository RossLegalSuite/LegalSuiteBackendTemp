"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-assemble-AssembleRight-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleRight.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleRight.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DocumentLogTable: function DocumentLogTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-assemble-DocumentLogTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./DocumentLogTable */ "./resources/js/pages/assemble/DocumentLogTable.vue"));
    }
  },
  data: function data() {
    return {
      tableHasData: false,
      showPage: false,
      source: null,
      pageTitle: 'Assembled Documents',
      fileName: null,
      record: {},
      selectedRows: [],
      selectedAllFlag: false,
      selectedAllRows: false
    };
  },
  methods: {
    editClicked: function editClicked(id) {
      var data = this.table.table.row('#' + id).data();
      this.$root.previewPdf.title = data.description;
      this.$root.previewPdf.document = data;
      console.log('this.$root.previewPdf.document', this.$root.previewPdf.document);
      this.$root.previewPdf.documentPath = data.url; //Being watched: To load the iFrame

      console.log('this.$root.previewPdf.documentPath', this.$root.previewPdf.documentPath);
      this.$root.previewPdf.show();
    },
    emptyTable: function emptyTable() {
      var assembleLeft = root.$refs['pages'].$refs["left-page"];
      assembleLeft.emptyDocumentLogTable();
    },
    loadTable: function loadTable(batchId) {
      var _this = this;

      this.selectedAllRows = false;
      this.table.where = {
        column: 'batchId',
        value: batchId
      };
      this.table.actionColumnWidth = 10;
      this.table.tableOptions = {
        drawCallback: function drawCallback(tableId, api) {
          // Select all rows (so use can perform Actions on them without having to Tag them manually)
          if (!_this.selectedAllRows) {
            _this.selectedAllRows = true;

            _this.table.toggleTaggedRows(_this);
          }

          _this.tableHasData = api.data().any();
        }
      };
      this.table.viewTableFlag = true;
      setTimeout(this.table.loadDataTable);
    },
    hide: function hide() {
      this.showPage = false;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/assemble/AssembleRight.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/assemble/AssembleRight.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssembleRight_vue_vue_type_template_id_0c23c7f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssembleRight.vue?vue&type=template&id=0c23c7f6& */ "./resources/js/pages/assemble/AssembleRight.vue?vue&type=template&id=0c23c7f6&");
/* harmony import */ var _AssembleRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssembleRight.vue?vue&type=script&lang=js& */ "./resources/js/pages/assemble/AssembleRight.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssembleRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssembleRight_vue_vue_type_template_id_0c23c7f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssembleRight_vue_vue_type_template_id_0c23c7f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/assemble/AssembleRight.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/assemble/AssembleRight.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/assemble/AssembleRight.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssembleRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssembleRight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleRight.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssembleRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/assemble/AssembleRight.vue?vue&type=template&id=0c23c7f6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/assemble/AssembleRight.vue?vue&type=template&id=0c23c7f6& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssembleRight_vue_vue_type_template_id_0c23c7f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssembleRight_vue_vue_type_template_id_0c23c7f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssembleRight_vue_vue_type_template_id_0c23c7f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssembleRight.vue?vue&type=template&id=0c23c7f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleRight.vue?vue&type=template&id=0c23c7f6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleRight.vue?vue&type=template&id=0c23c7f6&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/assemble/AssembleRight.vue?vue&type=template&id=0c23c7f6& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showPage,
          expression: "showPage",
        },
      ],
      staticClass: "card h-100 border-0",
    },
    [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "div",
          { staticClass: "d-flex justify-content-between" },
          [
            _c("div", { staticClass: "page-title" }, [
              _c("h3", [
                _c("i", { staticClass: "fa mr-2 fa-file-pdf-o" }),
                _vm._v(" "),
                _c("span", { domProps: { innerHTML: _vm._s(_vm.pageTitle) } }),
              ]),
            ]),
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
          _c("document-log-table", {
            ref: "document-log-table",
            attrs: {
              formRef: "right-page",
              tagging: true,
              "table-id": _vm._uid + "-document-log-table",
              "lazy-load-flag": true,
            },
          }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);