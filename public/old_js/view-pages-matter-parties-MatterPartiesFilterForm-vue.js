"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matter-parties-MatterPartiesFilterForm-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_modals_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"], _components_filters_filter_methods__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    SelectRole: function SelectRole() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectPartyRole-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectPartyRole */ "./resources/js/pages/parties/SelectPartyRole.vue"));
    },
    SelectMatter: function SelectMatter() {
      return __webpack_require__.e(/*! import() */ "view-pages-matters-SelectMatter-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/matters/SelectMatter */ "./resources/js/pages/matters/SelectMatter.vue"));
    },
    SelectParty: function SelectParty() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectParty-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectParty */ "./resources/js/pages/parties/SelectParty.vue"));
    }
  },
  data: function data() {
    return {
      table: null,
      activeTab: 'General',
      partyFilterFlag: false,
      partyFilterColumnName: 'party.matterprefix',
      matterFilterFlag: false,
      matterFilterColumnName: 'matter.fileref',
      roleFilterFlag: false,
      roleFilterColumnName: 'role.description',
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
    partyFilterFlag: function partyFilterFlag(newValue) {
      if (newValue === false) {
        this.selectParty.record = '';
      } else {
        var filter = this.getFilter(this.partyFilterKey);
        if (filter !== null) this.selectParty.partyName = filter.settings.value;
      }
    },
    matterFilterFlag: function matterFilterFlag(newValue) {
      if (newValue === false) {
        this.selectMatter.matter = {
          fileref: '',
          description: ''
        };
      } else {
        var filter = this.getFilter(this.matterFilterKey);
        if (filter !== null) this.selectMatter.matter = {
          fileref: filter.settings.value,
          description: ''
        };
      }
    },
    roleFilterFlag: function roleFilterFlag(newValue) {
      if (newValue === false) {
        this.selectPartyRole.record = {};
      } else {
        var filter = this.getFilter(this.roleFilterKey);
        if (filter !== null) this.selectPartyRole.record = {
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
      this.setGeneralTab();
      this.$refs.customFilter.initialize(this.table);
      this.primeCommonFilters();
      this.partyFilterKey = this.getFilterName(this.partyFilterColumnName);
      this.partyFilter = this.getFilter(this.partyFilterKey);
      this.partyFilterFlag = this.partyFilter ? true : false;
      this.selectParty.partyName = this.partyFilterFlag ? this.partyFilter.settings.value : '';
      this.matterFilterKey = this.getFilterName(this.matterFilterColumnName);
      this.matterFilter = this.getFilter(this.matterFilterKey);
      this.matterFilterFlag = this.matterFilter ? true : false;
      this.selectMatter.matter = this.matterFilterFlag ? {
        fileref: this.matterFilter.settings.value,
        description: ''
      } : {
        fileref: '',
        description: ''
      };
      this.roleFilterKey = this.getFilterName(this.roleFilterColumnName);
      this.roleFilter = this.getFilter(this.roleFilterKey);
      this.roleFilterFlag = this.roleFilter ? true : false;
      this.selectPartyRole.record = this.roleFilterFlag ? {
        description: this.roleFilter.settings.value
      } : {};
    },
    partySelected: function partySelected(selectedRecord) {
      this.deleteFilter(this.partyFilterKey);
      this.addFilter(this.partyFilterColumnName, this.partyFilterKey, htmlDecode(selectedRecord.matterprefix));
      this.partyFilterFlag = true;
      this.reloadTable();
    },
    clearPartyFilter: function clearPartyFilter() {
      this.deleteFilter(this.partyFilterKey);
      this.partyFilterFlag = false;
      this.reloadTable();
    },
    matterSelected: function matterSelected(selectedRecord) {
      this.deleteFilter(this.matterFilterKey);
      this.addFilter(this.matterFilterColumnName, this.matterFilterKey, htmlDecode(selectedRecord.fileref));
      this.matterFilterFlag = true;
      this.reloadTable();
    },
    clearMatterFilter: function clearMatterFilter() {
      this.deleteFilter(this.matterFilterKey);
      this.matterFilterFlag = false;
      this.reloadTable();
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
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatterPartiesFilterForm_vue_vue_type_template_id_32e2b131___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatterPartiesFilterForm.vue?vue&type=template&id=32e2b131& */ "./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=template&id=32e2b131&");
/* harmony import */ var _MatterPartiesFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatterPartiesFilterForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatterPartiesFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatterPartiesFilterForm_vue_vue_type_template_id_32e2b131___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatterPartiesFilterForm_vue_vue_type_template_id_32e2b131___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matter-parties/MatterPartiesFilterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterPartiesFilterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesFilterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=template&id=32e2b131&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=template&id=32e2b131& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesFilterForm_vue_vue_type_template_id_32e2b131___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesFilterForm_vue_vue_type_template_id_32e2b131___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatterPartiesFilterForm_vue_vue_type_template_id_32e2b131___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatterPartiesFilterForm.vue?vue&type=template&id=32e2b131& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=template&id=32e2b131&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=template&id=32e2b131&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/MatterPartiesFilterForm.vue?vue&type=template&id=32e2b131& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group row" },
                        [
                          _c("select-party", {
                            ref: _vm.id + "-select-party",
                            attrs: {
                              clearIcon: _vm.partyFilterFlag ? true : false,
                              clearIconCallback: "clearPartyFilter",
                              id: _vm.id + "-select-party",
                              formRef: _vm.id + "-select-party",
                              label: "Party",
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
                          _c("select-matter", {
                            ref: _vm.id + "-select-matter",
                            attrs: {
                              clearIcon: _vm.matterFilterFlag ? true : false,
                              clearIconCallback: "clearMatterFilter",
                              id: _vm.id + "-select-matter",
                              formRef: _vm.id + "-select-matter",
                              label: "Matter",
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
                        "<h4>Custom SQL Filter</h4>\n                    <p>A valid SQL <em>where clause</em> to filter the Matter Parties</p>\n                    <p><strong>Examples:</strong></p>\n                    <p>MatParty.Reference LIKE '%abcdef%'</p>\n                    <p>MatParty.RoleID = 2 OR MatParty.RoleID = 3</p>",
                      popOverContainer: "#" + _vm.id,
                      lookupLibraryFlag: true,
                      lookupLibraryCategory:
                        "Custom string to filter the Matter Parties",
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
        _vm._v("Filter Matter Parties"),
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