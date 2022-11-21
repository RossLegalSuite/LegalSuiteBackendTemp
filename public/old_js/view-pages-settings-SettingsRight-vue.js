"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-settings-SettingsRight-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SettingsRight.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SettingsRight.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _methods;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
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
  components: {
    SetupCompany: function SetupCompany() {
      return __webpack_require__.e(/*! import() */ "view-pages-settings-SetupCompany-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SetupCompany */ "./resources/js/pages/settings/SetupCompany.vue"));
    },
    SetupSystemTemplates: function SetupSystemTemplates() {
      return __webpack_require__.e(/*! import() */ "view-pages-settings-SetupSystemTemplates-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SetupSystemTemplates */ "./resources/js/pages/settings/SetupSystemTemplates.vue"));
    },
    SetupSystemComponents: function SetupSystemComponents() {
      return __webpack_require__.e(/*! import() */ "view-pages-settings-SetupSystemComponents-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SetupSystemComponents */ "./resources/js/pages/settings/SetupSystemComponents.vue"));
    },
    SetupClientReports: function SetupClientReports() {
      return __webpack_require__.e(/*! import() */ "view-pages-settings-SetupClientReports-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SetupClientReports */ "./resources/js/pages/settings/SetupClientReports.vue"));
    },
    SetupClientMatters: function SetupClientMatters() {
      return __webpack_require__.e(/*! import() */ "view-pages-settings-SetupClientMatters-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SetupClientMatters */ "./resources/js/pages/settings/SetupClientMatters.vue"));
    },
    SetupClientReportSnippets: function SetupClientReportSnippets() {
      return __webpack_require__.e(/*! import() */ "view-pages-settings-SetupClientReportSnippets-vue").then(__webpack_require__.bind(__webpack_require__, /*! ./SetupClientReportSnippets */ "./resources/js/pages/settings/SetupClientReportSnippets.vue"));
    }
  },
  data: function data() {
    return {
      activePage: null,
      table: null,
      templatesTable: null,
      componentsTable: null,
      clientReportsTable: null,
      clientMattersTable: null,
      clientReportSnippetsTable: null
    };
  },
  watch: {
    activePage: function activePage(newValue) {
      var _this = this;

      $('#settings-right .popover-icon').popover();

      if (newValue === "Company") {
        var setupCompany = this.$refs['setup-company'];
        setupCompany.record = _objectSpread(_objectSpread({}, root.control), root.lolSettings);
        setupCompany.activeTab = 'LetterHead'; //console.log("settingsRight - setupCompany.record",setupCompany.record);
      } else if (newValue === "Templates") {
        this.templatesTable = this.$refs['setup-system-templates'].$refs['settings-system-templates-table'];
        setTimeout(function () {
          if (_this.templatesTable.table) {
            _this.templatesTable.table.columns.adjust;
          } else {
            _this.templatesTable.selectTableFlag = false;
            _this.templatesTable.tableOptions = {
              tableBottom: 80
            };

            _this.templatesTable.loadDataTable(_this.adjustTemplatesTableColumns);
          }
        }, 100);
      } else if (newValue === "Components") {
        this.componentsTable = this.$refs['setup-system-components'].$refs['settings-system-components-table'];
        setTimeout(function () {
          if (_this.componentsTable.table) {
            _this.componentsTable.table.columns.adjust;
          } else {
            _this.componentsTable.tableOptions = {
              tableBottom: 80
            };

            _this.componentsTable.loadDataTable(_this.adjustComponentsTableColumns);
          }
        }, 100);
      } else if (newValue === "Client Reports") {
        this.clientReportsTable = this.$refs['setup-client-reports'].$refs['settings-client-reports-table'];
        setTimeout(function () {
          if (_this.clientReportsTable.table) {
            _this.clientReportsTable.table.columns.adjust;
          } else {
            _this.clientReportsTable.actionColumnWidth = 10;
            _this.clientReportsTable.tableOptions = {
              tableBottom: 80
            };

            _this.clientReportsTable.loadDataTable(_this.adjustClientReportsTableColumns);
          }
        }, 100);
      } else if (newValue === "Client Matters") {
        this.clientMattersTable = this.$refs['setup-client-matters'].$refs['settings-client-matters-table'];
        setTimeout(function () {
          if (_this.clientMattersTable.table) {
            _this.clientMattersTable.table.columns.adjust;
          } else {
            _this.clientMattersTable.actionColumnWidth = 10;
            _this.clientMattersTable.tableOptions = {
              tableBottom: 80
            };

            _this.clientMattersTable.loadDataTable(_this.adjustClientMattersTableColumns);
          }
        }, 100);
      } else if (newValue === "Snippets") {
        this.setupSnippets = this.$refs['setup-snippets'];
        this.setupSnippets.activeTab = 'Matters';
        this.clientMatterSnippetsTable = this.setupSnippets.$refs['settings-client-matter-snippets-table'];
        setTimeout(function () {
          if (_this.clientMatterSnippetsTable.table) {
            _this.clientMatterSnippetsTable.table.columns.adjust;
          } else {
            _this.clientMatterSnippetsTable.tableName = 'lolclientmattersnippet';
            _this.clientMatterSnippetsTable.url = "/lolclientmattersnippet/get";
            _this.clientMatterSnippetsTable.actionColumnWidth = 10;
            _this.clientMatterSnippetsTable.tableOptions = {
              tableBottom: 80
            };

            _this.clientMatterSnippetsTable.loadDataTable(_this.adjustClientMatterSnippetsTableColumns);
          }
        }, 100);
        this.clientReportSnippetsTable = this.setupSnippets.$refs['settings-client-report-snippets-table'];
        setTimeout(function () {
          if (_this.clientReportSnippetsTable.table) {
            _this.clientReportSnippetsTable.table.columns.adjust;
          } else {
            _this.clientReportSnippetsTable.tableName = 'lolclientreportsnippet';
            _this.clientReportSnippetsTable.url = "/lolclientreportsnippet/get";
            _this.clientReportSnippetsTable.actionColumnWidth = 10;
            _this.clientReportSnippetsTable.tableOptions = {
              tableBottom: 80
            };

            _this.clientReportSnippetsTable.loadDataTable(_this.adjustClientReportSnippetsTableColumns);
          }
        }, 500);
      }
    }
  },
  methods: (_methods = {
    adjustTemplatesTableColumns: function adjustTemplatesTableColumns() {
      this.templatesTable.table.columns.adjust;
    },
    adjustComponentsTableColumns: function adjustComponentsTableColumns() {
      this.componentsTable.table.columns.adjust;
    },
    adjustClientReportsTableColumns: function adjustClientReportsTableColumns() {
      this.clientReportsTable.table.columns.adjust;
    }
  }, _defineProperty(_methods, "adjustClientReportsTableColumns", function adjustClientReportsTableColumns() {
    this.clientReportsTable.table.columns.adjust;
  }), _defineProperty(_methods, "adjustClientMattersTableColumns", function adjustClientMattersTableColumns() {
    this.clientMattersTable.table.columns.adjust;
  }), _defineProperty(_methods, "adjustClientReportSnippetsTableColumns", function adjustClientReportSnippetsTableColumns() {
    this.clientReportSnippetsTable.table.columns.adjust;
  }), _defineProperty(_methods, "adjustClientMatterSnippetsTableColumns", function adjustClientMatterSnippetsTableColumns() {
    this.clientMatterSnippetsTable.table.columns.adjust;
  }), _methods)
});

/***/ }),

/***/ "./resources/js/pages/settings/SettingsRight.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/settings/SettingsRight.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsRight_vue_vue_type_template_id_7f93c0d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsRight.vue?vue&type=template&id=7f93c0d6& */ "./resources/js/pages/settings/SettingsRight.vue?vue&type=template&id=7f93c0d6&");
/* harmony import */ var _SettingsRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsRight.vue?vue&type=script&lang=js& */ "./resources/js/pages/settings/SettingsRight.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SettingsRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsRight_vue_vue_type_template_id_7f93c0d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _SettingsRight_vue_vue_type_template_id_7f93c0d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/settings/SettingsRight.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/settings/SettingsRight.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/settings/SettingsRight.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsRight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SettingsRight.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsRight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/settings/SettingsRight.vue?vue&type=template&id=7f93c0d6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/settings/SettingsRight.vue?vue&type=template&id=7f93c0d6& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsRight_vue_vue_type_template_id_7f93c0d6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsRight_vue_vue_type_template_id_7f93c0d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsRight_vue_vue_type_template_id_7f93c0d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsRight.vue?vue&type=template&id=7f93c0d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SettingsRight.vue?vue&type=template&id=7f93c0d6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SettingsRight.vue?vue&type=template&id=7f93c0d6&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/SettingsRight.vue?vue&type=template&id=7f93c0d6& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "settings-right" } },
    [
      _c("setup-company", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.activePage === "Company",
            expression: "activePage === 'Company'",
          },
        ],
        ref: "setup-company",
      }),
      _vm._v(" "),
      _c("setup-system-templates", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.activePage === "Templates",
            expression: "activePage === 'Templates'",
          },
        ],
        ref: "setup-system-templates",
      }),
      _vm._v(" "),
      _c("setup-system-components", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.activePage === "Components",
            expression: "activePage === 'Components'",
          },
        ],
        ref: "setup-system-components",
      }),
      _vm._v(" "),
      _c("setup-client-reports", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.activePage === "Client Reports",
            expression: "activePage === 'Client Reports'",
          },
        ],
        ref: "setup-client-reports",
      }),
      _vm._v(" "),
      _c("setup-client-report-snippets", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.activePage === "Snippets",
            expression: "activePage === 'Snippets'",
          },
        ],
        ref: "setup-snippets",
      }),
      _vm._v(" "),
      _c("setup-client-matters", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.activePage === "Client Matters",
            expression: "activePage === 'Client Matters'",
          },
        ],
        ref: "setup-client-matters",
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);