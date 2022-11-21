"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-feesheets-SelectFeeSheets-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
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
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    SelectFeeSheetsTable: function SelectFeeSheetsTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-feesheets-SelectFeeSheetsTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SelectFeeSheetsTable */ "./resources/js/pages/feesheets/SelectFeeSheetsTable.vue"));
    }
  },
  props: {
    formRef: String
  },
  data: function data() {
    return {
      table: null,
      preSelectedRows: [],
      selectedRows: [],
      selectedAllFlag: false
    };
  },
  mounted: function mounted() {
    this.$parent.selectFeeSheets = this;
  },
  methods: {
    selectFeeSheets: function selectFeeSheets(feeSheetId, feeSheetCode) {
      this.open();
      this.table.setButtonTitle = 'Select this Fee Sheet';
      this.table.setButtonText = 'Select';
      this.table.setButtonFunction = 'selectRecord'; // Needs work - changed how tagging works (see table-template.js)

      this.preSelectedRows = ['' + feeSheetId];
      this.table.loadDataTable(this.highlightFeeSheet(feeSheetId, feeSheetCode));
    },
    highlightFeeSheet: function highlightFeeSheet(feeSheetId, feeSheetCode) {
      var _this = this;

      axios.post('/feesheets/getTablePosition', {
        code: feeSheetCode
      }).then(function (response) {
        _this.table.jumpToRow(feeSheetId, response.data);
      });
    },
    selectRecord: function selectRecord(id) {
      this.hide();
      this.$parent.feeSheetsSelected([id]);
    },
    selectClicked: function selectClicked() {
      this.hide(); // Return empty array if all are selected

      if (this.selectedAllFlag) {
        //this.table.setUserFilters();
        this.$parent.feeSheetsSelected([], this.table);
      } else {
        this.$parent.feeSheetsSelected(this.selectedRows);
      }

      this.selectedAllFlag = false;
      this.selectedRows = [];
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/feesheets/SelectFeeSheets.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/feesheets/SelectFeeSheets.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectFeeSheets_vue_vue_type_template_id_41888cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectFeeSheets.vue?vue&type=template&id=41888cb0& */ "./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=template&id=41888cb0&");
/* harmony import */ var _SelectFeeSheets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectFeeSheets.vue?vue&type=script&lang=js& */ "./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectFeeSheets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectFeeSheets_vue_vue_type_template_id_41888cb0___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectFeeSheets_vue_vue_type_template_id_41888cb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/feesheets/SelectFeeSheets.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFeeSheets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectFeeSheets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFeeSheets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=template&id=41888cb0&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=template&id=41888cb0& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFeeSheets_vue_vue_type_template_id_41888cb0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFeeSheets_vue_vue_type_template_id_41888cb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFeeSheets_vue_vue_type_template_id_41888cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectFeeSheets.vue?vue&type=template&id=41888cb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=template&id=41888cb0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=template&id=41888cb0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feesheets/SelectFeeSheets.vue?vue&type=template&id=41888cb0& ***!
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
  return _c("div", { staticClass: "modal", attrs: { id: _vm.id } }, [
    _c("div", { staticClass: "modal-dialog modal-dialog-left modal-lg" }, [
      _c(
        "div",
        {
          staticClass: "modal-content",
          staticStyle: { "border-color": "indianred" },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal-body p-3",
              staticStyle: { height: "60vh", "overflow-y": "auto" },
            },
            [
              _c("select-fee-sheets-table", {
                ref: "select-fee-sheet-table",
                attrs: {
                  tableId: _vm.id + "-fee-sheets-table",
                  lazyLoadFlag: true,
                  tagging: true,
                  formRef: _vm.formRef,
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer justify-content-between" }, [
            _c("div", [_c("modal-table-filter-footer")], 1),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.selectedRows.length || _vm.selectedAllFlag,
                      expression: "selectedRows.length || selectedAllFlag",
                    },
                  ],
                  staticClass: "btn btn-success form-button mr-2",
                  attrs: {
                    type: "button",
                    title:
                      "Select " +
                      _vm.selectedRows.length +
                      " tagged Fee Sheet" +
                      (_vm.selectedRows.length > 1 ? "s" : ""),
                  },
                  on: { click: _vm.selectClicked },
                },
                [
                  _c("i", { staticClass: "fa fa-check-circle fa-lg mr-2" }),
                  _vm._v(
                    "\r\n                        Select\r\n                        "
                  ),
                  _c("span", { staticClass: "badge badge-danger ml-2" }, [
                    _vm._v(
                      _vm._s(
                        _vm.selectedAllFlag ? "All" : _vm.selectedRows.length
                      )
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-danger form-button",
                  attrs: { type: "button", title: "Cancel selection" },
                  on: { click: _vm.hide },
                },
                [
                  _c("i", { staticClass: "fa fa-times-circle fa-lg mr-2" }),
                  _vm._v("Cancel"),
                ]
              ),
            ]),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header indianred" }, [
      _c("h2", { staticClass: "modal-title page-title" }, [
        _c("i", { staticClass: "fa fa-server mr-2" }),
        _vm._v("Select Fee Sheet(s)"),
      ]),
      _vm._v(" "),
      _c("i", {
        staticClass: "cp top-right fa fa-times-circle fa-2x text-white",
        attrs: { title: "Close this window", "data-dismiss": "modal" },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);