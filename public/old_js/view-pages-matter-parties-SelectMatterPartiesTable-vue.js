"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["view-pages-matter-parties-SelectMatterPartiesTable-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_components_tables_table_template__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    SelectPartyRole: function SelectPartyRole() {
      return __webpack_require__.e(/*! import() */ "view-pages-parties-SelectPartyRole-vue").then(__webpack_require__.bind(__webpack_require__, /*! @pages/parties/SelectPartyRole */ "./resources/js/pages/parties/SelectPartyRole.vue"));
    }
  },
  data: function data() {
    return {
      tableFilters: []
    };
  },
  created: function created() {
    this.url = "/matter_parties/get";
    this.route = "matter_parties";
    this.title = 'Parties';
    this.plural = 'Parties';
    this.singular = 'Party';
  },
  methods: {
    partyRoleSelected: function partyRoleSelected(id, description, code) {
      this.tableFilters = [];
      removeTableFilter(this.tableId);
      var targets = this.tagTableFlag ? 1 : 0;
      this.tableColumn = this.columnDefs[targets + 3];
      var tableFilter = {};
      tableFilter.index = 0;
      tableFilter.targets = targets + 3;
      tableFilter.value = description;
      tableFilter.title = this.tableColumn.title;
      tableFilter.join = "or", tableFilter.name = this.tableColumn.filterColumnName ? this.tableColumn.filterColumnName : this.tableColumn.name;
      tableFilter.calculatedColumn = this.tableColumn.calculatedColumn ? this.tableColumn.calculatedColumn : false;
      tableFilter.filterType = this.tableColumn.filterType ? this.tableColumn.filterType : 'String';
      tableFilter.filterTitle = this.tableColumn.filterTitle ? this.tableColumn.filterTitle : this.tableColumn.title;
      this.tableFilters.push(tableFilter);
      setTableFilter(this.tableId, this.tableFilters);
      this.loadDataTable();
    },
    selectRecord: function selectRecord(id) {
      var _this = this;

      if (this.tagTableFlag) {
        this.$parent.hide();
        this.$parent.$parent.matterPartiesSelected([id]);
      } else {
        axios.post('/matter_parties/get', {
          recordid: id
        }).then(function (response) {
          if (typeof _this.$parent.$parent.matterPartySelected === 'function') {
            _this.$parent.$parent.matterPartySelected(response.data.data[0]);
          }
        })["finally"](function () {
          _this.$parent.hide();
        });
      }
    },
    defineTableColDefs: function defineTableColDefs() {
      var targets = this.tagTableFlag ? 1 : 0;
      var tableColumnDefs = [{
        title: "Matter",
        name: "matters.fileRef",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Matter',
        data: null,
        orderable: false,
        targets: targets + 1,
        render: function render(data) {
          return htmlDecode(data.matter);
        }
      }, {
        title: "Party",
        name: "parties.name",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'Party',
        data: null,
        targets: targets + 2,
        render: function render(data) {
          return htmlDecode(data.name);
        }
      }, {
        title: "Role",
        name: "party_roles.description",
        filterType: 'Lookup',
        filterControl: 'Lookup',
        filterTable: 'PartyRole',
        data: null,
        targets: targets + 3,
        render: function render(data) {
          return data.role;
        }
      }];
      return tableColumnDefs;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectMatterPartiesTable_vue_vue_type_template_id_e737feb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectMatterPartiesTable.vue?vue&type=template&id=e737feb6& */ "./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=template&id=e737feb6&");
/* harmony import */ var _SelectMatterPartiesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectMatterPartiesTable.vue?vue&type=script&lang=js& */ "./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectMatterPartiesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectMatterPartiesTable_vue_vue_type_template_id_e737feb6___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectMatterPartiesTable_vue_vue_type_template_id_e737feb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/matter-parties/SelectMatterPartiesTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatterPartiesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectMatterPartiesTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatterPartiesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=template&id=e737feb6&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=template&id=e737feb6& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatterPartiesTable_vue_vue_type_template_id_e737feb6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatterPartiesTable_vue_vue_type_template_id_e737feb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectMatterPartiesTable_vue_vue_type_template_id_e737feb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectMatterPartiesTable.vue?vue&type=template&id=e737feb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=template&id=e737feb6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=template&id=e737feb6&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/matter-parties/SelectMatterPartiesTable.vue?vue&type=template&id=e737feb6& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "d-flex justify-content-between table-functions-row" },
      [
        _c("global-search"),
        _vm._v(" "),
        _c("select-party-role", {
          ref: _vm.tableId + "-select-party-role",
          attrs: {
            id: _vm.tableId + "-select-party-role",
            formRef: _vm.tableId + "-select-party-role",
            _class: "table-filter-dropdown",
            showLabel: false,
            filtering: true,
          },
        }),
      ],
      1
    ),
    _vm._v(" "),
    _c("table", {
      staticClass: "table bordered",
      staticStyle: { width: "100%" },
      attrs: { id: _vm.tableId },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);