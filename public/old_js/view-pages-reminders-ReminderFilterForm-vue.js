"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-reminders-ReminderFilterForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    SelectEmployee: function SelectEmployee() {
      return __webpack_require__.e(/*! import() */ "view-pages-employees-SelectEmployee-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/employees/SelectEmployee */ "./resources/js/pages/employees/SelectEmployee.vue"));
    }
  },
  data: function data() {
    return {
      table: null,
      myRecordsSelected: '0',
      myRecordsFilterColumnName: 'employee.name',
      descriptionSelected: '',
      descriptionFilterColumnName: 'todonote.description',
      createdEmployeeFilterFlag: false,
      createdEmployeeFilterColumnName: 'createdby.name',
      employeeFilterFlag: false,
      employeeFilterColumnName: 'employee.name',
      completedEmployeeFilterFlag: false,
      completedEmployeeFilterColumnName: 'completedby.name',
      createdDateFilterColumnName: 'todonote.createddate',
      targetDateFilterColumnName: 'todonote.date',
      completedDateFilterColumnName: 'todonote.datedone',
      statusRadioButtonRecord: {
        value: null
      },
      statusFilterColumnName: 'completedFlag',
      statusArray: [{
        text: 'Completed',
        value: '1'
      }, {
        text: 'Incomplete',
        value: '0'
      }],
      overdueRadioButtonRecord: {
        value: null
      },
      overdueFilterColumnName: 'overdueFlag',
      overdueArray: [{
        text: 'Overdue',
        value: '1'
      }, {
        text: 'Not Overdue',
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
  watch: {
    createdEmployeeFilterFlag: function createdEmployeeFilterFlag(newValue) {
      if (newValue === false) {
        this.selectCreatedEmployee.record = {};
      } else {
        var filter = this.getFilter(this.createdEmployeeFilterKey);
        if (filter !== null) this.selectCreatedEmployee.record = {
          name: filter.settings.value
        };
      }
    },
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
    completedEmployeeFilterFlag: function completedEmployeeFilterFlag(newValue) {
      if (newValue === false) {
        this.selectCompletedEmployee.record = {};
      } else {
        var filter = this.getFilter(this.completedEmployeeFilterKey);
        if (filter !== null) this.selectCompletedEmployee.record = {
          name: filter.settings.value
        };
      }
    }
  },
  mounted: function mounted() {
    this.$parent.filterForm = this;
  },
  methods: {
    modalOpened: function modalOpened() {
      this.setGeneralTab();
      this.$refs.customFilter.initialize(this.table);
      this.primeCommonFilters(); // Prime the Created Date Filter 

      var createdDateFilterKey = this.getFilterName(this.createdDateFilterColumnName);
      this.$refs[this.id + '-created-date-filter'].primeFilter(createdDateFilterKey, this.createdDateFilterColumnName); // Prime the Target Date Filter 

      var targetDateFilterKey = this.getFilterName(this.targetDateFilterColumnName);
      this.$refs[this.id + '-target-date-filter'].primeFilter(targetDateFilterKey, this.targetDateFilterColumnName); // Prime the Completed Date Filter 

      var completedDateFilterKey = this.getFilterName(this.completedDateFilterColumnName);
      this.$refs[this.id + '-completed-date-filter'].primeFilter(completedDateFilterKey, this.completedDateFilterColumnName);
      this.createdEmployeeFilterKey = this.getFilterName(this.createdEmployeeFilterColumnName);
      this.createdEmployeeFilter = this.getFilter(this.createdEmployeeFilterKey);
      this.createdEmployeeFilterFlag = this.createdEmployeeFilter ? true : false;
      this.selectCreatedEmployee.record = this.createdEmployeeFilterFlag ? {
        name: this.createdEmployeeFilter.settings.value
      } : {};
      this.employeeFilterKey = this.getFilterName(this.employeeFilterColumnName);
      this.employeeFilter = this.getFilter(this.employeeFilterKey);
      this.employeeFilterFlag = this.employeeFilter ? true : false;
      this.selectEmployee.record = this.employeeFilterFlag ? {
        name: this.employeeFilter.settings.value
      } : {};
      this.completedEmployeeFilterKey = this.getFilterName(this.completedEmployeeFilterColumnName);
      this.completedEmployeeFilter = this.getFilter(this.completedEmployeeFilterKey);
      this.completedEmployeeFilterFlag = this.completedEmployeeFilter ? true : false;
      this.selectCompletedEmployee.record = this.completedEmployeeFilterFlag ? {
        name: this.completedEmployeeFilter.settings.value
      } : {};
      this.overdueRadioButtonComponent = this.$refs['overdue-radio-button'];
      this.overdueFilterKey = this.getFilterName(this.overdueFilterColumnName);
      this.overdueFilter = this.getFilter(this.overdueFilterKey);
      this.overdueFilterFlag = this.overdueFilter ? true : false;
      this.overdueRadioButtonComponent.clearIconCallback = 'clearOverdueFilter';
      this.overdueRadioButtonComponent.clearIcon = this.overdueFilterFlag;

      if (this.overdueFilterFlag) {
        this.overdueRadioButtonRecord.value = this.overdueFilter.settings.value;
      } else {
        this.overdueRadioButtonRecord.value = null;
      }
    },
    overdueRadioButtonChanged: function overdueRadioButtonChanged(newValue) {
      this.deleteFilter(this.overdueFilterKey);

      if (newValue !== 'All') {
        this.overdueRadioButtonComponent.clearIcon = true;
        var description = this.overdueArray.filter(function (record) {
          return record.value == newValue;
        })[0].text;
        this.addFilter(this.overdueFilterColumnName, this.overdueFilterKey, newValue, null, 'Equals', null, description);
      }

      this.reloadTable();
    },
    clearOverdueFilter: function clearOverdueFilter() {
      this.overdueRadioButtonComponent.clearIcon = false;
      this.deleteFilter(this.overdueFilterKey);
      this.reloadTable(); //Clear the Type Radio Button radio buttons

      this.overdueRadioButtonRecord.value = null;
    },
    createdEmployeeSelected: function createdEmployeeSelected(selectedRecord) {
      this.deleteFilter(this.createdEmployeeFilterKey);
      this.addFilter(this.createdEmployeeFilterColumnName, this.createdEmployeeFilterKey, selectedRecord.name);
      this.createdEmployeeFilterFlag = true;
      this.reloadTable();
    },
    clearCreatedEmployeeFilter: function clearCreatedEmployeeFilter() {
      this.deleteFilter(this.createdEmployeeFilterKey);
      this.createdEmployeeFilterFlag = false;
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
    },
    completedEmployeeSelected: function completedEmployeeSelected(selectedRecord) {
      this.deleteFilter(this.completedEmployeeFilterKey);
      this.addFilter(this.completedEmployeeFilterColumnName, this.completedEmployeeFilterKey, selectedRecord.name);
      this.completedEmployeeFilterFlag = true;
      this.reloadTable();
    },
    clearCompletedEmployeeFilter: function clearCompletedEmployeeFilter() {
      this.deleteFilter(this.completedEmployeeFilterKey);
      this.completedEmployeeFilterFlag = false;
      this.reloadTable();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/reminders/ReminderFilterForm.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/reminders/ReminderFilterForm.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReminderFilterForm_vue_vue_type_template_id_38f4cb05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReminderFilterForm.vue?vue&type=template&id=38f4cb05& */ "./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=template&id=38f4cb05&");
/* harmony import */ var _ReminderFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReminderFilterForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReminderFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReminderFilterForm_vue_vue_type_template_id_38f4cb05___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReminderFilterForm_vue_vue_type_template_id_38f4cb05___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/reminders/ReminderFilterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReminderFilterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=template&id=38f4cb05&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=template&id=38f4cb05& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderFilterForm_vue_vue_type_template_id_38f4cb05___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderFilterForm_vue_vue_type_template_id_38f4cb05___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReminderFilterForm_vue_vue_type_template_id_38f4cb05___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReminderFilterForm.vue?vue&type=template&id=38f4cb05& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=template&id=38f4cb05&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=template&id=38f4cb05&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/reminders/ReminderFilterForm.vue?vue&type=template&id=38f4cb05& ***!
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
                              title: "Display Reminders allocated to you",
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
                              "\n                        Display My Reminders\n                        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-4" },
                      [
                        _c("select-date-filter", {
                          ref: _vm.id + "-created-date-filter",
                          attrs: {
                            id: _vm.id + "-created-date-filter",
                            label: "Created Date",
                            _class: "col-md-12",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-4" },
                      [
                        _c("select-date-filter", {
                          ref: _vm.id + "-target-date-filter",
                          attrs: {
                            id: _vm.id + "-target-date-filter",
                            label: "Target Date",
                            _class: "col-md-12",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-4" },
                      [
                        _c("select-date-filter", {
                          ref: _vm.id + "-completed-date-filter",
                          attrs: {
                            id: _vm.id + "-completed-date-filter",
                            label: "Completed Date",
                            _class: "col-md-12",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("select-employee", {
                            ref: _vm.id + "-select-created-employee",
                            attrs: {
                              clearIcon: _vm.createdEmployeeFilterFlag
                                ? true
                                : false,
                              clearIconCallback: "clearCreatedEmployeeFilter",
                              id: _vm.id + "-select-created-employee",
                              formRef: _vm.id + "-select-created-employee",
                              label: "Created By",
                              callback: "createdEmployeeSelected",
                              parentName: "selectCreatedEmployee",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
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
                              label: "Assigned To",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("select-employee", {
                            ref: _vm.id + "-select-completed-employee",
                            attrs: {
                              clearIcon: _vm.completedEmployeeFilterFlag
                                ? true
                                : false,
                              clearIconCallback: "clearCompletedEmployeeFilter",
                              id: _vm.id + "-select-completed-employee",
                              formRef: _vm.id + "-select-completed-employee",
                              label: "Completed By",
                              callback: "completedEmployeeSelected",
                              parentName: "selectCompletedEmployee",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("radio-buttons", {
                            ref: "status-radio-button",
                            attrs: {
                              label: "Completed",
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
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("radio-buttons", {
                            ref: "overdue-radio-button",
                            attrs: {
                              label: "Overdue",
                              record: _vm.overdueRadioButtonRecord,
                              column: "value",
                              name: "value",
                              buttons: _vm.overdueArray,
                            },
                            on: { change: _vm.overdueRadioButtonChanged },
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
                ]
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
                        "<h4>Custom SQL Filter</h4>\n                    <p>A valid SQL <em>where clause</em> to filter the Reminders</p>\n                    <p><strong>Examples:</strong></p>\n                    <p>TodoNote.Description LIKE '%Remember%'</p>\n                    <p>TodoNote.Date <= 81234</p>\n                    <p>TodoNote.EmployeeID = 12 OR TodoNote.EmployeeID = 13</p>",
                      popOverContainer: "#" + _vm.id,
                      lookupLibraryFlag: true,
                      lookupLibraryCategory:
                        "Custom string to filter the Reminders",
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
        _vm._v("Filter Reminders"),
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