"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-system-components-SelectComponent-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SelectComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SelectComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    ComponentsTable: function ComponentsTable() {
      return __webpack_require__.e(/*! import() */ "view-pages-system-components-SystemComponentsTable-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SystemComponentsTable */ "./resources/js/pages/system-components/SystemComponentsTable.vue"));
    }
  },
  mounted: function mounted() {
    this.$parent.selectComponents = this;
  },
  data: function data() {
    return {
      callingComponent: null
    };
  },
  methods: {
    load: function load(callingComponent) {
      this.callingComponent = callingComponent;
      this.open();
      this.table.selectTableFlag = true;
      this.table.actionColumnWidth = 12;
      setTimeout(this.table.loadDataTable);
    },
    selectRecord: function selectRecord(id) {
      this.callingComponent.componentSelected(id);
      this.hide();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/system-components/SelectComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/system-components/SelectComponent.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectComponent_vue_vue_type_template_id_954e9ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectComponent.vue?vue&type=template&id=954e9ce6& */ "./resources/js/pages/system-components/SelectComponent.vue?vue&type=template&id=954e9ce6&");
/* harmony import */ var _SelectComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectComponent.vue?vue&type=script&lang=js& */ "./resources/js/pages/system-components/SelectComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectComponent_vue_vue_type_template_id_954e9ce6___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectComponent_vue_vue_type_template_id_954e9ce6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/system-components/SelectComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/system-components/SelectComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/system-components/SelectComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SelectComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/system-components/SelectComponent.vue?vue&type=template&id=954e9ce6&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/system-components/SelectComponent.vue?vue&type=template&id=954e9ce6& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_template_id_954e9ce6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_template_id_954e9ce6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectComponent_vue_vue_type_template_id_954e9ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectComponent.vue?vue&type=template&id=954e9ce6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SelectComponent.vue?vue&type=template&id=954e9ce6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SelectComponent.vue?vue&type=template&id=954e9ce6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/system-components/SelectComponent.vue?vue&type=template&id=954e9ce6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass:
          "modal-dialog modal-dialog-centered modal-xl modal-dialog-left",
      },
      [
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
                _c("components-table", {
                  ref: _vm.id + "-components-table",
                  attrs: {
                    tableId: _vm.id + "-components-table",
                    formRef: _vm.id + "-components-table",
                    lazyLoadFlag: true,
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer justify-content-between" }, [
              _c("div"),
              _vm._v(" "),
              _c("div", [
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
      ]
    ),
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
        _vm._v("Select a Component"),
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