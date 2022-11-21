"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-client-matters-MatterFilterForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_filters_filter_methods__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    SelectRole: function SelectRole() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectPartyRole-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectPartyRole */ "./resources/js/pages/parties/SelectPartyRole.vue"));
    },
    SelectMatterType: function SelectMatterType() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatterType-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatterType */ "./resources/js/pages/matters/SelectMatterType.vue"));
    },
    SelectDocumentSet: function SelectDocumentSet() {
      return __webpack_require__.e(/*! import() */ "view-pages-document-sets-SelectDocumentSet-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/document-sets/SelectDocumentSet */ "./resources/js/pages/document-sets/SelectDocumentSet.vue"));
    },
    SelectBranch: function SelectBranch() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectBranch-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectBranch */ "./resources/js/pages/matters/SelectBranch.vue"));
    }
  },
  mounted: function mounted() {
    this.$parent.filterForm = this;
  },
  data: function data() {
    return {
      table: null,
      roleFilterFlag: false,
      roleFilterColumnName: 'role.description',
      dateFilterColumnName: 'Matter.DateInstructed',
      branchFilterFlag: false,
      branchFilterColumnName: 'Branch.Description',
      matterTypeFilterFlag: false,
      matterTypeFilterColumnName: 'MatType.Description',
      documentSetFilterFlag: false,
      documentSetFilterColumnName: 'DocGen.Description',
      conveyancingStatus: null,
      conveyancingStatusFilterColumnName: 'Matter.ConveyancingStatusFlag',
      conveyancingStatusOptions: [{
        value: '1',
        label: 'New Instruction'
      }, {
        value: '2',
        label: 'Amended Instruction'
      }, {
        value: '3',
        label: 'Lodged'
      }, {
        value: '4',
        label: 'Registered'
      }, {
        value: '5',
        label: 'NTU Instruction'
      }, {
        value: '6',
        label: 'Withdrawn'
      }, {
        value: '7',
        label: 'Cancelled'
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
    roleFilterFlag: function roleFilterFlag(newValue) {
      if (newValue === false) {
        this.selectPartyRole.record = {};
      } else {
        var filter = this.getFilter(this.roleFilterKey);
        if (filter !== null) this.selectPartyRole.record = {
          description: filter.settings.value
        };
      }
    },
    branchFilterFlag: function branchFilterFlag(newValue) {
      if (newValue === false) {
        this.selectBranch.record = {};
      } else {
        var filter = this.getFilter(this.branchFilterKey);
        if (filter !== null) this.selectBranch.record = {
          description: filter.settings.value
        };
      }
    },
    matterTypeFilterFlag: function matterTypeFilterFlag(newValue) {
      if (newValue === false) {
        this.selectMatterType.record = {};
      } else {
        var filter = this.getFilter(this.matterTypeFilterKey);
        if (filter !== null) this.selectMatterType.record = {
          description: filter.settings.value
        };
      }
    },
    documentSetFilterFlag: function documentSetFilterFlag(newValue) {
      if (newValue === false) {
        this.selectDocumentSet.record = {};
      } else {
        var filter = this.getFilter(this.documentSetFilterKey);
        if (filter !== null) this.selectDocumentSet.record = {
          description: filter.settings.value
        };
      }
    },
    conveyancingStatus: function conveyancingStatus(newValue) {
      this.setConveyancingStatusFilter(newValue);
    }
  },
  methods: {
    modalOpened: function modalOpened() {
      this.setGeneralTab();
      this.$refs.customFilter.initialize(this.table);
      this.primeCommonFilters(); //Prime the DropDown filters

      this.roleFilterKey = this.getFilterName(this.roleFilterColumnName);
      this.roleFilter = this.getFilter(this.roleFilterKey);
      this.roleFilterFlag = this.roleFilter ? true : false;
      this.selectPartyRole.record = this.roleFilterFlag ? {
        description: this.roleFilter.settings.value
      } : {};
      this.branchFilterKey = this.getFilterName(this.branchFilterColumnName);
      this.branchFilter = this.getFilter(this.branchFilterKey);
      this.branchFilterFlag = this.branchFilter ? true : false;
      this.selectBranch.record = this.branchFilterFlag ? {
        description: this.branchFilter.settings.value
      } : {};
      this.matterTypeFilterKey = this.getFilterName(this.matterTypeFilterColumnName);
      this.matterTypeFilter = this.getFilter(this.matterTypeFilterKey);
      this.matterTypeFilterFlag = this.matterTypeFilter ? true : false;
      this.selectMatterType.record = this.matterTypeFilterFlag ? {
        description: this.matterTypeFilter.settings.value
      } : {};
      this.documentSetFilterKey = this.getFilterName(this.documentSetFilterColumnName);
      this.documentSetFilter = this.getFilter(this.documentSetFilterKey);
      this.documentSetFilterFlag = this.documentSetFilter ? true : false;
      this.selectDocumentSet.record = this.documentSetFilterFlag ? {
        description: this.documentSetFilter.settings.value
      } : {}; // Prime the Conveyancing Status Dropdown

      this.conveyancingStatusFilterKey = this.getFilterName(this.conveyancingStatusFilterColumnName);
      this.conveyancingStatusFilter = this.getFilter(this.conveyancingStatusFilterKey);
      var conveyancingStatusFilteredFlag = this.conveyancingStatusFilter ? true : false;

      if (conveyancingStatusFilteredFlag) {
        this.conveyancingStatus = this.conveyancingStatusFilter.settings.value;
      }
    },
    clearConveyancingStatus: function clearConveyancingStatus() {
      this.conveyancingStatus = null;
    },
    setConveyancingStatusFilter: function setConveyancingStatusFilter(value) {
      this.deleteFilter(this.conveyancingStatusFilterKey);

      if (value) {
        this.addFilter(this.conveyancingStatusFilterColumnName, this.conveyancingStatusFilterKey, value, value, 'Equal to');
      }

      this.table.setUserFilters();
      this.table.table.ajax.reload();
    },
    partyRoleSelected: function partyRoleSelected(id, description) {
      this.deleteFilter(this.roleFilterKey);
      this.addFilter(this.roleFilterColumnName, this.roleFilterKey, description);
      this.roleFilterFlag = true;
      this.reloadTable();
    },
    clearRoleFilter: function clearRoleFilter() {
      this.deleteFilter(this.roleFilterKey);
      this.roleFilterFlag = false;
      this.reloadTable();
    },
    branchSelected: function branchSelected(selectedRecord) {
      this.deleteFilter(this.branchFilterKey);
      this.addFilter(this.branchFilterColumnName, this.branchFilterKey, selectedRecord.description);
      this.branchFilterFlag = true;
      this.table.setUserFilters();
      this.table.table.ajax.reload();
    },
    clearBranchFilter: function clearBranchFilter() {
      this.deleteFilter(this.branchFilterKey);
      this.branchFilterFlag = false;
      this.reloadTable();
    },
    documentSetSelected: function documentSetSelected(selectedRecord) {
      this.deleteFilter(this.documentSetFilterKey);
      this.addFilter(this.documentSetFilterColumnName, this.documentSetFilterKey, selectedRecord.description);
      this.documentSetFilterFlag = true;
      this.reloadTable();
    },
    clearDocumentSetFilter: function clearDocumentSetFilter() {
      this.deleteFilter(this.documentSetFilterKey);
      this.documentSetFilterFlag = false;
      this.reloadTable();
    },
    matterTypeSelected: function matterTypeSelected(selectedRecord) {
      this.deleteFilter(this.matterTypeFilterKey);
      this.addFilter(this.matterTypeFilterColumnName, this.matterTypeFilterKey, selectedRecord.description);
      this.matterTypeFilterFlag = true;
      this.reloadTable();
    },
    clearMatterTypeFilter: function clearMatterTypeFilter() {
      this.deleteFilter(this.matterTypeFilterKey);
      this.matterTypeFilterFlag = false;
      this.reloadTable();
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/client/matters/MatterFilterForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/client/matters/MatterFilterForm.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterFilterForm_vue_vue_type_template_id_32f3f725___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterFilterForm.vue?vue&type=template&id=32f3f725& */ "./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=template&id=32f3f725&");
/* harmony import */ var _MatterFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterFilterForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterFilterForm_vue_vue_type_template_id_32f3f725___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterFilterForm_vue_vue_type_template_id_32f3f725___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/client/matters/MatterFilterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterFilterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=template&id=32f3f725&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=template&id=32f3f725& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterFilterForm_vue_vue_type_template_id_32f3f725___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterFilterForm_vue_vue_type_template_id_32f3f725___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterFilterForm_vue_vue_type_template_id_32f3f725___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterFilterForm.vue?vue&type=template&id=32f3f725& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=template&id=32f3f725&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=template&id=32f3f725&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/client/matters/MatterFilterForm.vue?vue&type=template&id=32f3f725& ***!
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
              staticStyle: { height: "66vh" },
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
                  _c(
                    "div",
                    { staticClass: "form-group row" },
                    [
                      _c("select-role", {
                        ref: _vm.id + "-select-role",
                        attrs: {
                          clearIcon: _vm.roleFilterFlag ? true : false,
                          clearIconCallback: "clearRoleFilter",
                          id: _vm.id + "-select-role",
                          formRef: _vm.id + "-select-role",
                          _class: "col-md-6",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("select-date-filter", {
                    ref: _vm.id + "-date-filter",
                    attrs: {
                      id: _vm.id + "-date-filter",
                      label: "Date Instructed",
                    },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("select-matter-type", {
                            ref: _vm.id + "-select-matter-type",
                            attrs: {
                              clearIcon: _vm.matterTypeFilterFlag
                                ? true
                                : false,
                              clearIconCallback: "clearMatterTypeFilter",
                              id: _vm.id + "-select-matter-type",
                              formRef: _vm.id + "-select-matter-type",
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
                          _c("select-document-set", {
                            ref: _vm.id + "-select-document-set",
                            attrs: {
                              clearIcon: _vm.documentSetFilterFlag
                                ? true
                                : false,
                              clearIconCallback: "clearDocumentSetFilter",
                              id: _vm.id + "-select-document-set",
                              formRef: _vm.id + "-select-document-set",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("select-branch", {
                            ref: _vm.id + "-select-branch",
                            attrs: {
                              clearIcon: _vm.branchFilterFlag ? true : false,
                              clearIconCallback: "clearBranchFilter",
                              id: _vm.id + "-select-branch",
                              formRef: _vm.id + "-select-branch",
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("label", [_vm._v("Conveyancing Status")]),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.conveyancingStatus,
                              expression: "conveyancingStatus",
                            },
                          ],
                          staticClass:
                            "fa fa-times-circle cp text-danger ml-1 clear-icon",
                          staticStyle: { "font-size": "large" },
                          attrs: { title: "Clear the existing filter" },
                          on: { click: _vm.clearConveyancingStatus },
                        }),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            title:
                              "Filter the Matters by their Conveyancing status",
                            options: _vm.conveyancingStatusOptions,
                            clearable: false,
                            searchable: false,
                            reduce: function (conveyancingStatusOptions) {
                              return conveyancingStatusOptions.value
                            },
                          },
                          model: {
                            value: _vm.conveyancingStatus,
                            callback: function ($$v) {
                              _vm.conveyancingStatus = $$v
                            },
                            expression: "conveyancingStatus",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
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
                        "<h4>Custom SQL Filter</h4>\n                    <p>A valid SQL where clause to filter the Matters</p>\n                    <p><strong>Example:</strong></p>\n                    <p>Matter.ClaimAmount > 1000</p>",
                      popOverContainer: "#" + _vm.id,
                      lookupLibraryFlag: true,
                      lookupLibraryCategory: "Custom string to filter Matters",
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
                  staticClass: "btn btn-secondary form-button mr-2",
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
        _vm._v("Filter Matters"),
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