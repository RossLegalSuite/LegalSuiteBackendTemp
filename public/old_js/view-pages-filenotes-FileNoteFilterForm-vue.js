"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-filenotes-FileNoteFilterForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SelectStage: function SelectStage() {
      return __webpack_require__.e(/*! import() */ "view-pages-filenotes-SelectStage-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SelectStage */ "./resources/js/pages/filenotes/SelectStage.vue"));
    },
    SelectEmployee: function SelectEmployee() {
      return __webpack_require__.e(/*! import() */ "view-pages-employees-SelectEmployee-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/employees/SelectEmployee */ "./resources/js/pages/employees/SelectEmployee.vue"));
    }
  },
  data: function data() {
    return {
      table: null,
      myRecordsSelected: '0',
      myRecordsFilterColumnName: 'employee.name',
      dateFilterColumnName: 'filenote.date',
      descriptionSelected: '',
      descriptionFilterColumnName: 'filenote.description',
      employeeFilterFlag: false,
      stageFilterFlag: false,
      stageFilterColumnName: 'stage.code',
      employeeFilterColumnName: 'employee.name',
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
  watch: {
    employeeFilterFlag: function employeeFilterFlag(newValue) {
      if (newValue === false) {
        this.selectEmployee.record = {};
      } else {
        var filter = this.getFilter(this.employeeFilterKey);
        if (filter !== null) this.selectEmployee.record = {
          name: filter.settings.value
        };
      }
    },
    stageFilterFlag: function stageFilterFlag(newValue) {
      if (newValue === false) {
        this.selectStage.record = {};
      } else {
        var filter = this.getFilter(this.stageFilterKey);
        if (filter !== null) this.selectStage.record = {
          description: filter.settings.value
        };
      }
    }
  },
  mounted: function mounted() {
    this.$parent.filterForm = this;
  },
  methods: {
    modalOpened: function modalOpened() {
      var _this = this;

      this.setGeneralTab();
      this.$refs.customFilter.initialize(this.table);
      this.primeCommonFilters();
      this.stageFilterKey = this.getFilterName(this.stageFilterColumnName);
      this.stageFilter = this.getFilter(this.stageFilterKey);
      this.stageFilterFlag = this.stageFilter ? true : false;

      if (this.stageFilterFlag) {
        var stage = root.stages.filter(function (record) {
          return record.recordid == _this.stageFilter.settings.value1;
        })[0];
        this.selectStage.stageGroupId = stage.stagegroupid;
        this.selectStage.record = {
          recordid: stage.recordid,
          description: stage.description
        };
      } else {
        this.selectStage.record = {};
      }

      if (!this.selectStage.stageGroupId) {
        this.selectStage.stageGroupId = root.stageGroups[0].recordid;
      }

      this.employeeFilterKey = this.getFilterName(this.employeeFilterColumnName);
      this.employeeFilter = this.getFilter(this.employeeFilterKey);
      this.employeeFilterFlag = this.employeeFilter ? true : false;
      this.selectEmployee.record = this.employeeFilterFlag ? {
        name: this.employeeFilter.settings.value
      } : {};
    },
    stageSelected: function stageSelected(selectedRecord) {
      this.deleteFilter(this.stageFilterKey);
      this.addFilter(this.stageFilterColumnName, this.stageFilterKey, selectedRecord.code, selectedRecord.recordid, 'Equals', null, 'Stage = ' + selectedRecord.code + ' - ' + selectedRecord.description);
      this.stageFilterFlag = true;
      this.table.setUserFilters();
      this.table.table.ajax.reload();
    },
    clearStageFilter: function clearStageFilter() {
      this.deleteFilter(this.stageFilterKey);
      this.stageFilterFlag = false;
      this.reloadTable();
    },
    employeeSelected: function employeeSelected(selectedRecord) {
      this.deleteFilter(this.employeeFilterKey);
      this.addFilter(this.employeeFilterColumnName, this.employeeFilterKey, selectedRecord.name);
      this.employeeFilterFlag = true;
      this.reloadTable();
    },
    clearEmployeeFilter: function clearEmployeeFilter() {
      this.deleteFilter(this.employeeFilterKey);
      this.employeeFilterFlag = false;
      this.reloadTable();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/filenotes/FileNoteFilterForm.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/filenotes/FileNoteFilterForm.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileNoteFilterForm_vue_vue_type_template_id_9b100fc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileNoteFilterForm.vue?vue&type=template&id=9b100fc6& */ "./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=template&id=9b100fc6&");
/* harmony import */ var _FileNoteFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileNoteFilterForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileNoteFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileNoteFilterForm_vue_vue_type_template_id_9b100fc6___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileNoteFilterForm_vue_vue_type_template_id_9b100fc6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/filenotes/FileNoteFilterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileNoteFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileNoteFilterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileNoteFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=template&id=9b100fc6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=template&id=9b100fc6& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileNoteFilterForm_vue_vue_type_template_id_9b100fc6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileNoteFilterForm_vue_vue_type_template_id_9b100fc6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileNoteFilterForm_vue_vue_type_template_id_9b100fc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileNoteFilterForm.vue?vue&type=template&id=9b100fc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=template&id=9b100fc6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=template&id=9b100fc6&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/filenotes/FileNoteFilterForm.vue?vue&type=template&id=9b100fc6& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                              title: "Display File Notes allocated to you",
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
                              "\n                        Display My File Notes\n                        "
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
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("select-stage", {
                            ref: _vm.id + "-select-stage",
                            attrs: {
                              clearIcon: _vm.stageFilterFlag ? true : false,
                              clearIconCallback: "clearStageFilter",
                              id: _vm.id + "-select-stage",
                              formRef: _vm.id + "-select-stage",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("select-employee", {
                            ref: _vm.id + "-select-employee",
                            attrs: {
                              clearIcon: _vm.employeeFilterFlag ? true : false,
                              clearIconCallback: "clearEmployeeFilter",
                              id: _vm.id + "-select-employee",
                              formRef: _vm.id + "-select-employee",
                              label: "Created By",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
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
                        "<h4>Custom SQL Filter</h4>\n                    <p>A valid SQL <em>where clause</em> to filter the File Notes</p>\n                    <p><strong>Examples:</strong></p>\n                    <p>FileNote.Description LIKE '%Document%'</p>\n                    <p>FileNote.Date <= 81234</p>\n                    <p>FileNote.EmployeeID = 12 OR FileNote.EmployeeID = 13</p>",
                      popOverContainer: "#" + _vm.id,
                      lookupLibraryFlag: true,
                      lookupLibraryCategory:
                        "Custom string to filter the File Notes",
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
        _vm._v("Filter File Notes"),
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