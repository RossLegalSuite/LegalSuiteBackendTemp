"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-parties-PartyTrustAccountsTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  created: function created() {
    this.url = "/matters/get";
    this.route = "matters";
    this.title = 'Trust Accounts';
    this.plural = 'Accounts';
    this.singular = 'Account';
  },
  data: function data() {
    return {
      tableOptions: {
        createdRow: function createdRow(row, data) {
          if (data.backgroundColor !== '#FFF' && data.textColor !== '#000') {
            $(row).css({
              "color": data.textColor,
              "background-color": data.backgroundColor
            }).addClass("custom-colors");
          }
        }
      }
    };
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var tableColumnDefs = [{
        title: "File Ref",
        name: "matters.fileRef",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Matter',
        width: "12%",
        data: null,
        targets: 0,
        render: function render(data) {
          return htmlDecode(data.fileRef);
        }
      }, {
        title: "Description",
        name: "matters.description",
        width: "33%",
        data: null,
        targets: 1,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "Employee",
        name: "owner.name",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Employee',
        visible: false,
        data: null,
        width: "15%",
        targets: 2,
        render: function render(data) {
          return htmlDecode(data.employeeName);
        }
      }, {
        title: "Matter Type",
        name: "matter_types.description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'MatterType',
        visible: false,
        data: null,
        width: "15%",
        targets: 3,
        render: function render(data) {
          return htmlDecode(data.matterTypeDescription);
        }
      }, {
        title: "Document Set",
        name: "document_sets.description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'DocumentSet',
        visible: false,
        data: null,
        width: "15%",
        targets: 4,
        render: function render(data) {
          return htmlDecode(data.documentSetDescription);
        }
      }, {
        title: "Branch",
        name: "branches.description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Branch',
        visible: false,
        data: null,
        width: "15%",
        targets: 5,
        render: function render(data) {
          return htmlDecode(data.branchDescription);
        }
      }, {
        searchable: false,
        title: "Reserved",
        name: "rawReservedTrustBalance",
        calculatedColumn: true,
        // Uses "having" clause instead of "where"
        filterType: 'Number',
        "class": "text-number",
        data: null,
        width: '15%',
        targets: 6,
        render: function render(data) {
          return data.reservedTrustBalance;
        }
      }, {
        searchable: false,
        title: "Unreserved",
        name: "rawUneservedTrustBalance",
        calculatedColumn: true,
        // Uses "having" clause instead of "where"
        filterType: 'Number',
        "class": "text-number",
        data: null,
        width: '15%',
        targets: 7,
        render: function render(data) {
          return data.unreservedTrustBalance;
        }
      }, {
        searchable: false,
        title: "Transfer Available",
        name: "transferAvailable",
        calculatedColumn: true,
        // Uses "having" clause instead of "where"
        filterType: 'Number',
        "class": "text-number",
        data: null,
        width: '20%',
        targets: 8,
        render: function render(data) {
          return data.transferAvailable;
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/parties/PartyTrustAccountsTable.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/parties/PartyTrustAccountsTable.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PartyTrustAccountsTable_vue_vue_type_template_id_69311092___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartyTrustAccountsTable.vue?vue&type=template&id=69311092& */ "./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=template&id=69311092&");
/* harmony import */ var _PartyTrustAccountsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartyTrustAccountsTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PartyTrustAccountsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PartyTrustAccountsTable_vue_vue_type_template_id_69311092___WEBPACK_IMPORTED_MODULE_0__.render,
  _PartyTrustAccountsTable_vue_vue_type_template_id_69311092___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/parties/PartyTrustAccountsTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyTrustAccountsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartyTrustAccountsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyTrustAccountsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=template&id=69311092&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=template&id=69311092& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyTrustAccountsTable_vue_vue_type_template_id_69311092___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyTrustAccountsTable_vue_vue_type_template_id_69311092___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartyTrustAccountsTable_vue_vue_type_template_id_69311092___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PartyTrustAccountsTable.vue?vue&type=template&id=69311092& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=template&id=69311092&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=template&id=69311092&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/parties/PartyTrustAccountsTable.vue?vue&type=template&id=69311092& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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