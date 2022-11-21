"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-documents-DocumentsTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  components: {
    DocumentsTaggedDropDown: function DocumentsTaggedDropDown() {
      return __webpack_require__.e(/*! import() */ "view-pages-documents-DocumentsTaggedDropDown-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./DocumentsTaggedDropDown */ "./resources/js/pages/documents/DocumentsTaggedDropDown.vue"));
    }
  },
  created: function created() {
    this.url = "/doclog/get";
    this.route = 'documents';
    this.tableName = 'doclog';
    this.title = 'Generated Documents';
    this.plural = 'Documents';
    this.singular = 'Document';
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var targets = this.tagTableFlag ? 1 : 0;
      var matterColumnVisible = this.source == 'Matter' ? true : false;
      var partyColumnVisible = this.source == 'Party' ? true : false;
      var tableColumnDefs = [{
        title: "Date",
        name: "date",
        filterColumnName: "doclog.date",
        filterType: 'Date',
        data: null,
        width: "12%",
        targets: targets + 1,
        render: function render(data) {
          return data.formatteddate;
        }
      }, {
        title: "Party",
        name: "party.matterprefix",
        data: null,
        width: '25%',
        visible: partyColumnVisible,
        targets: targets + 2,
        render: function render(data) {
          return data.partymatterprefix + ' - ' + data.partyname;
        }
      }, {
        title: "Matter",
        name: "matter.fileref",
        data: null,
        width: '35%',
        visible: matterColumnVisible,
        targets: targets + 3,
        render: function render(data) {
          return data.matterfileref + ' - ' + data.matterdescription;
        }
      }, {
        title: "Description",
        name: "doclog.description",
        data: null,
        width: "45%",
        targets: targets + 4,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "",
        searchable: false,
        visible: false,
        filterExclude: true,
        name: "doclog.url",
        data: null,
        targets: targets + 5,
        render: function render(data) {
          return data.url;
        }
      }, {
        title: "",
        searchable: false,
        visible: false,
        filterExclude: true,
        name: "doclog.savedname",
        data: null,
        targets: targets + 6,
        render: function render(data) {
          return data.savedname;
        }
      }, {
        title: "",
        searchable: false,
        visible: false,
        filterExclude: true,
        name: "doclog.emailfolder",
        data: null,
        targets: targets + 7,
        render: function render(data) {
          return data.emailfolder;
        }
      }, {
        title: "",
        searchable: false,
        visible: false,
        filterExclude: true,
        name: "doclog.recordid",
        data: null,
        targets: targets + 7,
        render: function render(data) {
          return data.recordid;
        }
      }];
      /*if ( this.source == 'Matter') {
          
          tableColumnDefs.push({
              title: "Matter",
              name: "matter.fileref",
              data: null,
              width: '25%',
              targets: targets + 2,
              render: function (data) {
                  return data.matterfileref + ' - ' + data.matterdescription;
              }
          });
        } else if ( this.source == 'Party') {
          
          tableColumnDefs.push({
              title: "Party",
              name: "party.matterprefix",
              data: null,
              width: '25%',
              targets: targets + 2,
              render: function (data) {
                  return data.partymatterprefix + ' - ' + data.partyname;
              }
          });
      }
        console.log("source",this.source);
      console.log("tableColumnDefs",tableColumnDefs);*/

      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/documents/DocumentsTable.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/documents/DocumentsTable.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentsTable_vue_vue_type_template_id_a2dfb394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentsTable.vue?vue&type=template&id=a2dfb394& */ "./resources/js/pages/documents/DocumentsTable.vue?vue&type=template&id=a2dfb394&");
/* harmony import */ var _DocumentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentsTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/documents/DocumentsTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DocumentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentsTable_vue_vue_type_template_id_a2dfb394___WEBPACK_IMPORTED_MODULE_0__.render,
  _DocumentsTable_vue_vue_type_template_id_a2dfb394___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/documents/DocumentsTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/documents/DocumentsTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/documents/DocumentsTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/documents/DocumentsTable.vue?vue&type=template&id=a2dfb394&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/documents/DocumentsTable.vue?vue&type=template&id=a2dfb394& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsTable_vue_vue_type_template_id_a2dfb394___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsTable_vue_vue_type_template_id_a2dfb394___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentsTable_vue_vue_type_template_id_a2dfb394___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocumentsTable.vue?vue&type=template&id=a2dfb394& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTable.vue?vue&type=template&id=a2dfb394&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTable.vue?vue&type=template&id=a2dfb394&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/documents/DocumentsTable.vue?vue&type=template&id=a2dfb394& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "span",
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
              _c("documents-tagged-drop-down", {
                attrs: { "table-id": _vm.tableId },
              }),
              _vm._v(" "),
              _c("table-options"),
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
      _c("table-footer"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);