"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-doclog-DoclogTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    DoclogFilterForm: function DoclogFilterForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-doclog-DoclogFilterForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./DoclogFilterForm */ "./resources/js/pages/doclog/DoclogFilterForm.vue"));
    }
  },
  created: function created() {
    this.url = "/doclog/get";
    this.route = 'doclog';
    this.tableName = 'doclog';
    this.title = 'Document Log';
    this.plural = 'Items';
    this.singular = 'Item';
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var targets = this.tagTableFlag ? 1 : 0;
      var parentColumnVisible = this.parentType === 'General' ? true : false;
      var tableColumnDefs = [{
        title: "Date",
        name: "doclog.date",
        filterColumnName: "doclog.date",
        filterType: 'Date',
        searchable: false,
        data: null,
        width: "12%",
        targets: targets + 1,
        render: function render(data) {
          return data.formatteddate;
        }
      }, {
        title: "Time",
        name: "doclog.time",
        filterExclude: true,
        searchable: false,
        orderable: false,
        visible: false,
        data: null,
        width: "12%",
        targets: targets + 2,
        render: function render(data) {
          return data.time;
        }
      }, {
        title: "Created By",
        name: "employee.name",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Employee',
        data: null,
        searchable: false,
        orderable: false,
        visible: false,
        width: "15%",
        targets: targets + 3,
        render: function render(data) {
          return htmlDecode(data.employeename);
        }
      }, {
        title: "Description",
        name: "doclog.description",
        orderable: false,
        data: null,
        width: "25%",
        targets: targets + 4,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "Belongs To",
        name: 'matter.fileref',
        filterExclude: true,
        orderable: false,
        data: null,
        visible: parentColumnVisible,
        width: "15%",
        targets: targets + 5,
        render: function render(data) {
          return htmlDecode(data.parentlink);
        }
      }, {
        title: "Category",
        name: "doclogcategory.description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'DoclogCategory',
        data: null,
        searchable: false,
        orderable: false,
        width: "12%",
        targets: targets + 6,
        render: function render(data) {
          return data.category;
        }
      }, {
        title: "Sub Category",
        name: "doclogsubcategory.description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'DoclogSubCategory',
        data: null,
        visible: false,
        searchable: false,
        orderable: false,
        width: "12%",
        targets: targets + 7,
        render: function render(data) {
          return data.subcategory;
        }
      }, {
        title: "Direction",
        name: "doclog.direction",
        filterType: 'Dropdown',
        filterControl: 'Dropdown',
        filterOptions: [{
          value: '1',
          label: 'Outgoing'
        }, {
          value: '2',
          label: 'Incoming'
        }, {
          value: '0',
          label: 'Not Applicable'
        }],
        data: null,
        visible: false,
        searchable: false,
        orderable: false,
        width: "12%",
        targets: targets + 8,
        render: function render(data) {
          return data.directiondescription;
        }
      }, {
        title: "Saved As",
        name: "doclog.savedname",
        data: null,
        visible: false,
        searchable: false,
        orderable: false,
        width: "15%",
        targets: targets + 9,
        render: function render(data) {
          return data.savedname ? data.savedname : '';
        }
      }, {
        title: "Cloud",
        name: "doclog.url",
        data: null,
        visible: false,
        searchable: false,
        orderable: false,
        width: "15%",
        targets: targets + 10,
        render: function render(data) {
          return data.url ? '<a target="_blank" href="https://docs.google.com/gview?url=' + encodeURIComponent(data.url) + '&embedded=false">' + data.url.substring(data.url.lastIndexOf('/') + 1) + '</a>' : '';
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/doclog/DoclogTable.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/doclog/DoclogTable.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DoclogTable_vue_vue_type_template_id_869f99b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoclogTable.vue?vue&type=template&id=869f99b0& */ "./resources/js/pages/doclog/DoclogTable.vue?vue&type=template&id=869f99b0&");
/* harmony import */ var _DoclogTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoclogTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/doclog/DoclogTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DoclogTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DoclogTable_vue_vue_type_template_id_869f99b0___WEBPACK_IMPORTED_MODULE_0__.render,
  _DoclogTable_vue_vue_type_template_id_869f99b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/doclog/DoclogTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/doclog/DoclogTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/doclog/DoclogTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoclogTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/doclog/DoclogTable.vue?vue&type=template&id=869f99b0&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/doclog/DoclogTable.vue?vue&type=template&id=869f99b0& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogTable_vue_vue_type_template_id_869f99b0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogTable_vue_vue_type_template_id_869f99b0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoclogTable_vue_vue_type_template_id_869f99b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DoclogTable.vue?vue&type=template&id=869f99b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogTable.vue?vue&type=template&id=869f99b0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogTable.vue?vue&type=template&id=869f99b0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/doclog/DoclogTable.vue?vue&type=template&id=869f99b0& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
              _vm.taggedDropDown
                ? _c("tagged-drop-down", { attrs: { "table-id": _vm.tableId } })
                : _vm._e(),
              _vm._v(" "),
              _c("filter-form-button"),
              _vm._v(" "),
              _c("table-options"),
              _vm._v(" "),
              _c("new-record-button", {
                attrs: {
                  type: "button",
                  title: "Create a new " + _vm.singular,
                  text: "New " + _vm.singular,
                },
              }),
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
      _vm._v(" "),
      _c("doclog-filter-form", {
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