"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-extra-screens-ExtraScreenTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    ExtraScreenFilterForm: function ExtraScreenFilterForm() {
      return __webpack_require__.e(/*! import() */ "view-pages-extra-screens-ExtraScreenFilterForm-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ExtraScreenFilterForm */ "./resources/js/pages/extra-screens/ExtraScreenFilterForm.vue"));
    }
  },
  created: function created() {
    this.url = "/extra_screens/get";
    this.route = "extra-screens";
    this.title = 'Extra Screens';
    this.plural = 'Extra Screens';
    this.singular = 'Extra Screen';
  },
  methods: {
    defineTableColDefs: function defineTableColDefs() {
      var targets = this.tagTableFlag ? 1 : 0;
      var tableColumnDefs = [{
        title: "Title",
        name: "extra_screens.title",
        data: null,
        width: "20%",
        targets: targets + 1,
        render: function render(data) {
          return htmlDecode(data.title);
        }
      }, {
        title: "Description",
        name: "extra_screens.description",
        data: null,
        width: "30%",
        targets: targets + 2,
        render: function render(data) {
          return htmlDecode(data.description);
        }
      }, {
        title: "Created By",
        name: "created.name",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Employee',
        data: null,
        visible: false,
        width: "20%",
        targets: targets + 3,
        render: function render(data) {
          return htmlDecode(data.createdEmployeeName);
        }
      }, {
        title: "Location",
        name: "extra_screens.location",
        data: null,
        filterType: 'RadioButton',
        filterControl: 'RadioButton',
        filterOptions: this.$root.extraScreenTypesArray,
        width: "25%",
        targets: targets + 4,
        render: function render(data) {
          return data.locationDescription;
        }
      }, {
        title: "Position",
        name: "extra_screens.position",
        data: null,
        filterType: 'RadioButton',
        filterControl: 'RadioButton',
        filterOptions: [{
          text: 'Tab',
          value: 'Tab'
        }, {
          text: 'Form',
          value: 'Form'
        }],
        width: "15%",
        targets: targets + 5,
        render: function render(data) {
          return data.position;
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/extra-screens/ExtraScreenTable.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/extra-screens/ExtraScreenTable.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExtraScreenTable_vue_vue_type_template_id_4b1db100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtraScreenTable.vue?vue&type=template&id=4b1db100& */ "./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=template&id=4b1db100&");
/* harmony import */ var _ExtraScreenTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtraScreenTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExtraScreenTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExtraScreenTable_vue_vue_type_template_id_4b1db100___WEBPACK_IMPORTED_MODULE_0__.render,
  _ExtraScreenTable_vue_vue_type_template_id_4b1db100___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/extra-screens/ExtraScreenTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraScreenTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExtraScreenTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraScreenTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=template&id=4b1db100&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=template&id=4b1db100& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraScreenTable_vue_vue_type_template_id_4b1db100___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraScreenTable_vue_vue_type_template_id_4b1db100___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtraScreenTable_vue_vue_type_template_id_4b1db100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ExtraScreenTable.vue?vue&type=template&id=4b1db100& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=template&id=4b1db100&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=template&id=4b1db100&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/extra-screens/ExtraScreenTable.vue?vue&type=template&id=4b1db100& ***!
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
      _c("table-footer", { ref: "tableFooter" }),
      _vm._v(" "),
      _c("extra-screen-filter-form", {
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