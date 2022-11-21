"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-feenotes-FeeNoteFilterForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/modals/modal-template */ "./resources/js/components/modals/modal-template.js");
/* harmony import */ var _components_filters_filter_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/filters/filter-methods */ "./resources/js/components/filters/filter-methods.js");
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
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_filters_filter_methods__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      table: null,
      myRecordsSelected: '0',
      myRecordsFilterColumnName: 'employee.name',
      dateFilterColumnName: 'feenote.date',
      descriptionSelected: '',
      descriptionFilterColumnName: 'feenote.description',
      amountFilterColumnName: 'feenote.amount',
      statusRadioButtonRecord: {
        value: null
      },
      statusFilterColumnName: 'feenote.postedflag',
      statusArray: [{
        text: 'Posted',
        value: '1'
      }, {
        text: 'Unposted',
        value: '0'
      }],
      activeTab: 'General',
      tabs: [{
        pageName: "General",
        title: "General",
        iconClass: '',
        visible: true,
        active: true
      }]
    };
  },
  mounted: function mounted() {
    this.$parent.filterForm = this;
  },
  methods: {
    modalOpened: function modalOpened() {
      this.setGeneralTab();
      this.$refs.customFilter.initialize(this.table);
      this.primeCommonFilters();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/feenotes/FeeNoteFilterForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/feenotes/FeeNoteFilterForm.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FeeNoteFilterForm_vue_vue_type_template_id_075ec109___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeeNoteFilterForm.vue?vue&type=template&id=075ec109& */ "./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=template&id=075ec109&");
/* harmony import */ var _FeeNoteFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeeNoteFilterForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeeNoteFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeeNoteFilterForm_vue_vue_type_template_id_075ec109___WEBPACK_IMPORTED_MODULE_0__.render,
  _FeeNoteFilterForm_vue_vue_type_template_id_075ec109___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/feenotes/FeeNoteFilterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNoteFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeNoteFilterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNoteFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=template&id=075ec109&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=template&id=075ec109& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNoteFilterForm_vue_vue_type_template_id_075ec109___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNoteFilterForm_vue_vue_type_template_id_075ec109___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeeNoteFilterForm_vue_vue_type_template_id_075ec109___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FeeNoteFilterForm.vue?vue&type=template&id=075ec109& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=template&id=075ec109&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=template&id=075ec109&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/feenotes/FeeNoteFilterForm.vue?vue&type=template&id=075ec109& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "modal-dialog modal-dialog-centered modal-lg" }, [
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
              staticClass: "card-body form-tab-body overflow-auto p-3",
              staticStyle: { height: "55vh" },
            },
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
                      value: _vm.activeTab === "General",
                      expression: "activeTab === 'General'",
                    },
                  ],
                  staticClass: "form-tab-content",
                },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-12" },
                      [
                        _c(
                          "b-form-checkbox",
                          {
                            staticClass: "mt-1 mb-1",
                            attrs: {
                              title: "Display Fee Notes allocated to you",
                              value: "1",
                              "unchecked-value": "0",
                            },
                            on: { change: _vm.myRecordsChanged },
                            model: {
                              value: _vm.myRecordsSelected,
                              callback: function ($$v) {
                                _vm.myRecordsSelected = $$v
                              },
                              expression: "myRecordsSelected",
                            },
                          },
                          [
                            _vm._v(
                              "\n                        Display My Fee Notes\n                        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("select-date-filter", {
                    ref: _vm.id + "-date-filter",
                    attrs: { id: _vm.id + "-date-filter" },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group row" },
                    [
                      _c("text-input", {
                        ref: _vm.id + "-description-filter",
                        attrs: {
                          popOver:
                            "<h4>Description</h4><p>Enter a description or part of a description and press TAB to filter the records.</p>",
                          label: "Description",
                          clearIconCallback: "descriptionCleared",
                        },
                        on: { change: _vm.setDescription },
                        model: {
                          value: _vm.descriptionSelected,
                          callback: function ($$v) {
                            _vm.descriptionSelected = $$v
                          },
                          expression: "descriptionSelected",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group row" },
                    [
                      _c("radio-buttons", {
                        ref: "status-radio-button",
                        attrs: {
                          label: "Status",
                          record: _vm.statusRadioButtonRecord,
                          column: "value",
                          name: "value",
                          buttons: _vm.statusArray,
                        },
                        on: { change: _vm.statusRadioButtonChanged },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("amount-filter", {
                    ref: _vm.id + "-amount-filter",
                    attrs: { id: _vm.id + "-amount-filter" },
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
                      value: _vm.activeTab === "Custom",
                      expression: "activeTab === 'Custom'",
                    },
                  ],
                  staticClass: "form-tab-content",
                },
                [
                  _c("custom-filter", {
                    ref: "customFilter",
                    attrs: {
                      popOver:
                        "<h4>Custom SQL Filter</h4>\n                    <p>A valid SQL <em>where clause</em> to filter the Fee Notes</p>\n                    <p><strong>Examples:</strong></p>\n                    <p>FeeNote.VatRate = 'E' AND FeeNote.Description LIKE '%Stamp%'</p>\n                    <p>FeeNote.Date <= 81234</p>\n                    <p>FeeNote.EmployeeID = 12 OR FeeNote.EmployeeID = 13</p>",
                      popOverContainer: "#" + _vm.id,
                      lookupLibraryFlag: true,
                      lookupLibraryCategory:
                        "Custom string to filter the Fee Notes",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer justify-content-between" }, [
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary form-button mr-2",
                  attrs: {
                    type: "button",
                    title: "Advanced Filtering options",
                  },
                  on: { click: _vm.loadAdvancedFilters },
                },
                [
                  _c("i", { staticClass: "fa fa-cog fa-lg mr-2" }),
                  _vm._v("Advanced"),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger form-button",
                  attrs: { type: "button", title: "Close this screen" },
                  on: { click: _vm.hide },
                },
                [
                  _c("i", { staticClass: "fa fa-times-circle fa-lg mr-2" }),
                  _vm._v("Close"),
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
      _c("h3", { staticClass: "modal-title" }, [
        _c("i", { staticClass: "fa fa-filter mr-2" }),
        _vm._v("Filter Fee Notes"),
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